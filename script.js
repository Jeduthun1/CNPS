const elements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .zoom-in');

const observer = new IntersectionObserver((entries) => 
    { entries.forEach(entry => { if (entry.isIntersecting) 
    { entry.target.classList.add('show'); } }); }, 
    { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const header = document.querySelector('header');

window.addEventListener('scroll', () => 
{ if (window.scroll > 50 )
    {header.classList.add('scrolled');}
        else 
        {
            header.classList.remove('scrolled');
        }
});

//mobile menu toggle

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active'); //this will trigger the animation
    }
);

