import { global } from "./global.js"
import { config } from "/js/config.js"
import { lerp } from "/js/lerp.js"
import { imageCache } from "./assets.js";
import { util } from "./util.js";
import { mixColors } from "../shared/mix_colors.js"

let color = {
	"magic": "#b653bc", // use this for both tele-trappers and kazams
	"teal": "#7ADBBC",
	"lgreen": "#B9E87E",
	"orange": "#E7896D",
	"yellow": "#FDF380",
	"lavender": "#B58EFD",
	"pink": "#eb8cba",
	"vlgrey": "#E8EBF7",
	"lgrey": "#AA9F9E",
	"guiwhite": "#FFFFFF",
	"black": "#484848",
	"blue": "#3CA4CB",
	"green": "#8ABC3F",
	"red": "#E03E41",
	"gold": "#EFC74B",
	"purple": "#8D6ADF",
	"magenta": "#CC669C",
	"grey": "#A7A7AF",
	"dgrey": "#726F6F",
	"white": "#DBDBDB",
	"guiblack": "#000000",
	"vibgreen": "#56E012",
	"amalgrey": "#5A574D",
	"azure": "#08A3FC",
	"redbetter": "#F21E34",
	"springgreen": "#4AE86E",
	"dullnavy": "#202060",
	"shieldorange": "#FFA200",
	"wood": "#C19A6B",
	"lwood": "#EAB57A",
	"dwood": "#74502F",
	"chart": "#8BFE6A",
	"knockOut": "#6B1B0E",
	"deepazure": "#2676cb",
	"puregold": "#E8CA23",
	"homingred": "#D16161",
	"lteal": "#A6E1DE",
	"amber": "#FDA54D",
	"lpurple": "#A177FC",
	"hlcyan": "#65F0EC",
	"navy": "#3761D1",
	"brown": "#CB6F3C",
	"guiblue": "#0000FF",
	"lcyan": "#6CF1EE",
	"guilavender": "#AB6AB5",
	"offgold": "#FAC577",
	"offwhite": "#c6d9ef",
	"offorange": "#c65f51",
	"offpurple": "#956db0",
	"ancestral": "#00FFA5",
	"coffee": "#473F39",
	"voideye": "#3B00FF",
	"waterblue": "#3D79EF",
	"drose": "#CD004C",
	"accelred": "#d0412b",
	"ins_1": mixColors("#A7A7AF", "#d0412b", .2),
	"ins_2": mixColors("#A7A7AF", "#d0412b", .4),
	"ins_3": mixColors("#A7A7AF", "#d0412b", .6),
	"ins_4": mixColors("#A7A7AF", "#d0412b", .8),
	"silence": "#395547",
	"infobox": "#756C6C",
	"turquoise": "#57C8C2",
	"spore1": "#c7f6d9",
	"spore2": "#b0e0c0",
	"spore3": "#afc7c7",
	"spore4": "#7fb193",
	"winduglow": "#6A00FF",
	"guiazure": "#00AEFF",
	"fire": "#FF8000",
	"flamegun": "#1D00FF",
	"welder": "#F20010",
	"nadeshiko": "#F6ADC6",
	"dgreyalt": "#666666",
	"sound": "#63E291",
	"waller": "#44AA34",
	"guiviolet": "#9000FF",
	"fruittree": "#7C5F46",
	"teleport": "#D000FF",
	"starfish": "#F4B82F",
	"seaweed": "#8BE82C",
	"grouper": "#FC8208",
	"trout": "#BD6034",
	"shark": "#8DC7F7",
	"whale": "#455368",
	"guisalmon": "#FA8072",
	"paletteSize": 10,
	"border": 0.65
};
function setColor(obj) {
	color = obj
}
let themes = {
	"normal": {
		"magic": "#b653bc",
		"teal": "#7ADBBC",
		"lgreen": "#B9E87E",
		"orange": "#E7896D",
		"yellow": "#FDF380",
		"lavender": "#B58EFD",
		"pink": "#eb8cba",
		"vlgrey": "#E8EBF7",
		"lgrey": "#AA9F9E",
		"guiwhite": "#FFFFFF",
		"black": "#484848",
		"blue": "#3CA4CB",
		"green": "#8ABC3F",
		"red": "#E03E41",
		"gold": "#EFC74B",
		"purple": "#8D6ADF",
		"magenta": "#CC669C",
		"grey": "#A7A7AF",
		"dgrey": "#726F6F",
		"white": "#DBDBDB",
		"guiblack": "#000000",
		"vibgreen": "#56E012",
		"amalgrey": "#5A574D",
		"azure": "#08A3FC",
		"redbetter": "#F21E34",
		"springgreen": "#4AE86E",
		"dullnavy": "#202060",
		"shieldorange": "#FF9900",
		"wood": "#C19A6B",
		"lwood": "#EAB57A",
		"dwood": "#74502F",
		"chart": "#8BFE6A",
		"knockOut": "#6B1B0E",
		"deepazure": "#2676cb",
		"puregold": "#E8CA23",
		"homingred": "#D16161",
		"lteal": "#A6E1DE",
		"amber": "#FDA54D",
		"lpurple": "#A177FC",
		"hlcyan": "#65F0EC",
		"navy": "#3761D1",
		"brown": "#CB6F3C",
		"guiblue": "#0000FF",
		"lcyan": "#6CF1EE",
		"guilavender": "#AB6AB5",
		"offgold": "#FAC577",
	    "offwhite": "#c6d9ef",
	    "offorange": "#c65f51",
	    "offpurple": "#956db0",
		"ancestral": "#00FFA5",
		"coffee": "#473F39",
		"voideye": "#3B00FF",
		"waterblue": "#3D79EF",
		"drose": "#CD004C",
		"accelred": "#d0412b",
		"ins_1": mixColors("#A7A7AF", "#d0412b", .2),
		"ins_2": mixColors("#A7A7AF", "#d0412b", .4),
		"ins_3": mixColors("#A7A7AF", "#d0412b", .6),
		"ins_4": mixColors("#A7A7AF", "#d0412b", .8),
		"silence": "#395547",
		"infobox": "#756C6C",
		"turquoise": "#57C8C2",
	    "spore1": "#c7f6d9",
	    "spore2": "#b0e0c0",
	    "spore3": "#afc7c7",
	    "spore4": "#7fb193",
		"winduglow": "#6A00FF",
		"guiazure": "#00AEFF",
		"fire": "#FF8000",
		"flamegun": "#1D00FF",
	    "welder": "#F20010",
		"nadeshiko": "#F6ADC6",
		"dgreyalt": "#666666",
		"sound": "#63E291",
		"waller": "#44AA34",
		"guiviolet": "#9000FF",
		"fruittree": "#7C5F46",
		"teleport": "#D000FF",
		"starfish": "#F4B82F",
		"seaweed": "#8BE82C",
		"grouper": "#FC8208",
		"trout": "#BD6034",
	    "shark": "#8DC7F7",
	    "whale": "#455368",
	    "guisalmon": "#FA8072",
		"paletteSize": 10,
		"border": 0.575
	},
	"classic": {
		"magic": "#b643bc",
	    "shark": "#89b8dd",
	    "whale": "#465f83",
	    "guisalmon": "#e6786c",
		"teal": "#8EFFFB",
		"lgreen": "#85E37D",
		"orange": "#FC7676",
		"yellow": "#FFEB8E",
		"lavender": "#B58EFF",
		"pink": "#F177DD",
		"vlgrey": "#CDCDCD",
		"lgrey": "#998F88",
		"guiwhite": "#FFFFFF",
		"black": "#525252",
		"blue": "#00B0E1",
		"green": "#00E06C",
		"red": "#F04F54",
		"gold": "#FFE46B",
		"purple": "#768CFC",
		"magenta": "#BE7FF5",
		"grey": "#999999",
		"dgrey": "#545454",
		"white": "#C0C0C0",
		"guiblack": "#000000",
		"vibgreen": "#47D440",
		"amalgrey": "#605E58",
		"azure": "#1F6DEC",
		"redbetter": "#F0343D",
		"springgreen": "#51E78D",
		"dullnavy": "#332255",
		"shieldorange": "#f07f2f",
		"wood": "#c3965f",
		"lwood": "#f3bc7d",
		"dwood": "#675646",
		"chart": "#b9fc71",
		"knockOut": "#871212",
		"deepazure": "#373ec8",
		"puregold": "#EABC14",
		"homingred": "#E76868",
		"lteal": "#9CEBE7",
		"amber": "#ffb651",
		"lpurple": "#a185ef",
		"hlcyan": "#80dcf3",
		"navy": "#2856d4",
		"brown": "#a75b25",
		"guiblue": "#1304E3",
		"lcyan": "#4ae5e8",
		"guilavender": "#c96fce",
		"offgold": "#ebc75d",
	    "offwhite": "#cfe5ff",
	    "offorange": "#e27e4c",
	    "offpurple": "#7c5dab",
		"ancestral": "#39e5a9",
		"coffee": "#4e3f34",
		"voideye": "#7929e8",
		"waterblue": "#2166f0",
		"drose": "#b50a48",
		"accelred": "#df3333",
		"ins_1": mixColors("#999999", "#df3333", .2),
		"ins_2": mixColors("#999999", "#df3333", .4),
		"ins_3": mixColors("#999999", "#df3333", .6),
		"ins_4": mixColors("#999999", "#df3333", .8),
		"silence": "#3f745b",
		"infobox": "#817367",
		"turquoise": "#30ccc4",
	    "spore1": "#9be4b7",
	    "spore2": "#b0e0c0",
	    "spore3": "#9dbdb8",
	    "spore4": "#7fb193",
		"winduglow": "#9832f7",
		"guiazure": "#1f98d0",
		"fire": "#ef680d",
		"flamegun": "#2531df",
	    "welder": "#ed2f2f",
		"nadeshiko": "#e68baa",
		"dgreyalt": "#575759",
		"sound": "#6fc69f",
		"waller": "#6bb739",
		"guiviolet": "#8e15eb",
		"fruittree": "#80604a",
		"teleport": "#c124e8",
		"starfish": "#f2bc29",
		"seaweed": "#a5d521",
		"grouper": "#f48d26",
		"trout": "#c47547",
		"paletteSize": 10,
		"border": 0.5
	},
	"dark": {
		"magic": "#c022b2",
	    "shark": "#53697a",
	    "whale": "#2b2a35",
	    "guisalmon": "#8b5e64",
		"teal": "#7883A5",
		"lgreen": "#1BA01F",
		"orange": "#C46748",
		"yellow": "#B2B224",
		"lavender": "#7D56C5",
		"pink": "#B24FAE",
		"vlgrey": "#1E1E1E",
		"lgrey": "#7b7772",
		"guiwhite": "#5c6060",
		"black": "#0B011A",
		"blue": "#266c85",
		"green": "#1e892e",
		"red": "#a02c2e",
		"gold": "#9B7128",
		"purple": "#764a8b",
		"magenta": "#C8679B",
		"grey": "#635F5F",
		"dgrey": "#73747A",
		"white": "#40403C",
		"guiblack": "#000000",
		"vibgreen": "#3D6F24",
		"amalgrey": "#32322D",
		"azure": "#2A1F4D",
		"redbetter": "#A7072F",
		"springgreen": "#3C6f3C",
		"dullnavy": "#2E2E82",
		"shieldorange": "#CC5506",
		"wood": "#786752",
		"lwood": "#b38963",
		"dwood": "#513e21",
		"chart": "#5b7e15",
		"knockOut": "#380611",
		"deepazure": "#131629",
		"puregold": "#9A6C12",
		"homingred": "#603E3E",
		"lteal": "#6D7DA4",
		"amber": "#905637",
		"lpurple": "#7c5893",
		"hlcyan": "#4a6982",
		"navy": "#153d7a",
		"brown": "#734524",
		"guiblue": "#214AF0",
		"lcyan": "#357b71",
		"guilavender": "#7e3c6d",
		"offgold": "#83663a",
	    "offwhite": "#363638",
	    "offorange": "#923434",
	    "offpurple": "#63406d",
		"ancestral": "#166d55",
		"coffee": "#6b5444",
		"voideye": "#8e07e3",
		"waterblue": "#1c59a8",
		"drose": "#630d34",
		"accelred": "#6d0c0c",
		"ins_1": mixColors("#635F5F", "#6d0c0c", .2),
		"ins_2": mixColors("#635F5F", "#6d0c0c", .4),
		"ins_3": mixColors("#635F5F", "#6d0c0c", .6),
		"ins_4": mixColors("#635F5F", "#6d0c0c", .8),
		"silence": "#32965d",
		"infobox": "#52463c",
		"turquoise": "#257c87",
	    "spore1": "#a0c4ad",
	    "spore2": "#80a895",
	    "spore3": "#728290",
	    "spore4": "#7fb193",
		"winduglow": "#6c20cf",
		"guiazure": "#0cabc4",
		"fire": "#ee821d",
		"flamegun": "#1f6ec8",
	    "welder": "#ee4019",
		"nadeshiko": "#a6365d",
		"dgreyalt": "#7b797d",
		"sound": "#90eec9",
		"waller": "#406a1c",
		"guiviolet": "#63087d",
		"fruittree": "#56493e",
		"teleport": "#b23cc9",
		"starfish": "#b3791c",
		"seaweed": "#3ba116",
		"grouper": "#805020",
		"trout": "#8a4936",
		"paletteSize": 10,
		"border": 0.15
	},
	"factory": {
		"magic": "#cf6cdc",
	    "shark": "#7b8f9e",
	    "whale": "#40444a",
	    "guisalmon": "#a37a7c",
		"teal": "#8686ab",
		"lgreen": "#e4ca49",
		"orange": "#c8b5b8",
		"yellow": "#FDF380",
		"lavender": "#8585ab",
		"pink": "#b2b2cc",
		"vlgrey": "#676480",
		"lgrey": "#AA9F9E",
		"guiwhite": "#a3a38e",
		"black": "#3c3b4a",
		"blue": "#36c6e2",
		"green": "#36e28f",
		"red": "#e45548",
		"gold": "#ccccb2",
		"purple": "#b2b2cc",
		"magenta": "#c4addb",
		"grey": "#8e8ca5",
		"dgrey": "#535b5f",
		"white": "#8a9195",
		"guiblack": "#000000",
		"vibgreen": "#7da960",
		"amalgrey": "#564f51",
		"azure": "#3D756A",
		"redbetter": "#DE576B",
		"springgreen": "#73D09B",
		"dullnavy": "#39394E",
		"shieldorange": "#E08E2A",
		"wood": "#aca397",
		"lwood": "#ebdbc8",
		"dwood": "#70603c",
		"chart": "#7bb267",
		"knockOut": "#a15228",
		"deepazure": "#315357",
		"puregold": "#A29D83",
		"homingred": "#B37373",
		"lteal": "#98BAC2",
		"amber": "#d3bc87",
		"lpurple": "#736daf",
		"hlcyan": "#83c4cd",
		"navy": "#3f4f8b",
		"brown": "#b67451",
		"guiblue": "#7EECFB",
		"lcyan": "#98cbca",
		"guilavender": "#947a98",
		"offgold": "#8d867d",
	    "offwhite": "#677581",
	    "offorange": "#736765",
	    "offpurple": "#746d8c",
		"ancestral": "#95a99d",
		"coffee": "#3f3c3a",
		"voideye": "#6d4898",
		"waterblue": "#598eaf",
		"drose": "#9c6076",
		"accelred": "#d59388",
		"ins_1": mixColors("#8e8ca5", "#d59388", .2),
		"ins_2": mixColors("#8e8ca5", "#d59388", .4),
		"ins_3": mixColors("#8e8ca5", "#d59388", .6),
		"ins_4": mixColors("#8e8ca5", "#d59388", .8),
		"silence": "#404e47",
		"infobox": "#8e8e8e",
		"turquoise": "#5fad9a",
	    "spore1": "#a6bdaf",
	    "spore2": "#8bab8e",
	    "spore3": "#b6e5da",
	    "spore4": "#5f8681",
		"winduglow": "#694ad2",
		"guiazure": "#5e9dd8",
		"fire": "#f49331",
		"flamegun": "#733cd8",
	    "welder": "#b63d0d",
		"nadeshiko": "#e58c94",
		"dgreyalt": "#5c5961",
		"sound": "#c3d0c8",
		"waller": "#618f4a",
		"guiviolet": "#9f51dc",
		"fruittree": "#67625d",
		"teleport": "#ac5ed2",
		"starfish": "#cda850",
		"seaweed": "#5d6655",
		"grouper": "#94795f",
		"trout": "#885f4c",
		"paletteSize": 10,
		"border": 0.75
	},
	"forest": {
		"magic": "#b415db",
	    "shark": "#8f9ca6",
	    "whale": "#2d2f31",
	    "guisalmon": "#c2c9d6",
		"teal": "#884AA5",
		"lgreen": "#8C9B3E",
		"orange": "#D16A80",
		"yellow": "#97596D",
		"lavender": "#499855",
		"pink": "#60294F",
		"vlgrey": "#DDC6B8",
		"lgrey": "#666767",
		"guiwhite": "#FFFFE8",
		"black": "#665750",
		"blue": "#807BB6",
		"green": "#A1BE55",
		"red": "#E5B05B",
		"gold": "#FF4747",
		"purple": "#BAC674",
		"magenta": "#BA78D1",
		"grey": "#998866",
		"dgrey": "#529758",
		"white": "#7DA060",
		"guiblack": "#000000",
		"vibgreen": "#50972c",
		"amalgrey": "#6c6658",
		"azure": "#27687a",
		"redbetter": "#ae5f83",
		"springgreen": "#39b195",
		"dullnavy": "#35435f",
		"shieldorange": "#69512f",
		"wood": "#C19A6B",
		"lwood": "#EAB57A",
		"dwood": "#74502F",
		"chart": "#6d5576",
		"knockOut": "#8E463B",
		"deepazure": "#1b4863",
		"puregold": "#ad470c",
		"homingred": "#F1582A",
		"lteal": "#C8B7D2",
		"amber": "#f7bc0a",
		"lpurple": "#69923a",
		"hlcyan": "#7d2294",
		"navy": "#463274",
		"brown": "#cd794b",
		"guiblue": "#5C53D5",
		"lcyan": "#bafffe",
		"guilavender": "#ca45fb",
		"offgold": "#c3603c",
	    "offwhite": "#e3dbd1",
	    "offorange": "#885058",
	    "offpurple": "#769a59",
		"ancestral": "#09382c",
		"coffee": "#0f0f0f",
		"voideye": "#5f518a",
		"waterblue": "#16598a",
		"drose": "#a9144b",
		"accelred": "#f04419",
		"ins_1": mixColors("#998866", "#f04419", .2),
		"ins_2": mixColors("#998866", "#f04419", .4),
		"ins_3": mixColors("#998866", "#f04419", .6),
		"ins_4": mixColors("#998866", "#f04419", .8),
		"silence": "#425a2c",
		"infobox": "#988e8e",
		"turquoise": "#8cb7b5",
	    "spore1": "#abe8c2",
	    "spore2": "#ae5e5b",
	    "spore3": "#c5ae8c",
	    "spore4": "#94141f",
		"winduglow": "#9acb44",
		"guiazure": "#7ddfdd",
		"fire": "#ffae00",
		"flamegun": "#0095ff",
	    "welder": "#ff0033",
		"nadeshiko": "#e0b7d3",
		"dgreyalt": "#435e25",
		"sound": "#cfcfcf",
		"waller": "#a2c958",
		"guiviolet": "#76367b",
		"fruittree": "#7C5F46",
		"teleport": "#32028c",
		"starfish": "#e8e526",
		"seaweed": "#384022",
		"grouper": "#A69888",
		"trout": "#A6A588",
		"paletteSize": 10,
		"border": 0.575
	},
};

