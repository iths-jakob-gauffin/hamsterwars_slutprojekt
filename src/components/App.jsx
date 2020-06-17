// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
// import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';

// import { colors } from './../styles/colors';
// console.log('OUTPUT ÄR: colors', colors);

const App = () => {
	// const [ hamstersArray, setHamstersArray ] = useState([]);
	// console.log('OUTPUT ÄR: App -> reduxHamsters', reduxHamsters);

	// useEffect(() => {
	// 	console.log('HUVUDAPP UPPDATERAS');
	// 	fetchHamsters();
	// 	// setHamstersArray
	// 	// if (reduxHamsters.length === 0) {
	// 	// 	console.log('den körs');

	// 	// }
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
				<div className="header-container" css={css`flex: 1 1 9%;`}>
					<Route path="/" component={Header} />
				</div>
				<div
					className="main-container"
					css={css`
						flex: 1 1 80%;
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

// const StyledContainer = styled.div`
// 	background-color: ${colors.purple1};
// 	padding: 2rem;
// `;
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

export default App;
