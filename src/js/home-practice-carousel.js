var homePracticeCarousel = $('.home-practice-carousel');

homePracticeCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z" transform="translate(4.500000, 7.000000) rotate(-180.000000) translate(-4.500000, -7.000000)"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z"/></svg>'],
  margin: 13,
  autoWidth: true,
  responsive:{
    0:{
      items:1
    },
    601:{
      items: 1
    },
    761: {
      items: 1
    }
  }
});

homePracticeCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-practice-carousel-controls'></div>");
});