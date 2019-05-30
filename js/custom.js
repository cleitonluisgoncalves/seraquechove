
$(document).ready(function () {
    function getRandomInt(min, max) {
        min = 1000000
        max = 2000000
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(getRandomInt());
    
    var imgId = getRandomInt();
    var urlImg = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg)";
    var urlCore = "url(https://images.pexels.com/photos/"+ imgId + "/pexels-photo-"+ imgId +".jpeg";

    function checkOnline(url, error, ok) {
        try {
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.onerror = function(){error();};
            scriptElem.onload = function(){ok();};
            scriptElem.src = url;
            document.getElementsByTagName("body")[0].appendChild(scriptElem);
        } catch(err) {
            error(err);
        }
    };
   console.log(checkOnline(urlCore, function() {alert('Fora do ar!')}, function(){alert('Online')}))

    $(".oc").css("background", urlImg);
    $(".oc").css("background-size", "cover");
    
});