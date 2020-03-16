window.currentPageIndex = 4;
window.currentPageName="development";
window.currentPageNumber=4;

/*	第一列：93+(w-93)/4
	第二列：(w-93)/4
	第三列：(w-93)/4
	第四列：(w-93)/4
*/


document.getElementsByTagName("column-one")[0].style.width=93+(window.innerWidth-93)/4+"px";
document.getElementsByTagName("column-two")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("column-three")[0].style.width=(window.innerWidth-93)/4+"px";
document.getElementsByTagName("column-four")[0].style.width=(window.innerWidth-93)/4+"px";

document.getElementsByTagName("column-one")[0].raw_width_int=93+(window.innerWidth-93)/4;
document.getElementsByTagName("column-two")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("column-three")[0].raw_width_int=(window.innerWidth-93)/4;
document.getElementsByTagName("column-four")[0].raw_width_int=(window.innerWidth-93)/4;
function set_four_columns_left()
{
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	document.getElementsByTagName("column-one")[0].style.left="0px";
	document.getElementsByTagName("column-two")[0].style.left=w1+"px";
	document.getElementsByTagName("column-three")[0].style.left=w1+w2+"px";
	document.getElementsByTagName("column-four")[0].style.left=w1+w2+w3+"px";
}
set_four_columns_left();



/**********************************************************************/
var column_one_enter_timer=null;
document.getElementsByTagName("column-one")[0].onmouseenter=function()
{
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	clearInterval(column_one_enter_timer);
	column_one_enter_timer=setInterval
	(
		function()
		{
			w1+=1;
			w2-=1/3;
			w3-=1/3;
			w4-=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w1>=document.getElementsByTagName("column-one")[0].raw_width_int+100)
			{
				clearInterval(column_one_enter_timer);
			}
		},
		3
	);
};

var column_one_leave_timer=null;
document.getElementsByTagName("column-one")[0].onmouseleave=function()
{
	clearInterval(column_one_enter_timer);
	clearInterval(column_one_leave_timer);
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	column_one_leave_timer=setInterval
	(
		function()
		{
			w1-=1;
			w2+=1/3;
			w3+=1/3;
			w4+=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w1<=document.getElementsByTagName("column-one")[0].raw_width_int)
			{
				clearInterval(column_one_leave_timer);
			}
		},
		3
	);
}
/*********************************************************************/
var column_two_enter_timer=null;
document.getElementsByTagName("column-two")[0].onmouseenter=function()
{
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	clearInterval(column_two_enter_timer);
	column_two_enter_timer=setInterval
	(
		function()
		{
			w1-=1/3;
			w2+=1;
			w3-=1/3;
			w4-=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			if(w1>=document.getElementsByTagName("column-two")[0].raw_width_int+100)
			{
				clearInterval(column_two_enter_timer);
			}
		},
		3
	);
};

var column_two_leave_timer=null;
document.getElementsByTagName("column-two")[0].onmouseleave=function()
{
	clearInterval(column_two_enter_timer);
	clearInterval(column_two_leave_timer);
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	column_two_leave_timer=setInterval
	(
		function()
		{
			w2-=1;
			w1+=1/3;
			w3+=1/3;
			w4+=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w2<=document.getElementsByTagName("column-two")[0].raw_width_int)
			{
				clearInterval(column_two_leave_timer);
			}
		},
		3
	);
}
/*************************************************************************/
var column_three_enter_timer=null;
document.getElementsByTagName("column-three")[0].onmouseenter=function()
{
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	clearInterval(column_three_enter_timer);
	column_three_enter_timer=setInterval
	(
		function()
		{
			w3+=1;
			w2-=1/3;
			w1-=1/3;
			w4-=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w3>=document.getElementsByTagName("column-three")[0].raw_width_int+100)
			{
				clearInterval(column_three_enter_timer);
			}
		},
		3
	);
};

var column_three_leave_timer=null;
document.getElementsByTagName("column-three")[0].onmouseleave=function()
{
	clearInterval(column_three_enter_timer);
	clearInterval(column_three_leave_timer);
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	column_three_leave_timer=setInterval
	(
		function()
		{
			w3-=1;
			w2+=1/3;
			w1+=1/3;
			w4+=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w3<=document.getElementsByTagName("column-three")[0].raw_width_int)
			{
				clearInterval(column_three_leave_timer);
			}
		},
		3
	);
}
/************************************************************************/
var column_four_enter_timer=null;
document.getElementsByTagName("column-four")[0].onmouseenter=function()
{
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	clearInterval(column_four_enter_timer);
	column_four_enter_timer=setInterval
	(
		function()
		{
			w4+=1;
			w2-=1/3;
			w3-=1/3;
			w1-=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w4>=document.getElementsByTagName("column-four")[0].raw_width_int+100)
			{
				clearInterval(column_four_enter_timer);
			}
		},
		3
	);
};

var column_four_leave_timer=null;
document.getElementsByTagName("column-four")[0].onmouseleave=function()
{
	clearInterval(column_four_enter_timer);
	clearInterval(column_four_leave_timer);
	let w1=document.getElementsByTagName("column-one")[0].offsetWidth;
	let w2=document.getElementsByTagName("column-two")[0].offsetWidth;
	let w3=document.getElementsByTagName("column-three")[0].offsetWidth;
	let w4=document.getElementsByTagName("column-four")[0].offsetWidth;
	column_four_leave_timer=setInterval
	(
		function()
		{
			w4-=1;
			w2+=1/3;
			w3+=1/3;
			w1+=1/3;
			document.getElementsByTagName("column-one")[0].style.width=w1+"px";
			document.getElementsByTagName("column-two")[0].style.width=w2+"px";
			document.getElementsByTagName("column-three")[0].style.width=w3+"px";
			document.getElementsByTagName("column-four")[0].style.width=w4+"px";
			set_four_columns_left();
			
			if(w4<=document.getElementsByTagName("column-four")[0].raw_width_int)
			{
				clearInterval(column_four_leave_timer);
			}
		},
		3
	);
}