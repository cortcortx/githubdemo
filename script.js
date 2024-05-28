$(document).ready(function () {

  $(".btn-primary").click(function () {
   
    var destination = $(this).closest(".card").find("h3").text();

    $(".modal-title").text(destination);
    $("#modal-content").html(
      "More information about " + destination + " goes here."
    );
  });
});
