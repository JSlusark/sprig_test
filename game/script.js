// import { Sprig } from "sprig";

import { webEngine } from 'https://esm.sh/sprig@1/web'

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


	const player = "p"
	const rope = "r"

	// chracter setting
	setLegend(
		[ 'p', bitmap`
................
................
.......000......
.......0.0......
......0..0......
......0...0.0...
....0003.30.0...
....0.0...000...
....0.05550.....
......0...0.....
.....0....0.....
.....0...0......
......000.......
......0.0.......
.....00.00......
................` ],
// is b for background?
		[ 'b', bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555` ],
		[ rope, bitmap`
................
................
3333333333333333
................
................
` ],
	)

	let level = 0
	const levels = [
		map
		`..r
        .p.
        ...`]

	setMap(levels[level])


	setBackground('b')


	const directionMap = {
		"s": { dx: 0, dy: 1 },  // Move down
		"w": { dx: 0, dy: -1 }, // Move up
		"d": { dx: 1, dy: 0 },  // Move right
		"a": { dx: -1, dy: 0 }, // Move left
	  }


	  onInput("s", () => movePlayer("s"))
	  onInput("w", () => movePlayer("w"))
	  onInput("d", () => movePlayer("d"))
	  onInput("a", () => movePlayer("a"))

	  function movePlayer(key) {
		const { dx, dy } = directionMap[key]
		const playerSprite = getFirst(player)
		playerSprite.x += dx
		playerSprite.y += dy
	  }

	  afterInput(() => {

	  })
}

const game = webEngine(document.getElementById('canvas'))
runGame(game.api)