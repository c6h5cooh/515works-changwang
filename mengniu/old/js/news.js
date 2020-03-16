//document.body.parentNode.style.overflowY = "hidden";
var hotnews=document.getElementById("hot-news");
var hotnewsimg=document.getElementById("hot-news-img");
var viewworks=document.getElementById("view-works");
var viewworksimg=document.getElementById("view-works-img");
hotnews.style.height=window.innerHeight/2+"px";
hotnews.style.width=window.innerWidth+"px";
viewworks.style.height=window.innerHeight/2+"px";
viewworks.style.width=window.innerWidth+"px";
document.getElementById("hot-news-img").width=window.innerWidth;
document.getElementById("hot-news-img").height=window.innerHeight/2;
document.getElementById("view-works-img").width=window.innerWidth;
document.getElementById("view-works-img").height=window.innerHeight/2;
//运动框架还是有一个毛病:不能同时处理一个物体的多个属性值
//解决方式:一个物体开多个定时器
document.getElementById("hot-news-img").timers=new Array();
document.getElementById("hot-news-img").timers['height']=null;
document.getElementById("hot-news-img").timers['width']=null;



var ftr=document.getElementById("footer");
var ftrimg=document.getElementById("footer-img");

ftr.style.width=window.innerWidth+"px";
ftrimg.width=window.innerWidth;

var topemid=window.innerWidth*0.3;
document.getElementById("hot-news-wp").style.left=topemid;
var btmemid=window.innerWidth*0.7;
document.getElementById("hot-news-wp").timers=new Array();
document.getElementById("hot-news-wp").timers['height']=null;
document.getElementById("hot-news-wp").timers['width']=null;
document.getElementById("hot-news-wp").timers['left']=null;
hotnews.onmouseenter=function()
{
	/*clearInterval(document.getElementById("hot-news-img").timers['height']);
	clearInterval(document.getElementById("hot-news-img").timers['width']);*/
	clearInterval(document.getElementById("hot-news-img").timers['height']);
	clearInterval(document.getElementById("hot-news-img").timers['width']);
	move(document.getElementById("hot-news-img"),'height',document.getElementById("hot-news-img").height*1.02);
	move(document.getElementById("hot-news-img"),'width',document.getElementById("hot-news-img").width*1.02);
	
	clearInterval(document.getElementById("hot-news-wp").timers['height']);
	clearInterval(document.getElementById("hot-news-wp").timers['width']);
	move(document.getElementById("hot-news-wp"),'height',128*2);
	
	move(document.getElementById("hot-news-wp"),'left',topemid-parseInt(getStyle( document.getElementById("hot-news-wp"),'width')));
	move(document.getElementById("hot-news-wp"),'width',90*2);
	//w90 h128
};
hotnews.onmouseleave=function()
{
	/*clearInterval(document.getElementById("hot-news-img").timers['height']);
	clearInterval(document.getElementById("hot-news-img").timers['width']);*/
	clearInterval(document.getElementById("hot-news-img").timers['height']);
	clearInterval(document.getElementById("hot-news-img").timers['width']);
	move(document.getElementById("hot-news-img"),'width',window.innerWidth);
	move(document.getElementById("hot-news-img"),'height',window.innerHeight/2);
	
	clearInterval(document.getElementById("hot-news-wp").timers['height']);
	clearInterval(document.getElementById("hot-news-wp").timers['width']);
	move(document.getElementById("hot-news-wp"),'height',128*5);
	move(document.getElementById("hot-news-wp"),'width',90*5);
	
};
document.getElementById("view-works-img").timers=new Array();
document.getElementById("view-works-img").timers['height']=null;
document.getElementById("view-works-img").timers['width']=null;
viewworks.onmouseenter=function()
{
	/*clearInterval(document.getElementById("view-works-img").timers['height']);
	clearInterval(document.getElementById("view-works-img").timers['width']);*/
	clearInterval(document.getElementById("view-works-img").timers['height']);
	clearInterval(document.getElementById("view-works-img").timers['width']);
	move(document.getElementById("view-works-img"),'width',document.getElementById("view-works-img").width*1.02);
	move(document.getElementById("view-works-img"),'height',document.getElementById("view-works-img").height*1.02);
};
viewworks.onmouseleave=function()
{
	/*clearInterval(document.getElementById("view-works-img").timers['height']);
	clearInterval(document.getElementById("view-works-img").timers['width']);*/
	clearInterval(document.getElementById("view-works-img").timers['height']);
	clearInterval(document.getElementById("view-works-img").timers['width']);
	move(document.getElementById("view-works-img"),'width',window.innerWidth);
	move(document.getElementById("view-works-img"),'height',window.innerHeight/2);
};



