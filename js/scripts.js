$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var mountainsBeach = parseInt($("#mountains-beach").val());
    var snowSun = parseInt($("#snow-sun").val());
    var insideOutside = parseInt($("#inside-outside").val());
    var budget = parseInt($("#budget").val());
    var siteseeingActivities = parseInt($("#siteseeing-activities").val());
    var name = $("#name").val();

    $("#stregis, #altapura, #lake-tahoe, #himalayas, #maui, #gracebay").hide();

    if (mountainsBeach === 1 && snowSun === 1 && insideOutside === 1) {
      $("#stregis").show();
      $(".name").text(name);
    }

    if (mountainsBeach === 1 && snowSun === 1 && insideOutside === 2) {
      $("#altapura").show();
      $(".name").text(name);
    }

    if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 1) {
      $("#lake-tahoe").show();
      $(".name").text(name);
    }

    if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 2) {
      $("#himalayas").show();
      $(".name").text(name);
    }

    if (mountainsBeach === 2 && snowSun === 2 && insideOutside === 1) {
      $("#maui").show();
      $(".name").text(name);
    }

    event.preventDefault();
  });
});
