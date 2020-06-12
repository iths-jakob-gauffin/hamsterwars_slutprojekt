import React from 'react';

const Upload = () => {
	// const fileUpload = e => {
	// 	console.log('nåt händer');
	// 	e.preventDefault();
	// 	let file = document.querySelector('#file').files[0];
	// 	console.log('OUTPUT ÄR: App -> file', file);

	// 	let formData = new FormData();
	// 	formData.append('photo', file);
	// 	console.log('OUTPUT ÄR: App -> formData', formData);
	// 	///////////////////////////////
	// 	var myHeaders = new Headers();
	// 	myHeaders.append('Authorization', 'abc123');

	// 	let message = '';
	// 	fetch('/files', {
	// 		method: 'POST',
	// 		body: formData,
	// 		headers: myHeaders
	// 	})
	// 		.then(resp => resp.json())
	// 		.then(resp => {
	// 			message = resp.msg;
	// 			alert(resp.msg);
	// 		})
	// 		.catch(err => console.error(err));
	// 	console.log(message);
	// };

	const uploadToCloud = e => {
		console.log('upload to cloud funktionen körs');
		e.preventDefault();
		let file = document.querySelector('#cloud-file').files[0];
		console.log('OUTPUT ÄR: App -> file', file);

		let formData = new FormData();
		formData.append('photo', file);
		console.log('OUTPUT ÄR: App -> formData', formData);

		var myHeaders = new Headers();
		myHeaders.append('Authorization', 'abc123');

		fetch('/files/cloud', {
			method: 'POST',
			body: formData,
			headers: myHeaders
		})
			.then(resp => resp.json())
			.then(resp => {
				let successMessage = `${resp.msg}. Url to image: ${resp.urlToImage}`;
				alert(successMessage);
			})
			.catch(err => console.error(err));
	};

	return (
		<div>
			{/* <h3>File uploadish</h3>
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
			<br /> */}
			<h3>LADDA UPP TILL MOLNET</h3>
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
			</form>
		</div>
	);
};

export default Upload;
