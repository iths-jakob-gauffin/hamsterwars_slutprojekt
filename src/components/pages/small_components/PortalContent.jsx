import React, { Fragment, useEffect, useRef, useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTransition, animated, config } from 'react-spring';

import { MovingBattleImage } from './MovingBattleImage';

const PortalContent = ({
	everything,
	winningHamster,
	setShowPortal,
	showPortal,
	animProps,
	portalContentKey
}) => {
	const [
		removeMovingBattleImage,
		setRemoveMovingBattleImage
	] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setRemoveMovingBattleImage(!removeMovingBattleImage);
		}, 2000);
		return () => console.log('NU UNMOUNTAS PORTALCONTENT');
	}, []);

	const moveAnimation = useTransition(removeMovingBattleImage, null, {
		from: { opacity: 0, y: '-200px' },
		enter: { opacity: 1, y: '0px' },
		leave: { opacity: 0, y: '200px' },
		config: config.default
	});
	console.log('OUTPUT ÄR: animProps', animProps.y);
	console.log('EVERTUYYYYYYYYTHING', everything);

	// console.log('OUTPUT ÄR: PortalContent -> showPortal', showPortal);
	// console.log('OUTPUT ÄR: PortalContent -> style', style);

	// const fadeAnimation = useTransition(showPortal.show, null, {
	// 	from: { opacity: 0, position: 'absolute', y: '-200px' },
	// 	enter: { opacity: 1, y: '0px' },
	// 	leave: { opacity: 0, y: '200px' },
	// 	config: config.stiff
	// });
	// console.log(
	// 	'OUTPUT ÄR: PortalContent -> fadeAnimation',
	// 	fadeAnimation
	// );
	// useEffect(() => {

	// 	setTimeout(() => {
	// 		setShowPortal(!showPortal.show);
	// 	}, 2000);
	// 	return showPortal;
	// });

	// useEffect(() => {
	// 	// if (showPortal.show) {
	// 	setTimeout(() => {
	// 		setShowPortal({
	// 			show: false,
	// 			winningHamster: ''
	// 		});
	// 	}, 2000);
	// 	return () => console.log('nu unmountas den');
	// }, []);

	return (
		<animated.div
			// key={portalContentKey}
			style={animProps}
			css={css`
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				/* background-color: tomato; */
				z-index: 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 0 1rem;
			`}>
			{/* <animated.div> */}
			{/* // css={css`
			// 	height: 100%;
			// 	width: 100%;
    // `} */}
			{/* // style={{ transform: `translate3d(0,${animProps.y},0)` }} */}
			{moveAnimation.map(
				({ item, key, props }) =>
					item && (
						<Fragment>
							{/* <animated.h2 style={props}>
								{winningHamster.name} vann!
							</animated.h2> */}
							<MovingBattleImage
								id={winningHamster.id}
								name={winningHamster.name}
								maxHeight={'20rem'}
								moveAnimProps={props}
							/>
						</Fragment>
					)
			)}
			{/* style={{ transform: `translate3d(0,${animProps.y},0)` }}> */}
			{/* /> */}
			{/* </animated.div> */}
			{/* <button onClick={() => setShowPortal({ show: false })}>
					klicka
				</button> */}
		</animated.div>
		// </Fragment>
	);
};

export default PortalContent;
