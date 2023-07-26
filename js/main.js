$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('header').addClass('sticky');
    }
    else{
      $('header').removeClass('sticky');
    }
  });
});
$(document).ready(function(){
  $('.header-taskbar').click(function(){
    $('ul').toggleClass('show')
    $('.btn').toggleClass('show')
  });
});
// window.addEventListener("scroll", function(){
//   var header = this.document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0)
// })