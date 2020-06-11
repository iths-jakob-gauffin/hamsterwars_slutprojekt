import React, { useState } from 'react';

import { css } from '@emotion/core';

export const SearchMusicData = ({
	setFilteredMusicData,
	musicDataContent
}) => {
	const [ searchAllCategories, setSearchAllCategories ] = useState(
		false
	);

	const handleSearch = e => {
		let searchInput = e.target.searchInput.value;

		let filteredContent = musicDataContent.filter(
			el =>
				searchAllCategories
					? el.artist
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						el.track
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						el.created
							.toLowerCase()
							.includes(searchInput.toLowerCase())
					: el.track
							.toLowerCase()
							.includes(searchInput.toLowerCase())
		);
		setFilteredMusicData(filteredContent);
	};

	return (
		<form action="#" onSubmit={e => handleSearch(e)}>
			<div className="form-group">
				<label htmlFor="search-music-data" />
				<div
					className="input-container"
					css={css`
						position: relative;
						display: inline-block;
					`}>
					<div
						className="inner-container"
						css={css`
							display: flex;
							justify-content: flex-end;
							align-items: center;
						`}>
						<input
							id="searchInput"
							css={css`
								border: solid 1px none;
								padding: .5em;
								padding-left: 1.9em;
							`}
							type="text"
							placeholder="e.g. &quot;2pac&quot;"
							onSubmit={e => handleSearch(e)}
						/>
						<span
							className="material-icons"
							style={{
								left: '.3em',
								position: 'absolute',
								fontSize: '18px'
							}}>
							search
						</span>
						<label htmlFor="searchAllCategories">
							Sök i alla kategorier
						</label>
						<input
							type="checkbox"
							id="searchAllCategories"
							onChange={() =>
								setSearchAllCategories(
									!searchAllCategories
								)}
						/>
					</div>
					<input type="submit" value="Search" />
				</div>
			</div>
		</form>
	);
};
