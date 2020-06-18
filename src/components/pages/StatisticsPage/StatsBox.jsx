// import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
