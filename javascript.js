$(document).ready(function () {
	
	
	
	$(".logo").on("click", function(){
    	$(".logo").toggleClass("turned-off");
			$(".contact-button").toggle(100);
			$(".intro").toggle(100);
			$(".speech-bubble").toggle(300);
    
  });
	
	
	$(function(){
  if($('body').is('.project-page')){
			$(".logo").toggleClass("turned-off");
			$(".contact-button").toggle(100);
			$(".intro").toggle(100);
			$(".speech-bubble").toggle(300);
  }
});

	
	
		$(".email-link").on("click", function(){
    	$(".email-address").toggleClass("invisible text-trans");
  });
	
	
		$(".work-link").on("click", function(){
			$('html, body').animate({
					scrollTop: $("#work-section").offset().top -50
			}, 500);
	});

			$(".contact-link, .contact-button").on("click", function(){
				$('html, body').animate({
						scrollTop: $("#contact-form").offset().top-50
				}, 500);
	});

	
	
});