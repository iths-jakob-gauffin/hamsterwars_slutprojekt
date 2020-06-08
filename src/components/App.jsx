import React from 'react';

// Styling
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';

const App = () => {
	return (
		<div
			css={css`
				width: 100%;
				@media (max-width: 500px) {
					background-color: hotpink;
					& .logo-font {
						font-size: 1em;
						color: green;
					}
				}
				background-color: blue;
			`}>
			<h1 className="logo-font">HAMSTER WARS</h1>
			<h1>start</h1>
		</div>
	);
};

export default App;
