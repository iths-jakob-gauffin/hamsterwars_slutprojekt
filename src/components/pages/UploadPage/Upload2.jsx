import React, { useState, useEffect } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { storage } from './../../../firebase';

const Upload2 = ({ newHamsterId, submitImage, setSubmitImage }) => {
	const [ fileToUpload, setFileToUpload ] = useState(null);
	console.log('OUTPUT ÄR: fileToUpload', fileToUpload);
	const [ upload, setUpload ] = useState(0);
	const [ finished, setFinished ] = useState(false);

	useEffect(
		() => {
			if (submitImage) {
				uploadFile();
			}
		},
		[ submitImage ]
	);
	// let uploader = document.getElementById('uploader');
	const uploadFile = () => {
		// let file = e.target.files[0];
		let file = fileToUpload;
		console.log('OUTPUT ÄR: file', file);

		let storageRef = storage.ref('/' + `hamster-${newHamsterId}.jpg`);

		let task = storageRef.put(file);

		task.on(
			'state_changed',
			function progress(snapshot) {
				let percentage =
					snapshot.bytesTransferred / snapshot.totalBytes * 100;
				// uploader.value = percentage;
				setUpload(percentage);
			},
			function error(err) {},
			function complete() {
				setFinished(true);

				setTimeout(() => {
					setUpload(0);
					setFinished(false);
				}, 5000);
			}
		);
	};

	return (
		<div>
			{/* <input type="file" value="upload" id="fileButton" /> */}
			<label
				htmlFor="uploadFileInput"
				css={css`
					display: inline-block;
					padding: .3rem;
					background-color: white;
				`}>
				Bläddra...
			</label>
			<input
				css={css`display: none;`}
				type="file"
				id="uploadFileInput"
				onChange={e => setFileToUpload(e.target.files[0])}
			/>

			{fileToUpload && (
				<p css={css`display: inline-block;`}>
					{fileToUpload.name}
				</p>
			)}
			{upload !== 0 && (
				<progress
					value={upload}
					max="100"
					id="uploader"
					css={css`display: block;`}>
					0%
				</progress>
			)}
			{finished && <p className="highlight">Filen är uppladdad!</p>}
		</div>
	);
};

export default Upload2;
