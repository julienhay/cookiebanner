cookiebanner
============

Cookie Banner is a jQuery plugin to help you to manage the French CNIL certification.

GitHub : https://github.com/extreme-sensio/cookiebanner

##Author
Extreme-Sensio 2014

##Documentation

###Installation
~~~
<script type="text/javascript" src="../vendor/jquery.cookie.js"></script>
<script type="text/javascript" src="../source/cookiesbanner.js"></script>
<script type="text/javascript">
  $('#banner').CookiesBanner();
</script>
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
You can call method from the banner.
~~~
$('#banner').data('CookiesBanner').get();         // Get the cookie value
$('#banner').data('CookiesBanner').set('value');  // Set the cookie value
$('#banner').data('CookiesBanner').reset();       // Clear cookie
$('#banner').data('CookiesBanner').show();        // Show banner
$('#banner').data('CookiesBanner').close();       // Hide banner
~~~

####Callback
fire callback when ...
~~~
onAccepted   // if cookie is accepted even after reload page
onRefused    // if cookie is refused even after reload page
onReset      // after call the method reset
onShow       // after the banner is showed
onHide       // after the banner is hidde
~~~
