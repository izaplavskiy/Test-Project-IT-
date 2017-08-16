
	var clock = $('.counter').FlipClock(88, {
		clockFace: 'Counter',
		countdown: true, 
		minimumDigits: 2
	});

	// setTimeout(function() {
	// 	setInterval(function() {
	// 		clock.decrement();
	// 	}, 1000);
	// });



	function getInterval() {
  var max = 10;
  var min = 1;

  var factor = Math.random() * (max - min) + min;
  
  return factor * 1000;
}


function setVariableTimeout(callback, factor, times)
{
    var internalCallback = function(tick, counter) {
        return function() {
            if (--tick >= 0) {
                window.setTimeout(internalCallback, getInterval());
                callback();
            }
        }
    }(times, 0);

    window.setTimeout(internalCallback, getInterval());
};


setVariableTimeout(function(){ clock.decrement(); }, getInterval(), 88);



// плавный скролл


$('.pointer').click(function(){
       $('html, body').animate({scrollTop:$('#footer').position().top}, 2000);
});