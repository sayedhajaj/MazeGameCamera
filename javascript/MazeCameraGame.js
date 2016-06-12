var MazeCamera = new Game("MazeCamera");

MazeCamera.init = function(){
    this.level1 = new this.Level1(this);
    this.level2 = new this.Level2(this);

    this.lm.addLevel(this.level1);
    this.lm.addLevel(this.level2);

    this.lm.setLevelFromStart(0);
};
