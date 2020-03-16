var opacityMovetimer = null;
function opacity100Move(obj, opacityBefore,opacityAfter) 
{
	clearInterval(opacityMovetimer);
	opacityMovetimer = setInterval
	(
		function() 
		{
			var speed = 0;
			if (opacityBefore < opacityAfter) //透明度应给越来越大
			{
				speed = 1;
			}
			else 
			{
				speed = -1;
			}
			if (opacityBefore == opacityAfter) 
			{
				clearInterval(opacityMovetimer);
			} 
			else 
			{
				opacityBefore += speed;
				obj.style.filter = "alpha(opacity:" + opacityBefore + ")";
				obj.style.opacity = opacityBefore / 100; //chrome hh
			}
		},
		3
	);
}