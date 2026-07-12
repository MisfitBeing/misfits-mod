import { global } from "./global.js";
import { _startGame } from "./app.js";
import { multiplayer } from "./multiplayer.js";
import { openModBrowser } from "./mainmenu.js";
import { util } from "./util.js";

/*
== NOTE ==
using .click() on an element such as a filter element will not automatically refresh the ui
*/

const closeButton = document.getElementById("gameJoinClose");
closeButton.onclick = openJoinScreen
function openJoinScreen(close) {
	let mb = document.getElementById("gameJoinScreen")
	if (close === true || mb.style.zIndex == "101") {
		mb.style.opacity = 0;
		setTimeout(()=>{
			mb.style.zIndex = "-101";
		}, 200)
	} else if(!window.gameLaunched){
		mb.style.zIndex = "101";
		mb.style.opacity = 1;
	}
}

const roomGalleryTemplate = document.getElementById("joinEntryGalleryTemplate")
roomGalleryTemplate.style.display = "none";

const roomListTemplate = document.getElementById("joinEntryListTemplate")
roomListTemplate.style.display = "none";

const modListTemplate = document.getElementById("modListTemplate")
modListTemplate.children[1].style.display = "none";
modListTemplate.style.display = "none";

const roomInfoPlayerCount = document.getElementById("roomInfoPlayerAmount")
const roomInfoGamemode = document.getElementById("roomInfoGamemode")
const roomInfoGamemodeImage = document.getElementById("roomInfoGamemodeImage")
const roomInfoGamemodeDescription = document.getElementById("roomInfoGamemodeDescription")
const roomInfoSettingsMaxPlayerInput = document.getElementById("roomInfoSettingsMaxPlayerInput")
const roomInfoSettingsMaxBotsInput = document.getElementById("roomInfoSettingsMaxBotsInput")


let playerCount = 0;
let maxPlayerCount = 80;
let gamemodeName = "";
let gamemodeImage = "";
let gamemodeDescription = "";
let selectedGamemode = "";
let selectedRoomId = "";
let maxPlayers = 80;
let maxBots = 0;
resetRoomInfo()
function resetRoomInfo() {
	gamemodeName = "Welcome!"
	gamemodeImage = ""
	gamemodeDescription = "Select a room to join other players or click create and host a room for others to join."
}
function updateRoomInfo() {
	roomInfoPlayerCount.innerText = `${playerCount}${maxPlayerCount!==99?`/${maxPlayerCount}`:""}`;
	roomInfoGamemode.innerText = gamemodeName;
	if (gamemodeImage === "") {
		roomInfoGamemodeImage.style.display = "none";
	} else {
		roomInfoGamemodeImage.style.display = "block";
	}
	roomInfoGamemodeImage.src = gamemodeImage;
	roomInfoGamemodeDescription.innerText = gamemodeDescription
	if(maxPlayers < 1){
		roomInfoSettingsMaxPlayerInput.value = 1;
		maxPlayers = 1;
	}else if(maxPlayers > 99){
		roomInfoSettingsMaxBotsInput.value = 99;
		maxPlayers = 99;
	}
	if(maxBots < 0){
		roomInfoSettingsMaxBotsInput.value = 0;
		maxBots = 0;
	}
}

roomInfoSettingsMaxPlayerInput.oninput = function(){
	maxPlayers = Number(roomInfoSettingsMaxPlayerInput.value)
}
roomInfoSettingsMaxPlayerInput.value = maxPlayers;

roomInfoSettingsMaxBotsInput.oninput = function(){
	maxBots = Number(roomInfoSettingsMaxBotsInput.value)
}
roomInfoSettingsMaxBotsInput.value = maxBots;

const nameInput = document.getElementById("nameInput")
nameInput.oninput = function () {
	util._submitToLocalStorage("nameInput")
}

const tokenInput = document.getElementById("tokenInput")
tokenInput.oninput = function () {
	util._submitToLocalStorage("tokenInput")
}

