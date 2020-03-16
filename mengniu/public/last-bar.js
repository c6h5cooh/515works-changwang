if(window.currentPageName!="index")
{
	document.getElementsByTagName("last-bar")[0].style.top=window.innerHeight+"px";
}

var qrcode_size=0;
var qrcode_timer=null;
document.getElementById("sina-btn").onmouseenter=function()
{
	document.getElementsByTagName("qrcode")[0].style.visibility="visible";
	clearInterval(qrcode_timer);
	if(qrcode_size<=100)
	{
		qrcode_timer=setInterval
		(
			function()
			{
				
				if(qrcode_size>100)
				{
					clearInterval(qrcode_timer);
				}
				else
				{
					qrcode_size+=1;
					document.getElementsByTagName("qrcode")[0].style.backgroundSize=`${qrcode_size}% ${qrcode_size}%`;
					console.log("in",qrcode_size);
				}
			},
			1
		);
	}
};
document.getElementById("sina-btn").onmouseleave=function()
{
	clearInterval(qrcode_timer);
	qrcode_timer=setInterval
	(
		function()
		{
			if(qrcode_size<=0)
			{
				clearInterval(qrcode_timer);
			}
			if(qrcode_size<=70)
			{
				document.getElementsByTagName("qrcode")[0].style.visibility="hidden";
			}
			else
			{
				qrcode_size-=1;
				document.getElementsByTagName("qrcode")[0].style.backgroundSize=`${qrcode_size}% ${qrcode_size}%`;
				console.log("leave",qrcode_size);
			}
		},
		1
	);
}