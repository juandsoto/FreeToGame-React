
import { IGame } from "./types";
import Game from './Game';

const games: Record<string, IGame> = {
	"1": {
		id: 1,
		title: "Dauntless",
		thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
		short_description: "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
		game_url: "https://www.freetogame.com/open/dauntless",
		genre: "MMORPG",
		platform: "PC (Windows)",
		publisher: "Phoenix Labs",
		developer: "Phoenix Labs, Iron Galaxy",
		release_date: "2019-05-21",
		freetogame_profile_url: "https://www.freetogame.com/dauntless"
	},
	"2": {
		id: 2,
		title: "World of Tanks",
		thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
		short_description: "If you like blowing up tanks, with a quick and intense game style you will love this game!",
		game_url: "https://www.freetogame.com/open/world-of-tanks",
		genre: "Shooter",
		platform: "PC (Windows)",
		publisher: "Wargaming",
		developer: "Wargaming",
		release_date: "2011-04-12",
		freetogame_profile_url: "https://www.freetogame.com/world-of-tanks"
	},
	"3": {
		id: 3,
		title: "Warframe",
		thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
		short_description: "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
		game_url: "https://www.freetogame.com/open/warframe",
		genre: "Shooter",
		platform: "PC (Windows)",
		publisher: "Digital Extremes",
		developer: "Digital Extremes",
		release_date: "2013-03-25",
		freetogame_profile_url: "https://www.freetogame.com/warframe"
	}
};

function GameList() {
	return (
		<div>
			<h2 className="text-xl font-bold">GameList</h2>
			<div>
				{ Object.keys(games).map(index => <Game key={ index } game={ games[index] } />) }
			</div>
		</div>

	);
}

export default GameList;