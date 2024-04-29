"use strict";
jQuery(function($) {
  var defaults = {
    layoutInstant: true,
    waitForImages: false
  };

  $(".jqPackery").livequery(function() {
    var $this = $(this),
        opts = $.extend({}, defaults, $this.data()),
        $items;

    $this.one('layoutComplete', function() {
      $this.css('visibility', 'visible');//.hide().fadeIn();
    });

    function finishInit() {
      if (opts.draggable) {
        $items = $($this.packery('getItemElements')).draggable();
        $this.packery( 'bindUIDraggableEvents', $items );
      }
    }

    if (opts.waitForImages) {
      $this.imagesLoaded(function() {
        $this.packery(opts);
        finishInit();
      });
    } else {
      $this.packery(opts);
      finishInit();
    }

  });
});

