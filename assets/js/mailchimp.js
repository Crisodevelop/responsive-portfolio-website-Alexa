function showPopup() { 
    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/810c2318c507e153bb91b8fff/0ecf62cbc6b47497c1bc26664.js");
//unsetting the cookie
    document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";                  
    document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
    
document.getElementById("show-popup").onclick = function() { showPopup(); }
