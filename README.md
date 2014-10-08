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
$('#banner').data('instance').accept();       // Accept and close banner
$('#banner').data('instance').refuse();       // Refuse and close banner
$('#banner').data('instance').close();        // Only close banner
$('#banner').data('instance').reset();        // Clear cookie
$('#banner').data('instance').display();      // Display banner
~~~

####Events
You can subscribe to events.
~~~
$('#banner').on('accepted', function() {});    // if cookie is accepted even after reload page
$('#banner').on('refused', function() {});     // if cookie is refused even after reload page
$('#banner').on('reset', function() {});       // after reset() is called
$('#banner').on('display', function() {});     // after the banner is displayed
$('#banner').on('closed', function() {});      // after the banner is closed
~~~
