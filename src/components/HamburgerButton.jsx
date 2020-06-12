import React, { Fragment, useState, useEffect } from 'react';

import { useSpring, animated, config } from 'react-spring';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';

import { colors } from '../styles/colors';

const HamburgerButton = ({
	showMenu,
	setShowMenu,
	initializeMenu,
	setInitializeMenu
}) => {
	// const [ openMenu, setOpenMenu ] = useState(false);
	// console.log('OUTPUT ÄR: openMenu', openMenu);
	// console.log('OUTPUT ÄR: showMenu', showMenu);

	// useEffect(
	// 	() => {
	// 		initializeMenu && !showMenu && setShowMenu(!showMenu);
	// 	},
	// 	[ openMenu ]
	// );

	const handleClick = () => {
		// !initializeMenu && setInitializeMenu(true);

		setShowMenu(!showMenu);
	};

	const {
		opacity,
		opacityInverted,
		goDown,
		goUp,
		rotateDown,
		rotateUp,
		bgColor
	} = useSpring({
		opacity: showMenu ? 0 : 1,
		opacityInverted: showMenu ? 1 : 0,
		config: config.wobbly,
		rotateDown: showMenu ? 'rotate(45deg)' : 'rotate(0deg)',
		rotateUp: showMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
		goDown: showMenu ? '20px' : '2px',
		goUp: showMenu ? '0px' : '38px',
		bgColor: showMenu ? colors.purple3 : colors.yellow1
	});

	return (
		<Fragment>
			<button
				className="hamburger-button"
				onClick={handleClick}
				css={css`
					margin: .3rem;
					width: 48px;
					height: 48px;
					background: none;
					outline: none;
					border: none;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					position: relative;
					z-index: 2;
				`}>
				<StyledBar
					style={{
						opacity,
						top: goDown,
						backgroundColor: bgColor
					}}
					css={css`background-color: ${colors.purple1};`}
				/>
				<StyledBar
					style={{
						transform: rotateDown,
						backgroundColor: bgColor
					}}
					css={css`
						background-color: ${colors.purple3};
						top: 20px;
					`}
				/>
				<StyledBar
					style={{
						transform: rotateUp,
						opacity: opacityInverted,
						backgroundColor: bgColor
					}}
					css={css`
						background-color: ${colors.purple3};
						top: 20px;
					`}
				/>
				<StyledBar
					style={{
						opacity,
						top: goUp,
						backgroundColor: bgColor
					}}
					css={css`background-color: ${colors.purple1};`}
				/>
			</button>
		</Fragment>
	);
};

const StyledBar = styled(animated.span)`
	background-color: ${colors.purple3};
	height: .4rem;
	width: 100%;
	border-radius: 17%;
	position: absolute;
	z-index: 10;
`;

export default HamburgerButton;
