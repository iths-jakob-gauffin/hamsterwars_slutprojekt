import { Fragment } from 'react';

import { useSpring, animated, config } from 'react-spring';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';

import { colors } from '../styles/colors';

const HamburgerButton = ({ showMenu, setShowMenu }) => {
	const handleClick = () => {
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
		bgColor: showMenu ? colors.purple3 : colors.yellow1,
		outline: 'none',
		outlineWidth: '0px'
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
					outline-width: 0px;
					&:visited,
					&:active,
					&:focus {
						outline: 0;
						border: 'none';
						box-shadow: none;
						-moz-outline-style: none;
					}
				`}>
				<StyledBar
					style={{
						opacity,
						top: goDown,
						backgroundColor: bgColor
					}}
					css={css`
						outline-width: 0px;
						&:visited,
						&:active,
						&:focus {
							outline: 0;
							border: 'none';
							box-shadow: none;
							-moz-outline-style: none;
						}
					`}
				/>
				<StyledBar
					style={{
						transform: rotateDown,
						backgroundColor: bgColor
					}}
					css={css`
						outline-width: 0px;
						&:visited,
						&:active,
						&:focus {
							outline-width: 0px;
							outline: 0;
							border: 'none';
							box-shadow: none;
							-moz-outline-style: none;
						}
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
						outline-width: 0px;
						&:visited,
						&:active,
						&:focus {
							outline-width: 0px;
							outline: 0;
							border: 'none';
							box-shadow: none;
							-moz-outline-style: none;
						}
						top: 20px;
					`}
				/>
				<StyledBar
					style={{
						opacity,
						top: goUp,
						backgroundColor: bgColor
					}}
					css={css`
						outline-width: 0px;
						&:visited,
						&:active,
						&:focus {
							outline-width: 0px;
							outline: 0;
							border: 'none';
							box-shadow: none;
							-moz-outline-style: none;
						}
					`}
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
	outline-width: 0px;
	&:visited,
						&:active,
						&:focus {
							outline-width: 0px;
							outline: 0;
							border: 'none';
							box-shadow: none;
							-moz-outline-style: none;
						}
	
`;

export default HamburgerButton;
