import React from 'react';

// import { getCloudImage } from './../../../api/getCloudImage';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Upload3 = () => {
	const fileUpload = e => {
		e.preventDefault();
		let file = document.querySelector('#file').files[0];

		let formData = new FormData();
		formData.append('photo', file);

		///////////////////////////////
		var myHeaders = new Headers();
		myHeaders.append('Authorization', 'abc123');

		let message = '';
		fetch('/api/files', {
			method: 'POST',
			body: formData,
			headers: myHeaders
		})
			.then(resp => resp.json())
			.then(resp => {
				message = resp.msg;
				alert(resp.msg);
			})
			.catch(err => console.error(err));
		// console.log(message);
	};
	return (
		<form action="" encType="multipart/form-data" method="POST">
			<input type="file" name="photo" id="file" />
			<button className="styled-btn" onClick={e => fileUpload(e)}>
				Send
			</button>
		</form>
	);
};

export default Upload3;
