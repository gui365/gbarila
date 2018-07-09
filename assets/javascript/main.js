// ANIMATIONS

// Smooth scroll animation
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, function() {
      window.location.hash = hash;              
    });
  }
});

// Hovering over form button
$("button").hover(function(){
  $(this).animate({ "border-radius": "20px", "box-shadow": "2px 3px 3px black" }, "fast")
}, function(){
  $(this).animate({ "border-radius": "0" })
})


$(".portfolio-project").hover(function(){
  $(this).find(".portfolio-project-links").css( {display: "block"} )
}, function(){
  $(this).find(".portfolio-project-links").css( {display: "none"} )
})