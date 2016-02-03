function sortFunction() {
  debugger;
  var jobValue;


}



$(document).ready(function () {
  $("span.job-title").click(function (event) {
    debugger;
    $("this:contains(100)").css("color", "red");
    sortFunction(this.val());
  });

  $('.favorite').click(function() {
    $(this).addClass('focus');
  });
});
