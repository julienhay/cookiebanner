/**
 * Cookies Banner
 * @author Cyril Pereira / Extreme-sensio 2014
 * @author Antony de Lopez Vallerie / Extreme-sensio 2014
 */

(function($) {
  if (typeof $.removeCookie == 'undefined') {
    throw 'jQuery.cookie is not loaded';
  }

  $.fn.CookiesBanner = function(options) {
    var defaults = {
      'expires'   : 396, // 13 monthes
      'path'      : '/',
      'cookieName':  'CookiesBanner'
    };

    options = $.extend(defaults, options);

    function init(allElem) {
      var $allElem = $(allElem);

      $allElem.each(function(elm) {
        $this = $(this);
        var opt = options;

        if ($this.data('expires'))
          opt.expires = $this.data('expires');
        if ($this.data('path'))
          opt.path    = $this.data('path');
        if ($this.data('cookiename'))
          opt.cookieName    = $this.data('cookiename');

        var optCookie = { path: opt.path, expires: opt.expires };

        function getCookie() {
          return $.cookie(opt.cookieName) ? $.cookie(opt.cookieName) : false;
        }

        function setCookie(v, options) {
          $.cookie(opt.cookieName,v, options ? options : {});
          return $.cookie(opt.cookieName);
        }

        var publicFunctions = {
          accept: function() {
            setCookie('accepted', optCookie);
            $this.trigger('accepted');
            this.close();
          },
          refuse: function() {
            setCookie('refused', optCookie);
            $this.trigger('refused');
            this.close();
          },
          display: function() {
            $this.show();
            $this.trigger('displayed');
          },
          close: function() {
            $this.hide();
            $this.trigger('closed');
          },
          reset: function() {
            $.removeCookie(opt.cookieName, { path: opt.path });
            $this.trigger('reset');
            return $.cookie(opt.cookieName);
          }
        };

        $this.click(function(e) {
          e.preventDefault();

          if ($(e.target).hasClass('accept')) {
            publicFunctions.accept();
          } else if ($(e.target).hasClass('refuse')) {
            publicFunctions.refuse();
          } else if ($(e.target).hasClass('close')) {
            publicFunctions.close();
          }
        });

        $this.data('instance', publicFunctions);

        var status = getCookie();
        if (!status) {
          publicFunctions.display();
        } else {
          if (status == 'accepted') {
            publicFunctions.accept();
          } else if (status == 'refused') {
            publicFunctions.refuse();
          }
        }
      });
    };

    init(this);
    return this;
  };
})(jQuery)
