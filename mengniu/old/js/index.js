document.getElementById("bar1").style.width = window.innerWidth + "px";
document.getElementById("bar1").style.height = window.innerHeight + "px";
document.getElementById("bar2").style.width = window.innerWidth + "px";
document.getElementById("bar2").style.height = window.innerHeight + "px";
document.getElementById("bar3").style.width = window.innerWidth + "px";
document.getElementById("bar3").style.height = window.innerHeight + "px";
document.getElementById("bar4").style.width = window.innerWidth + "px";
document.getElementById("bar4").style.height = window.innerHeight + "px";
document.getElementById("bar5").style.width = window.innerWidth + "px";
document.getElementById("bar5").style.height = window.innerHeight + "px";
document.getElementById("bar6").style.width = window.innerWidth + "px";
document.getElementById("bar6").style.height = window.innerHeight + "px";

movement(document.getElementById("waterdrop-1-1"), 'left', 300);
movement(document.getElementById("waterdrop-1-2"), 'top', 100);
movement(document.getElementById("waterdrop-1-2"), 'left', 600);
movement(document.getElementById("waterdrop-1-3"), 'top', 100);
movement(document.getElementById("waterdrop-1-3"), 'right', 60);
var spare = window.innerWidth - 93 - 600;
document.getElementById("six-points").style.right = spare / 2 + "px";
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

var wppos = new Array();
wppos[1] = new Array();
wppos[1][1] = new Array();
wppos[1][2] = new Array();
wppos[1][3] = new Array();
wppos[2] = new Array();
wppos[2][1] = new Array();
wppos[2][2] = new Array();
wppos[2][3] = new Array();
wppos[3] = new Array();
wppos[3][1] = new Array();
wppos[3][2] = new Array();
wppos[3][3] = new Array();
wppos[4] = new Array();
wppos[4][1] = new Array();
wppos[4][2] = new Array();
wppos[4][3] = new Array();
wppos[5] = new Array();
wppos[5][1] = new Array();
wppos[5][2] = new Array();
wppos[5][3] = new Array();
wppos[6] = new Array();
wppos[6][1] = new Array();
wppos[6][2] = new Array();
wppos[6][3] = new Array();

wppos[1][1][1] = 100;
wppos[1][1][2] = 500; //第一张图 第一个水滴 两个坐标
wppos[1][2][1] = 900;
wppos[1][2][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[1][3][1] = 40;
wppos[1][3][2] = 300; //第一张图 第三个水滴 两个坐标
wppos[2][1][1] = 600;
wppos[2][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[2][2][1] = 100;
wppos[2][2][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[2][3][1] = 500;
wppos[2][3][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[3][1][1] = 400;
wppos[3][1][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[3][2][1] = 500;
wppos[3][2][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[3][3][1] = 200;
wppos[3][3][2] = 700; //第一张图 第二个水滴 两个坐标
wppos[4][1][1] = 300;
wppos[4][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[4][2][1] = 100;
wppos[4][2][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[4][3][1] = 700;
wppos[4][3][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[5][1][1] = 100;
wppos[5][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[5][2][1] = 200;
wppos[5][2][2] = 600; //第一张图 第二个水滴 两个坐标
wppos[5][2][1] = 100;
wppos[5][2][2] = 800; //第一张图 第二个水滴 两个坐标
wppos[6][1][1] = 600;
wppos[6][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[6][2][1] = 200;
wppos[6][2][2] = 600; //第一张图 第二个水滴 两个坐标
wppos[6][2][1] = 800;
wppos[6][2][2] = 300; //第一张图 第二个水滴 两个坐标

document.getElementById("con").style.height = window.innerHeight + "px";
var newheight = window.innerHeight;
var fir_content1 = document.getElementById("bar1");
var fir_content2 = document.getElementById("bar2");
var fir_content3 = document.getElementById("bar3");
var fir_content4 = document.getElementById("bar4");
var fir_content5 = document.getElementById("bar5");
var fir_content6 = document.getElementById("bar6");
window.onload = function()
{
	var fircontent = document.querySelector("#con");
	if (fircontent.addEventListener)
	{
		fircontent.addEventListener("DOMMouseScroll", fn);
	}
	fircontent.onmousewheel = fn;
	function fn(ev)
	{
		ev = ev || event;
		var dir = "";
		if (ev.wheelDelta)
		{
			dir = ev.wheelDelta > 0 ? "up" : "down";
		}
		if (ev.detail)
		{
			dir = ev.detail < 0 ? "up" : "down";
		}
		switch (dir)
		{
			case "up":
				{
					if (fir_content1.offsetTop < 0)
					{
						movement(fir_content1, 'top', fir_content1.offsetTop + newheight);
						movement(fir_content2, 'top', fir_content1.offsetTop + newheight);
						movement(fir_content3, 'top', fir_content1.offsetTop + newheight);
						movement(fir_content4, 'top', fir_content1.offsetTop + newheight);
						movement(fir_content5, 'top', fir_content1.offsetTop + newheight);
						movement(fir_content6, 'top', fir_content1.offsetTop + newheight);
						window.currentPageIndex -= 1;
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

						movement(document.getElementById("waterdrop-1-1"), 'left', wppos[window.currentPageIndex][1][1]);
						movement(document.getElementById("waterdrop-1-1"), 'top', wppos[window.currentPageIndex][1][2]);
						movement(document.getElementById("waterdrop-1-2"), 'top', wppos[window.currentPageIndex][2][2]);
						movement(document.getElementById("waterdrop-1-2"), 'left', wppos[window.currentPageIndex][2][1]);
						movement(document.getElementById("waterdrop-1-3"), 'top', wppos[window.currentPageIndex][3][2]);
						movement(document.getElementById("waterdrop-1-3"), 'right', wppos[window.currentPageIndex][3][1]);
					}
				}
				break;
			case "down":
				{
					if (fir_content1.offsetTop >= -4 * newheight)
					{
						movement(fir_content1, 'top', fir_content1.offsetTop - newheight);
						movement(fir_content2, 'top', fir_content1.offsetTop - newheight);
						movement(fir_content3, 'top', fir_content1.offsetTop - newheight);
						movement(fir_content4, 'top', fir_content1.offsetTop - newheight);
						movement(fir_content5, 'top', fir_content1.offsetTop - newheight);
						movement(fir_content6, 'top', fir_content1.offsetTop - newheight);
						window.currentPageIndex += 1;
						console.log(window.currentPageIndex);
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
						movement(document.getElementById("waterdrop-1-1"), 'left', wppos[window.currentPageIndex][1][1]);
						movement(document.getElementById("waterdrop-1-1"), 'top', wppos[window.currentPageIndex][1][2]);
						movement(document.getElementById("waterdrop-1-2"), 'top', wppos[window.currentPageIndex][2][2]);
						movement(document.getElementById("waterdrop-1-2"), 'left', wppos[window.currentPageIndex][2][1]);
						movement(document.getElementById("waterdrop-1-3"), 'top', wppos[window.currentPageIndex][3][2]);
						movement(document.getElementById("waterdrop-1-3"), 'right', wppos[window.currentPageIndex][3][1]);
					}
				}
				break;
		}
		if (ev.preventDefault)
		{
			ev.preventDefault();
		}
		return false;
	}
}