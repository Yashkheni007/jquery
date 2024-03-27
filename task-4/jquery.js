$(document).ready(function () {
  $("#calculate").on("click", function () {
    var startDate = $("#start-date").val();
    var endDate = $("#end-date").val();

    if (startDate !== "" && endDate !== "") {
      startDate = new Date($("#start-date").val());
      endDate = new Date($("#end-date").val());

      var milliSecondsInDay = 24 * 60 * 60 * 1000;
      var calTotalMilliSeconds = endDate - startDate;
      var totalDays = Math.floor(calTotalMilliSeconds / milliSecondsInDay);

      var years = Math.floor(totalDays / 365);
      var days = totalDays % 365;
      var month = Math.floor(days / 30);
      var days = days % 30;

      $("#result").text(
        "Years : " + years + " , Months : " + month + " , Days : " + days
      );
    } else {
      alert("please enter the date first");
    }
  });
});
