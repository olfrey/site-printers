$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_scroll';

	$(window).on('load scroll', function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 1) {
			panel.addClass(panelClass);
		} else {
			panel.removeClass(panelClass);
		}
	});

	var reviews = $('.reviews__list');
	reviews.slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	new WOW().init();
});
