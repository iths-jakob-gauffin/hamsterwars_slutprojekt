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
	// const getCloudImage = (imageNum => {
	// 	function arrayBufferToBase64(buffer) {
	// 		var binary = '';
	// 		var bytes = [].slice.call(new Uint8Array(buffer));

	// 		bytes.forEach(b => (binary += String.fromCharCode(b)));

	// 		return window.btoa(binary);
	// 	}

	// 	var myHeaders = new Headers();
	// 	myHeaders.append('Authorization', 'abc123');

	// 	var requestOptions = {
	// 		method: 'GET',
	// 		headers: myHeaders,
	// 		redirect: 'follow'
	// 	};

	// 	fetch(`/api/assets/${id}`, requestOptions).then(response => {
	// 		response.arrayBuffer().then(buffer => {
	// 			var base64Flag = 'data:image/jpeg;base64,';
	// 			var imageStr = arrayBufferToBase64(buffer);

	// 			document.querySelector(`#battleImage-${id}`).src =
	// 				base64Flag + imageStr;
	// 		});
	// 	});
	// })();

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
					src={`/img/hamster-${id}.jpg`}
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
