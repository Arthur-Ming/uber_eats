'use strict'

//====================================================================================

//==========================jQuery==================================

function btnActive() {

  if ($(window).scrollTop() > $(window).outerHeight())
    $('.button-up').fadeIn(500);
  else
    $('.button-up').fadeOut(500);
};

function ibg() {

  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
};

$(document).ready(function () {
  //==========кнопка скролл вверх================
  btnActive();
  $(window).on('scroll', btnActive);

  $('.button-up').click(function () {
    $('html').animate({
      scrollTop: $('#h').offset().top
    }, 500);
  });
  //===============лист языков

  $('.language-list').mousedown(function () {  //отмена выделение текста
    return false;
  });

  $('html').click(function () {        //скрыть лист языков при клике на документ

    $('.ul').slideUp(100);
    if ($('.language-list__img-2').hasClass('rotate'))
      $('.language-list__img-2').removeClass('rotate');
  });

  $('.language-list').on('click', function () {

    $('.ul').slideToggle(100);
    $('.language-list__img-2').toggleClass('rotate');
    return false;
  });

  $('.ul').on('click', 'p', function () {

    //let $temp = $('.language-active p').text();
    //$('.language-active p').text($(this).text());
    //$(this).text($temp);

    $('.language-active p').insertBefore($(this));
    $(this).prependTo($('.language-active'));
  });
  //========================================================
  $('.main-list__title').on('mousedown', function () {
   return false;
    });

    $('.main-list__title').on('click', function () { 
      if ($(window).outerWidth() > 767) return;

      $('html').animate({
          scrollTop: $(this).offset().top
        }, 300);

      $('.menu').toggleClass('menu-active');
      
    });
  //=====================================================
  $('.menu__list').on('click', '.menu__item', function() {

    event.preventDefault();

    $('.menu__item').each(function() {
      if($(this).hasClass('menu__item_active'))
        $(this).removeClass('menu__item_active') 
    });
    $(this).addClass('menu__item_active');

    $('.main-list__title>h2').html($(this).html());
    
     let href = $(this).attr('href');
     if(href !== undefined && href !== '') {
        $('.main-list__body').each(function() {
        if($(this).hasClass('main-list_active'))
        $(this).removeClass('main-list_active') 
       });
        $(href).addClass('main-list_active');
     }

    if($(window).outerWidth() > 767) return;

    $('.menu').toggleClass("menu-active");

    $('html').animate({
      scrollTop: $('.main-list__title').offset().top
    }, 300);

});

  ibg();

});


/*
document.querySelector(".main-list__title").addEventListener('mousedown', function (event) {

  event.preventDefault();

});

document.querySelector(".main-list__title").addEventListener('click', function () {

  if (document.documentElement.clientWidth > 767) return;

  this.scrollIntoView({ block: "start", behavior: "smooth" });

  document.querySelector(".menu").classList.toggle("menu-active");

});
*/
/*

//===========================================================================================
/*
document.querySelector(".menu__list").addEventListener('click', function (event) {

   let target = event.target.closest('.menu__item');

   if(!target) return;
  
   event.preventDefault();

  for (let li of document.querySelectorAll('.menu__item')) {
    if(li.classList.contains('menu__item_active')) {
         li.classList.remove("menu__item_active");
    }
  };

  target.classList.add("menu__item_active");

  document.querySelector(".main-list__title>h2").innerHTML = target.innerHTML;
  
  let mainList = document.querySelectorAll('.main-list__body');
  
  for(let l of mainList) {
    if(l.classList.contains("main-list_active"))
      l.classList.remove('main-list_active');
  } 

  document.querySelector(target.getAttribute('href')).classList.add('main-list_active');


  if (document.documentElement.clientWidth > 767) return;

  document.querySelector(".menu").classList.toggle("menu-active");

  document.querySelector(".main-list__title").scrollIntoView({ block: "start", behavior: "smooth" });

});
*/
/*

//=============================================================================================
function btnActive() {

    if (pageYOffset > document.documentElement.clientHeight)
       document.querySelector('.button-up').classList.add("button-up-active");
     else
       document.querySelector('.button-up').classList.remove("button-up-active");
};

btnActive();
window.addEventListener('scroll', btnActive);

document.querySelector(".button-up").onclick = function () {

  document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });
}

//===================================================================================

document.querySelector('.language-list').onmousedown = function (event) {
  return false;
}

document.onclick = function (event) {

  if (event.target.closest(".language-list")) return;
 
  if(!document.querySelector('.ul').classList.contains("hidden")) {
    document.querySelector('.ul').classList.add("hidden");
    document.querySelector('.language-list__img-2.rotate').classList.remove("rotate");
  }
}
*/
//================================================================================
/*
document.querySelector(".language-list").onclick = function (event) {

  document.querySelector('.ul').classList.toggle("hidden");
  document.querySelector('.language-list__img-2').classList.toggle("rotate");
}

document.querySelector(".ul").onclick = function (event) {

  let temp = document.querySelector(".language-active").innerHTML;
  document.querySelector(".language-active").innerHTML = event.target.innerHTML;
  event.target.innerHTML = temp;

}

//======================================================================================
function ibg() {
  for(let i of document.querySelectorAll(".ibg img")) {

    let src = i.getAttribute('src');
    i.closest(".ibg").style.backgroundImage = `url( '${src}')`;
    i.src = " ";
  } 
}

ibg();
*/