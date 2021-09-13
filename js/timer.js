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
		//****‚±‚±‚Å•`‰æ*****
		document.getElementById("stopwatch_text").innerHTML = t;
		document.title=t;
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
			case 0: //’âŽ~’†
				document.stopwatch_form.stopwatch_button.value = '’âŽ~';
				stopwatchState = 1;
				stopwatchStartTime = new Date();
				stopwatchTimerID = setInterval("setStopWatchText()",10);

				break;
			case 1: //“®ì’†
				if(stopwatchTimerID){
					clearInterval(stopwatchTimerID);
				}
				document.stopwatch_form.stopwatch_button.value = 'ÄŠJ';
				stopwatchState = 0;
				stopwatchTotal = getStopWatchTime();
				break;
		}
	}else if(id == 1){
		stopwatchStartTime = new Date();
		if(stopwatchState == 0){
			document.stopwatch_form.stopwatch_button.value = 'ŠJŽn';
		}
//		document.stopwatch_form.stopwatch_text.value = '	   0.00';
		document.getElementById("stopwatch_text").innerHTML = '0.00';
	stopwatchTotal = 0;
	}
}
