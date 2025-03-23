const directionMap = {
	"s": { dx: 0, dy: 1 },  // Move down
	"w": { dx: 0, dy: -1 }, // Move up
	"d": { dx: 1, dy: 0 },  // Move right
	"a": { dx: -1, dy: 0 }, // Move left
};

function movePlayer(key, getFirst, player) {
	const { dx, dy } = directionMap[key];
	const playerSprite = getFirst(player);
	if (playerSprite) {
		// Restore the player's sprite type to the original
		// playerSprite.type = player;
		playerSprite.x += dx;
		playerSprite.y += dy;
		if (key === "w") {
			setTimeout(() => {
				playerSprite.y += 1;
			}, 400); // 300ms delay
		}
	}
}


function dodge(key, getFirst, player, kneelingSprite) {
	if (key === "s") {
		const playerSprite = getFirst(player);
		if (playerSprite) {
			playerSprite.type = kneelingSprite;
			setTimeout(() => {
				playerSprite.type = player;
			}, 400); // 300ms delay
		}
	}
}


export {movePlayer, dodge}