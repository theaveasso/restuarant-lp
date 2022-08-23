import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<section id='about' className='flex__center app__bg app__aboutus'>
			<div className='app__about-overlay flex__center'>
				<img src={images.G} alt='letter-g' />
			</div>

			<div className='app__about-content flex__center'>
				<div className='app__about-content-aboutus'>
					<h1 className='headtext__poppins'>About Us</h1>
					<img
						className='spoon__img-reverse'
						src={images.spoon}
						alt='spoon'
					/>
					<p className='p__inter'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quis pharetra adipiscing ultrices vulputate posuere
						tristique. In sed odio nec aliquet eu proin mauris et.
					</p>
					<button className='custom__button'>Know More</button>
				</div>
				<img
					className='app__about-knife flex__center'
					src={images.knife}
					alt='knife'
				/>
				<div className='app__about-content-history'>
					<h1 className='headtext__poppins'>Our History</h1>
					<img src={images.spoon} alt='spoon' />
					<p className='p__inter'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quis pharetra adipiscing ultrices vulputate posuere
						tristique. In sed odio nec aliquet eu proin mauris et.
					</p>
					<button className='custom__button'>Know More</button>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
