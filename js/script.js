// Настройки слайдера постов соц. сетей
$('.my-posts-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
});

$('#category-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    dots: true,
    nextArrow: 'span.navigation.next',
    prevArrow: 'span.navigation.prev',
})