/**
 * Cookies Banner
 * Cyril Pereira / Extreme-sensio 2014
 */

(function($) {
  var CookiesBanner = function(allElem,option){

    var options = {
      'expires'   :396, // 13 monthes
      'path'      :'/',
      'cookieName':'CookiesBanner',
      'onAccepted':false,
      'onRefused' :false,
      'onReset'   :false,
      'onShow'    :false,
      'onHide'    :false
    };

    var myOptions = option ? $.extend(options,option) : options;

    var init = function(allElem)
    {
      var $allElem = $(allElem);

      $allElem.each(function(elm)
      {
        $this = $(this);
        var opt = myOptions;

        if($this.data('expires'))
          opt.expires = $this.data('expires');
        if($this.data('path'))
          opt.path    = $this.data('path');
        if($this.data('cookiename'))
          opt.cookieName    = $this.data('cookiename');

        var functions = {
          'options':opt,
          'close':function(btn)
          {
            var optCookie = { path:this.options.path,expires: this.options.expires };

            if($(btn).hasClass('accept'))
            {
              this.set('accepted', optCookie);
              if(typeof this.options.onAccepted == 'function')
                this.options.onAccepted();
            }else if($(btn).hasClass('refuse'))
            {
              this.set('refused', optCookie);
              if(typeof this.options.onRefused == 'function')
                this.options.onRefused();
            }

            $this.hide();

            if(typeof this.options.onHide == 'function')
              this.options.onHide();
          },
          'show':function()
          {
            $this.show();
            if(typeof this.options.onShow == 'function')
              this.options.onShow();
          },
          'reset':function()
          {
            $.removeCookie(this.options.cookieName, { path: this.options.path });
            if(typeof this.options.onReset == 'function')
              this.options.onReset();
            return $.cookie(this.options.cookieName);
          },
          'get':function()
          {
            return $.cookie(this.options.cookieName) ? $.cookie(this.options.cookieName) : false;
          },
          'set':function(v, options)
          {
            $.cookie(this.options.cookieName,v, options ? options : {});
            return $.cookie(this.options.cookieName);
          }
        };

        $this.find('.close').click(function(e)
        {
          e.preventDefault();
          functions.close(this);
        });

        $this.data('CookiesBanner',functions);

        if(!$.cookie(opt.cookieName))
        {
          functions.show();
        }else{
          if($.cookie(opt.cookieName)=='accepted' && typeof functions.options.onAccepted == 'function')
          {
            functions.options.onAccepted();
          }else
          if($.cookie(opt.cookieName)=='refused' && typeof functions.options.onRefused == 'function')
          {
            functions.options.onRefused();
          }
        }

      });
    };

    init(allElem);
  };

  $.fn.extend({
    CookiesBanner: function(option){
      if(typeof $.removeCookie == 'undefined')
      {
        console.log('jquery.cookie not found');
        return {};
      }else{
        return new CookiesBanner(this,option);
      }
    }
  });
})(jQuery)
