/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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

import { colors } from './../styles/colors';
import { links } from './../utilities/links';

import StartPage from './pages/StartPage/StartPage';
import BattlePage from './pages/BattlePage/BattlePage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import SpecificBattlePage from './pages/SpecificBattlePage/SpecificBattlePage';
import UploadPage from './pages/UploadPage/UploadPage';
import MatchupResultsPage from './pages/MatchupResultsPage/MatchupResultsPage';

const Main = ({ reduxHamsters, fetchHamsters }) => {
	const [ updateRedux, setUpdateRedux ] = useState(false);

	useEffect(() => {
		fetchHamsters();
	}, []);

	// updateRedux ändras nere i UploadPage när någon ny hamster lagts till. Updateredux blir true och redux fetchar en ny lista och därmed ett nytt id, om man direkt vill lägga till en ny hamster. Samt att andra listor uppdateras nu när den nya användaren är tillagd.
	useEffect(
		() => {
			const updateReduxFn = async () => {
				await fetchHamsters();
				setUpdateRedux(false);
			};
			updateReduxFn();
		},
		[ updateRedux ]
	);

	return (
		<Fragment>
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
					</Switch>
				</StyledMainContainer>
			</Mobile>
			<Desktop>Main</Desktop>
			<Default>
				<StyledMainContainer
					css={css`background-color: ${colors.purple2};`}>
					<h3>
						Jag har haft en mobile-first-approach och hann inte
						göra sidan desktopanpassad. <br />
						<br />Kolla gärna in min sida i mobile-view.
						(Ctrl+Shift+M på windows) <br />
						<br />
						Extra info: När jag utvecklat sidan har jag haft
						viewport 378px x 740px om du vill se den som jag
						har sett den.
					</h3>
				</StyledMainContainer>
			</Default>
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
`;

const mapStateToProps = state => {
	return {
		reduxHamsters: state
	};
};

export default connect(mapStateToProps, { fetchHamsters })(Main);
