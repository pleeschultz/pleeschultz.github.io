
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

function getScrollPosition() {
  return window.pageYOffset | document.body.scrollTop;
}
