import { Fragment, useState } from 'react';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Mobile, Default } from './../styles/MediaQuerys';
import { useTransition, config } from 'react-spring';
import { colors } from './../styles/colors';

// Components
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';

const Footer = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	// const [ initializeMenu, setInitializeMenu ] = useState(false);

	const transition = useTransition(showMenu, null, {
		from: {
			position: 'absolute',
			zIndex: 1,
			top: '90%',
			left: '70%',
			borderRadius: '50%'
		},
		enter: {
			top: '-10%',
			left: '-10%',
			borderRadius: '0%',
			width: '120%',
			height: '120%'
		},
		leave: {
			top: '100%',
			left: '70%',
			borderRadius: '50%'
		},
		config: config.stiff
	});

	const menuContainerTransition = useTransition(showMenu, null, {
		from: { position: 'absolute', width: '0%' },
		enter: { width: '100%' },
		leave: { width: '0%' },
		config: config.stiff
	});

	// TODO: förmodligen värt att baka in allting i en enda transition. keysen verkar ställa till det så två element får samma keys.
	return (
		<Fragment>
			<Mobile>
				<StyledFooterContainer className="footer-before-burger">
					<HamburgerButton
						showMenu={showMenu}
						setShowMenu={setShowMenu}
					/>
					{menuContainerTransition.map(
						({ item, keyContainer, propsContainer }) =>
							item && (
								<div
									key={'menu-container'}
									className="menu-container"
									style={propsContainer}
									css={css`
										width: 100%;
										height: 87%;
										background-color: none;
										top: 13%;
										left: 0;
										position: absolute;
										overflow: hidden;
									`}>
									{transition.map(
										({ item, key, props }) =>
											item && (
												<MobileMenu
													key={key}
													style={props}
													showMenu={showMenu}
													setShowMenu={
														setShowMenu
													}
													// onClick={() =>
													// 	setShowMenu(
													// 		!showMenu
													// 	)}
												/>
											)
									)}
								</div>
							)
					)}
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

// const MobileMenu = styled(animated.main)`
// background-color: ${colors.yellow2};
// top: 0;
// left:0;
// width: 100%;
// height: 100%;
// border-radius: 50%;
// z-index: 1;
// position: absolute;
// overflow:hidden;
// `;

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

// const StyledLogo = styled.div`
//   /* color: ${colors.whiteGreen}; */
//   background: -webkit-linear-gradient(271deg, ${colors.yellow2}, ${colors.yellow1} 40%, ${colors.yellow3} 45%, ${colors.yellow1} 48%, ${colors.white1} 65%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   /* text-shadow: 1px 1px ${colors.blue2}; */
//   /* position: absolute; */

// `;

// const StyledHamburgerButton = styled.button`
// 	width: 3rem;
// 	height: 3rem;
// 	background-color: ${colors.purple3};
// `;

export default Footer;
