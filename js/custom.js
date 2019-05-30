
$(document).ready(function () {
    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(getRandomInt());
    
    $(".oc").css("background", "url(https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg)");
    $(".oc").css("background-size", "cover");
});