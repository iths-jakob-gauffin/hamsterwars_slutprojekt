import { Fragment } from 'react';

import { NavLink } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../styles/colors';

const MobileNavButton = ({
	children,
	navLinkUrl,
	setShowMenu,
	showMenu
}) => {
	return (
		<Fragment>
			<NavLink
				onClick={() => setShowMenu(!showMenu)}
				exact
				to={navLinkUrl}
				css={css`
					width: 80%;
					position: relative;
					z-index: 5;
					padding: 1em 1em;
					display: flex;
					justify-content: center;
					align-items: center;
					background: linear-gradient(
						155deg,
						${colors.purple3} 60%,
						${colors.purple1} 95%
					);
					border: none;
					color: ${colors.white1};
					transform: skewX(-20deg);
					border: 5px solid ${colors.white1};
					border-top-left-radius: 20px;
					border-bottom-right-radius: 5px;
					transition: border .1s linear;
					&:focus,
					&:hover,
					&:visited,
					&:link,
					&:active {
						text-decoration: none;
					}

					&:active {
						background: linear-gradient(
							155deg,
							${colors.blue1} 60%,
							${colors.purple1} 95%
						);
						color: ${colors.blue2};
						border: 5px solid ${colors.blue2};
					}
				`}>
				<h6
					className="logo-font-button no-box-shadow"
					css={css`
						transform: skewX(20deg);
						text-shadow: 1px 1px ${colors.gray3};
						&:active {
							text-shadow: 1px 1px ${colors.purple1};
						}
					`}>
					{children}
				</h6>
			</NavLink>
		</Fragment>
	);
};

export default MobileNavButton;