const specialColors = {}
function getColor(colorID) {
	switch (colorID) {
		case -2: // suck my dick, props
			return color.teal;
		case -1: // Only used for shinies to detect the achievement
			return color.teal;
		case 0:
			return color.teal;
		case 1:
			return color.lgreen;
		case 2:
			return color.orange;
		case 3:
			return color.yellow;
		case 4:
			return color.lavender;
		case 5:
			return color.pink;
		case 6:
			return color.vlgrey;
		case 7:
			return color.lgrey;
		case 8:
			return color.guiwhite;
		case 9:
			return color.black;
		case 10:
			return color.blue;
		case 11:
			return color.green;
		case 12:
			return color.red;
		case 13:
			return color.gold;
		case 14:
			return color.purple;
		case 15:
			return color.magenta;
		case 16:
			return color.grey;
		case 17:
			return color.dgrey;
		case 18:
			return color.white;
		case 19:
			return color.guiblack;
		case 20:
			return "#307A76";
		case 21:
			return "#47F51E";
		case 22:
			return "#9264EF";
		case 23:
			return color.flamegun;
		case 24:
			return "#B35ED8";
		case 25:
			return "#0531CB";
		case 26:
			return color.amber;
		case 27:
			return color.navy;
		case 28:
			return "#AB1515";
		case 29:
			return color.waller;
		case 30:
			return "#EEF5A7";
		case 31:
			return color.chart;
		case 32:
			return color.offgold;
		case 33:
			return "#8AFF8A";
		case 34:
			return color.dgreyalt;
		case 35:
			return "#F37C20";
		case 36:
			return "#E85DDF";
		case 37:
			return "#FFFF00";
		case 38:
			return "#FF9900";
		case 39:
			return "#FFBF00";
		case 40:
			return color.turquoise;
		case 41:
			return color.lteal;
		case 42:
			return "#BF0731";
		case 43:
			return "#F80A41";
		case 44: // Tellurium color
			return "#00EEA4";
		case 45: // Red team trench warfare door color (closed)
			return mixColors(color.red, color.grey, .8);
		case 46: // Red team trench warfare door color (open) and sporulator colors
			return mixColors(color.green, color.grey, .8);
		case 47:
			return color.amalgrey;
		case 48:
			return color.azure;
		case 49:
			return color.redbetter;
		case 50:
			return color.springgreen;
		case 51:
			return color.dullnavy;
		case 52:
			return color.wood;
		case 53:
			return color.dwood;
		case 54: 
		    return color.knockOut;
		case 55:
			return color.dullazure;
		case 56:
			return color.puregold;
		case 57:
			return color.coffee;
		case 58: 
			return mixColors(color.waterblue, color.guiblack, .5);
		case 59:
			return mixColors(color.lcyan, color.guilavender, .5);
		case 60:
			return mixColors(color.lcyan, color.pink, .5);
		case 61:
			return mixColors(color.chart, color.pink, .5);
		case 62:
			return mixColors(color.pink, color.guilavender, .5);
		case 63:
			return mixColors(mixColors(color.lcyan, color.chart, .33), color.guilavender, .33);
		case 64:
			return mixColors(mixColors(color.lcyan, color.chart, .33), color.pink, .33);
		case 65:
			return mixColors(mixColors(color.lcyan, color.guilavender, .33), color.pink, .33);
		case 66:
			return mixColors(mixColors(color.chart, color.guilavender, .33), color.pink, .33);
		case 67:
			return color.accelred;
		case 68:
			return color.silence;
		case 69:
			return mixColors(color.grey, "#000000", .18);
		case 70:
			return color.infobox;
		case 71: 
		    return color.spore1;
		case 72: 
		    return color.spore2;
		case 73: 
		    return color.spore3;
		case 74: 
		    return color.spore4;
		case 75:
			return color.sound;
		case 76:
			return color.fruittree;
		case 77:
			return mixColors(color.waller, color.guiviolet, .5);
		case 78:
			return color.starfish;
		case 79:
			return color.seaweed;
		case 80:
			return color.trout;
		case 81:
			return color.shark;
		case 82:
			return color.whale;
		case 83:
			return color.guisalmon;
		case 84:
			return color.magic;
		// Rainbow Colors
		case 100:
			return "#FF0000";
		case 101:
			return "#FF1A00";
		case 102:
			return "#FF2A00";
		case 103:
			return "#FF4300";
		case 104:
			return "#FF5D00";
		case 105:
			return "#FF7200";
		case 106:
			return "#FF7700";
		case 107:
			return "#FF9400";
		case 108:
			return "#FF9900";
		case 109:
			return "#FFA500";
		case 110:
			return "#FFBB00";
		case 111:
			return "#FFCC00";
		case 112:
			return "#FFDD00";
		case 113:
			return "#FFE900";
		case 114:
			return "#FFFA00";
		case 115:
			return "#EEFF00";
		case 116:
			return "#DDFF00";
		case 117:
			return "#D0FF00";
		case 118:
			return "#B6FF00";
		case 119:
			return "#AAFF00";
		case 120:
			return "#88FF00";
		case 121:
			return "#6EFF00";
		case 122:
			return "#54FF00";
		case 123:
			return "#32FF00";
		case 124:
			return "#19FF00";
		case 125:
			return "#04FF00";
		case 126:
			return "#00FF15";
		case 127:
			return "#00FF26";
		case 128:
			return "#00FF3F";
		case 129:
			return "#00FF55";
		case 130:
			return "#00FF6E";
		case 131:
			return "#00FF7F";
		case 132:
			return "#00FF99";
		case 133:
			return color.ancestral;
		case 134:
			return "#00FFBB";
		case 135:
			return "#00FFCB";
		case 136:
			return "#00FFD8";
		case 137:
			return "#00FFED";
		case 138:
			return "#00FFFA";
		case 139:
			return "#00E9FF";
		case 140:
			return "#00D8FF";
		case 141:
			return "#00C3FF";
		case 142:
			return "#00BBFF";
		case 143:
			return color.guiazure;
		case 144:
			return "#00A1FF";
		case 145:
			return "#0090FF";
		case 146:
			return "#007FFF";
		case 147:
			return "#0077FF";
		case 148:
			return "#006EFF";
		case 149:
			return "#005DFF";
		case 150:
			return "#0048FF";
		case 151:
			return "#0037FF";
		case 152:
			return "#0026FF";
		case 153:
			return "#0019FF";
		case 154:
			return "#0004FF";
		case 155:
			return "#0C00FF";
		case 156:
			return "#2200FF";
		case 157:
			return "#2E00FF";
		case 158:
			return color.voideye;
		case 159:
			return "#5400FF";
		case 160:
			return color.winduglow;
		case 161:
			return "#7F00FF";
		case 162:
			return color.guiviolet;
		case 163:
			return "#A100FF";
		case 164:
			return "#B600FF";
		case 165:
			return "#BF00FF";
		case 166:
			return color.teleport;
		case 167:
			return "#DC00FF";
		case 168:
			return "#E900FF";
		case 169:
			return "#FA00FF";
		case 170:
			return "#FF00F6";
		case 171:
			return "#FF00E1";
		case 172:
			return "#FF00CB";
		case 173:
			return "#FF00B6";
		case 174:
			return "#FF00AA";
		case 175:
			return "#FF00A5";
		case 176:
			return "#FF0090";
		case 177:
			return "#FF007B";
		case 178:
			return "#FF006E";
		case 179:
			return "#FF005D";
		case 180:
			return "#FF0059";
		case 181:
			return "#FF0043";
		case 182:
			return "#FF003B";
		case 183:
			return "#FF0026";
		case 184:
			return "#FF001D";
		case 185:
			return "#FF000C";
		// Railgun Colors
		case 186:
			return color.ins_1;
		case 187:
			return color.ins_2;
		case 188:
			return color.ins_3;
		case 189:
			return color.ins_4;
		case 190:
			return color.brown;
		case 191:
			return "#00D2FF";
		case 192:
			return "#003399";
		case 193:
			return "#BDBDBD";
		case 194:
			return "#B7410E";
		case 195:
			return color.hlcyan;
		case 196:
			return color.lwood;
		case 197:
			return "#E6E600";
		case 198:
			return "#E69138";
		case 199:
			return "#EA9999";
		case 200:
			return "#CCFF00";
		case 201:
			return "#800000";
		case 202:
			return "#F7EB73";
		case 203: // Atlantis barrel color
			return "#9A5BAB";
		case 204: // Redditeer eye color
			return "#ED7332";
		case 205:
			return "#FDA2A2";
		case 206:
			return "#00428B";
		case 207:
			return color.fire;
		case 208:
			return "#FFB66C";
		case 209:
			return "#C0C0C0";
		case 210:
			return "#FFFF80";
		case 211:
			return "#9B59D0";
		case 212:
			return "#996B6D";
		case 213:
			return "#FE9774";
		case 214:
			return "#77E2FB";
		case 215:
			return "#EFA900";
		case 216:
			return color.grouper;
		case 217:
			return color.lcyan;
		case 218:
			return "#FFD900";
		case 219:
			return "#FFAE40";
		case 220:
			return "#FFA600";
		case 221:
			return color.nadeshiko;
		case 222:
			return "#00FFFF";
		case 223:
			return "#00BFFF";
		case 224:
			return "#99D9EA";
		case 225:
			return "#6DB5C9";
		case 226:
			return "#EFC74B";
		case 227:
			return "#D5095B";
		case 228:
			return color.shieldorange;
		case 229:
			return "#A277FB";
		case 230:
			return "#BA8939";
		case 231:
			return "#5AE3E3";
		case 232:
			return "#FF6600";
		case 233:
			return "#FF9955";
		case 234:
			return "#D4AF37";
		case 235:
			return "#990000";
		case 236:
			return "#CC0000";
		case 237:
			return "#434343";
		case 238:
			return color.homingred;
		case 239:
			return "#F0A900";
		case 240:
			return "#15CD2D";
		case 241:
			return color.vibgreen;
		case 242:
			return color.lpurple;
		case 243:
			return util._HSL2COLOR((Date.now() % 2520) / 7, 100, 50);

		case 244:
			return color.waterblue;
		// trans tank colors - not gonna alter these 
		case 245:
			return "#000CF2";
		case 246:
			return "#080CEB";
		case 247:
			return "#100BE3";
		case 248:
			return "#170BDC";
		case 249:
			return "#1F0AD5";
		case 250:
			return "#270ACE";
		case 251:
			return "#2F0AC6";
		case 252:
			return "#3709BF";
		case 253:
			return "#3E09B8";
		case 254:
			return "#4609B0";
		case 255:
			return "#4E08A9";
		case 256:
			return "#5608A2";
		case 257:
			return "#5E079B";
		case 258:
			return "#650793";
		case 259:
			return "#6D078C";
		case 260:
			return "#750685";
		case 261:
			return "#7D067D";
		case 262:
			return "#850576";
		case 263:
			return "#8D056F";
		case 264:
			return "#940567";
		case 265:
			return "#9C0460";
		case 266:
			return "#A40459";
		case 267:
			return "#AC0352";
		case 268:
			return "#B4034A";
		case 269:
			return "#BB0343";
		case 270:
			return "#C3023C";
		case 271:
			return "#CB0234";
		case 272:
			return "#D3022D";
		case 273:
			return "#DB0126";
		case 274:
			return "#E2011F";
		case 275:
			return "#EA0017";
		case 276:
			return color.welder;
		// Surge colors
		case 277:
			return "#B29272";
		case 278:
			return "#CA9765";
		case 279:
			return "#E49649";
		case 280:
			return "#EB9742";
		case 281:
			return "#EB9142";
		case 282:
			return "#EB7B42";
		case 283:
			return "#E97439";
		case 284:
			return "#E96839";
		case 285:
			return "#E95B38";
		case 286:
			return "#E94F38";
		case 287:
			return "#E93838";
		case 288:
			return "#E63232";
		case 289:
			return "#EF2A2A";
		case 290:
			return "#F22424";
		case 291:
			return "#F61E1E";
		case 292:
			return "#F71515";
		case 293:
			return "#FF1010";
		case 294:
			return "#FF0000";
		case 295:
			return "#FF004D";
		case 296:
			return "#101930";
		case 297:
			return "#00F6FF";
		case 298:
			return "#806CC3";
		case 299:
			return "#00FFCC";
		case 300:
			return "#E456fB";
		case 301:
			return "#B0B8FF";
		case 302:
			return mixColors(color.lcyan, color.chart, .5);
		case 303:
			return color.guiblue;
		case 304:
			return "#777777";
		case 305:
			return "#80B0FF";
		case 306:
			return "#A2C5FF";
		case 307:
			return "#bed9f5";
		case 308:
			return "#e0e2fe";
		case 309:
			return "#9495f7";
		case 310:
			return "#f5b900";
		case 311:
			return "#f08b00";
		case 312:
			return "#df3b00";
		case 313:
			return "#474574";
		case 314:
			return "#615DAA";
		case 315:
			return "#8782DB";
		case 316: //Enraged Kamikaze
			return "#ff3232";
		case 317: //Steel-String
			return "#979797";
		case 318: // Oppressors
			return "#a5bdd7";
		case 319: 
			return color.offwhite;
		case 320: 
			return color.offorange;
		case 321: 
			return color.offpurple
		case 322: // Scorched
			return "#fe5f00";
		case 323: // viviyellow
			return "#f6e338";
		case 324: // vivired
			return "#f63838";
		case 325: // viviblue
			return "#3897f6";
		case 326: // vivigreen
			return "#53f638";
		case 327: // forestizer 1
			return "#046c10";
		case 328: // forestizer 2
			return "#4cb02f";
		case 329: // forestizer 3
			return "#9fcc8c";
		case 330: // forestizer 4
			return "#052f08";
		case 331: // forestizer wood
			return "#e8cb8e";
		case 332: // forestizer 6
			return "#2d9133";
		case 327.5: // forestizer red 1
			return "#cf0116";
		case 328.5: // forestizer red 2
			return "#d50028";
		case 329.5: // forestizer red 3
			return "#e7406f";
		case 330.5: // forestizer red 4
			return "#5b0001";
		case 332.5: // forestizer red 5
			return "#d60014";
		case 333: // forestizer red 3
			return "#e7406f";
		case 334: // forestizer red 4
			return "#5b0001";
		case 335: // #PATRIOTISM
			return "#194187";
		case 336: // #PATRIOTISM
			return "#6cbbc2";
		// Misc
		case "rainbow":
			return "#" + Math.floor(Math.random() * 16777215).toString(16);
		case "FFA_RED":
			return color.red;
		case 337: 
			return color.guilavender;
		case 338:
			return mixColors(color.chart, color.guilavender, .5);
		case 339:
			return "#FF7E67";
		case 340:
			return color.drose;
		case 341:
			return "#5BCEF5";
		case 342:
			return "#feb940";
		case 343:
			return "#a8b3c6";
		case 344:
			return "#9fc1dc";
		case 345:
			return "#8dd1eb";
		case 346:
			return "#78e1f2";
		case 347: // Clone Strike
			return "#8adea0";
		case 1000: // Star background
			if (specialColors[1000] === undefined) {
				specialColors[1000] = function (ctx, instance) {
					if (!imageCache.starbackground || !imageCache.starbackground.ready) return;
					const pattern = ctx.createPattern(imageCache.starbackground, "repeat");
					const screenWorldOriginX = -global.player._renderx * global._ratio + global._screenWidth / 2;
					const screenWorldOriginY = -global.player._rendery * global._ratio + global._screenHeight / 2;
					pattern.setTransform(new DOMMatrix().translate(screenWorldOriginX, screenWorldOriginY));
					ctx.fillStyle = pattern;
					ctx.fill()
				}
			}
			return "#000000"
			break;
		case 1001: // Inverted Star background
			if (specialColors[1001] === undefined) {
				specialColors[1001] = function (ctx, instance) {
					if (!imageCache.starbackgroundInverted || !imageCache.starbackgroundInverted.ready) return;
					const pattern = ctx.createPattern(imageCache.starbackgroundInverted, "repeat");
					const screenWorldOriginX = -global.player._renderx * global._ratio + global._screenWidth / 2;
					const screenWorldOriginY = -global.player._rendery * global._ratio + global._screenHeight / 2;
					pattern.setTransform(new DOMMatrix().translate(screenWorldOriginX, screenWorldOriginY));
					ctx.fillStyle = pattern;
					ctx.fill()
				}
			}
			return "#FFFFFF"
			break;
		default:
			if (typeof colorID == "string") {
				if (colorID.length !== 7) {
					return "#000000"//else it would break undefined colorID entities
					throw new Error("Colors should be a 6 number hexcode (i.e. #000000), got:\"" + colorID + "\"")
				}
				return colorID
			} else {
				return "#000000";//colorID;
			}
	}
}

