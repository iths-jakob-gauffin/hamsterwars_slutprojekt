/* eslint-disable no-unused-vars */
import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Select = ({
	reduxHamsters,
	hamster,
	firstOptionText,
	handleChange,
	initialValue
}) => {
	return (
		<form>
			<select onChange={e => handleChange(e, hamster)}>
				<option
					value={hamster === 'firstHamster' ? ':id1' : ':id2'}>
					{firstOptionText}
				</option>
				{reduxHamsters.map(hamster => {
					return (
						<option
							selected={
								initialValue === hamster.id ? true : null
							}
							value={hamster.id}
							key={hamster.id}
							hamstername={hamster.name}>
							{hamster.id} - {hamster.name}
						</option>
					);
				})}
			</select>
		</form>
	);
};

export default Select;
