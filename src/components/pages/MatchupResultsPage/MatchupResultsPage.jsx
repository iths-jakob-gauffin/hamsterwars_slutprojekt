import React, { useEffect, useState, Fragment } from 'react';
import { useParams, history, Redirect } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { getAllGames } from './../../../api/getAllGames';

// import { resultsDummy } from './resultsDummy';
import { MatchupBox } from './MatchupBox';

// import { MatchupStatsRow } from './MatchupStatsRow'
import { MatchupStatsBox } from './MatchupStatsBox';

const MatchupResultsPage = ({ history }) => {
	// const [ allGames, setAllGames ] = useState(resultsDummy);
	const [ allGames, setAllGames ] = useState(null);
	console.log('OUTPUT ÄR: MatchupResultsPage -> allGames', allGames);
	const [ latestGame, setLatestGame ] = useState(null);
	console.log('OUTPUT ÄR: MatchupResultsPage -> latestGame', latestGame);

	const [ initialFirstGame, setInitialFirstGame ] = useState(null);
	console.log(
		'OUTPUT ÄR: MatchupResultsPage -> initialFirstGame',
		initialFirstGame
	);

	const [ noMatchFound, setNoMatchFound ] = useState(false);

	const { id1, id2 } = useParams();

	const initialFirstValue = {
		id: id1
	};
	const initialSecondValue = {
		id: id2
	};

	useEffect(
		() => {
			if (noMatchFound) {
				setTimeout(() => {
					setLatestGame(initialFirstGame);
					history.push(
						`/matchup/${initialFirstGame.contestants[0]
							.contestantOne.id}/${initialFirstGame
							.contestants[0].contestantTwo.id}`
					);
					setNoMatchFound(false);
				}, 4000);
			}
		},
		[ noMatchFound ]
	);

	// Redirecta till senaste matchen per automatik när man landar på startsidan då :id1 och :id2. Om det är någon annan parameter så kolla om det finns en sån match i listan.
	useEffect(
		() => {
			if (latestGame) {
				if (id1 === ':id1' && id2 === ':id2') {
					history.push(
						`/matchup/${initialFirstGame.contestants[0]
							.contestantOne.id}/${initialFirstGame
							.contestants[0].contestantTwo.id}`
					);
				} else if (
					id1 !== latestGame.contestants[0].contestantOne.id &&
					id2 !== latestGame.contestants[0].contestantTwo.id
				) {
					let specificMatchup = allGames.filter(
						game =>
							game.contestants[0].contestantOne.id ===
								id1 * 1 &&
							game.contestants[0].contestantTwo.id ===
								id2 * 1
					);
					if (specificMatchup.length !== 0) {
						setLatestGame(...specificMatchup);
					} else {
						setNoMatchFound(true);
					}
				}
			}
		},
		[ latestGame, id1, id2 ]
	);

	// Sätt senaste matchen (latest game) som är det första elementet i alla matcher-listan, om den är hämtad
	useEffect(
		() => {
			if (allGames) {
				setLatestGame(allGames[0]);
				setInitialFirstGame(allGames[0]);
			}
		},
		[ allGames ]
	);

	// Fetcha alla matcher, om de inte finns, vid mount
	useEffect(() => {
		let allGamesArray;
		const games = async () => {
			if (!allGames) {
				allGamesArray = await getAllGames();
				setAllGames(allGamesArray.listOfAllGames);
			}
		};
		games();
	}, []);

	let updateUrlStuff = {
		allGames,
		setLatestGame
	};

	const handleClick = matchId => {
		console.log('OUTPUT ÄR: MatchupResultsPage -> matchId', matchId);
		let specificMatch = allGames.filter(match => match.id === matchId);
		console.log(
			'OUTPUT ÄR: MatchupResultsPage -> specificMatch',
			specificMatch
		);
		console.log(
			'OUTPUT ÄR: MatchupResultsPage -> specificMatch och ids',
			specificMatch[0].contestants[0].contestantOne.id
		);
		history.push(
			`/matchup/${specificMatch[0].contestants[0].contestantOne
				.id}/${specificMatch[0].contestants[0].contestantTwo.id}`
		);
	};

	return (
		<Fragment>
			<article
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 0;
					width: 100%;
					flex: 1 1 100%;
				`}>
				<h1 className="logo-font logo-page-margin center">
					MATCHUPS
				</h1>
				{latestGame && (
					<h3 className="h5 center highlight">
						{latestGame.id === initialFirstGame.id ? (
							'Senaste matchupen'
						) : (
							`Resultat på matchup nr ${latestGame.id}`
						)}
					</h3>
				)}
				{/* {latestGame.id === initialFirstGame.id && (
					<h3 className="h5 center highlight">
						Senaste resultatet
					</h3>
				)} */}
				{/* {latestGame.id !== initialFirstGame.id && (
					<h3 className="h5 center highlight">
						Resultat för specifik matchup
					</h3>
				)} */}
				{allGames &&
				latestGame &&
				!noMatchFound && <MatchupBox latestGame={latestGame} />}
				{noMatchFound && (
					<h3 className="h5 center highlight">
						Hittar ingen sådan matchup. <br /> Redirectar
						tillbaka till det senaste registrerade
						resultatet...
					</h3>
				)}
			</article>
			{allGames && (
				<MatchupStatsBox
					handleClick={handleClick}
					allGames={allGames}
				/>
			)}
		</Fragment>
	);
};

export default MatchupResultsPage;
