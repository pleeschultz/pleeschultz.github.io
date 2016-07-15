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
  console.log('hi', h2s);

  window.onscroll = function(){

    var h2sAboveTop = [];

    h2s.forEach(function(element, index, array){
      if(element.offsetTop < getScrollPosition() + (document.body.clientHeight/2)){
        h2sAboveTop.push(element);
        // console.log(element.innerText || element.textContent);
      }
    });

    console.log(h2sAboveTop[h2sAboveTop.length-1]);
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
