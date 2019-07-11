 $(document).on('ready', function() {
 	$('.multiple__one').slick({
 		dots: false,
 		infinite: true,
 		speed: 300,
 		slidesToShow:1,
 		slidesToScroll: 1,
 		responsive: [
 		{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				infinite: true
 			}
 		},
 		{
 			breakpoint: 600,
 			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1
 			}
 		},
 		{
 			breakpoint: 480,
 			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1
 			}
 		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});
 	$('.multiple__two').slick({
 		infinite: true,
 		dots: false,
 		slidesToShow: 2,
 		slidesToScroll: 1,
 		responsive: [

 		{
 			breakpoint: 1140,
 			settings: {
 				slidesToShow: 2
 			}
 		},
 		{
 			breakpoint: 1000,
 			settings: {
 				slidesToShow: 1
 			}
 		},
 		{
 			breakpoint: 300,
 			settings: {
 				slidesToShow: 1
 			}
 		}
 		]
 	});
 	$('.multiple__three').slick({
 		infinite: true,
 		dots: false,
 		slidesToShow: 3,
 		slidesToScroll: 1,
 		responsive: [
 		{
 			breakpoint: 1350,
 			settings: {
 				slidesToShow: 3
 			}
 		},
 		{ breakpoint: 1250,
 			settings: {
 				slidesToShow: 3
 			}
 		},
 		{
 			breakpoint: 1124,
 			settings: {
 				slidesToShow: 3
 			}
 		},
 		{
 			breakpoint: 870,
 			settings: {
 				slidesToShow: 2
 			}
 		},
 		{
 			breakpoint: 500,
 			settings: {
 				slidesToShow: 1
 			}
 		},
 		{
 			breakpoint: 375,
 			settings: {
 				slidesToShow: 1,
 				arrows:false
 			}
 		},
 		{
 			breakpoint: 300,
 			settings: {
 				slidesToShow: 1,
 				arrows:false
 			}
 		}
 		]
 	});
 	$('.multiple__four').slick({
 		infinite: true,
 		dots: false,
 		slidesToShow: 4,
 		slidesToScroll: 1,
 		responsive: [
 		{
 			breakpoint: 1350,
 			settings: {
 				slidesToShow: 4
 			}
 		},
 		{ breakpoint: 1250,
 			settings: {
 				slidesToShow: 4
 			}
 		},
 		{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 3
 			}
 		},
 		{
 			breakpoint: 870,
 			settings: {
 				slidesToShow: 3
 			}
 		},
 		{
 			breakpoint: 608,
 			settings: {
 				slidesToShow: 2
 			}
 		},
 		{
 			breakpoint: 425,
 			settings: {
 				slidesToShow: 1
 			}
 		},
 		{
 			breakpoint: 375,
 			settings: {
 				slidesToShow: 1,
 				arrows:false
 			}
 		},
 		{
 			breakpoint: 300,
 			settings: {
 				slidesToShow: 1,
 				arrows:false
 			}
 		}
 		]
 	});
 	
 });