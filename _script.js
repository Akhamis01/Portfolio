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