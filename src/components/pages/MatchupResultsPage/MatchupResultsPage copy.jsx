import React, { useEffect, useState, Fragment } from 'react';
import { useParams, history } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';
import { shadows } from './../../../styles/shadows';

import { getAllGames } from './../../../api/getAllGames';

import { BattleImage } from './../small_components/BattleImage';

import { resultsDummy } from './resultsDummy';

const MatchupResultsPage = ({ history }) => {
	const [ allGames, setAllGames ] = useState(resultsDummy);
	// const [ allGames, setAllGames ] = useState('');
	console.log('OUTPUT ÄR: MatchupResultsPage -> allGames', allGames);
	const [ latestGame, setLatestGame ] = useState('');
	console.log('I BÖRJAN LATEST GAME', latestGame);
	let { id1, id2 } = useParams();

	const initialFirstValue = {
		id: id1
	};
	const initialSecondValue = {
		id: id2
	};

	const [ firstHamster, setFirstHamster ] = useState(initialFirstValue);

	const [ secondHamster, setSecondHamster ] = useState(
		initialSecondValue
	);

	console.log('OUTPUT ÄR: MatchupResultsPage -> id2', id2);
	console.log('OUTPUT ÄR: MatchupResultsPage -> id1', id1);
	// useEffect(() => {
	// 	let allGamesArray;
	// 	if (!allGames) {
	// 		const games = async () => {
	// 			allGamesArray = await getAllGames();
	// 			setAllGames(allGamesArray.listOfAllGames);
	// 		};
	// 		games();
	// 	}
	// 	return () => setAllGames('');
	// }, []);

	// useEffect

	useEffect(
		() => {
			console.log('ID1 ELLER ID2 HAR ÄNDRATS');
			// if (allGames) {

			// 	setLatestGame(allGames[0]);
			// }
			if (id1 === ':id1' && id2 === ':id2') {
				console.log(
					'jepp den reggar och kommer in för att uppdatera latestGame'
				);
				setLatestGame(allGames[0]);
			} else if (
				firstHamster.id !== ':id1' &&
				secondHamster.id !== ':id2'
			) {
				if (allGames) {
					console.log('ALLGAMES FINNS', allGames);
					let specificMatchup = allGames.filter(
						el =>
							el.contestants[0].contestantOne.id ===
								firstHamster.id * 1 &&
							el.contestants[0].contestantTwo.id ===
								secondHamster.id * 1
					);
					console.log(
						'OUTPUT ÄR: MatchupResultsPage -> specificMatchup',
						specificMatchup
					);
					if (specificMatchup.length !== 0) {
						console.log('den uppdaterar ändå');
						setLatestGame(...specificMatchup);
					} else {
						console.log('den uppdaterar inte');
						setLatestGame(false);
					}
				}
			}
			// else {
			// 	setLatestGame(false);
			// }
		},
		[ id1, id2 ]
	);

	// useEffect(
	// 	() => {
	// 		console.log('DENNNANNA KÖRS!');
	// 		if (
	// 			firstHamster.id === ':id1' &&
	// 			secondHamster.id === ':id2'
	// 		) {
	// 			console.log('DENNNANNA KÖRS MED!');
	// 			if (allGames) {
	// 				console.log('DENNNANNA KÖRS OCKSÅ!');
	// 				setLatestGame(allGames[0]);
	// 			}
	// 		} else if (
	// 			firstHamster.id !== ':id1' &&
	// 			secondHamster.id !== ':id2'
	// 		) {
	// 			// if (allGames) {
	// 			let specificMatchup = allGames.filter(
	// 				el =>
	// 					el.contestants[0].contestantOne.id ===
	// 						firstHamster.id * 1 &&
	// 					el.contestants[0].contestantTwo.id ===
	// 						secondHamster.id * 1
	// 			);
	// 			console.log(
	// 				'OUTPUT ÄR: MatchupResultsPage -> specificMatchup',
	// 				specificMatchup
	// 			);
	// 			if (specificMatchup.length !== 0) {
	// 				setLatestGame(...specificMatchup);
	// 			} else {
	// 				setLatestGame(false);
	// 			}
	// 		}

	// 		return () => {
	// 			setLatestGame('');
	// 		};
	// 	},
	// 	[ allGames ]
	// );

	useEffect(
		() => {
			if (latestGame) {
				console.log(
					'Latest game körs i useeffect, den som pushar',
					latestGame
				);
				if (id1 === ':id1' && id2 === ':id2') {
					history.push(
						`/matchup/${latestGame.contestants[0].contestantOne
							.id}/${latestGame.contestants[0].contestantTwo
							.id}`
					);

					// } else {
					// 	history.push(
					// 		`/matchup/${latestGame.contestants[0].contestantOne
					// 			.id}/${latestGame.contestants[0].contestantTwo
					// 			.id}`
					// 	);
					// }
				} else {
					history.push(`/matchup/${id1}/${id2}`);
				}
			}
		},
		[ latestGame ]
	);
	// useEffect(()=>{
	// 	if(!latestGame){
	// 		if (id1 === ':id1' && id2 === ':id2'){

	// 		}
	// 	}
	// }, [latestGame])

	// useEffect(
	// 	() => {
	// 		if (allGames) {
	// 			setLatestGame(allGames[4]);
	// 		}
	// 		return () => {
	// 			setLatestGame('');
	// 		};
	// 	},
	// 	[ allGames ]
	// );

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
			{/* <button onClick={getStuff}>sada</button> */}
			<h1 className="logo-font logo-page-margin center">MATCHUPS</h1>
			{latestGame && (
				<h3 className="h5 center highlight">Senaste resultat</h3>
			)}
			{allGames &&
			latestGame && <MatchupBox latestGame={latestGame} />}
			{!latestGame && (
				<h3 className="h5 center highlight">
					Hittar ingen sådan matchup
				</h3>
			)}
			{/* {stats.top && <StatsBox stats={stats.top} />}
			<h3 className="h5 center highlight">Bottom 5</h3>
			{stats.bottom && <StatsBox stats={stats.bottom} />}
			<StatsBox stats={bottomData.bottomFive} /> */}
		</article>
	);
};

