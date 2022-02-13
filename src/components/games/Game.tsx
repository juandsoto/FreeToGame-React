import { IGame } from "./types";

interface Props {
	game: IGame;
}

function Game(props: Props) {
	const { game } = props;
	return (
		<div>
			<p>{ game.title }</p>
		</div>
	);
}

export default Game;