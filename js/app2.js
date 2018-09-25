/*Class for all characters*/
class Character {
	constructor(x, y) {
		// Variables applied to each of our instances go here,
		// we've provided one for you to get started
		this.x = x;
		this.y = y;
		// The image/sprite for our enemies, this uses
		// a helper we've provided to easily load images
		this.sprite = 'images/';
	}
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

class Enemy extends Character {
	constructor(x, y) {
		super();
		this.sprite += 'enemy-bug.png';
		this.x = x;
		this.y = y;
		this.speed = (100 + Math.floor(Math.random() * 100))
	}
	update(dt) {
		this.x += this.speed * dt;
		if (this.x > 550) {
			this.speed = 100 + Math.floor(Math.random() * 100);
			this.x = -100;
		}
	}
}

//Character - boy
class Player extends Character {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.sprite += 'char-boy.png';
  }