---
layout: post
title: Full Height Element
---
Simple javascript for making element height strecth to viewport height dynamicly. 

<pre>
<code>
/**
 * Usage :
 * add .full-height class to element
 */
window.onload = fullHeight;
window.onresize = fullHeight;
function fullHeight() {
  var h = window.innerHeight;
  var elem = document.querySelectorAll('.full-height');

  for (var i = 0; i < elem.length; i++) {
  elem[i].style.height = h +'px';
  }
}
</code>
</pre>