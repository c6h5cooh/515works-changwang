function ichange(obj,img2) 
{

	/*var opDiv = obj;
	opDiv.onmouseover = function() 
	{
		//startMove(100,obj,img2);
	}
	opDiv.onmouseout = function() 
	{
		startMove(30,obj,img2);
	}*/
}


function startMove(opTarget,obj,img2) 
{	
	var timer = null;
	var alpha = 30;
	var speed = 0;
	clearInterval(timer);
	var opDiv = obj;
	timer = setInterval
	(
	function() 
		{
		if (alpha < opTarget) 
		{
			speed = 5;
		} 
		else if (alpha > opTarget) 
		{
			speed = -5;
		}
		if (alpha == opTarget) 
		{
			obj.src=img2;
			clearInterval(timer);
		} 
		else 
		{
			alpha += speed;
			opDiv.style.opacity = alpha / 100;
			opDiv.style.filter = 'alpha(opacity=' + alpha + ')';
		}
	},
	30
	);
}


function switchImageSrc(obj, img2) 
{
	ichange(obj,img2);
	//obj.src = img2;
	
}

function changeElementColor(colorStart, colorEnd, timeInterval, obj) {
	var timer = null;
	clearInterval(timer);
	var pos = 0;
	timer = setInterval(
		function() {
			var crls = fColorGradualChange(colorStart, colorEnd, 100);
			if (pos == 99) {
				clearInterval(timer);
			} else {


				obj.style.backgroundColor = crls[pos++];

			}
		},
		timeInterval / 100
	);
}



function fColorGradualChange(startColor, endColor, num) {
	var rgb = /^rgb|RGB\((([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])),){2}([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\)$/; //rgb
	var hex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i; //16进制
	//颜色预处理
	var startRGB, endRGB;
	if (hex.test(startColor)) {
		startRGB = fAnalysisRGB(startColor);
	} else if (rgb.test(startColor)) {
		startRGB = startColor.substring(3, 15).split(',');
	}
	if (hex.test(endColor)) {
		endRGB = fAnalysisRGB(endColor);
	} else if (rgb.test(startColor)) {
		endRGB = endColor.substring(3, 15).split(',');
	}
	var startR = startRGB[0],
		startG = startRGB[1],
		startB = startRGB[2];
	var endR = endRGB[0],
		endG = endRGB[1],
		endB = endRGB[2];

	var sR = (endR - startR) / num;
	var sG = (endG - startG) / num;
	var sB = (endB - startB) / num;

	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(fColorToHex(parseInt((sR * i + startR)), parseInt((sG * i + startG)), parseInt((sB * i + startB))));
	}
	return colors;
}


/**
 *   解析rgb格式
 */
function fAnalysisRGB(color) {
	var color = color.toLowerCase().substring(1, color.length);
	var colors = [];
	colors.push(parseInt(color.substring(0, 2), 16))
	colors.push(parseInt(color.substring(2, 4), 16))
	colors.push(parseInt(color.substring(4, 6), 16))
	return colors;
}

/**
 *   rgb转hex
 */
function fColorToHex(r, g, b) {
	var hex = "#" + fAddZero(r.toString(16)) + fAddZero(g.toString(16)) + fAddZero(b.toString(16));
	return hex;
}

/**
 *   加0补位
 */
function fAddZero(v) {
	var newv = "00" + v;
	return newv.substring(newv.length - 2, newv.length);
}
