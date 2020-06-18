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
										height: 91%;
										background-color: none;
										top: 9%;
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
												/>
											)
									)}
								</div>
							)
					)}
				</StyledFooterContainer>
			</Mobile>
			<Desktop>Desktop or laptop</Desktop>
			<Default>
				<StyledFooterContainer
					css={css`background-color: ${colors.purple2};`}>
					<h3>Footer</h3>
				</StyledFooterContainer>
			</Default>
		</Fragment>
	);
};

const StyledFooterContainer = styled.footer`
	padding: 0 1.5rem 0 1.5rem;
	border-bottom: 2px solid ${colors.blue1};
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	overflow: hidden;
`;

export default Footer;
