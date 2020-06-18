import React from 'react';
import { StatsRow } from './StatsRow';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';

export const StatsColumn = ({ title, stats, propertyKey }) => (
	<section>
		<header
			css={css`
				background-color: ${colors.purple3};
				padding: .5rem;
				margin-top: 1rem;
			`}>
			<h3
				css={css`
					color: ${title === '_' ? '#f26be9' : '#f8f8f8'};
					margin: ${title === '_' ? '0 1rem' : '0'};
					font-size: .7rem;
				`}>
				{title}
			</h3>
		</header>
		<StatsRow stats={stats} propertyKey={propertyKey} />
	</section>
);
