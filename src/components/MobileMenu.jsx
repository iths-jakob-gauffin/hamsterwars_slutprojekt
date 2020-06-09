import React, { Fragment } from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { animated } from 'react-spring';

//Components
import MobileNavButton from './MobileNavButton';

const MobileMenu2 = ({ style }) => {
	return (
		<Fragment>
			<StyledMobileMenu style={style}>
				<div
					className="nav-container"
					css={css`
						/* background-color: black; */
						width: 80%;
						height: 60%;
						position: relative;
						margin-top: -4rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
					`}>
					<MobileNavButton key={'start'}>START</MobileNavButton>
					<MobileNavButton key={'slumpad_battle'}>
						SLUMPAD BATTLE
					</MobileNavButton>
					<MobileNavButton key={'specifik_battle'}>
						SPECIFIK BATTLE
					</MobileNavButton>
					<MobileNavButton key={'resultat'}>
						RESULTAT
					</MobileNavButton>
					<MobileNavButton key={'statistik'}>
						STATISTIK
					</MobileNavButton>
					<MobileNavButton key={'upload'}>
						LÄGG TILL HAMSTER
					</MobileNavButton>
				</div>
			</StyledMobileMenu>
		</Fragment>
	);
};

export default MobileMenu2;

const StyledMobileMenu = styled(animated.main)`
background-color: ${colors.yellow2};
top: 0;
left:0;
width: 100%;
height: 100%; 
border-radius: 50%;
z-index: 1;
position: relative;
display: flex;
justify-content: center;
align-items: center;
/* overflow:hidden; */
`;
