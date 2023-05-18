let courselContent = [
    {
        "src": "img/plane1.png",
        "alt": "Letadlo 1",
        "label": "Lorem ipsum",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec ultr",
        "isActive": true
    },

    {
        "src": "img/plane2.png",
        "alt": "Letadlo 2",
        "label": "XD",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec ultr",
        "isActive": false
    },

    {
        "src": "img/plane3.png",
        "alt": "Letadlo 3",
        "label": "TVOJEMAMA",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec ultr",
        "isActive": false
    }
]

courselContent.forEach(element => {
    $(".carousel-inner").append('<div class="carousel-item' + IsActive(element) + '"><img class="d-block w-100" src="'+ element.src +'" alt="'+element.alt+'"><div class="carousel-caption d-none d-md-block"><h5>'+element.label+'</h5><p>'+element.description+'</p></div>')
});

function IsActive(element){
    if(element.isActive){
        return " active";
    }
    else{
        return "";
    }
}
