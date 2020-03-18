window.currentPageIndex = 6;
window.currentPageName="zhaobiao";
window.currentPageNumber=6;


function set_arrow(direction,type)
{
	if(direction==="left")
	{
		if(type==="green")
		{
			document.getElementsByTagName("left-arrow")[0].style.backgroundPosition="0px 0px";
			console.log(1);
		}
		else
		{
			document.getElementsByTagName("left-arrow")[0].style.backgroundPosition="0px -39px";
			console.log(2);
		}
	}
	else
	{
		if(type==="green")
		{
			document.getElementsByTagName("right-arrow")[0].style.backgroundPosition="-23px 0px";
			console.log(3);
		}
		else
		{
			document.getElementsByTagName("right-arrow")[0].style.backgroundPosition="-23px -39px";
			console.log(4);
		}
	}
}

function set_one_point_by_index(index,number,color)
{
	//index共6个,[1-6]
	//number可任意设置 6 7 8 9 10 66
	//color 为green 或者none
	
	console.log(index,number,color);
	if(index==1)
	{
		console.log(document.getElementsByTagName("point")[0])
		console.log(document.getElementsByTagName("point")[0].innerText)
		console.log(number)
		document.getElementsByTagName("point")[0].innerText=number;
		document.getElementsByTagName("point")[0].style.backgroundColor=(color==="green"?"#26A13A":"");
		
		console.log(1);
	}
	if(index==2)
	{
		document.getElementsByTagName("point")[1].innerText=number;
		document.getElementsByTagName("point")[1].style.backgroundColor=(color==="green"?"#26A13A":"");
	}
	if(index==3)
	{
		document.getElementsByTagName("point")[2].innerText=number;
		document.getElementsByTagName("point")[2].style.backgroundColor=(color==="green"?"#26A13A":"");
	}
	if(index==4)
	{
		document.getElementsByTagName("point")[3].innerText=number;
		document.getElementsByTagName("point")[3].style.backgroundColor=(color==="green"?"#26A13A":"");
	}
	if(index==5)
	{
		document.getElementsByTagName("point")[4].innerText=number;
		document.getElementsByTagName("point")[4].style.backgroundColor=(color==="green"?"#26A13A":"");
	}
	if(index==6)
	{
		document.getElementsByTagName("point")[5].innerText=number;
		document.getElementsByTagName("point")[5].style.backgroundColor=(color==="green"?"#26A13A":"");
	}
}
var first_point_number=1;
function set_all_points_number()
{
	if(first_point_number==1)
	{
		set_one_point_by_index(1,first_point_number+0,'green');
		set_one_point_by_index(2,first_point_number+1,'');
		set_one_point_by_index(3,first_point_number+2,'');
		set_one_point_by_index(4,first_point_number+3,'');
		set_one_point_by_index(5,first_point_number+4,'');
		// set_one_point_by_index(6,first_point_number+5,'');
	}
	if(first_point_number==2)
	{
		set_one_point_by_index(1,first_point_number-1,'');
		set_one_point_by_index(2,first_point_number,'green');
		set_one_point_by_index(3,first_point_number+1,'');
		set_one_point_by_index(4,first_point_number+2,'');
		set_one_point_by_index(5,first_point_number+3,'');
		// set_one_point_by_index(6,first_point_number+4,'');
	}
	if(first_point_number==3)
	{
		set_one_point_by_index(1,first_point_number-2,'');
		set_one_point_by_index(2,first_point_number-1,'');
		set_one_point_by_index(3,first_point_number,'green');
		set_one_point_by_index(4,first_point_number+1,'');
		set_one_point_by_index(5,first_point_number+2,'');
		// set_one_point_by_index(6,first_point_number+3,'');
	}
	if(first_point_number==4)
	{
		set_one_point_by_index(1,first_point_number-3,'');
		set_one_point_by_index(2,first_point_number-2,'');
		set_one_point_by_index(3,first_point_number-1,'');
		set_one_point_by_index(4,first_point_number,'green');
		set_one_point_by_index(5,first_point_number+1,'');
		// set_one_point_by_index(6,first_point_number+2,'');
	}
	if(first_point_number==5)
	{
		set_one_point_by_index(1,first_point_number-4,'');
		set_one_point_by_index(2,first_point_number-3,'');
		set_one_point_by_index(3,first_point_number-2,'');
		set_one_point_by_index(4,first_point_number-1,'');
		set_one_point_by_index(5,first_point_number,'green');
		// set_one_point_by_index(6,first_point_number+1,'');
	}
	
	
	if(first_point_number>5)
	{
		set_one_point_by_index(1,first_point_number+0,'');
		set_one_point_by_index(2,first_point_number+1,'');
		set_one_point_by_index(3,first_point_number+2,'');
		set_one_point_by_index(4,first_point_number+3,'');
		set_one_point_by_index(5,first_point_number+4,'green');
		// set_one_point_by_index(6,first_point_number+5,'');
	}
}
set_all_points_number();


document.getElementsByTagName("left-arrow")[0].onclick=function()
{
	if(first_point_number==1)
	{
		set_arrow("left","gray");
		return;
	}
	first_point_number--;
	set_all_points_number();
	set_arrow("left","green");
}
document.getElementsByTagName("right-arrow")[0].onclick=function()
{
	first_point_number++;
	set_all_points_number();
	set_arrow("left","green");
}



var items=
[
	{
		txt:"蒙牛乳业 购买登高护梯 项目公开询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛集团天津工厂防雷检测项目询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业 LOTO锁具购买 项目公开询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"比价结果公示",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业 常温事业部销售管理中心新疆公司库尔勒分公司广告制作 项目 询比价...",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业低温哈尔滨分子公司物流资源采购项目 询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业低温泉州分子公司物流资源采购项目 询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业低温宁波分子公司物流资源采购项目 询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业（清远）有限公司窄口预制杯双氧水杀菌系统升级项目询比价公告",
		data:"2020-03-12"
	},
	{
		txt:"蒙牛乳业（清远）有限公司/蒙牛乳制品清远有限责任公司酒精采购项目询比价公告",
		data:"2020-03-12"
	},
];

var txt=`<h2>招标公告公示</h2>`;
for(var item of items)
{
	txt+=`<item>`;
	txt+=`<left>${item.txt}</left>`;
	txt+=`<right>${item.data}</right>`;
	txt+=`</item>`;
}

document.getElementsByTagName("container")[0].innerHTML=txt;