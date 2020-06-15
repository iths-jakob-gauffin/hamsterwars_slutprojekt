import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchHamsters } from './../../../redux/actions';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import SelectForCup from './../small_components/SelectForCup';

const CupPage = ({ hamstersFromRedux }) => {
	const [ hamstersArray, setHamstersArray ] = useState('');
	console.log('OUTPUT ÄR: CupPage -> hamstersArray', hamstersArray);
	const [ contestantsArray, setContestantsArray ] = useState([
		{
			contestant1: ''
		},
		{
			contestant2: ''
		},
		{
			contestant3: ''
		},
		{
			contestant4: ''
		},
		{
			contestant5: ''
		},
		{
			contestant6: ''
		},
		{
			contestant7: ''
		},
		{
			contestant8: ''
		}
	]);

	useEffect(
		() => {
			const getHamsters = async () => {
				await fetchHamsters();
				console.log(
					'OUTPUT ÄR: CupPage -> hamstersFromRedux',
					hamstersFromRedux
				);
				setHamstersArray(hamstersFromRedux.hamsters);
			};
			getHamsters();
		},
		[ hamstersFromRedux ]
	);

	const handleChange = (e, optionValue, contestant) => {
		let chunkedArray = '';
		let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ],
			chunk;
		console.log('OUTPUT ÄR: handleChange -> arr', typeof arr);
		console.log('OUTPUT ÄR: handleChange -> arr', arr);

		while (arr.length > 0) {
			chunk = arr.splice(0, 2);
			console.log(chunk);
			chunkedArray = [ ...chunkedArray, chunk ];
		}
		console.log(
			'OUTPUT ÄR: handleChange -> chunkedArray',
			chunkedArray
		);
		// let other = arr.splice(0, 2);
		// console.log('OUTPUT ÄR: handleChange -> other', other);

		if (e.target.value !== 'Välj') {
			console.log(
				'OUTPUT ÄR: handleChange -> e.target.value',
				e.target.value
			);
			// console.log('OUTPUT ÄR: handleChange -> e', e);
			console.log(
				'OUTPUT ÄR: handleChange -> optionValue',
				optionValue
			);
			console.log(
				'OUTPUT ÄR: handleChange -> contestant',
				contestant
			);

			// firstOrSecondHamster === 'firstHamster'
			// 	? setFirstHamster({
			// 			...firstHamster,
			// 			['id']: e.target.value
			// 		})
			// 	: setSecondHamster({ id: e.target.value });
		} else {
			return null;
		}
	};

	const renderSelects = () => {
		console.log('snurrar');
		let content = [];
		for (let i = 1; i <= 8; i++) {
			content = [
				...content,
				<SelectForCup
					key={i}
					contestant={i}
					data={hamstersArray}
					firstOptionValue={`Välj hamster ${i}`}
					firstOptionText={`Välj tävlande nr ${i}`}
					initialValue={null}
					handleChange={handleChange}
				/>
			];
			// (
			// 	<SelectForCup
			// 		contestant={i}
			// 		data={hamstersArray}
			// 		firstOptionValue={`Välj hamster ${i}`}
			// 		firstOptionText={`Välj tävlande nr ${i}`}
			// 		initialValue={null}
			// 		handleChange={handleChange}
			// 	/>
			// );
		}
		return content;
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
			<h1 className="logo-font logo-page-margin center">MINICUP</h1>
			<h3 className="h5 center highlight">
				Välj 8 hamstrar som ska tävla
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
				{hamstersArray ? renderSelects() : null}
			</div>
			{/* <Select
					firstOptionText={'Första hamstern: '}
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
			)} */}
		</article>
	);
};

const mapStateToProps = state => {
	return {
		hamstersFromRedux: state
	};
};

export default connect(mapStateToProps, { fetchHamsters })(CupPage);
