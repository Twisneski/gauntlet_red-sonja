var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  };

  Weapon.prototype.toString = function () {
    return this.name;
  }

var Dagger = function() {
  this.name = "Dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "BroadSword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "WarAxe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Gloves = function() {
  this.name = "Gloves";
  this.damage = 2;
  this.hands = 2;
};
Gloves.prototype = new Weapon();

var Staff = function() {
  this.name = "Staff";
  this.damage = 4;
  this.intelligenceBonus = 0;
  this.hands = 2;
};
Staff.prototype = new Weapon();

var CrystalBall = function() {
  this.name = "CrystalBall";
  this.damage = 1;
  this.intelligenceBonus = 15;
  this.hands = 2;
};
CrystalBall.prototype = new Weapon();

var Wand = function() {
  this.name = "Wand";
  this.damage = 3;
  this.intelligenceBonus = 5;
  this.hands = 1;
};
Wand.prototype = new Weapon();

var ShrunkenHead = function() {
  this.name = "ShrunkenHead";
  this.damage = 2;
  this.intelligenceBonus = 10;
  this.hands = 1;
};
ShrunkenHead.prototype = new Weapon();

var ThrowingStars = function() {
  this.name = "ThrowingStars";
  this.damage = 6;
  this.stealthBonus = 15;
  this.hands = 2;
};
ThrowingStars.prototype = new Weapon();

var CrossBow = function() {
  this.name = "CrossBow";
  this.damage = 8;
  this.stealthBonus = 10;
  this.hands = 2;
};
CrossBow.prototype = new Weapon();

var PoisonDart = function() {
  this.name = "PoisonDart";
  this.damage = 10;
  this.stealthBonus = 5;
  this.hands = 2;
};
PoisonDart.prototype = new Weapon();

var Horn = function() {
  this.name = "Horn";
  this.damage = 100;
  this.hands = 0;
};
Horn.prototype = new Weapon();


