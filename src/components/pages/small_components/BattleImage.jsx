import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from './../../../styles/shadows';
export const BattleImage = ({ id, name, onClickFn = null }) => {
	return (
		<section
			onClick={() => onClickFn(id)}
			css={css`
				border: 5px solid ${colors.yellow1};
				border-radius: 10px;
				display: flex;
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
					max-height: 11rem;
					width: 100%;
					border-radius: 10px;
				`}
			/>
		</section>
	);
};
