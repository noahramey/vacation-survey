$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var mountainsBeach = parseInt($("#mountains-beach").val());
    var snowSun = parseInt($("#snow-sun").val());
    var insideOutside = parseInt($("#inside-outside").val());
    var budget = parseInt($("#budget").val());
    var siteseeingActivities = parseInt($("#siteseeing-activities").val());

    $("#stregis, #altapura, #lake-tahoe, #himalayas, #maui, #gracebay").hide();

    if (mountainsBeach === 1 && snowSun === 1 && insideOutside === 1) {
      $("#stregis").show();
    }

    if (mountainsBeach === 1 && snowSun === 1 && insideOutside === 2) {
      $("#altapura").show();
    }

    if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 1) {
      $("#lake-tahoe").show();
    }

    if (mountainsBeach === 1 && snowSun === 2 && insideOutside === 2) {
      $("#himalayas").show();
    }

    if (mountainsBeach === 2 && snowSun === 2 && insideOutside === 1) {
      $("#maui").show();
    }

    event.preventDefault();
  });
});
