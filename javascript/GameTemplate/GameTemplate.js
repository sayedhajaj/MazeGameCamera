var canvas, ctx, gameTitle;
var defaultWidth, defaultHeight, keystate, up=38, down=40, left=37, right=39, p=80, f=70, space=32, enter=13;
var fullScreen;
var heightScale, widthScale;
var gpm, lm;
var offset;


function create2DArray(sizes){
	var array = new Array(sizes[0]);
	for(var i=0; i < sizes[0]; i++)	array[i] = (new Array(sizes[1]));
	return array;
}

function toRadians(degrees){
	return degrees * Math.PI / 180;
}

function toDegrees(radians){
	return radians * 180 / Math.PI;
}

function getOffset(obj) {
  var offsetLeft = 0;
  var offsetTop = 0;
  do {
    if (!isNaN(obj.offsetLeft)) {
      offsetLeft += obj.offsetLeft;
    }
    if (!isNaN(obj.offsetTop)) {
      offsetTop += obj.offsetTop;
    }
  } while(obj = obj.offsetParent );
  return {Left: offsetLeft, Top: offsetTop};
}
