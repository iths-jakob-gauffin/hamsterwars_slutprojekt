import React, { useState, useEffect } from 'react';

export const validate = (
	nameAgeFavFoodOrLoves,
	hamsterFormData,
	setColor,
	color,
	setErrors,
	errors
) => {
	// let allErrorsExceptNameError = Object.values(errors).splice(1);
	// if (!allErrorsExceptNameError.includes(!null)) {
	// 	console.log('jepp');
	// }

	console.log('validate körs');
	const errorMessages = {
		name:
			'Ogiltigt namn. Det måste vara minst en bokstav och får inte innehålla siffror eller specialtecken (bindestreck är ok).',
		age: 'Åldern måste vara en siffra (heltal) och vara större än 0.',
		favFood:
			'Favoritmaten måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).',
		loves:
			'Fel tyvärr. Det du skriver måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).'
	};

	let regexLettersAndHyphens = /^[a-zA-Z-]+$/;
	let regexInteger = /^(?:[1-9]|\d\d\d*)$/g;

	if (nameAgeFavFoodOrLoves === 'name') {
		if (
			regexLettersAndHyphens.test(
				hamsterFormData[nameAgeFavFoodOrLoves]
			)
		) {
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]: 'Input is valid'
			});
			// kolla om de andra fälten är tomma och enabla isf knappen

			// console.log(
			// 	'OUTPUT ÄR: allErrorValues',
			// 	allErrorValues.splice(1)
			// );
		} else {
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]:
					errorMessages[nameAgeFavFoodOrLoves]
			});
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
		}
		// } else if (!hamsterFormData[nameAgeFavFoodOrLoves]) {
		// 	// setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
		// 	setErrors({
		// 		...errors,
		// 		[nameAgeFavFoodOrLoves]: 'Input is valid'
		// 	});
	} else if (errors[nameAgeFavFoodOrLoves] == null) {
		setErrors({
			...errors,
			[nameAgeFavFoodOrLoves]: 'Input is valid'
		});
	} else if (nameAgeFavFoodOrLoves === 'age') {
		if (regexInteger.test(hamsterFormData[nameAgeFavFoodOrLoves])) {
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]: 'Input is valid'
			});
		} else {
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]:
					errorMessages[nameAgeFavFoodOrLoves]
			});
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
		}
	} else if (
		nameAgeFavFoodOrLoves === 'favFood' ||
		nameAgeFavFoodOrLoves === 'loves'
	) {
		if (
			regexLettersAndHyphens.test(
				hamsterFormData[nameAgeFavFoodOrLoves]
			)
		) {
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]: 'Input is valid'
			});
		} else {
			setErrors({
				...errors,
				[nameAgeFavFoodOrLoves]:
					errorMessages[nameAgeFavFoodOrLoves]
			});
			setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
		}
		// } else if (!hamsterFormData[nameAgeFavFoodOrLoves]) {
		// 	setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
		// 	setErrors({
		// 		...errors,
		// 		[nameAgeFavFoodOrLoves]: 'Input is valid'
		// 	});
	} else {
		setErrors({
			...errors,
			[nameAgeFavFoodOrLoves]: errorMessages[nameAgeFavFoodOrLoves]
		});
		setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
	}
	// if (hamsterFormData[nameAgeFavFoodOrLoves]) {
	// 	setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px green' });
	// 	setErrors({
	// 		...errors,
	// 		[nameAgeFavFoodOrLoves]: 'Input is valid'
	// 	});
	// } else {
	// 	setErrors({
	// 		...errors,
	// 		[nameAgeFavFoodOrLoves]: errorMessages[nameAgeFavFoodOrLoves]
	// 	});
	// 	setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
	// }
};
