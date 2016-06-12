function LevelManager(game){
    this.game = game;
    this.levels = [];
    this.currentLevel = null;
}


LevelManager.prototype.addLevel = function (level) {
    this.levels.push(level);
};

LevelManager.prototype.setLevel = function(level) {
    if(!isNaN(level)) this.currentLevel = this.levels[level];
    else this.currentLevel = level;
    this.game.gpm.setPage(this.currentLevel);
};

LevelManager.prototype.setLevelFromStart = function(level) {
    if(!isNaN(level)) this.currentLevel = this.levels[level];
    else this.currentLevel = level;
    this.game.gpm.setPageFromStart(this.currentLevel);
};

LevelManager.prototype.getLevelIndex = function(){
    return this.levels.indexOf(this.currentLevel);
}

LevelManager.prototype.setNextLevel = function(){
    if(this.getLevelIndex()<this.levels.length-1) this.setLevel(this.getLevelIndex()+1);
};

LevelManager.prototype.setNextLevelFromStart = function(){
    if(this.getLevelIndex()<this.levels.length-1) this.setLevelFromStart(this.getLevelIndex()+1);
};
