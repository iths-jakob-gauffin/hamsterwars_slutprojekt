import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from '../../../styles/shadows';

import { useTransition, animated, config } from 'react-spring';
import { storage } from './../../../firebase';

export const MovingBattleImage = ({
	id,
	name,

	maxHeight = '9rem',
	moveAnimProps
}) => {
	const [ imgUrl, setImgUrl ] = useState(null);

	useEffect(() => {
		let gsReference = storage.refFromURL(
			`gs://hamster-bilder/hamster-${id}.jpg`
		);
		gsReference
			.getDownloadURL()
			.then(url => {
				setImgUrl(url);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			<animated.h2
				className="logo-font"
				css={css`
					text-align: center;
					background-color: ${colors.blue2};
					padding: .3rem .5rem;
					margin: 1rem;
					border-radius: 10px;
				`}
				style={{
					transform: moveAnimProps.y.interpolate(
						y => `translate3d(0, ${y}, 0)`
					),
					opacity: moveAnimProps.opacity
				}}>
				{name} vann!
			</animated.h2>
			<animated.section
				style={{
					transform: moveAnimProps.y.interpolate(
						y => `translate3d(0, ${y}, 0)`
					),
					opacity: moveAnimProps.opacity
				}}
				css={css`
					border: 5px solid ${colors.yellow1};
					position: relative;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: .2rem .2rem;
					background-color: ${colors.white2};
					margin: .3rem 0;
					box-shadow: ${shadows.boxShadow2};
				`}>
				<img
					src={imgUrl}
					// src={`/img/hamster-${id}.jpg`}
					// id={`battleImage-${id}`}
					alt={name}
					css={css`
						max-height: ${maxHeight};
						width: 100%;
						border-radius: 10px;
					`}
				/>
			</animated.section>
		</div>
	);

	// return (
	// 	<animated.section
	// 		style={{
	// 			transform: animProps.y.interpolate(
	// 				y => `translate3d(0,${y},0)`
	// 			),
	// 			config: 'config.molasses'
	// 		}}
	// 		onClick={() => onClickFn(id)}
	// 		css={css`
	// 			border: 5px solid ${colors.yellow1};
	// 			border-radius: 10px;
	// 			display: flex;
	// 			justify-content: center;
	// 			align-items: center;
	// 			padding: .2rem .2rem;
	// 			background-color: ${colors.white2};
	// 			margin: .3rem 0;
	// 			box-shadow: ${shadows.boxShadow2};
	// 		`}>
	// 		<img
	// 			src={`/img/hamster-${id}.jpg`}
	// 			alt={name}
	// 			css={css`
	// 				max-height: ${maxHeight};
	// 				width: 100%;
	// 				border-radius: 10px;
	// 			`}
	// 		/>
	// 	</animated.section>
	// );
};
