import React, { useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from '../../../styles/shadows';

import { storage } from '../../../firebase';

export const BattleImage = ({
	id,
	name,
	onClickFn = v => v,
	maxHeight = '9rem'
}) => {
	useEffect(() => {
		console.log('OUTPUT ÄR: storage', storage);
		console.log('den körs iaf');
		// let storageRef = storage.ref();
		// console.log(storageRef('hamster-1.jpg'));
		// storage.ref().child('hamster-1.jpg').getDownloadURL().then(url => {
		// 	console.log(url);
		// });

		// let pathReference = storage.ref('/hamster-1.jpg');
		// console.log('OUTPUT ÄR: pathReference', pathReference);

		let gsReference = storage.refFromURL(
			'gs://hamster-bilder/annathamsternamn'
		);
		console.log('OUTPUT ÄR: gsReference', gsReference);
		gsReference
			.getDownloadURL()
			.then(url => {
				var img = document.getElementById('myimg');
				img.src = url;
			})
			.catch(err => console.log(err));

		// const getPhoto = async () => {
		// 	console.log('OUTPUT ÄR: storage', storage);
		// 	let resp = await storage
		// 		.ref()
		// 		.child('hamster-1.jpg')
		// 		.getDownloadURL();
		// 	console.log('OUTPUT ÄR: getPhoto -> resp', resp);

		// .ref(`hamster-bilder/hamster-1.jpg`)
		// .get();
		// console.log("OUTPUT ÄR: getPhoto -> resp", resp)

		// 	console.log('OUTPUT ÄR: getPhoto -> task', task);
		// };
		// getPhoto();
	}, []);

	// useEffect(() => {
	// 	storage.ref()
	// 	return () => {

	// 	}
	// }, [])

	// const getCloudImage = (imageNum => {
	// 	function arrayBufferToBase64(buffer) {
	// 		var binary = '';
	// 		var bytes = [].slice.call(new Uint8Array(buffer));

	// 		bytes.forEach(b => (binary += String.fromCharCode(b)));

	// 		return window.btoa(binary);
	// 	}

	// 	var myHeaders = new Headers();
	// 	myHeaders.append('Authorization', 'abc123');

	// 	var requestOptions = {
	// 		method: 'GET',
	// 		headers: myHeaders,
	// 		redirect: 'follow'
	// 	};

	// 	fetch(`/api/assets/${id}`, requestOptions).then(response => {
	// 		response.arrayBuffer().then(buffer => {
	// 			var base64Flag = 'data:image/jpeg;base64,';
	// 			var imageStr = arrayBufferToBase64(buffer);

	// 			document.querySelector(`#battleImage-${id}`).src =
	// 				base64Flag + imageStr;
	// 		});
	// 	});
	// })();

	return (
		<section
			onClick={() => onClickFn(id)}
			css={css`
				border: 5px solid ${colors.yellow1};
				border-radius: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: .2rem .2rem;
				background-color: ${colors.white2};
				margin: .3rem 0;
				box-shadow: ${shadows.boxShadow2};
			`}>
			<img
				src=""
				alt=""
				id="myimg"
				css={css`
					max-height: ${maxHeight};
					width: 100%;
					border-radius: 10px;
				`}
			/>
			<img
				src={`/img/hamster-${id}.jpg`}
				// id={`battleImage-${id}`}
				alt={name}
				css={css`
					max-height: ${maxHeight};
					width: 100%;
					border-radius: 10px;
				`}
			/>
			{/* <img
				src={`/img/hamster-${id}.jpg`}
				alt={name}
				css={css`
					max-height: ${maxHeight};
					width: 100%;
					border-radius: 10px;
				`}
			/> */}
		</section>
	);
};
