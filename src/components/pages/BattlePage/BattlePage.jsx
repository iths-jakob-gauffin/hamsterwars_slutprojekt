/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';
import { useTransition, config } from 'react-spring';

// import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';
import { randomColors } from './../../../styles/randomColors';

import { BattleImage } from '../small_components/BattleImage';
// import data from './../../../dummyData/hamsters.json';
import getRandomBattle from './../../../api/getRandomBattle';
import { recordBattle } from './../../../api/recordBattle';

// TODO: släng portalen
import PortalContent from './../small_components/PortalContent';

const BattlePage = () => {
	const [ contestants, setContestants ] = useState('');
	const [ showPortal, setShowPortal ] = useState({
		show: false,
		winningHamster: ''
	});

	const [ randomColorValue, setRandomColorValue ] = useState(0);

	useEffect(
		() => {
			let randomValue = Math.floor(
				Math.random() * randomColors.length
			);
			console.log(
				'OUTPUT ÄR: BattlePage -> randomValue',
				randomValue
			);
			setRandomColorValue(randomValue);
		},
		[ showPortal.show ]
	);

	const fadeAnimation = useTransition(showPortal.show, p => p, {
		from: {
			zIndex: 5,
			opacity: 0,
			position: 'absolute',
			y: '-200px',
			o: 0,
			backgroundColor: 'green'
		},
		enter: {
			opacity: 1,
			y: '0px',
			o: 1,
			backgroundColor: `${randomColors[randomColorValue]}`
		},
		leave: { opacity: 0, y: '200px', o: 0, backgroundColor: 'green' },
		config: config.gentle
	});

	const handleClick = async winningHamsterId => {
		let winningHamster = contestants.filter(
			contestant => contestant.id === winningHamsterId * 1
		);
		let losingHamster = contestants.filter(
			contestant => contestant.id !== winningHamsterId * 1
		);
		// Visa modalen med vinnaren
		setShowPortal({
			show: true,
			winningHamster: winningHamster[0]
		});
		// Registrera tävlande hamstrar och uppdatera deras stats
		await recordBattle([ ...winningHamster, ...losingHamster ]);

		// Hämta nya deltagare och starta ny "duell"
		fetchNewContestants();
	};

	useEffect(
		() => {
			if (showPortal.show) {
				setTimeout(() => {
					setShowPortal({
						show: false,
						winningHamster: ''
					});
				}, 2200);
			}
			return () => console.log('nu unmountas den');
		},
		[ showPortal.show ]
	);
	const fetchNewContestants = async () => {
		let twoRandomContestants = await getRandomBattle();
		setContestants(twoRandomContestants);
	};
	useEffect(() => {
		fetchNewContestants();
		// (async function fetchContestants() {
		// 	let twoRandomContestants = await getRandomBattle();
		// 	setContestants(twoRandomContestants);
		// })();
	}, []);

	return (
		<article
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1.4rem;
				width: 100%;
				flex: 1 1 100%;
			`}>
			<h1 className="logo-font logo-page-margin center">
				RANDOM BATTLE
			</h1>
			<h3 className="h5 center highlight">
				Välj den sötaste hamstern
			</h3>
			<div
				className="images-container"
				css={css`
					height: 100%;
					padding: .3rem .6rem;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
				`}>
				{contestants ? (
					contestants.map((hamster, idx) => {
						return (
							<div key={hamster.id}>
								<BattleImage
									onClickFn={handleClick}
									// onClickFn={handleClick}
									id={hamster.id}
									name={hamster.name}
									avatar={hamster.avatar}
								/>
								<p>
									{hamster.id} {hamster.name}
								</p>
								{idx === 0 ? (
									<h3 css={css`text-align: center;`}>
										VS
									</h3>
								) : null}
							</div>
						);
					})
				) : null}
			</div>
			{fadeAnimation.map(
				({ item, key, props }) =>
					item && (
						<PortalContent
							key={key}
							animProps={props}
							portalContentKey={key}
							winningHamster={showPortal.winningHamster}
							showPortal={showPortal}
							setShowPortal={setShowPortal}
						/>
					)
			)}
		</article>
	);
};

export default BattlePage;
