$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#actualName").val();

  $(".postcard-name").text(nameInput);

  $("#postcard").show();

  event.preventDefault();
  });
});
