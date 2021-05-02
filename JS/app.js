particlesJS.load('particles-div', 'particlesjs-config.json');
gsap.to('#logosvg', { delay: 0.2, marginBottom: 0, opacity: 1, duration: 0.5, ease: 'Power4.out' });
gsap.to('#logo-firstline', { delay: 0.7, width: 165, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-secondline', { delay: 0.8, width: 125, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-thirdline', { delay: 0.9, width: 95, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });

// gsap.from('.nav', { delay: 1.5, opacity: 0, duration: 1 })
// gsap.from('#particles-div', { delay: 1.5, opacity: 0, duration: 1 })
gsap.to('.intrologocontainer', { delay: 1.5, opacity: 0, zIndex: 0, duration: 1 })
gsap.to('.nav', { delay: 1.5, zIndex: 1, duration: 1 })

var slideUp = {
    distance: '30%',
    origin: 'bottom',
    opacity: 0.5,
    delay: 250,
    easing: 'ease-out'
};

ScrollReveal().reveal('.aboutpageimg', slideUp);
ScrollReveal().reveal('.aboutpagetextcol', slideUp);
ScrollReveal().reveal('.skillspagecol', slideUp);

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 50, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});

$(window).scroll(function () {
    var topofAbout = $("#about").offset().top; //gets offset of header
    var aboutHeight = $("#about").outerHeight(); //gets height of header
    var topofSkills = $("#skills").offset().top; //gets offset of header
    var skillsHeight = $("#skills").outerHeight(); //gets height of header
    var topofProjects = $("#projects").offset().top; //gets offset of header
    var projectsHeight = $("#projects").outerHeight(); //gets height of header
    console.log(topofProjects);
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 50) {
        $(".nav").css("background", "#5b838c");
    }
    else {
        $(".nav").css("background", "rgba(0,0,0,0)");
    }
    if ($(window).scrollTop() >= (topofAbout) && $(window).scrollTop() < (topofAbout + aboutHeight)) {
        $("#navoptionabout").css("color", "rgba(0,0,0,0.3)");
    }
    else {
        $("#navoptionabout").css("color", "#C3E1E8");
    }
    if ($(window).scrollTop() >= (topofSkills) && $(window).scrollTop() < (topofSkills + skillsHeight)) {
        $("#navoptionskills").css("color", "rgba(0,0,0,0.3)");
    }
    else {
        $("#navoptionskills").css("color", "#C3E1E8");
    }
    if ($(window).scrollTop() >= (topofProjects) && $(window).scrollTop() < (topofProjects + projectsHeight)) {
        $("#navoptionprojects").css("color", "rgba(0,0,0,0.3)");
    }
    else {
        $("#navoptionprojects").css("color", "#C3E1E8");
    }
});