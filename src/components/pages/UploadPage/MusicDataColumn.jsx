import React from 'react';
import { css } from '@emotion/core';
import { MusicDataListRow } from './MusicDataListRow';

export const MusicDataColumn = ({
	setMusicDataContent,
	musicDataContent,
	title
}) => {
	let uppercasedTitle = title[0].toUpperCase();
	uppercasedTitle += title.split('').splice(1).join('');
	return (
		<section
			css={css`
				background-color: mediumspringgreen;
				width: 100%;
				height: 100%;
			`}>
			<header css={css`display: flex;`}>
				<label htmlFor={title} css={css`padding: 1em 2em;`}>
					{uppercasedTitle}
				</label>
			</header>
			<MusicDataListRow
				musicDataContent={musicDataContent}
				setMusicDataContent={setMusicDataContent}
				title={title}
			/>
		</section>
	);
};
