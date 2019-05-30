
$(document).ready(function () {

    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var imgId = getRandomInt();
    var urlImg = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1080&amp;w=1920)";
    var urlCore = "https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1080&amp;w=1920";


    function is_img(urlCore) {
        var img = document.createElement('img');
        img.src = urlCore;

        img.onload = function() {
            urlImg = "url("+ urlCore +")";
        }
        img.onerror = function() {
            console.log("A imagem " + urlCore + " NAO existe");
        }
    }

    $(".oc").css("background", urlImg);
    $(".oc").css("background-size", "cover");
    
});