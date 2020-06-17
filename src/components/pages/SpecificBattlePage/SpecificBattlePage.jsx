/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';
import { useTransition, config } from 'react-spring';

import Select from './Select';

// import data from './../../../dummyData/hamsters.json';
import { BattleImage } from '../small_components/BattleImage';
import { recordBattle } from './../../../api/recordBattle';
import PortalContent from './../small_components/PortalContent';

// TODO: fixa så listorna uppdaterar varandra, när man väljer en hamster från första listan ska den försvinna från andra och vice versa

const SpecificBattlePage = ({ reduxHamsters, history }) => {
	console.log(
		'OUTPUT ÄR: SpecificBattlePage -> reduxHamsters',
		reduxHamsters
	);
	// console.log(data);
	const { id1, id2 } = useParams();

	const initialFirstValue = {
		id: id1
	};
	const initialSecondValue = {
		id: id2
	};

	const [ firstHamster, setFirstHamster ] = useState({
		id: id1
	});

	const [ secondHamster, setSecondHamster ] = useState({
		id: id2
	});

	const invalidOptions = [ ':id1', ':id2' ];

	const [ readyToBattle, setReadyToBattle ] = useState(false);
	console.log(
		'OUTPUT ÄR: SpecificBattlePage -> readyToBattle',
		readyToBattle
	);

	useEffect(
		() => {
			if (!invalidOptions.includes(id1)) {
				let getFirstHamster = reduxHamsters.filter(
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
				let getSecondHamster = reduxHamsters.filter(
					hamster => hamster.id === secondHamster.id * 1
				);
				setSecondHamster({ ...getSecondHamster[0] });
			} else {
				setSecondHamster({ ...initialSecondValue });
			}
		},
		[ id2 ]
	);

	// Ändra urlen när en hamster är vald, om bägge Urlarna är valda så sätts statet "ready to battle" till true och hamsterbilderna får en ny onClickfunktion skickad till sig så en vinst kan registreras
	useEffect(
		() => {
			if (
				!invalidOptions.includes(firstHamster.id) &&
				!invalidOptions.includes(secondHamster.id)
			) {
				setReadyToBattle(true);
			} else {
				setReadyToBattle(false);
			}
			history.push(`/battle/${firstHamster.id}/${secondHamster.id}`);
			// if (
			// 	!invalidOptions.includes(firstHamster.id) ||
			// 	!invalidOptions.includes(secondHamster.id)
			// ) {
			// 	setReadyToBattle(true);
			// 	history.push(
			// 		`/battle/${firstHamster.id}/${secondHamster.id}`
			// 	);
			// } else {
			// 	setReadyToBattle(false);
			// }
		},
		[ firstHamster.id, secondHamster.id ]
	);

	// Metod som skickas ner till Selectkomponenten och BattleImage som sen uppdaterar hamsterkortet när man ändrar i listan
	const handleChange = (e, firstOrSecondHamster) => {
		if (e.target.value !== 'Välj') {
			firstOrSecondHamster === 'firstHamster'
				? setFirstHamster({
						id: e.target.value
					})
				: setSecondHamster({ id: e.target.value });
		} else {
			return null;
		}
	};

	const [ showPortal, setShowPortal ] = useState({
		show: false,
		winningHamster: ''
	});

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
			backgroundColor: `${colors.blue1}`
		},
		leave: { opacity: 0, y: '200px', o: 0, backgroundColor: 'green' },
		config: config.gentle
	});

	const identity = val => val;

	const handleClick = async winningHamsterId => {
		console.log(
			'OUTPUT ÄR: SpecificBattlePage -> winningHamsterId',
			winningHamsterId
		);
		let contestants = [ firstHamster, secondHamster ];
		console.log(
			'OUTPUT ÄR: SpecificBattlePage -> contestants',
			contestants
		);
		console.log(
			'OUTPUT ÄR: SpecificBattlePage -> firstHamster',
			firstHamster
		);
		console.log(
			'OUTPUT ÄR: SpecificBattlePage -> secondHamster',
			secondHamster
		);

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

		// Redirecta till utgångsläget
		history.push(`/battle/:id1/:id2`);
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
				secondHamster.id !== ':id2' ? (
					'Klicka på den sötaste hamstern'
				) : (
					'Välj hamstrar som ska tävla'
				)}
			</h3>
			{/* <h3 className="h5 center highlight">
				{firstHamster.id !== ':id1' &&
				secondHamster.id !== ':id1' ? (
					'Klicka på den sötaste hamstern'
				) : (
					'Välj hamstrar som ska tävla'
				)}
			</h3> */}
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
					reduxHamsters={reduxHamsters}
					hamster={'firstHamster'}
					handleChange={handleChange}
					initialValue={firstHamster.id}
				/>
				{firstHamster.id !== ':id1' && (
					<BattleImage
						id={firstHamster.id}
						name={firstHamster.name}
						onClickFn={readyToBattle ? handleClick : identity}
					/>
				)}
				<Select
					firstOptionText={'Andra hamstern: '}
					reduxHamsters={reduxHamsters}
					hamster={'secondHamster'}
					handleChange={handleChange}
					initialValue={secondHamster.id}
				/>
				{secondHamster.id !== ':id2' && (
					<BattleImage
						id={secondHamster.id}
						name={secondHamster.name}
						onClickFn={readyToBattle ? handleClick : identity}
					/>
				)}
			</div>
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

const mapStateToProps = state => {
	return {
		reduxHamsters: state.hamsters
	};
};
export default connect(mapStateToProps, null)(SpecificBattlePage);
