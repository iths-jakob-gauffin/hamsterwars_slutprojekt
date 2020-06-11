import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
import data from './../../../dummyData/hamsters.json';

// import { v4 as uuidv4 } from 'uuid';

import { FormPart } from './FormPart';
import { MusicDataList } from './MusicDataList';
import { SearchMusicData } from './SearchMusicData';

const UploadPage = () => {
	const initialHamsterFormData = {
		name: '',
		age: '',
		favFood: '',
		loves: ''
	};

	const [ hamsterFormData, setHamsterFormData ] = useState(
		initialHamsterFormData
	);

	const initialColor = {
		name: '1px none',
		age: '1px none',
		favFood: '1px none',
		loves: '1px none'
	};
	const [ color, setColor ] = useState(initialColor);

	const initialErrors = {
		name: null,
		age: null,
		favFood: null,
		loves: null
	};
	const [ errors, setErrors ] = useState(initialErrors);

	const [ trueIfAllIsValid, setTrueIfAllIsValid ] = useState(false);
	console.log(
		'OUTPUT ÄR: UploadPage -> trueIfAllIsValid',
		trueIfAllIsValid
	);

	// const errorMessages = {
	// 	name:
	// 		'Namnet är tyvärr ogiltigt. Namnet måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).',
	// 	age:
	// 		'Ledsen, men åldern måste vara en siffra och vara större än 0.',
	// 	favFood:
	// 		'Favoritmaten måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).',
	// 	loves:
	// 		'Fel tyvärr. Det du skriver måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).'
	// };

	// const validate = nameAgeFavFoodOrLoves => {
	// 	if (hamsterFormData[nameAgeFavFoodOrLoves]) {
	// 		setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
	// 		setErrors({
	// 			...errors,
	// 			[nameAgeFavFoodOrLoves]: 'Input is valid'
	// 		});
	// 	} else {
	// 		setErrors({
	// 			...errors,
	// 			[nameAgeFavFoodOrLoves]:
	// 				errorMessages[nameAgeFavFoodOrLoves]
	// 		});
	// 		setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
	// 	}
	// };

	useEffect(
		() => {
			let allErrorsExceptNameError = Object.values(errors).splice(1);
			let validErrors = [ null, 'Input is valid' ];
			if (
				errors['name'] === 'Input is valid' &&
				!allErrorsExceptNameError.includes(validErrors)
			) {
				// console.log('ja allt är valid');
				// setErrors({
				// 	name: 'Input is valid',
				// 	age: 'Input is valid',
				// 	favFood: 'Input is valid',
				// 	loves: 'Input is valid'
				// });
				setTrueIfAllIsValid(true);
			}

			// let allErrorMessages = Object.values(errors);
			// let validInputs = allErrorMessages.filter(
			// 	messages => messages === 'Input is valid'
			// );

			// validInputs.length === 4
			// 	? setTrueIfAllIsValid(true)
			// 	: setTrueIfAllIsValid(false);
		},
		[ errors ]
	);
	// useEffect(
	// 	() => {
	// 		let allErrorMessages = Object.values(errors);
	// 		let validInputs = allErrorMessages.filter(
	// 			messages => messages === 'Input is valid'
	// 		);

	// 		validInputs.length === 4
	// 			? setTrueIfAllIsValid(true)
	// 			: setTrueIfAllIsValid(false);
	// 	},
	// 	[ errors ]
	// );

	const formProps = {
		trueIfAllIsValid,
		setTrueIfAllIsValid,
		errors,
		setErrors,
		// errorMessages,
		// validate,
		setHamsterFormData,
		hamsterFormData,
		color,
		setColor
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
				LÄGG TILL HAMSTER
			</h1>
			<p className="h5 center highlight">
				Här fyller du i din hamsterinfo och laddar upp en bild på
				den om du vill. <br />All information, förutom hamsterns
				namn, är dock frivilligt.
			</p>

			<form
				action="#"
				css={css`
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}>
				<FormPart
					key={'name'}
					nameAgeFavFoodOrLoves={'name'}
					placeholderText={'Vad heter hamstern?'}
					{...formProps}
				/>
				<FormPart
					key={'age'}
					nameAgeFavFoodOrLoves={'age'}
					placeholderText={'Hur gammal är den?'}
					{...formProps}
				/>
				<FormPart
					key={'favFood'}
					nameAgeFavFoodOrLoves={'favFood'}
					placeholderText={'Hamsterns favoritmat?'}
					{...formProps}
				/>
				<FormPart
					key={'loves'}
					nameAgeFavFoodOrLoves={'loves'}
					placeholderText={'Favoritsyssla?'}
					{...formProps}
				/>
				{trueIfAllIsValid ? (
					<button onClick={() => console.log('jajjamän')}>
						Send
					</button>
				) : (
					<button disabled>Send</button>
				)}
			</form>
		</article>
	);
};

export default UploadPage;
