const createArrows = (parentNode, incCallback, decCallback) => {
	// Set parent position to relative, allowing non-static positioning of children to work
	parentNode.style.position = 'relative';

	// Assemble a container div for the left and right arrow elements
	const arrowBar = document.createElement('div');
	arrowBar.classList.add('arrow-bar');

	// Assemble arrow divs and attach listeners to handle slide logic
	const leftArrow = document.createElement('div');
	leftArrow.classList.add('arrow', 'arrow-left');

	leftArrow.addEventListener('click', decCallback);

	const rightArrow = document.createElement('div');
	rightArrow.classList.add('arrow', 'arrow-right');

	rightArrow.addEventListener('click', incCallback);

	// Assemble output div and attach to DOM
	arrowBar.appendChild(leftArrow);
	arrowBar.appendChild(rightArrow);
	parentNode.appendChild(arrowBar);
};

export default createArrows;