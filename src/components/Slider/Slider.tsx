import { FunctionComponent, useEffect, useState } from 'react';

import './Slider.css';

import Circle from '../Circle/Circle';

interface SliderProps {
	elements: { text?: string; image: string }[];
}

const Slider: FunctionComponent<SliderProps> = ({ elements }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (currentIndex + 1 === elements.length) {
				setCurrentIndex(0);
				return;
			}

			setCurrentIndex(currentIndex + 1);
		}, 4000);

		return () => clearInterval(timer);
	}, [currentIndex, elements]);

	return (
		<div className='Slider'>
			<div className='slider-elements'>
				{elements.map((element, index) => (
					<div className={`slider-element ${currentIndex === index ? 'active' : ''}`} key={index}>
						<img src={element.image} alt={`Image for element ${index + 1}`} />

						<p>{element.text}</p>
					</div>
				))}
			</div>

			<div className='slider-controls'>
				{elements.map((_, index) => (
					<Circle
						size='18px'
						color='black'
						empty={currentIndex !== index}
						pointer={true}
						onClick={() => setCurrentIndex(index)}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
