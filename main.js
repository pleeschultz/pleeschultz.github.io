'use strict';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function getScrollPosition() {
  return window.pageYOffset | document.body.scrollTop;
}

ready(function(){

  var h2s = document.querySelectorAll('h2');
  var h3s = document.querySelectorAll('h3');
  var navLinks = document.querySelectorAll('.nav-toc a');

  navLinks.forEach(function(element, index, array){

    var href = element.getAttribute('href').slice(1);
    element.dataHref = href;
  });

  window.onscroll = function(){

    var h2sAboveTop = [];
    var h3sAboveTop = [];

    h2s.forEach(function(element, index, array){
      if(element.offsetTop < getScrollPosition() + (document.body.clientHeight/3)){
        h2sAboveTop.push(element);
      }
    });

    var activeH2 = h2sAboveTop[h2sAboveTop.length-1];
    var activeH2Name = activeH2 ? activeH2.querySelector('a').getAttribute('name') : undefined;

    h3s.forEach(function(element, index, array){
      if(element.offsetTop < getScrollPosition() + (document.body.clientHeight/3)){
        if(element.offsetTop > activeH2.offsetTop){
          h3sAboveTop.push(element);
        }
      }
    });

    var activeH3 = h3sAboveTop[h3sAboveTop.length-1];
    var activeH3Name = activeH3 ? activeH3.querySelector('a').getAttribute('name') : undefined;

    navLinks.forEach(function(element, index, array){

      if(element.dataHref === activeH2Name){
        element.classList.add('nav-toc--active');
      } else if(element.dataHref === activeH3Name){
        element.classList.add('nav-toc--active-h3');
      } else {
        element.classList.remove('nav-toc--active');
        element.classList.remove('nav-toc--active-h3');
      }
    });

    console.log(activeH2.textContent, activeH3 ? activeH3.textContent : '');
  }

  var navToggle = document.querySelectorAll('.js-nav-toggle')[0];
  var navTOC = document.querySelectorAll('.js-nav-toc')[0];

  ['click', 'tap'].forEach(function(e){
    navToggle.addEventListener(e, function(event){
      var isOpen = this.classList.contains('nav-toggle--open');
      if(!isOpen){
        navToggle.classList.add('nav-toggle--open');
        navTOC.classList.add('nav-toc--open');
      } else {
        navToggle.classList.remove('nav-toggle--open');
        navTOC.classList.remove('nav-toc--open');
      }
      console.log('is open', isOpen);
    });
  });

  ['click', 'tap'].forEach(function(e){
    navTOC.addEventListener(e, function(event){
      navToggle.classList.remove('nav-toggle--open');
      navTOC.classList.remove('nav-toc--open');
    });
  });

});
