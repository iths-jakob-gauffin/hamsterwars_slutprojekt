import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { css } from '@emotion/core';

import Select from './Select';

import data from './../../../dummyData/hamsters.json';
import { BattleImage } from '../small_components/BattleImage';

// TODO: fixa så listorna uppdaterar varandra, när man väljer en hamster från första listan ska den försvinna från andra och vice versa

const SpecificBattlePage = ({ history }) => {
	const { id1, id2 } = useParams();

	const initialFirstValue = {
		id: id1
	};
	const initialSecondValue = {
		id: id2
	};

	const [ firstHamster, setFirstHamster ] = useState(initialFirstValue);

	const [ secondHamster, setSecondHamster ] = useState({
		id: id2
	});

	const invalidOptions = [ ':id1', ':id2' ];

	useEffect(
		() => {
			if (!invalidOptions.includes(id1)) {
				let getFirstHamster = data.hamsterObjects.filter(
					hamster => hamster.id === firstHamster.id * 1
				);
				setFirstHamster({ ...getFirstHamster[0] });
			} else {
				setFirstHamster({ ...initialFirstValue });
			}
		},
		[ id1 ]
	);
	useEffect(
		() => {
			if (!invalidOptions.includes(id2)) {
				let getSecondHamster = data.hamsterObjects.filter(
					hamster => hamster.id === secondHamster.id * 1
				);
				setSecondHamster({ ...getSecondHamster[0] });
			} else {
				setSecondHamster({ ...initialSecondValue });
			}
		},
		[ id2 ]
	);

	// Ändra urlen när en hamster är vald
	useEffect(
		() => {
			if (
				!invalidOptions.includes(firstHamster.id) ||
				!invalidOptions.includes(secondHamster.id)
			) {
				history.push(
					`/battle/${firstHamster.id}/${secondHamster.id}`
				);
			}
		},
		[ firstHamster.id, secondHamster.id ]
	);

	// Metod som skickas ner till Selectkomponenten och BattleImage som sen uppdaterar hamsterkortet när man ändrar i listan
	const handleChange = (e, firstOrSecondHamster) => {
		if (e.target.value !== 'Välj') {
			firstOrSecondHamster === 'firstHamster'
				? setFirstHamster({
						...firstHamster,
						['id']: e.target.value
					})
				: setSecondHamster({ id: e.target.value });
		} else {
			return null;
		}
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
				VÄLJ BATTLE
			</h1>
			<h3 className="h5 center highlight">
				{firstHamster.id !== ':id1' &&
				secondHamster.id !== ':id1' ? (
					'Klicka på den sötaste hamstern'
				) : (
					'Välj hamstrar som ska tävla'
				)}
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
				<Select
					firstOptionText={'Första hamstern: '}
					hamster={'firstHamster'}
					handleChange={handleChange}
					initialValue={firstHamster.id}
				/>
				{firstHamster.id !== ':id1' && (
					<BattleImage
						id={firstHamster.id}
						name={firstHamster.name}
					/>
				)}
				<Select
					firstOptionText={'Andra hamstern: '}
					hamster={'secondHamster'}
					handleChange={handleChange}
					initialValue={secondHamster.id}
				/>
				{secondHamster.id !== ':id2' && (
					<BattleImage
						id={secondHamster.id}
						name={secondHamster.name}
					/>
				)}
			</div>
		</article>
	);
};

export default SpecificBattlePage;