export default MatchupResultsPage;

const MatchupBox = ({ latestGame }) => {
	// console.log('OUTPUT ÄR: MatchupBox -> latestGame', latestGame);
	// console.log('bara arrayen', latestGame.contestants);
	// console.log(
	// 	'nu från arrayen',
	// 	latestGame.contestants[0].contestantOne
	// );
	// console.log(
	// 	'OUTPUT ÄR: MatchupBox -> latestGame',
	// 	latestGame.contestants[0].contestantTwo
	// );
	// console.log(
	// 	'OUTPUT ÄR: MatchupBox -> latestGame',
	// 	latestGame.contestants[0].contestantTwo
	// );
	return (
		<section
			css={css`
				display: flex;
				align-items: center;
			`}>
			{latestGame &&
				latestGame.contestants.map(contestant => {
					// console.log(
					// 	'OUTPUT ÄR: MatchupBox -> contestant',
					// 	contestant
					// );
					return (
						<Fragment>
							<ContestantBox
								key={contestant['contestantOne'].id}
								// latestGame={latestGame.contestants[0].contestantOne}
								latestGame={contestant['contestantOne']}
								// latestGame={latestGame}
								winningHamster={
									contestant['contestantOne'].id ===
									latestGame.winner.id ? (
										true
									) : (
										false
									)
								}
							/>
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
			{/* {latestGame && (
				<Fragment>
					<ContestantBox
						// latestGame={latestGame.contestants[0].contestantOne}
						latestGame={
							latestGame.contestants[0].contestantOne
						}
						// latestGame={latestGame}
						winningHamster={true}
					/>
					<p className="h5 center highlight">VS</p>
					<ContestantBox
						// latestGame={latestGame.contestants[0].contestantOne}
						latestGame={
							latestGame.contestants[0].contestantTwo
						}
						// latestGame={latestGame}
						winningHamster={false}
					/>
				</Fragment>
			)} */}
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
				<h4>{latestGame.winner.name}</h4>
			</div> */}

			{/* <ContestantBox latestGame={latestGame} /> */}
			{/* <div
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
				<div
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
						// className="logo-font"
						css={css`
							text-align: center;
							margin: .5rem 0;
						`}>
						{latestGame.winner.name}
					</h4>
				</div>
			</div> */}
		</section>
	);
};

const ContestantCard = ({ latestGame, crown = false }) => {
	return (
		<div
			className="latest-matchup-container"
			css={css`
				display: flex;
				flex-direction: column;
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
			<ContestantCard latestGame={latestGame} />
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
