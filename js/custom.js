$(function(){
	"use strict";
	// Activate scrollspy
	var topoffset = 50 // variable for menu height
	$('body').scrollspy({ 
		target: 'header .navbar',
		offset:topoffset
	});
// when scrollspy enent fire add or remove class inbody
var hash = $(this).find('li.active a').attr('href');
if(hash !== '#featured'){
	$('header nav').addClass('inbody');
}else{
	$('header nav').removeClass('inbody');
}


$('header .navbar').on('activate.bs.scrollspy', function () {
  var hash = $(this).find('li.active a').attr('href');
	
	if (hash != '#featured'){
		$('header nav').addClass('inbody');
	}else{
		$('header nav').removeClass('inbody');
	}
});
//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
	
/*CAROOSUAL*/
//auto genarate carousel indicator 
var slideqty = $('#featured .item').length; 
	for(var i=0; i<slideqty; i++){
		var qty = $('#featured .item').length;
		var randSlide = Math.floor(Math.random()* qty);
		var insertText = '<li data-target="#featured" data-slide-to="'+i+'"';
		if(i === randSlide){
			insertText +='class="active"';
			
		}
		insertText += '></li>';
	$('#featured ol').append(insertText);
	}

	$('#featured').carousel({
	  
	  pause: false
	});
	
});
//make carousel full height of window
var WindowHeight = $(window).height();
$('.full-height').css('height', WindowHeight);
// make slider full height on resizing window.
$(window).resize(function(){
	WindowHeight = $(window).height();
	$('.full-height').css('height', WindowHeight);
});
// make image as background image.
$('#featured .item img').each(function(){
	var imgSrc = $(this).attr('src');
	$(this).parent().css('background-image', 'url('+imgSrc+')');
	$(this).remove();
});
//randomized slide
var qty = $('#featured .item').length;
var randSlide = Math.floor(Math.random()* qty);
$('#featured .item').eq(randSlide).addClass('active');
