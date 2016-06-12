function Game(name){
    this.gameTitle = name;
    this.canvas = document.getElementById(name);
    this.canvas.game = this;
    this.ctx = this.canvas.getContext("2d");
    this.offset = getOffset(this.canvas);
    this.keystate = {};

    this.defaultWidth = this.canvas.width;
	this.defaultHeight = this.canvas.height;
	this.widthScale = 1;
	this.heightScale = 1;
    this.fullScreen = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    this.gpm = new GamePageManager(this);
    this.lm = new LevelManager(this);
    this.camera = new Camera();

    this.start = function(){
        var game = this;
        document.addEventListener("keydown", function(evt) {
    		game.keystate[evt.keyCode] = true;
    		game.gpm.handleKeyInput(evt, true);
    	});
    	document.addEventListener("keyup", function(evt) {
    		game.gpm.handleKeyInput(evt, false);
    		delete game.keystate[evt.keyCode];
    	});

    	this.canvas.addEventListener('mousedown', function(evt){
    		var x = evt.offsetX;
    		var y = evt.offsetY;
    		game.gpm.handleMouseDown(x, y);
    	});

    	this.canvas.addEventListener('mouseup', function(evt){
    		var x = evt.offsetX;
    		var y = evt.offsetY;
    		game.gpm.handleMouseUp(x, y);
    	});
    	this.canvas.addEventListener('click', function(evt){
    		var x = evt.offsetX;
    		var y = evt.offsetY;
            game.gpm.handleMouseClick(x, y);
    	});

    	this.canvas.addEventListener('mousemove', function(evt){
    		var x = evt.offsetX;
    		var y = evt.offsetY;
    		game.gpm.handleMouseMove(x, y);
    	});

    	this.canvas.addEventListener('touchstart', function(evt){
    		var touch = evt.touches[0];
    		var x = touch.pageX-game.offset.Left;
    		var y = touch.pageY-game.offset.Top;
    		game.gpm.handleTouchClick(x, y);
    	});

    	this.canvas.addEventListener('touchmove', function(evt){
    		var touch = evt.touches[0];
    		var x = touch.pageX-game.offset.Left;
    		var y = touch.pageY-game.offset.Top;
    		evt.preventDefault();
    		game.gpm.handleTouchMove(x, y);
    	});

    	this.canvas.addEventListener('deviceorientation', function(evt){
            console.log(this);
    		this.gpm.handleDeviceOrientation(evt.gamma, evt.beta, evt.alpha);
    	});

    	this.canvas.ondragstart = function(e) {
    	    if (e && e.preventDefault) { e.preventDefault(); }
    	    if (e && e.stopPropagation) { e.stopPropagation(); }
    	    return false;
    	};

    	this.canvas.onselectstart = function(e) {
    	    if (e && e.preventDefault) { e.preventDefault(); }
    	    if (e && e.stopPropagation) { e.stopPropagation(); }
    	    return false;
    	};

    	document.body.ontouchstart = function(e) {
    	    if (e && e.preventDefault) { e.preventDefault(); }
    	    if (e && e.stopPropagation) { e.stopPropagation(); }
    	    return false;
    	};

    	document.body.ontouchmove = function(e) {
    	    if (e && e.preventDefault) { e.preventDefault(); }
    	    if (e && e.stopPropagation) { e.stopPropagation(); }
    	    return false;
    	};

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) this.setFullScreen();
    	this.init();
        this.play();
    };

    this.setFullScreen = function(){
        if(this.fullScreen){
            if ((window.innerWidth/this.canvas.width)<(window.innerHeight/this.canvas.height)) {
        		this.canvas.height*=window.innerWidth/this.canvas.width;
        		this.canvas.width=window.innerWidth;
        	} else {
        		this.canvas.width*=window.innerHeight/this.canvas.height;
        		this.canvas.height=window.innerHeight;
        	}
        	this.widthScale = this.canvas.width/this.defaultWidth;
        	this.heightScale = this.canvas.height/this.defaultHeight;
        	this.ctx.scale(this.widthScale, this.heightScale);
        } else {
            this.canvas.width=this.defaultWidth;
        	this.canvas.height=this.defaultHeight;

        	this.widthScale = 1;
        	this.heightScale = 1;
        }

        this.fullScreen=!this.fullScreen;
    };

    this.play = function(){
        var animFrame = window.requestAnimationFrame ||
    	window.webkitRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	window.oRequestAnimationFrame ||
    	window.msRequestAnimationFrame ||
    	null;
        var game = this;
        var gameLoop = function(){
            var currentPage = game.gpm.currentPage;
            if(currentPage) currentPage.update();
            if(currentPage) currentPage.draw();
        }
    	if (animFrame !== null) {
    		var recursiveAnim = function() {
    			gameLoop();
    			animFrame(recursiveAnim);
    		};
    		animFrame(recursiveAnim);
    	} else {
    		setInterval(gameLoop, 1000/fps);
    	}
    };


}
