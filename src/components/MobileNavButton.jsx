import React, { Fragment, useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { animated } from 'react-spring';

const MobileNavButton = ({
	children,
	navLinkUrl,
	setShowMenu,
	showMenu
}) => {
	// console.log('OUTPUT ÄR: setShowMenu', setShowMenu);
	// const handleClick = () => {
	// 	if (setShowMenu) {
	// 		setShowMenu(!showMenu);
	// 	}
	// };

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
				{/* <button */}

				<h6
					className="logo-font-button"
					css={css`
						transform: skewX(20deg);
						text-shadow: 1px 1px ${colors.gray3};
						&:active {
							text-shadow: 1px 1px ${colors.purple1};
						}
					`}>
					{children}
				</h6>
				{/* </button> */}
			</NavLink>
		</Fragment>
	);
};

export default MobileNavButton;
