const owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 9000,
  autoplayHoverPause: true
});
$('.play').on('click', function() {
  owl.trigger('play.owl.autoplay', [1000]);
});
$('.stop').on('click', function() {
  owl.trigger('stop.owl.autoplay');
});

// carousel Initialize script

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({});
});
