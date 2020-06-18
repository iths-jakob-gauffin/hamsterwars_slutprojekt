import { Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../styles/colors';
import { shadows } from './../styles/shadows';

const CTA = ({ link, text }) => {
	return (
		<Link
			className="logo-font-button"
			to={link}
			css={css`
				display: block;
				margin: .6rem 2rem;
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
				background: #f21de4;
				box-shadow: inset -15px -15px 22px #ce19c2,
					inset 15px 15px 22px #ff21ff;
				&:active {
					box-shadow: inset 15px 15px 22px #ce19c2,
						inset -15px -15px 22px #ff21ff;
				}
			`}>
			{text}
		</Link>
	);
};

export default CTA;
