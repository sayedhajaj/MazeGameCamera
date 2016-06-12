MazeCamera.MazeLevel = function(game){
    Level.call(this, game);
    this.bgColor = "#000";
    this.walls = [];
    this.consumables = [];
    this.levelString = ``;
    this.blocksize = 35;
    this.parseLevel = function(){
        var level = this.levelString.split("\n");
        var game = this.game;
        for(var y = 0; y < level.length; y++){
            for(var x = 0; x < level[y].length; x++){
                if(level[y][x].toUpperCase() === "W") this.walls.push(new game.Block(game, x*this.blocksize, y*this.blocksize, this.blocksize, this.blocksize));
                if(level[y][x].toUpperCase() === "C") this.consumables.push(new game.Block(game, x*this.blocksize, y*this.blocksize, this.blocksize, this.blocksize));
                if(level[y][x].toUpperCase() === "G") this.goal = new game.Block(game, x*this.blocksize, y*this.blocksize, this.blocksize, this.blocksize);
                if(level[y][x].toUpperCase() === "P") this.player = new game.Block(game, x*this.blocksize, y*this.blocksize, this.blocksize, this.blocksize);
            }
        }
    };

    this.init = function(){
        this.walls = [];
        this.consumables = [];
        this.camera.position = new Vector(0, 0);
        this.camera.velocity = new Vector(0, 0);
        this.parseLevel();
        this.player.moveUp = function(){this.velocity.b = - this.speed;};
        this.player.moveDown = function(){this.velocity.b =  this.speed;};
        this.player.moveLeft = function(){this.velocity.a = - this.speed;};
        this.player.moveRight = function(){this.velocity.a =  this.speed;};
        this.player.stopVert = function(){this.velocity.b = 0;};
        this.player.stopHori = function(){this.velocity.a = 0;};
    };

    this.update = function(){
        this.player.update();
        for(var i = 0; i < this.walls.length; i++) if(this.collide(this.player, this.walls[i])) this.handleCollision(this.player, this.walls[i]);
        for(var i = 0; i < this.consumables.length; i++) if(this.collide(this.player, this.consumables[i])) this.consumables.splice(i, 1);
        var screenPos = this.player.position.SubtractVector(this.camera.position);
        if(screenPos.a<80 || screenPos.a> 300) this.camera.velocity.a = this.player.velocity.a*-1;
        else this.camera.velocity.a = 0;
        if(screenPos.b<80 || screenPos.b> 100) this.camera.velocity.b = this.player.velocity.b*-1;
        else this.camera.velocity.b = 0;
        this.camera.update();
        if(this.collide(this.player, this.goal) && this.consumables.length== 0) this.game.lm.setNextLevelFromStart();
    };

    this.collide = function(rect1, rect2){
    	if(rect1.position.a+rect1.dimensions.a <= rect2.position.a+rect2.dimensions.a && rect1.position.a+rect1.dimensions.a >= rect2.position.a ||
    		rect2.position.a+rect2.dimensions.a <= rect1.position.a+rect1.dimensions.a && rect2.position.a+rect2.dimensions.a >= rect1.position.a) {
    		if(rect1.position.b+rect1.dimensions.b <= rect2.position.b+rect2.dimensions.b && rect1.position.b+rect1.dimensions.b >= rect2.position.b ||
    			rect2.position.b+rect2.dimensions.b <= rect1.position.b+rect1.dimensions.b && rect2.position.b+rect2.dimensions.b >= rect1.position.b) {
    				return true;
    		}
    	}
    	return false;
    };

    this.handleCollision = function(player, block){
    	var xOverlap = 0, yOverlap = 0;
    	if(player.position.a<block.position.a) xOverlap = block.position.a-player.position.a+player.dimensions.a;
    	else if (player.position.a>block.position.a) xOverlap = player.position.a-block.position.a+block.dimensions.a;

    	if(player.position.b<block.position.b) yOverlap = block.position.b-player.position.b+player.dimensions.b;
    	else if (player.position.b>block.position.b) yOverlap = player.position.b-block.position.b+block.dimensions.b;

    	if(xOverlap>yOverlap){
    		if(player.position.a<block.position.a) player.position.a=block.position.a-player.dimensions.a;
    		else if (player.position.a>block.position.a) player.position.a=block.position.a+block.dimensions.a;
    		player.velocity.a = 0;
    	} else {
    		if(player.position.b<=block.position.b) player.position.b=block.position.b-player.dimensions.b;
    		else if (player.position.b>block.position.b) player.position.b=block.position.b+block.dimensions.b;
    		player.velocity.b = 0;
    	}
    };

    this.draw = function(){
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();

        this.ctx.translate(this.camera.position.a, this.camera.position.b);

        this.ctx.strokeStyle = "#fff";
        this.ctx.fillStyle = "#fff";
        for(var i = 0; i < this.walls.length; i++) this.walls[i].drawBorder();

        this.ctx.fillStyle =  "#ff0";
        for(var i = 0; i < this.consumables.length; i++) this.consumables[i].draw();

        this.ctx.fillStyle = "#0f0";
    	this.goal.draw();

    	this.ctx.fillStyle = "#f00";
    	this.player.draw();
        this.ctx.restore();
    };

};

MazeCamera.MazeLevel.prototype = new Level(MazeCamera);

MazeCamera.MazeLevel.prototype.handleKeyInput = function(evt, keyup){
    if(keyup){
        if(this.game.keystate[up]) this.player.moveUp();
        if(this.game.keystate[down]) this.player.moveDown();
        if(this.game.keystate[left]) this.player.moveLeft();
        if(this.game.keystate[right]) this.player.moveRight();
    } else {
        if(this.game.keystate[up] || this.game.keystate[down]) this.player.stopVert();
        if(this.game.keystate[left] || this.game.keystate[right]) this.player.stopHori();
    }
}
