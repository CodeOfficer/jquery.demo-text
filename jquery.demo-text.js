$(function(){

  $('*[data-demo-text]').each(function(){
    var element = $(this);
    var demo_text = element.attr('data-demo-text');
    var form      = element.parents('form');

    // if we submit the form, make sure to blank out these 
    // fields (if they have the demo text in them)
    form.submit(function(){
      if (element.val() == demo_text) {
        element.val('');
      }
    });

    if (demo_text != null) {
      if (element.val() == '' || element.val() == demo_text) {
        element.val( demo_text );
        element.addClass('demo-text');
      }
    }
  });

  $('*[data-demo-text]').focus(function(){
    var element = $(this);
    var demo_text = element.attr('data-demo-text');
    if (demo_text != null) {
      if (element.val() == demo_text) {
        element.val('');
        element.removeClass('demo-text');
      }
    }
  });

  $('*[data-demo-text]').blur(function(){
    var element = $(this);
    var demo_text = element.attr('data-demo-text');
    if (demo_text != null) {
      if (element.val() == '') {
        element.val( demo_text );
        element.addClass('demo-text');
      }
    }
  });

});
