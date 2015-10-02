var $discard = $('.option--discard'),
  $save = $('.option--save'),
  $savedToFav = $('.saved'),
  $fsv = $('.fullscreen-view'),
  $panels = $('.app__body .panels');

// FUNCTIONS
var toggleClassDelay = function(el, delay, className) {
  el.addClass(className);
  var timer = setTimeout(function() {
    el.removeClass(className);
  }, delay);
}
var optionChoice = function(option, delay) {
  var $this = $(this);
  if ($('.app__body .panel').length > 1) {
    var $currentPanel = $('.app__body .panel:first');
    $currentPanel.addClass('transition--' + option);
    var timer = setTimeout(function() {
      $currentPanel.remove();
    }, delay);
    if (option === "save") {
      toggleClassDelay($savedToFav, 1000, 'item-saved');
    }
  } else {
    toggleClassDelay($this, 1000, 'option--disabled');
  }
}

// EVENTS - MAIN OPTIONS - SAVE, DISCARD
$discard.on('click', function(e) {
  e.preventDefault();
  optionChoice.call(this, "discard", 500);
});
$save.on('click', function(e) {
  e.preventDefault();
  optionChoice.call(this, "save", 500);
});

// EVENTS - FULLSCREEN PANEL VIEW
$fsv.on('click', '.head__option--close', function(e) {
  e.preventDefault();
  $fsv.toggleClass('show');
  $('.fullscreen-view .panel').remove();
});
$panels.on('click', '.panel--item:first-child', function(e) {
  $(this).clone().appendTo('.fullscreen-view');
  $fsv.toggleClass('show');
  var timer = setTimeout(function() {
    $('.fullscreen-view .panel').addClass('fade-in');
  });
});

