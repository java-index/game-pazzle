var actionField = (function () {
	
	var _countX = 0;
	var _countY = 0;
	var image = null;
	var src = document.getElementById('gameField');

	return {
		setCountX : function(countX){
			_countX = countX;
		},
		setCountY : function(countY){
			_countY = countY;
		},
		getCountX : function(){
			return _countX;
		},
		getCountY : function(){
			return _countY;
		},
		drawGameField : function(){
			src.appendChild(document.createElement('div."123"'));
		}
	}
})();