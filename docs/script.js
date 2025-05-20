let skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 600,
    height: 400,
    //skin: "img/skin.png"
});
let adLockedAnimations = ["run","crouch","fly"];
let adLockedCapes = ["15th","million","minecraftexperience","snowman","home"];
const skinParts = ["head", "body", "rightArm", "leftArm", "rightLeg", "leftLeg"];
const skinPartsName = {
    "head":"Head",
    "body":"Body",
    "rightArm":"Right Arm",
    "leftArm":"Left Arm",
    "rightLeg":"Right Leg",
    "leftLeg":"Left Leg"
}
const backgrounds = {
  overworld: {
    name: "Overworld 🗺️",
    url: "https://i.imgur.com/YreOLil.jpeg"
  },
  nether: {
    name: "Nether 🔥",
    url: "https://i.imgur.com/py923uk.jpeg"
  },
  nether2: {
    name: "Nether v2.0 🔥",
    url: "https://i.imgur.com/tFfZi29.png"
  },
  farm: {
    name: "Farm 👩🏻‍🌾",
    url: "https://i.imgur.com/GZ9GbuA.jpeg"
  },
  tree: {
    name: "Tree 🌳",
    url: "https://i.imgur.com/CduaE3o.png"
  },
  hdsky: {
    name: "HD Sky ☁️",
    url: "https://i.imgur.com/UoqDJal.png"
  },
  sandoverworld: {
    name: "Sand overworld 🏜️",
    url: "https://i.imgur.com/O4MvMXB.png"
  },
  snowoverworld: {
    name: "Snow overworld ❄️",
    url: "https://i.imgur.com/wzv0jud.png"
  },
  globes: {
    name: "Globes 🎈",
    url: "https://i.imgur.com/Ygd5VQt.png"
  },
  cars: {
    name: "Cars 🚘",
    url: "https://i.imgur.com/fmdCy2y.jpeg"
  },
  galaxy: {
    name: "Galaxy 🪐",
    url: "https://i.imgur.com/axAE6Zl.jpeg"
  },
  mine: {
    name: "Mine 💎",
    url: "https://i.imgur.com/nQpmwA5.jpeg"
  }
}
const skinLayers = ["innerLayer", "outerLayer"];
const availableCapes = {
  "15th": {
    name: "15th Anniversary 🎂",
    image: "https://i.imgur.com/nrZ43ye.png",
    link: "https://i.imgur.com/zwNkVac.png"
  },
  "mcchampionship": {
    name: "MC Championship 🏆",
    image: "https://i.imgur.com/jWFfwfQ.png",
    link: "https://i.imgur.com/g5npzTh.png"
  },
  "million": {
    name: "Million Customer ⭐",
    image: "https://i.imgur.com/ydrIKpz.png",
    link: "https://i.imgur.com/WjdvpNG.png"
  },
  "realmmapmaker": {
    name: "Realms Mapmaker ⚒️",
    image: "https://i.imgur.com/sq2ar4P.png",
    link: "https://i.imgur.com/8hTV1YG.png"
  },
  "founder": {
    name: "Founder 👑",
    image: "https://i.imgur.com/KyloQdg.png",
    link: "https://i.imgur.com/yFSezvu.png"
  },
  "home": {
    name: "Home 🏠",
    image: "https://i.imgur.com/jYosCOl.png",
    link: "https://i.imgur.com/ZYRpfh9.png"
  },
  "pan": {
    name: "Pan 🥞",
    image: "https://i.imgur.com/VMQTmpa.png",
    link: "https://i.imgur.com/5isxX1M.png"
  },
  "db": {
    name: "dB 💻",
    image: "https://i.imgur.com/yReD710.png",
    link: "https://i.imgur.com/EjPZi2u.png"
  },
  "mojangstudios": {
    name: "Mojang Studios 🎦",
    image: "https://i.imgur.com/xJqlfXg.png",
    link: "https://i.imgur.com/e4FXhfZ.png"
  },
  "mojang": {
    name: "Mojang 🍎",
    image: "https://i.imgur.com/x4FdUf8.png",
    link: "https://i.imgur.com/aGgsiqv.png"
  },
  "mojangclassic": {
    name: "Mojang Classic 🍏",
    image: "https://i.imgur.com/ryFn8oJ.png",
    link: "https://i.imgur.com/Hatx6bp.png"
  },
  "prismarine": {
    name: "Prismarine 💠",
    image: "https://i.imgur.com/ZySEuCl.png",
    link: "https://i.imgur.com/neoPBdc.png"
  },
  "snowman": {
    name: "Snowman ⛄",
    image: "https://i.imgur.com/Z51XUye.png",
    link: "https://i.imgur.com/CiphDsG.png"
  },
  "spade": {
    name: "Spade ♠️",
    image: "https://i.imgur.com/gkGu16w.png",
    link: "https://i.imgur.com/RavRKOE.png"
  },
  "translator": {
    name: "Translator 🎙️",
    image: "https://i.imgur.com/Txw5XBX.png",
    link: "https://i.imgur.com/TUv9oIy.png"
  },
  "menace": {
    name: "Menace ⚠️",
    image: "https://i.imgur.com/JCAYsz4.png",
    link: "https://i.imgur.com/7Mim1Fw.png"
  },
  "turtle": {
    name: "Turtle 🐢",
    image: "https://i.imgur.com/ESV01ZY.png",
    link: "https://i.imgur.com/sy8FDNx.png"
  },
  "scrolls": {
    name: "Scrolls 📜",
    image: "https://i.imgur.com/wcVIGdr.png",
    link: "https://i.imgur.com/Y8Oi1iG.png"
  },
  "cobalt": {
    name: "Cobalt 🔵",
    image: "https://i.imgur.com/5FfGAXC.png",
    link: "https://i.imgur.com/YduRCS5.png"
  },
  "mojiramoderator": {
    name: "Mojira Moderator 👮🏻‍♀️",
    image: "https://i.imgur.com/eeka9ho.png",
    link: "https://i.imgur.com/fawzmBY.png"
  },
  "minecraftexperience": {
    name: "Minecraft Experience 🧪",
    image: "https://i.imgur.com/uWGmRsR.png",
    link: "https://i.imgur.com/W56Bc9c.png"
  },
}
const availableAnimations = {
	idle: {
        name: "Idle",
        animation: new skinview3d.IdleAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/idle.gif",
    },
	walk: {
        name: "Walking",
        animation: new skinview3d.WalkingAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/walk.gif",
    },
	run: {
        name: "Running",
        animation: new skinview3d.RunningAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/run.gif",
    },
	fly: {
        name: "Flying",
        animation: new skinview3d.FlyingAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/fly.png",
    },
	wave: {
        name: "Waving",
        animation: new skinview3d.WaveAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/wave.gif",
    },
	crouch: {
        name: "Crouching",
        animation: new skinview3d.CrouchAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/crouch.gif",
    },
	hit: {
        name: "Hitting",
        animation: new skinview3d.HitAnimation(),
        image:"https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/hit.gif",
    },
};
// Remove the animation
//skinViewer.animation = null;
let capeMode = 1;
let backgoundIndex = 0;
let lastCapeIdentifier;
function updateSkinRender() {
    let username = document.getElementById("inputText").value
    console.log(`Loading 3D render for: ${username}`);
    skinViewer.loadSkin(`https://mc-heads.net/skin/${username}.png`);
}
function updateCape(capeLink) {
  let capeUrl = "https://crafatar.com/capes/853c80ef3c3749fdaa49938b674adae6";
  if(capeLink) {
    capeUrl = capeLink;
  }else if(typeof lastCapeIdentifier != "undefined") {
    if(availableCapes[lastCapeIdentifier]) {
      capeUrl = availableCapes[lastCapeIdentifier].link;
    }
  }
  if(capeMode == 0) { //Nothing
    skinViewer.loadCape(null);
  }else if(capeMode == 1) { //Cape
    skinViewer.loadCape(capeUrl);
  }else { //Elytras
    skinViewer.loadCape(capeUrl, { backEquipment: "elytra" });
  }
}
function previousPanorama() {
  let landscape = document.getElementById("button-toggle-landscape").checked;
  if(!landscape) {
    document.getElementById('bg-color-picker-div').style.display = "none";
    document.getElementById("button-toggle-landscape").checked = true
  }
  backgoundIndex--;
  if(backgoundIndex < 0) {
    backgoundIndex = Object.keys(backgrounds).length - 1;
  }
  updateLandscape();
}
function nextPanorama() {
  let landscape = document.getElementById("button-toggle-landscape").checked;
  if(!landscape) {
    document.getElementById('bg-color-picker-div').style.display = "none";
    document.getElementById("button-toggle-landscape").checked = true
  }
  backgoundIndex++;
  if(backgoundIndex >= Object.keys(backgrounds).length) {
    backgoundIndex = 0;
  }
  updateLandscape();
}
function updateSpeed() {
    let speed = parseFloat(document.getElementById("speed").innerText);
    //console.log(`Setting speed to ${speed}`);
    skinViewer.animation.speed = speed;
}
function updateLandscape() {
    let landscapeTitle = document.getElementById("bgtitle");
    let landscape = document.getElementById("button-toggle-landscape").checked;
    //console.log(landscape)
    if(landscape) {
      let backgoundIdentifier = Object.keys(backgrounds)[backgoundIndex];
      let bgData = backgrounds[backgoundIdentifier];
      if(typeof bgData != "undefined") {
        skinViewer.loadPanorama(bgData.url);
        landscapeTitle.innerText = bgData.name;
      }
    }else{
      skinViewer.background = document.getElementById("bg-color-picker").value;
      landscapeTitle.innerText = `Color ${document.getElementById("bg-color-picker").value}`;
    }
}
function selectCape(capeType) {
    if(typeof adBlockEnabled != "undefined") {
      if(adBlockEnabled) {
        if(adLockedCapes.includes(capeType)) return;
      }
    }
    if(availableCapes[capeType]) {
        lastCapeIdentifier = capeType;
        updateCape(availableCapes[capeType].link);
        updateSpeed();
        //lockCapes(undefined,5);
    }
}
function selectAnimation(animationType) {
    if(typeof adBlockEnabled != "undefined") {
      if(adBlockEnabled) {
        if(adLockedAnimations.includes(animationType)) return;
      }
    }
    if(availableAnimations[animationType]) {
        if(globalModelsLock) return;
        skinViewer.animation = availableAnimations[animationType].animation;
        updateSpeed();
        lockAnimations(undefined,5);
    }
}
function startRender() {// Change viewer size
    skinViewer.width = 600;
    skinViewer.height = 400;
    
    let username = document.getElementById("inputText").value
    //console.log(`Loading 3D render for: ${username}`);

    // Load another skin
    updateSkinRender();

    // Load a cape
    //skinViewer.loadCape("https://mc-heads.net/skin/AlonsoAliaga.png");
    
    // Load an elytra (from a cape texture)
    updateCape();
    
    // Unload(hide) the cape / elytra
    //skinViewer.loadCape(null);
    
    // Set the background color
    skinViewer.background = 0x5a76f3;
    
    // Set the background to a normal image
    //skinViewer.loadBackground("../assets/images/panorama.png");
    
    // Set the background to a panoramic image
    updateLandscape();
    
    // Change camera FOV
    skinViewer.fov = 70;
    
    // Zoom out
    skinViewer.zoom = 0.5;

    skinViewer.controls.enablePan = true
    // Rotate the player
    //skinViewer.autoRotate = false;
    
    // Apply an animation
    selectAnimation("run");
    
    // Set the speed of the animation
    updateSpeed();
    
    // Pause the animation
    skinViewer.animation.paused = false;
}


