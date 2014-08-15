---
layout: post
title: Full Height Element
---

Simple javascript for making element height strecth to viewport height dynamicly. 

<pre>
<code>

(function (window, document, undefined){  
/**
 * Usage :
 * add .full-height class to element
 */

var window.onload = fullHeight;
var window.onresize = fullHeight;

function fullHeight() {
  var h = window.innerHeight;
  var elem = document.querySelectorAll('.full-height');

  for (var i = 0; i < elem.length; i++) {
  elem[i].style.height = h +'px';
  }
}

})(window, document);
</code>
</pre>