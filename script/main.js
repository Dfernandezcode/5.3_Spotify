const list = [
	{
		id: 0,
		author: 'C.Tangana',
		title: 'Me Maten',
		cover: 'tangana_cover.png',
		duration: 10,
	},
	{
		id: 1,
		author: 'Rosalía',
		title: 'Despechá',
		cover: 'rosalia_cover.png',
		duration: 5,
	},
	{
		id: 2,
		author: 'Shakira',
		title: 'Te felicito',
		cover: 'shakira_cover.png',
		duration: 8,
	},
	{
		id: 3,
		author: 'Quevedo',
		title: 'Quédate',
		cover: 'quevedo_cover.png',
		duration: 12,
	},
	{
		id: 4,
		author: 'Bad Bunny',
		title: 'Tití me preguntó',
		cover: 'bad_cover.png',
		duration: 20,
	},
];

// Pasa los segundos a minutos
const getMinutes = (s) => {
	const minutes =
		Math.floor(s / 60) < 10 ? '0' + Math.floor(s / 60) : Math.floor(s / 60);
	const seconds =
		Math.floor(s % 60) < 10 ? '0' + Math.floor(s % 60) : Math.floor(s % 60);
	return minutes + ':' + seconds;
};
