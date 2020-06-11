import React from 'react';
import { css } from '@emotion/core';

export const MusicDataListRow = ({
	setMusicDataContent,
	musicDataContent,
	title
}) => {
	const updateMusicDataTextArea = (e, id) => {
		let musicDataExceptTheOneToBeUpdated = musicDataContent.filter(
			el => el.id !== id
		);
		let musicDataToBeUpdated = musicDataContent.filter(
			el => el.id === id
		);

		musicDataToBeUpdated = {
			...musicDataToBeUpdated[0],
			[title]: e.target.value
		};

		setMusicDataContent([
			...musicDataExceptTheOneToBeUpdated,
			musicDataToBeUpdated
		]);
	};

	return (
		<ul
			css={css`
				margin: 0;
				padding-left: 2rem;
			`}>
			{musicDataContent.map(el => (
				<li
					key={el.id}
					musicId={el.id}
					css={css`
						display: flex;
						width: 100%;
						height: 100%;
					`}>
					<textarea
						css={css`
							width: 100%;
							height: 100%;
							background: none;
							border: none;
							font-family: "Times New Roman", Times, serif;
							font-size: 16px;
							resize: none;
							height: 2em;
						`}
						onBlur={e => updateMusicDataTextArea(e, el.id)}>
						{el[title]}
					</textarea>
				</li>
			))}
		</ul>
	);
};
