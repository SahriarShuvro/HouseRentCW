// $(".featuredSlider").slick();
// $('.featuredSlider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

  $('.featuredSlider').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    autoPlay: 2000,
    pageDots: false
  });