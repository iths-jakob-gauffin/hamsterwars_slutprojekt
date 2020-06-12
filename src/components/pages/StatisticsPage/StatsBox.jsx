import React from 'react';
import { css } from '@emotion/core';
import { topData } from './top5Dummy';

export const StatsBox = ({ stats }) => {
	return (
		<ol css={css`list-style: none;`}>
			{stats.map((stat, idx) => (
				<li key={stat.id}>
					<p>
						{idx + 1}: {stat.name} | W :{stat.wins} | L :{stat.defeats}{' '}
						| R : {stat.ratio}
					</p>
				</li>
			))}
		</ol>
	);
};
