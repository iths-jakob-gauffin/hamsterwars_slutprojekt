import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink
} from 'react-router-dom';

// Styling
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';

import { colors } from './../styles/colors';

import StartPage from './pages/StartPage/StartPage';

// import ComicHamster from './comic_hamster.svg';
// import Hamster from './hamster.svg';

// import Bild from './testbild.jpg';

const Bilden = () => {
	return (
		<div>
			<img
				src="./hamster.svg"
				alt="hamsterwars icon"
				css={css`
					width: 200px;
					stroke: ${colors.purple3};
				`}
			/>
		</div>
	);
};

const Main = () => {
	return (
		<Fragment>
			{/* <Router> */}
			<Mobile>
				<StyledMainContainer>
					<Switch>
						<Route exact path="/">
							<StartPage />
						</Route>
						<Route path="/test">
							<p css={css`color: ${colors.black3};`}>test</p>
							<NavLink to="/start">
								<button>Klicka</button>
							</NavLink>
						</Route>
						<Route path="/igen" render={() => <h2>Igen</h2>} />
					</Switch>
				</StyledMainContainer>
			</Mobile>
			<Desktop>Desktop or laptop</Desktop>
			{/* <Tablet>Tablet</Tablet> */}
			<Default>
				<StyledMainContainer
					css={css`background-color: ${colors.purple2};`}>
					<h3>Not mobile (desktop or laptop or tablet)</h3>
				</StyledMainContainer>
			</Default>
			{/* </Router> */}
		</Fragment>
	);
};

const StyledMainContainer = styled.main`
	background-color: ${colors.white};
	padding: 1rem .5rem;

	height: 100%;
	overflow: scroll;
	/* align-self: stretch; */
`;

const StyledLogo = styled.div`
	color: ${colors.yellow1};
	text-shadow: 1px 1px ${colors.black1};
`;

export default Main;
