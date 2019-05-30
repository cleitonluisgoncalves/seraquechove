
$(document).ready(function () {

    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var imgId = getRandomInt();
    var urlImg = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg)";
    var urlCore = "https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg";

    

    function is_img(urlCore) {
        var img = document.createElement('img');
        img.src = urlCore;
    
        img.onload = function() {
            urlImg = "url("+ urlCore +")";
        }
        img.onerror = function() {
            console.log(img.src);
        }
    }

    $(".oc").css("background", urlImg);
    $(".oc").css("background-size", "cover");
    
});