// import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { MatchupStatsColumn } from './MatchupStatsColumn';
export const MatchupStatsBox = ({ allGames, handleClick }) => {
	return (
		<article
			css={css`
				display: flex;
				justify-content: space-evenly;
			`}>
			<MatchupStatsColumn
				title={'Matchnr.'}
				stats={allGames}
				propertyKey={'idx'}
				handleClick={handleClick}
			/>
			<MatchupStatsColumn
				title={'Hamster 1'}
				stats={allGames}
				propertyKey={'contestantOne'}
				innerArray={'contestants'}
				handleClick={handleClick}
			/>
			<MatchupStatsColumn
				title={'_'}
				stats={allGames}
				propertyKey={'vs'}
				handleClick={handleClick}
			/>
			<MatchupStatsColumn
				title={'Hamster 2'}
				stats={allGames}
				propertyKey={'contestantTwo'}
				innerArray={'contestants'}
				handleClick={handleClick}
			/>
		</article>
	);
};
