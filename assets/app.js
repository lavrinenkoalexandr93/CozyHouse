$(document).ready(function(){
    $('.slider').slick();
  });

  $(document).ready(function(){
      $('.nav__toggle').click(function(event){
          $('.nav__toggle,.nav').toggleClass('active');
      });
  });