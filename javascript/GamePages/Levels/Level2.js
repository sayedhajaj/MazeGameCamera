MazeCamera.Level2 = function(game){
    MazeCamera.MazeLevel.call(game, this);
    this.levelString =
`WWWWWWWWWWWWWWWWWWWW
W                  W
W    P             W
W                  W
W                  W
W      C           W
W                  W
W     G            W
W                  W
W                  W
W                  W
W       WWWWWW     W
W
WWWWWWWWWWWWWWWWWWWW`;
};

MazeCamera.Level2.prototype = new MazeCamera.MazeLevel(MazeCamera);
