import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchHamsters } from './../../../redux/actions';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
// import data from './../../../dummyData/hamsters.json';

import { FormPart } from './FormPart';
import Upload from './Upload';
import Upload2 from './Upload2';

const UploadPage = ({ reduxAmountOfHamsters, fetchHamsters }) => {
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

	const [ newHamsterId, setNewHamsterId ] = useState('');

	const [ submitImage, setSubmitImage ] = useState(false);

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

	// Se hur många hamstrar som finns registrerade för tillfället (via redux för skojs skull) för att kunna få fram ett nytt id åt hamsterbilden när den läggs upp på storage. HamsterId:t tas även fram i backgenden men behöver det här eftersom fil-uploaden strulade när appen var deployad på heroku. Innan heroku gick allting att göra på BE - ladda upp hamsterbild till storage samt att registrera data i dbn. Nu laddas ju bilden upp direkt till firebase storage.

	useEffect(() => {
		fetchHamsters();
	}, []);

	useEffect(
		() => {
			// console.log("object");
			// console.log(
			// 	'OUTPUT ÄR: UploadPage -> reduxAmountOfHamsters',
			// 	reduxAmountOfHamsters
			// );
			setNewHamsterId(reduxAmountOfHamsters + 1);
		},
		[ reduxAmountOfHamsters ]
	);

	const postNewHamster = data => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			name: data.name,
			age: data.age,
			loves: data.loves,
			favFood: data.favFood
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch('/api/files/cloud', requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	const onSubmitFn = async e => {
		e.preventDefault();

		console.log('hamsterformdata', hamsterFormData);
		console.log('OUTPUT ÄR: UploadPage -> e', e.target);
		console.log('jekjekjejr');
		setSubmitImage(true);
		await postNewHamster(hamsterFormData);
		//Uppdatera redux
		fetchHamsters();
	};

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
			<button onClick={fetchHamsters}>fetcha hamstrar</button>
			<h1 className="logo-font logo-page-margin center">
				LÄGG TILL HAMSTER
			</h1>
			<p className="h5 center highlight">
				Här fyller du i din hamsterinfo och laddar upp en bild på
				den om du vill. <br />All information,{' '}
				<b>förutom hamsterns namn</b>, är dock frivillig.
			</p>

			<form
				encType="multipart/form-data"
				onSubmit={onSubmitFn}
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
					<input type="submit" value="Send" />
				) : (
					<input type="submit" value="Send" disabled />
					// <button onClick={'submit'}>Send</button>
					// <input type="submit" disabled={true}>
					// 	Send
					// </input>
					// <button disabled>Send</button>
				)}
				{/* <Upload /> */}
				{newHamsterId && (
					<Upload2
						newHamsterId={newHamsterId}
						submitImage={submitImage}
						setSubmitImage={setSubmitImage}
					/>
				)}
			</form>
		</article>
	);
};

const mapStateToProps = state => {
	console.log('OUTPUT ÄR: state', state);
	return {
		reduxAmountOfHamsters: state.hamsters.length
	};
};

export default connect(mapStateToProps, { fetchHamsters })(UploadPage);
