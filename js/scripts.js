$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var mountainsBeach = parseInt($("#mountains-beach").val());
    var snowSun = parseInt($("#snow-sun").val());
    var insideOutside = parseInt($("#inside-outside").val());
    var budget = parseInt($("#budget").val());
    var siteseeingActivities = parseInt($("#siteseeing-activities").val());
    var name = $("#name").val();
    var question5Answer = $("#question5").val();

    $("#stregis, #altapura, #lake-tahoe, #himalayas, #maui, #gracebay, #snowybeach").hide();

    if (mountainsBeach === 1 && snowSun === 1 && insideOutside === 1) {
      $("#survey").fadeOut();
      $("#stregis").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 1 && snowSun ===1 && insideOutside === 2) {
      $("#survey").fadeOut();
      $("#altapura").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 1) {
      $("#survey").fadeOut();
      $("#lake-tahoe").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 2) {
      $("#survey").fadeOut();
      $("#himalayas").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 2 && snowSun === 2 && insideOutside === 1) {
      $("#survey").fadeOut();
      $("#maui").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 2 && snowSun === 2 && insideOutside === 2) {
      $("#survey").fadeOut();
      $("#gracebay").fadeIn();
      $(".name").text(name);
    } else if (mountainsBeach === 2 && snowSun === 1) {
      $("#survey").fadeOut();
      $("#snowybeach").fadeIn();
      $(".name").text(name);
    }

    event.preventDefault();
  });
});
