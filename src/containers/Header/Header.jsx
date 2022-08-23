import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images, mealmp4 } from '../../constants';
import './Header.css';

const Header = () => {
	const vidRef = useRef();
	return (
		<section id='home' className='app__header'>
			<video
				src={mealmp4}
				ref={vidRef}
				autoPlay
				loop
				muted
				type='video/mp4'
			/>
			<div className='app__bg-video-overlay' />
			<div className='app__header-info'>
				<p className='p__poppins'>Chase The New Flavour</p>
				<img className='spoon__img' src={images.spoon} alt='' />
				<h1>The Key to Fine Dining</h1>
				<p>
					Sit tellus lobortis sed senectus vivamus molestie. Sit
					tellus lobortis sed senectus vivamus molestie. Condimentum
					volutpat morbi facilisis quam scelerisque sapien.
				</p>
				<button className='app__' type='button'>
					Explore Menu
				</button>
			</div>
		</section>
	);
};

export default Header;
