import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.querySelector('#portal');

const Portal = props => {
	let el = document.createElement('div');

	useEffect(
		() => {
			portalRoot.appendChild(el);
			setTimeout(() => {
				props.setShowPortal(!props.showPortal);
			}, 2000);
			return () => {
				portalRoot.removeChild(el);
			};
		},
		[ props ]
	);

	const { children } = props;
	return ReactDOM.createPortal(children, el);
};

export default Portal;
