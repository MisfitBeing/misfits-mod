(function() {
    // Do screen size adjustment
    let element = document.getElementById("mainWrapper");
    let scalval = 130; ///Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(navigator.userAgent) ? 150 : 120;
    window.addEventListener("resize", function adjust() {
        if (navigator.userAgent.search("Firefox") === -1) element.style.zoom = `${Math.round(Math.min(window.innerWidth / 1920, window.innerHeight / 1080) * scalval)}%`;
    })
    window.dispatchEvent(new Event("resize"))

    // Button onclicks
    window.servers = [
        { rivetGamemode: "ffa.js", serverGamemode: "Free for All" },
        { rivetGamemode: "tdm.js", serverGamemode: "Open TDM" },
        { rivetGamemode: "magic_maze.js", serverGamemode: "Enchanted Maze" },
        { rivetGamemode: "boss.js", serverGamemode: "Boss Rush" },
        { rivetGamemode: "manhunt.js", serverGamemode: "Manhunt" },
        { rivetGamemode: "space.js", serverGamemode: "Space" },
        { rivetGamemode: "assault.js", serverGamemode: "Assault" },
        { rivetGamemode: "warpzone.js", serverGamemode: "Warpzone" },
        { rivetGamemode: "vwalk.js", serverGamemode: "🇻​​🇴​​🇮​​🇩​ walkers" },
        /*{ rivetGamemode: "2dom.js", serverGamemode: "2 TDM Domination" },
        { rivetGamemode: "2mot.json", serverGamemode: "2 TDM Mothership" },
        { rivetGamemode: "2tag.json", serverGamemode: "2 TDM Tag" },
        { rivetGamemode: "2tdmhell.json", serverGamemode: "2 TDM Heck" },
        { rivetGamemode: "4dom.json", serverGamemode: "4 TDM Domination" },
        { rivetGamemode: "4mot.json", serverGamemode: "4 TDM Mothership" },
        { rivetGamemode: "4tag.json", serverGamemode: "4 TDM Tag" },
        { rivetGamemode: "4tdm.json", serverGamemode: "4 TDM" },
        { rivetGamemode: "blackout4tdm.json", serverGamemode: "Blackout 4 TDM" },
        { rivetGamemode: "boss.json", serverGamemode: "Boss Rush" },
        { rivetGamemode: "cave.json", serverGamemode: "Cave" },
        { rivetGamemode: "cavetdm.js", serverGamemode: "Cave TDM" },
        { rivetGamemode: "blackoutcavetdm.js", serverGamemode: "Blackout Cave TDM" },
        { rivetGamemode: "crptTanks.json", serverGamemode: "Corrupted Tanks" },
        { rivetGamemode: "growth.json", serverGamemode: "Growth" },
        { rivetGamemode: "hangout.js", serverGamemode: "Hangout" },
        { rivetGamemode: "maze.js", serverGamemode: "Maze" },
        { rivetGamemode: "mazetdm.js", serverGamemode: "Maze TDM" },
        { rivetGamemode: "blackoutmazetdm.js", serverGamemode: "Blackout Maze 2 TDM" },
        { rivetGamemode: "murica.json", serverGamemode: "Murica" },
        { rivetGamemode: "p2mot.json", serverGamemode: "2 TDM Portal Mothership" },
        { rivetGamemode: "pffa.json", serverGamemode: "Portal FFA" },
        { rivetGamemode: "sbx.json", serverGamemode: "Sandbox" },
        { rivetGamemode: "siege.js", serverGamemode: "Siege" },
        { rivetGamemode: "soccer.json", serverGamemode: "Soccer" },
        { rivetGamemode: "srvivl.json", serverGamemode: "Survival" },
        { rivetGamemode: "tdm.js", serverGamemode: "TDM" },
        { rivetGamemode: "testbed.json", serverGamemode: "Testbed Event" },
        { rivetGamemode: "tiki.json", serverGamemode: "Squidwards Tiki Island" },
        { rivetGamemode: "vwalk.js", serverGamemode: "Void Walkers" },
        { rivetGamemode: "blackoutvwalk.js", serverGamemode: "Blackout Void Walkers" },
        { rivetGamemode: "custom.js", serverGamemode: "Modded" }*/
    ]
    window.preloadsDoneCooking = true
})();

const popup = document.querySelector(".popup");
const popupTitle = popup.querySelector("h1");
const popupMessage = popup.querySelector("span");

function displayCanvasNotSupported() {
    popup.style.display = "block";
    popupTitle.textContent = "Warning:";
    popupMessage.textContent = "Your browser does not support canvas. Please switch to a Chromium based browser, such as Google Chrome, Opera GX or Microsoft Edge.";
}


document.getElementById("controlsButton").onclick = displayHowToPlay;
function displayHowToPlay() {
    popup.style.display = "block";
    popupTitle.textContent = "Standard Controls:";
    popupMessage.textContent = "• WASD / Arrows - Standard Movement (Up keys usually don't work in UD Switch)\n• Spacebar / Left Click - Primary Attacks\n• Right Click / Shift - Secondary Attacks or Abilities\n• Q - Tertiary Attacks or extra abilities\n• E - Autofire toggle\n• C - Ancilliary toggles; defaulted to Autospin for most tanks\n• R - Override all of your AI to control them better\n• Enter - Chatting; 60 characters per message max\n• N - Automatically level up to up to lvl. 45; doesn't work in Survival modes";
}

document.getElementById("achievementsButton").onclick = displayAchievements
function displayAchievements() {
    document.getElementsByClassName('achievementsHolder')[0].style.display = 'block';
};

document.getElementById("wikiButton").onclick = gotoWiki
function gotoWiki() {
    window.open("https://misfits-mod.fandom.com/", "_blank")
}

document.getElementById("historyAndCreditsButton").onclick = openHaCPage
function openHaCPage() {
    window.location.pathname = "/history-and-credits.html"
}

document.getElementById("modBrowserButton").onclick = openModBrowser
document.getElementById("modBrowserClose").onclick = openModBrowser
function openModBrowser(close) {
    let mb = document.getElementById("modBrowser")
    if (close === true || mb.style.top === "0%") {
        mb.style.top = "-100%";
    } else {
        mb.style.top = "0%"
    }
}

let canvas = document.createElement("canvas");
if (!canvas || !canvas.getContext) displayCanvasNotSupported();
if (canvas) canvas.remove();

export { openModBrowser }
