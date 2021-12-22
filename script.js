$(function() {

  function animatePath(pathname, animation) {
    var path = document.querySelector(pathname);
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      animation;
    // Go!
    path.style.strokeDashoffset = '0';
  }
  
  animatePath('#sig', 'stroke-dashoffset 10s ease-in-out');
  
  $("#signature").on({
    mouseenter: function () {

      animatePath('#sig', 'stroke-dashoffset 10s ease-in-out');

    },
    mouseleave: function () {
      console.log(112);
    }
  });
  
});
