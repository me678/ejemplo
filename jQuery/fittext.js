/**
  * jQuery hux fittext
  * 
  * Create a resizible text.
  * 
  * @author Neftali Bautista
  * @VERSION 0.0.1
  **/
(function($, undefined){
  $.widget("hux.fittext", {
    'options' : {
      'compressor'    : 1, // set the compressor
      'origFontSize'  : null // init the font sizes this could be inited by css attr
    },
    '_init' : function(){
      var that = this,
          options = that.options,
          ele = that.element,
          origFontSize = parseFloat(ele.css('font-size'));   // init the font sizes
      that._resize(); // Call once to set.
      $(window).resize(that._resize); // Call on resize. Opera debounces their resize by default.
    },
    '_resize' : function(){
      var that = this,
          options = that.options,
          compressor = options.compressor,
          origFontSize = options.origFontSize,
          ele = that.element;
      ele.css('font-size', Math.min(ele.width() / (compressor * 10), origFontSize));
    }
  });
})(jQuery);