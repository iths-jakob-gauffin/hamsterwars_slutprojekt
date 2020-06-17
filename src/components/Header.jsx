import { Fragment } from 'react';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Styling
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import './../styles/typography.css';
import './../styles/base.css';
import { Desktop, Mobile, Default } from './../styles/MediaQuerys';

import { colors } from './../styles/colors';

import { links } from './../utilities/links';

const Header = () => {
	return (
		<Fragment>
			<Mobile>
				<StyledHeaderContainer>
					<NavLink
						to={links.start}
						css={css`
							&:focus,
							&:hover,
							&:visited,
							&:link,
							&:active {
								text-decoration: none;
							}
						`}>
						<StyledLogo className="logo-font h1">
							HAMSTER-WARS
						</StyledLogo>
					</NavLink>
				</StyledHeaderContainer>
			</Mobile>
			<Desktop>Desktop or laptop</Desktop>
			{/* <Tablet>Tablet</Tablet> */}
			<Default>
				<StyledHeaderContainer
					css={css`background-color: ${colors.purple2};`}>
					<h3>Not mobile (desktop or laptop or tablet)</h3>
				</StyledHeaderContainer>
			</Default>
		</Fragment>
	);
};

const StyledHeaderContainer = styled.header`
  /* background-color: ${colors.purple3}; */
  background: linear-gradient(145deg, ${colors.yellow2} 5%, ${colors.yellow3} 15%, ${colors.purple3} 75%);
	padding: 1rem .5rem;
	border-bottom: 2px solid ${colors.blue1};
	width: 100%;
	height: 100%;
	display: flex;
  justify-content: center;
  align-items: center;
  
`;

const StyledLogo = styled.div`
	width:100%;
  /* color: ${colors.whiteGreen}; */
  background: -webkit-linear-gradient(271deg, ${colors.yellow2}, ${colors.yellow1} 40%, ${colors.yellow3} 45%, ${colors.yellow1} 48%, ${colors.white1} 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	
  /* text-shadow: 1px 1px ${colors.blue2}; */
  /* position: absolute; */
  
`;

export default Header;
