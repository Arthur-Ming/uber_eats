'use strict'

let x = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;

document.querySelector(".button-up").style.right = x + 16 + "px";

window.onresize = function () {

  let x_onresize = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;
  document.querySelector(".button-up").style.right = x_onresize + 16 + "px";

}


/*document.querySelector(".button-up").hidden = pageYOffset < document.documentElement.clientHeight;*/
window.addEventListener('scroll', function () {

  if (pageYOffset > document.documentElement.clientHeight) {
    document.querySelector('.button-up').classList.add("button-up-active");
  } else
    document.querySelector('.button-up').classList.remove("button-up-active");
  /*document.querySelector(".button-up").hidden = pageYOffset < document.documentElement.clientHeight;*/
  /*if (!document.querySelector(".button-up").hidden)
    document.querySelector(".button-up").style.opacity = "0.8";*/


});



document.querySelector(".button-up").onclick = function () {
  //document.documentElement.scrollTop = 0;
  //window.scrollTo(0, 0);
  document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });
}



document.querySelector('.language-list').onmousedown = function (event) {
  return false;
}

document.onclick = function (event) {

  if (event.target.closest(".language-list")) return;
  if (!document.querySelector('.ul.hidden')) {
    document.querySelector('.ul').classList.add("hidden");
    document.querySelector('.language-list__img-2.rotate').classList.remove("rotate");
  }


}
document.querySelector(".language-list").onclick = function (event) {

  document.querySelector('.ul').classList.toggle("hidden");
  document.querySelector('.language-list__img-2').classList.toggle("rotate");
}

document.querySelector(".ul").onclick = function (event) {



  let temp = document.querySelector(".language-active").innerHTML;
  document.querySelector(".language-active").innerHTML = event.target.innerHTML;

  event.target.innerHTML = temp;

  //alert(event.target.innerHTML);
  //document.querySelector('.ul').classList.toggle("hidden");
  //document.querySelector('.shape').classList.toggle("rotate");
}