const joinButton = document.getElementById("joinActionButton")
joinButton.onclick = function () {
	if (window.creatingRoom === false && selectedRoomId === "") {
		return;
	}
	openModBrowser(true);
	openJoinScreen(true);
	if (global._disconnected && global._gameStart) return;
	window.gameLaunched = true;
	_startGame(selectedGamemode, selectedRoomId, maxPlayers, maxBots);
}
document.addEventListener("keydown", function eh (e) {
	if (global._disconnected && global._gameStart) return;
	let key = e.which || e.keyCode;
	if (document.getElementById("gameJoinScreen").style.zIndex !== "101") return;
    this.removeEventListener("keydown", eh)
	if (!global._disableEnter && key === global.KEY_ENTER && !global._gameStart) joinButton.click();
})


let createFilter = "join";
const joinFilter = document.getElementById("joinFilter")
const hostFilter = document.getElementById("hostFilter")
function createFilterClick(e) {
	if (typeof this === "string") createFilter = this;
	if (createFilter === "host") {// if we clicked join
		joinFilter.classList.remove("joinSearchButtonUnselected")
		joinFilter.classList.add("joinSearchButtonSelected")
		hostFilter.classList.remove("joinSearchButtonSelected")
		hostFilter.classList.add("joinSearchButtonUnselected")
		createFilter = "join"
		window.creatingRoom = false;
		if (e.isTrusted === false) return;
		clearGamemodes()
		clearRooms()
		showRooms()
	} else { // if we clicked host
		hostFilter.classList.remove("joinSearchButtonUnselected")
		hostFilter.classList.add("joinSearchButtonSelected")
		joinFilter.classList.remove("joinSearchButtonSelected")
		joinFilter.classList.add("joinSearchButtonUnselected")
		createFilter = "host"
		window.creatingRoom = true;
		if (e.isTrusted === false) return;
		clearGamemodes()
		clearRooms()
		showGamemodes()
	}
}
joinFilter.onclick = createFilterClick.bind("host");
hostFilter.onclick = createFilterClick.bind("join");

let roomFilter = "gallery"
const galleryFilter = document.getElementById("galleryFilter")
const listFilter = document.getElementById("listFilter")
function roomFilterClick(e) {
	if (typeof this === "string") roomFilter = this;
	if (roomFilter === "list") {
		galleryFilter.classList.remove("joinSearchButtonUnselected")
		galleryFilter.classList.add("joinSearchButtonSelected")
		listFilter.classList.remove("joinSearchButtonSelected")
		listFilter.classList.add("joinSearchButtonUnselected")
		roomFilter = "gallery"
		localStorage.setItem("roomFilter", "gallery")
	} else {
		listFilter.classList.remove("joinSearchButtonUnselected")
		listFilter.classList.add("joinSearchButtonSelected")
		galleryFilter.classList.remove("joinSearchButtonSelected")
		galleryFilter.classList.add("joinSearchButtonUnselected")
		roomFilter = "list"
		localStorage.setItem("roomFilter", "list")
	}
	if (e.isTrusted === false) return;
	if (createFilter === "host") {
		clearGamemodes()
		showGamemodes()
	} else if (createFilter === "join") {
		clearRooms()
		showRooms()
	}
}
galleryFilter.onclick = roomFilterClick.bind("list");
listFilter.onclick = roomFilterClick.bind("gallery");

let defaultGamemodes = [],
      day = new Date();
