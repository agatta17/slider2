let slides = document.querySelectorAll('.slide-single');
let slider =[];
for (let i=0; i<slides.length; i++) {
	slider[i] = slides[i].src;
	slides[i].remove();
}

let step = 0;

function draw(offset) {
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slide-single');
	img.style.left = offset*256 + 'px';
	document.getElementById('slide').appendChild(img);
	step = (step+1 === slides.length) ? 0 : step+1;
}

function left() {
	document.onclick = null;
	let drawnSlides = document.querySelectorAll('.slide-single');
	let offset = 0;
	for (let i=0; i<drawnSlides.length; i++) {
		drawnSlides[i].style.left = offset*256-256 + 'px';
		offset++;
	}
	window.setTimeout(function() {
    drawnSlides[0].remove();
    draw(1);
    document.onclick = left;
	},1000)
}

draw(0);
draw(1);
document.onclick = left;