export function GameEngine() {
  var self = this;
  self.current_key = null;
  self.mouse_pos = [];
  self.clicked_mouse = false;
  // Canvas element and context
  this.canvas = document.createElement("canvas");
  this.context = this.canvas.getContext("2d");

  // Game objects and settings
  this.objects = [];
  this.interval = null;

  // Initialize the game engine
  this.init = function (width, height) {
    self.canvas.width = width;
    self.canvas.height = height;
    document.body.insertBefore(self.canvas, document.body.childNodes[0]);
    // listeners to track user inputs
    window.addEventListener("keydown", function (e) {
      self.current_key = e.key;
    });
    window.addEventListener("keyup", function (e) {
      self.current_key = null
    });
    window.addEventListener("mousedown", function (evt) {
      self.clicked_mouse = true;
    });
    window.addEventListener("mouseup", function (evt) {
      self.clicked_mouse = false;
    });
    window.addEventListener("mousemove", function (evt) {
      self.mouse_x = evt.pageX;
      self.mouse_y = evt.pageY;
    });

  };

  // Start the game engine
  this.start = function () {
    for (var i = 0; i < self.objects.length; i++) {
      if (self.objects[i].init) {
        self.objects[i].init();
      }
    }
    self.interval = setInterval(function () {
      self.sprite_update();
      self.draw();
      self.update();
    }, 20);

  };

  // Stop the game engine
  this.stop = function () {
    clearInterval(self.interval);
  };

  this.update = function  () {
    // its and empty function, what the user can fill up
  };
  // sprite_update the game state
  this.sprite_update = function () {
    for (var i = 0; i < self.objects.length; i++) {
      if (self.objects[i].sprite_update) {
        self.objects[i].sprite_update();
      }
    }
  };

  // Draw the game objects
  this.draw = function () {
    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    for (var i = 0; i < self.objects.length; i++) {
      if (self.objects[i].draw) {
        self.objects[i].draw();
      }
    }
  };

  this.hide_mouse_cursor = function(){
    self.canvas.style.cursor = "none";
  } 
  this.show_mouse_cursor = function(type="default") {
  var types = ["wait", "help", "move", "pointer", "none", "crosshair", "cell"];

  self.canvas.style.cursor = type;
  }
  this.getKey = function () {
    return current_key;  
  }

  this.pressedKey = function(key) {
    if (key == self.current_key){
      return true;
    }else{
      return false;
    }
  };

this.getMousePos = function(canvas, evt) {
    return [self.mouse_x, self.mouse_y];
};

this.getRandomInt = function(max){
  return Math.floor(Math.random() * max);
}

this.collided = function(obj1, obj2) {
      // Check if the objects' rectangular boundaries intersect
      if (obj1.x < obj2.x + obj2.width &&
          obj1.x + obj1.width > obj2.x &&
          obj1.y < obj2.y + obj2.height &&
          obj1.y + obj1.height > obj2.y) {
        // Collision detected
        return true;
      } else {
        // No collision
        return false;
      }
}

this.deleteGameObject = function(obj){
  if (self.objects.includes(obj)){
    var index = self.objects.indexOf(obj);
    if (index > -1) {
      self.objects.splice(index, 1);
    };
    for (var prop in obj) {
      delete obj[prop];
    }
  }
}

  // Create a new game object
    this.createGameObject = function (information) {
      var obj = {
        // meh make it cleaner 
        type: information.type,
        width: information.width,
        height: information.height,
        x: information.x,
        y: information.y,
        color: information.color,
        text: information.text,
        stroke: information.stroke,
        strokeWidth: information.strokeWidth,
        font: information.font,
        img_src: information.img_src,
        components: information.components,
        sprite_update: function () {
          if(this.type === "rectangle"){
            this.y == this.y - this.height / 2
            this.x == this.x - this.width / 2
          }
          for(let comp of this.components){
            if(comp.type === "collider"){
              comp.obj.x = this.x - comp.obj.width /2;
              comp.obj.y = this.y - comp.obj.height / 2;
            }
          }

        },
        draw: function () {
          if (this.type == "text"){
            self.context.font = this.font
            self.context.fillStyle = this.color;
            self.context.fillText(this.text, this.x, this.y);
          }else if(this.type == "rectangle"){
            self.context.fillStyle = this.color;
            self.context.fillRect(this.x, this.y, this.width, this.height);
          }else if (this.type == "circle") {
            self.context.beginPath();
            self.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            if (this.color) {
              self.context.fillStyle = this.color;
              self.context.fill();
            }
            if (this.stroke) {
              self.context.lineWidth = this.strokeWidth;
              self.context.strokeStyle = this.stroke;
              self.context.stroke();
            }
          }else if(this.type == "custom"){
            //self.context.drawImage(this.img_src, this.x, this.y);  
          }

        },
        move: function(x=0,y=0) {
          this.x += x;
          this.y += y;
        },
        rotate: function(degrees) {
        },
        setPosition: function(x,y){
          this.x = x;
          this.y = y;
        },
        setPositionMiddle: function(x,y){
          this.x = x - this.width / 2;
          this.y = y - this.height / 2;
        },
        getComponent: function(comp_name){
          for(let component of this.components){
            if(component.name === comp_name){
              return component.obj;
            }
          }
        },
        init: function(){
          if(this.components == undefined){
            this.components = [];
          }
          // user can write extended code, what will happens, when the object will generated
          for (let component of this.components) {
            if (component.type === "collider"){
              if(component.obj.width === undefined){
                component.obj.width = this.width;
              }
              if(component.obj.height === undefined){
                component.obj.height = this.height;
              }
            }
          }

        },
      };
      self.objects.push(obj);
      obj.init()
      return obj;
    };
}

