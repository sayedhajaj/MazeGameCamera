function GamePage(game){
    this.game = game;
    if(game){
        this.canvas = game.canvas;
        this.ctx = game.ctx;
        this.gameTitle = this.game.gameTitle;
        this.camera = this.game.camera;
    }
    this.bgColor = "";
}

GamePage.prototype.init = function(){

};

GamePage.prototype.update = function(){

};

GamePage.prototype.draw = function(){

};

GamePage.prototype.handleKeyInput = function(evt, keyup){

};

GamePage.prototype.handleMouseDown = function(x, y){

};

GamePage.prototype.handleMouseUp = function(x, y){

};

GamePage.prototype.handleMouseClick = function(x, y){

};

GamePage.prototype.handleMouseMove = function(x, y){

};

GamePage.prototype.handleTouchClick = function(x, y){

};

GamePage.prototype.handleTouchMove = function(x, y){

};

GamePage.prototype.handleDeviceOrientation = function(x, y, z){

};
