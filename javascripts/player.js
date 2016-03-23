
var Player = function() {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "Red Sonja";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
  };

Player.prototype.toString = function() {
  var output = [this.playerName,
    ": a ",
    this.skinColor,
    " skinned ",
    this.species,
    " ",
    this.class,
    " with ",
    this.health,
    " health. ",
    (this.class.magical) ? "Able to cast " : " Wielding a ",
    this.weapon.toString(),
    "!"
  ].join("");
  return output;
};

Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  // var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  // this.class = new window[randomClass]();

  // Add the health bonus
  // this.health += this.class.healthBonus;
  // return this.class;
};



