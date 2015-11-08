(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function () {
  $(".rslides").responsiveSlides();
});

// Toggle Offcanvas
(function () {
  var leftToggle = document.querySelector('#leftSideButton');
  var rightToggle = document.querySelector('#rightSideButton');
  var leftAside = document.querySelector('.SideLeft-layer2');
  var rightAside = document.querySelector('.SideRight-layer2');

  leftToggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (rightAside.classList.contains('js-SideRight-layer2-Open')) {
      rightAside.classList.remove('js-SideRight-layer2-Open');
    }
    this.classList.toggle('active');
    leftAside.classList.toggle('js-SideLeft-layer2-Open');
  }, false);

  rightToggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (leftAside.classList.contains('js-SideLeft-layer2-Open')) {
      leftAside.classList.remove('js-SideLeft-layer2-Open');
    }
    this.classList.toggle('active');
    rightAside.classList.toggle('js-SideRight-layer2-Open');
  }, false);
})();

// Toggle Hamburger
(function () {
  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");
  var leftAside = document.querySelector('.SideLeft-layer2');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
      leftAside.classList.toggle('js-SideLeft-layer2-OpenTop');
    });
  }
})();

},{}]},{},[1]);
