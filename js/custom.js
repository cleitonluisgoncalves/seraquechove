
$(document).ready(function () {
    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(getRandomInt());
    
    var imgId = getRandomInt();
    var urlImg = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg)";
    var urlCore = "https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg";

    function is_img(file) {
        var img = document.createElement('img');
        img.src = file;
    
        img.onload = function() {
            console.log("A imagem " + file + " existe");
        }
        img.onerror = function() {
            console.log("A imagem " + file + " NAO existe");
        }
    
    }
   console.log(is_img(urlCore));

    $(".oc").css("background", urlImg);
    $(".oc").css("background-size", "cover");
    
});