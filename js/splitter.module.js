var splitter = (function () {
	
	var _image = null;
	var _splitted = [];
	var canvas = document.createElement('canvas');
	
	function split(countX, countY){
		canvas.width = width;
		canvas.height = height;

		console.log(canvas);
		return _splitted;
	};

	return {
		do : function(image, countX, countY){
			return split(countX, countY);
		}
 	}
})();