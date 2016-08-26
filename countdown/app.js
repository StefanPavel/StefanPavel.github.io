$(document).ready(function () {
    showRemaining();
    timer = setInterval(showRemaining, 1000);
});

var end = new Date('01/01/2017 00:00 AM');// mm/dd/yyyy

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('d').innerHTML = '0d ';
        document.getElementById('h').innerHTML = '0h ';
        document.getElementById('m').innerHTML = '0m ';
        document.getElementById('s').innerHTML = '0s';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('d').innerHTML = days + 'd ';
    document.getElementById('h').innerHTML = hours + 'h ';
    document.getElementById('m').innerHTML = minutes + 'm ';
    document.getElementById('s').innerHTML = seconds + 's';
}