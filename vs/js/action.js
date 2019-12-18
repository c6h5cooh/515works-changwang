/*document.getElementById("vue1").style.display="block";
document.getElementById("vue2").style.display="none";
document.getElementById("vue3").style.display="none";
document.getElementById("vue4").style.display="none";
document.getElementById("vue5").style.display="none";
document.getElementById("vue6").style.display="none";
document.getElementById("img1").style.filter="grayscale(0%)";
document.getElementById("img2").style.filter="grayscale(100%)";
document.getElementById("img3").style.filter="grayscale(100%)";
document.getElementById("img4").style.filter="grayscale(100%)";
document.getElementById("img5").style.filter="grayscale(100%)";
document.getElementById("img6").style.filter="grayscale(100%)";
for(var i=1;i<=17;i++)//inializae
{
	document.getElementById("des"+i).style.display="none";
}
function btns_switch(num)
{
	console.log(num);
	for(var i=1;i<=6;i++)
	{
		if(num==i)
		{
			document.getElementById("vue"+i).style.display="block";
			document.getElementById("img"+i).style.filter= "grayscale(0%)";
		}
		else
		{
			document.getElementById("vue"+i).style.display="none";
			document.getElementById("img"+i).style.filter="grayscale(100%)";
		}
		
	}
}
function description_switch(num)
{
	if(document.getElementById("des"+num).style.display=="block")
	{
		document.getElementById("des"+num).style.display="none";
	}
	else
	{
		for(var i=1;i<=17;i++)//inializae
		{
			document.getElementById("des"+i).style.display="none";
		}
		document.getElementById("des"+num).style.display="block";
	}
	
}

function set_extensions_num()
{
	var wid=document.body.clientWidth;
	wid=wid-200;//左右两边留白 100 x 2
	wid=wid-100;//两个按钮 50 x 2
	var num=parseInt(wid/180);
	var ele=document.getElementById("container");
	for(var k=1;k<=num;k++)
	{
		//ele.innerHTML+='<div class="item"></div>';
	}
}
set_extensions_num();
var arr={};
for(var p=0;p<=1900;p=p+5)
{
	arr[p]=1;
	arr[p+1]=2;
	arr[p+2]=3;
	arr[p+3]=4;
	arr[p=4]=5;
}
 function trun(val)
 {
	 
 }*/