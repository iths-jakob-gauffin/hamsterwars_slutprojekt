import axios from 'axios';

export const getCloudImage = () => {
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

			document.querySelector('img').src = base64Flag + imageStr;
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
