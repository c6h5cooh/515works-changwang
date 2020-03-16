function handle(delta) 
{     
	var s = delta + ": ";     
	if (delta <0)         
	s += "您在向下滚……";     
	else         
	s += "您在向上滚……";     
	
	if(delta>0)
	{
		pageGoUp();
	}
	else
	{
		pageGoDown();
	}
}   
function wheel(event)
{     
	var delta = 0;     
	if (!event) event = window.event;     
	if (event.wheelDelta) 
	{         
		delta = event.wheelDelta/120;          
		if (window.opera) delta = -delta;     
	} 
	else if (event.detail) 
	{         
		delta = -event.detail/3;     
	}     
	if (delta)         
		handle(delta); 
}   
if 
(window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false); 
window.onmousewheel = document.onmousewheel = wheel;



function pageGoUp()
{
	/*var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var psd=Math.round( scrollTop/window.innerHeight);
	window.currentPageIndex=psd+1;
	for (var i = 1; i <= 6; i++)
	{
		if (i == window.currentPageIndex)
		{
			document.getElementById("p" + i).style.backgroundPosition = "-0px 0px";
		}
		else
		{
			document.getElementById("p" + i).style.backgroundPosition = "-22px 0px";
		}
	}*/
}
function pageGoDown()
{
	/*var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var psd=Math.round( scrollTop/window.innerHeight);
	window.currentPageIndex=psd+1;
	for (var i = 1; i <= 6; i++)
	{
		if (i == window.currentPageIndex)
		{
			document.getElementById("p" + i).style.backgroundPosition = "-0px 0px";
		}
		else
		{
			document.getElementById("p" + i).style.backgroundPosition = "-22px 0px";
		}
	}*/
}