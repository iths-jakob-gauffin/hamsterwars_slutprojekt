/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';
import { shadows } from './../../../styles/shadows';

import { storage } from './../../../firebase';

import { BattleImage } from './../small_components/BattleImage';

const Upload4 = ({
	newHamsterId,
	submitImage,
	setSubmitImage,
	fileToUpload,
	setFileToUpload,
	finishedUploading,
	setFinishedUploading
}) => {
	const [ upload, setUpload ] = useState(0);
	const [ finished, setFinished ] = useState(false);

	useEffect(
		() => {
			if (submitImage) {
				uploadFile();
			}
		},
		[ submitImage ]
	);
	const uploadFile = () => {
		let file = fileToUpload;

		let storageRef = storage.ref(`/hamster-${newHamsterId}.jpg`);

		let task = storageRef.put(file);

		task.on(
			'state_changed',
			function progress(snapshot) {
				let percentage =
					snapshot.bytesTransferred / snapshot.totalBytes * 100;
				setUpload(percentage);
			},
			function error(err) {},
			function complete() {
				setFinished(true);
				setFinishedUploading(!finishedUploading);

				setTimeout(() => {
					setUpload(0);
					setFinished(false);
				}, 1000);
			}
		);
	};

	return (
		<div css={css`width: 100%;`}>
			{!fileToUpload && (
				<article className="highlight">
					<label
						htmlFor="uploadFileInput"
						css={css`
							display: inline-block;
							padding: .5rem;
							color: ${colors.white1};
							background-color: ${colors.purple3};
							border: 2px solid ${colors.purple2};
							box-shadow: ${shadows.boxShadow4};
							margin-bottom: .5rem;
						`}>
						Bläddra...
					</label>
					<input
						css={css`display: none;`}
						type="file"
						id="uploadFileInput"
						onChange={e => setFileToUpload(e.target.files[0])}
					/>
					<p>
						Om du inte laddar upp en egen bild så kommer den
						här bli hamsterns "avatarbild".
					</p>
					<div
						className="avatar-container"
						css={css`padding: 0 5rem;`}>
						<BattleImage
							id={newHamsterId}
							name={'avatar'}
							avatar={true}
							maxHeight={'100%'}
						/>
					</div>
				</article>
			)}
			{fileToUpload && (
				<article
					className="highlight"
					css={css`
						width: 100%;
						display: inline-block;
					`}>
					<label
						htmlFor="uploadFileInput"
						css={css`
							display: inline-block;
							padding: .5rem;
							color: ${colors.white1};
							background-color: ${colors.purple3};
							border: 2px solid ${colors.purple2};
							box-shadow: ${shadows.boxShadow4};
							margin-bottom: .5rem;
						`}>
						Bläddra...
					</label>
					<input
						css={css`display: none;`}
						type="file"
						id="uploadFileInput"
						onChange={e => setFileToUpload(e.target.files[0])}
					/>
					<p
						css={css`
							display: inline-block;
							margin-left: .5rem;
						`}>
						{fileToUpload.name}
					</p>
					<progress
						value={upload}
						max="100"
						id="uploader"
						css={css`display: block;`}>
						0%
					</progress>
					<p>{upload}% uppladdat</p>
				</article>
			)}
		</div>
	);
};

export default Upload4;
