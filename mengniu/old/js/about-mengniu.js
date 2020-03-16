document.getElementById("about-mengniu-bg").style.height = window.innerHeight + "px";
document.getElementById("about-mengniu-bg").style.width = window.innerWidth + "px";
var avilable = window.innerWidth - 93;
var per = avilable / 4;
var blocks = ["cow", "gril", "cup", "gress"];
for (var i = 0; i < 4; i++)
{
	document.getElementById(blocks[i]).style.left = 93 + avilable / 4 * i + "px";

	document.getElementById(blocks[i]).onmouseenter = function()
	{
		document.getElementById("about-mengniu-bg").style.backgroundImage = "url(img/about-mengniu/bggray.jpg)";
	};
	document.getElementById(blocks[i]).onmouseleave = function()
	{
		document.getElementById("about-mengniu-bg").style.backgroundImage = "url(img/about-mengniu/bg.jpg)";
	};
}
