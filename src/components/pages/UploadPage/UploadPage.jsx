import { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchHamsters } from './../../../redux/actions';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTransition, config } from 'react-spring';
import { colors } from './../../../styles/colors';
import { shadows } from './../../../styles/shadows';

import { randomColors } from './../../../styles/randomColors';
import { FormPart } from './FormPart';
import Upload4 from './Upload4';
import PortalContent from './../small_components/PortalContent';

const UploadPage = ({ reduxHamsters, setUpdateRedux, updateRedux }) => {
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

	const [ submitImage, setSubmitImage ] = useState(false);

	const [ fileToUpload, setFileToUpload ] = useState(null);

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

	useEffect(
		() => {
			let newHamster = reduxHamsters.filter(
				hamster => hamster.id * 1 === oldId * 1
			);
			if (newHamster.length !== 0) {
				displayNewlyCreatedHamster(...newHamster);
			}
		},
		[ finishedUploading ]
	);
	useEffect(
		() => {
			let newHamster = reduxHamsters.filter(
				hamster => hamster.id * 1 === oldId * 1
			);
			if (newHamster.length !== 0) {
				if (newHamster[0].avatar === true) {
					displayNewlyCreatedHamster(...newHamster);
				}
			}
		},
		[ reduxHamsters ]
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

	const resetEverything = () => {
		setHamsterFormData(initialHamsterFormData);
		setErrors(initialErrors);
		setColor(initialColor);
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
		},
		[ showPortal.show ]
	);

	const postNewHamster = (data, avatar = false) => {
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
			// .then(response => response.text())
			// .then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	const onSubmitFn = async e => {
		e.preventDefault();
		// Om det finns en fil i inputfältet ska den laddas upp. Om den är tom så kommer det skrivas in i hamsterdatan så att avatarbilden visas istället
		if (fileToUpload) {
			setSubmitImage(true);
			await postNewHamster(hamsterFormData);
		} else {
			//true som andra argument anger för postNewHamster att det ska visas en avatarbild
			await postNewHamster(hamsterFormData, true);
		}
		//Uppdatera redux så att nästa newHamsterId blir korrekt ifall man vill lägga till flera hamstrar

		setOldId(newHamsterId);
		setUpdateRedux(!updateRedux);
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
					<input
						type="submit"
						value="Skicka"
						css={css`
							margin-top: 1rem;
							display: inline-block;
							font-size: 1.5rem;
							padding: .7rem 2.2rem;
							border-radius: 5px;
							color: ${colors.white1};
							background-color: ${colors.purple3};
							border: 2px solid ${colors.purple2};
							box-shadow: ${shadows.boxShadow1};
							margin-bottom: .5rem;
						`}
					/>
				) : (
					<input
						type="submit"
						value="Skicka"
						disabled
						css={css`
							margin-top: 1rem;
							display: inline-block;
							font-size: 1.5rem;
							padding: .7rem 2.2rem;
							border-radius: 5px;
							background-color: ${colors.white3};
							border: 2px solid ${colors.purple2};
							box-shadow: ${shadows.boxShadow4};
							margin-bottom: .5rem;
							color: ${colors.gray3};
						`}
					/>
				)}
			</form>
			{fadeAnimation.map(
				({ item, key, props }) =>
					item && (
						<PortalContent
							text={'är uppladdad'}
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
