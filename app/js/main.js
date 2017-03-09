//menu open
window.onload = function(){
	var navToggle  = document.querySelector('.main-nav__toggle'),
	navWrapper = document.querySelector('.main-nav__wrapper');
	navToggle.addEventListener('click', function(e){
		e.preventDefault();
		if(navToggle.classList.contains('main-nav__toggle--closed')){
			navToggle.classList.remove('main-nav__toggle--closed')
			navToggle.classList.add('main-nav__toggle--opened');

			navWrapper.classList.remove('main-nav__wrapper--closed')
			navWrapper.classList.add('main-nav__wrapper--opened') 
		}
		else{
			navToggle.classList.remove('main-nav__toggle--opened');
			navToggle.classList.add('main-nav__toggle--closed');
			
			navWrapper.classList.remove('main-nav__wrapper--opened');
			navWrapper.classList.add('main-nav__wrapper--opened');
		}
	});
};

