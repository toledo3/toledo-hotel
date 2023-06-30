document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    var currentTime = new Date();
    var timeElement = document.getElementById('localTime');
    var dateElement = document.getElementById('localDate');

    timeElement.textContent = 'Local Time: ' + currentTime.toLocaleTimeString();
    dateElement.textContent = 'Local Date: ' + currentTime.toLocaleDateString();
});
