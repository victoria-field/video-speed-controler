
$(document).ready(function() {
  //  changed the step value because its 1 by default
  $("#speedSlider").slider({min:0, max:2, value:1, step:.01,
    change:function(event, ui){
      // to convert the jQuery object to work with the playbackRate DOM function you have to use [0]
      $("#myVideo")[0].playbackRate = ui.value;
    }});



});
