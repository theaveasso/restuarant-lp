import React from 'react';
import { images } from './constants';

import Navbar from './components/Navbar/Navbar';
import {
	Header,
	AboutUs,
	SpecialMenu,
	Chef,
	Laurels,
	Gallery,
	FindUs,
	Footer,
} from './containers';

const App = () => {
	return (
		<div>
			<Navbar />
			<AboutUs />
			<SpecialMenu />
			<Chef />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
};

export default App;
