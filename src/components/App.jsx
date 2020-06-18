// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import './../styles/typography.css';
import './../styles/base.css';
// import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';

const App = () => {
	return (
		<Router>
			<div
				css={css`
					width: 100vw;
					height: 100vh;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
				`}>
				<div className="header-container" css={css`flex: 1 1 9%;`}>
					<Route path="/" component={Header} />
				</div>
				<div
					className="main-container"
					css={css`
						flex: 1 1 80%;
						overflow-y: scroll;
					`}>
					<Route path="/" component={Main} />
				</div>
				<div
					className="footer-container"
					css={css`flex: 1 1 11%;`}>
					<Route path="/" component={Footer} />
				</div>
			</div>
		</Router>
	);
};

export default App;