/**
 * Dear programmer:
 * When I wrote this code, only god and 
 * I knew how it worked.
 * Now, only god knows it!
 * 
 * You have been warned.
 * 
 * For more information visit: https://alonsoaliaga.com/DearProgrammer
 */
const defaultGradients = {
    0:{
      identifier:"default",
      colors:["#00cdac", "#02aab0"],
    },
    1:{
      identifier:"rainbow",
      colors:["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
    },
    2:{
      identifier:"instagram",
      colors:["#833ab4", "#fd1d1d", "#fcb045"],
    },
    3:{
      identifier:"fire",
      colors:["#A10100", "#DA3604", "#FE650D", "#FFC11F", "#FFF75D"],
    },
    4:{
      identifier:"amethyst",
      colors:["#D93894","#B327BB", "#6E48AA"],
    },
    5:{
      identifier:"tiktok",
      colors:["#FF0050", "#4B0018", "#00F2EA"],
    },
    6:{
      identifier:"rose",
      colors:["#F4C4F3","#FC67FA"]
    }
  }
  const fonts = {
    "accent": {
      "name": "Accent",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ĀBÇÐÊFǴĦÎĴĶĿMŇήÖPQŘŞŢŬVŴXŸƵābčďéfǥĥɨĵķłmņŇǒpqřşŧùvŵxŷž⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
      }
    },
    "big": {
      "name": "Big",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎÑOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789".split("")
      }
    },
    "bubble": {
      "name": "Bubble",
      "processed": {},
      "data": {
        tosearch: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨".split("")
      }
    },
    "currency": {
      "name": "Currency",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ÑØ₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ñØ₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789".split("")
      }
    },
    "cursed": {
      "name": "Cursed",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀ0123456789".split("")
      }
    },
    "elegant": {
      "name": "Elegant",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕ0123456789".split("")
      }
    },
    "greek": {
      "name": "Greek",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"αႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥ0123456789".split("")
      }
    },
    "knight": {
      "name": "Knight",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ḀḃḉḊḕḟḠḧḭjḲḶṁṆÑṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆñṏṖqṙṠṮṳṼẇẌẏẒ0123456789".split("")
      }
    },
    "krypto": {
      "name": "Krypto",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"คც८ძ૯Բ૭ҺɿʆқՆɱՈÑ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789".split("")
      }
    },
    "parenthesis": {
      "name": "Parenthesis",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒪⑴⑵⑶⑷⑸⑹⑺⑻⑼".split("")
      }
    },
    "random": {
      "name": "Random",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁÑᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789".split("")
      }
    },
    "small-caps": {
      "name": "Small caps 💎",
      "before": function(s) {
        return s.toLowerCase();
      },
      "processed": {},
      "data": {
        tosearch:"abcdefghijklmnñopqrstuvwxyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ0123456789-+".split(""),
        toreplace:"ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴñᴏᴘǫʀsᴛᴜᴠᴡxʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ₀₁₂₃₄₅₆₇₈₉₋₊".split("")
      }
    },
    "spaced": {
      "name": "Spaced",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮÑＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９".split("")
      }
    },
    "superscript": {
      "name": "SuperScript",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿñᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
      }
    },
    "tail": {
      "name": "Tail",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
      }
    },
    "tailuppercase": {
      "name": "Tail Uppercase",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝÑƠƤƢƦƧƬƲƔƜҲƳȤ0123456789".split("")
      }
    },
    "taillowercase": {
      "name": "Tail Lowercase",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυVɯҳɣȥʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
      }
    },
    "upsidedown": {
      "name": "Upside down",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNÑOԀΌᴚS⊥∩ΛWX⅄Zɐqɔpǝɟɓɥıɾʞlɯuñopqɹsʇuʌʍxʎz0⇂ᄅƐㄣގ9ㄥ89".split("")
      }
    },
    "upsidedown2": {
      "name": "Upside down #2",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ɐqɔpǝɟɓɥıſʞๅɯuuodbɹsʇnʌʍxʎzɐqɔpǝɟɓɥıſʞๅɯuũodbɹsʇnʌʍxʎz0123456789".split("")
      }
    },
    "upsidedown3": {
      "name": "Upside down #3",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"∀ʙCᴅєɻƋʜǀๅĸΓWИÑObƠɩƧ⊥∏ΛMXλZɑʙcᴅєɻმʜιɿĸгwиñoƅϭʁƨ⊥nʌʍx⑃z0123456789".split("")
      }
    },
    "weird": {
      "name": "Weird",
      "processed": {},
      "data": {
        tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
        toreplace:"ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ0123456789".split("")
      }
    }
  }
  const animations = {

  }
  const models = {
    "default": {
      image: "default.png",
      name: "Default",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "crossed": {
      image: "crossed-arms.png",
      name: "Crossed Arms",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "ultimate": {
      image: "ultimate.png",
      name: "Ultimate",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "walking": {
      image: "walking.png",
      name: "Walking",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "cheering": {
      image: "cheering.png",
      name: "Cheering",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "cowering": {
      image: "cowering.png",
      name: "Cowering",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "head": {
      image: "head.png",
      name: "Head",
      crops: [
        "full"
      ]
    },
    "dead": {
      image: "dead.png",
      name: "Dead",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "high_ground": {
      image: "opened-arms.png",
      name: "Opened Arms",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "archer": {
      image: "archer.png",
      name: "Archer",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "marching": {
      image: "marching.png",
      name: "Marching",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "crouching": {
      image: "crouching.png",
      name: "Crouching",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "criss_cross": {
      image: "crossed-legs.png",
      name: "Crossed Legs",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "isometric": {
      image: "isometric.png",
      name: "Isometric",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "relaxing": {
      image: "relaxing.png",
      name: "Relaxing",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "trudging": {
      image: "trudging.png",
      name: "Trudging",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "pointing": {
      image: "pointing.png",
      name: "Pointing",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "lunging": {
      image: "sword-attack.png",
      name: "Sword Attack",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "dungeons": {
      image: "dungeons.png",
      name: "Dungeons",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "facepalm": {
      image: "facepalm.png",
      name: "Facepalm",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "sleeping": {
      image: "sleeping.png",
      name: "Sleeping",
      crops: [
        "full",
        "bust"
      ]
    },
    "kicking": {
      image: "kicking.png",
      name: "Kicking",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "mojavatar": {
      image: "mojavatar.png",
      name: "Mojavatar",
      crops: [
        "full",
        "bust"
      ]
    },
    "reading": {
      image: "reading.png",
      name: "Reading",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "clown": {
      image: "clown.png",
      name: "Clown",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "bitzel": {
      image: "bitzel.png",
      name: "Bitzel",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "pixel": {
      image: "pixel.png",
      name: "Pixel",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "ornament": {
      image: "ornament.png",
      name: "Ornament",
      crops: [
        "full"
      ]
    },
    "profile": {
      image: "profile.png",
      name: "Profile",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "custom-1": {
      custom: true,
      url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve3VzZXJuYW1lfS97Y3JvcH0/d2lkZU1vZGVsPWh0dHBzOi8vY2RuLmx1bmFyZWNsaXBzZS5zdHVkaW8vbW9kZWwub2JqJnNsaW1Nb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZjYW1lcmFQb3NpdGlvbj17IngiOiItNC45NCIsInkiOiIzMi4wOSIsInoiOiItMjEuNiJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMy42NyIsInkiOiIxNi4zMSIsInoiOiIzLjM1In0=`,
      image: "custom/custom-1.png",
      name: "How are you?",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "custom-2": {
      custom: true,
      url: `aHR0cHM6Ly9tYy1oZWFkcy5uZXQvYXZhdGFyL3t1c2VybmFtZX0vMzAw`,
      image: "custom/custom-2.png",
      name: "Pixel Head",
      crops: [
        "None available"
      ]
    },
    "custom-3": {
      custom: true,
      url: `aHR0cHM6Ly9tYy1oZWFkcy5uZXQvaGVhZC97dXNlcm5hbWV9`,
      image: "custom/custom-3.png",
      name: "Isometric Head",
      crops: [
        "None available"
      ]
    },
    "custom-4": {
      custom: true,
      url: `aHR0cHM6Ly9yZW5kZXIuc2tpbm1jLm5ldC8zZC5waHA/dXNlcj17dXNlcm5hbWV9JnZyPTgmaHIwJmhyaD0tMzkmYWE9JmhlYWRPbmx5PXRydWUmcmF0aW89NTAucG5n`,
      image: "custom/custom-4.png",
      name: "Cube Head",
      crops: [
        "None available"
      ]
    },
    "custom-5": {
      custom: true,
      url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci93YWxscGFwZXIve2Nyb3B9L3t1c2VybmFtZX0=`,
      image: "custom/custom-5.png",
      name: "Wallpaper Render",
      crops: [
        "herobrine_hill",
        "quick_hide",
        "malevolent",
        "off_to_the_stars"
      ]
    },
    "custom-6": {
      custom: true,
      url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9kdW5nZW9ucy97dXNlcm5hbWV9L3tjcm9wfT9jYW1lcmFQb3NpdGlvbj17IngiOiIyNS4yNiIsInkiOiIyOS4zNCIsInoiOiItNTQuOTQifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjAuODUiLCJ5IjoiMTYuMzIiLCJ6IjoiLTAuMDgifSZpc29tZXRyaWM9dHJ1ZSZkaXJMaWdodFBvcz17IngiOiItMTAiLCJ5IjoiMTAiLCJ6IjoiLTEwIn0mZGlyTGlnaHRDb2xvcj0wMDQwZmYmZ2xvYmFsTGlnaHRDb2xvcj1mZmZmZmYmcHJvcE1vZGVsPWh0dHBzOi8vY2RuLmx1bmFyZWNsaXBzZS5zdHVkaW8vcHJvcFRlc3Qub2JqJnByb3BUZXh0dXJlPWh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTVkMmVkMTNkNmI1MzIwZDA3YTg0MGQ1MjIyZmI1MmY4NTkxMjQ4M2ZmNmE1YjVjNDY3NTFhZTQ5MDRjNWQ0ZCZnbG9iYWxMaWdodEludGVuc2l0eT0tMC4xNSZkaXJMaWdodEludGVuc2l0eT0wLjU1`,
      image: "custom/custom-6.png",
      name: "Friend Herobrine",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "custom-7": {
      restricted: true,
      custom: true,
      url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve3VzZXJuYW1lfS97Y3JvcH0/d2lkZU1vZGVsPWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbG9uc29BbGlhZ2EvQWxvbnNvQWxpYWdhQVBJL3JlZnMvaGVhZHMvbWFpbi9yZW5kZXJzL2xvb2stdGhlcmUub2JqJnNsaW1Nb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZjYW1lcmFQb3NpdGlvbj17IngiOiIzOC41NSIsInkiOiIzLjY3IiwieiI6Ii01MC41NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMC40OSIsInkiOiIxNi43OSIsInoiOiItNC4xMiJ9`,
      image: "custom/custom-7.png",
      name: "Look there! Is that a plane?",
      crops: [
        "full",
        "bust",
        "face"
      ]
    },
    "custom-8": {
      custom: true,
      url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve3VzZXJuYW1lfS97Y3JvcH0/d2lkZU1vZGVsPWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbG9uc29BbGlhZ2EvQWxvbnNvQWxpYWdhQVBJL3JlZnMvaGVhZHMvbWFpbi9yZW5kZXJzL3lvdS10b28tc21hbGwub2JqJnNsaW1Nb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZjYW1lcmFQb3NpdGlvbj17IngiOiIwIiwieSI6Ii0xNS44IiwieiI6Ii0zNi40MiJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMCIsInkiOiIxNi41NSIsInoiOiIwIn0=`,
      image: "custom/custom-8.png",
      name: "You are too small!",
      crops: [
        "full",
        "bust",
        "face"
      ]
    }
  }
  const modelsCache = new Map();
  const defaultCooldown = 10;
  let currentRenderType = "default";
  let currentCrop = "full";
  let copiedTimeout;
  function copyTextToClipboard(text) {
    let textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.bottom= 0;
    textArea.style.left= 0;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    document.execCommand('copy');
    /*
    let copiedElement = document.createElement('copied-element');
    copiedElement.style.display = "inline-block"
    if(copiedTimeout) {
      clearTimeout(copiedTimeout);
    }
  
    copiedTimeout = setTimeout(()=>{
  
      copiedTimeout = undefined;
    },500);
    alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
    */
    alertCopied();
    document.body.removeChild(textArea);
  }
  function alertCopied() {
    if(copiedTimeout) {
      clearTimeout(copiedTimeout);
      var sb = document.getElementById("snackbar");
      sb.className = sb.className.replace("show", "");
    }
    var sb = document.getElementById("snackbar");
  
    //this is where the class name will be added & removed to activate the css
    sb.className = "show";
  
    copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
  }
  function markAll() {
    for(let errorType of Object.keys(errorsFormat)) {
      let errorTypeOption = document.getElementById(`${errorType}-option`);
      if(errorTypeOption) {
        errorTypeOption.checked = true;
      }
    }
  }
  function unmarkAll() {
    for(let errorType of Object.keys(errorsFormat)) {
      let errorTypeOption = document.getElementById(`${errorType}-option`);
      if(errorTypeOption) {
        errorTypeOption.checked = false;
      }
    }
  }
  function test() {
    console.log("TESTING WORKS!")
  }
  let  buttonsToToggleDarkMode = ["appearance","inputText","download-all","colors-amount","button-toggle-custom-gradient-div",
  "button-remove-watermark-download-div","button-custom-background-div","button-revert-skin-div","button-shadow-div","button-no-background-div",
  "customskindiv","button-pixelate-background-div"];
  function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      for(let o of document.querySelectorAll('.lightbuttonboxes')) {
        o.classList.remove("lightbuttonboxes");
        o.classList.add("darkbuttonboxes");
        //console.log(`Darking: ${o.id}`)
      }
    }else{
      document.body.classList.remove('dark');
      for(let o of document.querySelectorAll('.darkbuttonboxes')) {
        o.classList.remove("darkbuttonboxes");
        o.classList.add("lightbuttonboxes");
        //console.log(`Lighting: ${o.id}`)
      }
    }
    return;
      if (document.getElementById('darkmode').checked == true) {
        document.body.classList.add('dark');
        //document.getElementById('result').classList.add("darktextboxes");
        for(let n of   buttonsToToggleDarkMode) {
          let d = document.getElementById(n);
          if(d) {
            d.classList.remove("lightbuttonboxes");
            d.classList.add("darkbuttonboxes");
          }
        }
        let success = document.getElementById('success_message');
        if(success) {
          success.classList.remove("successlight");
          success.classList.add("successdark");
        }
      } else {
        document.body.classList.remove('dark');
        //document.getElementById('result').classList.remove("darktextboxes");
        //Buttons
        for(let n of   buttonsToToggleDarkMode) {
          let d = document.getElementById(n);
          if(d) {
            d.classList.remove("darkbuttonboxes");
            d.classList.add("lightbuttonboxes");
          }
        }
        let success = document.getElementById('success_message');
        if(success) {
          success.classList.remove("successdark");
          success.classList.add("successlight");
        }
      }
      //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
  }
  function loadKey(window) {
    let search = window.location.search;
    if(typeof search !== "undefined" && search.length > 0) {
      try{
        let parts = atob(search.slice(1)).split("&");
        for(let part of parts) {
          let [k,v] = part.split("=");
          //console.log(k,v)
          try{
            k = btoa(k);
            if(k == "bW9kZQ==") {
              v = btoa(v);
              if(v == "ZGV2ZWxvcG1lbnQ=") {
                //console.log(`Allowed params..`)
                unblock();
                return;
              }
            }
          }catch(e){}
        }
      }catch(e){}
    }
    //console.log(`Blocking..`)
    block();
  }
  function block() {
    document.getElementById("maintenance-overlay").style.display = "none";
    //document.body.style.overflow = "hidden";
  }
  function unblock() {
    document.getElementById("maintenance-overlay").style.display = "none";
    //document.body.style.overflow = "";
  }
  function screenshotCanvas() {
    html2canvas(document.body, {
                useCORS: true, // Try to fetch cross-origin images using CORS if allowed by server
                allowTaint: true, // Allows tainting, but you still can't read pixels directly. html2canvas re-draws.
                                 // This option is mostly for ensuring html2canvas itself doesn't stop.
                backgroundColor: null, // Makes background transparent if not explicitly set
                logging: true, // Enable logging for debugging html2canvas itself
                
                onrendered: function(canvas) {
                  var data = canvas.toDataURL();
                  alert(data);
                  document.getElementById("ss-div").innerHTML="<br/><br/><br/><br/><br/><br/><img src="+data+" />";
                }
            }).then(canvas => {
                // 'canvas' here is a NEW canvas created by html2canvas, which is NOT tainted.
                const dataURL = canvas.toDataURL('image/png');
                console.log(dataURL)
                window.open('', dataURL);

                let screenshotPreview = document.getElementById("screenshot");
                if(screenshotPreview) {
                  screenshotPreview.src = dataURL;
                  screenshotPreview.style.display = 'block';
                }
            }).catch(error => {
                console.error("Error taking screenshot with html2canvas:", error);
                alert("Failed to take screenshot. Check console for details.");
            });
            return
    let screenshotPreview = document.getElementById("screenshot");
    if(!screenshotPreview) return;
    let isPaused = skinViewer.animation.paused;
    skinViewer.animation.paused = true;
    const dataURL = siteCanvas.toDataURL('image/png'); // Get PNG data URL
    screenshotPreview.width = siteCanvas.width;
    screenshotPreview.height = siteCanvas.height;
    let ctxToDraw = screenshotPreview.getContext('2d');
    ctxToDraw.drawImage(siteCanvas, 0, 0, screenshotPreview.width, screenshotPreview.height );
    //screenshotPreview.src = dataURL;             // Set the image source
    screenshotPreview.style.display = 'block';   // Show the image
    console.log('Screenshot taken and displayed!');
    setTimeout(()=>{
      console.log('Resuming..');
      screenshotPreview.src = dataURL;             // Set the image source
      if(!isPaused) skinViewer.animation.paused = false;
    },3000)
  }
  function checkSite(window) {
    let search = window.location.search;
    if(typeof search !== "undefined" && search.length > 0) {
      try{
        let parts = atob(search.slice(1)).split("&");
        for(let part of parts) {
          let [k,v] = part.split("=");
          //console.log(k,v)
          try{
            k = btoa(k);
            if(k == "dXNlcm5hbWU=") {
              if(v.match(/[a-z0-9_]/gi)) {
                setTimeout(()=>{
                  usernameInput.value = v;
                  processUsername();
                },500);
              }
            }
          }catch(e){}
        }
      }catch(e){}
    }
    setTimeout(()=>{
      let href = window.location.href;
      if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
        try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
        window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/mc-skin/`}
    });
    fetch('https://api.github.com/repos/AlonsoAliaga/AlonsoAliagaAPI/contents/api/tools/tools-list.json?ref=main')
      .then(res => res.json())
      .then(content => {
        const decoded = atob(content.content);
        const parsed = JSON.parse(decoded);
        let toolsData = parsed;
        let toolsArray = []
        for(let toolData of toolsData) {
          //console.log(toolData);
          let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
          let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
          toolsArray.push(`<span>💠</span> <span${clazz}${style}><a href="${toolData.link}">${toolData.name}</a></span><br>`);
        }
        document.getElementById("tools-for-you").innerHTML = toolsArray.join(`
  `);
      });
      return;
  /*
      .then(res => res.json())
      .then(data => {
        console.log(data); // your parsed JSON
      })
      .catch(err => console.error("Fetch error:", err));
      */
     /*
    let toolsData = [
      {
        name:"HEX Generator (RBG)",
        class:"rainbow",
        style:"color:transparent",
        link:"https://alonsoaliaga.com/hex"
      }
    ];
    let toolsArray = []
    for(let toolData of toolsData) {
      //console.log(toolData);
      let clazz = typeof toolData.class == "undefined" ? "" : ` class="${toolData.class}"`;
      let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
      toolsArray.push(`<span>💠</span> <span${clazz}${style}><a href="${toolData.link}">${toolData.name}</a></span><br>`);
    }
    document.getElementById("tools-for-you").innerHTML = toolsArray.join("<br>");
    */
  }
  function selectTab(evt, tabName, buttonName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if(evt) {
      evt.currentTarget.className += " active";
    }else if(buttonName) {
      let b = document.getElementById(buttonName);
      if(b) b.className += " active";
    }
  }
  //const jsyaml = require("js-yaml");
  function compareFiles() {
    clearResults();
    processed1 = undefined;
    processed2 = undefined;
    outputExtension = ".yml";
    let input1 = document.getElementById("current-config");
    let input2 = document.getElementById("new-config");
    let currentFile = input1.files[0];
    let newFile = input2.files[0];
    if(typeof currentFile == "undefined") {
      alert('Current configuration cannot be empty!');
      return;
    }
    let matchExtension = allowedExtensions.find(r=> currentFile.name.endsWith(r));
    if(!matchExtension) {
      alert(`Current configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
      return;
    }
    if(typeof newFile == "undefined") {
      alert('New configuration cannot be empty!');
      return;
    }
    if(!allowedExtensions.find(r=> newFile.name.endsWith(r))) {
      alert(`New configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
      return;
    }
    outputExtension = matchExtension;
    // console.log(`Attempting to compare '${currentFile.name}' & '${newFile.name}'`);
    input1.value = "";
    input2.value = "";
    var reader1 = new FileReader();
    //let schem1 = jsyaml.DEFAULT_SCHEMA;
    reader1.onloadend = function(event) {
      // console.log(`Starting load of ${currentFile.name}`)
      let result = event.target.result;
      // console.log(`Successfully result ${currentFile.name}`)
      //processed1 = result;
      //console.log(result);
      /*
      processed1 = jsyaml.load(result, { schem1 });
      console.log(`Successfully loaded ${currentFile.name}`)
      console.log(processed1)
      */
      //if(processed2) processComparator();
  
      //var reader2 = new FileReader();
      //let schem2 = jsyaml.DEFAULT_SCHEMA;
      reader1.onloadend = function(event2) {
        // console.log(`Starting load of ${newFile.name}`)
        let result2 = event2.target.result;
        // console.log(`Successfully result ${newFile.name}`)
        //processed2 = result2;
        //console.log(result2);
        //processed2 = jsyaml.load(result2, { schem2 });
        //console.log(`Successfully loaded ${newFile.name}`)
        //console.log(processed2)
        if(result) processComparator(result,result2);
      }
  
      reader1.readAsText(newFile)
    }
    reader1.readAsText(currentFile)
  }
  function mergeObjects(obj1, obj2) {
    const diff = {};
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (
          typeof obj2[key] === "object" &&
          obj2[key] !== null &&
          typeof obj1[key] === "object" &&
          obj1[key] !== null && !Array.isArray(obj2[key])
        ) {
          const nestedDiff = mergeObjects(obj1[key], obj2[key]);
          if (Object.keys(nestedDiff).length > 0) {
            diff[key] = nestedDiff;
          }
        } else if (!obj1.hasOwnProperty(key)/* || obj1[key] !== obj2[key]*/) {
          diff[key] = obj2[key];
          obj1[key] = obj2[key];
        }
      }
    }
    return diff;
  }
  let processed1;
  let processed2;
  let outputExtension;
  let allowedExtensions = [".yaml",".yml",".txt"]
  function processComparator(processedCurrent,processedNew) {
    let schem = jsyaml.DEFAULT_SCHEMA;
    let first = jsyaml.load(processedCurrent,schem)
    let second = jsyaml.load(processedNew,schem)
    let firstToModify = jsyaml.load(processedCurrent,schem)
    // console.log(first)
    // console.log(second)
    // setTimeout(() => {
    //   first["love"] = "HOLAAAAAAAAAAAAAAAAA";
    //   second["love"] = "HOLAAAAAAAAAAAAAAAAA 2222222222222222222";
    // }, 5000);
    // console.log(`Both files were proccessed!`);
    // //console.log(jsyaml)
    // console.log(`This is processed #1:`)
    // console.log(processed1)
    // console.log(`Successfully loaded #1`)
    // //processed1 = jsyaml.load(processedCurrent,schem);
    // console.log(processed1)
    // console.log(`This is processed #2:`)
    // console.log(processed2)
    // console.log(`Successfully loaded #2`)
    // //processed2 = jsyaml.load("Hello: 10",schem);
    // console.log(processed2)
    let resultsFull = document.getElementById("results");
    if(resultsFull) {
      resultsFull.style.display = "block";
    }
    selectTab(null, 'fixed-config',"f-c-b");
    let difference = mergeObjects(firstToModify,second);
    // console.log(`This is the new yaml #1:`)
    // console.log(firstToModify);
    // console.log(`This is difference:`)
    // console.log(difference);
    let fixedYAML = jsyaml.dump(firstToModify,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
    let differenceYAML;
    if(Object.keys(difference).length === 0) {
      differenceYAML = "#We couldn't find any missing option. Your config is up-to-date!";
    }else{
      differenceYAML = jsyaml.dump(difference,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
    }
    processed1 = fixedYAML;
    processed2 = differenceYAML;
    document.getElementById("output-fixed").innerText = fixedYAML;
    document.getElementById("output-differences").innerText = differenceYAML;
    // console.log(fixedYAML);
    // console.log(differenceYAML);
    //console.log(YAML)
  }
  function downloadProfile() {
    let removeWatermark = document.getElementById("button-remove-watermark-download")
    if(removeWatermark && !removeWatermark.checked) {
      console.log(`Downloading with watermark..`)
      let additionalHeight = Math.round(siteCanvas.height / 16);
      let additonalBoderBottom = Math.round(siteCanvas.height / 75);
      markedCanvas.width = siteCanvas.width;
      markedCanvas.height = siteCanvas.height + additonalBoderBottom + additionalHeight;
      let markedCtx = markedCanvas.getContext("2d");
      const text = "Generated on https://alonsoaliaga.com/mc-skin";
      markedCtx.fillStyle = "#302a3b"; // Set the fill color to white
      markedCtx.fillRect(0, siteCanvas.height + additonalBoderBottom, siteCanvas.width, additionalHeight);
      let fontSize = 50; // Initial font size
      let textWidth = 0;
      do {
        fontSize--; // Decrease the font size
        markedCtx.font = `${fontSize}px MinecraftBold`; // Set the new font size
        textWidth = markedCtx.measureText(text).width;
      } while (textWidth > (markedCanvas.width - 50));
      markedCtx.fillStyle = "#ffffff"; // Set the fill color to gray
      markedCtx.font = `${fontSize}px MinecraftBold`; // Set the font style
      markedCtx.textAlign = "center"; // Set the text alignment to center
      markedCtx.textBaseline = "middle"; // Set the text baseline to middle
      markedCtx.fillText(text, markedCanvas.width / 2, siteCanvas.height + additonalBoderBottom + Math.round(additionalHeight / 2)); // Write the text at the center of the rectangle
  
      //markedCtx.clearRect(0, 0, markedCanvas.width, markedCanvas.height);
      markedCtx.drawImage(siteCanvas,0,0);
      var anchor = document.createElement("a");
      anchor.href = markedCanvas.toDataURL("image/png");
      let username = usernameInput?.value || "AlonsoAliaga";
      anchor.download = `McSkin3DViewer-${username}.png`;
      //anchor.click();

      
      
      window.open('', markedCanvas.toDataURL("image/png"));
    }else{
      console.log(`Downloading without watermark..`)
      var anchor = document.createElement("a");
      anchor.href = siteCanvas.toDataURL("image/png");
      let username = usernameInput?.value || "AlonsoAliaga";
      anchor.download = `McSkin3DViewer-${username}.png`;
      //anchor.click();

      
      
      window.open('', siteCanvas.toDataURL("image/png"));
    }
  }
  function toggleCustomGradientBox(event) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    let customGradientsOpened = document.getElementById("button-toggle-custom-gradient").checked;
    if(customGradientsOpened) {
      if(event) backgroundType = 2;
      customGradientBox.classList.add("expanded");
      updateSkin(true);
    }else{
      backgroundType = 0;
      customGradientBox.classList.remove("expanded");
      updateSkin(true);
    }
  }
  function toggleWatermark(event) {
    let removeWatermark = document.getElementById("button-remove-watermark-download").checked;
    let downloadButton = document.getElementById("download-all-label");
    if(removeWatermark) {
      downloadButton.innerText = "Download your Minecraft Render without watermark📥"
    }else{
      downloadButton.innerText = "Download your Minecraft Render with watermark 📥"
    }
  }
  let colorsButton = document.getElementById("colors-amount");
  const maxColorsAmount = 15;
  function removeColor(event) {
    if(event) backgroundType = 2;
    let currentAmount = colorsButton.innerText;
    if(isNaN(currentAmount)) {
      currentAmount = 2;
      colorsButton.innerText = currentAmount;
    }else{
      currentAmount--;
      if(currentAmount < 2) {
        currentAmount = 2;
      }
      colorsButton.innerText = currentAmount;
    }
    //console.log(`Current amount: ${currentAmount}`);
    for(let i = maxColorsAmount; i >= currentAmount;i--) {
      let pickerToHide = document.getElementById(`color-picker-${i}`);
      //console.log(`Hiding color #${i}`);
      if(pickerToHide) {
        pickerToHide.style.display = "none";
      }
    }
    if(event) updateSkin(true);
  }
  function addColor(event) {
    backgroundType = 2;
    let currentAmount = colorsButton.innerText;
    if(isNaN(currentAmount)) {
      currentAmount = 2;
      colorsButton.innerText = currentAmount;
    }else{
      currentAmount++;
      if(currentAmount > maxColorsAmount) {
        currentAmount = maxColorsAmount;
      }
      colorsButton.innerText = currentAmount;
    }
    //console.log(`Current amount: ${currentAmount}`);
    for(let i = 0; i < currentAmount;i++) {
      let pickerToShow = document.getElementById(`color-picker-${i}`);
      //console.log(`Showing color #${i}`);
      if(pickerToShow) {
        pickerToShow.style.display = "";
      }
    }
    updateSkin(true);
  }
  function downloadProfile2() {
    let inputBox = document.getElementById(`inputText`);
    let content = `Original:\nUnknown input`;
    if(inputBox) content = `Original:\n${inputBox.value}\n\n`;
    let i = 1;
    for(let fontType of Object.keys(fonts)) {
      let data = fonts[fontType];
      let b = document.getElementById(`${fontType}-box`);
      if(b) {
        content+= `${i}. ${data.name}:\n${b.value}\n\n`;
      }
      i++;
    }
    content += `\n💎 Thanks for using our font generator tool! 👁‍🗨\n📩 File generated using https://alonsoaliaga.com/font-generator`
    const blob = new Blob([content], { type: 'text/text' });
  
    // Create a URL object with the Blob data
    const url = window.URL.createObjectURL(blob);
    
    // Create a link element with download attribute pointing to the URL object
    const link = document.createElement('a');
    link.download = `fonts-${Date.now().toString()}.txt`; // Set the download file name
    link.href = url; // Set the link href to the URL object
    
    // Append the link element to the document body
    document.body.appendChild(link);
    
    // Programmatically click the link to initiate the download of the YAML file
    link.click();
  
    // Remove the link element from the document body
    document.body.removeChild(link);
  
    // Revoke the URL object to free up system resources
    window.URL.revokeObjectURL(url);
  }
  function readFile(evt) {
    clearIssues();
    var files = evt.target.files;
    var file = files[0];    
    // console.log(`Attempting to read ${file}`);
    document.getElementById("log-file").value = "";
    var reader = new FileReader();
    reader.onload = function(event) {
      let result = event.target.result;
      processData(result);
    }
    reader.readAsText(file)
  }
  function checkYamlFile(evt) {
    var files = evt.target.files;
    var file = files[0];
    clearResults();
    processed1 = undefined;
    processed2 = undefined;
    document.getElementById("output-fixed").innerText = "Loading..";
    document.getElementById("output-differences").innerText = "Loading..";
    if(typeof file == "undefined") {
      let f = document.getElementById(evt.target.id);
      if(f) f.value = "";
      console.log(`Wrong! File is null: '${file.name}'`);
      alert('Configuration cannot be empty!');
      return;
    }
    let matchExtension = allowedExtensions.find(r=> file.name.endsWith(r));
    if(!matchExtension) {
      let f = document.getElementById(evt.target.id);
      if(f) f.value = "";
      console.log(`Wrong! File type not allowed: '${file.name}'`);
      alert(`Configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
      return;
    }
    console.log(`Detected '${evt.target.id}' file!`);
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById("error-full")) {
      clearIssues();
    }
  }
  let loadedSkinBuffer = undefined;
  const usernameInput = document.getElementById('inputText');
  const usernameInputDiv = document.getElementById('inputTextDiv');
  const cacheSkins = new Map();
  let lastFailed = false;
  let lastSuccessUsername = "AlonsoAliaga";
  let lastUsernameToUUID = undefined;
  let lastObtainedUUID = undefined;
  let globalModelsLock = false;
  let globalCropsLock = false;
  let cacheUserUUID = new Map();
  async function processUsername(order) {
    skinType = 0;
    if(order != "no-cooldown") blockUsername(defaultCooldown);
    let username = usernameInput?.value || "AlonsoAliaga";
    let fullSkin;
    let inCache = cacheSkins.has(username.toLowerCase());
    if(inCache) {
      fullSkin = cacheSkins.get(username.toLowerCase());
      loadedSkinBuffer = fullSkin;
    }else{
      //let url = `https://minotar.net/skin/${username}.png`;
      let starUrl = `https://starlightskins.lunareclipse.studio/render/default/${username}/full`
      try{
        let response = await fetch(starUrl);
        if(response.ok) {
          console.log(`Username ${username} is valid!`)
          lastSuccessUsername = username;
        }else{
          console.log(`Username ${username} is NOT valid!`)
          username = "AlonsoAliaga";
          lastSuccessUsername = username;
        }
      }catch(e) {
        console.log(`Error fetching ${username}: ${e.message}`)
      }
      if(!cacheUserUUID.has(username.toLowerCase())) {
        try {
          const response = await fetch(`https://api.minetools.eu/uuid/${username}`);
          const parsed = await response.json();
          /*
          //console.log(content);
          const decoded = atob(content.content);
          const parsed = JSON.parse(decoded);
          */
          //console.log(parsed);
          lastUsernameToUUID = parsed.name;
          lastObtainedUUID = parsed.id;
          cacheUserUUID.set(parsed.name.toLowerCase(),parsed.id);
          console.log(`Valid uuid saved in cache: ${username} -> ${cacheUserUUID.get(username.toLowerCase())}`);
        } catch (error) {
          lastUsernameToUUID = undefined;
          lastObtainedUUID = undefined;
          console.log("An error occurred:", error);
        }
      }else{
        console.log(`Username in cache: ${username} -> ${cacheUserUUID.get(username.toLowerCase())}`);
      }
      /*
      fetch(`https://api.minetools.eu/uuid/${username}`)
      .then(res => res.json())
      .then(content => {
        console.log(content);
        const decoded = atob(content.content);
        const parsed = JSON.parse(decoded);
        console.log(parsed);
      });
      try{
        let uuidCheck = `https://api.minetools.eu/uuid/${username}`;
        //let uuidCheck = `https://mc-api.io/profile/${username}/JAVA`;
        let response = await fetch(uuidCheck);
        console.log(response)
        console.log(response.body)
        console.log(response.response)
        let d = JSON.parse(response.body);
        if(d.status == "OK") {
          lastUsernameToUUID = d.name;
          lastObtainedUUID = d.id;
          console.log(`[Success] Converted to UUID: ${lastUsernameToUUID} -> ${lastObtainedUUID}`)
        }else{
          lastUsernameToUUID = undefined;
          lastObtainedUUID = undefined;
          console.log(`[Null] Failed to convert to UUID: ${lastUsernameToUUID}`)
        }
      }catch(e) {
        lastUsernameToUUID = undefined;
        lastObtainedUUID = undefined;
        console.log(`[Err] Failed to convert to UUID: ${lastUsernameToUUID}`)
        console.log(e)
      }
      */
      updateSkinRender();
      //updateRender();
      //updatePixelTest(username);
      //updateRenderTest(username);
      /*
      try{
        fullSkin = await loadImageWithCheck(url);
        loadedSkinBuffer = fullSkin;
        lastFailed = false;
        updateTest(username);
      }catch(e) {
        lastFailed = true;
        //console.log(`Detected error:`)
        //console.log(e);
        drawFailed();
        updateTest();
        return;
      }
      */
      //cacheSkins.set(username.toLowerCase(),fullSkin);
    }
    //Fetch skin logic
    //updateSkin(inCache);
  }
  async function loadImageWithCheck(url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load image: ${response.status} ${response.statusText}`);
    }
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Error loading image'));
      img.src = URL.createObjectURL(blob);
    });
  }
  function createGradient(ctx, colours) {
    if(!colours) {
      if(typeof defaultGradients[currentGradient] !== "undefined") {
        colours = defaultGradients[currentGradient].colors;
        //console.log(`Creating gradient.. ${defaultGradients[currentGradient].identifier}`)
      }else {
        colours = defaultGradients[0].colors;
        //console.log(`Creating gradient.. ${defaultGradients[0].identifier}`)
      }
    }else{
      //console.log(`Creating custom gradient.. ${colours}`)
    }
      const gradient = ctx.createLinearGradient(0, 0, 20,20);
      //const gradient = ctx.createLinearGradient(0, 0, 18.75, 18.75);
  
      let interval = 1;
      const decrement = 1 / (colours.length - 1);
      colours.forEach(colour => {
      //console.log(`Fixed: ${interval.toFixed(5)}`);
      //console.log(`Adding color stop interval: ${interval}${interval>1?` CAUTION GREATER+!`:``}${interval<0?` CAUTION LOWER-!`:``}`)
          gradient.addColorStop(Math.max(0,interval), colour);
          interval -= decrement;
      })
      ctx.fillStyle = gradient;
      //ctx.fillRect(0, 0, 18.75, 18.75);
      ctx.fillRect(0, 0, 20, 20);
    return ctx;
  }
  function previousGradient() {
    backgroundType = 0;
    if(typeof defaultGradients[currentGradient - 1] !== "undefined") {
      currentGradient--;
    }else currentGradient = Object.keys(defaultGradients).length - 1;
    let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
    if(customGradientsOpened.checked) {
      let customGradientBox = document.getElementById("custom-gradient-box");
      customGradientBox.classList.remove("expanded");
      customGradientsOpened.checked = false;
    }
    updateSkin(true);
  }
  function nextGradient() {
    backgroundType = 0;
    if(typeof defaultGradients[currentGradient + 1] !== "undefined") {
      currentGradient++;
    }else currentGradient = 0;
    let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
    if(customGradientsOpened.checked) {
      let customGradientBox = document.getElementById("custom-gradient-box");
      customGradientBox.classList.remove("expanded");
      customGradientsOpened.checked = false;
    }
    updateSkin(true);
  }
  let backgroundType = 0; //0 - gradient | 1 - image | 2 - custom gradient
  let currentGradient = 0;
  let skinType = 0; //0 - username | 1 - custom
  function togglePixelateBorderBox() {
    let effectBox = document.getElementById("pixelate-background-box");
    let effectOption = document.getElementById("button-pixelate-background").checked;
    if(effectOption) {
      //document.getElementById("button-pixelate-background").checked = false;
      effectBox.classList.add("expanded");
    }else{
      effectBox.classList.remove("expanded");
    }
  }
  function modifyPixelateBackgroundWidth(event,toAdd) {
    let customSize= document.getElementById("pixelate-background-size");
    let newSize = parseInt(customSize.innerText) + (toAdd  * ((event.ctrlKey||event.altKey) ? 2 : 1));
    if(newSize <= 1) {    
      customSize.innerText = 1;
    }else{
      customSize.innerText = Math.max(1,Math.min(100,newSize));
    }
    updateSkin(true);
  }
  function pixelateCtx(ctx) {
    let customSize= document.getElementById("pixelate-background-size");
    let size = parseInt(customSize.innerText);
    let c = ctx.canvas, w = c.width, h = c.height;
    let tmp = document.createElement("canvas");
    tmp.width = w/size; tmp.height = h/size;
    let tctx = tmp.getContext("2d");
    tctx.drawImage(c, 0, 0, tmp.width, tmp.height);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(tmp, 0, 0, w, h);
  }
  let addX = 0,addY = 0;
  function moveIcon(direction,event) {
    let revertSkin = document.getElementById("button-revert-skin").checked;
    let toModify = event.altKey || event.shiftKey ? 5 : 1;
    toModify = revertSkin ? toModify * -1 : toModify;
    if(direction == "left") addX = Math.max(-250,addX - toModify);
    else if(direction == "right") addX = Math.min(250,addX + toModify);
    else if(direction == "up") addY = Math.max(0,addY - toModify);
    else addY = Math.min(250,addY + toModify);
    updateSkin(true);
  }
  let logoBuffer;
  let defaultAlonsoPixel;
  let defaultBgPixel;
  let defaultShadowPixel;
  let pixelCache = new Map();
  let renderCache = new Map();
  async function updateRenderTest(username) {
    return;
    if(document.getElementById("render-showcase-div").style.display == "none") {
      //console.log(`Render showcase is hidden. Ignoring..`)
      return;
    }
    if(!logoBuffer) {
      try{
        logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
      }catch(e){
        console.log(`Error loading logo buffer wtf? ${e.message}`);
      }
    }
    let renderCanvas = document.getElementById("render-test");
    let ctx = renderCanvas.getContext('2d');
    
    if(renderCache.has(username.toLowerCase())) {
        imageToUse = renderCache.get(username.toLowerCase());
        //ctx.clearRect(0, 0, renderCache.width, renderCache.height);
        ctx.drawImage(imageToUse,50,0,200,200 * imageToUse.height / imageToUse.width);
        ctx.globalAlpha = 0.05;
        ctx.drawImage(logoBuffer,15,15,64,53);
        ctx.drawImage(logoBuffer,renderCache.width - 79, renderCache.height - 68,64,53);
        ctx.globalAlpha = 0.03;
        ctx.drawImage(logoBuffer,renderCache.width/2 - (256/2), renderCache.height/2 - (214 / 2),256,214);
        ctx.globalAlpha = 1.0;
    }else{
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
        img.onload = () => {
            console.log(img.height,img.width)
            pixelCache.set(username.toLowerCase(),img);
            //ctx.clearRect(0, 0, renderCache.width,renderCache.height);
            ctx.drawImage(img,50,0,200,200 * img.height / img.width);
            ctx.globalAlpha = 0.05;
            ctx.drawImage(logoBuffer,15,15,64,53);
            ctx.drawImage(logoBuffer,renderCache.width - 79, renderCache.height - 68,64,53);
            ctx.globalAlpha = 0.03;
            ctx.drawImage(logoBuffer,renderCache.width/2 - (256/2), renderCache.height/2 - (214 / 2),256,214);
            ctx.globalAlpha = 1.0;
        }
        img.onerror = () => {
          //console.log(`Invalid username: ${username}`)
          updateRenderTest("AlonsoAliaga");
        }
        let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9tb2phdmF0YXIve3VzZXJuYW1lfS9idXN0").replace(/{username}/g,username);
        img.src = link; // Replace with your image URL
    }
    
  }
  async function updatePixelTest(username) {
    return;
    const canvas = document.getElementById('test');
    if(document.getElementById("pixel-showcase-div").style.display == "none") {
      //console.log(`Render showcase is hidden. Ignoring..`)
      return;
    }
    if(!logoBuffer) {
      try{
        logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
      }catch(e){
        console.log(`Error loading logo buffer wtf? ${e.message}`);
      }
    }
    if(!defaultBgPixel) {
      try{
        defaultBgPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/default-bg.png");
      }catch(e){
        console.log(e)
        console.log(`Error loading default bg wtf? ${e.message}`);
      }
    }
    if(!defaultShadowPixel) {
      try{
        defaultShadowPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/20x20pshading.png");
      }catch(e){
        console.log(e)
        console.log(`Error loading default bg wtf? ${e.message}`);
      }
    }
    if(!defaultAlonsoPixel) {
      try{
        defaultAlonsoPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/default-pixel.png");
      }catch(e){
        console.log(e)
        console.log(`Error loading default AlonsoAliaga pixel wtf? ${e.message}`);
      }
    }
    //console.log(`Updating render showcase with username: ${username}`);
    let imageToUse;
    let ctx = canvas.getContext('2d');
    if(username.toLowerCase() == "alonsoaliaga") {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(defaultAlonsoPixel, 0, 0);
      console.log(`Default username for pixel: AlonsoAliaga`);
      return;
    }
    if(pixelCache.has(username.toLowerCase())) {
      imageToUse = pixelCache.get(username.toLowerCase());
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(defaultBgPixel, 0, 0);
      ctx.drawImage(imageToUse, 128, 64, 616, 1000, 75, 60, 151, 245);
      /*
      ctx.webkitImageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(defaultShadowPixel, 0, 0, 300, 300);
      */
      ctx.globalAlpha = 0.05;
      ctx.drawImage(logoBuffer,15,15,64,53);
      ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
      ctx.globalAlpha = 0.03;
      ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
      ctx.globalAlpha = 1.0;
    }else{
      let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9iaXR6ZWwve3VzZXJuYW1lfS9idXN0").replace(/{username}/g,username);
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
      img.onload = () => {
        pixelCache.set(username.toLowerCase(),img);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.drawImage(defaultBgPixel, 0, 0);
        ctx.drawImage(img, 128, 64, 616, 1000, 75, 60, 151, 245);
        /*
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(defaultShadowPixel, 0, 0, 300, 300);
        */
        ctx.globalAlpha = 0.05;
        ctx.drawImage(logoBuffer,15,15,64,53);
        ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
        ctx.globalAlpha = 0.03;
        ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
        ctx.globalAlpha = 1.0;
      }
      img.onerror = () => {
        //console.log(`Invalid username: ${username}`)
        updateTest("AlonsoAliaga");
      }
      img.src = link; // Replace with your image URL
    }
  }
  async function updateTest(username) {
    if(!document.getElementById("render-showcase-div")) return;
    if(document.getElementById("render-showcase-div").style.display == "none") {
      //console.log(`Render showcase is hidden. Ignoring..`)
      return;
    }
    if(!logoBuffer) {
      try{
        logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
      }catch(e){
        console.log(`Error loading logo buffer wtf? ${e.message}`);
      }
    }
    if(lastFailed || typeof username == "undefined") {
      username = "AlonsoAliaga";
    }
    //console.log(`Updating render showcase with username: ${username}`);
    let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9tYXJjaGluZy97dXNlcm5hbWV9L2ZhY2U=").replace(/{username}/g,username);
    const canvas = document.getElementById('test');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.globalAlpha = 0.05;
      ctx.drawImage(logoBuffer,15,15,64,53);
      ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
      ctx.globalAlpha = 0.03;
      ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
      ctx.globalAlpha = 1.0;
    }
    img.onerror = () => {
      //console.log(`Invalid username: ${username}`)
      updateTest("AlonsoAliaga");
    }
    img.src = link; // Replace with your image URL
  }
  async function updateModel(username) {
    if(typeof username == "undefined") username = lastSuccessUsername;
    let modelKey = `${username.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
    let modelImage;
    if(modelsCache.has(modelKey)) {
      modelImage = modelsCache.get(modelKey);
    }else{
      let modelData = models[currentRenderType];
      if(!modelData) {
        console.log(`UNKNOWN MODEL! HOW?`)
      }else{
        let url;
        if(modelData.custom) {
          url = atob(modelData.url);
        }else{
          url = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci97cmVuZGVyX3R5cGV9L3t1c2VybmFtZX0ve2Nyb3B9").replace(/{render_type}/g,currentRenderType);
        }
        url = url.replace(/{username}/g,username).replace(/{crop}/g,currentCrop);
        try{
          let imageBuffer = await loadImage(url);
          modelsCache.set(modelKey,imageBuffer);
          modelImage = imageBuffer;
        }catch(e) {
          console.log(`Error getting image?: ${e.message}`);
          return;
        }
      }
    }
    let revertSkin = document.getElementById("button-revert-skin").checked;
  
    let finalRender = document.getElementById("final-canvas");
    let ctx = finalRender.getContext("2d");
    ctx.clearRect(0, 0, finalRender.width, finalRender.height);
    finalRender.width = modelImage.width;
    finalRender.height = modelImage.height;
    ctx = finalRender.getContext("2d");
    if(revertSkin) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(modelImage, (finalRender.width * -1), 0, finalRender.width, finalRender.height);
      ctx.restore();
    }else{
      ctx.drawImage(modelImage,0,0);
    }
    if(typeof lastObtainedUUID != "undefined") {
      console.log(`Obtained UUID is valid!`);
    }else{
      console.log(`Obtained UUID is NOT valid!`);
    }
  }
  function updateSkin(inCache = true) {
    let username = usernameInput?.value || "AlonsoAliaga";
    //
    let pixelateBackground = document.getElementById("button-pixelate-background").checked;
    let revertSkin = document.getElementById("button-revert-skin").checked;
    let shadow = document.getElementById("button-shadow").checked;
    let transparentBackground = document.getElementById("button-no-background").checked;
    //
    let finalCanvas = document.getElementById("final-canvas");
    let finalCtx = finalCanvas.getContext("2d");
    finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
    //console.log(finalCanvas.width,finalCanvas.height)
    finalCtx.imageSmoothingEnabled = true;
    //
    let backgroundCtx = backgroundCanvas.getContext("2d");
    if(!transparentBackground) {
      finalCanvas.style.border = "1px solid #d3d3d3";
      if(backgroundType == 0) {
        backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
        createGradient(backgroundCtx);
        finalCtx.drawImage(backgroundCanvas,0,0);
      }else if(backgroundType == 1) {
        //console.log(`Writing custom background..`);
        finalCtx.drawImage(backgroundCanvas,0,0);
        //createGradient(backgroundCtx);
      }else{
        backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
        let currentAmount = isNaN(colorsButton.innerText) ? 2 : Math.max(2,Math.min(maxColorsAmount,parseInt(colorsButton.innerText)));
        createGradient(backgroundCtx,defaultColors.slice(0, currentAmount));
        finalCtx.drawImage(backgroundCanvas,0,0);
      }
      if(pixelateBackground) {
        pixelateCtx(finalCtx)
      }
    }else{
      finalCanvas.style.border = "none";
    }
    //siteCtx.fillStyle = "#FFFF00";
    //siteCtx.fillRect(0, 0,siteCanvas.width,siteCanvas.height);
    //console.log("Site canvas:",finalCanvas.width,finalCanvas.height);
    //let skinCanvas = document.getElementById("skin-canvas");
    let skinCtx = skinCanvas.getContext("2d");
    skinCtx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
    //startingCtx.fillStyle = "#FF0000";
    //startingCtx.fillRect(0, 0,startingCanvas.width,startingCanvas.height);
    skinCtx.imageSmoothingEnabled = false;
    //console.log("Starting canvas:",skinCanvas.width,skinCanvas.height);
    
    if(shadow) {
      skinCtx.drawImage(backdropBuffer, 0, 0, 20, 20);
    }
    //console.log(`Type of loadedSkinBuffer: ${typeof loadedSkinBuffer}`);
    if (loadedSkinBuffer.height === 32) {
      skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
  
    } else {
      // * BOTTOM LAYER
      skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 36, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
      skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
   addY +
      // * TOP LAYER addY +
      skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 52, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 52, 36, 3, 7, 5, 13, 3, 7); // Arm Left Side (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 20, 37, 8, 8, 6, 12, 8, 8); // Chest Other (top layer)
      skinCtx.drawImage(loadedSkinBuffer, 21, 36, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (top layer)
    }
    skinCtx.drawImage(shadingBuffer, 0 , 0, 20, 20);
    if(revertSkin) {
      finalCtx.save();
      finalCtx.scale(-1, 1);
      finalCtx.drawImage(skinCanvas, addX + (skinCtx.canvas.width * -1), addY, skinCtx.canvas.width, skinCtx.canvas.height);
      finalCtx.restore();
    }else{
      finalCtx.drawImage(skinCanvas,addX,addY,300,300)
    }
  
    //console.log(`Username: ${username}\nRevert skin: ${revertSkin}\nShadow: ${shadow}\nTransparent background: ${transparentBackground}\nIn cache: ${inCache}`);
  }
  const usernameInputCooldown = document.getElementById('inputTextCooldown');
  let blockInterval;
  function blockUsername(seconds = 3) {
    if(blockInterval) clearInterval(blockInterval);
    usernameInputDiv.style.display = "none"
    usernameInputCooldown.style.display = ""
    let i = Math.max(3,seconds);
    usernameInputCooldown.value = `${i} seconds left..`
    blockInterval = setInterval(()=> {
      i--;
      usernameInputCooldown.value = `${i} seconds left..`
      if(i <= 0) {
        usernameInputCooldown.style.display = "none"
        usernameInputDiv.style.display = ""
        clearInterval(blockInterval);
        blockInterval = undefined;
        return;
      }
    },1000);
  }
  const defaultColors = [];
  let failedBuffer;
  let backdropBuffer;
  let shadingBuffer;
  const backgroundCanvas = document.getElementById("background-canvas");
  const skinCanvas = document.getElementById("skin-canvas");
  //const siteCanvas = document.getElementById("final-canvas");
  const siteCanvas = document.getElementById("skin_container");
  const markedCanvas = document.getElementById("marked-canvas");
  async function addListeners() {
      failedBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/notFound.png");
      backdropBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/backdropshading.png");
      shadingBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/20x20pshading.png");
    usernameInput.addEventListener("keyup", function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
          processUsername();
      }
    });
    processUsername("no-cooldown");
    /*
    for(let i = 0; i < maxColorsAmount; i++) {
      if(defaultColors.length < maxColorsAmount) {
        let newColor = getRandomHexColor();
        //console.log(`Random color: ${newColor}${newColor.length != 7?` | CAUTION!`:``}`),
        defaultColors.push(newColor);
      }
      let colorsDiv = document.getElementById("colors-div");
      //console.log(`Creating color picker #${i}`);
      let p = document.createElement("input");
      p.type = "color";
      p.id = `color-picker-${i}`;
      p.index = i;
      p.value = defaultColors[i];
      p.addEventListener('change', function() {
        const color = this.value;
        //console.log(`Color picked: ${color} | ID: ${this.id} | Index: ${this.index}`);
        defaultColors[this.index] = color;
        updateSkin(true);
      });
      if(i != 0) {
        let s = document.createElement("span");
        s.innerText = " ";
        colorsDiv.appendChild(s);
      }
      colorsDiv.appendChild(p);
      //console.log(`Creating color picker #${i}! display="${p.style.display}"`)
    }
    removeColor();
    */
    runDelayed();
  }
  function getRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0')}`;
  }
  function uploadCustomSkinTexture(event) {
    //console.log(event);
    //let imageContainer = document.getElementById("motd-icon");
    // Create a new input element
    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
  
    // Add event listener to handle file selection
    uploadInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      // Handle the file upload or further processing here
      
      // Create a FileReader object
      const reader = new FileReader();
  
      // Set up a load event listener on the FileReader
      reader.addEventListener('load', function() {
        // Update the image source with the uploaded image
        var img = new Image();
        img.src = reader.result;
        //console.log(`Processing custom image: ${file.name} | ${img.width}px x ${img.height}px`);
        img.onload = function () {
          if(img.width !== 64) {
            alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px width!</span>`);
            return;
          }
          if(![64,32].includes(img.height)) {
            alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px or 32px width!</span>`);
            return;
          }
          skinType = 1;
          loadedSkinBuffer = img;
          //console.log(`Uploaded custom image: ${file.name} | ${img.width}px x ${img.height}px`);
          skinViewer.loadSkin(URL.createObjectURL(file))
          //updateSkin(true);
        };
      });
  
      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
    });
  
    // Append the input element to the image container
    document.body.appendChild(uploadInput);
  
    // Trigger a click event on the input element
    uploadInput.click();
    
    document.body.removeChild(uploadInput);
  }
  let errorTimeout = undefined;
  function alertError(text = "Empty error.") {
    //console.log(`Alerting: ${text}`)
    if(errorTimeout) {
      clearTimeout(errorTimeout);
      var sb = document.getElementById("snackbar-error");
      sb.className = sb.className.replace("show", "");
    }
    var sb = document.getElementById("snackbar-error");
    sb.innerHTML = text;
    //this is where the class name will be added & removed to activate the css
    sb.className = "show";
  
    errorTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
  }
  function uploadCustomBackground(event) {
    //console.log(event);
    //let imageContainer = document.getElementById("motd-icon");
    // Create a new input element
    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
  
    // Add event listener to handle file selection
    uploadInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      // Handle the file upload or further processing here
      
      // Create a FileReader object
      const reader = new FileReader();
      let backgroundCtx = backgroundCanvas.getContext("2d");
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
  
      // Set up a load event listener on the FileReader
      reader.addEventListener('load', function() {
        backgroundType = 1;
        
        let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
        if(customGradientsOpened.checked) {
          let customGradientBox = document.getElementById("custom-gradient-box");
          customGradientBox.classList.remove("expanded");
          customGradientsOpened.checked = false;
        }
        
        // Update the image source with the uploaded image
        var img = new Image();
        img.src = reader.result;
        img.onload = function () {
          backgroundCtx.save();
          //backgroundCtx.scale(1,1);
          backgroundCtx.drawImage(img,0,0,img.width,img.height,0,0,20,20);
          backgroundCtx.restore();
          //console.log(`Uploaded custom image: ${file.name}`,img.width,img.height);
          updateSkin(true);
        };
      });
  
      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
    });
  
    // Append the input element to the image container
    document.body.appendChild(uploadInput);
  
    // Trigger a click event on the input element
    uploadInput.click();
    
    document.body.removeChild(uploadInput);
  }
  function loadFonts() {
    let fontsTable = document.getElementById('fonts-table');
    if(fontsTable) {
      let s = "";
      let i = 1;
      for(let fontType of Object.keys(fonts)) {
        let fontData = fonts[fontType];
        s += `<div class="text-type"><div class="font-name-type ${(i % 2 === 0?"even":"odd")}">${i}. ${fontData.name}</div> <textarea readonly `+
          `id="${fontType}-box" class="fontsBoxes options" type="text" `+
          `checked id="${fontType}-option" onclick="copyTextToClipboard(this.textContent);"></textarea><label for="${fontType}-option" `+
          `></label><br></div>`
        fontData.processed = {};
        if(fontData.data && fontData.data.tosearch && fontData.data.toreplace &&
          fontData.data.tosearch.length == fontData.data.toreplace.length) {
            for (let i = 0; i < fontData.data.tosearch.length; i++) {
              fontData.processed[fontData.data.tosearch[i]] = fontData.data.toreplace[i];
            }
        }
        i++;
      }
      fontsTable.innerHTML = s;
    }
  }
  let times = 0;
  function loadCounter() {
   let href = window.location.href;
   if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
   let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=")
    .replace(/<site>/g,"mc-skin").replace(/<key>/g,"KEY-A");
   let counter = document.getElementById("visitor-counter");
   if(counter) {
     $.ajax({
       url: link,
       type: "GET", /* or type:"GET" or type:"PUT" */
       dataType: "json",
       data: {
       },
       success: function (result) {
         if(isNaN(result))
           document.getElementById("counter-amount").innerHTML = "Click to return!";
         else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
       },
       error: function (e) {
         times++;
         document.getElementById("counter-amount").innerHTML = "Click to return!";
         if(times <= 1) {
          setTimeout(()=>{
            loadCounter();
          },1000*10);
         }
       }
     });
   }
  }
  function updateOutput(event) {
    //console.log(event)
    let inputText = document.getElementById("inputText");
    if(inputText) {
      //console.log(`Input: ${inputText.value}`)
      let theText;
      if(!inputText.value || inputText.value.length === 0) theText = "Type your text above"
      else theText = inputText.value;
      for(let identifier of Object.keys(fonts)) {
        let toUpdate = document.getElementById(`${identifier}-box`)
        if(toUpdate) {
          let fontData = fonts[identifier];
          let toModify = theText;
          let toUse = "";
          if(typeof fontData.before != "undefined") {
            toModify = fontData.before(toModify);
          }
          let processed = fontData.processed;
          for (let i = 0; i < toModify.length; i++) {
            toUse += processed[toModify[i]] || toModify[i];
          }
          if(typeof fontData.after != "undefined") {
            toUse = fontData.after(toUse);
          }
          toUpdate.innerText = toUse;
        }
      }
    }
  }
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  } else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
  }
  toggleDarkmode();
  addListeners();
  updateOutput();
  
  //Canvas functions
  async function loadImage(url) {
      return new Promise((resolve, reject) => {
          const img = new Image()
          img.crossOrigin = "Anonymous";
          img.src = url
          img.onload = () => {
              resolve(img)
          }
          img.onerror = e => {
              reject(e)
          }
      })
  }
  async function loadLocalImage(url) {
      return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
              resolve(img)
          }
          img.onerror = e => {
              reject(e)
          }
          img.src = url
      })
  }
  async function mergeCanvases(canvases) {
      const canvas = document.createElement("final-canvas");
      canvas.width = canvases[0].width;
      canvas.height = canvases[0].height;
  
      const ctx = canvas.getContext("2d");
      for (const c of canvases) {
          const imageVersion = new Image();
          await new Promise(r => {
              imageVersion.onload = r, imageVersion.src = c.toDataURL()
          })
          ctx.drawImage(imageVersion, 0, 0)
      }
  
      return canvas
  }
  let recording = false;
  let recordingGif;
  let gifInterval;
  function startRecording() {
    if(recording) return;
    recordingGif = undefined;
    recordingGif = new GIF({
      debug: true,
      workers: 2,
      quality: 10,
      workerScript: 'https://unpkg.com/gif.js@0.2.0/dist/gif.worker.js'
    });
    recording = true;
    let frames = 0;
    gifInterval = setInterval(()=>{
      recordingGif.addFrame(document.getElementById("skin_container"), {delay: 100});
      frames++;
    },100);
    recordingGif.on('finished', function(blob) {
      console.log("Finished creating gif!")
      window.open(URL.createObjectURL(blob));
    });
    recordingGif.on('progress', function(p) {
      console.log('text', "Rendering " + frames + " frame(s) at q" + recordingGif.options.quality + "... " + (Math.round(p * 100)) + "%");
    });
  }
  function stopRecording() {
    if(!recording) return;
    if(gifInterval) clearInterval(gifInterval)
    recordingGif.render();
  }
  async function drawFailed() {
      const canvas = document.getElementById("final-canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 300, 300);
      ctx.drawImage(backdropBuffer, 0, 0, 20, 20);
      ctx.resetTransform();
      ctx.drawImage(failedBuffer, 0, 0, 300, 300);
      ctx.scale(16, 16);
      //ctx.drawImage(shading, 0, 0, 20, 20)
  }
  function runDelayed() {
    /*
    setTimeout(()=>{
      document.getElementById("button-toggle-custom-gradient").checked = true;
      toggleCustomGradientBox();
    },500);
    */
  }
  function loadCapes() {
    let capesDiv = document.getElementById("cape-picker");
    let toAddCustom = [];
    for(let capeType of Object.keys(availableCapes)) {
      let capeData = availableCapes[capeType];
      let element = document.createElement("div");
      element.classList.add("render-cape-card");
      //element.style.minWidth = "fit-content"
      element.id = `cape-${capeType}`
      element.style.margin = "2px"
      element.innerHTML = `<img src="${capeData.image}" alt="${capeData.name}">
                <div style="display:inline-block;min-width:fit-content;margin-top:-5px;font-size:15px;font-weight:bold;" class="render-label">${capeData.name}</div>`
      element.onclick = function(){selectCape(capeType)}
      if(capeData.custom) {
        toAddCustom.push(element);
      }else{
        capesDiv.appendChild(element);
      }
    }
  }
  function loadAnimations() {
    let modelsDiv = document.getElementById("animations-cards");
    let toAddCustom = [];
    for(let animationType of Object.keys(availableAnimations)) {
      let animationData = availableAnimations[animationType];
      let element = document.createElement("div");
      element.classList.add("render-card");
      element.id = `animation-${animationType}`;
      let link = animationData.image != "" ? animationData.image : `https://raw.githubusercontent.com/AlonsoAliaga/mc-skin/main/assets/images/animations/${animationType}.gif`;
      element.innerHTML = `<img src="${link}" alt="${animationData.name} Model">
                <div style="margin-top:-5px;font-size:20px;font-weight:bold;" class="render-label">${animationData.name}</div>`
      element.onclick = function(){selectAnimation(animationType)}
      if(animationData.custom) {
        toAddCustom.push(element);
      }else{
        modelsDiv.appendChild(element);
      }
    }
/*
    if(toAddCustom.length >= 1) {
      let title = document.createElement("div");
      title.innerText = "CUSTOM MODELS";
      title.style.fontSize = "50px";
      title.style.fontWeight = "100px"
      title.style.width = "100%";
      modelsDiv.appendChild(title);
      for(let toAdd of toAddCustom) {
        modelsDiv.appendChild(toAdd);
      }
    }
    */
  }
  function loadModels() {
    let modelsDiv = document.getElementById("model-cards");
    let toAddCustom = [];
    for(let renderType of Object.keys(models)) {
      let renderData = models[renderType];
      let element = document.createElement("div");
      element.classList.add("render-card");
      let link = renderData.image ? `https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/renders/${renderData.image}` : `https://starlightskins.lunareclipse.studio/render/${renderType}/AlonsoAliaga/${renderData.crops[0]}`;
      element.innerHTML = `<img src="${link}" alt="${renderData.name} Model">
                <div class="render-label">${renderData.name}</div>`
      element.onclick = function(){selectModel(renderType)}
      if(renderData.custom) {
        toAddCustom.push(element);
      }else{
        modelsDiv.appendChild(element);
      }
    }
    if(toAddCustom.length >= 1) {
      let title = document.createElement("div");
      title.innerText = "CUSTOM MODELS";
      title.style.fontSize = "50px";
      title.style.fontWeight = "100px"
      title.style.width = "100%";
      modelsDiv.appendChild(title);
      for(let toAdd of toAddCustom) {
        modelsDiv.appendChild(toAdd);
      }
    }
  }
  function selectModel(renderType) {
    if(globalModelsLock) {
      let modelKey = `${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
      if(!modelsCache.has(modelKey)) {
        return;
      }
    }
    let renderData = models[renderType];
    if(!renderData) {
      console.log(`Invalid render type?`);
      return;
    }
    currentCrop = renderData.crops[0];
    currentRenderType = renderType;
    console.log(`Selected ${renderType} => ${renderData.name}`)
    let cropsDiv = document.getElementById("crops-div");
    cropsDiv.innerHTML = "";
    for(let crop of renderData.crops) {
      let element = document.createElement("button");
      let length = crop.length * 6 + 30;
      element.innerHTML = `<img width="50px" src="https://www.svgrepo.com/show/527072/full-screen-square.svg"><img>
                      <span>${pascalCase(crop)}</span>`
      element.classList.add("cool-button");
      element.width = length;
      element.onclick = function(){selectCrop(crop)}
      cropsDiv.appendChild(element);
    }
    updateModel(lastSuccessUsername);
    if(!modelsCache.has(`${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`)) {
      lockModels(5);
      lockCrops(3);
    }
  }
  function pascalCase(crop) {
    if(crop.includes("_")) {
      let parts = crop.split("_");
      let f = [];
      for(let part of parts) {
        f.push(part.slice(0,1).toUpperCase() + part.slice(1).toLowerCase());
      }
      return f.join(" ");
    }else{
      let parts = crop.split(" ");
      let f = [];
      for(let part of parts) {
        f.push(part.slice(0,1).toUpperCase() + part.slice(1).toLowerCase());
      }
      return f.join(" ");
    }
  }
  function selectCrop(crop) {
    if(globalCropsLock) {
      let modelKey = `${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
      if(!modelsCache.has(modelKey)) {
        return;
      }
    }
    currentCrop = crop;
    console.log(`Crop selected: ${currentCrop} (${currentRenderType})`)
    updateModel(lastSuccessUsername);
    if(!modelsCache.has(`${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`)) {
      lockCrops(5);
    }
  }
  //loadModels();
  //selectModel("default");
  loadKey(window);
  let pressed = "";
  let allowed = ["YWxvbnNvNzc3"].map(s=>atob(s));
  function loadListener() {
    document.addEventListener('keyup', function(e) {
      if(document.getElementById("maintenance-overlay").style.display === "flex") {
        if (e.key === 'Enter' || e.keyCode === 13) {
          if(allowed.includes(pressed)) {
            unblock();
          }else pressed = "";
        }else{
          pressed = pressed + e.key;
        }
      }
    });
  }
  loadListener();
  function lockCapesWithMessage(types,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
    let cards = types.map(n=> document.getElementById(`cape-${n}`)).filter(Boolean);
    //console.log(secs)
    for(let card of cards) {
      //if(card.classList.contains('locked')) return;
      //console.log(`M Seconds ${seconds}`);
      card.classList.add('adlocked');
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
      card.append(ov);
    }
  }
  function lockAnimationsWithMessage(types,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
    let cards = types.map(n=> document.getElementById(`animation-${n}`)).filter(Boolean);
    //console.log(secs)
    for(let card of cards) {
      //if(card.classList.contains('locked')) return;
      //console.log(`M Seconds ${seconds}`);
      card.classList.add('adlocked');
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
      card.append(ov);
    }
  }
  function lockAnimations(btn,secs, iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
    let cards = [];
    if(!btn) {
      cards = Object.keys(availableAnimations).map(n=> document.getElementById(`animation-${n}`)).filter(Boolean);
      //cards = document.querySelectorAll(".render-card");
      //console.log("Locking: "+cards.map(c=>c.id))
    }else{
      cards.push(btn);
    }
    globalModelsLock = true;
    for(let card of cards) {
      if(card.classList.contains('locked')) continue;
      if(card.classList.contains('adlocked')) continue;
      let seconds = secs;
      //console.log(`M Seconds ${seconds}`);
      card.classList.add('locked');
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<img src="${iconUrl}"><span>Available in ${seconds}s</span>`;
      card.append(ov);
      const t = setInterval(() => {
        if (--seconds <= 0) {
          clearInterval(t);
          card.classList.remove('locked');
          ov.remove();
          globalModelsLock = false;
        } else {
          ov.querySelector('span').textContent = `Available in ${seconds}s`;
        }
      }, 1000);
    }
  }
  function lockModels(secs, iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
    let cards = document.querySelectorAll(".render-card");
    globalModelsLock = true;
    for(let card of cards) {
      if(card.classList.contains('locked')) continue;
      let seconds = secs;
      console.log(`M Seconds ${seconds}`);
      card.classList.add('locked');
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<img src="${iconUrl}"><span>Available in ${seconds}s</span>`;
      card.append(ov);
      const t = setInterval(() => {
        if (--seconds <= 0) {
          clearInterval(t);
          card.classList.remove('locked');
          ov.remove();
          globalModelsLock = false;
        } else {
          ov.querySelector('span').textContent = `Available in ${seconds}s`;
        }
      }, 1000);
    }
  }
  function lockCrops(secs, iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
    let crops = document.querySelectorAll(".cool-button");
    globalCropsLock = true;
    for(let crop of crops) {
      if(crop.classList.contains('locked')) continue;
      console.log(`C Seconds ${seconds}`);
      let seconds = secs;
      crop.classList.add('locked');
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<img src="${iconUrl}"><span>Available in ${seconds}s</span>`;
      crop.append(ov);
      const t = setInterval(() => {
        if (--seconds <= 0) {
          clearInterval(t);
          crop.classList.remove('locked');
          ov.remove();
          globalCropsLock = false;
        } else {
          ov.querySelector('span').textContent = `Available in ${seconds}s`;
        }
      }, 1000);
    }
  }
  // Example: lock all buttons for 5 seconds on page load
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.render-card').forEach(btn => lockAnimations(btn, 5));
  });
loadPage();
function loadPage() {
    let i = []
    let o = []
    for (const part of skinParts) {
		for (const layer of skinLayers) {
            if(layer == "innerLayer") {
                i.push(`<div style="min-width: fit-content;line-height: 32px;display: inline-block;font-family: MinecraftBold;margin: 0px 0px 0px 0px;padding: 0px 5px 0px 5px;" class="darkbuttonboxes">
            <input type="checkbox" id="${part}-${layer}-div" checked></input>
            <label for="${part}-${layer}-div" style="font-size:15px;margin-bottom: 0px;margin-top: 0px;margin-left: 0px;margin-right: 10px;"> ${skinPartsName[part]}</label>
        </div>`)
            }else{
                o.push(`<div style="min-width: fit-content;line-height: 32px;display: inline-block;font-family: MinecraftBold;margin: 0px 0px 0px 0px;padding: 0px 5px 0px 5px;" class="darkbuttonboxes">
            <input type="checkbox" id="${part}-${layer}-div" checked></input>
            <label for="${part}-${layer}-div" style="font-size:15px;margin-bottom: 0px;margin-top: 0px;margin-left: 0px;margin-right: 10px;"> ${skinPartsName[part]}</label>
        </div>`)
            }
      }
    }
    document.getElementById("inlayer-div").innerHTML = i.join(" ");
    document.getElementById("outlayer-div").innerHTML = o.join(" ");
    setTimeout(()=>{
        for (const part of skinParts) {
            for (const layer of skinLayers) {
                let d = document.getElementById(`${part}-${layer}-div`);
                if(d) {
                    d.addEventListener("change", e => {
                        (skinViewer.playerObject.skin[part][layer].visible = e.target.checked);
                    });
                }
            }
        }
    },2500);
}
startRender();
//updateRenderTest("AlonsoAliaga")
loadAnimations();
loadCapes();

document.addEventListener("DOMContentLoaded", () => {
  loadCounter();
  checkSite(window);
});
function processAds() {
  lockAnimationsWithMessage(adLockedAnimations,`Disable AdBlock to access this animation!`)
  lockCapesWithMessage(adLockedCapes,`Disable AdBlock to access this cape!`)
}