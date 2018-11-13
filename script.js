$(document).ready(function() {
    $(".toggle").click(function() {
       $('.links').slideToggle();
    });
    $(window).resize(function() {
       if ($(window).width() > 768) {
          $('.links').show();
       } else {
          $('.links').hide();
       }
    });
/*Scroll to section*/
    $(".links").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("body").animate({
            scrollTop: $(section).offset().top
        });
    });
/*end Scroll to section*/
/*Gallery prev and next*/
    function moveToSelected(element) {

    if (element == "next") {
    var selected = $(".selected").next();
    } else if (element == "prev") {
    var selected = $(".selected").prev();
    } else {
    var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

    }

    // Eventos teclado
    $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
    });

$('#carousel div').click(function() {
moveToSelected($(this));
});

$('#prev').click(function() {
moveToSelected('prev');
});

$('#next').click(function() {
moveToSelected('next');
});
/*end of Gallery prev and next*/
$('#bookOnline').hide();

$('#bookNow').click(function(){
    $('#bookOnline').show();
    $('#home').hide();
});

$('#homeBack').click(function(){
    $('#bookOnline').hide();
    $('#home').show();
});
});
