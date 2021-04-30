particlesJS.load('particles-div', 'particlesjs-config.json');
gsap.to('#logosvg', { delay: 0.2, marginBottom: 0, opacity: 1, duration: 0.5, ease: 'Power4.out' });
gsap.to('#logo-firstline', { delay: 0.7, width: 165, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-secondline', { delay: 0.8, width: 125, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-thirdline', { delay: 0.9, width: 95, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });

// gsap.from('.nav', { delay: 1.5, opacity: 0, duration: 1 })
// gsap.from('#particles-div', { delay: 1.5, opacity: 0, duration: 1 })
gsap.to('.intrologocontainer', { delay: 1.5, opacity: 0, zIndex: 0, duration: 1 })
gsap.to('.nav', { delay: 1.5, zIndex: 1, duration: 1 })


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

var topofDiv = $("#about").offset().top; //gets offset of header
var height = $("#about").outerHeight(); //gets height of header

$(window).scroll(function () {
    // console.log(topofDiv);
    if ($(window).scrollTop() >= 50) {
        $(".nav").css("background", "#5b838c");
    }
    else {
        $(".nav").css("background", "rgba(0,0,0,0)");
    }
    if ($(window).scrollTop() >= (topofDiv) && $(window).scrollTop() <= (topofDiv + height)) {
        $("#navoptionabout").css("color", "rgba(0,0,0,0.3)");
    }
    else {
        $("#navoptionabout").css("color", "#C3E1E8");
    }
});