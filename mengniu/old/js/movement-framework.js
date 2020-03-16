//需要的时候引js文件
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

function move(obj, attr, target) 
{
	
	clearInterval(obj.timers[attr]);
	obj.timers[attr] = setInterval
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
				clearInterval(obj.timers[attr]);
			} 
			else if (Math.abs(target - cur) <= 6) 
			{
				clearInterval(obj.timers[attr]);

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

					document.getElementById("txt1").value = obj.style.opacity;
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
}

function mmove(obj, json, target) 
{
	
	clearInterval(obj.timer);
	obj.timer = setInterval
	(
		function() 
		{
			var cur = 0;
			for(var attr in json)
			{
				if(attr=='opacity')
				{
					cur=Math.round( (parseFloat(getStyle(obj,'opacity'))*100));
				}
				else //统一用原来的,他们都是整数
				{
					cur = parseInt(getStyle(obj, attr));
				}
				
				
				if (Math.abs(target - cur) <= 6)
				{
					clearInterval(obj.timer);
				
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
				
			}

			
		},
		30
	);
}
