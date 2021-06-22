export class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        
        this.initial_velocity = {
            min: {
                x: -200,
                y: -600,
            },
            max: {
                x: 200,
                y:-800
            }
        }
    }

    launch() {
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1,1);

        this.setVelocity(
            Phaser.Math.Between(
                this.initial_velocity.min.x,
                this.initial_velocity.max.x
            ),
            Phaser.Math.Between(
                this.initial_velocity.min.y,
                this.initial_velocity.max.y
            )
        );
    }

    update(time){
        if (this.y >= 580)
        {
            this.scene.restartScene();
        }
    }

}
