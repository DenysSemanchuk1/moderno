$(document).ready(function () {
  $(".rateyo").rateYo({
    rating: 5,
    readOnly: true,
    ratedFill: '#ffa726',
    starWidth: "12px",
  });
  $('select, input[type="file"]').styler();

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    prefix: "$",
  });
  $('.products-slider__box').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1901,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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
  $('.product-one__tabs .tab,.settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  var mixer = mixitup('.products__inner-box, .catalog__products');
});