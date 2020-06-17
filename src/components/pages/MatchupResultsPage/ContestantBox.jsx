import { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from './../../../styles/colors';
import { shadows } from './../../../styles/shadows';
import { ContestantCard } from './ContestantCard';
export const ContestantBox = ({ latestGame, winningHamster = false }) => {
	return (
		<Fragment>
			{winningHamster ? (
				<div
					className="winner-container"
					css={css`
						display: flex;
						padding: .2rem;
						border-radius: 10px;
						flex-direction: column;
						align-items: center;
						background: linear-gradient(
							135deg,
							${colors.yellow1} 30%,
							${colors.yellow3} 90%
						);
						box-shadow: ${shadows.boxShadow1};
					`}>
					<span
						role="img"
						aria-label="crown"
						css={css`font-size: 2rem;`}>
						👑
					</span>
					<ContestantCard latestGame={latestGame} />
				</div>
			) : (
				<ContestantCard latestGame={latestGame} loser={true} />
			)}
		</Fragment>
	);
};
