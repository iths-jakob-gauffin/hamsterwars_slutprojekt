import React from 'react';
import { css } from '@emotion/core';
import { MusicDataColumn } from './MusicDataColumn';

export const MusicDataList = ({
	setMusicDataContent,
	musicDataContent
}) => {
	return (
		<div
			className="music-data-list-container"
			css={css`display: flex;`}>
			<MusicDataColumn
				setMusicDataContent={setMusicDataContent}
				musicDataContent={musicDataContent}
				title={'artist'}
			/>
			<MusicDataColumn
				setMusicDataContent={setMusicDataContent}
				musicDataContent={musicDataContent}
				title={'track'}
			/>
			<MusicDataColumn
				setMusicDataContent={setMusicDataContent}
				musicDataContent={musicDataContent}
				title={'created'}
			/>
		</div>
	);
};
