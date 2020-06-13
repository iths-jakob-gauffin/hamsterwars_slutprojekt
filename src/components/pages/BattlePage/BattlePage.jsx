import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
import data from './../../../dummyData/hamsters.json';
import getRandomBattle from './../../../api/getRandomBattle';
import Portal from './../small_components/Portal';

const BattlePage = () => {
	const [ contestants, setContestants ] = useState('');
	const [ showPortal, setShowPortal ] = useState(false);
	console.log('OUTPUT ÄR: BattlePage -> showPortal', showPortal);

	useEffect(() => {
		console.log('körs api');
		(async function fetchContestants() {
			let twoRandomContestants = await getRandomBattle();
			setContestants(twoRandomContestants);
		})();
	}, []);
	let winningHamsterInfo;
	const handleClick = winningHamsterId => {
		let winningHamster = contestants.filter(
			contestant => contestant.id === winningHamsterId * 1
		);
		console.log(
			'OUTPUT ÄR: BattlePage -> winningHamster',
			winningHamster
		);

		// console.log(
		// 	'OUTPUT ÄR: BattlePage -> winningHamster',
		// 	winningHamster
		// );
		setShowPortal(!showPortal);
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
									onClickFn={handleClick}
									id={hamster.id}
									name={hamster.name}
								/>
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
			{showPortal ? (
				<Portal
					showPortal={showPortal}
					setShowPortal={setShowPortal}>
					<div
						css={css`
							width: 100%;
							height: 100%;
							position: absolute;
							top: 0;
							left: 0;
							background-color: tomato;
							z-index: 2;
						`}
					/>
				</Portal>
			) : null}
		</article>
	);
};

export default BattlePage;
