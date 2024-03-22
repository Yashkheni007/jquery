$(document).ready(function () {
  function calculateTip(percentage) {
    var billAmount = parseFloat($("#bill").val());
    var totalPeople = $("#people").val();
    if (billAmount === "") {
      alert("Please enter Bill Amount!");
    }
    if (totalPeople === "" || totalPeople === 0) {
      $("#errorMsg").text("Can't be zero");
    }

    var tipAmount = (billAmount * percentage) / 100;
    var tipPerPerson = tipAmount / totalPeople;
    var totalPerPerson = (billAmount + tipAmount) / totalPeople;

    $("#tipPerPerson").text("₹" + tipPerPerson.toFixed(2));
    $("#totalPerPerson").text("₹" + totalPerPerson.toFixed(2));
  }

  $(".selectTipAmount").on("click", function () {
    var percentage = parseFloat($(this).text());
    calculateTip(percentage);
  });

  $("#reset-btn").on("click", function () {
    $("#bill").val("");
    $("#people").val("");
    $("#errorMsg").val("");
    $(".totalValue").text("₹0.00");
  });
});
