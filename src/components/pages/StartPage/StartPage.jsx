import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import CTA from './../../CTA';

const StartPage = () => {
	return (
		<main
			css={css`
				width: 100%;
				height: 100%;
				padding: 2rem 1rem;
				display: flex;
				flex-direction: column;
				align-items: center;
			`}>
			<img
				src="./hamsterwars_icon.svg"
				alt="testbilden"
				css={css`width: 90%;`}
			/>
			<article
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					padding: 1rem;
				`}>
				<h1>BARA EN HAMSTER KAN VA SÖTAST</h1>
				{/* <h1>bara en hamster kan va sötast</h1> */}
				<CTA link={links.battle} text={'TO BATTLE'} />
			</article>
		</main>
	);
};

export default StartPage;
