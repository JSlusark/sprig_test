import { webEngine } from '../node_modules/sprig/dist/web/index.js';
import {level, sprites} from './creatives.js'
import { movePlayer, dodge} from './commands.js';


const runGame = (api) => {
	const {
		setLegend,
		bitmap,
		map,
		setBackground,
		setMap,
		onInput,
		getFirst,
		afterInput
	} = api

	setLegend(
		sprites.player,
		sprites.kneeling,
		sprites.rope,
		sprites.bg,
	)
	setBackground('b')

	setMap(level[0])


	onInput("w", () => movePlayer("w", getFirst, sprites.player[0]))
	onInput("a", () => movePlayer("a", getFirst, sprites.player[0]))
    onInput("s", () => dodge("s", getFirst, sprites.player[0], sprites.kneeling[0]));
	onInput("d", () => movePlayer("d", getFirst, sprites.player[0]))
	onInput("l", () => jump("l", getFirst, sprites.player[0]));



	afterInput(() => {

	})
}

const game = webEngine(document.getElementById('canvas'))
runGame(game.api)
