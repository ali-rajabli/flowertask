// Button plus minus
var orderCount = $('#order-cnt').text()
var price = $('#price')

$('.plus-btn').on('click', () => {
    if (orderCount < 999) {
        orderCount++;
    }
    $('#order-cnt').text(orderCount)
    $(price).text(2250 * orderCount)
})
$('.minus-btn').on('click', () => {
    if (orderCount > 1) {
        orderCount--;
    }
    $('#order-cnt').text(orderCount)
    $(price).text(2250 * orderCount)
})

// Slider Plugin

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});