import React, { useEffect, useState, Fragment } from 'react';
import { useParams, history, Redirect } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';
import { shadows } from './../../../styles/shadows';

import { getAllGames } from './../../../api/getAllGames';

import { BattleImage } from './../small_components/BattleImage';

import { resultsDummy } from './resultsDummy';

const MatchupResultsPage = ({ history }) => {
	// const [ allGames, setAllGames ] = useState(resultsDummy);
	const [ allGames, setAllGames ] = useState(null);
	// console.log('OUTPUT ÄR: MatchupResultsPage -> allGames', allGames);
	const [ latestGame, setLatestGame ] = useState(null);
	console.log('OUTPUT ÄR: MatchupResultsPage -> latestGame', latestGame);

	const [ initialFirstGame, setInitialFirstGame ] = useState(null);

	const [ noMatchFound, setNoMatchFound ] = useState(false);

	const { id1, id2 } = useParams();
	console.log('OUTPUT ÄR: MatchupResultsPage -> id2', id2);
	console.log('OUTPUT ÄR: MatchupResultsPage -> id1', id1);

	const initialFirstValue = {
		id: id1
	};
	const initialSecondValue = {
		id: id2
	};

	const redirect = () => {
		history.push(
			`/matchup/${latestGame.contestants[0].contestantOne
				.id}/${latestGame.contestants[0].contestantTwo.id}`
		);
	};

	useEffect(
		() => {
			if (noMatchFound) {
				console.log('safety redirecten körs');
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
				console.log(
					'OUTPUT ÄR: redirect -> allGames',
					allGames[0]
				);
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

	return (
		<article
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0;
				width: 100%;
				flex: 1 1 100%;
			`}>
			<h1 className="logo-font logo-page-margin center">MATCHUPS</h1>
			{latestGame && (
				<h3 className="h5 center highlight">Senaste resultat</h3>
			)}
			{allGames &&
			latestGame &&
			!noMatchFound && <MatchupBox latestGame={latestGame} />}
			{noMatchFound && (
				<h3 className="h5 center highlight">
					Hittar ingen sådan matchup. <br /> Redirectar tillbaka
					till den senast spelade matchen...
				</h3>
			)}
		</article>
	);
};

export default MatchupResultsPage;

const MatchupBox = ({ latestGame }) => {
	// console.log('OUTPUT ÄR: MatchupBox -> latestGame', latestGame);

	return (
		<section
			css={css`
				display: flex;
				align-items: center;
			`}>
			{latestGame &&
				latestGame.contestants.map(contestant => {
					return (
						<Fragment>
							<ContestantBox
								key={contestant['contestantOne'].id}
								latestGame={contestant['contestantOne']}
								winningHamster={
									contestant['contestantOne'].id ===
									latestGame.winner.id ? (
										true
									) : (
										false
									)
								}
							/>
							<h4 className="highlight-small">vs</h4>
							<ContestantBox
								key={contestant['contestantTwo'].id}
								latestGame={contestant['contestantTwo']}
								winningHamster={
									contestant['contestantTwo'].id ===
									latestGame.winner.id ? (
										true
									) : (
										false
									)
								}
							/>
						</Fragment>
					);
				})}
		</section>
	);
};

const ContestantCard = ({ latestGame, loser = false }) => {
	return (
		<div
			className="latest-matchup-container"
			css={css`
				display: flex;
				flex-direction: column;
				flex: 0 0 45%;
				align-self: ${loser ? 'flex-end' : 'center'};
			`}>
			<BattleImage id={latestGame.id} name={latestGame.name} />
			<h4
				css={css`
					text-align: center;
					margin: .5rem 0;
				`}>
				{latestGame.name}
			</h4>
		</div>
	);
};

const ContestantBox = ({ latestGame, winningHamster = false }) => (
	<Fragment>
		{winningHamster ? (
			<div
				className="winner-container"
				css={css`
					display: flex;
					padding: .2rem;
					border-radius: 10px;
					flex-direction: column;
					align-items: center;
					background: linear-gradient(
						135deg,
						${colors.yellow1} 30%,
						${colors.yellow3} 90%
					);
					box-shadow: ${shadows.boxShadow1};
				`}>
				<span
					role="img"
					aria-label="crown"
					css={css`font-size: 2rem;`}>
					👑
				</span>
				<ContestantCard latestGame={latestGame} />
			</div>
		) : (
			<ContestantCard latestGame={latestGame} loser={true} />
		)}

		{/* <div
			className="latest-matchup-container"
			css={css`
				display: flex;
				flex-direction: column;
			`}>
			<BattleImage
				id={latestGame.winner.id}
				name={latestGame.winner.name}
			/>
			<h4
				css={css`
					text-align: center;
					margin: .5rem 0;
				`}>
				{latestGame.winner.name}
			</h4>
		</div> */}
	</Fragment>
);
