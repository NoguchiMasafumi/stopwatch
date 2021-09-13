var stopwatchStartTime;
var stopwatchState = 0;
var stopwatchTotal = 0;
var stopwatchTimerID = 0;
function setStopWatchText()
{
	if(stopwatchState == 1){
		var time = getStopWatchTime();
		var t = String(parseInt(time / 10));
		while(t.length < 3){
			t = '0' + t;
		}
		while(t.length < 10){
			t = ' ' + t;
		}
		t = t.substr(0,t.length-2) + '.' + t.substr(t.length-2,2);
//		document.stopwatch_form.stopwatch_text.value = t;
		//****Ç±Ç±Ç≈ï`âÊ*****
		document.getElementById("stopwatch_text").innerHTML = t;
		document.title=t;
//		if(document.stopwatch_form.stopwatch_limit_check.checked && parseInt(document.stopwatch_form.stopwatch_limit_text.value)){
//			if(time > document.stopwatch_form.stopwatch_limit_text.value * 1000){
//				document.stopwatch_form.stopwatch_limit_check.checked = false;
//				window.focus();
//				alert(document.stopwatch_form.stopwatch_limit_text.value + 'ïbåoâﬂÇµÇ‹ÇµÇΩ')
//			}
//		}
	}

}
function getStopWatchTime()
{
	var temp = new Date();
	return (temp - stopwatchStartTime) + stopwatchTotal;
}
function stopwatch_click(id)
{
	if(id == 0){
		switch(stopwatchState){
			case 0: //í‚é~íÜ
				document.stopwatch_form.stopwatch_button.value = 'í‚é~';
				stopwatchState = 1;
				stopwatchStartTime = new Date();
				stopwatchTimerID = setInterval("setStopWatchText()",10);

				break;
			case 1: //ìÆçÏíÜ
				if(stopwatchTimerID){
					clearInterval(stopwatchTimerID);
				}
				document.stopwatch_form.stopwatch_button.value = 'çƒäJ';
				stopwatchState = 0;
				stopwatchTotal = getStopWatchTime();
				break;
		}
	}else if(id == 1){
		stopwatchStartTime = new Date();
		if(stopwatchState == 0){
			document.stopwatch_form.stopwatch_button.value = 'äJén';
		}
//		document.stopwatch_form.stopwatch_text.value = '	   0.00';
		document.getElementById("stopwatch_text").innerHTML = '0.00';
	stopwatchTotal = 0;
	}
}
