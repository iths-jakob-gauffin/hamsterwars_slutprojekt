import React, { Fragment, useState } from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { animated } from 'react-spring';

const MobileNavButton = ({ children }) => {
	return (
		<Fragment>
			<button
				css={css`
					width: 70%;
					position: relative;
					z-index: 5;
					padding: 1em 1em;
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

					&:active {
						background-color: blue;
					}
				`}
				onClick={() => console.log('hej')}>
				<h6
					className="logo-font-button"
					css={css`
						transform: skewX(20deg);
						text-shadow: 1px 2px ${colors.gray3};
					`}>
					{children}
				</h6>
			</button>
		</Fragment>
	);
};

export default MobileNavButton;
