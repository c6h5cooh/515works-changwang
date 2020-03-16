window.currentPageIndex = 2;
window.currentPageName="about";
window.currentPageNumber=2;

//297px:420px;
//window.innerWidth/4 h
//dw:dh=297:420
document.getElementsByTagName("pen-cow")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("pen-cow")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
document.getElementsByTagName("pen-cow")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("pen-cow")[0].raw_height_int=(window.innerWidth-93)/4*420/297;
document.getElementsByTagName("pen-cow")[0].style.bottom=document.getElementsByTagName("pen-cow")[0].getElementsByTagName("bottom")[0].offsetHeight+"px";

document.getElementsByTagName("pen-gril")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("pen-gril")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
document.getElementsByTagName("pen-gril")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("pen-gril")[0].raw_height_int=(window.innerWidth-93)/4*420/297;
document.getElementsByTagName("pen-gril")[0].style.bottom=document.getElementsByTagName("pen-gril")[0].getElementsByTagName("bottom")[0].offsetHeight+"px";

document.getElementsByTagName("pen-cup")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("pen-cup")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
document.getElementsByTagName("pen-cup")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("pen-cup")[0].raw_height_int=(window.innerWidth-93)/4*420/297;
document.getElementsByTagName("pen-cup")[0].style.bottom=document.getElementsByTagName("pen-cup")[0].getElementsByTagName("bottom")[0].offsetHeight+"px";

document.getElementsByTagName("pen-us")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("pen-us")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
document.getElementsByTagName("pen-us")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("pen-us")[0].raw_height_int=(window.innerWidth-93)/4*420/297;
document.getElementsByTagName("pen-us")[0].style.bottom=document.getElementsByTagName("pen-us")[0].getElementsByTagName("bottom")[0].offsetHeight+"px";

for(let i=0;i<4;i++)
{
	document.getElementsByTagName("btn")[i].onclick=function()
	{
		window.open("#");
	}
}

