let courselContent = [
    {
        "src": "img/plane1.png",
        "alt": "Letadlo 1",
        "isActive": true
    },

    {
        "src": "img/plane2.png",
        "alt": "Letadlo 2",
        "isActive": false
    },

    {
        "src": "img/plane3.png",
        "alt": "Letadlo 3",
        "isActive": false
    }
]

courselContent.forEach(element => {
    $(".carousel-inner").append('<div class="carousel-item' + IsActive(element) + '"><img class="d-block w-100" src="'+ element.src + '" alt="'+element.alt+'"></div>');
});

function IsActive(element){
    if(element.isActive){
        return " active";
    }
    else{
        return "";
    }
}

const carousel = new bootstrap.Carousel('#mainCarousel');

