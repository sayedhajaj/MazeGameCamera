MazeCamera.Level1 = function(game){
    MazeCamera.MazeLevel.call(game, this);
    /*this.levelString =
`WWWWWWWWWWWWWWWWWWWW
W                  W
W    P    WWWWW    W
W                  W
W      WW          W
W          W
W   W W            W
W          W       W
W       C          W
W   WW             W
W      G           W
W                  W
W                  W
WWWWWWWWWWWWWWWWWWWW`;*/

    this.levelString =
`WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
W                  W                                     W
W    P    WWWWW    W                                     W
W                  W                                     W
W      WW          W                                     W
W          W       W                                     W
W   W W            W                                     W
W          W       W                                     W
W       C          W                                     W
W   WW             W                                     W
W                W                                       W
W                  W                                     W
W                  W                                     W
WWWWWWWWWWWWWWWWWWWW                                     W
W                                                        W
W                                                        W
W                                                        W
W                                                        W
W                                                        W
W                                                        W
W                                                        W
W                                                        W
WW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
W        WW        WC             W  CW                  W
W        WW        W    WC      W   WWW                  W
W   WW        WW   W    WWWWWWW W W                      W
W  WWWW      WWWW  W    W       W W   W                  W
W   WW   WW   WW   W    W WWWWWWW     W                  W
W        WW        W    W       W WC  W                  W
WWWWWWWWWWWWWW  WWWW    WWWW WWWW WWWWW                  W
W        WW       CW                  W                  W
W   WW   WW   WW        WWWW WWWW W WWW                  W
W  WWWW      WWWW  W    W       W W   W                  W
W   WW        WW   W       W W        W                  W
W        WW        W    WWWW WWWW W   W                  W
WC       WW       CWC             W  CW        G         W
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW W
W                                                        W
W WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
W                  W
W WWWWWWWWWWWWWWWWWW
W                WCW
W W WWWWWWWWWWWWWW W
W W            WCW W
W W W WWWWWWWWWW W W
W W W          W W W
W W WWWWWWWWWW W W W
W WCW            W W
W WWWWWWWWWWWWWW W W
WCW                W
WWWWWWWWWWWWWWWWWW W
W                  W
WWWWWWWWWWWWWWWWWWWW
`;
};

MazeCamera.Level1.prototype = new MazeCamera.MazeLevel(MazeCamera);
