window.currentPageIndex = 5;
window.currentPageName="news";
window.currentPageNumber=5;


function set_bgs(obj,size)
{
	obj.style.backgroundSize=`${size}% ${size}%`;
}
var top_timer=null;
var top_size=100;
document.getElementsByTagName("top")[0].onmouseenter=function()
{
	
	clearInterval(top_timer);
	top_timer=setInterval
	(
		function()
		{
			if(top_size>=105)
			{
				clearInterval(top_timer);
			}
			set_bgs(document.getElementsByTagName("top")[0],top_size);
			top_size+=0.07;
		},
		1
	)	
}
document.getElementsByTagName("top")[0].onmouseleave=function()
{
	
	clearInterval(top_timer);
	top_timer=setInterval
	(
		function()
		{
			if(top_size<=100)
			{
				clearInterval(top_timer);
			}
			set_bgs(document.getElementsByTagName("top")[0],top_size);
			top_size-=0.07;
		},
		1
	)	
}
/************************************************/
var bottom_timer=null;
var bottom_size=100;
document.getElementsByTagName("bottom")[0].onmouseenter=function()
{
	
	clearInterval(bottom_timer);
	bottom_timer=setInterval
	(
		function()
		{
			if(bottom_size>=105)
			{
				clearInterval(bottom_timer);
			}
			set_bgs(document.getElementsByTagName("bottom")[0],bottom_size);
			bottom_size+=0.07;
		},
		1
	)	
}
document.getElementsByTagName("bottom")[0].onmouseleave=function()
{
	
	clearInterval(bottom_timer);
	bottom_timer=setInterval
	(
		function()
		{
			if(bottom_size<=101)
			{
				clearInterval(bottom_timer);
			}
			set_bgs(document.getElementsByTagName("bottom")[0],bottom_size);
			bottom_size-=0.07;
		},
		1
	)	
}