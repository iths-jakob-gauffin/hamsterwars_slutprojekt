// import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { BattleImage } from './../small_components/BattleImage';
export const ContestantCard = ({ latestGame, loser = false }) => {
	console.log('OUTPUT ÄR: ContestantCard -> latestGame', latestGame);
	return (
		<div
			className="latest-matchup-container"
			css={css`
				display: flex;
				flex-direction: column;
				flex: 0 0 45%;
				align-self: ${loser ? 'flex-end' : 'center'};
			`}>
			<BattleImage
				id={latestGame.id}
				name={latestGame.name}
				avatar={latestGame.avatar}
			/>
			<h4
				css={css`
					text-align: center;
					margin: .5rem 0;
				`}>
				{latestGame.name}
			</h4>
		</div>
	);
};
