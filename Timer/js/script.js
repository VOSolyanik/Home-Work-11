$(function () {
	var	$minutesElement = $('.minutes'),
		$secondsElement = $('.seconds'),
		$milisecondsElement = $('.miliseconds'),
		$startTimerTick = $('.start-tick'),
		$stopTimerTick = $('.stop-tick'),
		$continueTimerTick = $('.continue-tick'),
		timerCounter,
		timer,
		isTick = false;

	function isTimeCorrect(time){
		if(time<10){
			return '0' + time;
		} else{
			return time;
		};
	};

	function startTimer() {
		timer = setInterval(function(){
			var	milisecondsCounter = timerCounter % 100;
				secondsCounter = Math.floor(timerCounter / 100) % 60,
				minutesCounter = Math.floor(timerCounter / 6000) % 60,

			$minutesElement.html(isTimeCorrect(minutesCounter) + ':');
			$secondsElement.html(isTimeCorrect(secondsCounter) + ':');
			$milisecondsElement.html(isTimeCorrect(milisecondsCounter));
			timerCounter++;
			
		}, 10);
	};

	$startTimerTick.on('click', function(event) {
		event.preventDefault();
		if(!isTick){
			timerCounter = 1;
			startTimer();
			isTick = true;
		};		
	});

	$stopTimerTick.on('click', function(event) {
		event.preventDefault();		
		if(isTick){
			clearInterval(timer);
			isTick = false;
		};
	});

	$continueTimerTick.on('click', function(event) {
		event.preventDefault();
		if(!isTick && timerCounter!==undefined){
			startTimer();
			isTick = true;
		};		
	});	
});