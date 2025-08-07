// Get the CSS element using its ID
const element = document.getElementById('loading')
const logoText = document.querySelector(".logo_container .logo_textp1");
const circle = document.querySelector('.circle');
var animateLinks = document.querySelectorAll('.links');

// Start Loading & Circle --------------------------------------------------------------------------------------------

function closing_circle_animation() {
  setTimeout(() => {
    circle.classList.add('closing-circle');
  }, 0);

  setTimeout(() => {
    logoText.style.zIndex = 2;
  }, 1500);

}
closing_circle_animation()




// LINKS STUFF ---------------------------------
animateLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    var circle = document.createElement('div');
    circle.classList.add('click_shape');
    circle.style.left = event.pageX + 'px';
    circle.style.top = event.pageY + 'px';
    document.body.appendChild(circle);

    setTimeout(function() {
      window.location.href = link.href;
    }, 1000);
  });
});
