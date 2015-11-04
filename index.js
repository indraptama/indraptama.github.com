$(function() {
  $(".rslides").responsiveSlides();
});

var toogleContentSlider = document.querySelector('#js-toggleContentSlider');
var contentItem = document.querySelector('.pageItem-content');
toogleContentSlider.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('js-rotate180');
  contentItem.classList.toggle('js-slideLeftHalf');
},false);
