function openWhatsapp(){
    const item = document.querySelector(".contact-us");
    item.addEventListener("click", window.open("https://api.whatsapp.com/send?phone=+5581996153467", "_blank"))
}

// Funções do Footer

function openGoogleMaps(){
    const item = document.querySelector(".location");
    item.addEventListener("click", window.open("https://www.google.com.br/maps/place/PORTO+ZERO+CONSULTORIA+E+ASSESSORIA/@-8.058572,-34.9104598,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab1920d3699921:0xdb83ad76969e17e3!8m2!3d-8.058575!4d-34.9082799"
    , "_blank"))
}

function openYoutube(){
    const item = document.querySelector(".youtube");
    item.addEventListener("click", window.open("https://www.youtube.com/channel/UCEa0IurjHG8f4Vg0lSsQQRA", "_blank"))
}

function openLinkedin(){
    const item = document.querySelector(".linkedin");
    item.addEventListener("click", window.open("https://www.linkedin.com/company/portozero/", "_blank"))
}

function openInstagram(){
    const item = document.querySelector(".instagram");
    item.addEventListener("click", window.open("https://www.instagram.com/portozero/?hl=pt", "_blank"))
}

function openFacebook(){
    const item = document.querySelector(".facebook");
    item.addEventListener("click", window.open("https://pt-br.facebook.com/portozero/", "_blank"))
}

// Notícias

function openNotice1(){
    const item = document.querySelector(".notice1")
    item.addEventListener("click", window.open("https://set.org.br/set-news/mcom-publica-edital-da-terceira-e-ultima-fase-do-programa-digitaliza-brasil/", "_blank"))
}

function openNotice2(){
    const item = document.querySelector(".notice2")
    item.addEventListener("click", window.open("https://www.abert.org.br/web/notmenu/tv-3-0-mcom-recebe-recomendacoes.html", "_blank"))
}

function openNotice3(){
    const item = document.querySelector(".notice3")
    item.addEventListener("click", window.open("https://set.org.br/set-news/mcom-publica-edital-da-terceira-e-ultima-fase-do-programa-digitaliza-brasil/", "_blank"))
}

// Scroll

function scrollToHome(){
    let item = document.querySelector(".home-about")
    let page = document.querySelector(".home-section")

    item.addEventListener('click', page.scrollIntoView({block: "end", behavior: "smooth"}))
}

function scrollToServices(){
    let item = document.querySelector(".home-service")
    let page = document.querySelector(".service-section")

    item.addEventListener('click', page.scrollIntoView({block: "start", behavior: "smooth"}))

}

function scrollToClients(){
    let item = document.querySelector(".home-clients")
    let page = document.querySelector(".clients-section")

    item.addEventListener('click', page.scrollIntoView({block: "end", behavior: "smooth"}))
}

function scrollToNotices(){
    let item = document.querySelector(".home-notices")
    let page = document.querySelector(".notices-section")

    item.addEventListener('click', page.scrollIntoView({block: "start", behavior: "smooth"}))
}

