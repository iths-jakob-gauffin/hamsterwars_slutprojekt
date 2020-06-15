import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { topData } from './top5Dummy';
import { StatsColumn } from './StatsColumn';

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

{
	/* <li>
<h3 className="stats-column-title">#</h3>
<h3 className="stats-column-title">NAMN</h3>
<h3 className="stats-column-title">VINSTER</h3>
<h3 className="stats-column-title">FÖRLUSTER</h3>
<h3 className="stats-column-title">RATIO +/-</h3>
</li> */
}
