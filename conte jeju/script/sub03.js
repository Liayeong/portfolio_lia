//Java Script Document

jQuery(document).ready(function(){

    setInterval(function(){
        $('.program_slide').delay(5000);
        $('.program_slide').animate({ marginLeft : -1170});
        $('.program_slide').delay(5000);
        $('.program_slide').animate({ marginLeft : -2340});
        $('.program_slide').delay(5000);
        $('.program_slide').animate({ marginLeft : 0});
        $('.program_slide').delay(5000);
    });

    setInterval(function(){
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -1170});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -2340});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -3510});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -4680});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -5850});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : -7020});
        $('.s_programslide').delay(5000);
        $('.s_programslide').animate({ marginLeft : 0});
        $('.s_programslide').delay(5000);
    });


    $('.club_imgbox a:gt(0)').hide();
    setInterval(function(){
        $('.club_imgbox a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.club_imgbox');
    },3000);

});