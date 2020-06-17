// import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
//TODO: försök att få in en emoji, en buckla och nåt annat

export const MatchupStatsRow = ({
	stats,
	propertyKey,
	innerArray = false,
	handleClick
}) => {
	return (
		<ol
			css={css`
				list-style: none;
				cursor: pointer;
			`}>
			{!innerArray ? (
				stats.map((stat, idx) => (
					<li
						onClick={() => handleClick(stat.id)}
						key={stat.id}
						css={css`
							background-color: ${colors.blue1};

							&:nth-of-type(odd) {
								background-color: ${colors.yellow1};
							}
						`}>
						<p>
							{propertyKey === 'idx' ? (
								stat.id
							) : (
								[ propertyKey ]
							)}
						</p>
					</li>
				))
			) : (
				stats.map((stat, idx) =>
					stat.contestants.map(
						contestant => (
							<li
								onClick={() => handleClick(stat.id)}
								key={contestant[propertyKey].id}
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
										contestant[propertyKey].name
									)}
								</p>
							</li>
						)
						// console.log(
						// 	'OUTPUT ÄR: contestant',
						// 	contestant['contestantOne'].name
						// )
					)
				)
			)}
		</ol>
	);
};
