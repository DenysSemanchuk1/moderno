$(document).ready(function () {
  $(".rateyo").rateYo({
    rating: 5,
    readOnly: true,
    ratedFill: '#ffa726',
    starWidth: "12px",
  });
  $('select').styler();

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    prefix: "$",
  });
  $('.products-slider__box').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-btn, .header__menu-list').toggleClass('active')
  });

  $('.user__icon-menu').on('click', function () {
    $('.user__icon-menu, .header__btns').toggleClass('active')
  });

  $(".catalog__products-btngrid").on("click", function () {
    $(this).addClass("catalog__products-btn--active");
    $(".catalog__products-btnline").removeClass("catalog__products-btn--active");
    $(".product__item").removeClass("product__item--line");
  });
  $(".catalog__products-btnline").on("click", function () {
    $(this).addClass("catalog__products-btn--active");
    $(".catalog__products-btngrid").removeClass("catalog__products-btn--active");
    $(".product__item").addClass("product__item--line");
  });
  var mixer = mixitup('.products__inner-box, .catalog__products');


});