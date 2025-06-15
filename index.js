//JavaScript Document

jQuery(document).ready(function(){
  $(".burger").click(function(){
    $(".menu_bg").show();
    $(".bg_wrap").show();
  });
  $(".cancel").click(function(){
    $(".menu_bg").hide();
  });

});