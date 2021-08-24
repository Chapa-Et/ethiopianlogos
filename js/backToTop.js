window.onscroll = function() {
	if (pageYOffset >= 600) {
		document.getElementById('backToTop').style.visibility = 'visible';
	} else {
		document.getElementById('backToTop').style.visibility = 'hidden';
	}
};

document.getElementById('backToTop').onclick = function() {
	scrollTo(document.body, 0, 0);
};

function scrollTo(element, to, duration) {
	const start = element.scrollTop;
	const change = to - start;
	let currentTime = 0;
	const increment = 20;

	var animateScroll = function() {
		currentTime += increment;
		const val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

// t = current time
// b = start value
// c = change in value
// d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};
