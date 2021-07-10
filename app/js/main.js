$(document).ready(function () {
  var mixer = mixitup('.products__inner-box');

  $(".rateyo").rateYo({
    rating: 5,
    readOnly: true,
    ratedFill: '#ffa726',
    starWidth: "12px",
  });

  $('.products-slider__box').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});