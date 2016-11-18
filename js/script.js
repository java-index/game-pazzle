//var image = new Image(450, 450);
var crop = new Image(150, 150);
var cropImagesData = [];


var c = document.createElement('canvas');
c.width = 150;
c.height = 150;
var ctx = c.getContext("2d");

window.onload = function() {
	var image = document.getElementById('imageList').children[0];
	drawSplitImage(image);	
};

function clear(){

}

function drawSplitImage(image){
	var node = document.getElementById('result');
	while(node.children[0]){
		node.removeChild(node.children[0]);
	}

	for (var y = 0; y < 450; y += 150){
		for (var x = 0; x < 450; x += 150){
			ctx.drawImage(image, y, x, 150, 150, 0, 0, 150, 150);
			ctx.fillText(x, 50, 50);
			var imageCrop = new Image(150, 150);
			imageCrop.src = c.toDataURL();
			node.appendChild(imageCrop);
		}
	}
}

function split(e){
	var image = e.path[0];
	drawSplitImage(image);
}