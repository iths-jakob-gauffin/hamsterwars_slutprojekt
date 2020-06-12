import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
import data from './../../../dummyData/hamsters.json';

import { FormPart } from './FormPart';
import Upload from './Upload';

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

	useEffect(
		() => {
			let allErrorsExceptNameError = Object.values(errors).splice(1);

			let emptyArrayIfNoErrors = allErrorsExceptNameError.filter(
				error => error !== 'Input is valid' && error !== null
			);
			if (
				errors['name'] === 'Input is valid' &&
				emptyArrayIfNoErrors.length === 0
			) {
				setTrueIfAllIsValid(true);
			} else {
				setTrueIfAllIsValid(false);
			}
		},
		[ errors ]
	);

	const formProps = {
		trueIfAllIsValid,
		setTrueIfAllIsValid,
		errors,
		setErrors,
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
			<Upload />
		</article>
	);
};

export default UploadPage;