var Wolf = (function(Wolf, $){

  function Wolf() {
    console.log('howl');
  }

  return Wolf;

})(window.Wolf || {}, jQuery);

jQuery(document).ready(function(){

  var wolf = new Wolf();

});