
(function($)
{
	"use strict";
	
	
	jQuery(window).on('load', function() {
		preloader();
		
		
		if(jQuery('.gallery-outer .gallery-items').length > 0){
			jQuery('.gallery-outer .gallery-items').filterizr();
		}
		jQuery('#filter-list li').on("click", function(){
			jQuery('#filter-list li').removeClass('active');
			jQuery(this).addClass('active');
		});
	});
	
	
	
	
	function preloader(){
		jQuery(".preloaderimg").fadeOut();
		jQuery(".preloader").delay(220).fadeOut("slow").delay(220, function(){
			jQuery(this).remove();
		});
	}
	
	
	
})(jQuery);	