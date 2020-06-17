import React from 'react';

// import { NavLink, Link, useParams, history } from 'react-router-dom';

// /** @jsx jsx */
// import { css, jsx } from '@emotion/core';
// import styled from '@emotion/styled';

// import { links } from './../../../utilities/links';
// import { colors } from './../../../styles/colors';
// import { BattleImage } from './BattleImage';
import data from './../../../dummyData/hamsters.json';

const Select = ({
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
				{data.hamsterObjects.map(hamster => {
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
				{/* <option value="2">2</option> */}
			</select>
		</form>
	);
};

export default Select;
