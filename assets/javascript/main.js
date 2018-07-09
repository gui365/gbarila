// ANIMATIONS

$("#sb-skills").click(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 5000);
	});
});

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
  $(this).animate({ "border-radius": "20px" }, "fast")
}, function(){
  $(this).animate({ "border-radius": "0" })
})


$(".portfolio-project").hover(function(){
  $(this).find(".portfolio-project-links").css( {display: "block"} )
}, function(){
  $(this).find(".portfolio-project-links").css( {display: "none"} )
})

function scrollListener() {
  if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750) {
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 5000);
    });
  }
};

window.onscroll = function() {
  scrollListener();
};