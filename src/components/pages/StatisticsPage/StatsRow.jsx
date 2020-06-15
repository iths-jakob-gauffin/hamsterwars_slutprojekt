import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
//TODO: försök att få in en emoji, en buckla och nåt annat

export const StatsRow = ({ stats, propertyKey }) => {
	console.log('OUTPUT ÄR: StatsRow -> stats', stats);
	const sheep = () => `<span role="img" aria-label="sheep">
			🐑
		</span>`;
	return (
		<ol css={css`list-style: none;`}>
			{stats.map((stat, idx) => (
				<li
					key={stat.id}
					css={css`
						background-color: ${colors.blue1};
						&:nth-of-type(odd) {
							background-color: ${colors.yellow1};
						}
					`}>
					<p>
						{propertyKey === 'idx' ? (
							idx + 1
						) : (
							stat[propertyKey]
						)}
					</p>
				</li>
			))}
		</ol>
	);
};
