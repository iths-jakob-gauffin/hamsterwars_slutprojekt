import React, { useState } from 'react';

import { storage } from './../../../firebase';

const Upload2 = () => {
	const [ upload, setUpload ] = useState(0);
	const [ finished, setFinished ] = useState(false);
	// let uploader = document.getElementById('uploader');
	const onChangeFile = e => {
		// e.preventDefault();
		let file = e.target.files[0];
		console.log('OUTPUT ÄR: file', file);
		// file.name = 'numedHamsternamn';
		let newFile = { ...file, ['name']: 'annathamsternamn' };

		console.log('OUTPUT ÄR: newFile', newFile);
		let storageRef = storage.ref('/' + 'annathamsternamn');

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
			<progress value={upload} max="100" id="uploader">
				0%
			</progress>
			{/* <input type="file" value="upload" id="fileButton" /> */}
			<input
				type="file"
				value=""
				name=""
				id="fileButton"
				onChange={onChangeFile}
			/>
			{finished && <p>Filen är uppladdad!</p>}
		</div>
	);
};

export default Upload2;
