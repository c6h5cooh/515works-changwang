window.timers=[];
function clearEveryIntervals()
{
	for(var i=0;i<timers.length;i++)
	{
		clearInterval(timers[i]);
	}
}

function getStyle(obj, name) 
{
	if (obj.currentStyle) //支持currentStyle
	{
		return obj.currentStyle[name];
	} 
	else //不支持currentstyle
	{
		return getComputedStyle(obj, false)[name];
		//第二个参数是个垃圾
	}
}
function randomNum(minNum,maxNum)
{ 
    switch(arguments.length)
	{ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
function movement(obj, attr, target,finish,timerkeystring) 
{
	console.log("movement obj:",obj,"movement attr:",attr,"movement target:",target);
	
	if(finish){}else{finish=function (){};}
	
	if(window.timers[timerkeystring]==null||window.timers[timerkeystring]==undefined)
	{
		var tm=new Date();
		timerkeystring=`time`+tm.getFullYear()+``+tm.getMonth()+``+tm.getDay()+``+tm.getHours()+``+tm.getMinutes()+``+tm.getSeconds()+``+randomNum(1,999999)+attr+``+target;
		timerkeystring=timerkeystring.replace(new RegExp("#","g"),"");
	}
	window.timers[timerkeystring] = setInterval
	(
		function() 
		{
			var cur = 0;
			if (attr == 'opacity') //该透明度，单独处理
			{
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
				//我们习惯用100的
			} 
			else //统一用原来的,他们都是整数
			{
				cur = parseInt(getStyle(obj, attr));
			}
			if (cur == target) 
			{
				clearInterval(window.timers[timerkeystring]);
				finish();
			} 
			else if (Math.abs(target - cur) <= 6) 
			{
				clearInterval(window.timers[timerkeystring]);
				finish();
				if (attr == 'opacity') 
				{
					obj.style.filter = "alpha(opacity:" + target + ")"; //ie
					//别忘了speed
					obj.style.opacity = target / 100;
				} 
				else 
				{
					obj.style[attr] = target + "px";
				}
			} 
			else 
			{
				var speed = (target - cur) / 6;
				speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
				//error:写成attr='opacity'，我想调fontSize，透明度就调成opacity
				if ('opacity' == attr) 
				{
					obj.style.filter = "alpha(opacity:" + cur + speed + ")"; //ie
					//别忘了speed
					obj.style.opacity = (cur + speed) / 100;

					//document.getElementById("txt1").value = obj.style.opacity;
				} 
				else 
				{
					obj.style[attr] = (cur + speed) + "px";
				}

				//我他妈好网getStyle返回的是width，带单位，要parseInt()!!!
				//parseInt( getStyle(obj,'width'))很长，可用一个变量存起来

				//但凡可以用.点出来的都可以style['height'],so obj.style.width=((intCurWidth+speed))+"px";可以写成

				//so,给运动框架填一个attr参数
			}
		},
		30
	);
	console.log(timerkeystring);
}
function grayscale_movement(obj, attr, target,finish,timerkeystring) 
{	
	if(finish){}else{finish=function (){};}
	if(window.timers[timerkeystring]==null||window.timers[timerkeystring]==undefined)
	{
		var tm=new Date();
		timerkeystring=`time`+tm.getFullYear()+``+tm.getMonth()+``+tm.getDay()+``+tm.getHours()+``+tm.getMinutes()+``+tm.getSeconds()+``+randomNum(1,999999)+attr+``+target;
		timerkeystring=timerkeystring.replace(new RegExp("#","g"),"");
	}
	window.timers[timerkeystring] = setInterval
	(
		function() 
		{
			var cur = 0;
			if (attr == 'opacity') //该透明度，单独处理
			{
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
				//我们习惯用100的
			} 
			else //统一用原来的,他们都是整数
			{
				cur = parseInt(getStyle(obj, attr));
			}
			if (cur == target) 
			{
				clearInterval(window.timers[timerkeystring]);
				finish();
			} 
			else if (Math.abs(target - cur) <= 6) 
			{
				clearInterval(window.timers[timerkeystring]);
				finish();
				if (attr == 'opacity') 
				{
					obj.style.filter = "alpha(opacity:" + target + ")"; //ie
					//别忘了speed
					obj.style.opacity = target / 100;
				} 
				else 
				{
					obj.style[attr] = target + "px";
				}
			} 
			else 
			{
				var speed = (target - cur) / 6;
				speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
				//error:写成attr='opacity'，我想调fontSize，透明度就调成opacity
				if ('opacity' == attr) 
				{
					obj.style.filter = "alpha(opacity:" + cur + speed + ")"; //ie
					//别忘了speed
					obj.style.opacity = (cur + speed) / 100;

					//document.getElementById("txt1").value = obj.style.opacity;
				} 
				else 
				{
					obj.style[attr] = (cur + speed) + "px";
				}
			}
		},
		30
	);
	console.log(timerkeystring);
}
function changeColor(colorStart, colorEnd, timeInterval, obj) 
{
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