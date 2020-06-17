/* eslint-disable react-hooks/exhaustive-deps */
import Redux, { useState, useEffect, Fragment } from 'react';
import {
	// BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchHamsters } from './../redux/actions';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Mobile, Default } from './../styles/MediaQuerys';
// import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';

import { colors } from './../styles/colors';
import { links } from './../utilities/links';

import StartPage from './pages/StartPage/StartPage';

import BattlePage from './pages/BattlePage/BattlePage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import SpecificBattlePage from './pages/SpecificBattlePage/SpecificBattlePage';
import UploadPage from './pages/UploadPage/UploadPage';
import CupPage from './pages/CupPage/CupPage';
import MatchupResultsPage from './pages/MatchupResultsPage/MatchupResultsPage';

const Main = ({ reduxHamsters, fetchHamsters }) => {
	console.log('OUTPUT ÄR: Main -> reduxHamsters', reduxHamsters);
	const [ updateRedux, setUpdateRedux ] = useState(false);
	console.log('OUTPUT ÄR: Main -> updateRedux', updateRedux);
	useEffect(() => {
		console.log('MAIN UPPDATERAS, REDUXHUVUDET');
		fetchHamsters();
	}, []);

	// updateRedux ändras nere i UploadPage när någon ny hamster lagts till. Updateredux blir true och redux fetchar en ny lista och därmed ett nytt id, om man direkt vill lägga till en ny hamster. Samt att andra listor uppdateras nu när den nya användaren är tillagd.
	useEffect(
		() => {
			console.log('updateReduxUseEffect körs');
			// if (updateRedux) {
			const updateReduxFn = async () => {
				console.log(
					'updateReduxUseEffect den ser att det är sant'
				);
				await fetchHamsters();
				setUpdateRedux(false);
			};
			updateReduxFn();
			// }
		},
		[ updateRedux ]
	);

	// console.log('msdalksmdlas', reduxHamsters);
	return (
		<Fragment>
			{/* <Router> */}
			<Mobile>
				<StyledMainContainer>
					<Switch>
						<Route exact path="/" component={StartPage} />
						<Route
							path="/battle/:id1/:id2"
							component={SpecificBattlePage}
						/>
						<Route path="/battle" component={BattlePage} />
						<Route path="/stats" component={StatisticsPage} />
						<Route
							path={links.matchupResult}
							component={MatchupResultsPage}
						/>
						<Route path="/matchup">
							<Redirect to={links.matchupResult} />
						</Route>
						<Route path="/upload">
							<UploadPage
								reduxHamsters={reduxHamsters}
								setUpdateRedux={setUpdateRedux}
								updateRedux={updateRedux}
							/>
						</Route>
						<Route path="/cup" component={CupPage} />
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
	padding: 1rem 1rem;

	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* overflow: scroll; */
	/* align-self: stretch; */
`;

// const StyledLogo = styled.div`
// 	color: ${colors.yellow1};
// 	text-shadow: 1px 1px ${colors.black1};
// `;

const mapStateToProps = state => {
	console.log('OUTPUT ÄR: state i main', state);
	return {
		reduxHamsters: state
	};
};

export default connect(mapStateToProps, { fetchHamsters })(Main);
