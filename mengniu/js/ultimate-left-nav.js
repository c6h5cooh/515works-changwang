var pages = ["index", "about-mengniu", "brand-product", "development", "news", "zhaobiao"];
var colors = ["#2a9b38", "#f1a952", "#db7877", "#8dc2d6", "#309438", "#dda24f"];

//每个bnt设置小名
for (var i = 0; i < pages.length; i++)
{
	document.getElementById("left-nav-" + pages[i]).smallName = pages[i];
}





//不同页面设置不同 logo
document.getElementById("left-nav-logo").src = "img/left-nav-logo-" + window.currentPage + ".png";





//不同 sep 设置不同主题色
for (var i = 0; i < pages.length; i++)
{
	document.getElementById("left-nav-" + pages[i] + "-sep").style.backgroundColor = colors[i];
}
//不同 sep 设置不同初始宽度
for (var i = 0; i < pages.length; i++)
{
	if (pages[i] == currentPage)
	{
		document.getElementById("left-nav-" + pages[i] + "-sep").style.width = "100%";
	}
	else
	{
		document.getElementById("left-nav-" + pages[i] + "-sep").style.width = "80%";
	}
}
//不同 sep 设置不同初始透明度
for (var i = 0; i < pages.length; i++)
{
	if (pages[i] == currentPage)
	{
		document.getElementById("left-nav-" + pages[i] + "-sep").style.opacity = 1;
	}
	else
	{
		document.getElementById("left-nav-" + pages[i] + "-sep").style.opacity = 0.8;
	}
}

//不同 btn 设置不同初始图片
for (var i = 0; i < pages.length; i++)
{
	var btni = document.getElementById("left-nav-" + pages[i]);
	if (pages[i] == currentPage)
	{
		btni.src = "img/left-nav-" + pages[i] + "-active.png";
	}
	else
	{
		btni.src = "img/left-nav-" + pages[i] + "-untauch.png";
	}
}
//btn 有透明度+sep宽+图片源 更改
for (var i = 0; i < pages.length; i++)
{
	var btni = document.getElementById("left-nav-" + pages[i]);

	btni.onmouseenter = function()
	{
		movement(this,'opacity',100);
		document.getElementById("left-nav-logo").src = "img/left-nav-logo-" + this.smallName + ".png";
		startMove(0, this, "img/left-nav-" + this.smallName + "-active.png");

		//switchImageSrc(this, "img/left-nav-" + this.smallName + "-active.png");
		//opacity100Move(document.getElementById("left-nav-logo"), 100, 0);
		//opacity100Move(document.getElementById("left-nav-logo"), 0, 100);
	};
	btni.onmouseleave = function()
	{
		movement(this,'opacity',70);
		startMove(100, this, "img/left-nav-" + this.smallName + "-untauch.png");
		//this.src="img/left-nav-"+this.smallName+"-untauch.png";
		switchImageSrc(this, "img/left-nav-" + this.smallName + "-untauch.png");
		document.getElementById("left-nav-" + this.smallName + "-sep").style.width = "80%";
		if (this.smallName == "about-mengniu")
		{
			//Exit(document.getElementById("about-mengniu-expend-bar"));
		}
		if (this.smallName == "brand-product")
		{
			//Exit(document.getElementById("brand-product-expend-bar"));
		}
		if (this.smallName == "development")
		{
			//Exit(document.getElementById("development-expend-bar"));
		}
		if (this.smallName == "news")
		{
			//Exit(document.getElementById("development-expend-bar"));
		}
	};

}

/*for (var i = 0; i < pages.length; i++)
{

	var btni = document.getElementById("left-nav-" + pages[i]);
	
	if (pages[i] == currentPage)
	{
		
	}
	else
	{*/


//btni.onmouseenter = function()
//{
//this.src="img/left-nav-"+this.smallName+"-active.png";

//startMove(0, this, "img/left-nav-" + this.smallName + "-active.png");

//switchImageSrc(this, "img/left-nav-" + this.smallName + "-active.png");
//opacity100Move(document.getElementById("left-nav-logo"), 100, 0);
//document.getElementById("left-nav-logo").src = "img/left-nav-logo-" + this.smallName + ".png";
//opacity100Move(document.getElementById("left-nav-logo"), 0, 100);

/*if (this.smallName == "about-mengniu") 
{
	Expend(document.getElementById("about-mengniu-expend-bar"));
	Exit(document.getElementById("brand-product-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
}
if (this.smallName == "brand-product") 
{
	Expend(document.getElementById("brand-product-expend-bar"));
	Exit(document.getElementById("about-mengniu-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
}
if (this.smallName == "development") 
{
	Expend(document.getElementById("development-expend-bar"));
	Exit(document.getElementById("about-mengniu-expend-bar"));
	Exit(document.getElementById("brand-product-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
}
if (this.smallName == "news") 
{
	Expend(document.getElementById("news-expend-bar"));
	Exit(document.getElementById("about-mengniu-expend-bar"));
	Exit(document.getElementById("brand-product-expend-bar"));
	Exit(document.getElementById("development-expend-bar"));
}*/
//};
//btni.onmouseleave = function()
//{
//startMove(100, this, "img/left-nav-" + this.smallName + "-untauch.png");
//this.src="img/left-nav-"+this.smallName+"-untauch.png";
//switchImageSrc(this, "img/left-nav-" + this.smallName + "-untauch.png");
//document.getElementById("left-nav-" + this.smallName + "-sep").style.width = "80%";
//if (this.smallName == "about-mengniu")
//{
//Exit(document.getElementById("about-mengniu-expend-bar"));
//}
//if (this.smallName == "brand-product")
//	{
//Exit(document.getElementById("brand-product-expend-bar"));
//}
//if (this.smallName == "development")
//{
//Exit(document.getElementById("development-expend-bar"));
//	}
//if (this.smallName == "news")
//{
//Exit(document.getElementById("development-expend-bar"));
//}
//};
//}
//}
document.getElementById("left-nav").onmouseleave = function()
{
	document.getElementById("left-nav-logo").src = "img/left-nav-logo-" + currentPage + ".png";
};



document.getElementById("left-nav").onmouseleave = function()
{
	/*Exit(document.getElementById("about-mengniu-expend-bar"));
					
	Exit(document.getElementById("brand-product-expend-bar"));
					
	Exit(document.getElementById("development-expend-bar"));
					
	Exit(document.getElementById("development-expend-bar"));*/
};
