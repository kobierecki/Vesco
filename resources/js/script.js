/*--- SERVICES ---*/
//on scroll
$(function () {
    new WOW().init();
});

/*--- WORK ---*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
        enabled:true
        }
    });
});

/*--- TEAM ---*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*--- TESTIMONIALS ---*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*--- COUNTER-UP ---*/
$(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 2500
    });
});

/*--- CLIENTS ---*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*--- NAVIGATION ---*/
// Show/hide nav bar on top 

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 200 ) {
            $("nav").removeClass("vesco-top-nav");
        }
        else {
            $("nav").addClass("vesco-top-nav");
        }
    });
});


/*--- SMOOTH SCROLLING ---*/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        var section = $(this).attr("href");
        $('html, body').animate ({
            scrollTop: $(section).offset().top 
        }, 1250, "easeInOutExpo");
    });
});