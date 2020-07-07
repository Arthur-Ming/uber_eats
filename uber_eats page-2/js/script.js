'use strict'

/* let x = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;

document.querySelector(".button-up").style.right = x + 16 + "px";

window.onresize = function () {

  let x_onresize = (document.documentElement.clientWidth - document.querySelector(".wrapper").clientWidth) / 2;
  document.querySelector(".button-up").style.right = x_onresize + 16 + "px";

}


/*document.querySelector(".button-up").hidden = pageYOffset < document.documentElement.clientHeight;*/
/* window.addEventListener('scroll', function () {

  if (pageYOffset > document.documentElement.clientHeight) {
    document.querySelector('.button-up').classList.add("button-up-active");
  } else
    document.querySelector('.button-up').classList.remove("button-up-active");
  /*document.querySelector(".button-up").hidden = pageYOffset < document.documentElement.clientHeight;*/
  /*if (!document.querySelector(".button-up").hidden)
    document.querySelector(".button-up").style.opacity = "0.8";*/

/* 
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

  event.target.innerHTML = temp; */

  /* //alert(event.target.innerHTML);
  //document.querySelector('.ul').classList.toggle("hidden");
  //document.querySelector('.shape').classList.toggle("rotate");
}
 */ * / */
/* function myevent() {
  document.querySelector(".main-list__title").scrollIntoView({ block: "start", behavior: "smooth" });
} */
function tt() {
  document.querySelector(".main-list__title").scrollIntoView({ block: "start", behavior: "smooth" })
}


let titleTop = new Event("nt");
/* document.querySelector(".main-list__title").dispatchEvent(titleTop) = function () {
  alert("dbdfb");
  //document.body.classList.toggle("lock");
} */
function callback() {
  //document.body.classList.toggle("lock");
  if (document.querySelector(".menu.menu-active"))
    document.body.classList.toggle("lock");
}



function func() {
  if (document.documentElement.clientWidth > 767) return;
  this.scrollIntoView({ block: "start", behavior: "smooth" });
  //if (this.scrollTop == 255)
  //alert(document.body.scrollTop);
  //document.querySelector(".main-list__title").scrollTo(0, 0);
  document.querySelector(".menu").classList.toggle("menu-active");


  //window.onscroll = callback;
  //setTimeout(callback, 500)
}
/* window.addEventListener('scroll', (e) => {
  window.scrollTo(0, 0);
});
 */


//document.querySelector(".main-list__title").addEventListener('titleTop', callback);
//window.dispatchEvent(titleTop);

document.querySelector(".main-list__title").addEventListener('click', func);
/* window.onscroll = function () {
  if (document.querySelector(".menu.menu-active"))
    document.body.classList.toggle("lock");
} */

/* document.querySelector(".main-list__title").addEventListener('click', function (event, callback) {

  if (document.documentElement.clientWidth > 767) return;
  this.scrollIntoView({ block: "start", behavior: "smooth" });
  document.querySelector(".menu").classList.toggle("menu-active");
  document.body.onscroll = () => document.body.classList.toggle("lock");


}); */
/* if (document.querySelector(".menu.menu-active"))
  document.body.classList.toggle("lock"); */


document.querySelector(".main-list__title").addEventListener('mousedown', function (event) {

  event.preventDefault();
});






document.querySelector(".menu__list").onclick = function (event) {
  if (event.target.className != "menu__item") return;
  event.preventDefault();
  document.querySelector(".main-list__title>h2").innerHTML = event.target.innerHTML;
  if (document.documentElement.clientWidth > 767) return;
  document.querySelector(".menu").classList.toggle("menu-active");
  /*window.scrollTo(0, 0);*/
  document.querySelector(".main-list__title").scrollIntoView({ block: "start", behavior: "smooth" });


  /* if (document.querySelector(".menu.menu-active"))
    document.querySelector(".menu.menu-active").style.top = document.querySelector(".main-list__title").offsetTop + document.querySelector(".main-list__title").clientHeight + "px";
  else
    document.querySelector(".menu").style.top = "0px"; */
}



/* document.querySelector(".main-list__title").onclick = function (event) {
  if (document.documentElement.clientWidth > 767) return;
  this.scrollIntoView({ block: "start", behavior: "smooth" });
  document.querySelector(".menu").classList.toggle("menu-active");
  /* document.body.classList.toggle("lock"); */

/* if (document.querySelector(".menu.menu-active"))
  document.querySelector(".menu.menu-active").style.top = document.querySelector(".main-list__title").offsetTop + document.querySelector(".main-list__title").clientHeight + "px";
else
  document.querySelector(".menu").style.top = "0px"; */


/* document.querySelector('.main-list__title').onmousedown = function (event) {
    return false;
  }  */


















/* window.addEventListener('scroll', function () {

  if (document.querySelector(".main-list__title>h2").getBoundingClientRect().top - 72 < 0) {
    if (document.querySelector(".menu.menu-active"))
      document.body.classList.add("lock");

  } */
/* } else
  document.querySelector('.button-up').classList.remove("button-up-active"); */
/*document.querySelector(".button-up").hidden = pageYOffset < document.documentElement.clientHeight;*/
/*if (!document.querySelector(".button-up").hidden)
  document.querySelector(".button-up").style.opacity = "0.8";*/





