import React, { Fragment, useState } from 'react';

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
	const [ showMenu, setShowMenu ] = useState(true);

	return (
		<Fragment>
			<Mobile>
				<StyledFooterContainer>
					<HamburgerButton
						showMenu={showMenu}
						setShowMenu={setShowMenu}
					/>
					{showMenu && <MobileMenu />}
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
background-color: ${colors.yellow3};
top:0;
left:0;
width: 100%;
height: 100%;
z-index: 1;
position: absolute;
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
