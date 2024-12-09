p1 = document.getElementById("B1");
p2 = document.getElementById("B2");
p3 = document.getElementById("B3");
p4 = document.getElementById("B4");
p5 = document.getElementById("B5");
p6 = document.getElementById("B6");
getAlt = document.getElementById("altariaimg");
getChar = document.getElementById("charizardimg");
getTurt = document.getElementById("turtonatorimg");
getDrag = document.getElementById("dragoniteimg");
getGar = document.getElementById("garchompimg");
getFly = document.getElementById("flygonimg");
w1 = document.getElementById("1wobble");
w2 = document.getElementById("2wobble");
caught = document.getElementById("caught");
not = document.getElementById("wrong");
music = document.getElementById("backMusic");

clicks = 0;
var active_cards = [];
x = 1;
matches = 0;
fails = 3;
var type = [];
var active_div = [];
const failDisplay = document.getElementById("fails");

//p1.classList.add("opacity");
//p2.classList.add("opacity");
//p3.classList.add("opacity");
//p4.classList.add("opacity");
//p5.classList.add("opacity");
//p6.classList.add("opacity");
//p1.classList.remove("clickable");
//p2.classList.remove("clickable");
//p3.classList.remove("clickable");
//p4.classList.remove("clickable");
//p5.classList.remove("clickable");
//p6.classList.remove("clickable");

function checkMatch() {
  clicks = clicks + 1;
  if (clicks == 2) {
    console.log("checking for match...");

    if (type[0] == type[1]) {
      console.log("match");
      active_div[0].classList.add("opacity");
      active_div[1].classList.add("opacity");
      active_div[0].classList.remove("clickable");
      active_div[1].classList.remove("clickable");
      active_cards[0].classList.remove("clickable");
      active_cards[1].classList.remove("clickable");
      matches = matches + 1;
      caught.volume = 0.3;
      caught.play();
    } else {
      not.volume = 0.25;
      not.play();
      incorrectClick(active_cards[0]);
      incorrectClick(active_cards[1]);
      incorrectClick2(active_div[0]);
      incorrectClick2(active_div[1]);
      reEnableClicks();
      fails = fails - 1;
      failDisplay.textContent = fails;
      if (fails == 0) {
        showLose();
      }
    }
    Wobble();
    clicks = 0;
    active_cards = [];
    type = [];
    active_div = [];
  }
}

function reEnableClicks() {
  // Re-enable click handlers for the remaining clickable elements
  p1.onclick = fly;
  p2.onclick = turtonator;
  p3.onclick = garch;
  p4.onclick = charizard;
  p5.onclick = alt;
  p6.onclick = dragonite;
}

function fly() {
  getFly.src = "images/flygon.png";
  p1.classList.remove("clickable");
  p1.classList.add("brown");
  type.push("ground");
  active_cards.push(getFly);
  active_div.push(p1);
  p1.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function turtonator() {
  getTurt.src = "images/turtonator.png";
  p2.classList.remove("clickable");
  p2.classList.add("red");
  type.push("fire");
  active_cards.push(getTurt);
  active_div.push(p2);
  p2.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function garch() {
  getGar.src = "images/garchomp.png";
  p3.classList.remove("clickable");
  p3.classList.add("brown");
  type.push("ground");
  active_cards.push(getGar);
  active_div.push(p3);
  p3.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function charizard() {
  getChar.src = "images/megaCharizard.png";
  p4.classList.remove("clickable");
  p4.classList.add("red");
  type.push("fire");
  active_cards.push(getChar);
  active_div.push(p4);
  p4.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function alt() {
  getAlt.src = "images/altaria.png";
  p5.classList.remove("clickable");
  p5.classList.add("sky-blue");
  type.push("flying");
  active_cards.push(getAlt);
  active_div.push(p5);
  p5.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function dragonite() {
  getDrag.src = "images/dragonite.png";
  p6.classList.remove("clickable");
  p6.classList.add("sky-blue");
  type.push("flying");
  active_cards.push(getDrag);
  active_div.push(p6);
  p6.onclick = null;
  checkMatch();
  Wobble();
  win();
}

function incorrectClick(e) {
  setTimeout(function () {
    e.src = "images/pokemon.JPG";
  }, 1400);
}
function incorrectClick2(z) {
  z.classList.remove("clickable");
  setTimeout(function () {
    z.classList.add("clickable");
  }, 1600);
}

function win() {
  if (matches == 3) {
    console.log("win!!!");
    showModal();
  } else {
    console.log("not yet");
  }
}
function showModal() {
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function showLose() {
  document.getElementById("Lose").style.display = "flex";
}
function showHint() {
  document.getElementById("light").style.display = "flex";
}
function hideHint() {
  document.getElementById("light").style.display = "none";
}
function hideLose() {
  document.getElementById("Lose").style.display = "none";
  fails = 3;
  failDisplay.textContent = fails;
  matches = 0;
  p1.classList.add("clickable");
  p2.classList.add("clickable");
  p3.classList.add("clickable");
  p4.classList.add("clickable");
  p5.classList.add("clickable");
  p6.classList.add("clickable");
  getAlt.src = "images/pokemon.JPG";
  getChar.src = "images/pokemon.JPG";
  getGar.src = "images/pokemon.JPG";
  getDrag.src = "images/pokemon.JPG";
  getTurt.src = "images/pokemon.JPG";
  getFly.src = "images/pokemon.JPG";
  p1.classList.remove("opacity");
  p2.classList.remove("opacity");
  p3.classList.remove("opacity");
  p4.classList.remove("opacity");
  p5.classList.remove("opacity");
  p6.classList.remove("opacity");
}

function hideStart() {
  document.getElementById("start").style.display = "none";
  music.volume = 0.5;
  music.play();
  music.loop = true;
  document.getElementById("first").style.display = "none";
}

function Wobble() {
  if (clicks == 1) {
    w1.play();
  } else if (clicks == 2) {
    w2.play();
  }
}
function nextText() {
  var image = document.getElementById("text");
  if (image.src.match("text1")) {
    image.src = "images/text2.png";
  } else if (image.src.match("text2")) {
    image.src = "images/text3.png";
  } else if (image.src.match("text3")) {
    document.getElementById("start").style.display = "none";
    music.volume = 0.25;
    music.play();
    music.loop = true;
    document.getElementById("first").style.display = "none";
  }
}
function nextRoom() {
  window.location.href = "https://chdavinci.github.io/pokemonchampion/";
}
function startText() {
  document.getElementById("start").style.display = "flex";
}
