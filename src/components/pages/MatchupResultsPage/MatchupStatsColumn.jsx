import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { MatchupStatsRow } from './MatchupStatsRow';
export const MatchupStatsColumn = ({
	title,
	stats,
	propertyKey,
	innerArray,
	handleClick
}) => (
	<section>
		<header>
			<h3
				css={css`
					color: ${title === '_' ? '#f26be9' : '#f8f8f8'};
					margin: ${title === '_' ? '0 1rem' : '0'};
				`}>
				{title}
			</h3>
		</header>
		<MatchupStatsRow
			handleClick={handleClick}
			stats={stats}
			propertyKey={propertyKey}
			innerArray={innerArray}
		/>
	</section>
);
