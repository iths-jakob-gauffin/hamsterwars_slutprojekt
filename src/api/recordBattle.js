import axios from 'axios';

const updateStats = async (winnerOrLoser, type) => {
	let winnerOrLoserData =
		type === 'winner'
			? { wins: 1, games: 1, defeats: 0 }
			: { wins: 0, games: 1, defeats: 1 };

	let data = JSON.stringify(winnerOrLoserData);

	var config = {
		method: 'put',
		url: `/api/hamsters/${winnerOrLoser.id}/result`,
		headers: {
			Authorization: 'abc123',
			'Content-Type': 'application/json'
		},
		data: data
	};

	try {
		// Uppdatera hamsterns stats
		await axios(config);
	} catch (err) {
		console.error(err);
	}
};

export const recordBattle = async winnerAndLoser => {
	const [ winner, loser ] = winnerAndLoser;

	let data = JSON.stringify({
		contestantOne: `${winner.id}`,
		contestantTwo: `${loser.id}`,
		winner: `${winner.id}`
	});

	let config = {
		method: 'post',
		url: '/api/games',
		headers: {
			Authorization: 'abc123',
			'Content-Type': 'application/json'
		},
		data: data
	};
	try {
		// Spara matchen i matchregistret
		await axios(config);

		// Uppdatera vardera hamsters stats
		await updateStats(winner, 'winner');
		await updateStats(loser, 'loser');
	} catch (err) {
		console.error(err);
	}
};
