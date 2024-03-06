document.getElementById('submitDate').addEventListener('click', function() {
    var selectedDate = document.getElementById('datepicker').value;
    alert('Selected date: ' + selectedDate);
});

document.getElementById("submitDate").addEventListener("click", function() {
    window.location.href = "flower.html";
});