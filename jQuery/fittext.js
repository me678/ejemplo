/**
  * jQuery hux rtext 
  *
  * Create a resizible text when the window is resized.
  *
  * @author Neftali Bautista
  * @VERSION 0.0.1
  **/
(function($, undefined){
  $.widget("hux.rtext", {
    "options" : {
      "compress"    : 1, // set the compress
      "origfontsize"  : null // init the font sizes this could be inited by css attr
    },
    "_init" : function(){
      var that = this,
          options = that.options,
          ele = that.element,
          origfontsize = parseFloat(ele.css('font-size'));   // init the font sizes
      that._resize(); // Call once to set.
      $(window).resize(that._resize); // Adding to the resize action.
    },
    "_resize" : function(){
      var that = this,
          options = that.options,
          compress = options.compress,
          origfontsize = options.origfontsize,
          ele = that.element;
      ele.css("font-size", Math.min(ele.width() / (compress * 10), origfontsize));
    }
  });
})(jQuery);