import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.querySelector('#portal');

const Portal = props => {
	let el = document.createElement('div');

	useEffect(
		() => {
			portalRoot.appendChild(el);

			return () => {
				console.log('portalen stängs');
				portalRoot.removeChild(el);
			};
		},
		[ props ]
	);

	const { children } = props;
	return ReactDOM.createPortal(children, el);
};

export default Portal;
