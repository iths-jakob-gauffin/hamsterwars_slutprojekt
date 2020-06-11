import React, { useState } from 'react';
import { css } from '@emotion/core';
import { colors } from './../../../styles/colors';

import { validate } from './validate';

export const FormPart = props => {
	let {
		errors,
		setErrors,
		nameAgeFavFoodOrLoves,
		hamsterFormData,
		setHamsterFormData,
		color,
		setColor,
		placeholderText

		// validate
	} = props;

	return (
		<div
			className="form-group"
			css={css`
				margin: 1em 0;
				padding: 0 .5em;
				width: 100%;
			`}>
			{/* <label
				htmlFor={nameAgeFavFoodOrLoves}
				css={css`cursor: pointer;`}>
				{nameAgeFavFoodOrLoves}
			</label> */}
			<div
				className="input-container"
				css={css`
					position: relative;
					/* width: 100%; */
				`}>
				<div
					className="inner-container"
					css={css`
						display: flex;
						justify-content: flex-end;
						align-items: center;
					`}>
					<input
						id={nameAgeFavFoodOrLoves}
						placeholder={placeholderText}
						css={css`
							border: solid ${color[nameAgeFavFoodOrLoves]};
							padding: .5em;
							width: 100%;
						`}
						type="text"
						onChange={e => {
							setHamsterFormData({
								...hamsterFormData,
								[nameAgeFavFoodOrLoves]: e.target.value
							});
							setColor({
								...color,
								[nameAgeFavFoodOrLoves]: '1px none'
							});
						}}
						onBlur={() =>
							validate(
								nameAgeFavFoodOrLoves,
								hamsterFormData,
								setColor,
								color,
								setErrors,
								errors
							)}
						value={hamsterFormData[nameAgeFavFoodOrLoves]}
					/>
					{errors[nameAgeFavFoodOrLoves] &&
					color[nameAgeFavFoodOrLoves] !== '1px none' && (
						<span
							className="material-icons"
							style={{
								right: '.3em',
								position: 'absolute',
								color:
									errors[nameAgeFavFoodOrLoves] ===
									'Input is valid'
										? 'green'
										: 'red',
								fontSize: '18px'
							}}>
							{errors[nameAgeFavFoodOrLoves] ===
							'Input is valid' ? (
								'check_circle_outline'
							) : (
								'error_outline'
							)}
						</span>
					)}
				</div>
			</div>
			{errors[nameAgeFavFoodOrLoves] !== 'Input is valid' && (
				<p
					css={css`
						color: red;
						position: absolute;
						width: 75%;
						z-index: 1;
						margin: 0;
						font-size: .9rem;
						/* padding: .3em; */
						background-color: ${colors.white1};
					`}>
					{errors[nameAgeFavFoodOrLoves]}
				</p>
			)}
		</div>
	);
};
