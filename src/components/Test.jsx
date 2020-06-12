import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import styled from '@emotion/styled';

const App = () => {
	var myHeaders = new Headers();
	myHeaders.append('Authorization', 'abc123');

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const getData = async () => {
		let response = await fetch(
			'http://localhost:7000/hamsters',
			requestOptions
		);
		let data = await response.json();
	};

	return (
		<StyledDiv>
			<button
				css={css`background-color: mediumspringgreen;`}
				onClick={getData}>
				klicka
			</button>
		</StyledDiv>
	);
};

export default App;

const StyledDiv = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: hotpink;
`;
