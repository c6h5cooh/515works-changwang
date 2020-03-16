if (window.addEventListener)
{
	window.addEventListener('DOMMouseScroll', wheel);
}
window.onmousewheel = wheel;
function wheel(ev)
{
	var e = ev || window.event;
	var limit = document.getElementById('bar1').offsetHeight;
	var delta = 0;
	if (e.wheelDelta)
	{
		delta = e.wheelDelta;
	}
	else if (e.detail)
	{
		delta = -e.detail;
	}
	if (delta < 0)
	{
		var down = setInterval(function()
		{
			scroll = document.documentElement.scrollTop || document.body.scrollTop;
			window.onmousewheel = null;
			if (window.addEventListener)
			{
				window.removeEventListener('DOMMouseScroll', wheel);
			}
			window.scrollBy(0, 1);
			if (scroll % limit < 1)
			{
				clearInterval(down);
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
				}
				window.currentPageIndex =Math.round(scroll/window.innerHeight+1);
				movement(document.getElementById("waterdrop-1-1"), 'left', wppos[window.currentPageIndex][1][1]);
				movement(document.getElementById("waterdrop-1-1"), 'top', wppos[window.currentPageIndex][1][2]);
				movement(document.getElementById("waterdrop-1-2"), 'top', wppos[window.currentPageIndex][2][2]);
				movement(document.getElementById("waterdrop-1-2"), 'left', wppos[window.currentPageIndex][2][1]);
				movement(document.getElementById("waterdrop-1-3"), 'top', wppos[window.currentPageIndex][3][2]);
				movement(document.getElementById("waterdrop-1-3"), 'right', wppos[window.currentPageIndex][3][1]);
				if (window.addEventListener)
				{
					window.addEventListener('DOMMouseScroll', wheel);
				}
				window.onmousewheel = wheel;
			}
		}, 1);
	}
	else
	{
		var up = setInterval(function()
		{
			scroll = document.documentElement.scrollTop || document.body.scrollTop;
			window.scrollBy(0, -1);
			window.onmousewheel = null;
			if (window.addEventListener)
			{
				window.removeEventListener('DOMMouseScroll', wheel);
			}
			if (scroll % limit < 1)
			{
				clearInterval(up);
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
				}
				//window.currentPageIndex -= 1;
				window.currentPageIndex =Math.round(scroll/window.innerHeight+1);
				movement(document.getElementById("waterdrop-1-1"), 'left', wppos[window.currentPageIndex][1][1]);
				movement(document.getElementById("waterdrop-1-1"), 'top', wppos[window.currentPageIndex][1][2]);
				movement(document.getElementById("waterdrop-1-2"), 'top', wppos[window.currentPageIndex][2][2]);
				movement(document.getElementById("waterdrop-1-2"), 'left', wppos[window.currentPageIndex][2][1]);
				movement(document.getElementById("waterdrop-1-3"), 'top', wppos[window.currentPageIndex][3][2]);
				movement(document.getElementById("waterdrop-1-3"), 'right', wppos[window.currentPageIndex][3][1]);
				if (window.addEventListener)
				{
					window.addEventListener('DOMMouseScroll', wheel);
				}
				window.onmousewheel = wheel;
			}
		}, 1);
	}
}
