var $characterSelection = $('#characterSelection');
var $enemyArea = $('#enemyArea');
var $currentEnemy = $('#currentEnemy');
var $playerArea = $('#playerArea');
var $notificationArea = $('#notificationArea');

// Make sure to allow Pop Ups!

window.onload = function() {
   window.open('./video.html','Intro Video',' menubar=0, resizable=0,dependent=0,status=0,width=1000,height=550')
}

function Character(characterName, hitPoints, attackPower, fileName) {
  this.characterName = characterName;
  this.totalHitPoints = hitPoints;
  this.currentHitPoints = hitPoints;
  this.attackPower = attackPower;
  this.fileName = fileName;
}

Character.prototype.attack = function (enemyCharacter) {
  message = "";

  enemyCharacter.currentHitPoints -= this.attackPower;
  message += this.characterName + " attacked " + enemyCharacter.characterName + " for " + this.attackPower + ' damage.<br />';

  this.currentHitPoints -= enemyCharacter.attackPower;
  message += enemyCharacter.characterName + " struck " + this.characterName + " for " + enemyCharacter.attackPower + ' damage.<br />';
 
  this.attackPower *= 2;
}

var obiWan = new Character('Obi-Wan Kenobi', 120, 8, "obiWan");
var lukeSkywalker = new Character('Luke Skywalker', 100, 5, "lukeSkywalker");
var bobaFett = new Character('Boba Fett', 150, 20, "bobaFett");
var darthMaul = new Character('Darth Maul', 180, 25, "darthMaul");

var characters = [obiWan, lukeSkywalker, bobaFett, darthMaul];
var message = "";
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

  // $enemyArea.append('<div class="col-1"><img src="./assets/images/otherenemies.png" class="sideImage rotateImage"></div>');
  // $currentEnemy.append('<div class="col-1"><img src="./assets/images/opponent.png" class="sideImage rotateImage"></div>');
  // $playerArea.append('<div class="col-1"><img src="./assets/images/otherenemies.png" class="sideImage rotateImage"></div>');

  $('#instructionHeading').html('<img src="./assets/images/selectcharacter.png">');

  for (var i = 0; i < characters.length; i++) {
    var subString = characters[i].characterName.substring(0, (characters[i].characterName.indexOf(" ")));
    $('#' + i + '.buttonArea').html('<button type="button" class="selectButton btn btn-outline-warning" id="' + i + '">Select ' + subString + '</button>');
  }
}

function createEnemies() {
  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) {
      $('#enemyArea').append($('#' + i + '.character'));
    }
    else {
      $('#playerArea').append($('#' + i + '.character'));
      $('#playerArea').append($('#notificationArea'));
    }
  }
}

function prepareEnemy() {
  $('#instructionHeading').html('<img src="./assets/images/selectenemy.png">');

  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) {

      var subString = characters[i].characterName.substring(0, (characters[i].characterName.indexOf(" ")));
      $('#' + i + '.buttonArea').html('<button type="button" class="selectButton btn btn-outline-warning" id="' + i + '">Select ' + subString + '</button>');
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
  $('#instructionHeading').html('<img src="./assets/images/fight.png">');
  console.log(index);
  for (var i = 0; i < characters.length; i++) {
    if (i != playerCharacter) {

      $('#' + i + '.buttonArea').html('');

    }
    else {
      $('#' + i + '.buttonArea').html('<button type="button" class="attackButton btn btn-outline-warning" id="' + i + '">Attack</button>');
    }
  }

  // $enemyArea.prepend('<img src="./assets/images/otherenemies.png" class="sideImage rotateImage">')
  // $currentEnemy.append('<img src="./assets/images/opponent.png" class="sideImage rotateImage">')
  $currentEnemy.append($('#' + index + '.character'));
}

function checkCharacters() {
  if (characters[enemyCharacter].currentHitPoints <= 0) {
    $('#' + enemyCharacter + '.character').addClass('defeated');
    message += "<br />You defeated " + characters[enemyCharacter].characterName + "!!";
    removeImage();
    createEnemies();
    prepareEnemy();
  }
  $('#notificationArea').html(message);
}

function checkVictory() {
  if ($('.defeated').length == 3) {
    message += "<br />You won the game!";
    $('#notificationArea').html(message);
    $('.buttonArea').html('');
    $('#instructionHeading').html('<img src="./assets/images/youwon.png">');


  }
  if (characters[playerCharacter].currentHitPoints <= 0) {
    message = "You lost the game!";
    $('#' + playerCharacter + '.character').addClass('defeated');
    $('#notificationArea').html(message);
    $('.buttonArea').html('');
    $('#instructionHeading').html('<img src="./assets/images/youlost.png">');

  }
}

function addImages(){
  $enemyArea.prepend('<div class="col-md-1 sideImageDiv"><img src="./assets/images/otherenemies.png" class="sideImage rotateImage"></div>');
  $currentEnemy.prepend('<div class="col-md-1 sideImageDiv"><img src="./assets/images/opponent.png" class="sideImage rotateImage" id="opponentHeader"></div>');
  $playerArea.prepend('<div class="col-md-1 sideImageDiv"><img src="./assets/images/yourhero.png" class="sideImage rotateImage"></div>');
}

function removeImage(){
  $('.sideImageDiv').remove();
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

  $("body").on("click", ".buttonArea button.selectButton", function () {
    playerCharacter = $(this).attr('id');
    createEnemies();
    prepareEnemy();
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
    addImages();
  });
});
