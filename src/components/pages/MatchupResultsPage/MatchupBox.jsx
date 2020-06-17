import { Fragment } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { ContestantBox } from './ContestantBox';
export const MatchupBox = ({ latestGame }) => {
	return (
		<section
			css={css`
				display: flex;
				align-items: center;
			`}>
			{latestGame &&
				latestGame.contestants.map(contestant => {
					return (
						<Fragment>
							<ContestantBox
								key={contestant['contestantOne'].id}
								latestGame={contestant['contestantOne']}
								winningHamster={
									contestant['contestantOne'].id ===
									latestGame.winner.id ? (
										true
									) : (
										false
									)
								}
							/>
							<h4 className="highlight-small">vs</h4>
							<ContestantBox
								key={contestant['contestantTwo'].id}
								latestGame={contestant['contestantTwo']}
								winningHamster={
									contestant['contestantTwo'].id ===
									latestGame.winner.id ? (
										true
									) : (
										false
									)
								}
							/>
						</Fragment>
					);
				})}
		</section>
	);
};
