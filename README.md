cookiebanner
============

Cookie Banner is a jQuery plugin to help you to manage the French CNIL certification.

GitHub :

##Author
Extreme-Sensio 2014

##Documentation

###How to use
~~~
$('#banner').CookiesBanner();
~~~

###Options
~~~
var options = {
    'expires'   :396, // 13 monthes
    'path'      :'/',
    'cookieName':'CookiesBanner',
  };
  $('#banner').CookiesBanner(options);
~~~

####Methods
$('#banner').data('CookiesBanner').get();         // Get the cookie value
$('#banner').data('CookiesBanner').set('value');  // Set the cookie value
$('#banner').data('CookiesBanner').reset();       // Clear cookie
$('#banner').data('CookiesBanner').show();        // Show banner
$('#banner').data('CookiesBanner').close();       // Hide banner

####Callback
fire callback when ...
~~~
onAccepted   // if cookie is accepted even after reload page
onRefused    // if cookie is refused even after reload page
onReset      // after call the method reset
onShow       // after the banner is showed
onHide       // after the banner is hidde
~~~
