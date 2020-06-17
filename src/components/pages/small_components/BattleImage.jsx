// import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from './../../../styles/shadows';

export const BattleImage = ({
	id,
	name,
	onClickFn = v => v,
	maxHeight = '9rem',
	maxWidth = '100%',
	avatar = false
}) => {
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
				src={
					avatar ? (
						`/img/hamster-avatar.jpg`
					) : (
						`/img/hamster-${id}.jpg`
					)
				}
				alt={name}
				css={css`
					max-height: ${maxHeight};
					width: ${maxWidth};
					border-radius: 10px;
				`}
			/>
		</section>
	);
};
