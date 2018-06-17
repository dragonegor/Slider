function spanTransform (x, y, z) {
		var span = document.getElementsByClassName(x);
		if (z[0].style.left == '0%') {
			span[0].style.transformOrigin = 'center';
			span[1].style.transformOrigin = 'center';
			span[0].style.transition = 'all ease 1s';
			span[1].style.transition = 'all ease 1s';
		}
		else {
			span[0].style.transformOrigin = 'left top';
			span[1].style.transformOrigin = 'left bottom';
			span[0].style.transition = 'all ease 1s';
			span[1].style.transition = 'all ease 1s';
		}
	var span2 = document.getElementsByClassName(y);
		if (z[0].style.left == '-200%') {
			span2[0].style.transformOrigin = 'center';
			span2[1].style.transformOrigin = 'center';
			span2[0].style.transition = 'all ease 1s';
			span2[1].style.transition = 'all ease 1s';
		}
		else {
			span2[0].style.transformOrigin = 'right top';
			span2[1].style.transformOrigin = 'right bottom';
			span2[0].style.transition = 'all ease 1s';
			span2[1].style.transition = 'all ease 1s';
		}
}
function swipe(a) {
		if (a.target.id == '') {
		var idBtn = a.target.parentElement.id;
	} else {
		idBtn = a.target.id;
	}
	function swipeLeft() {
		var start = document.getElementsByClassName('list');
		var x;
		if (start[0].style.left == '') {
			x = 0;
		}
		else {
			x = parseInt(start[0].style.left);
		}
		if (x < 0) {
			start[0].style.left = x + 100 + '%';
			start[1].style.left = x + 100 + '%';
			start[0].style.transition = 'all ease 2s';
			start[1].style.transition = 'all ease 2s';
		}  
spanTransform('linel', 'liner', start);
	}

	function swipeRight() {
		var start = document.getElementsByClassName('list');
		var x = parseInt(start[0].style.left);
		if (start[0].style.left == '') {
			x = 0;
		}
		else {
			x = parseInt(start[0].style.left);
		}
		if (x > -200) {
			start[0].style.left = x - 100 + '%';
			start[1].style.left = x - 100 + '%';
			start[0].style.transition = 'all ease 2s';
			start[1].style.transition = 'all ease 2s';
		}
	spanTransform('linel', 'liner', start);
	}
	if (idBtn == 'btnr') {
		swipeRight();
	} else {
		swipeLeft();
	}
}
document.getElementById('btnr').onclick = swipe;
document.getElementById('btnl').onclick = swipe;
