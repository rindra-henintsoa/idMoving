$(document).ready(function(){
	$nav=$('.hidden-nav');
	$toggleCollapse=$('.toggle-collapse');

	/**click event on toggle menu*/
	$('.toggle-collapse').click(function(){
		$('.hidden-item').fadeToggle(1000);
	})

	$lisuivre=$('.suivez');
	$lisuivre.on('mouseenter', function(){
		anime({
	targets: 'img.rot',
  	translateX: 0,
  	rotate: '1turn',
 	 backgroundColor: '#FFF',
  	duration: 1000
		});	
	})

	$('.brochure').on('mouseenter', function(){
		anime({
	targets: 'img.rot2',
  	translateX: 0,
  	rotate: '1turn',
 	 backgroundColor: '#FFF',  	duration: 1000
		});	
	})

	$('.contact').on('mouseenter', function(){
		anime({
	targets: 'img.rot3',
  	translateX: 0,
  	rotate: '3turn',
 	 backgroundColor: '#FFF',
  	duration: 1000
		});	
	})

	$('.rectangle').animate({
		top: '50%',
	}, 1000);

	$('.rectangle').animate({
		width: '800px',
		padding: '15px'
	}, 1000);

	$('.rectangle').animate({
		fontSize: '18px'
	}, 1000)

	$('.aboutpgp').slideDown();

	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		dots: false, 
		margin: 30,
		autoplayTimeout: 2000,
		 responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                900: {
                	items:4
                },
                1000: {
                    items: 5
                }
            }
	})

	 $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });

	//click to scroll top
	$('.move-up').click(function() {
		$('html, body').animate({
			scrollTop:0}, 1000 );
	})
})