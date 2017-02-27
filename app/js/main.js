//menu open
$(document).ready(function(){
	(function(){
		var navToggle  = $('.main-nav__toggle'),
			navWrapper = $('.main-nav__wrapper');
		navToggle.on('click', function(e){
			e.preventDefault();
			if(navToggle.hasClass('main-nav__toggle--closed')){
				navToggle
					.removeClass('main-nav__toggle--closed')
					.addClass('main-nav__toggle--opened');

				navWrapper
					.removeClass('main-nav__wrapper--closed')
					.addClass('main-nav__wrapper--opened') 
			}
			else{
				navToggle
					.removeClass('main-nav__wrapper--opened')
					.addClass('main-nav__wrapper--closed');
				navWrapper
					.removeClass('main-nav__wrapper--opened')
					.addClass('main-nav__wrapper--closed');
			}
		});
	}());
});
