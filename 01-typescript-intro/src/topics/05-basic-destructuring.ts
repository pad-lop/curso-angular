// Ejercicio 1

interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Details;
}

interface Details {
	author: string;
	year: number;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 36,
	song: "Mess",
	details: {
		author: "Ed Sheeran",
		year: 2015,
	},
};

const {
	song: AnotherSong,
	audioVolume: Volume,
	songDuration: Duration,
} = audioPlayer;

const { author: Author, year: Year } = audioPlayer.details;

// Ejercicio 2

// Código complicado

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

console.log('Personaje 3: ', dbz[2] || 'Personaje no encontrado')
console.log('Personaje 3: ', dbz[3] || 'Personaje no encontrado')

// Mejora con desestructuración

const [,,trunks = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Trunks']

console.log('Personaje 3: ', trunks)
