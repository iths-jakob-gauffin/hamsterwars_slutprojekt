export const validate = (
	nameAgeFavFoodOrLoves,
	hamsterFormData,
	setColor,
	color,
	setErrors,
	errors
) => {
	const errorMessages = {
		name:
			'Ogiltigt namn. Det måste vara minst en bokstav och får inte innehålla siffror eller specialtecken (bindestreck är ok).',
		age: 'Åldern måste vara en siffra (heltal) och vara större än 0.',
		favFood:
			'Favoritmaten ska vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).',
		loves:
			'Det du skriver måste vara minst en bokstav och får inte innehålla några siffror eller specialtecken (bindestreck är ok).'
	};

	const inputIsValid = () => {
		setColor({
			...color,
			[nameAgeFavFoodOrLoves]: '3px green'
		});
		setErrors({
			...errors,
			[nameAgeFavFoodOrLoves]: 'Input is valid'
		});
	};

	const inputIsNotValid = () => {
		setErrors({
			...errors,
			[nameAgeFavFoodOrLoves]: errorMessages[nameAgeFavFoodOrLoves]
		});
		setColor({ ...color, [nameAgeFavFoodOrLoves]: '3px red' });
	};

	const validateInput = regex => {
		if (
			hamsterFormData[nameAgeFavFoodOrLoves] !== '' &&
			nameAgeFavFoodOrLoves !== 'name'
		) {
			if (regex.test(hamsterFormData[nameAgeFavFoodOrLoves])) {
				inputIsValid();
			} else {
				inputIsNotValid();
			}
		} else if (nameAgeFavFoodOrLoves === 'name') {
			if (regex.test(hamsterFormData[nameAgeFavFoodOrLoves])) {
				inputIsValid();
			} else {
				inputIsNotValid();
			}
		} else {
			inputIsValid();
		}
	};

	let regexLettersAndHyphen = /^[a-zA-Z-]+$/;
	let regexIntegers = /^(?:[1-9]|\d\d\d*)$/g;

	if (nameAgeFavFoodOrLoves === 'age') {
		validateInput(regexIntegers);
	} else if (
		nameAgeFavFoodOrLoves === 'name' ||
		nameAgeFavFoodOrLoves === 'favFood' ||
		nameAgeFavFoodOrLoves === 'loves'
	) {
		validateInput(regexLettersAndHyphen);
	}
};
