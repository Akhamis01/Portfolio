/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
   (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#navbar",
    });
})(jQuery); // End of use strict


// Navigation Bar
$(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
        document.getElementById("navbar").style.top = "-90px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
});


// Navigation Bar Click
let check = 0;
function openNav() {
    check += 1;
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("logo").style.display = "none";

    if(check%2 === 0){
        closeNav();
    } 
}

function closeNav() {
    check=0;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("logo").style.display = "block";
}


// Fade as you scroll
$(window).on("load",function() {
    setTimeout(function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();
        
                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom + 500) { //object comes into view (scrolling down)
                    if ($(this).css("opacity")==0) {$(this).fadeTo(350,1);}
                } else { //object goes out of view (scrolling up)
                    // if ($(this).css("opacity")==1) {$(this).fadeTo(350,0);}
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    }, 1550);
});
