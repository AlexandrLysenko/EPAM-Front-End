$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
    	console.log(this);
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$('.banner__slider').slick({
	dots: true,
	arrows: false,
	autoplay: true,
  	autoplaySpeed: 5000,
  	cssEase: 'linear',
	});
