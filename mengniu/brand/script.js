window.currentPageIndex = 3;
window.currentPageName="brand";
window.currentPageNumber=3;


document.getElementById("glass").onmouseenter=function()
			{
				for(let i=0;i<=9;i++)
				{
					setTimeout
					(
						function()
						{
							document.getElementById("glass").style.transform=`scale(1.0${i})`;
							console.log(i);
						},
						20*i
					);
				}
			};
			document.getElementById("glass").onmouseleave=function()
			{
				for(let i=9;i>=0;i--)
				{
					setTimeout
					(
						function()
						{
							var a=9-i;
							document.getElementById("glass").style.transform=`scale(1.0${a})`;
							console.log(i);
						},
						20*i
					);
				}
			};
			document.getElementById("gril").onmouseenter=function()
			{
				for(let i=0;i<=9;i++)
				{
					setTimeout
					(
						function()
						{
							document.getElementById("gril").style.transform=`scale(1.0${i})`;
							console.log(i);
						},
						20*i
					);
				}
			};
			document.getElementById("gril").onmouseleave=function()
			{
				for(let i=9;i>=0;i--)
				{
					setTimeout
					(
						function()
						{
							var a=9-i;
							document.getElementById("gril").style.transform=`scale(1.0${a})`;
							console.log(i);
						},
						20*i
					);
				}
			};