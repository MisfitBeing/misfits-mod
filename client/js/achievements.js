import { global } from "./global.js"
import { util } from "/js/util.js"

const rewardManager = new class {
	constructor() {
		// Special keys for storage to help with identification
		this._storageKeyAchievement = "ACH3:";
		this._storageKeyStat = "STT3:";

		// An empty array containing values for statistics. They get loaded properly later
		this._statistics = [...Array(11)].fill(0); // [player kills, deaths, boss kills, polygon kills, best score, best time, total score, total time] crasher kills, basic deaths, director upgrades

		// Load statistics and achievements, then update the visual menu dom display
		fetch("./json/achievements.json").then(async json => {
			this._achievements = await json.json();
			for (let name in this._achievements) this._achievements[name].unlocked = false;
			this.loadFromLocalStorage();
			this.updateDisplay();
		});
	}

	// If an achievement is incomplete return a formatted precentage of progress of the achievement, or return an empty string if it is complete
	getNamedPrecentage(stat, goal, type) {
		let precentage = this._statistics[stat] / goal
		if (precentage >= 1) return "";
		let func = type ? util._formatTime : util._handleLargeNumber;
		return (` [${func(this._statistics[stat] || 0, true)}/${func(goal, true)} ${Math.floor(precentage * 100)}%]`).toUpperCase();
	}

	// Increases (or sets if specified) a statistic by a specific value, and then save it to localstorage
	increaseStatistic(id, val, set = false) {
		if (this._statistics[id] == null) throw new TypeError(id + " is not a valid statistic id.");
		if (isNaN(val)) throw new TypeError(val + " is not a valid integer.");
		this._statistics[id] = set ? val : this._statistics[id] + val;
		let current = this._statistics[id]
		localStorage.setItem(this.enc(this._storageKeyStat + `${id}`), btoa(this._statistics[id]));
	}

	// Encode safely into localstorage, as a method of protection against scripters
	enc(str) {
		// depricated depricated blh
		return btoa(unescape(encodeURIComponent(str)));
	}

	// Decode from localstorage, as a method of protection against scripters
	dec(str) {
		try { // I hate this...
			return decodeURIComponent(escape(atob(str)));
		} catch (error) {
			return ""
		}
	}

	// Get the tier color based the achievements tier, and if its unlocked or not
	getTierColor(tier) {
		switch (tier) {
			case false: return "#9F9F9F"; // Locked
			case 1: return "#8abb44";
			case 2: return "#44bbb0";
			case 3: return "#7544bb";
			case 4: return "#bb444f";
			case 5: return "#ffffff";
			default: throw new TypeError(tier + " is not a known tier type!");
		}
	}

	// Load all statistics and achievements from localstorage to share between sessions
	loadFromLocalStorage() {
		for (let instance of Object.keys(localStorage).filter(k => this.dec(k).includes(this._storageKeyAchievement))) {
			instance = this.dec(instance).slice(5);
			if (this._achievements[instance] == null) console.warn(instance + " is not a known achievement.");
			else this._achievements[instance].unlocked = true;
		}
		for (let instance of Object.keys(localStorage).filter(k => this.dec(k).includes(this._storageKeyStat))) {
			let id = parseFloat(this.dec(instance).slice(5));
			if (this._statistics[id] == null) console.warn(id + " is not a known statistic.");
			else this._statistics[id] = parseFloat(atob(localStorage.getItem(instance)));
		}
	}

	// Unlock an achievement by its id, and save it to localstorage
	unlockAchievement(id) {
		if (!this._achievements) return;
		if (this._achievements[id] == null) throw new TypeError(id + " is not a valid achievement.");
		else if (!this._achievements[id].unlocked) {
			this._achievements[id].unlocked = true;
			// Lol scripters gotta deal with ran int and waste time L bozo
			localStorage.setItem(this.enc(this._storageKeyAchievement + `${id}`), (100 * Math.random).toFixed(0));
			global._sendMessageToClient("Achievement complete: " + this._achievements[id].title, "guiblack");
			if (Object.keys(this._achievements).map(key => this._achievements[key]).filter(a => !a.unlocked).sort((a, b) => a.tier - b.tier).length === 1) this.unlockAchievement("the_king");
		}
	}

	// By the achievement id, see if its unlocked or not
	isAchievementUnlocked(id) {
		if (!this._achievements) return false;
		if (this._achievements[id] == null) throw new TypeError(id + " is not a valid achievement.");
		else return this._achievements[id].unlocked
	}

	// Update the dom holder for achievements and statistics
	updateDisplay(element = document.getElementById("achievementsDisplay"), elementTwo = document.getElementById("achievementsStatsTable")) {
		element.innerHTML = '';
		let i = 0;

		// Its split up like this so we can sort by tier, but also push unlocked to the top
		let arrayOfAll = Object.keys(this._achievements).map(key => this._achievements[key]);
		let arrayOfUnlocked = arrayOfAll.filter(a => a.unlocked).sort((a, b) => a.tier - b.tier);
		let arrayOfLocked = arrayOfAll.filter(a => !a.unlocked).sort((a, b) => a.tier - b.tier);

		// Visually display the achievements
		for (let instance of [...arrayOfUnlocked, ...arrayOfLocked]) {
			let holder = document.createElement('div');
			let title = document.createElement("h1");
			let description = document.createElement("span");

			// Title and concat precentage of progress
			title.innerText = `${instance.title}${instance.precentageData ? this.getNamedPrecentage(...instance.precentageData) : ""}`;
			description.innerText = instance.description;

			holder.classList.add('achievementsItem');
			holder.classList.add('autoBorder');
			holder.appendChild(title);
			holder.appendChild(description);

			if (instance.unlocked) i++;
			holder.style.backgroundColor = this.getTierColor(instance.unlocked ? instance.tier : false);

			element.appendChild(holder);
		}

		let precentage = Math.floor(i / Object.keys(this._achievements).length * 100)

		document.getElementById("achievementsHeader").innerText += (` ${precentage}% ${precentage === 100 ? "Completed" : ` Complete [${i}/${Object.keys(this._achievements).length}]`}`);

		// Same, but for statistics
		let arr = this._statistics;
		elementTwo.innerHTML = (`<tr> <td><b>Kills</b>: ${arr[0]}</td> <td><b>Deaths</b>: ${arr[1]}</td> </tr> <tr> <td><b>Boss Kills</b>: ${arr[2]}</td> <td><b>Polygon Kills</b>: ${arr[3]}</td> </tr> <tr> <td><b>Best Score</b>: ${util._handleLargeNumber(Math.round(arr[4]))}</td> <td><b>Best Time</b>: ${util._formatTime(Math.round(arr[5]), true)}</td> </tr> <tr> <td><b>Total Score</b>: ${util._handleLargeNumber(Math.round(arr[6]))}</td> <td><b>Total Time</b>: ${util._formatTime(Math.round(arr[7]), true)}</td> </tr> </table>`);

		if (this._achievements.the_king.unlocked) {
			let div = document.createElement("div");
			let link = document.createElement("a");

			div.classList.add("bottomHolder");

			link.style.background = "#2bab2f";
			link.style.width = "100px;";

			link.href = "javascript:void(0)";
			link.onclick = this.openThankYou;

			link.innerText = "Thank you";

			div.appendChild(link);
			document.getElementById("achievementsHeader").appendChild(div);
		};
	}

	// <3
	openThankYou() {
		document.getElementById("achievementsClose").click();
		const popup = document.createElement("div")
		popup.classList.add("achievementsHolder")
		popup.style.display = "block";
		const h1 = document.createElement("h1");
		h1.textContent = "Thank you, King.";
		popup.appendChild(h1)
		const p = document.createElement("p");
		p.textContent = "You've made it to the very end of the game. As I write this, I cannot imagine anyone collecting every single achievement in the game. Yet here you are, unwavering and strong, having to go through countless hours and undoubtable hardships, you have finally made it. All for what? Is there an intense passion for the game within you? Are you looking for recognition? Or, do you not know why?\n\nThere are many things to experience in life, even if most are mundane. Dont get so lost in your own little world such that reality fades away. Thank you for your love and dedication. - Drako Hyena";
		popup.appendChild(p)
		const button = document.createElement("a")
		button.innerHTML = "Close"
		button.style.background = "#2bab2f";
		button.style.width = "100px;";
		button.href = "javascript:void(0)";
		button.onclick = function(){
			popup.remove()
		};
		popup.appendChild(button)
		document.body.appendChild(popup)
	}
};
export { rewardManager }
