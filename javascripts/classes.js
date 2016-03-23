var AvailableClasses = {};

/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
  this.health = Math.floor(Math.random() * 40 + 50);
};

PlayerClass.prototype.toString = function() {
  return this.name;
};
PlayerClass.prototype=new Player();


/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.healthBonus = 10;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();
AvailableClasses.Fighter = new Fighter();


var Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 30;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
};
Warrior.prototype = new Fighter();
AvailableClasses.Warrior = new Warrior();


var Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 10;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
};
Valkyrie.prototype = new Fighter();
AvailableClasses.Valkyrie = new Valkyrie();


var Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 30;
  this.strengthBonus = this.strengthBonus + 20;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
};
Berserker.prototype = new Fighter();
AvailableClasses.Berserker = new Berserker();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 40;
  this.strengthBonus = this.strengthBonus + 40;
  this.allowedWeapons = ["Gloves", "Staff"]
};
Monk.prototype = new Fighter();
AvailableClasses.Monk = new Monk();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapons = ["Staff", "CrystalBall", "Wand", "ShrunkenHead"]
};
Mage.prototype = new PlayerClass();



var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Shaman.prototype = new Mage();
AvailableClasses.Shaman = new Shaman();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Wizard.prototype = new Mage();
AvailableClasses.Wizard = new Wizard();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Conjurer.prototype = new Mage();
AvailableClasses.Conjurer = new Conjurer();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Sorcerer.prototype = new Mage();
AvailableClasses.Sorcerer = new Sorcerer();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
      
 */

var Stealth = function() {
  this.name = "Stealth";
  this.strengthBonus = + 5;
  this.intelligenceBonus = + 5;
  this.magical = false;
  this.stealth = + 20;
  this.allowedWeapons = ["ThrowingStars", "Crossbow", "PoisonDart", "Dagger"]
};
  Stealth.prototype = new PlayerClass ();

var Thief = function() {
  this.name = "Thief";
  this.magical = false;
  this.stealth = + 10;
};
  Thief.prototype = new Stealth ();
  AvailableClasses.Thief = new Thief();


var Ninja = function() {
  this.name = "Ninja";
  this.strengthBonus = + 10;
  this.healthBonus = this.healthBonus + 5;
  this.magical = false;
  this.stealth = + 15;
};
  Ninja.prototype = new Stealth ();
  AvailableClasses.Ninja = new Ninja();

var Assassin = function() {
  this.name = "Assassin";
  this.strengthBonus = + 5;
  this.healthBonus = this.healthBonus + 5;
  this.magical = false;
  this.stealth = + 20;
};
  Assassin.prototype = new Stealth ();
  AvailableClasses.Assassin = new Assassin();

//Unicorn Class
  //unicorn

  var Unicorn = function() {
  this.name = "Unicorn";
  this.strengthBonus = + 100;
  this.healthBonus = this.healthBonus + 100;
  this.magical = true;
  this.stealth = + 100;
  this.allowedWeapons = ["Horn"]
};
  Unicorn.prototype = new PlayerClass();
  AvailableClasses.Unicorn = new Unicorn();