if (day.getDay() === 1) defaultGamemodes = [ // Monday 
	{
		name: "Free For All",
		image: "/resources/gamemodes/placeholder.png",
		description: "Everyone for themselves!",
		players: 0,
		code: "ffa.js"
	},
	{
		name: "Survival FFA",
		image: "/resources/gamemodes/placeholder.png",
		description: "A free for all where you can't automatically level up; you gotta grind to the top like the OG diep days.",
		players: 0,
		code: "srvivl.js"
	},
	{
		name: "Open TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight in an open world with the assistance of allies!",
		players: 0,
		code: "tdm.js"
	},
	{
		name: "Survival TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "A team mode where you can't automatically level up; you gotta grind to the top like the OG diep days.",
		players: 0,
		code: "tdmSurvival.js"
	},
	{
		name: "Maze FFA",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defeat everyone while inside of a complex maze system!",
		players: 0,
		code: "maze.js"
	},
	{
		name: "Secure the Crown",
		image: "/resources/gamemodes/placeholder.png",
		description: "Find the crown as it passively gives you score and see how long you can hold it!",
		players: 0,
		code: "stc.js"
	},
	{
		name: "Warpzone",
		image: "/resources/gamemodes/placeholder.png",
		description: "Touch the borders of the map to teleport to the opposite side.",
		players: 0,
		code: "warpzone.js"
	},
];
if (day.getDay() === 2) defaultGamemodes = [ // Tuesday 
	{
		name: "Enchanted Maze",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight in a maze full of paradoxically enchanting walls. Beware of what could happen to them!",
		players: 0,
		code: "magic_maze.js"
	},
	{
		name: "Mothership",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defend your team's Mothership while trying to defeat the others!",
		players: 0,
		code: "mothership.js"
	},
	{
		name: "Fathership",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defend your team's Fathership while trying to defeat the others!",
		players: 0,
		code: "fathership.js"
	},
	{
		name: "Growth",
		image: "/resources/gamemodes/placeholder.png",
		description: "Getting kills increases your raw size!",
		players: 0,
		code: "growth.js"
	},
	/*{
		name: "The World's Script",
		image: "/resources/gamemodes/placeholder.png",
		description: "A tower defense game based on the world of JavaScript coding.",
		players: 0,
		code: "worldScript.js"
	},*/
];
if (day.getDay() === 3) defaultGamemodes = [ // Wednesday 
	{
		name: "Maze TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight against other teams while navigating a maze!",
		players: 0,
		code: "mazetdm.js"
	},
	{
		name: "Boss Rush",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight against 250 waves of increasingly more difficult bosses!",
		players: 0,
		code: "boss.js"
	},
	{
		name: "Manhunt",
		image: "/resources/gamemodes/placeholder.png",
		description: "The leader is made more powerful and gives more score when killed. Are you certain you can take them down?",
		players: 0,
		code: "manhunt.js"
	},
	{
		name: "Growth",
		image: "/resources/gamemodes/placeholder.png",
		description: "Getting kills increases your raw size!",
		players: 0,
		code: "growth.js"
	},
	{
		name: "Fathership",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defend your team's Fathership while trying to defeat the others!",
		players: 0,
		code: "fathership.js"
	},
	{
		name: "Ultimate Duelist",
		image: "/resources/gamemodes/placeholder.png",
		description: "A fighting game based on the mobile game Supreme Duelist. Pick between 51 different fighters and see how long you can stay alive!",
		players: 0,
		code: "ultimate_duelist.js"
	},
];
if (day.getDay() === 4) defaultGamemodes = [ // Thursday 
	{
		name: "Tag",
		image: "/resources/gamemodes/placeholder.png",
		description: "Kill enemies to recruit them to your team until the entire server is on your side!",
		players: 0,
		code: "tag.js"
	},
	{
		name: "Mothership",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defend your team's Mothership while trying to defeat the others!",
		players: 0,
		code: "mothership.js"
	},
	{
		name: "Portal TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "Gang up on enemies while being able to pop in and out of portals!",
		players: 0,
		code: "portaltdm.js"
	},
	{
		name: "Free For All",
		image: "/resources/gamemodes/placeholder.png",
		description: "Everyone for themselves!",
		players: 0,
		code: "ffa.js"
	},
	{
		name: "Portal FFA",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight enemies while being able to pop in and out of portals!",
		players: 0,
		code: "pffa.js"
	},
	{
		name: "🇻​​🇴​​🇮​​🇩​ walkers",
		image: "/resources/gamemodes/placeholder.png",
		description: "Travel through this endless void with allies. You never know what could be staring at you in the darkness... it sure as hell isn't a tank.",
		players: 0,
		code: "vwalk.js"
	},
];
if (day.getDay() === 5) defaultGamemodes = [ // Friday 
	/*{
		name: "Clan Wars",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight alongside allies of your choice by including their clan name in your own.",
		players: 0,
		code: "clan.js"
	},*/
	{
		name: "Tag",
		image: "/resources/gamemodes/placeholder.png",
		description: "Kill enemies to recruit them to your team until the entire server is on your side!",
		players: 0,
		code: "tag.js"
	},
	{
		name: "Assault",
		image: "/resources/gamemodes/placeholder.png",
		description: "Infiltrate the enemy's bunker to capture all of their refuges!",
		players: 0,
		code: "assault.js"
	},
	{
		name: "Maze TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight against other teams while navigating a maze!",
		players: 0,
		code: "mazetdm.js"
	},
	{
		name: "Siege",
		image: "/resources/gamemodes/placeholder.png",
		description: "Defend your sanctuaries from the increasing horde of bosses!",
		players: 0,
		code: "siege.js"
	},
	{
		name: "Soccer",
		image: "/resources/gamemodes/placeholder.png",
		description: "Take a break from all the war and play some soccer to pass the time.",
		players: 0,
		code: "soccer.js"
	},
	/*{
		name: "America Simulator",
		image: "/resources/gamemodes/placeholder.png",
		description: "A battle royale game based on the uncertainty and unsafeness of living in the US of A.",
		players: 0,
		code: "murica.js"
	},*/
];
if (day.getDay() === 6) defaultGamemodes = [ // Saturday 
	{
		name: "Manhunt",
		image: "/resources/gamemodes/placeholder.png",
		description: "The leader is made more powerful and gives more score when killed. Are you certain you can take them down?",
		players: 0,
		code: "manhunt.js"
	},
	{
		name: "Warpzone",
		image: "/resources/gamemodes/placeholder.png",
		description: "Touch the borders of the map to teleport to the opposite side.",
		players: 0,
		code: "warpzone.js"
	},
	{
		name: "Enchanted Maze",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight in a maze full of paradoxically enchanting walls. Beware of what could happen to them!",
		players: 0,
		code: "magic_maze.js"
	},
	{
		name: "Portal TDM",
		image: "/resources/gamemodes/placeholder.png",
		description: "Gang up on enemies while being able to pop in and out of portals!",
		players: 0,
		code: "portaltdm.js"
	},
	{
		name: "Portal FFA",
		image: "/resources/gamemodes/placeholder.png",
		description: "Fight enemies while being able to pop in and out of portals!",
		players: 0,
		code: "pffa.js"
	},
];
if (day.getDay() === 0) defaultGamemodes = [ // Sunday 
	{
		name: "Secure the Crown",
		image: "/resources/gamemodes/placeholder.png",
		description: "Find the crown as it passively gives you score and see how long you can hold it!",
		players: 0,
		code: "stc.js"
	},
	/*{
		name: "The World's Script",
		image: "/resources/gamemodes/placeholder.png",
		description: "A tower defense game based on the world of JavaScript coding.",
		players: 0,
		code: "worldScript.js"
	},*/
	{
		name: "🇻​​🇴​​🇮​​🇩​ walkers",
		image: "/resources/gamemodes/placeholder.png",
		description: "Travel through this endless void with allies. You never know what could be staring at you in the darkness... it sure as hell isn't a tank.",
		players: 0,
		code: "vwalk.js"
	},
	{
		name: "Ultimate Duelist",
		image: "/resources/gamemodes/placeholder.png",
		description: "A fighting game based on the mobile game Supreme Duelist. Pick between 51 different fighters and see how long you can stay alive!",
		players: 0,
		code: "ultimate_duelist.js"
	},
	/*{
		name: "America Simulator",
		image: "/resources/gamemodes/placeholder.png",
		description: "A battle royale game based on the uncertainty and unsafeness of living in the US of A.",
		players: 0,
		code: "murica.js"
	},*/
];
defaultGamemodes.push({
	name: "Sandbox",
	image: "/resources/gamemodes/placeholder.png",
	description: "Each player has their own arena. Test different combos here.",
	players: 0,
	code: "sbx.json"
}/*, {
	name: "Dev Server 1",
	image: "/resources/gamemodes/placeholder.png",
	description: "Each player has their own arena. Test different combos here.",
	players: 0,
	code: "soccer_shit.js"
}, {
	name: "Dev Server 2",
	image: "/resources/gamemodes/placeholder.png",
	description: "Each player has their own arena. Test different combos here.",
	players: 0,
	code: "siege_bad.js"
}*/);
/*
	/*{
		name: "1 v 1",
		image: "/resources/gamemodes/1v1.webp",
		description: "Duel random players in a mostly private arena.",
		players: 0,
		code: "1v1.js"
	},
	{
		name: "2 TDM",
		image: "/resources/gamemodes/2tdm.webp",
		description: "Fight in an all out war against another team!",
		players: 0,
		code: "2tdm.json"
	},
	{
		name: "2 TDM Domination",
		image: "/resources/gamemodes/2tdm_dom.webp",
		description: "Fight on one of two teams to capture all the dominators first!",
		players: 0,
		code: "2dom.js"
	},
	{
		name: "2 TDM Tag",
		image: "/resources/gamemodes/2tdm_tag.webp",
		description: "Kill other players on the other team to recruit them to your team.",
		players: 0,
		code: "2tag.json"
	},
	{
		name: "2 TDM Mothership",
		image: "/resources/gamemodes/2tdm_mot.webp",
		description: "Fight on one of two teams to kill the other team's mothership!",
		players: 0,
		code: "2mot.json"
	},
	{
		name: "2 TDM Portal Mothership",
		image: "/resources/gamemodes/2potmot.webp",
		description: "Fight on one of two teams to kill the other team's mothership: Now with portals!",
		players: 0,
		code: "p2mot.json"
	},
	{
		name: "2 TDM Hell",
		image: "/resources/gamemodes/2tdmhell.webp",
		description: "Fight against the other team's army with your own! Each side has 25 bots.",
		players: 0,
		code: "2tdmhell.json"
	},
	{
		name: "4 TDM",
		image: "/resources/gamemodes/4tdm.webp",
		description: "Fight in an all out war against three other teams!",
		players: 0,
		code: "4tdm.json"
	},
	{
		name: "4 TDM Blackout",
		image: "/resources/gamemodes/4tdm_blackout.webp",
		description: "Fight in an all out war against three other teams while in the dark...",
		players: 0,
		code: "blackout4tdm.json"
	},
	{
		name: "4 TDM Domination",
		image: "/resources/gamemodes/4tdm_dom.webp",
		description: "Fight on one of four teams to capture all the dominators first!",
		players: 0,
		code: "4dom.json"
	},
	{
		name: "4 TDM Tag",
		image: "/resources/gamemodes/4tdm_tag.webp",
		description: "Kill other players on the other three teams to recruit them to your team.",
		players: 0,
		code: "4tag.json"
	},
	{
		name: "4 TDM Mothership",
		image: "/resources/gamemodes/4tdm_mot.webp",
		description: "Fight on one of four teams to destroy all of the other teams' motherships!",
		players: 0,
		code: "4mot.json"
	},
	{
		name: "Maze",
		image: "/resources/gamemodes/maze.webp",
		description: "Free for all inside a maze!",
		players: 0,
		code: "maze.js"
	},
	{
		name: "Maze TDM",
		image: "/resources/gamemodes/maze_tdm.webp",
		description: "Fight against other teams inside of a maze!",
		players: 0,
		code: "mazetdm.js"
	},
	{
		name: "Maze TDM Blackout",
		image: "/resources/gamemodes/mazetdm_blackout.webp",
		description: "Fight against other teams inside of a maze while in the dark...",
		players: 0,
		code: "blackoutmazetdm.js"
	},
	{
		name: "Cave",
		image: "/resources/gamemodes/cave.webp",
		description: "Free for all inside of a cave system! Close quarters!",
		players: 0,
		code: "cave.json"
	},
	{
		name: "Cave TDM",
		image: "/resources/gamemodes/cavetdm.webp",
		description: "Fight against other teams inside of a cave system!",
		players: 0,
		code: "cavetdm.js"
	},
	{
		name: "Cave TDM Blackout",
		image: "/resources/gamemodes/cavetdm_blackout.webp",
		description: "Fight against other teams inside of a cave system while in the dark...",
		players: 0,
		code: "blackoutcavetdm.js"
	},*/
	/*{
		name: "Portal FFA",
		image: "/resources/gamemodes/potffa.webp",
		description: "Everyone for themselves: Now with portals!",
		players: 0,
		code: "pffa.json"
	},
	{
		name: "Space",
		image: "/resources/gamemodes/space.webp",
		description: "Everyone for themselves: Now in space!",
		players: 0,
		code: "space.json"
	},
	{
		name: "Survival",
		image: "/resources/gamemodes/survival.webp",
		description: "Everyone for themselves but, you can't automatically level up. You gotta grind.",
		players: 0,
		code: "srvivl.json"
	},
	{
		name: "Growth",
		image: "/resources/gamemodes/growth.webp",
		description: "Everyone for themselves! The more score you have the larger and stronger you get. Get to 2 million score to unlock dreadnaughts.",
		players: 0,
		code: "growth.json"
	},
	{
		name: "Boss Rush",
		image: "/resources/gamemodes/bossrush.webp",
		description: "Defeat 75 waves of bosses. Think you or your computer can take it? Good luck!",
		players: 0,
		code: "boss.json"
	},
	{
		name: "Hangout",
		image: "/resources/gamemodes/hangout.webp",
		description: "Everyone is on the same team. Sit around and chat.",
		players: 0,
		code: "hangout.js"
	},
	{
		name: "Corrupt Tanks",
		image: "/resources/gamemodes/corrupted_tanks.webp",
		description: "See the unholy horrors that lay deep within the code.",
		players: 0,
		code: "crptTanks.json"
	},
	{
		name: "Void Walkers",
		image: "/resources/gamemodes/voidwalk.webp",
		description: "Travel into the beyond, past the boarders of the map. Beware the danger entities that lie far out.",
		players: 0,
		code: "vwalk.js"
	},
	{
		name: "Squidwards Tiki Island",
		image: "/resources/gamemodes/tiki.webp",
		description: "Vacation yayy",
		players: 0,
		code: "tiki.json"
	},
	{
		name: "Custom",
		image: "/resources/gamemodes/custom.webp",
		description: "A special gamemode reserved for modders to distinguish their rooms. By default, its a normal ffa map. Join the discord and ask for help learning to mod the game!",
		players: 0,
		code: "custom.js"
	},
*/
let gamemodeEles = [];
function clearGamemodes() {
	for (let ele of gamemodeEles) ele.remove();
	gamemodeEles.length = 0;
}
function showGamemodes() {
	for (let gamemode of defaultGamemodes) {
		let template = roomFilter === "gallery" ? roomGalleryTemplate : roomListTemplate
		let ele = template.cloneNode(true)
		ele.style.display = "block";

		// Background/image
		if (gamemode.image !== "") {
			ele.style.background = `url(${gamemode.image})`
		}

		// Gamemode 
		ele.children[0].children[0].innerText = gamemode.name;

		// Player count
		ele.children[0].children[1].style.display = "none";

		// Room Code
		ele.children[0].children[2].style.display = "none";

		ele.onclick = function () {
			playerCount = gamemode.players;
			gamemodeName = gamemode.name;
			gamemodeImage = gamemode.image;
			gamemodeDescription = gamemode.description;
			selectedGamemode = gamemode.code;
			updateRoomInfo()
		}

		gamemodeEles.push(ele)
		template.parentElement.appendChild(ele);
	}
}

