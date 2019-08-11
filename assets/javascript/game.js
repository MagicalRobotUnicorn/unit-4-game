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

  function Character(characterName, hitPoints, attackPower, fileName) {
    this.characterName = characterName;
    this.totalHitPoints = hitPoints;
    this.currentHitPoints = hitPoints;
    this.attackPower = attackPower;
    this.fileName = fileName;
  }
  
  Character.prototype.attack = function(enemyCharacter) {
    enemyCharacter.hitPoints -= this.attackPower;
    this.hitPoints -= enemyCharacter.attackPower;
  
    this.attackPower *= 2;
  }

  var obiWan = new Character('Obi-Wan Kenobi', 120, 8, "obiWan");
  var lukeSkywalker = new Character('Luke Skywalker', 100, 5, "lukeSkywalker");
  var bobaFett = new Character('Boba Fett', 150, 20, "bobaFett");
  var darthMaul = new Character('Darth Maul', 180, 25, "darthMaul");

  var characters = [obiWan, lukeSkywalker, bobaFett, darthMaul];
  var enemyCharacters = [];
  var remainingCharacters = characters.length;
  var playerCharater;
  var deadCharacters = [];


  // <div class="character" id="0">
  //       <img src="./assets/images/bobaFett.jpg" class="characterImage">
  //       <div class="characterHealth" id="0"></div>
          
  //       <div id="playerOptions"></div>
  // </div>

  var $genericCharacter;

  // for (var i = 0; i < characters.length; i++){
  //   var $genericCharacter = $('<div>').addClass('character');
  //   $genericCharacter.attr("id", i);
  //   // $genericCharacter.find('#firstCol' + i).after('<div class="col-md-6 id="secondCol' + i +'">').append('<div class="characterName">').html(characters[i].characterName).append('<div class="characterAttack" id="' + i + '">');
  //   $genericCharacter.append('<div class="row" id="row' + i + '">').append('<div class="col-6" id="firstCol' + i + '">').append('<img src="./assets/images/' + characters[i].fileName + '.jpg" class="characterImage">');
  //   $genericCharacter.find('#row' + i).append('<div class="col-6" id="secondCol' + i +'">').append('<div class="characterName">').html(characters[i].characterName).append('<div class="characterAttack" id="' + i + '">');

  //   $('#characterSelection').append($genericCharacter);
  // }

  // first character and row divs are in the correct places

  for (var i = 0; i < characters.length; i++){
    var $genericCharacter = $('<div>').addClass('character');
    $genericCharacter.attr("id", i);
    // $genericCharacter.find('#firstCol' + i).after('<div class="col-md-6 id="secondCol' + i +'">').append('<div class="characterName">').html(characters[i].characterName).append('<div class="characterAttack" id="' + i + '">');
    $genericCharacter.append('<div class="row" id="row' + i + '">');
    $genericCharacter.find('#row' + i).append('<div class="col-6" id="firstCol' + i + '">');
    $genericCharacter.find('#row' + i).append('<div class="col-6" id="secondCol' + i +'">');


    $genericCharacter.find('#firstCol' + i).append('<img src="./assets/images/' + characters[i].fileName + '.jpg" class="characterImage">');
    $genericCharacter.find('#secondCol' + i).append('<div class="characterName">').html(characters[i].characterName).append('<div class="characterAttack" id="' + i + '">')
    $genericCharacter.find('#secondCol' + i).append('<div class="characterHealth" id="' + i + '">');
    $genericCharacter.find('#secondCol' + i).append('<div class="characterAttack" id="' + i + '">');
    // .append('<img src="./assets/images/' + characters[i].fileName + '.jpg" class="characterImage">');
    // $genericCharacter.find('#row' + i).append('<div class="col-6" id="secondCol' + i +'">').append('<div class="characterName">').html(characters[i].characterName).append('<div class="characterAttack" id="' + i + '">');

    $('#characterSelection').append($genericCharacter);
  }
});



  // <div class="character" id="0">
  //     <div class="row">
  //       <div class="col-md-6">
  //         <img src="./assets/images/darthMaul.jpg" class="characterImage">
  //       </div>
  //       <div class="col-md-6">
  //         <div class="characterName">Boba Fett</div>
  //         <div class="characterHealth" id="0">Health: 150/150</div>
  //         <div class="characterAttack" id="0">Attack Power: 20</div>
  //         <div class="characterButton"><button>Attack</button></div>
  //       </div>
  //     </div>
  // </div>
  

//   console.log("1. Obi Wan");
//   console.log("2. Luke Skywalker");
//   console.log("3. Boba Fett");
//   console.log("4. Darth Maul");

//   // var choice = prompt("What number character do you want?");

//   choice -= 1;

//   for (var i = 0; i < characters.length; i++) {
//     if (i != choice){
//       enemyCharacters.push(characters[i]);
//     }
//   }

//   playerCharacter = characters[choice];
//   remainingCharacters--;

//   // Choice of enemy

//   for (var i= 0; i < remainingCharacters; i++){
//     console.log(i + ". " + enemyCharacters[i]);
//   }

//   // choice = prompt("Who would you like to fight?");



//     // Character Selection
//     // Load each character with a class of character, and a specific val or id
//     // that corresponds to character name

//     // var chooseCharacter = function() {

//     // }
//     // While character is alive
//       // Enemy Selection
//       // Combat
    
//     // Win or Loss


//   }

// );




// // Fight Section

// // Defender Section


// // var obiWan = new Character('Obi-Wan Kenobi', 120, 8);
// // var lukeSkywalker = new Character('Luke Skywalker', 100, 5);
// // var bobaFett = new Character('Boba Fett', 150, 20);
// // var darthMaul = new Character('Darth Maul', 180, 25);

// // You attacked Darth Maul for 8 damage
// // Darth maul attacked you back for 25 damage


// // 16 -> 24 -> 32

// // You attacked Luke Skywalker for 8 damage
// // Luke Skywalder attacked you back for 5 damage

// // No Enemy Here
// // Message when there is no enemy in the defender position


// // You attacked Darth Sidious for 48 damage
// // Darth Sidius attacked you back for 20 damage


// // Starting Health Levels
// // Obi-Wan : 120
// // Luke Skywalker : 100
// // Darth Sidious : 150
// // Darth Maul : 100