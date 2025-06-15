
jQuery(document).ready(function(){

    $('.slide a:gt(0)').hide();
    setInterval(function(){
      $('.slide a:first-child')
      .fadeOut(1000)
      .next('a')
      .fadeIn(1000)
      .end()
      .appendTo('.slide');
    },3000);
});
