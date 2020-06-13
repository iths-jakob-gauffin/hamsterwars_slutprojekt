import React, { useState, useEffect, Fragment } from 'react';

import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useTransition, animated, config } from 'react-spring';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
import data from './../../../dummyData/hamsters.json';
import getRandomBattle from './../../../api/getRandomBattle';
import { recordBattle } from './../../../api/recordBattle';

import Portal from './../small_components/Portal';
import PortalContent from './../small_components/PortalContent';
import Hej from './Hej';
const BattlePage = () => {
	const [ contestants, setContestants ] = useState('');
	const [ showPortal, setShowPortal ] = useState({
		show: false,
		winningHamster: ''
	});
	const [ other, setOther ] = useState(false);
	console.log('OUTPUT ÄR: BattlePage -> showPortal', showPortal.show);
	const [ hej, setHej ] = useState(false);

	const fadeAnimation = useTransition(showPortal.show, p => p, {
		from: {
			zIndex: 5,
			opacity: 0,
			position: 'absolute',
			y: '-200px',
			o: 0,
			backgroundColor: 'green'
		},
		enter: { opacity: 1, y: '0px', o: 1, backgroundColor: 'red' },
		leave: { opacity: 0, y: '200px', o: 0, backgroundColor: 'green' },
		config: config.gentle
	});
	console.log(
		'OUTPUT ÄR: PortalContent -> fadeAnimation',
		fadeAnimation
	);

	const portalStuff = winningHamsterId => {
		let winningHamster = contestants.filter(
			contestant => contestant.id === winningHamsterId * 1
		);

		setShowPortal({
			show: true,
			winningHamster: winningHamster[0]
		});
		// return;
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

	// useEffect(
	// 	() => {
	// 		if (showPortal.show) {
	// 			setTimeout(() => {
	// 				setShowPortal({
	// 					show: false,
	// 					winningHamster: ''
	// 				});
	// 			}, 2000);
	// 		}
	// 	},
	// 	[ showPortal.show ]
	// );

	// useEffect(
	// 	() => {
	// 		if (other) {
	// 			console.log('den nya körs');
	// 			setTimeout(() => {
	// 				setOther(!other);
	// 			}, 2000);
	// 			return () => setShowPortal({ show: false });
	// 			// const interval = setInterval(() => {
	// 			// 	setShowPortal({
	// 			// 		show: false,
	// 			// 		winningHamster: null
	// 			// 	});
	// 			// }, 2000);
	// 			// return () => clearInterval(interval);
	// 		}
	// 	},
	// 	[ other ]
	// );

	// useEffect(() => {
	// 	if (showPortal.show === true) {
	// 		console.log(
	// 			'OUTPUT ÄR: BattlePage -> showPortal.show',
	// 			showPortal.show
	// 		);

	// 		console.log('den tickar');
	// 		setTimeout(() => {
	// 			console.log('går den?');
	// 			setShowPortal(
	// 				{
	// 					show: false,
	// 					winningHamster: null
	// 				},
	// 				5000
	// 			);
	// 		});
	// 	}
	// }, []);

	useEffect(() => {
		(async function fetchContestants() {
			let twoRandomContestants = await getRandomBattle();
			setContestants(twoRandomContestants);
		})();
	}, []);

	const handleClick = async winningHamsterId => {
		let winningHamster = contestants.filter(
			contestant => contestant.id === winningHamsterId * 1
		);
		let losingHamster = contestants.filter(
			contestant => contestant.id !== winningHamsterId * 1
		);

		console.log(
			'OUTPUT ÄR: BattlePage -> winningHamster',
			winningHamster
		);
		console.log(
			'OUTPUT ÄR: BattlePage -> losingHamster',
			losingHamster
		);
		setShowPortal(!showPortal);
		await recordBattle([ ...winningHamster, ...losingHamster ]);
		console.log('battle has been recorded');
	};

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
									onClickFn={portalStuff}
									// onClickFn={handleClick}
									id={hamster.id}
									name={hamster.name}
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
			{/* {!hej && (
				<button onClick={() => setHej(!hej)}>klicka nu</button>
			)}
			{hej && <Hej />} */}
			{/* <Portal> */}
			{/* {showPortal.show ? ( */}
			<div>
				{fadeAnimation.map(
					({ item, key, props }) =>
						item && (
							<PortalContent
								everything={{
									item: item,
									key: key,
									props: props
								}}
								key={key}
								// style={props}
								animProps={props}
								portalContentKey={key}
								winningHamster={showPortal.winningHamster}
								showPortal={showPortal}
								setShowPortal={setShowPortal}
							/>
						)
				)}
			</div>
			{/* ) : null} */}
			{/* </Portal> */}
		</article>
	);
};

export default BattlePage;
