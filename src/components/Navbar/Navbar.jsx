import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.css';
import App from '../../App.css';
import dummyData from '../../constants/dummyData';
import { MdMenu, MdClose } from 'react-icons/md';
const Navbar = () => {
	const { sections, CTA } = dummyData;

	const [toggle, setToggle] = useState(false);
	const [isActive, setIsActive] = useState('home');

	console.log(isActive);
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={images.gericht} alt='restuarant-logo' />
			</div>

			<ul className='app__navbar-links'>
				{sections.map((section) => (
					<li key={section.id}>
						<a href={`#${section.id}`}>{section.title}</a>
					</li>
				))}
			</ul>

			<ul className='app__navbar-cta'>
				{CTA.map((item) => (
					<div className='app__navbar-cta-container'>
						<li
							key={item.id}
							onClick={() => setIsActive(item.title)}
						>
							<a classname='p__poppins' href={`#${item.id}`}>
								{item.title}
							</a>
						</li>
					</div>
				))}
			</ul>

			<div className='app__navbar-smallscreen'>
				<MdMenu
					size={24}
					color={'white'}
					onClick={() => setToggle((prevToggle) => !prevToggle)}
					className='app__navbar-smallscreen-menuicon'
				/>
				{toggle && (
					<div className='app__navbar-smallscreen-links_overlay slide-bottom'>
						<MdClose
							size={24}
							className='overlay__close'
							onClick={() =>
								setToggle((prevToggle) => !prevToggle)
							}
						/>
						<ul className=''>
							{sections.map((section) => (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										onClick={() =>
											setToggle(
												(prevToggle) => !prevToggle
											)
										}
									>
										{section.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
