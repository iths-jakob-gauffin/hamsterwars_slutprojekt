// import React from 'react';
import { Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { shadows } from './../styles/shadows';

const CTA = ({ link, text }) => {
	return (
		// <div
		// 	className="cta-container"
		// 	css={css`
		// 		/* width: 100%;
		// 		height: 100%; */
		// 		flex: 1 1 100%;
		// 	`}>
		<Link
			className="logo-font-button"
			to={link}
			css={css`
				display:block;
				margin: 0 2rem;
				padding: 1em 2em;
				background-color: ${colors.purple2};
				border-radius: 30px;
				outline: none;
				&:focus,
				&:hover,
				&:visited,
				&:link,
				&:active {
					text-decoration: none;
				}
				color: ${colors.white1};
				border: 2px solid ${colors.yellow1};
				font-size: 1.5em;
				/* box-shadow: ${shadows.boxShadow1}; */
				/* -moz-box-shadow: inset 0 0 10px #000000;
				-webkit-box-shadow: inset 0 0 10px #000000;
				box-shadow: inset 0 0 10px #000000; */
				background: #F21DE4;
				box-shadow: inset -15px -15px 22px #ce19c2, 
				inset 15px 15px 22px #ff21ff;
				&:active{
					box-shadow: inset 15px 15px 22px #ce19c2, 
            inset -15px -15px 22px #ff21ff;
				}
				`}>
			{text}
		</Link>
		// </div>
	);
};

export default CTA;
