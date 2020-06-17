const { Router } = require('express');

const router = new Router();

const path = require('path');

// Handler-funktioner (promises).
const { uploadFileToCloud } = require('./../handlers/uploadFileToCloud');
const { getAllHamsters } = require('./../handlers/getAllHamsters');
const { createNewHamster } = require('./../handlers/createNewHamster.js');

router.post('/cloud', async (req, res) => {
	try {
		console.log('OUTPUT ÄR: req', req.body);
		let { name, age, favFood, loves, avatar } = req.body;
		let allHamsters = await getAllHamsters();
		// console.log('OUTPUT ÄR: allHamsters', allHamsters);
		let newHamsterId = allHamsters.length + 1;
		console.log('OUTPUT ÄR: newHamsterId', newHamsterId);
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

// ///// Första steget i att ladda upp en fil till bucketen "hamster-bilder" i min firebase storage. Jag tar ut filnamn och filtyp på det som ska laddas upp.
// router.post('/cloud', async (req, res) => {
// 	let fileExtension = path.extname(req.files.photo.name);
// 	let allHamsters = await getAllHamsters();
// 	let fileNameWithExtension = `hamster-${allHamsters.length * 1 +
// 		1}${fileExtension}`;

// 	// Kopierar filen tillfälligt till mappen "tempPathBeforeCloud".
// 	req.files.photo.mv(
// 		path.join(
// 			__dirname,
// 			'./../tempPathBeforeCloud',
// 			fileNameWithExtension
// 		),
// 		err => {
// 			if (err) {
// 				res
// 					.status(500)
// 					.send(
// 						'Something with the upload to folder "tempPathBeforeCloud" went wrong.'
// 					);
// 				return;
// 			}
// 		}
// 	);

// 	// Anropar här nästa steg, där filen laddas upp till google cloud/firebase från tempPathBeforeCLoud-mappen. Detta görs pga att man måste skriva in filens sökväg innan den uploadas till molnet. Filen raderas sedan från mappen.
// 	await uploadFileToCloud(fileNameWithExtension);

// 	// Lägger till den nya hamstern i db. Just nu skapas ett hamsterobjekt med id samt filnamn till bilden, andra uppgifter såsom namn och favoritmat tillkommer senare när jag jobbar med frontenden, eftersom klienten där får fylla i och göra sin egna hamster.
// 	let newHamsterId = allHamsters.length + 1;
// 	await createNewHamster(newHamsterId, fileNameWithExtension);

// 	res.status(200).send({
// 		msg: `File uploaded to cloud and new hamster created in Firestore`,
// 		urlToImageOnGoogleCloud: `https://storage.cloud.google.com/hamster-bilder/${fileNameWithExtension}`
// 	});
// 	return;
// });

// // path.join(
// // 	__dirname,
// // 	'./../tempPathBeforeCloud',
// // 	fileNameWithExtension
// // )

// ///// Uploadar bilden till public/uploads.
// router.post('/', async (req, res) => {
// 	console.log('OUTPUT ÄR: req', req.files.photo.name);
// 	req.files.photo.mv(`/img/${req.files.photo.name}`, err => {
// 		if (err) {
// 			res.status(500).send('Damn it something went wrong' + err);
// 			return;
// 		}
// 		res.send({ msg: 'File saved' });
// 		return;
// 	});
// });

module.exports = router;
