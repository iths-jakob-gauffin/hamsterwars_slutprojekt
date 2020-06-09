import React, { Fragment, useState } from 'react';

import { useSpring, animated } from 'react-spring';

// Styling
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';

import { colors } from '../styles/colors';

const HamburgerButton = () => {
	const [ openMenu, setOpenMenu ] = useState(false);
	console.log('OUTPUT ÄR: HamburgerButton -> openMenu', openMenu);

	const { opacity, rotateDown, rotateUp } = useSpring({
		position: 'absolute',
		opacity: openMenu ? 0 : 1,
		config: { mass: 5, tension: 1000, friction: 80 },
		rotateDown: openMenu ? 'rotate(45deg)' : 'rotate(0)',
		rotateUp: openMenu ? 'rotate(-45deg)' : 'rotate(0)'
	});
	const [ burgerAnim, setBurgerAnim ] = useSpring(() => ({
		opacity: 1
	}));
	console.log('OUTPUT ÄR: burgerAnim', burgerAnim);

	console.log('OUTPUT ÄR: HamburgerButton -> rotateDown', rotateDown);

	const toggleBurgerAnim = () => {
		setBurgerAnim({ opacity: openMenu ? 1 : 0 });
		setOpenMenu(!openMenu);
	};

	return (
		<Fragment>
			{/* <div
				className="button-container"
				onClick={() => setOpenMenu(!openMenu)}> */}
			<button onClick={toggleBurgerAnim}>KLICK</button>
			<div
				className="button-container"
				// style={props}
				onClick={toggleBurgerAnim}
				// onClick={() => setOpenMenu(!openMenu)}
				css={css`
					width: 3rem;
					height: 2.5rem;
					background: none;
					border: none;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					/* overflow: hidden; */
					position: relative;
				`}>
				<StyledBar
					onClick={toggleBurgerAnim}
					// onClick={() => setOpenMenu(!openMenu)}
					style={{ opacity }}
					// style={{ opacity }}
					// css={css`
					//       top: ${openMenu ? '18px' : '0'};
					//       /* opacity: ${openMenu ? 0 : 1}; */
					//       `}
				/>
				<StyledBar
					onClick={toggleBurgerAnim}
					// onClick={() => setOpenMenu(!openMenu)}
					// style={{ opacity }}
					// css={css`
					//       top: ${openMenu ? '18px' : '0'};
					//       /* opacity: ${openMenu ? 0 : 1}; */
					//       `}
					style={{ opacity }}
				/>
			</div>
			{/* </div> */}
		</Fragment>
	);
};

const StyledBar = styled(animated.span)`
	background-color: ${colors.purple3};
	height: .4rem;
	width: 100%;
	border-radius: 17%;
	position: absolute;
`;

export default HamburgerButton;
