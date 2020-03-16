window.currentPageIndex = 1;
window.currentPageName="index";
window.currentPageNumber=1;

var obj = document.documentElement;
document.documentElement.wheelComplete = true;
document.documentElement.style.height = window.innerHeight * 6 + "px"
document.documentElement.onmousewheel = function(ev)
{
	if (document.documentElement.wheelComplete == true)
	{

		var event = ev || window.event;
		//event.wheelDelta为负,向下

		if (event.wheelDelta > 0) //向上
		{

			setTimeout
				(
					function()
					{
						scroll(0, document.documentElement.scrollTop - 2);
						setTimeout
							(
								function()
								{
									scroll(0, document.documentElement.scrollTop - 2);
									setTimeout
										(
											function()
											{
												scroll(0, document.documentElement.scrollTop - 2);
												setTimeout
													(
														function()
														{
															scroll(0, document.documentElement.scrollTop - 2);
															setTimeout
																(
																	function()
																	{
																		scroll(0, document.documentElement.scrollTop - 2);
																		setTimeout
																			(
																				function()
																				{
																					scroll(0, document.documentElement.scrollTop - 2);
																					setTimeout
																						(
																							function()
																							{
																								scroll(0, document.documentElement.scrollTop - 1);
																								setTimeout
																									(
																										function()
																										{
																											scroll(0, document.documentElement.scrollTop - 1);
																											setTimeout
																												(
																													function()
																													{
																														scroll(0, document.documentElement.scrollTop - 1);
																														setTimeout
																															(
																																function()
																																{
																																	scroll(0, document.documentElement.scrollTop - 1);
																																	setTimeout
																																		(
																																			function()
																																			{
																																				scroll(0, document.documentElement.scrollTop - 1);
																																				setTimeout
																																					(
																																						function()
																																						{
																																							scroll(0, document.documentElement.scrollTop - 1);
																																						},
																																						1
																																					);
																																			},
																																			1
																																		);
																																},
																																1
																															);
																													},
																													1
																												);
																										},
																										1
																									);
																							},
																							1
																						);
																				},
																				1
																			);
																	},
																	1
																);
														},
														1
													);
											},
											1
										);
								},
								1
							);
					},
					1
				);


			if (document.documentElement.scrollTop == 0)
			{
				return false;
			}
			var target = document.documentElement.scrollTop - window.innerHeight;
			document.documentElement.wheelComplete = false;
			var timer = setInterval(
				function()
				{

					scroll(0, document.documentElement.scrollTop - 4);

					if (Math.abs(document.documentElement.scrollTop - target) <= 6)
					{
						clearInterval(timer);
						console.log(window.currentPageIndex)
						document.documentElement.wheelComplete = true;
						scroll(0, target);
						//window.currentPageIndex -= 1;
						window.currentPageIndex = Math.floor(document.documentElement.scrollTop/window.innerHeight)+1;
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
						document.getElementById("waterdrop-1-1").timer = null;
						document.getElementById("waterdrop-1-2").timer = null;
						document.getElementById("waterdrop-1-3").timer = null;
						console.log("ele", document.getElementById("waterdrop-1-1"));
						console.log("targetleft", window.wppos[window.currentPageIndex][1][1]);
						console.log("targettop", window.wppos[window.currentPageIndex][1][2]);
						
						movement(document.getElementById("waterdrop-1-1"), 'left', window.wppos[window.currentPageIndex][1][1],function(){},null);
						movement(document.getElementById("waterdrop-1-1"), 'top', window.wppos[window.currentPageIndex][1][2],function(){},null);
						movement(document.getElementById("waterdrop-1-2"), 'top', window.wppos[window.currentPageIndex][2][2],function(){},null);
						movement(document.getElementById("waterdrop-1-2"), 'left', window.wppos[window.currentPageIndex][2][1],function(){},null);
						movement(document.getElementById("waterdrop-1-3"), 'top', window.wppos[window.currentPageIndex][3][2],function(){},null);
						movement(document.getElementById("waterdrop-1-3"), 'right', window.wppos[window.currentPageIndex][3][1],function(){},null);
						if (window.currentPageIndex != 6)
						{
							document.getElementsByTagName("last-bar")[0].style.display = 'none';
							document.getElementById("six-points").style.display = "flex";
						}
					}
				},
				0.5
			);
		}
		else
		{
			var target = document.documentElement.scrollTop + window.innerHeight;
			if (document.documentElement.scrollTop + window.innerHeight + "px" === window.getComputedStyle(document.documentElement,
					null)['height'])
			{
				return false;
			}
			setTimeout
				(
					function()
					{
						scroll(0, document.documentElement.scrollTop + 2);
						setTimeout
							(
								function()
								{
									scroll(0, document.documentElement.scrollTop + 2);
									setTimeout
										(
											function()
											{
												scroll(0, document.documentElement.scrollTop + 2);
												setTimeout
													(
														function()
														{
															scroll(0, document.documentElement.scrollTop + 2);
															setTimeout
																(
																	function()
																	{
																		scroll(0, document.documentElement.scrollTop + 2);
																		setTimeout
																			(
																				function()
																				{
																					scroll(0, document.documentElement.scrollTop + 2);
																					setTimeout
																						(
																							function()
																							{
																								scroll(0, document.documentElement.scrollTop + 2);
																								setTimeout
																									(
																										function()
																										{
																											scroll(0, document.documentElement.scrollTop + 2);
																										},
																										1
																									);
																							},
																							1
																						);
																				},
																				1
																			);
																	},
																	1
																);
														},
														1
													);
											},
											1
										);
								},
								1
							);
					},
					1
				);

			document.documentElement.wheelComplete = false;
			var timer = setInterval(
				function()
				{

					scroll(0, document.documentElement.scrollTop + 4);
					// if(document.documentElement.scrollTop%window.innerHeight==0)
					// {
					// 	clearInterval(timer);
					// 	document.documentElement.wheelComplete=true;
					// }
					if (Math.abs(document.documentElement.scrollTop - target) <= 6)
					{
						clearInterval(timer);
						console.log(window.currentPageIndex)
						document.documentElement.wheelComplete = true;
						scroll(0, target);
						//window.currentPageIndex += 1;
						window.currentPageIndex = Math.floor(document.documentElement.scrollTop/window.innerHeight)+1;
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
						
						movement(document.getElementById("waterdrop-1-1"), 'left', wppos[window.currentPageIndex][1][1],function(){},null);
						movement(document.getElementById("waterdrop-1-1"), 'top', wppos[window.currentPageIndex][1][2],function(){},null);
						movement(document.getElementById("waterdrop-1-2"), 'top', wppos[window.currentPageIndex][2][2],function(){},null);
						movement(document.getElementById("waterdrop-1-2"), 'left', wppos[window.currentPageIndex][2][1],function(){},null);
						movement(document.getElementById("waterdrop-1-3"), 'top', wppos[window.currentPageIndex][3][2],function(){},null);
						movement(document.getElementById("waterdrop-1-3"), 'right', wppos[window.currentPageIndex][3][1],function(){},null);
						if (window.currentPageIndex == 6)
						{
							document.getElementsByTagName("last-bar")[0].style.display = 'block';
							document.getElementById("six-points").style.display = "none";
						}
					}
				},
				0.5
			);
		}
	}
	return false;
}