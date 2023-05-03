$('.my-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
    }
})
$('.review-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0:{
            item: 1
        },
        600:{
            item: 3
        },
    }
    })