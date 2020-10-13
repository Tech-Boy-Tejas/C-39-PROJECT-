var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruit1,fruit2,fruit3,fruit4,fruit5;
var fruit1Group,fruit2Group,fruit3Group,fruit4Group,fruit5Group;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var gameOver,restart,gameOverImg,restartImg;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");

  gameOverImg = loadImage("images/GAME OVER0.png");
  restartImg = loadImage("images/RESTART0.png");

  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  fruit5Group = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();

  //gameOver = createSprite(500,300);
  //restart = createSprite(500,500);

  //gameOver.addImage(gameOverImg);
  //restart.addImage(restartImg);

  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  console.log(player.rank);
  console.log(gameState);
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    /*game.update(2);
    gameOver.visible = true;
    restart.visible = true;

      if(mousePressedOver(restart)){
        player.updateCount(0);
        game.update(0);
        Player.updatescoremorethan200(0);
        
        game.getState();
        game.start();
      }*/
      game.end();
   }

   drawSprites();
}

