/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";


	/* ========================================================================= */
	/*	Auto close Navbar when click on link
	/* ========================================================================= */

	$('.navbar-collapse a').click(function () {
		$(".navbar-collapse").collapse('hide');
	});


	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

});
/* ========================================================================= */
/*	particles
/* ========================================================================= */

particlesJS("particles-js", {"particles": {
	"number": {
		"value": 80,
		"density": {
			"enable": true,
			"value_area": 800
		}
	},
	"color": {
		"value": "#ffffff"
	},
	"shape": {
		"type": "circle",
		"stroke": {
			"width": 0,
			"color": "#000000"
		},
		"polygon": {
			"nb_sides": 5
		},
		"image": {
			"src": "img/github.svg",
			"width": 100,
			"height": 100
		}
	},
	"opacity": {
		"value": 0.6550235571725082,
		"random": false,
		"anim": {
			"enable": false,
			"speed": 1,
			"opacity_min": 0.1,
			"sync": false
		}
	},
	"size": {
		"value": 5,
		"random": true,
		"anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
		}
	},
	"line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	},
	"move": {
		"enable": true,
		"speed": 100,
		"direction": "none",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		}
	}
},
"interactivity": {
	"detect_on": "canvas",
	"events": {
		"onhover": {
			"enable": true,
			"mode": "repulse"
		},
		"onclick": {
			"enable": true,
			"mode": "push"
		},
		"resize": true
	},
	"modes": {
		"grab": {
			"distance": 400,
			"line_linked": {
				"opacity": 1
			}
		},
		"bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		},
		"repulse": {
			"distance": 100,
			"duration": 0.4
		},
		"push": {
			"particles_nb": 4
		},
		"remove": {
			"particles_nb": 2
		}
	}
},
"retina_detect": true
})