let roomEles = [];
function clearRooms() {
	for (let ele of roomEles) ele.remove();
	roomEles.length = 0;
}
async function showRooms() {
	let rooms = await multiplayer.getRooms()
	for (let room of rooms) {
		let template = roomFilter === "gallery" ? roomGalleryTemplate : roomListTemplate
		let ele = template.cloneNode(true)
		ele.style.display = "block";

		let gamemodeInfo = null;
		for (let gamemode of defaultGamemodes) {
			if (room.gamemodeCode === gamemode.code) {
				gamemodeInfo = gamemode;
				break;
			}
		}
		if(gamemodeInfo === null){
			gamemodeInfo ??= room.gamemodeCode
		}

		// Background/image
		if (gamemodeInfo.image) {
			ele.style.background = `url(${gamemodeInfo.image})`
		}

		// Gamemode 
		ele.children[0].children[0].innerText = gamemodeInfo.name || gamemodeInfo;

		// Player count
		ele.children[0].children[1].innerText = `Players: ${room.players}${room.maxPlayers!==99?`/${room.maxPlayers}`:""}`;

		// Room Code
		ele.children[0].children[2].innerText = room.id;

		ele.onclick = function () {
			playerCount = room.players;
			maxPlayerCount = room.maxPlayers||99;
			gamemodeName = gamemodeInfo.name || gamemodeInfo;
			gamemodeImage = gamemodeInfo.image || "";
			gamemodeDescription = room.desc || gamemodeInfo.description || gamemodeInfo;
			selectedRoomId = room.id;
			updateRoomInfo()
		}

		roomEles.push(ele)
		template.parentElement.appendChild(ele);
	}
}

