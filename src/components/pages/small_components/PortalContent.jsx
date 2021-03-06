import { useEffect, useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTransition, animated, config } from 'react-spring';

import { MovingBattleImage } from './MovingBattleImage';

const PortalContent = ({
	innerTimer = 2000,
	winningHamster,
	animProps,
	text
}) => {
	const [
		removeMovingBattleImage,
		setRemoveMovingBattleImage
	] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setRemoveMovingBattleImage(!removeMovingBattleImage);
		}, innerTimer);
	}, []);

	const moveAnimation = useTransition(removeMovingBattleImage, null, {
		from: { opacity: 0, y: '-200px' },
		enter: { opacity: 1, y: '0px' },
		leave: { opacity: 0, y: '200px' },
		config: config.default
	});

	return (
		<animated.div
			style={animProps}
			css={css`
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 0 1rem;
			`}>
			{moveAnimation.map(
				({ item, key, props }) =>
					item && (
						<MovingBattleImage
							text={text}
							key={key}
							id={winningHamster.id}
							name={winningHamster.name}
							maxHeight={'20rem'}
							moveAnimProps={props}
							avatar={winningHamster.avatar}
						/>
					)
			)}
		</animated.div>
	);
};

export default PortalContent;
