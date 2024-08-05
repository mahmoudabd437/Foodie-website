let arrowUp = document.querySelector('.arrow-up');
let nav = document.querySelector('nav');
let span = document.querySelector('.span');
let linksActive = document.querySelector('.links-active');
let close = document.querySelector('.close');

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        arrowUp.classList.add("active");
        nav.classList.add("active");
    } else {
        arrowUp.classList.remove("active");
        nav.classList.remove("active");
    }
})


arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

span.addEventListener('click', () => {
    linksActive.classList.toggle('active');
    span.classList.toggle('active');

})

let arr = [".has-reveal", ".menu", ".about", ".promo", ".menu-adv", ".banner", ".blog"];

for (let i = 0; i < arr.length; i++) {
    ScrollReveal().reveal(arr[i], {
        duration: 700,
        origin: 'bottom',
        distance: '10px',
        delay: 100,
        easing: 'ease',
        // reset: true
    });
}

const deliveryBoy = document.querySelector(".cycle");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

    if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;

        if (lastScrollPos < activeScrollPos) {
            deliveryBoyMove += 1;
        } else {
            deliveryBoyMove -= 1;
        }

        lastScrollPos = activeScrollPos;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }

});