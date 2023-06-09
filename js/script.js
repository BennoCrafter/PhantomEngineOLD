let documentTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "TitanEngine : First and best WebEngine ever";
})
window.addEventListener("focus", () => {
    document.title = documentTitle;
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });
