$(document).ready(function() {
  $(".deleteButton").click(function() {
    $("#deleteBidModal").modal('show');

    var panel = $(this).parents(".panel-group");

    $("#deleteBidButton").off();
    $("#deleteBidButton").click({panel: panel}, function(event) {
      var password = $("input#password").val();
      if (password === "delete") {
        event.data.panel.hide();
      }
      else {
        alert("Sorry, that's not the right password.")
      }

      $("input#password").val("");
    });
  });

  $('.favoriteButton').click(function(){
    $(this).toggleClass('buttonClassB');
  });

});
