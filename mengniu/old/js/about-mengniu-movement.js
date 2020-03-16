function makeitbig(obj)
{
	var ocow=obj;
	var ocowtimer=null;
	var scale=1.0;
	clearInterval(ocowtimer);
	ocowtimer=setInterval
	(
		function()
		{
			var avilable=window.innerWidth;
			var per=avilable/40;
			console.log("per----"+per);
			var fscale=per*10/297;
			console.log("fscale---"+fscale);
			
			console.log("scale1---"+scale);
			if(scale>=fscale)
			{
				console.log("scale2---"+scale);
				clearInterval(ocowtimer);
			}
			else
			{
				console.log("scale3---"+scale);
				scale+=0.01;
				console.log("scale4---"+scale);
				obj.style.transform="scale("+scale+")";
				console.log("transform"+obj.style.transform);
			}
		},
		10
	);
}
function makeitsmall(obj)
{
	var ocow=obj;
	var ocowtimer=null;
	var scale=1.0;
	clearInterval(ocowtimer);
	ocowtimer=setInterval
	(
		function()
		{
			var avilable=window.innerWidth;
			var per=avilable/40;
			var scale=per*10/297;
			
			if(scale<=1)
			{
				clearInterval(ocowtimer);
			}
			else
			{
				scale-=0.01;
				obj.style.transform="scale("+scale+")";
			}
		},
		10
	);
}