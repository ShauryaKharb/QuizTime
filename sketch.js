var state = 0;
var canvas;
var nameBox, optBox1, optBox2, optBox3, optBox4, submitButton, valueBox;
var player, questions;

var playerCount;

var database;
var count, name;

function setup() {

  // GAME INITIALISATION
  game = new Contestant();

  database = firebase.database();

  canvas = createCanvas(850, 400);

  // optBox1 = createButton("1");
  // optBox1.position(width/2-320,height/2-60);

  // optBox2 = createButton("2");
  // optBox2.position(width/2-320,height/2-18);

  // optBox3 = createButton("3");
  // optBox3.position(width/2-320,height/2+22);

  // optBox4 = createButton("4");
  // optBox4.position(width/2-320,height/2+67);

  // Game Starts Now

  background("pink");
  game.initialise();
  game.updateState(1);


}

function draw() {

  if (state === 1) {
    // .play();
  }
  
  // console.log(state);
  // console.log(player.answer);

}