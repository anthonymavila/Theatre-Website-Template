/*
$("#vacation").inViewport(function(px){
    if(px) $(this).css({
    	"opacity": 1,
    });
});
*/

var open_dd = false;
var temp_dd = false;
var mobile = null;
function dd_is_dropped() {
    if ( open_dd !== false ) {
        return true;
    } else {
        return false;
    }
}

function dd_clear_all() {
    open_dd = false;
    $(".nav-dd-playing").css({"display": "none", "opacity": 1});
    $(".nav-dd-locations").css({"display": "none", "opacity": 1});
    $(".nav-dd-rest").css({"display": "none", "opacity": 1});
}

function dd_clear_last() {
    if ( ! dd_is_dropped() ) {
        return false;
    }
    temp_dd = open_dd
    $("."+open_dd).animate({
        "opacity": 0
    }, 500, function(){
        $("."+temp_dd).css({"display": "none", "opacity": 1}); 
    });
    open_dd = false;
}

function ddshow(dd) {
    if ( is_mobile() ) { return false; }
    if ( dd_is_dropped() ) {
        dd_clear_all();
        open_dd = dd;
        $("."+dd).css({"display": "block", "opacity": 1});
    } else {
        open_dd = dd;
        $("."+dd).css({"display": "block", "opacity": 0});
        $("."+dd).animate({
            "opacity": 1
        }, 500);
    }
}

function ddhide(dd) {

    open_dd = false;
    $("."+dd).animate({
        "opacity": 0
    }, 500, function(){
        $("."+dd).css({"display": "none", "opacity": 1}); 
    });
    
}

$( document ).ready(function() {

    mobile = is_mobile();

    $(".nav-dd-playing").mouseleave(function(e) {
        if ( e.relatedTarget.nodeName == "NAV" ) { return false; }
        ddhide('nav-dd-playing');
    });
    $(".nav-dd-locations").mouseleave(function(e) {
        if ( e.relatedTarget.nodeName == "NAV" ) { return false; }
        ddhide('nav-dd-locations');
    });
    $(".nav-dd-rest").mouseleave(function(e) {
        if ( e.relatedTarget.nodeName == "NAV" ) { return false; }
        ddhide('nav-dd-rest');
    });

    if ( mobile ) {
        $(".first-slide").attr("src", "assets/gfx/imdb/covers/predator.jpg");
        $(".second-slide").attr("src", "assets/gfx/imdb/covers/house_with_a_clock_in_its_walls.jpg");
        $(".third-slide").attr("src", "assets/gfx/imdb/covers/simple_favor.jpg");
        $("#myCarousel").css("margin-top", $("nav").innerHeight() + "px" );
    }

    $("#starter").css("margin-top", $("#myCarousel").height() );

    $("#starter").inViewport(function(px){
        if(px) $(this).animate({
            "opacity": 1,
        }, 1000);
    });


$('.slicky').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


    $("body").animate({
        "opacity": 1
    });

});

function is_mobile() {
    if ( $(window).width() < $(window).height() && $(window).width() < 800 ) {
        return true;
    } else {
        return false;
    }
}

$(window).resize(function(){
    if ( is_mobile() === mobile ) {
        $("#starter").css("margin-top", $("#myCarousel").height() );
    } else {
        $("body").css("display", "none");
        location.reload();
    }
})