function getColorDark(givenColor) {
	if (config.noBorders) return givenColor;
	if (config.rgbBorders) return getColor(global._tankMenuColor);
	let dark = (config.neon | config.inverseBorderColor) ? color.white : color.black;
	return config.darkBorders ? dark : mixColors(givenColor, dark, color.border);
}

function getZoneColor(cell, real, seed = 1) {
	if (cell.slice(0, -1) === "por") {
		switch (+cell.slice(3)) {
			case 1:
				return mixColors(color.blue, color.guiwhite, 1 / 3);
			case 2:
				return mixColors(color.red, color.guiwhite, 1 / 3);
			case 3:
				return mixColors(color.green, color.guiwhite, 1 / 3);
			case 4:
				return mixColors(color.pink, color.guiwhite, 1 / 3);
		}
	}
	switch (cell) {
		case "n_b1":
		case "bas1":
		case "bad1":
		case "dom1":
			return color.blue;
		case "n_b2":
		case "bas2":
		case "bad2":
		case "dom2":
		case "boss":
			return color.red;
		case "n_b3":
		case "bas3":
		case "bad3":
		case "dom3":
			return color.green;
		case "n_b4":
		case "bas4":
		case "bad4":
		case "dom4":
			return color.pink;
		case "n_b5":
		case "bas5":
		case "bad5":
		case "dom5":
			return color.yellow;
		case "n_b6":
		case "bas6":
		case "bad6":
		case "dom6":
			return color.orange;
		case "n_b7":
		case "bas7":
		case "bad7":
		case "dom7":
			return "#F700FF";
		case "n_b8":
		case "bas8":
		case "bad8":
		case "dom8":
			return color.teal;
		case "domi":
			return color.gold;
		case "edge":
			return mixColors(color.white, color.guiblack, 1 / 3);
		case "port":
			return color.guiblack;
		case "spn1":
			return mixColors(color.blue, color.guiwhite, 2 / 3);
		case "spn2":
			return mixColors(color.red, color.guiwhite, 2 / 3);
		case "watr":
			return color.azure;
		case "deep":
			return color.deepazure;
		// KEEP NEST AT THE BOTTOM
		case "nest":
			return real ? color.purple : color.lavender;
		default:
			if (cell.startsWith("#")) { return cell } else { return real ? (color.white) : (color.guiwhite); }
	}
}

function setColors(context, givenColor) {
	if (config.neon) {
		context.fillStyle = getColorDark(givenColor);
		context.strokeStyle = givenColor;
	} else {
		context.fillStyle = givenColor;
		context.strokeStyle = getColorDark(givenColor);
	}
}

function setColorsUnmix(context, givenColor) {
	context.fillStyle = givenColor;
	context.strokeStyle = "rgba(0,0,0,0)";
}

function setColorsUnmixB(context, givenColor) {
	context.fillStyle = "rgba(0,0,0,0)";
	context.strokeStyle = getColorDark(givenColor);
}

const hslToColor = (function () {
	return function (h, s, l) {
		l /= 100;
		const a = s * Math.min(l, 1 - l) / 100;
		const f = n => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	};
})();

export {
	color,
	setColor,
	themes,
	specialColors,
	getColor,
	getColorDark,
	getZoneColor,
	setColors,
	setColorsUnmix,
	setColorsUnmixB,
	hslToColor
};
