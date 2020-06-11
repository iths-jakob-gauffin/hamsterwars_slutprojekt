import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { shadows } from './../styles/shadows';

const CTA = ({ link, text }) => {
	return (
		<Link
			className="logo-font-button"
			to={link}
			css={css`
				margin: 0 2rem;
				padding: 1em 2em;
				background-color: ${colors.purple2};
				border-radius: 10px;
				&:focus,
				&:hover,
				&:visited,
				&:link,
				&:active {
					text-decoration: none;
				}
				color: ${colors.white1};
				border: 5px solid ${colors.purple3};
				font-size: 1.5em;
				/* box-shadow: ${shadows.boxShadow1}; */
				-moz-box-shadow: inset 0 0 10px #000000;
				-webkit-box-shadow: inset 0 0 10px #000000;
				box-shadow: inset 0 0 10px #000000;
			`}>
			{text}
		</Link>
	);
};

export default CTA;
