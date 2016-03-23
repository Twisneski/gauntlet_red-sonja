
var Battleground = function(playerFighter, enemyFighter) {
  this.newPlayer = playerFighter;
  this.newEnemy = enemyFighter;
}



function Battle (playerFighter, enemyFighter) {
  this.newPlayer = playerFighter;
  console.log(this.newPlayer);
  this.newEnemy = enemyFighter;

    var playerDamage = Math.round(Math.random() * this.newPlayer.Weapon.damage + 1);
    var enemyDamage = Math.round(Math.random() * this.newEnemy.Weapon.damage + 1);

    var totalPlayerDamage = Math.floor(playerDamage + (this.newPlayer.strength / 10));
    var totalEnemyDamage = Math.floor(enemyDamage + (this.newEnemy.strength / 10));

    var warResult = "";
    warResult += "<div class='war-total-player'>";
    warResult += "--" + this.newPlayer.name + "(" + this.newPlayer.health + " hp) attacks for " + totalPlayerDamage + "damage";
    warResult += "</div>";

    warResult += "<div class='war-total-enemy'>";
    warResult += "--" + this.newEnemy.name + "(" + this.newEnemy.health + " hp) attacks for " + totalEnemyDamage + "damage";
    warResult += "</div>";

    this.newPlayer.health -= totalEnemyDamage;
    this.newEnemy.health -= totalPlayerDamage;

    $("#battleground").append(warResult);

    if (this.newPlayer.health <= 0) {
      $("#battleground").append("<div>It. Is. Decided. You have perished amongst enemy hands.</div>"); 
    } else if 
      (this.newEnemy.health <= 0) {
        $("#battleground").append("<div>It. Is. Decided. You are victorious.</div>");
      }
    console.log(warResult);
};