const joinSearch = document.getElementById("joinSearch")
joinSearch.oninput = async function () {
	const term = joinSearch.value.toLowerCase();
	if (createFilter === "host") {
		clearGamemodes()
		showGamemodes()
		for (let ele of gamemodeEles) {
			if (
				ele.children[0].children[0].innerText.toLowerCase().includes(term) === false &&
				ele.children[0].children[0].innerText.toLowerCase().replaceAll(" ", "").includes(term) === false
			) {
				ele.remove();
			}
		}
	} else if (createFilter === "join") {
		clearRooms()
		await showRooms()
		for (let ele of roomEles) {
			if (
				(ele.children[0].children[0].innerText.toLowerCase().includes(term) === false &&  // Gamemode Name
					ele.children[0].children[0].innerText.toLowerCase().replaceAll(" ", "").includes(term) === false) &&
				(ele.children[0].children[1].innerText.toLowerCase().includes(term) === false && // Player Count
					ele.children[0].children[1].innerText.toLowerCase().replaceAll(" ", "").includes(term) === false) &&
				(ele.children[0].children[2].innerText.toLowerCase().includes(term) === false && // Room Code
					ele.children[0].children[2].innerText.toLowerCase().replaceAll(" ", "").includes(term) === false)
			) {
				ele.remove()
			}
		}
	}
};


// Setup default state
(async () => {
	if (localStorage.getItem("roomFilter") === "list") {
		listFilter.click();
	} else { // "gallery" or default
		galleryFilter.click();
	}
	joinFilter.click();
	await showRooms();
	if (roomEles.length > 0) {
		roomEles[0].click(); // Join most popular room by default
	} else { // No joinable rooms
		hostFilter.click();
		clearRooms();
		showGamemodes();
		gamemodeEles[7].click() // Host default gamemode: 4tdm
	}
})();

document.getElementById("startButton").onclick = openJoinScreen

export { openJoinScreen }
