// wwwroot/js/Calculator.js
$(function () {
    const rate = parseFloat($("#rateInput").val()); // parse string -> number [web:107]

    function showError(message) {
        $("#hoursError").text(message).show();
        $("#totalOutput").val("");
    }

    function clearError() {
        $("#hoursError").hide().text("");
    }

    $("#calcBtn").on("click", function () {
        clearError();

        const rawHours = $("#hoursInput").val();
        const hours = parseFloat(rawHours); // returns NaN if not parseable [web:107]

        if (rawHours === "" || Number.isNaN(hours)) {
            showError("Please enter a number of hours.");
            return;
        }

        if (hours <= 0) {
            showError("Hours must be a positive number.");
            return;
        }

        const total = hours * rate;
        $("#totalOutput").val(total.toFixed(2)); // format to 2 decimals [web:112]
    });
});
