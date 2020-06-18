import { useEffect, useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { StatsBox } from './StatsBox';

import { getTopOrBottom } from './../../../api/getTopOrBottom';

const StatisticsPage = () => {
	const [ stats, setStats ] = useState({ bottom: null, top: null });
	useEffect(() => {
		const getStats = async () => {
			let topFive = await getTopOrBottom('top');
			let bottomFive = await getTopOrBottom('bottom');
			setStats({
				bottom: bottomFive.bottomFive,
				top: topFive.topFive
			});
		};
		getStats();
	}, []);

	return (
		<article
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1.4rem;
				width: 100%;
				flex: 1 1 100%;
			`}>
			<h1 className="logo-font logo-page-margin center">
				STATISTIK
			</h1>
			<h3 className="h5 center highlight">De 5 bästa</h3>
			{stats.top && <StatsBox stats={stats.top} />}
			<h3 className="h5 center highlight">De 5 sämsta</h3>
			{stats.bottom && <StatsBox stats={stats.bottom} />}
		</article>
	);
};

export default StatisticsPage;
