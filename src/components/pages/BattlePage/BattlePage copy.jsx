import React from 'react';

import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { links } from './../../../utilities/links';
import { colors } from './../../../styles/colors';

import { BattleImage } from '../small_components/BattleImage';
import data from './../../../dummyData/hamsters.json';

const BattlePage = () => {
	return (
		<article
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1.4rem;
				width: 100%;
				flex: 1 1 100%;
			`}>
			<h1 className="logo-font logo-page-margin center">
				RANDOM BATTLE
			</h1>
			<h3 className="h5 center highlight">
				Välj den sötaste hamstern
			</h3>
			<div
				className="images-container"
				css={css`
					height: 100%;
					padding: .3rem .6rem;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
				`}>
				{data.hamsterObjects.map(hamster => (
					<BattleImage
						key={hamster.id}
						id={hamster.id}
						name={hamster.name}
					/>
				))}
			</div>
		</article>
	);
};

export default BattlePage;
