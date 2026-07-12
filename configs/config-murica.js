let maps = [{
    "MODE": "ffa",
    "serverName": "America",
    "ROOM_SETUP": [
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "tree"],
        ["norm", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "tree", "watr", "tree", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "watr", "watr", "watr", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "tree", "watr", "tree", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "norm"],
        ["norm", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "norm"],
        ["tree", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "tree"],
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree"]
    ],
    "STARTING_TANK": "guy",
    "X_GRID": 11,
    "Y_GRID": 11,
    "WIDTH": 8000,
    "HEIGHT": 8000,
    "MAX_FOOD": 0,
    "MAX_NEST_FOOD": 0,
    "MAX_SANCS": 0,
    "ZONES": "woods water"
}];
maps[Math.floor(Math.random() * maps.length)];