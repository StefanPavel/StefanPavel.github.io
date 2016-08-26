var ld = -1;
var lh = -1;
var lm = -1;
var ls = -1;

$(document).ready(function () {
    var now = new Date();
    var distance = end - now;
    /*ld = Math.floor(distance / _day);
    lh = Math.floor((distance % _day) / _hour);
    lm = Math.floor((distance % _hour) / _minute);
    ls = Math.floor((distance % _minute) / _second);
    */
    showRemaining();
    timer = setInterval(showRemaining, 1000);
});

//var end = new Date('01/01/2017 00:00 AM');// mm/dd/yyyy
var end = new Date('08/30/2016 11:30 AM');// mm/dd/yyyy

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
var first = true;

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
    
    if(first){
        document.getElementById('d').innerHTML = days + 'd ';
        document.getElementById('h').innerHTML = hours + 'h ';
        document.getElementById('m').innerHTML = minutes + 'm ';
        document.getElementById('s').innerHTML = seconds + 's';
        ld = days;
        lh = hours;
        lm = minutes;
        ls = seconds;
        first = false;
        return;
    }
    
    if(ld != days){
        $('#d').animate({top: '0px', opacity: 1}, 200);
        $('#d').animate({top: '60px', opacity: 0}, 400);
        $('#d').animate({top: '-60px'}, 0, function(){
            document.getElementById('d').innerHTML = days + 'd';
        });
        $('#d').animate({top: '0px', opacity: 100}, 400);
        ld = days;
    }        
    
    if(lh >= 0 && lh != hours){
        $('#h').animate({top: '0px', opacity: 1}, 200);
        $('#h').animate({top: '60px', opacity: 0}, 400);
        $('#h').animate({top: '-60px'}, 0, function(){
            document.getElementById('h').innerHTML = hours + 'h';
        });
        $('#h').animate({top: '0px', opacity: 100}, 400);
        lh = hours;
    }
        
    if(lm != minutes){
        $('#m').animate({top: '0px', opacity: 1}, 200);
        $('#m').animate({top: '60px', opacity: 0}, 400);
        $('#m').animate({top: '-60px'}, 0, function(){
            document.getElementById('m').innerHTML = minutes + 'm';
        });
        $('#m').animate({top: '0px', opacity: 100}, 400);
        lm = minutes;
    }
    
    if(ls != seconds){
        $('#s').animate({top: '0px', opacity: 1}, 200);
        $('#s').animate({top: '60px', opacity: 0}, 400);
        $('#s').animate({top: '-60px'}, 0, function(){
            document.getElementById('s').innerHTML = seconds + 's';
        });
        $('#s').animate({top: '0px', opacity: 100}, 400);
        ls = seconds;
    }
}