"use strict";

$(document).ready(function(){
  $('.slide-little').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  });
});