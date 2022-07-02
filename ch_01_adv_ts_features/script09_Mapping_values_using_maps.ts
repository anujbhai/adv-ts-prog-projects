enum Genre {
	Rock,
	CountryAndWestern,
	Classical,
	Pop,
	HeavyMetal
}

class MusicCollection {
	private readonly collection: Map<Genre, string[]>;

	constructor() {
		this.collection = new Map<Genre, string[]>();
	}

	public Add(genre: Genre, artist: string[]): void {
		// this.collection.set(genre, artist);
		for (let individual of artist) {
			this.AddArtist(genre, individual);
		}
	}

	public Get(genre: Genre): string[] | undefined {
		return this.collection.get(genre);
	}

	public AddArtist(genre: Genre, artist: string): void {
		if (!this.collection.has(genre)) {
			this.collection.set(genre, []);
		}

		let artists = this.collection.get(genre);

		if (artists) {
			artists.push(artist);
		}
	}
}

let collection = new MusicCollection();

collection.Add(Genre.Classical, ["Debussy", "Bach", "Elgar", "Beethoven"]);
collection.Add(Genre.CountryAndWestern, ["Dolly Parton", "Toby Keith", "Willie Nelson"]);
collection.Add(Genre.HeavyMetal, ["Slayer", "Opeth", "Merciful Fate", "Rainbow"]);
collection.Add(Genre.Pop, ["MJ", "Taylor Swift", "Abba"]);
collection.Add(Genre.Rock, ["Led Zeppelin", "Rush", "Cream", "Pink Floyd"]);

collection.AddArtist(Genre.HeavyMetal, "Iron Maiden");
// collection.Add(Genre.HeavyMetal, ["Slayer", "Opeth", "Merciful Fate", "Rainbow"]);

console.log(collection.Get(Genre.Rock));
