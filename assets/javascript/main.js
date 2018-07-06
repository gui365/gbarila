// ANIMATIONS

// Smooth scroll animation
$("#options a").on('click', function(event) {
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

$("button").hover(function(){
  $(this).animate({ "border-radius": "20px", "box-shadow": "2px 3px 3px black" }, "fast")
}, function(){
  $(this).animate({ "border-radius": "0" })
})
