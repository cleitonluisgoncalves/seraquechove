(function() {
    'use strict';
    $("body").append("<div class='tempo-popup'><div class='content-popup'><span class='fas fa-sun'></span><h3>Fritadeira</h3><h4>Nesse momento,</h4><h5>última atualização 28/12 - 11:00</h5></div><div class='button-popup'><span class='fas fa-meteor'></span></div></div>");
    $(".button-popup").mouseover(function(){
      $(".tempo-popup").css({'right' : '0'});
      $(".button-popup").css({'left' : '0', 'opacity' : '0.0' });
    });
    $(".tempo-popup").mouseleave(function(){
        $(".tempo-popup").css({'right' : '-200px'});
	$(".button-popup").css({'left' : '-35px', 'opacity' : '1' });
    });
})();
var newCSS = GM_getResourceText ("seraquechovestyle");
GM_addStyle (newCSS);
