// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';

// import { dummyAction } from './../../../redux/actions';

//Redux
import { connect } from 'react-redux';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import CTA from './../../CTA';

const StartPage = ({ firstState }) => {
	return (
		<main
			css={css`
				width: 100%;
				/* height: 100%; */
				padding: 0 1rem;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
			`}>
			<img
				src="./hamsterwars_icon4shadow.svg"
				alt="testbilden"
				css={css`
					width: 90%;
					/* margin: 2rem 0 1rem; */
				`}
			/>
			<article
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: space-around;
					text-align: center;
					/* padding: 1rem; */
					/* height: 100%; */
				`}>
				{/* <button onClick={() => dummyAction('från startpage')}>
					sanda
				</button> */}
				<h1 className="inline">BARA </h1>
				<h1 className="giant inline" css={css`margin: .4rem 0;`}>
					1
				</h1>{' '}
				<h1 className="inline">HAMSTER KAN VA SÖTAST</h1>
				{/* <h1>bara en hamster kan va sötast</h1> */}
				<CTA link={links.battle} text={'RANDOM BATTLE'} />
				<h3 css={css`margin: 1rem 0 1rem;`}>Om projektet</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Non, quam tempore consectetur deleniti voluptates
					voluptatibus error maxime accusamus eaque numquam.
					Repellat animi est harum molestiae, sit repellendus
					aliquid, aliquam deserunt quis distinctio at soluta rem
					voluptatum minus rerum nihil doloremque, earum odio?
					Nemo, eum architecto saepe aliquid voluptatum minus
					officia?
				</p>
			</article>
		</main>
	);
};

const mapStateToProps = state => {
	return {
		firstState: state
	};
};

export default connect(mapStateToProps, null)(StartPage);
