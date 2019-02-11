import './slider.scss';
import createArrows from './createArrows';

const defaultConfig = {
	arrowParentId: 'slider',
	slideImgClass: 'slide'
};

function AddSlider (config = defaultConfig) {

	class SliderClass {
		constructor(config) {
			this.currentImg = 0;
			this.nodeList = document.querySelectorAll(`.${config.slideImgClass}`);
			this.arrowParent = document.getElementById(config.arrowParentId);
			this.increment = this.increment.bind(this);
			this.decrement = this.decrement.bind(this);
		}

		increment(e) {
			e.stopPropagation();
			let tempCount = this.currentImg + 1;
			this.currentImg = this.setIndexBounds(tempCount);
			this.manageDisplay();
			return this;
		}

		decrement(e) {
			e.stopPropagation();
			let tempCount = this.currentImg - 1;
			this.currentImg = this.setIndexBounds(tempCount);
			this.manageDisplay();
			return this;
		}

		setIndexBounds(num) {
			// Control carousel position cycling at upper and lower limit
			const upperBound = this.nodeList.length - 1;

			if(num < 0) {
				return upperBound;
			}

			if(num > upperBound) {
				return 0;
			}

			return num;
		}

		manageDisplay() {
			[...this.nodeList].forEach((node, i) => {
				i !== this.currentImg ?
					node.style.display = 'none'
					: node.style.display = 'block'
			});

			return this;
		}

		addDomArrows() {
			// function sig: (parentNode, incCallback, decCallback)
			createArrows(this.arrowParent, this.increment, this.decrement);
			return this;
		}

		init() {
			this.addDomArrows().manageDisplay();
		}
	}

	const slider = new SliderClass(config);

	slider.init();
}

export default AddSlider;