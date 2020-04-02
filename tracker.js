var checked = 0;
var last_time;

function get_time_diff () {
    var currDate = new Date();
    var dif = currDate.getTime() - last_time.getTime();
    var TimeInSeconds = Math.abs(dif/1000);

    var MINUTES = Math.floor(TimeInSeconds/60);
    var SECONDS = Math.floor(TimeInSeconds%60);
    var FinalTime = 'Online for: ';

    if (MINUTES != 0)
        FinalTime = FinalTime + MINUTES + ' Minutes, ';
    FinalTime += SECONDS + ' Seconds.';
    console.log(FinalTime);
}

setInterval(function() {
    var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	try {
		var last_seen = document.getElementsByClassName("O90ur")[0].innerText;		
		if (checked === 0) {
		    last_time = new Date(date);
		    console.log(time + ' ' + last_seen);
		    checked = 1;
		}
		if (checked >= 1) checked++;
	}
	catch(err) {
		if (checked > 1) {
			checked = 0;
			console.log(time + ' offline');
			get_time_diff();
			console.log('------------------');
		}
	}
}, 1000);