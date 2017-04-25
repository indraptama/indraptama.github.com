function TiltImage () {
  var TiltContainer = document.querySelectorAll('.TiltContainer');
  for (var i = 0; i < TiltContainer.length; i++) {
    VanillaTilt.init(TiltContainer[i], {
      max: 15,
      speed: 200
    })
  }
};

function TiltHero () {
  var TiltHero = document.querySelector('#Hero');
  VanillaTilt.init(TiltHero, {
    max: 5,
    speed: 200
  })
}

function Parallax() {
  var rellax = new Rellax('.rellax', {
    center: true
  });
}

function ParallaxDestroy() {
  var rellax = new Rellax('.rellax');
  rellax.destroy();
}


// TiltImage();
// TiltHero();
// Parallax();

function ParallaxDesktop() {
  var WindowSize = window.innerWidth;
  if (WindowSize > 960) {
    Parallax();
  } else {
    // ParallaxDestroy()
  }
}

window.onload = ParallaxDesktop();
// window.onresize = ParallaxDesktop();
