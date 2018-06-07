

// ----------------- ANIMATIONS -----------------

$("#option-about").on("mouseover", function(){
    var text = $("#option-about").find("p");
    text.animate({opacity: 1});
});

$("#option-about").on("mouseleave", function(){
    var text = $("#option-about").find("p");
    text.animate({opacity: 0});
});

$("#option-portfolio").on("mouseover", function(){
    var text = $("#option-portfolio").find("p");
    text.animate({opacity: 1});
});

$("#option-portfolio").on("mouseleave", function(){
    var text = $("#option-portfolio").find("p");
    text.animate({opacity: 0});
});

$("#option-contact").on("mouseover", function(){
    var text = $("#option-contact").find("p");
    text.animate({opacity: 1});
});

$("#option-contact").on("mouseleave", function(){
    var text = $("#option-contact").find("p");
    text.animate({opacity: 0});
});