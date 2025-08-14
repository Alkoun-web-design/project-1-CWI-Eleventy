// const prevArrow = document.getElementById('previous-arrow');
// const prevArrowEllipse = document.getElementById('previous-arrow-ellipse')
// const nextArrow = document.querySelector('#next-arrow');
// const nextArrowEllipse = document.querySelector('#next-arrow-ellipse');
// const testimonialsArray = document.querySelectorAll('.testimonial');
// const testimonials = Array.from(testimonialsArray);
// const firstTestimony = document.querySelector('.testimonial').classList.add('active');
const mainNav = document.querySelectorAll('.main-nav');
const menuButton = document.querySelector('.nav-menu-icon');
const menuButtonBG = document.querySelector('#nav-menu-icon-bg');
const menuTray = document.querySelector('.menu-tray');
const phoneIcon = document.querySelector('#phone-icon');
const phoneIconBG = document.querySelector('#phone-icon-bg');
const instagramIcon = document.querySelector('#instagram-icon');
const instagramIconBG = document.querySelector('#instagram-icon-bg');
const emailIcon = document.querySelector('#email-icon');
const emailIconBG = document.querySelector('#email-icon-bg');
const locationIcon = document.querySelector('#location-icon');
const locationIconBG = document.querySelector('#location-icon-bg');
const ddNav = document.querySelector('#dropdown-nav');



const hoverFX = (element, elementBG) => { 
    element.addEventListener("mouseenter", function(){
    elementBG.setAttribute("style", "fill: #ffc562", "transition: 0.3s");
    })
    element.addEventListener("mouseleave", function(){
    elementBG.setAttribute("style", "fill: #506388", "transition: 0.3s");
    })
};

// hoverFX(prevArrow, prevArrowEllipse);

// prevArrow.addEventListener("click", function(){
//     let activeTestimony = document.querySelector('.testimonial.active');
//     let prevEl = activeTestimony.previousElementSibling;
//     if (prevEl){
//         activeTestimony.classList.toggle('active'); 
//         prevEl.classList.toggle('active');
//     } else {
//         activeTestimony.classList.toggle('active');
//         testimonials[testimonials.length-1].classList.toggle('active');
//     }
// });

// hoverFX(nextArrow, nextArrowEllipse);

// nextArrow.addEventListener("click", function(){
//     let activeTestimony = document.querySelector('.testimonial.active')
//     let nextEl = activeTestimony.nextElementSibling;
//     if (nextEl){
//         activeTestimony.classList.toggle('active'); 
//         nextEl.classList.toggle('active'); 
//     } else {
//         activeTestimony.classList.toggle('active');
//         testimonials[0].classList.toggle('active');
//     }
// });

hoverFX(menuButton, menuButtonBG);

menuButton.addEventListener('click', function(){
    if(ddNav.classList=='inactive') {
        ddNav.classList.add('active');
        ddNav.classList.remove('inactive');
        anime({
            target: ddNav,
            duration: 500,
            opacity: 1,
            width: '50px',
            height: '60px'
        });
        console.log('ddnav is active');
    } else {
        ddNav.classList.remove('active');
        ddNav.classList.add('inactive');
        anime({
            target: menuButton,
            duration: 500,
            opacity: 0,
            width: '-50px',
            height: '-60px'
        });
        console.log('ddnav is inactive');
    }
});        

hoverFX(phoneIcon, phoneIconBG);
hoverFX(instagramIcon, instagramIconBG);
hoverFX(emailIcon, emailIconBG);
hoverFX(locationIcon, locationIconBG);