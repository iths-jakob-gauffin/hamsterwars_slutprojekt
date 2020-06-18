const { Router } = require('express');

const router = new Router();

// Handler-funktioner (promises).
const { getAllHamsters } = require('./../handlers/getAllHamsters');
const { createNewHamster } = require('./../handlers/createNewHamster.js');

router.post('/cloud', async (req, res) => {
	try {
		let { name, age, favFood, loves, avatar } = req.body;
		let allHamsters = await getAllHamsters();
		let newHamsterId = allHamsters.length + 1;
		await createNewHamster(
			newHamsterId,
			name,
			age,
			favFood,
			loves,
			avatar
		);
		res
			.status(200)
			.send(`New hamster created with id ${newHamsterId}`);
	} catch (err) {
		res
			.status(500)
			.send(
				'Something with the creation of a new hamster went wrong.'
			);
	}
});

module.exports = router;
