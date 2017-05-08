'use strict';
$(document).ready(function(){

  $('.nav-toggle').click(function() {
    $('body').toggleClass('show-nav');
  });

  // Toggles display of projects in work menu
  $('#primary-nav li:not(.open) ul').hide();
//  $('#primary-nav li ul').parent().find('a').click(function(event){
  $('#primary-nav .group a').click(function(event){
    $(this).parent().toggleClass('open');

    var target = $(this).next();
    var htmlType = target.prop('tagName');

    if(htmlType === 'UL'){
      event.preventDefault();
      target.slideToggle('slow');
    }
  });
  });
