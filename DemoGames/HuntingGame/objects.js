var player_collider = components.rectCollider({
    collide: false,
});

var coin_collider = components.rectCollider({
  collide: false,
});

var enemy_collider = components.rectCollider({
  collide: false
})

var player = gameEngine.createGameObject({
  type: "rectangle",
  width: 40, height: 40,
  x:10, y:120, 
  color: "blue",
  collider: player_collider
});

var coin = gameEngine.createGameObject({
  type:"rectangle",
  width:30,
  height:30,
  color: "yellow",
  x: 200,
  y: 100,
  collider: coin_collider
})

var score = gameEngine.createGameObject({
  type:"text",
  width:3,
  height:4,
  font: "40px Arial",
  color:"orange",
  text:"Score: 0",
  x:150,
  y:50
})

var enemy = gameEngine.createGameObject({
  type: "rectangle",
  color: "red",
  width: 40,
  height: 40,
  x: 100,
  y: 0,
  collider: enemy_collider
})

var own_sprite = gameEngine.createGameObject({
  type: "custom",
  x: 400,
  y: 150,
  img_src: "logo.png"
})