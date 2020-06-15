import React from 'react';

// import { getCloudImage } from './../../../api/getCloudImage';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const getCloudImage = () => {
	function arrayBufferToBase64(buffer) {
		var binary = '';
		var bytes = [].slice.call(new Uint8Array(buffer));

		bytes.forEach(b => (binary += String.fromCharCode(b)));

		return window.btoa(binary);
	}

	var myHeaders = new Headers();
	myHeaders.append('Authorization', 'abc123');

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch('/api/assets/42', requestOptions).then(response => {
		response.arrayBuffer().then(buffer => {
			var base64Flag = 'data:image/jpeg;base64,';
			var imageStr = arrayBufferToBase64(buffer);

			document.querySelector('#imgStream').src =
				base64Flag + imageStr;
		});
	});
	// fetch("/api/assets/42", requestOptions)
	//   .then(response => response.text())
	//   .then(result => console.log(result))
	//   .catch(error => console.log('error', error));

	// var config = {
	// 	method: 'get',
	// 	url: '/api/assets/42',
	// 	headers: {
	// 		Authorization: 'abc123'
	// 	}
	// };

	// try {
	// 	let resp.arrayBuffer() = await axios(config);
	//   console.log('OUTPUT ÄR: getCloudImage -> resp', resp);
	//   var base64Flag = 'data:image/jpeg;base64,';
	//   var imageStr = arrayBufferToBase64(buffer);
	// 	// return resp;
	// } catch (err) {
	// 	console.error(err);
	// }
};

const Upload = () => {
	const fileUpload = async e => {
		console.log('nåt händer');
		e.preventDefault();
		let file = document.querySelector('#file').files[0];
		console.log('OUTPUT ÄR: App -> file', file);

		let formData = new FormData();
		formData.append('photo', file);
		console.log('OUTPUT ÄR: App -> formData', formData);
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
		console.log(message);
	};

	// .then(resp => resp.json())
	// .then(resp => {
	// 	console.log('resp', resp);

	// let successMessage = `${resp.msg}. Url to image: ${resp.urlToImage}`;
	// alert(successMessage);
	// })
	// .catch(err => console.error(err));
	// };

	return (
		<div>
			<h3>File uploadish</h3>
			<form action="" encType="multipart/form-data" method="POST">
				<input type="file" name="photo" id="file" />
				<button
					className="styled-btn"
					onClick={e => fileUpload(e)}>
					Send
				</button>
			</form>
			<br />
			<br />
			<br />
			{/* <h3>LADDA UPP TILL MOLNET</h3>
			<form encType="multipart/form-data" method="POST">
				<label htmlFor="cloud-file" className="styled-btn">
					Bläddra...
				</label>
				<input
					type="file"
					name="photo"
					id="cloud-file"
					className="display-none"
				/>
				<button
					className="styled-btn"
					onClick={e => uploadToCloud(e)}>
					Send
				</button>
				<img
					id="imgStream"
					src=""
					alt="streambild"
					css={css`width: 100%;`}
				/>
			</form> */}
		</div>
	);
};

export default Upload;
