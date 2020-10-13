class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x = 100;
                 var y = 200;
                 var index = 0;
                 
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("white");
                         textSize(30);
                         text(allPlayers[plr].name ,x-25,y+25);  

                         if(fruit1Group.isTouching(player1) || fruit1Group.isTouching(player2)){
                             fruit1Group.destroyEach();
                             player.score += 10;
                             player.update();
                         }
                         else if(fruit2Group.isTouching(player1) || fruit2Group.isTouching(player2)){
                             fruit2Group.destroyEach();
                             player.score += 10;
                             player.update();
                         }
                         else if(fruit3Group.isTouching(player1) || fruit3Group.isTouching(player2)){
                            fruit3Group.destroyEach();
                            player.score += 10;
                            player.update();
                        }
                        else if(fruit4Group.isTouching(player1) || fruit4Group.isTouching(player2)){
                            fruit4Group.destroyEach();
                            player.score += 10;
                            player.update();
                        }
                        else if(fruit5Group.isTouching(player1) || fruit5Group.isTouching(player2)){
                            fruit5Group.destroyEach();
                            player.score += 10;
                            player.update();
                        }
                     }
                     //for(var i = 50; i <= 100; i += 50){
                        //text(allPlayers[plr].score,100,i);
                     //}
                     

                 }
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 30 === 0) {
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruit1 = createSprite(random(100,1000),0,100,100);
                         fruit1.addImage(fruit1_img);
                         fruit1.velocityY = 6;
                       
                         fruit1Group.add(fruit1);
                         break;
                         case 2: fruit2 = createSprite(random(100,1000),0,100,100);
                         fruit2.addImage(fruit2_img);
                         fruit2.velocityY = 6;
                       
                         fruit2Group.add(fruit2);
                         break;
                         case 3: fruit3 = createSprite(random(100,1000),0,100,100);
                         fruit3.addImage(fruit3_img);
                         fruit3.velocityY = 6;
                       
                         fruit3Group.add(fruit3);
                         break;
                         case 4: fruit4 = createSprite(random(100,1000),0,100,100);
                         fruit4.addImage(fruit4_img);
                         fruit4.velocityY = 6;
                       
                         fruit4Group.add(fruit4);
                         break;
                         case 5:  fruit5 = createSprite(random(100,1000),0,100,100);
                         fruit5.addImage(fruit5_img);
                         fruit5.velocityY = 6;
                       
                         fruit5Group.add(fruit5);
                         break;
                     }
                     
                 }
                
                  /*if (fruit1Group.isTouching(player1) || fruit1Group.isTouching(player2)) {
                      fruit1Group.destroyEach();
                      player.score += 10;
                      player.update();
                  }
                  else if (fruit2Group.isTouching(player1) || fruit2Group.isTouching(player2)) {
                    fruit2Group.destroyEach();
                    player.score += 10;
                    player.update();
                  }
                  else if (fruit3Group.isTouching(player1) || fruit3Group.isTouching(player2)) {
                    fruit3Group.destroyEach();
                    player.score += 10;
                    player.update();
                  }
                  else if (fruit4Group.isTouching(player1) || fruit4Group.isTouching(player2)) {
                    fruit4Group.destroyEach();
                    player.score += 10;
                    player.update();
                  }
                  else if (fruit5Group.isTouching(player1) || fruit5Group.isTouching(player2)) {
                    fruit5Group.destroyEach();
                    player.score += 10;
                    player.update();
                  }*/
               

                drawSprites();
    }
    end(){
        console.log("Game Ended");
        console.log(player.rank);
    }
}