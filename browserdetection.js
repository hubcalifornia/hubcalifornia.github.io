function detectBrowser() {
    var ua = window.navigator.userAgent; 
    var msie = ua.indexOf('MSIE '); 
    if (msie > 0) { 
        // IE 10 or older, return version number 
        return ('IE ' + parseInt(ua.substring( 
          msie + 5, ua.indexOf('.', msie)), 10)); 
    } 
    var trident = ua.indexOf('Trident/'); 
    if (trident > 0) { 
        // IE 11, return version number 
        var rv = ua.indexOf('rv:'); 
        return ('IE ' + parseInt(ua.substring( 
          rv + 3, ua.indexOf('.', rv)), 10)); 
    } 
    var edge = ua.indexOf('Edge/'); 
    if (edge > 0) { 
        //Edge (IE 12+), return version number 
        return ('IE ' + parseInt(ua.substring( 
          edge + 5, ua.indexOf('.', edge)), 10)); 
    } 
    // User uses other browser 
    return ('Not IE'); 
}

function detectMobile() {
    if (typeof window.orientation !== 'undefined') { return true }
}

var msg = document.getElementById("msg");


if(detectMobile()){
    document.getElementById("container").innerHTML = "<iframe width='760px' height='500px' src='https://sway.office.com/s/obEqE7mN7GHftVr1/embed' frameborder='0' marginheight='0' marginwidth='0' max-width='100%' sandbox='allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts' scrolling='no' style='border: none; max-width: 100%; max-height: 100vh' allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>";
}
else if(detectBrowser() != "Not IE"){
    document.getElementById("container").innerHTML = "<div id='msg'><img src='HUB-Vertical-Full-Colour-RGB_lr.jpg' id='hublogo'><p>This page is not viewable in your current browser. Please open this page in one of the supported desktop browsers below. Our apologies for the inconvenience.</p><ul><li><a href='https://www.google.com/chrome/browser/desktop/'>Chrome</a></li><li><a href='https://www.mozilla.org/en-US/firefox/52.0/releasenotes/'>Firefox 64 bit</a></li><li><a href='https://www.microsoft.com/en-us/windows/microsoft-edge'>Edge</a></li><li><a href='https://support.apple.com/downloads/safari'>Safari</a></li></ul></div>";

}
else{
    document.getElementById("container").innerHTML = "<iframe src='https://prezi.com/p/gf9ieqssrexe/embed/' id='iframe_container' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='' allow='autoplay; fullscreen'></iframe>"
}