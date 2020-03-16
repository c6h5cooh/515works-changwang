movement(document.getElementById("waterdrop-1-1"), 'left', 300,function(){},null);
movement(document.getElementById("waterdrop-1-1"), 'top', 300,function(){},null);
movement(document.getElementById("waterdrop-1-2"), 'top', 100,function(){},null);
movement(document.getElementById("waterdrop-1-2"), 'left', 600,function(){},null);
movement(document.getElementById("waterdrop-1-3"), 'top', 100,function(){},null);
movement(document.getElementById("waterdrop-1-3"), 'right', 60,function(){},null);
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

window.wppos = new Array();
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
wppos[1][2][1] = 100;
wppos[1][2][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[1][3][1] = 40;
wppos[1][3][2] = 300; //第一张图 第三个水滴 两个坐标
wppos[2][1][1] = 600;
wppos[2][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[2][2][1] = 100;
wppos[2][2][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[2][3][1] = 500;
wppos[2][3][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[3][1][1] = 400;
wppos[3][1][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[3][2][1] = 200;
wppos[3][2][2] = 100; //第一张图 第二个水滴 两个坐标
wppos[3][3][1] = 200;
wppos[3][3][2] = 300; //第一张图 第二个水滴 两个坐标
wppos[4][1][1] = 300;
wppos[4][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[4][2][1] = 100;
wppos[4][2][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[4][3][1] = 100;
wppos[4][3][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[5][1][1] = 100;
wppos[5][1][2] = 500; //第一张图 第二个水滴 两个坐标
wppos[5][2][1] = 200;
wppos[5][2][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[5][3][1] = 100;
wppos[5][3][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[6][1][1] = 100;
wppos[6][1][2] = 200; //第一张图 第二个水滴 两个坐标
wppos[6][2][1] = 200;
wppos[6][2][2] = 300; //第一张图 第二个水滴 两个坐标
wppos[6][3][1] = 300;
wppos[6][3][2] = 300; //第一张图 第二个水滴 两个坐标