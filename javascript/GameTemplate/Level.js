function Level(game){
    GamePage.call(this, game);
    this.score = 0;
    this.saveHighScore = function(){
    	localStorage.setItem(this.gameTitle+this.constructor.name + "highScore", this.score);
    };

    this.getHighScore = function() {
    	if (localStorage.getItem(this.gameTitle+this.constructor.name + "highScore")){
    		return localStorage.getItem(this.gameTitle+this.constructor.name + "highScore");
    	}
    	return 0;
    };

    this.deleteHighScore = function(){
    	if (localStorage.getItem(this.gameTitle+this.constructor.name + "highScore")){
    		localStorage.removeItem(this.gameTitle+this.constructor.name + "highScore");
    	}
    };

    this.highScore = this.getHighScore();
}
Level.prototype = new GamePage();
