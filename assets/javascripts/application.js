$(document).ready(function() {
  $('#btn-submit').addClass('disabled');
  $('#focusedInput').keyup(function() {
    if($(this).val() != '') {
      $('#btn-submit').removeClass('disabled');
    }else{
      $('#btn-submit').addClass('disabled');
    }
  });
});
