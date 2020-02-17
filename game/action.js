var score=0;
var time1=new Date();
var directionVector=generateDirectionVector();
var startPosition={x:randomNum(100,730),y:randomNum(100,380)};
var ball=document.getElementById('ball');
ball.style.left=startPosition.x+'px';
ball.style.top=startPosition.y+'px';
window.speed=1;
window.racketid=5;
updataRacketStatue(5);
var timer=null;
window.ballCurrentPosition={x:parseInt(ball.style.left),y:parseInt(ball.style.top)};
//一共40行，前39都是空白，最后一行是拍子
//一行9个


//740 82*9
//400 40*110
//       1        2         3           4            5           6           7            8           9     n
//     0   82   83    82*2																				   82(n-1) 82n
function move()
{
	console.log(directionVector)
	document.title='Playing';
	window.ballCurrentPosition={x:parseInt(ball.style.left),y:parseInt(ball.style.top)};
	var positionAsBrick=getPositionAsBrick(ballCurrentPosition.x,ballCurrentPosition.y);
	
	if(positionAsBrick.x<=0)//越左界
	{
		directionVector.x=0-directionVector.x;
		ball.style.left='3px';
		return;
	}
	if(positionAsBrick.x>=10)//越右界
	{
		directionVector.x=0-directionVector.x;
		ball.style.left='730px';
		return;
	}
	if(positionAsBrick.y<=0)//越上界
	{
		directionVector.y=0-directionVector.y;
		ball.style.top='3px';
		return;
	}
	if(positionAsBrick.y==39&&positionAsBrick.x==window.racketid)//先检测拍子，触到拍子
	{
		directionVector.y=0-directionVector.y;//反弹
	}
	
	if(getDiv(positionAsBrick.x,positionAsBrick.y-1).style.backgroundColor=='chocolate')//向上碰到转头
	{
		directionVector.y=0-directionVector.y;//反弹
		getDiv(positionAsBrick.x,positionAsBrick.y-1).style.backgroundColor='pink';
		score++;
		document.getElementById('score').innerText=score;
	}
	
	
	
	/*if(ballCurrentPosition.x<=10)
	{
		directionVector.x=0-directionVector.x;
		ball.style.left=ball.offsetLeft+directionVector.x*speed+'px';
		ball.style.left=ball.offsetLeft+directionVector.x*speed+'px';
	}
	if(ballCurrentPosition.y<=0)
	{
		directionVector.y=0-directionVector.y;
		ball.style.top=ball.offsetTop+directionVector.y*speed+'px';
		ball.style.top=ball.offsetTop+directionVector.y*speed+'px';
	}
	if(ballCurrentPosition.x>=730)
	{
		directionVector.x=0-directionVector.x;
		ball.style.left=ball.offsetLeft+directionVector.x*speed+'px';
		ball.style.left=ball.offsetLeft+directionVector.x*speed+'px';
	}
	if(ballCurrentPosition.y>=400)
	{
		gameLost();

	}*/
	
	if(positionAsBrick.y>=40)//越下界
	{
		gameLost();
	}
	

	ball.style.left= 
		directionVector.x*speed>0
		?  
		ball.offsetLeft+Math.ceil(directionVector.x*speed)+'px'
		:
		ball.offsetLeft+Math.floor( directionVector.x*speed)+'px';
	
	
	ball.style.top= 
		directionVector.y*speed>0
		? 
		ball.offsetTop+Math.ceil( directionVector.y*speed)+'px'
		:
		ball.offsetTop+Math.floor( directionVector.y*speed)+'px';
		
	console.log()	
		
	document.getElementById('time').innerText=(new Date()-time1)/1000+'秒';
}
function getDiv(x,y)
{
	//40x9个div
	return document.body.children[y].children[x-1];
}
function startGame()
{
	
	timer=setInterval
	(
		move,
		10
	)
}
function stopGame()
{
	clearInterval(timer);
}
document.documentElement.onkeydown=function(ev)
{
	var event=event||ev;
	if(event.keyCode==37)
	{
		racketBecomeLeftOne();
	}
	if(event.keyCode==39)
	{
		racketBecomeRightOne();
	}
}

function gameLost()
{
	stopGame();
	document.getElementById('lost').innerText=parseInt(document.getElementById('lost').innerText)+1;
	alert('You lost\n坚持了'+(new Date()-time1)/1000+'秒');
	time1=new Date();
	
	//重新载入点&方向
	startPosition={x:360,y:200};
	ball.style.left=startPosition.x+'px';
	ball.style.top=startPosition.y+'px';
	
	directionVector = generateDirectionVector();
}
function gameWin()
{
	stopGame();
	var t=(new Date()-time1)/1000;
	var tpl=`你在${t}秒内打破了${score}个转头`;
	alert(tpl);
}

function getPositionAsBrick(posx,posy)
{
	return {x:Math.ceil(posx/82),y:Math.ceil(posy/10)};
}
function randomNum(minNum,maxNum)
{ 
    switch(arguments.length)
	{ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
function generateDirectionVector()//给出方向向量
{
	//25 - 75
	//115  155
	//205  245
	//305  335
	var seed1 = new Date().getSeconds();//用秒数做随机数
	var seed2= new Date().getMilliseconds();
	
	
	//生成第一个随机角
	var ang1;
	if(seed1%4==0)
	{
		ang1=randomNum(25,75);
	}
	if(seed1%4==1)
	{
		ang1=randomNum(115,155);
	}
	if(seed1%4==2)
	{
		ang1=randomNum(205,245);
	}
	if(seed1%4==3)
	{
		ang1=randomNum(305,335);
	}
	
	return {x:Math.cos(ang1/180*3.1415),y:Math.sin(ang1/180*3.1415)};
}

function updataRacketStatue()
{
	for(var i=1;i<=9;i++)
	{
		if(i==window.racketid)
		{
			document.getElementById('last-row-'+i).style.backgroundColor='brown';
		}
		else
		{
			document.getElementById('last-row-'+i).style.backgroundColor='pink';
			//tmd不是window.racketid!是i
		}
	}
}
function racketBecomeLeftOne()
{
	if(racketid>=2)
	{
		racketid--;
		updataRacketStatue(racketid);
	}
	console.log('Current Racket is ',window.racketid);
}
function racketBecomeRightOne()
{
	if(racketid<=8)
	{
		racketid++;
		updataRacketStatue(racketid);
	}
	console.log('Current Racket is ',window.racketid);
}

