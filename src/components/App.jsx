import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Redux
import { connect } from 'react-redux';
import { fetchHamsters } from './../redux/actions';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';

import { colors } from './../styles/colors';
// console.log('OUTPUT ÄR: colors', colors);

const App = ({ reduxState, fetchHamsters }) => {
	// useEffect(() => {
	// 	console.log('useeffect körs App, start initialfetch');
	// 	fetchHamsters();
	// }, []);
	// Fetcha hamstrar och lägg in i redux om det inte redan är gjort
	// useEffect(() => {
	// 	if (!fetchedHamsters.length) {
	// 		console.log('den fetchar');
	// 		fetchHamsters();
	// 	} else {
	// 		console.log('nej den rejectar');
	// 	}
	// }, []);

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
				<div
					className="header-container"
					css={css`flex: 1 1 13%;`}>
					<Route path="/" component={Header} />
				</div>
				<div
					className="main-container"
					css={css`
						flex: 1 1 76%;
						/* overflow: scroll; */
						overflow-y: scroll;
					`}>
					<Route path="/" component={Main} />
					{/* <Main /> */}
				</div>
				<div
					className="footer-container"
					css={css`flex: 1 1 11%;`}>
					<Route path="/" component={Footer} />
					{/* <Footer /> */}
				</div>
			</div>
		</Router>
	);
};
// const App = () => {
// 	return (
// 		<div>
// 			<Mobile>
// 				<StyledContainer>
// 					<h1 className="logo-font">Test</h1>
// 				</StyledContainer>
// 			</Mobile>
// 			<Desktop>Desktop or laptop</Desktop>
// 			{/* <Tablet>Tablet</Tablet> */}
// 			<Default>
// 				<StyledContainer
// 					css={css`background-color: ${colors.purple2};`}>
// 					<h3>Not mobile (desktop or laptop or tablet)</h3>
// 				</StyledContainer>
// 			</Default>
// 		</div>
// 	);
// };

const StyledContainer = styled.div`
	background-color: ${colors.purple1};
	padding: 2rem;
`;
// const App = () => {
// 	return (
// 		<div
// 			css={css`
// 				width: 100%;
// 				@media (max-width: 500px) {
// 					background-color: hotpink;
// 					& .logo-font {
// 						font-size: 1em;
// 						color: green;
// 					}
// 				}
// 				background-color: blue;
// 			`}>
// 			<h1 className="logo-font">HAMSTER WARS</h1>
// 			<h1>hej</h1>
// 		</div>
// 	);
// };

const mapStateToProps = state => {
	return {
		reduxState: state
	};
};

export default connect(mapStateToProps, { fetchHamsters })(App);
