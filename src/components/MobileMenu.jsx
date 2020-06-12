import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from './../styles/colors';
import { animated } from 'react-spring';

//Components
import MobileNavButton from './MobileNavButton';
import { links } from './../utilities/links';

const MobileMenu = ({ style, ...props }) => {
	//TODO: knapparna renderas tre gånger varje de visas...
	// TODO: lås scrollen
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
					<MobileNavButton
						navLinkUrl={links.start}
						key={'start'}
						{...props}>
						START
					</MobileNavButton>

					<MobileNavButton
						navLinkUrl={links.battle}
						key={'slumpad_battle'}
						{...props}>
						RANDOM BATTLE
					</MobileNavButton>

					<MobileNavButton
						navLinkUrl={links.specificBattle}
						key={'specifik_battle'}
						{...props}>
						VÄLJ BATTLE
					</MobileNavButton>
					<MobileNavButton
						navLinkUrl={links.matchupResult}
						key={'resultat'}
						{...props}>
						RESULTAT
					</MobileNavButton>
					<MobileNavButton
						navLinkUrl={links.stats}
						key={'statistik'}
						{...props}>
						STATISTIK
					</MobileNavButton>
					<MobileNavButton
						navLinkUrl={links.upload}
						key={'upload'}
						{...props}>
						LÄGG TILL HAMSTER
					</MobileNavButton>
				</div>
			</StyledMobileMenu>
		</Fragment>
	);
};

export default MobileMenu;

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
`;
