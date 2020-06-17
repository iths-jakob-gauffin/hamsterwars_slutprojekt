import { useEffect, useState } from 'react';

// import { NavLink, Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';

// import { links } from './../../../utilities/links';
// import { colors } from './../../../styles/colors';

// import { topData } from './top5Dummy';
// import { bottomData } from './bottom5Dummy';
import { StatsBox } from './StatsBox';

import { getTopOrBottom } from './../../../api/getTopOrBottom';

const StatisticsPage = () => {
	const [ stats, setStats ] = useState({ bottom: null, top: null });
	useEffect(() => {
		const getStats = async () => {
			let topFive = await getTopOrBottom('top');
			console.log('OUTPUT ÄR: StatisticsPage -> topFive', topFive);
			let bottomFive = await getTopOrBottom('bottom');
			console.log(
				'OUTPUT ÄR: StatisticsPage -> bottomFive',
				bottomFive
			);
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
			{/* <button onClick={getStuff}>sada</button> */}
			<h1 className="logo-font logo-page-margin center">
				STATISTIK
			</h1>
			<h3 className="h5 center highlight">De 5 bästa</h3>
			{stats.top && <StatsBox stats={stats.top} />}
			<h3 className="h5 center highlight">De 5 sämsta</h3>
			{stats.bottom && <StatsBox stats={stats.bottom} />}
			{/* <StatsBox stats={bottomData.bottomFive} /> */}
		</article>
	);
};

export default StatisticsPage;

// const getStuff = () => {
//   var myHeaders = new Headers();
//   myHeaders.append('Authorization', 'abc123');

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch('/api/charts/bottom', requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// };
