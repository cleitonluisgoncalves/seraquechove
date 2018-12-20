# seraquechove

importar no tampermonkey <br>
<br>
// ==UserScript==<br>
// @name         Será que chove?<br>
// @version      0.1<br>
// @description  try to take over the world!
// @author       Xinote
// @match        http://192.168.13.254/*
// @match        http://192.168.10.254/*
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @resource     seraquechovestyle https://raw.githubusercontent.com/cleitonnudo/seraquechove/master/css/custom.css
// @require      https://raw.githubusercontent.com/cleitonnudo/seraquechove/master/js/custom.js


// ==/UserScript==

var newCSS = GM_getResourceText ("seraquechovestyle");
GM_addStyle (newCSS);
