this.googleOnLoadCallback = ->
  gapi.client.setApiKey require('config.jsenv').GOOGLE_API_BROWSER_APPLICATION_KEY
  gapi.client.load('youtube', 'v3', ->
    angular.element document .ready ->
      angular.bootstrap document, <[app]>
  )

$ !->
  $('body').prepend('<span id="stopwatch" style="position: absolute; color: #EBFF00; z-index: 99999; left: 45%; font-size: 14px; margin-top: 7px; padding: 3px; border-radius: 3px; background: black"></span>')
  ``
/**
 * jquery.timer.js
 *
 * Copyright (c) 2011 Jason Chavannes <jason.chavannes@gmail.com>
 *
 * http://jchavannes.com/jquery-timer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

;(function($) {
	$.timer = function(func, time, autostart) {	
	 	this.set = function(func, time, autostart) {
	 		this.init = true;
	 	 	if(typeof func == 'object') {
		 	 	var paramList = ['autostart', 'time'];
	 	 	 	for(var arg in paramList) {if(func[paramList[arg]] != undefined) {eval(paramList[arg] + " = func[paramList[arg]]");}};
 	 			func = func.action;
	 	 	}
	 	 	if(typeof func == 'function') {this.action = func;}
		 	if(!isNaN(time)) {this.intervalTime = time;}
		 	if(autostart && !this.active) {
			 	this.active = true;
			 	this.setTimer();
		 	}
		 	return this;
	 	};
	 	this.once = function(time) {
			var timer = this;
	 	 	if(isNaN(time)) {time = 0;}
			window.setTimeout(function() {timer.action();}, time);
	 		return this;
	 	};
		this.play = function(reset) {
			if(!this.active) {
				if(reset) {this.setTimer();}
				else {this.setTimer(this.remaining);}
				this.active = true;
			}
			return this;
		};
		this.pause = function() {
			if(this.active) {
				this.active = false;
				this.remaining -= new Date() - this.last;
				this.clearTimer();
			}
			return this;
		};
		this.stop = function() {
			this.active = false;
			this.remaining = this.intervalTime;
			this.clearTimer();
			return this;
		};
		this.toggle = function(reset) {
			if(this.active) {this.pause();}
			else if(reset) {this.play(true);}
			else {this.play();}
			return this;
		};
		this.reset = function() {
			this.active = false;
			this.play(true);
			return this;
		};
		this.clearTimer = function() {
			window.clearTimeout(this.timeoutObject);
		};
	 	this.setTimer = function(time) {
			var timer = this;
	 	 	if(typeof this.action != 'function') {return;}
	 	 	if(isNaN(time)) {time = this.intervalTime;}
		 	this.remaining = time;
	 	 	this.last = new Date();
			this.clearTimer();
			this.timeoutObject = window.setTimeout(function() {timer.go();}, time);
		};
	 	this.go = function() {
	 		if(this.active) {
	 			this.action();
	 			this.setTimer();
	 		}
	 	};
	 	
	 	if(this.init) {
	 		return new $.timer(func, time, autostart);
	 	} else {
			this.set(func, time, autostart);
	 		return this;
	 	}
	};
})(jQuery);
/**
 * jQuery Timer isn't natively a stopwatch, it just helps with
 * building one. Time must be incremented manually.
 *
 * The increment time is in milliseconds, so an input time of
 * 1000 equals 1 time per second.  This example uses an
 * increment time of 70 which is about 14 times per second.
 *
 * The timer function converts the current time to a string
 * and outputs to the stopwatch element, $stopwatch.
 */
window.Example1 = new (function() {

    // Stopwatch element on the page
    var $stopwatch;
    
    // Timer speed in milliseconds
    var incrementTime = 1000;

    // Current timer position in milliseconds
    //var currentTime = 219769000;
    var now_d = new Date();
    var n = now_d.getTime();
    
    var d = new Date(2014,3,22,11,00);
    var currentTime = n - d.getTime();
 
    // Start the timer
    $(function() {
        Example1.Timer = $.timer(updateTimer, incrementTime, true);  
    });

    // Output time and increment
    function updateTimer() {
        var timeString = formatTime(currentTime);
console.log(timeString);
        $stopwatch = $('#stopwatch');
        $stopwatch.html(timeString);
        currentTime += incrementTime;
    }

    // Reset timer
    this.resetStopwatch = function() {
        currentTime = 0;
        Example1.Timer.stop().once();
    };

});

// Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    time = time / 10;
    var hours = parseInt(time / (6000*60) ),
        min = parseInt(time / 6000) - (hours * 60),
        sec = parseInt(time / 100) - (hours * 3600) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    //return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
    return '林義雄先生禁食 ' + hours + " 小時 " + (min > 0 ? pad(min, 2) : "00") + " 分鐘 " + pad(sec, 2) + " 秒";
}
  ``
