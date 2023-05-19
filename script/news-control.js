news = [
    {
        title: "Nový web",
        img: {
            src: "https://picsum.photos/200/300",
            alt: "Nový web"
        },
        text: "Vítejte na novém webu letiště. Doufáme, že se vám bude líbit.",
        date: "25.6.2021",
        href: "#"
    },
    {
        title: "Nový web",
        img: {
            src: "https://picsum.photos/200/300",
            alt: "Nový web"
        },
        text: "Vítejte na novém webu letiště. Doufáme, že se vám bude líbit.",
        date: "25.6.2021",
        href: "#"
    },
    {
        title: "Nový web",
        img: {
            src: "https://picsum.photos/200/300",
            alt: "Nový web"
        },
        text: "Vítejte na novém webu letiště. Doufáme, že se vám bude líbit.",
        date: "25.6.2021",
        href: "#"
    }
];

news.forEach(element => {
    $("#news-wrapper").append(`<div class="news-card m-auto w-25">
    <img class="news-image" src="${element.img.src}" alt="${element.img.alt}">          
    <div class="news-card-body p-4">
        <p class="news-title my-1">${element.title}</p>
        <p class="news-date my-1">${element.date}</p>
        <p class="news-text my-1">${element.text}</p>
        <a href="${element.href}" class="news-button btn btn-primary">Více informací</a>
    </div>
</div>`)
});
