import { GameEngine } from '../../core/js/game_engine_core.js';
import {Components} from '../../core/js/components.js';


// Create a new game engine
const gameEngine = new GameEngine();
const components = new Components();
// Initialize and start the game engine
gameEngine.init(480, 270);
gameEngine.start();
var score_count = 0;
var speed = 7;
//gameEngine.hide_mouse_cursor()
// Create a new game object
var player_collider = components.rectCollider({
  collide: false,
});

var player_collider_big = components.rectCollider({
  collide: false,
  width: 100,
  height: 100
})

var coin_collider = components.rectCollider({
collide: false,
width:30,
height:30,
x: 200,
y: 100,
});

var enemy_collider = components.rectCollider({
  collide: false,
  width: 40,
  height: 40,
  x: 100,
  y: 0,
  })

var player = gameEngine.createGameObject({
type: "rectangle",
width: 40, height: 40,
x:10, y:120, 
color: "blue",
components: [{type: "collider", name:"player_collider", obj:player_collider}, {type: "collider", name:"player_collider_big", obj:player_collider_big}]// c},
//collider: player_collider
});


var coin = gameEngine.createGameObject({
type:"rectangle", 
width:30,
height:30,
color: "yellow",
x: 200,
y: 100,
components: [{type: "collider", name:"coin_collider", obj: coin_collider}]
})

var circle = gameEngine.createGameObject({
  type: "circle",
  x: 200,
  y: 100,
  radius: 50,
  color: "red",
  stroke: "blue",
  strokeWidth: 2,
});


var score = gameEngine.createGameObject({
  type:"text",
  width:3,
  height:4,
  font: "40px Arial",
  color:"orange",
  text:"Score: 0",
  x:150,
  y:50,
  components: []
  })
  
var enemy = gameEngine.createGameObject({
type: "rectangle",
color: "red",
width: 40,
height: 40,
x: 100,
y: 0,
components: [{type: "collider", name:"enemy_collider", obj:enemy_collider}]
})

var own_sprite = gameEngine.createGameObject({
type: "custom",
x: 400,
y: 150,
img_src: "logo.png"
})

// update function (built-in)
gameEngine.update = function(){
  coin.rotation += 1.1;
  if (gameEngine.clicked_mouse === true){
    player.setPositionMiddle(gameEngine.getMousePos()[0],gameEngine.getMousePos()[1])
  }
  coin.rotate(10);
  if (gameEngine.pressedKey("w")){
    player.move(0,-speed);
    }
  if (gameEngine.pressedKey("s")){
    player.move(0,speed);
      }
  if (gameEngine.pressedKey("a")){
    player.move(-speed,0);
        }
  if (gameEngine.pressedKey("d")){
    player.move(speed,0);
          gameEngine.show_mouse_cursor()
      }

  if (gameEngine.collided(player.getComponent("player_collider"), coin.getComponent("coin_collider"))){
    score_count += 1;
    score.text = "Score: " + score_count;
    //gameEngine.deleteGameObject(coin)
    coin.x = gameEngine.getRandomInt(gameEngine.canvas.width)
    coin.y = gameEngine.getRandomInt(gameEngine.canvas.height)

  }
  if (gameEngine.collided(player.getComponent("player_collider_big"), enemy.getComponent("enemy_collider"))) {
   location.reload();
   }
}