import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { shadows } from './../../../styles/shadows';

import { storage } from './../../../firebase';

export const BattleImage = ({
	id,
	name,
	onClickFn = v => v,
	maxHeight = '9rem',
	maxWidth = '100%',
	avatar
}) => {
	const [ imgUrl, setImgUrl ] = useState(null);

	useEffect(
		() => {
			if (id * 1 > 40 && !avatar) {
				let gsReference = storage.refFromURL(
					`gs://hamster-bilder/hamster-${id}.jpg`
				);
				gsReference
					.getDownloadURL()
					.then(url => {
						setImgUrl(url);
					})
					.catch(err => console.log(err));
			} else if (avatar) {
				setImgUrl(`/img/hamster-avatar.jpg`);
			} else {
				setImgUrl(`/img/hamster-${id}.jpg`);
			}
		},
		[ id ]
	);

	return (
		<section
			key={id}
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
				src={imgUrl}
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
