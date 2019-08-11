var $characterSelection = $('#characterSelection');
var $enemyArea = $('#enemyArea');
var $currentEnemy = $('#currentEnemy');
var $playerArea = $('#playerArea');
var $notificationArea = $('#notificationArea');

function Character(characterName, hitPoints, attackPower, fileName) {
  this.characterName = characterName;
  this.totalHitPoints = hitPoints;
  this.currentHitPoints = hitPoints;
  this.attackPower = attackPower;
  this.fileName = fileName;
}

Character.prototype.attack = function (enemyCharacter) {
  enemyCharacter.currentHitPoints -= this.attackPower;
  this.currentHitPoints -= enemyCharacter.attackPower;

  message = "";
  message += this.characterName + " attacked " + enemyCharacter.characterName + " for " + this.attackPower + ' damage.<br />';
  message += enemyCharacter.characterName + " struck back for " + enemyCharacter.attackPower + ' damage.<br />';
  this.attackPower *= 2;
}

var obiWan = new Character('Obi-Wan Kenobi', 120, 8, "obiWan");
var lukeSkywalker = new Character('Luke Skywalker', 100, 5, "lukeSkywalker");
var bobaFett = new Character('Boba Fett', 150, 20, "bobaFett");
var darthMaul = new Character('Darth Maul', 180, 25, "darthMaul");

var characters = [obiWan, lukeSkywalker, bobaFett, darthMaul];
var message = "";
// var defeatedCharacters = 0;
var playerCharacter;
var enemyCharacter;

function updateCharacters() {
  for (var i = 0; i < characters.length; i++) {
    $('#' + i + '.characterName').html(characters[i].characterName);
    $('#' + i + '.characterHealth').html('Current Health: ' + characters[i].currentHitPoints + " / " + characters[i].totalHitPoints);
    $('#' + i + '.characterAttack').html('Attack Power: ' + characters[i].attackPower);
  }
}

function prepareSelection() {

  for (var i = 0; i < characters.length; i++) {
    var subString = characters[i].characterName.substring(0, (characters[i].characterName.indexOf(" ")));
    $('#' + i + '.buttonArea').html('<button class="selectButton" id="' + i + '">Select ' + subString + '</button>');
  }
}

function createEnemies() {
  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) {
      $('#enemyArea').append($('#' + i + '.character'));
    }
    else {
      $('#playerArea').append($('#' + i + '.character'));
    }
  }
}

function prepareEnemy() {
  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) { 

        var subString = characters[i].characterName.substring(0, (characters[i].characterName.indexOf(" ")));
        $('#' + i + '.buttonArea').html('<button class="selectButton" id="' + i + '">Select ' + subString + '</button>');
        $('#' + i + '.selectButton').addClass('chooseEnemyButton');
        $('#' + i + '.chooseEnemyButton').removeClass('selectButton');
        $('#' + i + '.chooseEnemyButton').text('Fight ' + subString);
      }
    
    else {
      $('#' + i + '.buttonArea').html('');
    }
  }
  $('.defeated .buttonArea').html('');
}

function chooseEnemy(index) {
  console.log(index);
  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) {

      $('#' + i + '.buttonArea').html('');

    }
    else {
      $('#' + i + '.buttonArea').html('<button class="attackButton" id="' + i + '">Attack</button>');
    }
  }

  $currentEnemy.append($('#' + index + '.character'));
}

function checkCharacters() {
  if (characters[enemyCharacter].currentHitPoints <= 0) {
    $('#' + enemyCharacter + '.character').addClass('defeated');
    message += "<br />You defeated " + characters[enemyCharacter].characterName + "!!";

    createEnemies();
    prepareEnemy();
  }
  $('#notificationArea').html(message);
}

function checkVictory() {
  if ($('.defeated').length == 3){
    message += "<br />You won the game!";
    $('#notificationArea').html(message);

  }
  if (characters[playerCharacter].currentHitPoints <= 0){
    message += "<br />You lost the game!";
    $('#notificationArea').html(message);
  }
}

function prepareGame() {

  for (var i = 0; i < characters.length; i++) {
    var $genericCharacter = $('<div>').addClass('character');
    $genericCharacter.attr("id", i);
    $genericCharacter.append('<div class="row" id="row' + i + '">');
    $genericCharacter.find('#row' + i).append('<div class="col-6" id="firstCol' + i + '">');
    $genericCharacter.find('#row' + i).append('<div class="col-6" id="secondCol' + i + '">');


    $genericCharacter.find('#firstCol' + i).append('<img src="./assets/images/' + characters[i].fileName + '.jpg" class="characterImage">');
    $genericCharacter.find('#secondCol' + i).append('<div class="characterName" id="' + i + '">');
    $genericCharacter.find('#secondCol' + i).append('<div class="characterHealth" id="' + i + '">');
    $genericCharacter.find('#secondCol' + i).append('<div class="characterAttack" id="' + i + '">');
    $genericCharacter.find('#secondCol' + i).append('<div class="buttonArea" id="' + i + '">');

    $characterSelection.append($genericCharacter);

  }
}

$(document).ready(function () {
  prepareGame();
  updateCharacters();
  prepareSelection();

  $('button').on('click', function () {
    if (this.classList.contains('chooseEnemyButton')) {
      console.log("Hello");
      enemyCharacter = $(this).attr('id');
      chooseEnemy(enemyCharacter);
    }
    else if (this.classList.contains('selectButton')) {
      playerCharacter = $(this).attr('id');
      createEnemies();
      prepareEnemy();
    }
  });

  $("body").on("click", ".buttonArea button.attackButton", function () {
    characters[playerCharacter].attack(characters[enemyCharacter]);
    updateCharacters();
    checkCharacters();
    checkVictory();
  });

  $("body").on("click", ".buttonArea button.chooseEnemyButton", function () {
    enemyCharacter = $(this).attr('id');
    chooseEnemy(enemyCharacter);
  });
});



// Attack Current Enemy On Click
// When Enemy Health is equal to zero, enemy class changes to defeated and returns to enemy area
// Enemy selection repeats

// When hero health goes to zero game is over
// When all enemies are defeated game is over

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