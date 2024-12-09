console.log("Preload running...");
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "images/pokemon.JPG",
  "images/altaria.png",
  "images/dragonite.png",
  "images/flygon.png",
  "images/garchomp.png",
  "images/turtonator.png",
  "images/dBall.png",
  "images/text1.png",
  "images/text2.png",
  "images/text3.png"
);
