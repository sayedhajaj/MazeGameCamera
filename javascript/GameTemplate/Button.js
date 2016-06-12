function Button(imgpath, position, action){
    this.image = new Image();
    this.image.src = imgpath;
    this.position = position;
    this.dimensions = new Vector(0, 0);
    this.action = action;
}

Button.prototype.draw = function(){
    ctx.drawImage(this.image, this.position.a, this.position.b);
};

Button.prototype.handleClick = function(x, y){
    if((x <= this.position.a+this.dimensions.a && this.position.a <= x) && (y <= this.position.b+this.dimensions.b && this.position.b <= y))
    this.click();
};

Button.prototype.click = function() {this.action();};
