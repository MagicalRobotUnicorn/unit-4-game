// Game Logic

// Card Classes
// Each Hero has a photo, attack and HP


// Character Class

function Character(characterName, hitPoints, attackPower) {
  this.characterName = characterName;
  this.hitPoints = hitPoints;
  this.attackPower = attackPower;
}

Character.prototype.attack = function(enemyCharacter) {
  enemyCharacter.hitPoints -= this.attackPower;
  this.hitPoints -= enemyCharacter.attackPower;

  this.attackPower *= 2;
}


// Character Selection

$(document).ready(function(){

  var $characterSelection = $('#characterSelection');
  var $defenderArea = $('#defenderArea');
  var $playerArea = $('#playerArea');
  var $notificationArea = $('#notificationArea');

  function Character(characterName, hitPoints, attackPower) {
    this.characterName = characterName;
    this.hitPoints = hitPoints;
    this.attackPower = attackPower;
  }
  
  Character.prototype.attack = function(enemyCharacter) {
    enemyCharacter.hitPoints -= this.attackPower;
    this.hitPoints -= enemyCharacter.attackPower;
  
    this.attackPower *= 2;
  }

  var obiWan = new Character('Obi-Wan Kenobi', 120, 8);
  var lukeSkywalker = new Character('Luke Skywalker', 100, 5);
  var bobaFett = new Character('Boba Fett', 150, 20);
  var darthMaul = new Character('Darth Maul', 180, 25);

  var characters = [obiWan, lukeSkywalker, bobaFett, darthMaul];
  var enemyCharacters = [];
  var playerCharater;

  
  $characterSelection.html("");

    // Character Selection
    // Load each character with a class of character, and a specific val or id
    // that corresponds to character name

    // var chooseCharacter = function() {

    // }
    // While character is alive
      // Enemy Selection
      // Combat
    
    // Win or Loss


  }

);




// Fight Section

// Defender Section


var obiWan = new Character('Obi-Wan Kenobi', 120, 8);
var lukeSkywalker = new Character('Luke Skywalker', 100, 5);
var bobaFett = new Character('Boba Fett', 150, 20);
var darthMaul = new Character('Darth Maul', 180, 25);

// You attacked Darth Maul for 8 damage
// Darth maul attacked you back for 25 damage


// 16 -> 24 -> 32

// You attacked Luke Skywalker for 8 damage
// Luke Skywalder attacked you back for 5 damage

// No Enemy Here
// Message when there is no enemy in the defender position


// You attacked Darth Sidious for 48 damage
// Darth Sidius attacked you back for 20 damage


// Starting Health Levels
// Obi-Wan : 120
// Luke Skywalker : 100
// Darth Sidious : 150
// Darth Maul : 100