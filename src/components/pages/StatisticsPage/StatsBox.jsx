import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { topData } from './top5Dummy';
import { colors } from '../../../styles/colors';

export const StatsBox = ({ stats }) => {
	return (
		<article css={css`display: flex;`}>
			<StatsColumn title={'#'} stats={stats} propertyKey={'idx'} />
			<StatsColumn
				title={'Namn'}
				stats={stats}
				propertyKey={'name'}
			/>
			<StatsColumn
				title={'Vinster'}
				stats={stats}
				propertyKey={'wins'}
			/>
			<StatsColumn
				title={'Förluster'}
				stats={stats}
				propertyKey={'defeats'}
			/>
			<StatsColumn
				title={'+/-'}
				stats={stats}
				propertyKey={'ratio'}
			/>
		</article>
	);
};

const StatsColumn = ({ title, stats, propertyKey }) => (
	<section>
		<header>
			<h3>{title}</h3>
		</header>
		<StatsRow stats={stats} propertyKey={propertyKey} />
	</section>
);

//TODO: försök att få in en emoji, en buckla och nåt annat
const StatsRow = ({ stats, propertyKey }) => {
	const sheep = () =>
		`<span role="img" aria-label="sheep">
			🐑
		</span>`;
	return (
		<ol css={css`list-style: none;`}>
			{stats.map((stat, idx) => (
				<li
					key={stat.id}
					css={css`
						background-color: ${colors.blue1};
						&:nth-child(odd) {
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

{
	/* <li>
<h3 className="stats-column-title">#</h3>
<h3 className="stats-column-title">NAMN</h3>
<h3 className="stats-column-title">VINSTER</h3>
<h3 className="stats-column-title">FÖRLUSTER</h3>
<h3 className="stats-column-title">RATIO +/-</h3>
</li> */
}
