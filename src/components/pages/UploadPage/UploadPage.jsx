import { useState, useEffect } from 'react';

// import { NavLink, Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchHamsters } from './../../../redux/actions';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTransition, config } from 'react-spring';

import { randomColors } from './../../../styles/randomColors';
// import styled from '@emotion/styled';

// import { links } from './../../../utilities/links';
// import { colors } from './../../../styles/colors';

// import { BattleImage } from '../small_components/BattleImage';
// import data from './../../../dummyData/hamsters.json';

import { FormPart } from './FormPart';
// import Upload from './Upload';
// import Upload3 from './Upload3';
import Upload4 from './Upload4';
import PortalContent from './../small_components/PortalContent';

const UploadPage = ({ reduxHamsters, setUpdateRedux, updateRedux }) => {
	console.log('OUTPUT ÄR: UploadPage -> updateRedux', updateRedux);
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

	const [ newHamsterId, setNewHamsterId ] = useState(false);
	console.log('nytt hamsterid är ', newHamsterId);

	const [ submitImage, setSubmitImage ] = useState(false);

	const [ fileToUpload, setFileToUpload ] = useState(null);
	console.log('OUTPUT ÄR: fileToUpload', fileToUpload);

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

	useEffect(
		() => {
			console.log('SÅHÄR SER DEN UT', reduxHamsters);
			setNewHamsterId(reduxHamsters.length + 1);

			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[ reduxHamsters ]
	);

	const [ showPortal, setShowPortal ] = useState({
		show: false,
		winningHamster: ''
	});
	const [ randomColorValue, setRandomColorValue ] = useState(0);

	const [ newHamsterCreated, setNewHamsterCreated ] = useState('');

	const [ oldId, setOldId ] = useState(null);
	const [ finishedUploading, setFinishedUploading ] = useState(false);
	console.log(
		'OUTPUT ÄR: UploadPage -> finishedUploading',
		finishedUploading
	);

	useEffect(
		() => {
			// setNewHamsterCreated(!newHamsterCreated);
			// let newHamster = reduxHamsters.filter(
			// 	hamster => hamster.id * 1 === oldId * 1
			// );
			let newHamster = reduxHamsters.filter(
				hamster => hamster.id * 1 === oldId * 1
			);
			if (newHamster.length !== 0) {
				// setNewHamsterCreated(...newHamsterCreated);
				displayNewlyCreatedHamster(...newHamster);
				console.log('ja den fick någonting!!!');
			} else {
				console.log('nej den fick NADA');
			}

			// console.log('OUTPUT ÄR: UploadPage -> newHamster', newHamster);
		},
		[ finishedUploading ]
	);
	useEffect(
		() => {
			// setNewHamsterCreated(!newHamsterCreated);
			// let newHamster = reduxHamsters.filter(
			// 	hamster => hamster.id * 1 === oldId * 1
			// );
			let newHamster = reduxHamsters.filter(
				hamster => hamster.id * 1 === oldId * 1
			);
			console.log('OUTPUT ÄR: UploadPage -> newHamster', newHamster);
			if (newHamster.length !== 0) {
				if (newHamster[0].avatar === true) {
					console.log('jadå den kommer in i avatarläge');
					// setNewHamsterCreated(...newHamsterCreated);
					displayNewlyCreatedHamster(...newHamster);
					console.log('ja den fick någonting!!!');
				} else {
					console.log('nej den fick NADA');
				}
			}

			// console.log('OUTPUT ÄR: UploadPage -> newHamster', newHamster);
		},
		[ reduxHamsters ]
	);
	// useEffect(
	// 	() => {
	// 		// setNewHamsterCreated(!newHamsterCreated);
	// 		// let newHamster = reduxHamsters.filter(
	// 		// 	hamster => hamster.id * 1 === oldId * 1
	// 		// );
	// 		let newHamster = reduxHamsters.filter(
	// 			hamster => hamster.id * 1 === oldId * 1
	// 		);
	// 		if (newHamster.length !== 0) {
	// 			// setNewHamsterCreated(...newHamsterCreated);
	// 			displayNewlyCreatedHamster(...newHamster);
	// 			console.log('ja den fick någonting!!!');
	// 		} else {
	// 			console.log('nej den fick NADA');
	// 		}

	// 		// console.log('OUTPUT ÄR: UploadPage -> newHamster', newHamster);
	// 	},
	// 	[ reduxHamsters ]
	// );

	// useEffect(
	// 	() => {
	// 		let newHamster = reduxHamsters.filter(
	// 			hamster => hamster.id * 1 === newHamsterId * 1 - 1
	// 		);
	// 		console.log('OUTPUT ÄR: UploadPage -> newHamster', newHamster);
	// 		// console.log(
	// 		// 	'OUTPUT ÄR: UploadPage -> newHamster',
	// 		// 	newHamsterId.id * 1 - 1
	// 		// );
	// 		console.log(
	// 			'OUTPUT ÄR: UploadPage -> newHamster',
	// 			hamsterFormData
	// 		);
	// 		// if (newHamster) {
	// 		// 	console.log(
	// 		// 		'senaste hamstern ',
	// 		// 		reduxHamsters[reduxHamsters.length - 1]
	// 		// 	);
	// 		// 	// displayNewlyCreatedHamster
	// 		// 	console.log('nu loggar den till false');
	// 		// 	setNewHamsterCreated(!newHamsterCreated);
	// 		// }
	// 	},
	// 	[ newHamsterCreated ]
	// );

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

	const resetEverything = () => {
		setHamsterFormData(initialHamsterFormData);
		setErrors(initialErrors);
		setTrueIfAllIsValid(false);
		setSubmitImage(false);
		setFileToUpload(null);
		setOldId(null);
		setFinishedUploading(false);
	};

	const displayNewlyCreatedHamster = newlyCreatedHamster => {
		setTimeout(() => {
			setShowPortal({
				show: true,
				winningHamster: newlyCreatedHamster
			});
		}, 100);
		resetEverything();
	};

	useEffect(
		() => {
			if (showPortal.show) {
				setTimeout(() => {
					setShowPortal({
						show: false,
						winningHamster: ''
					});
				}, 3500);
			}
			return () => console.log('nu unmountas den');
		},
		[ showPortal.show ]
	);

	const postNewHamster = (data, avatar = false) => {
		console.log('OUTPUT ÄR: UploadPage -> data', data);
		var myHeaders = new Headers();
		myHeaders.append('Authorization', 'abc123');
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			name: data.name,
			age: data.age,
			loves: data.loves,
			favFood: data.favFood,
			avatar: avatar
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
		console.log(
			'OUTPUT ÄR: UploadPage -> hamsterFormData',
			hamsterFormData
		);
		console.log('OUTPUT ÄR: UploadPage -> e', e.target);
		// Om det finns en fil i inputfältet ska den laddas upp. Om den är tom så kommer det skrivas in i hamsterdatan så att avatarbilden visas istället
		if (fileToUpload) {
			setSubmitImage(true);
			await postNewHamster(hamsterFormData);
			console.log('fileToUpload existerar');
		} else {
			//true som andra argument anger för postNewHamster att det ska visas en avatarbild
			await postNewHamster(hamsterFormData, true);
			console.log('fileToUpload existerar inte');
		}
		// displayNewlyCreatedHamster({ ...hamsterFormData, avatar: true });
		//Uppdatera redux så att nästa newHamsterId blir korrekt ifall man vill lägga till flera hamstrar
		// setUpdateRedux(true);
		setOldId(newHamsterId);
		setUpdateRedux(!updateRedux);
		// setNewHamsterCreated(hamsterFormData);
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
			<h1 className="logo-font logo-page-margin center">
				LÄGG TILL HAMSTER
			</h1>
			<p className="h5 center highlight">
				Här fyller du i fälten och laddar upp en bild på hamstern
				om du vill. <br />All information,{' '}
				<b>förutom hamsterns namn</b>, är frivillig.
			</p>

			<form
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

				{/* <Upload /> */}
				{/* {newHamsterId && (
					<Upload3
						newHamsterId={newHamsterId}
						submitImage={submitImage}
						setSubmitImage={setSubmitImage}
					/>
				)} */}
				{newHamsterId && (
					<Upload4
						newHamsterId={newHamsterId}
						submitImage={submitImage}
						setSubmitImage={setSubmitImage}
						fileToUpload={fileToUpload}
						setFileToUpload={setFileToUpload}
						finishedUploading={finishedUploading}
						setFinishedUploading={setFinishedUploading}
					/>
				)}
				{trueIfAllIsValid ? (
					<input type="submit" value="Send" />
				) : (
					<input type="submit" value="Send" disabled />
				)}
			</form>
			{fadeAnimation.map(
				({ item, key, props }) =>
					item && (
						<PortalContent
							innerTimer={3300}
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

export default connect(mapStateToProps, { fetchHamsters })(UploadPage);
