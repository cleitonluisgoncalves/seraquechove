(function() {
    'use strict';
    $("body").append("<div class='tempo-popup'><div class='content-popup'><span class='fas fa-cloud'></span><h3>Nublado</h3><h4>Nesse momento,</h4><h5>última atualização 20/12 - 15:00</h5></div><div class='button-popup'><span class='fas fa-meteor'></span></div></div>");
    $(".button-popup").mouseover(function(){
      $(".tempo-popup").css('right','0');
    });
    $(".tempo-popup").mouseleave(function(){
        $(".tempo-popup").css('right','-200px');
    });
})();
var newCSS = GM_getResourceText ("seraquechovestyle");
GM_addStyle (newCSS);
