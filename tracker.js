var checked = 0;
var last_time;
var offtime = new Date();
const OnlineLabelClass = "O90ur";  

function get_time_diff(mode) {
    var currDate = new Date();
    if (mode>0) { var dif = currDate.getTime() - last_time.getTime(); }
	else { var dif = currDate.getTime() - offtime.getTime(); }
    var TimeInSeconds = Math.abs(dif/1000);

    var MINUTES = Math.floor(TimeInSeconds/60);
    var SECONDS = Math.floor(TimeInSeconds%60);
    if (mode>0) { var FinalTime = 'Online for: '; }
	else { var FinalTime = ' - back after '; }

    if (MINUTES != 0) { FinalTime = FinalTime + MINUTES + ' Minutes, ';}
    FinalTime += SECONDS + ' Seconds.';
	if (mode>0) {console.log(FinalTime);}
	else {return FinalTime;}
}

setInterval(function() {
    var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	var last_seen = document.getElementsByClassName(OnlineLabelClass);
	if (last_seen.length >0 ) {		
		if (checked === 0) {
		    last_time = new Date(date);
		    console.log(time + ' ' + last_seen[0].innerText + get_time_diff(0));
		    checked = 1;
		}
		if (checked >= 1) checked++;
	}
	else {
		if (checked > 1) {
			offtime = new Date();
			checked = 0;
			console.log(time + ' offline');
			get_time_diff(1);
			console.log('------------------');
		}
	}
}, 1000);