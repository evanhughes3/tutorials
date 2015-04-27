"use strict;"

// Game board
var WIDTH=700, HEIGHT=600, pi=Math.PI;
// Controls
var UpArrow=38, DownArrow=40;
// Gamestate
var canvas, ctx, keystate;
// Logic
var player, ai, ball;

player = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {
    if (keystate[UpArrow]) this.y -= 7;
    if (keystate[DownArrow]) this.y += 7;
    this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0)
  },
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

ai = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {
    var destination = ball.y - (this.height - ball.side)*0.5;
    this.y += (destination - this.y) * 0.1;
    this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0)
  },
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

ball = {
  x: null,
  y: null,
  vel: null,
  side: 20,
  speed: 12,

  serve: function(side) {
    var r = Math.random();
    this.x = side === 1 ? player.x+player.width : ai.x - this.side;
    this.y = (HEIGHT - this.side)*r;

    var phi = 0.1*pi*(1 - 2*r);
    this.vel = {
      x: side*this.speed*Math.cos(phi),
      y: this.speed*Math.sin(phi),
    }
  },

  update: function() {
    this.x += this.vel.x;
    this.y += this.vel.y;

    if (this.y < 0 || this.y + this.side > HEIGHT) {
      var offset = this.vel.y < 0 ? 0 - this.y : HEIGHT - (this.y + this.side)
      this.y += 2*offset;
      this.vel.y *= -1;
    }

    var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh) {
      return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
    };

    var paddle = this.vel.x < 0 ? player : ai;
    if (AABBIntersect(paddle.x, paddle.y, paddle.width, paddle.height, this.x, this.y, this.side, this.side)) {
      this.x = paddle===player ? player.x+player.width : ai.x - this.side;
      var n = (this.y+this.side - paddle.y)/(paddle.height+this.side);
      var phi = 0.25*pi*(2*n - 1); //pi/4 = 45degree angle

      var smash = Math.abs(phi) > 0.2*pi ? 1.5 : 1;
      this.vel.x = smash * (paddle===player ? 1 : -1 ) * this.speed*Math.cos(phi);
      this.vel.y = smash * this.speed*Math.sin(phi);
    }

    if (0 > this.x+this.side || this.x > WIDTH) {
      // then start a new game...
          this.serve(paddle===player ? 1 : -1 );
    }
  },
  draw: function() {
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }
};


function main () {
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};

  document.addEventListener("keydown", function(event){
    keystate[event.keyCode] = true;
  });

  document.addEventListener("keyup", function(event){
    delete keystate[event.keyCode];
  });

  init();

  var loop = function() {
    update();
    draw();

    window.requestAnimationFrame(loop, canvas);
  };
  window.requestAnimationFrame(loop, canvas);
}

function init() {
  player.x = player.width;
  player.y = (HEIGHT - player.height)/2;

  ai.x = WIDTH - (player.width + ai.width);
  ai.y = (HEIGHT - ai.height)/2;

  ball.serve(1);
}

function update() {
  ball.update();
  player.update();
  ai.update();
}

function draw() {
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.save();
  ctx.fillStyle = "#fff";

  ball.draw();
  player.draw();
  ai.draw();

  // draw the net in the middle
  var w = 4;
  var x = (WIDTH - w)*0.5;
  var y = 0;
  var step = HEIGHT/25
  while ( y < HEIGHT) {
    ctx.fillRect(x, y+step*0.25, w, step*0.5);
    y += step;
  }


  ctx.restore();
}

main();