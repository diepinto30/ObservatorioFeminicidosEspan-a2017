$(document).ready(function(){
    $('.icon-chevron-up').click(function(){
        $('body, html').animate({scrollTop: '0px'}, 300);
    });
    
    $(window).scroll(function(){
       if($(this).scrollTop()>0){
          $('.icon-chevron-up').slideDown(300);
          }else{
              $('.icon-chevron-up').slideUp(300);
          } 
    });
    
    var altura = $('#menu').offset().top;
    $(window).scroll(function(){
       if($(this).scrollTop()>altura){
          $('#menu').addClass('menu-fixed');
       }else{
          $('#menu').removeClass('menu-fixed');
       }
    });
    
    var altura = $('#menus').offset().top;
    $(window).scroll(function(){
       if($(this).scrollTop()>altura){
          $('#menus').addClass('menu-fixed');
       }else{
          $('#menus').removeClass('menu-fixed');
       }
    });
           
});