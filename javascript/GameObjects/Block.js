MazeCamera.Block = function(game, x, y, width, height){
    this.game = game;
    this.canvas = game.cavas;
    this.ctx = game.ctx;
    this.position = new Vector(x, y);
    this.dimensions = new Vector(width, height);
    this.velocity = new Vector(0, 0);
    this.speed = 6;
    this.update = function(){
        this.position = this.position.AddVector(this.velocity);
    };
    this.draw = function(){
        this.ctx.fillRect(this.position.a, this.position.b, this.dimensions.a, this.dimensions.b);
    };
    this.drawBorder = function(){
        this.ctx.strokeRect(this.position.a, this.position.b, this.dimensions.a, this.dimensions.b);
    };
};
