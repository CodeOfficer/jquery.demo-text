
// USAGE:
// $('*[data-demo-text]').demoText();
// can be called multiple times and will ignore dups

(function(jQuery) {
	jQuery.fn.demoText = function(action, options) {
		settings = jQuery.extend({
			attribute: "data-demo-text",
			className: "demo-text"
		}, options);
 
		this.each(function() {
			var $element 	= $(this);
			if ($element.data('demoTextInit')) return;
	    var $form     = $element.parents('form');
	    var demo_text = $element.attr(settings.attribute);
			
			// clear demo text before submit if present
	    $form.submit(function(){
	      if ($element.val() == demo_text) {
	        $element.val('');
	      }
	    });

	    if (demo_text != null) {
	      if ($element.val() == '' || $element.val() == demo_text) {
	        $element.val(demo_text);
	        $element.addClass(settings.className);
	      };
	    };
			
			$element.focus(function() {
		    if (demo_text != null) {
		      if ($element.val() == demo_text) {
		        $element.val('');
		        $element.removeClass(settings.className);
		      };
		    };
			});
			
			$element.blur(function() {
		    if (demo_text != null) {
		      if ($element.val() == '') {
		        $element.val(demo_text);
		        $element.addClass(settings.className);
		      };
		    };
			});
			
			$element.data('demoTextInit', true);
		});
 
		return this;
	};
})(jQuery);
