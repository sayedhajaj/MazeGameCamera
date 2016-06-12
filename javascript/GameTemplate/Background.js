function Background(imgpath){
	this.image = new Image();
	this.image.src = imgpath;
	this.position = new Vector(0, 0);
	this.velocity = new Vector(0, 0);
    this.dimensions = new Vector(this.image.width, this.image.height);
}

Background.prototype.update = function(){
	this.position = this.position.AddVector(this.velocity);
    if(this.position.a>=canvas.width) this.position.a=0;
    if(this.position.a<=-canvas.width) this.position.a=0;
};

Background.prototype.draw = function(){
	ctx.drawImage(this.image, this.position.a, this.position.b, canvas.width, canvas.height);
    if(this.position.a<0) ctx.drawImage(this.image, this.position.a+canvas.width, this.position.b, canvas.width, canvas.height);
    if(this.position.a>0) ctx.drawImage(this.image, this.position.a-canvas.width, this.position.b, canvas.width, canvas.height);
}
