function getStyle(obj,name)
			{
				if(obj.currentStyle)//支持currentStyle
				{
					return obj.currentStyle[name];
				}
				else//不支持currentstyle
				{
					return getComputedStyle(obj,false)[name];
					//第二个参数是个垃圾
				}
			}
var cnt=0;
function Expend(obj)
{
	/*var enpendtimer=null;
clearInterval(enpendtimer);
	var odiv=obj;
	var enpendtimer=null;
	
	enpendtimer=setInterval
	(
		function ()
		{
			if(obj.offsetWidth>=100)
			{
				clearInterval(enpendtimer);
			}
			else
			{
				odiv.style.width=odiv.offsetWidth+10+"px";
			}
		},
		30
	);*/
}

function Exit(obj)
{
	/*var exittimer=null;
	console.log("1-"+obj.offsetWidth);
	console.log("2-"+obj.style.width);
	var odiv=obj;
	
	clearInterval(exittimer);
	exittimer=setInterval
	(
		function ()
		{
			console.log("3-"+obj.style.width);
			if(obj.offsetWidth<=0)
			{
				clearInterval(exittimer);
			}
			else
			{
				console.log("4-"+obj.style.width);
				console.log("5-"+obj.offsetWidth);
				odiv.style.width=odiv.offsetWidth-10+"px";
			}
		},
		10
	);*/
}
var exitalltimer=null;
function ExitAll()
{
	
	/*clearInterval(exitalltimer);
	exitalltimer=setInterval
	(
		function()
		{
			var btn1=document.getElementById("about-mengniu-expend-bar");
			if(parseInt( getStyle(btn1,'width'))<=10)
			{
				clearInterval(exitalltimer);
			}
			else
			{
				console.log(cnt++);
				var speed=-2;
				console.log("1 "+parseInt( getStyle(btn1,'width')));
				console.log("2 "+(parseInt( getStyle(btn1,'width'))+speed)+'px');
				var p=parseInt( getStyle(btn1,'width'))+speed;
				console.log("3 "+p+'px');
				btn1.style.width=p+"px";
				console.log("4 "+p+"px");
				console.log("5 "+getStyle(btn1,'width'));
			}
		},
		1
	);*/
}
function aboutMengniuExpend()
{
	
}
function brandProductExpend()
{
	
}
function developmentExpend()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}
function newsExpend()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}
function aboutMengniuExit()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}
function brandProductExit()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}
function developmentExit()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}
function newsExit()
{
	var pages=["index","about-mengniu","brand-product","development","news","zhaobiao"];
	var colors=["#2a9b38","#f1a952","#db7877","#8dc2d6","#309438","#dda24f"];
}