$(function() {
  $(".rslides").responsiveSlides();
});

// Toggle Offcanvas
(function() {
  var leftToggle = document.querySelector('#leftSideButton');
  var rightToggle = document.querySelector('#rightSideButton');
  var leftAside = document.querySelector('.SideLeft-layer2');
  var rightAside = document.querySelector('.SideRight-layer2');

  leftToggle.addEventListener('click',function(e){
    e.preventDefault();
    if (rightAside.classList.contains('js-SideRight-layer2-Open')) {
      rightAside.classList.remove('js-SideRight-layer2-Open');
    }
    this.classList.toggle('active');
    leftAside.classList.toggle('js-SideLeft-layer2-Open');
  }, false);

  rightToggle.addEventListener('click',function(e){
    e.preventDefault();
    if (leftAside.classList.contains('js-SideLeft-layer2-Open')) {
      leftAside.classList.remove('js-SideLeft-layer2-Open');
    }
    this.classList.toggle('active');
    rightAside.classList.toggle('js-SideRight-layer2-Open');
  }, false);
}());


// Toggle Hamburger
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");
  var leftAside = document.querySelector('.SideLeft-layer2');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      leftAside.classList.toggle('js-SideLeft-layer2-OpenTop');
    });
  }

})();
