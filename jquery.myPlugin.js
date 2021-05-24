(function( $ ) {
    var methods = {
      start : function () {
        var wallSpriteUrl = "http://gamedesign.wdfiles.com/local--files/spriteart%3Asprite-art-101-basic-depth/sprite_art_depth_tutorial_1.png";
		var heroSpriteUrl = "http://ih1.redbubble.net/image.120547122.4728/sticker,375x360.u2.png";
var hero = {
  x: 0,
  y: 0,
  vel: {
    x: 0,
    y: 0
  },
  width: 20,
  height: 20,
  jumpForse: 3,
  image: new Image()
};
hero.image.src = heroSpriteUrl;
var walls = [];
function Wall(x, y){
  this.x = x || 0;
  this.y = y || 0;
  this.image = new Image();
  this.image.src = wallSpriteUrl;
}
 
Wall.prototype.width = 20;
Wall.prototype.height = 30;
Wall.prototype.x = 0;
Wall.prototype.y = 0;
 
for(var i = 0; i < 10; i++){
  var lastWall = walls[walls.length - 1];
  if(!lastWall){
    walls.push(new Wall(0));
  }else{
    walls.push(new Wall(i * 200));
  }
}
 
var canvas = document.body.appendChild(document.createElement("canvas")).getContext("2d");
canvas.canvas.style.background = "black";
canvas.canvas.style.width = "500px";
canvas.canvas.style.background = "black";
 
window.addEventListener("keydown", function(event){
  if(event.keyCode === 32 && !hero.vel.y){
    hero.vel.y = -hero.jumpForse;
  }
});
 
var restart = function(){
  gameEndFlag = false;
  hero.vel.x = 1;
  hero.vel.y = 0;
  hero.x = -100;
  hero.y = 0;
  
  loop();
};
 
var fail = function(){
  hero.vel.x = 0;
  hero.vel.y = -3;
  gameEndFlag = true;
};
 
var gameEndFlag = false;
 
var loop = function(){
  hero.x += hero.vel.x;
  hero.y += hero.vel.y;
  hero.vel.y += 0.1;
  
  if(gameEndFlag){
    if(hero.y >= 100){
      restart();
      return;
    }
  }else if(hero.y >= 0){
    hero.y = 0;
    hero.vel.y = 0;
  }
  
  canvas.save();
  canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
  
  canvas.fillStyle = "white";
  canvas.fillRect(0, 100, canvas.canvas.width, 1);
  
  canvas.translate(-hero.x + 30, 100);
  
  walls.forEach(wall => {
    if((wall.x - hero.x - hero.width) * (hero.x - wall.x - wall.width) > 0
      && (wall.y - hero.y + hero.height) * (hero.y - wall.y + wall.height) > 0){
      if(!gameEndFlag){
        fail();
      }
    }
    canvas.drawImage(
      wall.image,
      wall.x,
      wall.y - wall.height,
      wall.width,
      wall.height
    );
  });
  
  canvas.drawImage(
    hero.image,
    hero.x | 0,
    hero.y - hero.height | 0,
    hero.width,
    hero.height
  );
  
  canvas.restore();
  requestAnimationFrame(loop);
};
 
restart();
        
}}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
          
        };
      })( jQuery );