
var AvailableEnemies = {};



var Monster = function() {
  // this.species = null;
  // this.class = null;
  // this.weapon = null;
  

  // this.MonsterName = name;

  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 10;
  this.intelligence = 10;

  this.toString = function() {
    var output = [this.MonsterName,
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
  // Monster.prototype.toString = function() {
  //   return this.MonsterName;
};


var Orc = function() {
  this.MonsterName = "Bobby";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.intelligence = this.intelligence - 20;
  this.strength = this.strength + 20;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Orc.prototype = new Monster();
AvailableEnemies.Orc = new Orc();



var Queen = function() {
  this.MonsterName = "Queen Gedren";
  this.allowedClasses = ["Valkyrie", "Thief", "Ninja", "Assassin"];
  this.intelligence = this.intelligence + 5;
  this.health = Math.floor(Math.random() * 40 + 50);
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Queen.prototype = new Monster();
AvailableEnemies.Queen = new Queen();


var Tuzun = function() {
  this.MonsterName = "Tuzun Thune";
  this.allowedClasses = ["Monk", "Wizard", "Sorcerer"];
  this.intelligence = this.intelligence + 10;
  this.strength = this.strength - 10;
  this.health = Math.floor(Math.random() * 40 + 50);
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Tuzun.prototype = new Monster();
AvailableEnemies.Tuzun = new Tuzun();


var Andar = function() {
  this.MonsterName = "Andar Bezfarda";
  this.allowedClasses = ["Conjurer"];
  this.intelligence = this.intelligence + 20;
  this.strength = this.strength + 20;
  this.health = Math.floor(Math.random() * 40 + 50);
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Andar.prototype = new Monster();
AvailableEnemies.Andar = new Andar();








var Queen = function() {

  this.MonsterName = "Queen Gedren";
  this.allowedClasses = ["Valkyrie", "Thief", "Ninja", "Assassin"];
  this.intelligence = this.intelligence + 5;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Queen.prototype = new Monster();

var Tuzun = function() {

  this.MonsterName = "Tuzun Thune";
  this.allowedClasses = ["Monk", "Wizard", "Sorcerer"];
  this.intelligence = this.intelligence + 10;
  this.strength = this.strength - 10;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Tuzun.prototype = new Monster();

var Andar = function() {

  this.MonsterName = "Andar Bezfarda";
  this.allowedClasses = ["Conjurer"];
  this.intelligence = this.intelligence + 20;
  this.strength = this.strength + 20;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};

Andar.prototype = new Monster();

