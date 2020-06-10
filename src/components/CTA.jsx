import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

const CTA = ({ link, text }) => {
	return (
		<Link to={link} css={css``}>
			{text}
		</Link>
	);
};

export default CTA;