function set_all_left()
{
	var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	document.getElementsByTagName("pen-cow")[0].style.left="93px"
	document.getElementsByTagName("pen-gril")[0].style.left=93+w1+"px";
	document.getElementsByTagName("pen-cup")[0].style.left=93+w1+w2+"px";
	document.getElementsByTagName("pen-us")[0].style.left=93+w1+w2+w3+"px";
}
set_all_left();
/*************************Interval重写******************************************/
var pen_cow_timer=null;
var pen_gril_timer=null;
var pen_cup_timer=null;
var pen_us_timer=null;
document.getElementsByTagName("pen-cow")[0].onmouseenter=function()
{
	clearInterval(pen_cow_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_cow_timer=setInterval
	(
		function()
		{
			if(w1>=document.getElementsByTagName("pen-cow")[0].raw_width_int+100)
			{
				clearInterval(pen_cow_timer);
				return;
			}
			w1+=1;
			h1+=420/297;
			w2-=1/3;
			h2-=420/297/3;
			w3-=1/3;
			h3-=420/297/3;
			w4-=1/3;
			h4-=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	)
}
document.getElementsByTagName("pen-cow")[0].onmouseleave=function()
{
	clearInterval(pen_cow_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_cow_timer=setInterval
	(
		function()
		{
			if(w1<=document.getElementsByTagName("pen-cow")[0].raw_width_int)
			{
				clearInterval(pen_cow_timer);
				return;
			}
			w1-=1;
			h1-=420/297;
			w2+=1/3;
			h2+=420/297/3;
			w3+=1/3;
			h3+=420/297/3;
			w4+=1/3;
			h4+=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	);
}
document.getElementsByTagName("pen-gril")[0].onmouseenter=function()
{
	clearInterval(pen_gril_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_gril_timer=setInterval
	(
		function()
		{
			if(w2>=document.getElementsByTagName("pen-gril")[0].raw_width_int+100)
			{
				clearInterval(pen_gril_timer);
				return;
			}
			w1-=1/3;
			h1-=420/297/3;
			w2+=1;
			h2+=420/297;
			w3-=1/3;
			h3-=420/297/3;
			w4-=1/3;
			h4-=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	)
}
document.getElementsByTagName("pen-gril")[0].onmouseleave=function()
{
	clearInterval(pen_gril_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_gril_timer=setInterval
	(
		function()
		{
			if(w2<=document.getElementsByTagName("pen-gril")[0].raw_width_int)
			{
				clearInterval(pen_gril_timer);
				return;
			}
			w1+=1/3;
			h1+=420/297/3;
			w2-=1;
			h2-=420/297;
			w3+=1/3;
			h3+=420/297/3;
			w4+=1/3;
			h4+=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	);
}
document.getElementsByTagName("pen-cup")[0].onmouseenter=function()
{
	clearInterval(pen_cup_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_cup_timer=setInterval
	(
		function()
		{
			if(w3>=document.getElementsByTagName("pen-cup")[0].raw_width_int+100)
			{
				clearInterval(pen_cup_timer);
				return;
			}
			w1-=1/3;
			h1-=420/297/3;
			w2-=1/3;
			h2-=420/297/3;
			w3+=1;
			h3+=420/297;
			w4-=1/3;
			h4-=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	)
}
document.getElementsByTagName("pen-cup")[0].onmouseleave=function()
{
	clearInterval(pen_cup_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_cup_timer=setInterval
	(
		function()
		{
			if(w3<=document.getElementsByTagName("pen-cup")[0].raw_width_int)
			{
				clearInterval(pen_cup_timer);
				return;
			}
			w1+=1/3;
			h1+=420/297/3;
			w2+=1/3;
			h2+=420/297/3;
			w3-=1;
			h3-=420/297;
			w4+=1/3;
			h4+=420/297/3;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	);
}
document.getElementsByTagName("pen-us")[0].onmouseenter=function()
{
	clearInterval(pen_us_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_us_timer=setInterval
	(
		function()
		{
			if(w4>=document.getElementsByTagName("pen-us")[0].raw_width_int+100)
			{
				clearInterval(pen_us_timer);
				return;
			}
			w1-=1/3;
			h1-=420/297/3;
			w2-=1/3;
			h2-=420/297/3;
			w3-=1/3;
			h3-=420/297/3;
			w4+=1;
			h4+=420/297;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	)
}
document.getElementsByTagName("pen-us")[0].onmouseleave=function()
{
	clearInterval(pen_us_timer);
	let w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
	let h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
	let w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
	let h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
	let w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
	let h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
	let w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
	let h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
	pen_us_timer=setInterval
	(
		function()
		{
			if(w4<=document.getElementsByTagName("pen-us")[0].raw_width_int)
			{
				clearInterval(pen_us_timer);
				return;
			}
			w1+=1/3;
			h1+=420/297/3;
			w2+=1/3;
			h2+=420/297/3;
			w3+=1/3;
			h3+=420/297/3;
			w4-=1;
			h4-=420/297;
			document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
			document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
			set_all_left();
		},
		4
	);
}

/*******************************************************************/
document.getElementsByTagName("pen-cow")[0]._onmouseenter=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight;
		setTimeout
		(
			function()
			{
				w1+=1;
				h1+=420/297;
				w2-=1/3;
				h2-=420/297/3;
				w3-=1/3;
				h3-=420/297/3;
				w4-=1/3;
				h4-=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
}
document.getElementsByTagName("pen-cow")[0]._onmouseleave=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1-=1;
				h1-=420/297;
				w2+=1/3;
				h2+=420/297/3;
				w3+=1/3;
				h3+=420/297/3;
				w4+=1/3;
				h4+=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
	setTimeout
	(
		function()
		{
			document.getElementsByTagName("pen-cow")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-us")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			set_all_left();
		},
		200
	);
}
/******************************************************************/
document.getElementsByTagName("pen-gril")[0]._onmouseenter=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1-=1/3;
				h1-=420/297/3;
				w2+=1;
				h2+=420/297;
				w3-=1/3;
				h3-=420/297/3;
				w4-=1/3;
				h4-=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
}
document.getElementsByTagName("pen-gril")[0]._onmouseleave=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1+=1/3;
				h1+=420/297/3;
				w2-=1;
				h2-=420/297;
				w3+=1/3;
				h3+=420/297/3;
				w4+=1/3;
				h4+=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
	setTimeout
	(
		function()
		{
			document.getElementsByTagName("pen-cow")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-us")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			set_all_left();
		},
		200
	);
}
/*************************************************************/
document.getElementsByTagName("pen-cup")[0]._onmouseenter=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1-=1/3;
				h1-=420/297/3;
				w2-=1/3;
				h2-=420/297/3;
				w3+=1;
				h3+=420/297;
				w4-=1/3;
				h4-=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
}
document.getElementsByTagName("pen-cup")[0]._onmouseleave=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1+=1/3;
				h1+=420/297/3;
				w2+=1/3;
				h2+=420/297/3;
				w3-=1;
				h3-=420/297;
				w4+=1/3;
				h4+=420/297/3;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
	setTimeout
	(
		function()
		{
			document.getElementsByTagName("pen-cow")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-us")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			set_all_left();
		},
		200
	);
}
/******************************************************************/
document.getElementsByTagName("pen-us")[0]._onmouseenter=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1-=1/3;
				h1-=420/297/3;
				w2-=1/3;
				h2-=420/297/3;
				w3-=1/3;
				h3-=420/297/3;
				w4+=1;
				h4+=420/297;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
}
document.getElementsByTagName("pen-us")[0]._onmouseleave=function()
{
	for(var i=0;i<50;i++)
	{
		var w1=document.getElementsByTagName("pen-cow")[0].offsetWidth;
		var h1=document.getElementsByTagName("pen-cow")[0].offsetHeight
		var w2=document.getElementsByTagName("pen-gril")[0].offsetWidth;
		var h2=document.getElementsByTagName("pen-gril")[0].offsetHeight
		var w3=document.getElementsByTagName("pen-cup")[0].offsetWidth;
		var h3=document.getElementsByTagName("pen-cup")[0].offsetHeight
		var w4=document.getElementsByTagName("pen-us")[0].offsetWidth;
		var h4=document.getElementsByTagName("pen-us")[0].offsetHeight
		setTimeout
		(
			function()
			{
				w1+=1/3;
				h1+=420/297/3;
				w2+=1/3;
				h2+=420/297/3;
				w3+=1/3;
				h3+=420/297/3;
				w4-=1;
				h4-=420/297;
				document.getElementsByTagName("pen-cow")[0].style.width=w1+"px";
				document.getElementsByTagName("pen-cow")[0].style.height=h1+"px";
				document.getElementsByTagName("pen-gril")[0].style.width=w2+"px";
				document.getElementsByTagName("pen-gril")[0].style.height=h2+"px";
				document.getElementsByTagName("pen-cup")[0].style.width=w3+"px";
				document.getElementsByTagName("pen-cup")[0].style.height=h3+"px";
				document.getElementsByTagName("pen-us")[0].style.width=w4+"px";
				document.getElementsByTagName("pen-us")[0].style.height=h4+"px";
				set_all_left();
			},
			i*4
		);
	}
	setTimeout
	(
		function()
		{
			document.getElementsByTagName("pen-cow")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cow")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-gril")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-gril")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-cup")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-cup")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			document.getElementsByTagName("pen-us")[0].style.width=(window.innerWidth-93)/4+"px";
			document.getElementsByTagName("pen-us")[0].style.height=(window.innerWidth-93)/4*420/297+"px";
			set_all_left();
		},
		200
	);
}