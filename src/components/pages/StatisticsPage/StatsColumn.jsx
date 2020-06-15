import React from 'react';
import { StatsRow } from './StatsRow';
export const StatsColumn = ({ title, stats, propertyKey }) => (
	<section>
		<header>
			<h3>{title}</h3>
		</header>
		<StatsRow stats={stats} propertyKey={propertyKey} />
	</section>
);
