
$(document).ready(function () {
    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(getRandomInt());
    
    var imgId = getRandomInt();
    var urlImg = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg)";

    $(".oc").css("background", urlImg);
    
});