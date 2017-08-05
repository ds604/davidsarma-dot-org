//Custom jQuery functions

jQuery.fn.fadeToggle = function(speed, easing, callback) {
  			return this.animate({opacity: 'toggle'}, speed, easing, callback);  
			};
			
$(document).ready( function(){	
				/* fade in and out the main menu
				$(".menuBar,#workMenu,#Main_menu,#header").hover(function() {
										$("#Main_menu").stop(true,true).fadeIn("slow");
										$("#workMenu").stop(true,true).fadeIn("slow");
										$("#beneathMenuBar").stop(true,true).fadeIn("slow");
									}, function(){
										$("#Main_menu").stop(true,true).fadeOut();
										$("#workMenu").stop(true,true).fadeOut();
										$("#beneathMenuBar").stop(true,true).fadeOut();
									});*/
				
				/* fade out the side menu*/
				/*$("#menuToggle").click(function () {
      									$("#textbox").fadeToggle("slow");
										$("#sideInfo").fadeToggle("slow");
										$("#sideGradient", window.frames[0].document).fadeToggle("slow");
    								}); */
				
				/* fade in info pane on hover*/
				/*$(".sideBar").hover(function () {
      									$("#textbox").stop(true,true).fadeIn("slow");
										$("#sideInfo").stop(true,true).fadeIn("slow");
										$("#sideGradient", window.frames[0].document).stop(true,true).fadeIn("slow");
    								}, function(){
										$("#textbox").stop(true,true).fadeOut();
										$("#sideInfo").stop(true,true).fadeOut();
										$("#sideGradient", window.frames[0].document).stop(true,true).fadeOut();
									}); */
				
				/* titles for work choice menu*/
				$('#menuSide_topic img').hover( function() {
									cap = $(this).attr('alt');
									$('#caption').html(cap);
    						}, function(){
								$('#caption').html('');
							});
				
				/* Set up text clearing toggle*/
				$("#menuToggle").html('<a href="#">Clear text</a>');
				
				/* Clear menus and text */
				$("#menuToggle").click(function () {
										$(this).html($(this).html() == '<a href="#">Clear text</a>' ? '<a href="#">Show text</a>' : '<a href="#">Clear text</a>');
										
      									$("#Main_menu").fadeToggle("slow");
										/*$(".workMenu").fadeToggle("slow");*/
										$(".pager").fadeToggle("slow");
										$(".pager", window.frames[0].document).fadeToggle("slow");

										
										$("#bottomColor").fadeToggle("slow");
										
										$("#menuSide_topic").fadeToggle("slow");
										$(".drawingsSubmenu", window.frames[0].document).fadeToggle("slow");
										$("#sideInfo",window.frames[0].document).fadeToggle("slow");
										$("#sideInfo").fadeToggle("slow");
										

										
										$("#header", frames['Main']).fadeToggle("slow");
										$("#sideGradient", window.frames[0].frames[0].document).fadeToggle("slow");				
									}); 
									
		});
		
	/* Clear sideGradient, must be loaded after entire page is loaded*/
	$(window).bind('load', function() {
			$("#menuToggle").click(function () {
					$('#sideGradient', frames['imageFrame']).fadeToggle("slow");
				});
	});
