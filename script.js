window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentTestimonial = 0;
  testimonials[currentTestimonial].classList.add("active");
  
  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove("active");     
    currentTestimonial = (currentTestimonial + 1) % testimonials.length; 
    testimonials[currentTestimonial].classList.add("active");
  }
  
  function showPrevTestimonial() {    
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
  }

  nextBtn.addEventListener("click", showNextTestimonial);
  prevBtn.addEventListener("click", showPrevTestimonial);
});

