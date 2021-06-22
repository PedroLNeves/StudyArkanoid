export class Paddle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.allowGravity = false;
        this.setCollideWorldBounds(true);

        this.setImmovable(true);

        this.ball = undefined;
        this.ball_launched = false;

        this.velocity = 300;
        this.controls = scene.input.keyboard.createCursorKeys();
    }

    update(time) {
        if(this.controls.left.isDown) {
            this.setVelocityX(-this.velocity);
        } else if (this.controls.right.isDown) {
            this.setVelocityX(this.velocity);
        } else {
            this.setVelocityX(0);
        }

        if(this.ball && !this.ball_launched) {
            this.ball.setPosition(this.x, this.y - this.displayHeight);
        }

        if(this.controls.space.isDown && !this.ball_launched) {
            //launch Ball
            this.ball_launched = true;
            this.scene.launchBall();
        }
    }

    setBall(ball) {
        this.ball = ball;
    }
}