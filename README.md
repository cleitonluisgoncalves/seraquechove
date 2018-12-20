# seraquechove

importar no tampermonkey <br>
<br>
// ==UserScript==<br>
// @name         Será que chove?<br>
// @version      0.1<br>
// @description  try to take over the world!<br>
// @author       Xinote<br>
// @match        http://192.168.13.254/*<br>*/
// @match        http://192.168.10.254/*<br>*/
// @grant        GM_getResourceText<br>
// @grant        GM_getResourceURL<br>
// @grant        GM_addStyle<br>
// @require      http://code.jquery.com/jquery-3.3.1.min.js<br>
// @resource     seraquechovestyle https://raw.githubusercontent.com/cleitonnudo/seraquechove/master/css/custom.css<br>
// @require      https://raw.githubusercontent.com/cleitonnudo/seraquechove/master/js/custom.js<br>
<br>
<br>
// ==/UserScript==<br>
<br>
var newCSS = GM_getResourceText ("seraquechovestyle");<br>
GM_addStyle (newCSS);<br>
<br>
