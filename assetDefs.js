import { setAsset } from "../shared/assets.js";

// Here's some examples, they work in their intended places.
// These can be used for any data
// Suggest expanding this system in the discord

// Use getAsset("assetName") for certain values in defs


// For BODY or PROP.SHAPE
setAsset("arrowShape", "M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z", {
	path2d: true, 
	path2dDiv: 12
});
setAsset("line", "M 2 0 L -2 0", {
	path2d: true, 
	path2dDiv: 1
});
setAsset("cursor", "M -2.8557 4.8789 L -2.9729 -6.4323 L 5.7747 0.9078 L 1.9333 0.8317 L 4.0149 5.532 L 1.7136 6.4005 L -0.4142 1.9281 L -2.8557 4.8789", {
	path2d: true, 
	path2dDiv: 4.6
});
setAsset("oval", "M 0 -1 A 1.4 1 0 0 0 0 1 A 1.4 1 0 0 0 0 -1", {
	path2d: true, 
	path2dDiv: .97
});
setAsset("aster", "M 1.3 0 L -1 -1 L -0.3 0 L -1 1 z", {
	path2d: true,
	path2dDiv: .9
});
setAsset("rectangle", "M 1 -0.4 L 1 0.4 L -1 0.4 L -1 -0.4 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("lifesteal", "M 1 0 L 0.48 -0.9 L -0.48 -0.9 L -1 0 L -0.48 0.9 L 0.48 0.9 L 1 0 M 0.45 0 Q 0 0.9 -0.45 0 C 0 -0.9 0.45 0 0.45 0 T 0.45 0", {
	path2d: true,
	path2dDiv: .9
});
setAsset("starBetter", "M 0.618 -1.9021 l 0.0362 1.4418 l 1.3695 0.445 l -1.3371 0.4908 l -0.0398 1.417 l -0.8941 -1.1317 l -1.3885 0.39 l 0.8007 -1.1698 l -0.7932 -1.183 l 1.3695 0.445 z", {
	path2d: true,
	path2dDiv: .95
});
setAsset("card", "M 1.408 -0.704 L -1.408 -0.704 L -1.408 0.704 L 1.408 0.704 Z M -0.4928 0 A 0.352 0.352 90 0 1 0.4928 0 A 0.352 0.352 90 0 1 -0.4928 0", {
	path2d: true,
	path2dDiv: 1
});
setAsset("tramplePort", "M -1.5 -2.5981 L -1.5 2.5981 L 3 0 Z M 2.5 0 A 0 1 0 0 1 -1.2 2.1 L -1.2 -2.1 Z", {
	path2d: true,
	path2dDiv: 1.7
});
setAsset("xQcPort", "M 3 -0 L 0.9271 -2.8532 L -2.4271 -1.7634 L -2.4271 1.7634 L 0.9271 2.8532 Z M 0.7725 2.3776 A 1 0 0 0 1 -2.0225 1.4695 L -2.0225 -1.4695 L 0.7725 -2.3776 L 2.5 0 Z", {
	path2d: true,
	path2dDiv: 1.7
});
setAsset("exPebble", "M 0 3 L 1 1 L 3 -0 L 1 -1 L -0 -3 L -1 -1 L -3 0 L -1 1 Z M 2.1213 2.1213 L 1.4142 -0 L 2.1213 -2.1213 L -0 -1.4142 L -2.1213 -2.1213 L -1.4142 0 L -2.1213 2.1213 L 0 1.4142 Z", {
	path2d: true,
	path2dDiv: 1.7
});
setAsset("shield", "M 5 0 C 3 -2 1 -4 -3.5 -4.3 A 0.7 1 0 0 1 -3.5 4.3 C 1 4 3 2 5 0", {
	path2d: true,
	path2dDiv: 3
});
setAsset("chip", "M 2 0 C 1 -1 -1 -1 -2 0 C -1 1 1 1 2 0", {
	path2d: true,
	path2dDiv: 1.8
});
setAsset("roundedTri", "M 3 0 C 2.5 -1 -0.384 -2.6651 -1.5 -2.5981 C -2.116 -1.6651 -2.116 1.6651 -1.5 2.5981 C -0.384 2.6651 2.5 1 3 0", {
	path2d: true,
	path2dDiv: 1.7
});
setAsset("thunderbolt", "M -2.905 -0.637 L -0.497 0.021 L -0.604 -0.733 L 2.327 0.565 L 0.019 0.169 L 0.114 0.907 Z", {
	path2d: true,
	path2dDiv: 1.13
});
setAsset("thunderboltAlt", "M -2.905 0.637 L -0.497 -0.021 L -0.604 0.733 L 2.327 -0.565 L 0.019 -0.169 L 0.114 -0.907 Z", {
	path2d: true,
	path2dDiv: 1.13
});
setAsset("cloud", "M -0.5 -1 A 1 1 -90 0 0 -0.5 1 A 1 1 -90 0 0 1 2 L 1 -2 A 1 1 -90 0 0 -0.5 -1", {
	path2d: true,
	path2dDiv: 2
});
setAsset("tricorn", "M 1.2 0 Q 0 -1 -1 -1 L -1.6 0 L -1 1 Q 0 1 1.2 0 L 1.1 0 Q 0 0.8 -1 0.8 L -1.5 0 L -1 -0.8 Q 0.5 -0.6 1.1 0 M 1 0 Q -1 -1 -1 0 Q -1 1 1 0", {
	path2d: true,
	path2dDiv: 1.2
});
setAsset("glasses", "M -0.6 -1.8 L -0.6 -1.02 Q 0 -0.12 -0.6 1.02 L -0.6 1.7 L -0.42 2 V 1.7 Q 1.2 0.9 0 0 Q 1.2 -0.9 -0.42 -1.7 L -0.42 -2 L -0.6 -1.7 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("hoverboard", "M 2 -0.5 L -2 -0.5 C -3 -0.5 -3 0.5 -2 0.5 H 2 C 3 0.5 3 -0.5 2 -0.5", {
	path2d: true,
	path2dDiv: 2
});
setAsset("axeHead", "M 1 -2 Q 1.5 1 3 3 C 1 4 -1 4 -3 3 Q -1.5 1 -1 -2 Z", {
	path2d: true,
	path2dDiv: 2
});
setAsset("bloc_kit", "M 2 -1 Q 0 -0.7 -2 -1 Q -1.7 0 -2 1 Q 0 0.7 2 1 Q 1.7 0 2 -1", {
	path2d: true,
	path2dDiv: 2.2
});
setAsset("newAxeHead", "M 1 -2 L 1 0 Q 1 1 3 3 C 1 4 -1 4 -3 3 Q -1 1 -1 0 L -1 -2 Z", {
	path2d: true,
	path2dDiv: 2
});
setAsset("shuriken", "M 0 -1 L 0.3 -0.3 L 1 0 L 0.3 0.3 L 0 1 L -0.3 0.3 L -1 0 L -0.3 -0.3 Z M -0.25 0 A 1 8 0 0 0 0.25 0 A 1 8 0 0 0 -0.25 0", {
	path2d: true,
	path2dDiv: 1
});
setAsset("pin", "M 0 1 Q 0 0 1 -1 A 1 1 0 0 0 1 -2 Q 0 -3 -1 -2 A 1 1 0 0 0 -1 -1 Q 0 0 0 1 M 0 -2 C 1 -2 0 -1 0 -1 C 0 -1 -1 -2 0 -2", {
	path2d: true,
	path2dDiv: 1.7
});
setAsset("woodLance", "M 0 0.7 L 1.98 0.17 L 1.7 0.08 L -0.122 0.38 Z M 0 0.28 L 1.7 0 L 2.044 0.121 L 2.542 0.008 L 1.634 -0.18 L 1.279 -0.118 L 0.227 -0.402 Z M -0 -0.53 L 1.286 -0.19 L 1.611 -0.24 L 0.089 -0.773 z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("strangerLance", "M 0.2 -0.69 L 2.605 0 L 0.2 0.69 M 0.56 0 L 1.172 -0.577 L 1.172 0.577 Z M 1 0 L 1.55 -0.466 L 1.55 0.466 Z M 1.84 0.38 L 1.467 0 L 1.84 -0.38 Z M 1.88 0 L 2.19 -0.231 L 2.19 0.235 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("swirl", "M 1 -0 A 1 1 180 0 0 -1 0 A 1 1 180 0 0 1 -0 M -2 0 A 1 1 180 0 0 2 -0 L 4 -0 L 2.4 0.8 A 1 1 180 0 1 -2 0 M 2 0 A 1 1 0 0 0 -2 0 L -4 0 L -2.4 -0.8 A 1 1 0 0 1 2 0", {
	path2d: true,
	path2dDiv: .9
});
setAsset("bow", "M -1 -4 C -1 -4 -1 -3 0 -2 C 0 -1.8 1 -1 1 -0.3 L 1.4 0 L 1 0.3 C 1 1 0 1.8 0 2 C -1 3 -1 4 -1 4 L -1 3 Q 1 1 0 0 Q 1 -1 -1 -3 L -1 -4", {
	path2d: true,
	path2dDiv: 1.2
});
setAsset("hollowShell", "M -57385.447387376305 -33181.55590000001 L -28718.421162262 -49426.919408141584 -307.474000000002 -66115.5559 28103.473162261987 -49426.919408141584 56770.4993873763 -33181.55590000001 56514.420324524006 -247.55590000000666 56770.4993873763 32686.444100000008 28103.473162261987 48931.80760814159 -307.474000000002 65620.4441 -28718.421162262 48931.80760814159 -57385.447387376305 32686.444100000008 -57129.368324524 -247.55590000000666 Z M 52648.5558 -248.46839999999793 C 52648.5558 -29495.259612039496 28939.347012039514 -53204.4684 -307.4441999999908 -53204.468400000005 -14352.248635942873 -53204.468400000005 -27821.814447420693 -47625.19156160894 -37752.99090451482 -37694.01510451482 -47684.16736160894 -27762.8386474207 -53263.4442 -14293.272835942895 -53263.4442 -248.46839999999793 -53263.4442 28998.322812039492 -29554.235412039503 52707.5316 -307.44420000000537 52707.5316 28939.347012039492 52707.5316 52648.555799999995 28998.322812039507 52648.5558 -248.46839999999065 Z", {
	path2d: true,
	path2dDiv: 69500
});
setAsset("nail", "M -0.654 -0.654 L -0.778 -0.545 V 0.65 L -0.654 0.778 H -0.348 L -0.228 0.654 V -0.545 L -0.331 -0.654 Z M 1.6 0 L -0.1 -0.332 V 0.332 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("staple", "M 0 1 L -1 1 V -1 L 0 -1 V -0.89 H -0.906 V 0.89 H 0 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("savior", "M 2.5 -2 V 2 L -3.5 4 L -2.5 0 L -3.5 -4 Z", {
	path2d: true,
	path2dDiv: 2.3
});
setAsset("megaphone", "M 2 2.5 L 2 -2.5 L 0 -1 H -2 L -2 1 H 0 Z", {
	path2d: true,
	path2dDiv: 1.8
});
setAsset("soundwave", "M -2 -3 Q 1.5 -2.5 1.5 0 Q 1.5 2.5 -2 3 C 1 2 1 -2 -2 -3", {
	path2d: true,
	path2dDiv: 2.2
});
setAsset("crossbow", "M 2 1 L 1 0.7 L -4.7 0.2 V -0.2 L 1 -0.7 L 2 -1 L 2 1 M 1.989 1.115 C 1.902 2.224 1.397 2.874 -0.167 3.816 C 1.121 2.764 1.517 2.006 1.328 0.92 M 1.989 -1.115 C 1.902 -2.224 1.397 -2.874 -0.167 -3.816 C 1.121 -2.764 1.517 -2.006 1.328 -0.92", {
	path2d: true,
	path2dDiv: 1.2
});
setAsset("filledShuriken", "M 0 -1 L 0.3 -0.3 L 1 0 L 0.3 0.3 L 0 1 L -0.3 0.3 L -1 0 L -0.3 -0.3 Z", {
	path2d: true,
	path2dDiv: 1
});
setAsset("mineRadar", "M 0 -3 A 1 1 0 0 0 0 3 A 1 1 0 0 0 0 -3 M 0 2.8 A 1 1 0 0 1 0 -2.8 A 1 1 0 0 1 0 2.8", {
	path2d: true,
	path2dDiv: 1
});
setAsset("flag", "M -2 -4 V 8 H -1 V -4 Z M -0.5 -4 Q 4 -2.5 8 -2 C 6 -1 3 1 -0.5 1 Z", {
	path2d: true,
	path2dDiv: 7.2
});
setAsset("minecart", "M -1 1 L 1 1 L 2 0 L 1 -1 L -1 -1 L -2 0 Z", {
	path2d: true,
	path2dDiv: 1.4
});
setAsset("boat", "M 2 0 C 1.5 0.7 0.5 1 -0.5 1 S -1.8 1 -2 0 M 2 0 C 1.5 -0.7 0.5 -1 -0.5 -1 S -1.8 -1 -2 0", {
	path2d: true,
	path2dDiv: 1.12
});
setAsset("bigFish", "M 1.5 -1 L -1 -2 L -1 -1 L -3 0 L -1 1 L -1 2 L 1.5 1 Z", {
	path2d: true,
	path2dDiv: 2.5
});
setAsset("x", "M -1.0944 1.0416 c 0.0252 -0.0348 0.1908 -0.2628 0.3672 -0.5076 c 0.1776 -0.2436 0.3372 -0.4644 0.3576 -0.4896 l 0.0348 -0.0444 l -0.3048 -0.4236 c -0.168 -0.2316 -0.3648 -0.5064 -0.4392 -0.6084 l -0.1332 -0.186 l 0.3204 -0.0036 c 0.1764 -0.0012 0.3276 0 0.3348 0.0024 c 0.0072 0.0024 0.1308 0.1692 0.2748 0.3696 c 0.144 0.2004 0.2664 0.3684 0.2724 0.3756 c 0.0072 0.0072 0.0144 0.006 0.0216 -0.006 c 0.006 -0.0096 0.1284 -0.1812 0.2724 -0.3804 l 0.2616 -0.3624 l 0.3396 -0.0012 l 0.3408 0 l -0.0408 0.0564 c -0.4308 0.5952 -0.7872 1.0872 -0.816 1.1232 l -0.036 0.0468 l 0.0228 0.0312 c 0.024 0.0336 0.2028 0.2808 0.5472 0.7584 c 0.1116 0.1548 0.2088 0.2892 0.216 0.2976 c 0.0084 0.0108 -0.0576 0.0144 -0.3228 0.0144 l -0.3348 0 l -0.222 -0.3072 c -0.1224 -0.1704 -0.2256 -0.3144 -0.2304 -0.3216 c -0.0072 -0.0096 -0.0132 -0.0072 -0.0216 0.0048 c -0.006 0.0096 -0.1092 0.1548 -0.2304 0.3216 l -0.2184 0.3024 l -0.3396 0 l -0.3408 0 l 0.0468 -0.0624 z", {
	path2d: true,
	path2dDiv: 1.4
});
setAsset("osPart", "M 1 1 L 1 -1 L -1 -1 L -1 1 L 1 1 M 0.95 0.95 L -0.95 0.95 L -0.95 -0.95 L 0.95 -0.95 L 0.95 0.95", {
	path2d: true,
	path2dDiv: 1
});
setAsset("caret", "M 0 -6 L 9 3 H 6 L 0 -3 L -6 3 H -9 Z", {
	path2d: true,
	path2dDiv: 3
});
setAsset("teleRingKys", "M 0 -1.05 A 0.21 0.21 90 0 0 0 1.05 A 0.21 0.21 90 0 0 0 -1.05 M 0 -0.924 A 0.21 0.21 90 0 1 0 0.924 A 0.21 0.21 90 0 1 0 -0.924", {
	path2d: true,
	path2dDiv: 1
});

//// v o i d Switch
setAsset("voidRunner", "M 1.3 0 Q 1.3 -2 -1.45 -1 Q -0.809 -0.814 -1.6 -0.503 Q -0.4 -0.25 -1.7 0 Q -0.4 0.25 -1.6 0.503 Q -0.809 0.705 -1.531 1.006 Q 1.3 2 1.3 0", {
	path2d: true,
	path2dDiv: 1.8
});
setAsset("voidRunnerMouth", "M 0.907 -1.588 L 1.819 -0.911 Q 1.322 -0.643 2.007 -0.299 Q 0.863 0 1.999 0.313 Q 1.247 0.628 1.772 0.952 L 0.769 1.609 L 1.577 0.975 Q 1.111 0.728 1.539 0.31 Q 0.521 -0.037 1.597 -0.33 Q 1.209 -0.749 1.628 -0.911 Z", {
	path2d: true,
	path2dDiv: 1.9
});


// For BODY
//// full-screen on images when importing them 
setAsset("freeze", "https://static.wikia.nocookie.net/6576da1d-227a-4aca-a217-42e5b64a647c", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("poison", "https://static.wikia.nocookie.net/070911c3-6450-4a23-b9c5-7e80f8e1dee9", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("relapse", "https://static.wikia.nocookie.net/a2830b6c-4534-4c34-bece-d3ccc4edda32", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("confuse", "https://static.wikia.nocookie.net/d6d9b70d-afcf-4227-b8d4-184330ff0e84", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("electrocute", "https://static.wikia.nocookie.net/4b790c9d-ef23-419b-b9dc-1ed088e008ca", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("bleed", "https://static.wikia.nocookie.net/fe0a61c2-cb39-477e-8317-2f5f18da8630", {
	image:true,
	p1:2,
	p2:2,
	p3:4,
	p4:4
});
setAsset("vbiedPhone", "https://static.vecteezy.com/system/resources/previews/055/389/238/non_2x/classic-red-dialup-telephone-isolated-on-a-transparent-background-showcasing-vintage-design-and-nostalgic-charm-old-red-dialup-phone-isolated-on-a-transparent-background-free-png.png", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("edsTablet", "https://th.bing.com/th/id/R.b51f2faf65c9892f48b9285a82741447?rik=TXfgTYW1PqgfZg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f07%2fIPad_Air_2_Wikipedia.png&ehk=%2b6gFgGtfgoefUpADUfz6BoJL34v%2bxxHPqry3PT1OM9M%3d&risl=1&pid=ImgRaw&r=0", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});



//// UD Switch 
// whistle 
setAsset("whis_helmet", "https://static.wikia.nocookie.net/3c1b126c-87d5-4226-b8d4-7721a479bc54", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("whis_sword", "https://static.wikia.nocookie.net/baf569a3-866f-4ae7-b979-fc6d0d597bc5", {
	image: true,
	p1: 8, // x axis 
	p2: 2, // y axis 
	p3: 9.75, // length 
	p4: 4 // width 
});
setAsset("whis_shield", "https://static.wikia.nocookie.net/1ed08198-99cb-412b-89e7-1ded9eede961", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});

// wanakatour 
setAsset("wana_headwear", "https://static.wikia.nocookie.net/45bfb1ce-94c2-4cc8-85de-ff6a092d90fd", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("spear", "https://static.wikia.nocookie.net/26158408-a687-4754-8fe6-82d63ac9a372", {
	image: true,
	p1: 2, // x axis 
	p2: 2, // y axis 
	p3: 9.75, // length 
	p4: 4 // width 
});

// stelex 
setAsset("pickaxe", "https://static.wikia.nocookie.net/290f0a2f-78f9-4691-91e9-57ceff2e3324", {
	image: true,
	p1: 2, 
	p2: 2,
	p3: 5.5, 
	p4: 4 
});
setAsset("minerHat", "https://static.wikia.nocookie.net/38e28347-44da-4c5e-b820-56697fc11241", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("stoneBall", "https://static.wikia.nocookie.net/5f64f886-fb13-4f2e-9e09-a3fd9bd0d81d", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("milkBucket", "https://static.wikia.nocookie.net/46a9a835-918e-4c53-99f6-2eb7c96d95eb", {
	image: true,
	p1: 2, 
	p2: 2,
	p3: 4.3, 
	p4: 4 
});

// fester 
setAsset("magicHat", "https://static.wikia.nocookie.net/3258fb3a-7cc2-478f-b34d-9d82f3357605", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("fragCard", "https://static.wikia.nocookie.net/398c115b-722c-4955-a345-c75e39632e95", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("bindingCard", "https://static.wikia.nocookie.net/98bf268c-577d-4795-8179-2fe544cbef5d", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("swapCard", "https://static.wikia.nocookie.net/ca55cb35-5507-4677-8187-30d388bf98a4", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});

// deima
setAsset("deima_hair", "https://static.wikia.nocookie.net/73484bc8-eb31-45e2-b60f-9f0787f388da", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("bazooka", "https://static.wikia.nocookie.net/c6eee673-8926-4313-8998-9402c75976a9", {
	image: true,
	p1: 2, // x axis 
	p2: 2, // y axis 
	p3: 8, // length 
	p4: 4 // width 
});
setAsset("apple_missile", "https://static.wikia.nocookie.net/016d0ded-eb73-44c8-bddd-01914bf63d4d", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("ud_explode", "https://static.wikia.nocookie.net/345e552e-e6cc-47d9-8a54-349c9590c51c", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("banana_missile", "https://static.wikia.nocookie.net/af48c342-dd60-4932-a085-6afbb8f10715", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});
setAsset("orange", "https://static.wikia.nocookie.net/19d2e081-d06e-4f62-859f-298976edb3a8", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4 
});

// vj 
setAsset("prisonOutfit", "https://static.wikia.nocookie.net/86917a43-2f74-4373-9c91-a9e8daa7a04c", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("soapBar", "https://static.wikia.nocookie.net/9d7473f6-12c5-43dc-9664-1222c07bd47c", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("redBub", "https://static.wikia.nocookie.net/0e5cb6d5-a311-42f7-ab6f-736d195f24cc", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("greenBub", "https://static.wikia.nocookie.net/a13d7a2e-1772-43c9-ab56-b10bab854d37", {
	image:true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});

// nyx 
setAsset("snorkel", "https://static.wikia.nocookie.net/a4d32e13-7abc-4022-a45c-0c6f3d1c7448", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("trident", "https://static.wikia.nocookie.net/2b24b5cb-893d-4e58-a621-609cd6324139", {
	image: true,
	p1: 8, // x axis 
	p2: 2, // y axis 
	p3: 9.75, // length 
	p4: 4 // width 
});
setAsset("redFish", "https://static.wikia.nocookie.net/c88abc31-ae53-4d3a-8bfa-6c3dbc67eea6", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});
setAsset("tidepool", "https://static.wikia.nocookie.net/ab25bd6d-aea4-4584-83b7-b967f97540ed", {
	image: true,
	p1: 2,
	p2: 2,
	p3: 4,
	p4: 4
});



/*setAsset("ranImage", "https://picsum.photos/100", {
	image:true,
	p1:2, // x position 
	p2:2, // y position 
	p3:4, // x stretch
	p4:4 // y stretch
})
*/