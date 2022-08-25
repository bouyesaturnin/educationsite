// change navigation on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


//----------------shox/hire faq open

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // changer le signe plus en moins lorsqu'on click sur p

        const icon = faq.querySelector('.fag-icon i')
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-presentation-plus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


// show hide navbar 

const menu = document.querySelector('.nav_menu');

const menuBtn = document.querySelector('#open-menu');

const menuClose = document.querySelector('#close-menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuBtn.style.display = "none";
})


const menuNav = () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuBtn.style.display = "inline-block";
}

menuClose.addEventListener('click', menuNav);