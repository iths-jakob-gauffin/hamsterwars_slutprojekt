const { db } = require('./../firebase');

///// Skapar ett nytt hamsterobjekt och lägger in det i dbn. Senare kommer klienten skicka med värden till dessa propertys. Än så länge är det bara id:t och imgName som fylls i och är unika för varje hamsterobjekt som skapas.
const createNewHamster = (
	id,
	name,
	age = 0,
	favFood = '',
	loves = '',
	avatar
) => {
	return new Promise(async (res, rej) => {
		try {
			let newHamster = {
				id: id,
				name: name,
				age: age,
				favFood: favFood,
				loves: loves,
				imgName: avatar
					? `hamster-avatar.jpg`
					: `hamster-${id}.jpg`,
				wins: 0,
				defeats: 0,
				games: 0,
				avatar: avatar
			};
			await db.collection('hamsters').doc().set(newHamster);
			res('Success');
		} catch (err) {
			console.error(err);
			rej(err);
		}
	});
};

module.exports = { createNewHamster };
