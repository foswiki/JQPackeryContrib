"use strict";
jQuery(function($) {
  var defaults = {
    waitForImages: true
  };

  $(".jqPackery:not(.jqPackeryInited)").livequery(function() {
    var $this = $(this),
        opts = $.extend({}, defaults, $this.data()),
        $items;

    $this.one('layoutComplete', function() {
      $this.css('visibility', 'visible');//.hide().fadeIn();
    });

    if (opts.waitForImages) {
      $this.imagesLoaded(function() {
        $this.packery(opts);
      });
    } else {
      $this.packery(opts);
    }

    if (opts.draggable) {
      $items = $($this.packery('getItemElements')).draggable();
      $this.packery( 'bindUIDraggableEvents', $items );
    }

    $this.addClass("jqPackeryInited");
  });
});

