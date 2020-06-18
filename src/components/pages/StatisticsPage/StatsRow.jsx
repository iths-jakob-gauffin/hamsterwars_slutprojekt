// import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const StatsRow = ({ stats, propertyKey }) => {
	return (
		<ol css={css`list-style: none;`}>
			{stats.map((stat, idx) => (
				<li
					key={stat.id}
					css={css`
						background-color: ${colors.purple1};
						&:nth-of-type(odd) {
							background-color: ${colors.white1};
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
