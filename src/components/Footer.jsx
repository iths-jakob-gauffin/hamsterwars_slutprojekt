import React, { Fragment, useState, useEffect } from 'react';

// Styling
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Tablet, Mobile, Default } from './../styles/MediaQuerys';
import { useTransition, animated, config } from 'react-spring';

import { colors } from './../styles/colors';

import HamburgerButton from './HamburgerButton';

const Footer = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	const [ initializeMenu, setInitializeMenu ] = useState(false);

	const [ delay, setDelay ] = useState(false);

	let villkor = false;
	if (showMenu) {
		setTimeout(() => {
			villkor = true;
		}, 2000);
	}

	useEffect(
		() => {
			if (!showMenu && initializeMenu) {
				setTimeout(() => {
					setDelay(!delay);
				}, 100);
			}
		},
		[ showMenu ]
	);

	const transition = useTransition(showMenu, null, {
		// from: { opacity: 0 },
		// enter: { opacity: 1 },
		// leave: { opacity: 0 },
		from: {
			position: 'absolute',
			zIndex: 1,
			top: '90%',
			left: '70%',
			borderRadius: '50%'
		},
		enter: {
			top: '-10%',
			left: '-20%',
			borderRadius: '0%',
			width: '200%',
			height: '200%'
		},
		leave: {
			top: '100%',
			left: '70%',
			borderRadius: '50%'
		},
		config: config.gentle
	});

	return (
		<Fragment>
			<Mobile>
				<StyledFooterContainer className="footer-before-burger">
					<HamburgerButton
						showMenu={showMenu}
						setShowMenu={setShowMenu}
						initializeMenu={initializeMenu}
						setInitializeMenu={setInitializeMenu}
					/>
					<div
						className="menu-container"
						css={css`
							width: ${showMenu ? '100%' : '0%'};
							height: ${showMenu ? '87%' : '100%'};
							background-color: none;
							/* opacity: 0; */
							top: 13%;
							left: 0;
							position: ${showMenu
								? 'absolute'
								: 'relative'};
							overflow: hidden;
						`}>
						{transition.map(
							({ item, key, props }) =>
								item && (
									<MobileMenu
										key={key}
										style={props}
										onClick={() =>
											setShowMenu(!showMenu)}
									/>
								)
						)}
					</div>
				</StyledFooterContainer>
			</Mobile>
			<Desktop>Desktop or laptop</Desktop>
			{/* <Tablet>Tablet</Tablet> */}
			<Default>
				<StyledFooterContainer
					css={css`background-color: ${colors.purple2};`}>
					<h3>Not mobile (desktop or laptop or tablet)</h3>
				</StyledFooterContainer>
			</Default>
		</Fragment>
	);
};

const MobileMenu = styled(animated.main)`
background-color: ${colors.yellow2};
top: 0;
left:0;
width: 100%;
height: 100%; 
border-radius: 50%;
z-index: 1;
position: absolute;
overflow:hidden;
`;

const StyledFooterContainer = styled.footer`
  /* background-color: ${colors.purple3}; */
  /* background: linear-gradient(145deg, ${colors.yellow2} 5%, ${colors.yellow3} 15%, ${colors.purple3} 75%); */
	padding:  0 1.5rem 0 1.5rem;
	border-bottom: 2px solid ${colors.blue1};
	width: 100%;
	height: 100%;
	display: flex;
  justify-content: flex-end;
  align-items: center;
	overflow: hidden;
	/* position:relative; */
	/* right: -75%; */
  
`;

const StyledLogo = styled.div`
  /* color: ${colors.whiteGreen}; */
  background: -webkit-linear-gradient(271deg, ${colors.yellow2}, ${colors.yellow1} 40%, ${colors.yellow3} 45%, ${colors.yellow1} 48%, ${colors.white1} 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: 1px 1px ${colors.blue2}; */
  /* position: absolute; */
  
`;

const StyledHamburgerButton = styled.button`
	width: 3rem;
	height: 3rem;
	background-color: ${colors.purple3};
`;

export default Footer;
