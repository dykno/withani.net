function openNav() {
	document.getElementById("sidebar").style.width = "300px";
};

function closeNav() {
	document.getElementById("sidebar").style.width = "0px";
};

window.onload=function() {

	// Set up sidebar listeners
	document.getElementById("menu-icon").addEventListener("click", openNav, false);
	document.getElementById("closebtn").addEventListener("click", closeNav, false);

	$(document).ready(function(){
	// for each content class
	$(".content").each(function() {
		// check if our mouse is over the div
		$(this).mouseover(function (){
			// if the wheel scrolls
			$(this).on('wheel', function (e){

				// get the direction of the wheel scroll
				var delta = e.originalEvent.deltaY;

				// scroll down
				if (delta > 0) {
					// check if we are on the last div
					// if we are we should not continue to scroll
					if ($(this).next().length != 0) {
						// slide the active div up to reveal the next div
						$(this).css('transform', 'translateY(-100%)');
					}
				// scroll up
				} else {
					// find the previous div and slide it down on top of current
					$(this).prev().css('transform', 'translateY(0%)');
				}		
			})
		})

		// check if we have a touch event over the div
		$(this).on('touchstart', function(e) {
			// get where the touch started
			var touchStart = e.originalEvent.touches,
			start = touchStart[0].pageY;

			$(this).on('touchmove', function(e) {
				// get where the touch moved to
				var contact = e.originalEvent.touches,
				end = contact[0].pageY,
				distance = end-start;

				// swipe up
				if (distance < -30) {
					// check if we are on the last div
					// if we are we should not continue to scroll
					if ($(this).next().length != 0) {
						// slide the active div up to reveal the next div
						$(this).css('transform', 'translateY(-100%)');
					}
				}
				//swipe down
				if (distance > 30) {
					// find the previous div and slide it down on top of current
					$(this).prev().css('transform', 'translateY(0%)');
				}
			}).on('touchend', function() {
				$(this).off('touchmove touchend')
			})

		})
	})
})

}



//console.log(document.getElementsByClassName("content"));