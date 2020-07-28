function scrollMoz() {
	scroll.value = 3;
}
var images = document.getElementById('header_slider');
var sliderR = document.getElementById('slider_right');
sliderR.onclick = sliderRight;
function sliderRight() {
	if (images.firstElementChild.outerHTML == '<img src="img/background_header_2.png">') {
		images.innerHTML = '<img src="img/background_header_1.png">';
	}
	else {
		images.innerHTML = '<img src="img/background_header_2.png">';
	}
}
var sliderL = document.getElementById('slider_left');
sliderL.onclick = sliderLeft;
function sliderLeft() {
	if (images.firstElementChild.outerHTML == '<img src="img/background_header_2.png">') {
		images.innerHTML = '<img src="img/background_header_1.png">';
	}
	else {
		images.innerHTML = '<img src="img/background_header_2.png">';
	}
}
sliderL.onmouseenter = onSliderL;
function onSliderL() {
	sliderL.style.boxShadow = "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3)";
}
console.log(sliderL.style.boxShadow);
sliderL.onmouseleave = offSliderL;
function offSliderL() {
	sliderL.style.boxShadow = "none";
}
sliderR.onmouseenter = onSliderR;
function onSliderR() {
	sliderR.style.boxShadow = "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3)";
}
sliderR.onmouseleave = offSliderR;
function offSliderR() {
	sliderR.style.boxShadow = "none";
}
var scroll = document.getElementById('scroll');
scroll.oninput = function () {
	var widgetline = document.getElementById('widgetline');
	if (scroll.value == 2) {
		widgetline.style.left = -334 + 'px';
	}
	else if (this.value == 1) {
		widgetline.style.left = -668 + 'px';
	}
	else if (this.value == 3) {
		widgetline.style.left = 0 + 'px';
	}
}
var datelLine = document.getElementById('datelLine');
var date = new Date();
datelLine.innerHTML = date.getDate();
var monthLine = document.getElementById('monthLine');
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
monthLine.innerHTML = month[date.getMonth()];
var input = document.getElementById('inputTwitter');
input.oninput  = function () {
	if (input.value.length <= '140') {
		counter.innerHTML = 'character limit:' + (140 - input.value.length);
	}
	else {
		counter.innerHTML = 'character limit exceeded by: ' + (input.value.length - 140);
	}
}
var button = document.querySelector('button');
var counter = document.getElementById('counter');
var tweetWindow = document.getElementById('tweetWindow');
var popup = document.getElementsByClassName('popupTweet');
var tweetNum = 0;
var key = 0;
var j = 0;
button.onclick = function () {
	if (input.value.length <= '140') {
		if (tweetWindow.children.length == 0) {
			var popupTweet = document.createElement('div');
			popupTweet.className = "popupTweet";
			tweetWindow.append(popupTweet);
			popupTweet.style.marginTop = 0 + 'px';
			var max = 25;
			var margin = 0;
			function move () {
				if (margin <= max ) {
					popupTweet.style.marginTop = margin + 'px';
					margin++;
				}
				else {
					clearInterval(timer);
				}
			}
			var timer = setInterval(move, 4);
			tweetNum++;
			popupTweet.innerHTML = input.value + ' #'+ tweetNum;
			input.value = '';
			counter.innerHTML = 'character limit: 140';
		}
		else if (tweetWindow.children.length > 0 && tweetWindow.children.length <= 2) {
			var delay = setInterval(cycle, 200);
			function cycle () {
				if (j < popup.length) {
					var computedStyle = getComputedStyle(popup[j]);
					var margin = parseInt(computedStyle.marginTop);
					var max = margin + 50;
					var block = (popup[j]);
					var timer = setInterval (move, 4);	
					function move () {
						if (margin === max) {
							clearInterval(timer);
						}
						else {
							margin++;
							block.style.marginTop = margin + 'px';
						}
					}
					j++;
				}
				else {
					clearInterval(delay);
					j = 0;
				}
			}
			function nextPopup () {
				var popupTweet = document.createElement('div');
				popupTweet.className = "popupTweet";
				tweetWindow.append(popupTweet);
				popupTweet.style.marginTop = 0 + 'px';
				var max = 25;
				var margin = 0;
				function move () {
					if (margin <= max ) {
						popupTweet.style.marginTop = margin + 'px';
						margin++;
					}
					else {
						clearInterval(timer);
					}
				}
				var timer = setInterval(move, 4);
				tweetNum++;
				popupTweet.innerHTML = input.value + ' #'+ tweetNum;
				input.value = '';
				counter.innerHTML = 'character limit: 140';
			}
			setTimeout(nextPopup, 700);
		}
		else if (tweetWindow.children.length > 2) {
			var delay = setInterval(cycle, 200);
			function cycle () {
				if (j < popup.length) {
					var computedStyle = getComputedStyle(popup[j]);
					var margin = parseInt(computedStyle.marginTop);
					var max = margin + 50;
					var block = (popup[j]);
					var timer = setInterval (move, 4);
					function move () {
						if (margin === max) {
							clearInterval(timer);
						}
						else {
							margin++;
							block.style.marginTop = margin + 'px';
						}
					}
					j++;
				}
				else {
					clearInterval(delay);
					j = 0;
				}
			}
			function nextPopup () {
				popup[key].remove();
				var popupTweet = document.createElement('div');
				popupTweet.className = "popupTweet";
				tweetWindow.append(popupTweet);
				popupTweet.style.marginTop = 0 + 'px';
				var max = 25;
				var margin = 0;
				function move () {
					if (margin <= max ) {
						popupTweet.style.marginTop = margin + 'px';
						margin++;
					}
					else {
						clearInterval(timer);
					}
				}
				var timer = setInterval(move, 4);
				tweetNum++;
				popupTweet.innerHTML = input.value + ' #'+ tweetNum;
				input.value = '';
				counter.innerHTML = 'character limit: 140';
			}
			setTimeout(nextPopup, 900);
		}
	}
	else {
		alert('Character limit exceeded!');
	}
}