import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from '../../../styles/shadows';

import { useTransition, animated, config } from 'react-spring';

export const MovingBattleImage = ({
	id,
	name,

	maxHeight = '9rem',
	moveAnimProps
}) => {
	return (
		<div>
			<animated.h2
				css={css`text-align: center;`}
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
					src={`/img/hamster-${id}.jpg`}
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
