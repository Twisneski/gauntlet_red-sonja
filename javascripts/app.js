$(document).ready(function() {

  // var chosenProfession = null;
  // var chosenWeapon = null;
  // var battleground = null;

  var newPlayer = new Player();
  var chooseClass = {
    "Warrior": Warrior,
    "Valkyrie": Valkyrie,
    "Berserker": Berserker,
    "Monk": Monk,
    "Shaman": Shaman,
    "Wizard": Wizard,
    "Conjurer": Conjurer,
    "Sorcerer": Sorcerer,
    "Thief": Thief,
    "Ninja": Ninja,
    "Assassin": Assassin,
    "Unicorn": Unicorn
  };

  var newWeapon = new Weapon();
  var chooseWeapon = {
    "Dagger": Dagger,
    "BroadSword": BroadSword,
    "WarAxe": WarAxe,
    "Gloves": Gloves,
    "Staff": Staff,
    "CrystalBall": CrystalBall,
    "Wand": Wand,
    "ShrunkenHead": ShrunkenHead,
    "ThrowingStars": ThrowingStars,
    "CrossBow": CrossBow,
    "PoisonDart": PoisonDart,
    "Horn": Horn
  };


  var newEnemy = new Monster();
  var chooseEnemy = {
    "Orc": Orc,
    "Queen": Queen,
    "Tuzun": Tuzun,
    "Andar": Andar

  };


  });



    $("#player-name").show();

    /*
      When any button with card-link class is clicked,
      move on to the next view.
     */
    $(".card-link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = true;

      console.log(moveAlong)
      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
      // console.log($(".card-link").click)
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card-back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });


// TRY TO CREATE BUTTON THAT TAKES YOU BACK TO FIRST CARD
  // $(".to-beginning").click(function(e) {
  //   var firstCard = $(this).id("#player-name");
  //   console.log("firstCard", firstCard);
  // });



  $(".classes button").click(function(){
    // Player.prototype.class = $(this).val();
    newPlayer = new chooseClass[$(this).val()]; //Whatever string class button you click
    console.log("this.val",$(this).val());
    console.log(newPlayer);
  });

  $(".weapons button").click(function(){
    newPlayer.weapon = new chooseWeapon[$(this).val()];
    console.log(newPlayer);
      if (newPlayer.magical === true) {
        newPlayer.Spell = new Sphere();
        console.log(newPlayer.Spell);
      }
      return newPlayer;
  });

  $(".enemies button").click(function(){
    newEnemy = new chooseEnemy[$(this).val()];
    console.log("new enemy", newEnemy);
  });


// LET'S GET READY TO RUUUUUMBLLLEEEE


var playerFighter = newPlayer;
var enemyFighter = newEnemy;

console.log(playerFighter);

$(".defeat-enemies").on("click", function() {
    console.log("Happy");

  Battle(playerFighter, enemyFighter);
  // $("#battleground").html(war);
})

// battle record
var battle = $(".battleground");

var battleground = function (yarn, style) {
  battle.append("<div class=' " + style + "'>" + yarn + "</div>");
};


// // PLAYER CONSTRUCTION
// function newPlayer () {
//   this.health = 50;

//   this.attack = function () {
//     if (this.id === "player") {
//       enemy.health -= this.damage();
//     } else {
//       player.health -= this.damage();
//     }
//   }

//   this.id ="player";

//   this.damage = function () {
//     var damage = Math.floor(Math.random() * 14)
//     return damage
//   }
// }
// // END PLAYER CONSTRUCTION

// // ENEMY CONSTRUCTION
// function newEnemy () {
//   this.damage = function () {
//     var damage = Math.floor(Math.random() * Math.floor(this.health / 2));
//     return damage
//   }
//   this.id = "enemy";
// }

// Enemy.prototype = new Player();

var game
var enemy
var playerFighter

// GAME CONSTRUCTOR
function Game () {
  // enemy = new Monster();
  // player = new Player();
    newPlayer.health = Math.floor(Math.random() * 40 + 50);
    newEnemy.health = Math.floor(Math.random() * 10 + 20);

  this.turn = 0;

  this.healthReport = function() {
    battleground("Sonja the " + newPlayer.name + " health: " + newPlayer.health + "<br />" + newEnemy.MonsterName + " health: " + newEnemy.health, "report")
  }

  this.gameOver = function () {
    battleground("GAME OVER", "over")
    game = null;
  }


  this.startTurn = function () {
    Battle(newPlayer, newEnemy);

    this.healthReport();

    if (newPlayer.health <= 0) {
      if (newEnemy.health <= 0) {
        battleground("DRAW. You are both dead.", "loss")
      } else {
        battleground("Sonja the " + newPlayer.name + " perished by " + newEnemy.MonsterName + "'s hands.", "loss")
      }
      this.gameOver()
    } else if (newEnemy.health <= 0) {
      battleground("Sonja the " + newPlayer.name + " defeated " + newEnemy.MonsterName + "!", "victory")
      this.gameOver();
    }
  }
    $(".battleground").animate({
      scrollTop: $(".battleground").get(0).scrollHeight}, 1000);
}


$("button.start").click(function () {
  if (!game) {
    battle.html("");
    game = new Game();
    battleground("The battle has begun!", "intro")
  } else {
    battleground("A battle is already in progress!", "error")
  }
})


// attack button
$("button.attack").click(function() {
  if (!game) {
    battleground("Click start to begin!", "error")
  } else {
    game.turn += 1
    battleground("ROUND " + game.turn, "turn" )
    game.startTurn();
  }
});















































// dis is garbage...right now
// var playerFighter = newPlayer;
// var enemyFighter = newEnemy;

// console.log(playerFighter);

// $(".defeat-enemies").on("click", function() {
//     console.log("Happy");

//   Battle(playerFighter, enemyFighter);
//   // $("#battleground").html(war);
// })





