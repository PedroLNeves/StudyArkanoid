export class Brick extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hit_count, scoreValue) {
        super(scene, x, y, texture);

        this.setOrigin(0)

        this.scoreValue = scoreValue;
        scene.add.existing(this);
        this.hit_count = hit_count;
        
        //Retirado para que o objecto possa ser adicionado
        //a um grupo "Static"
        //scene.physics.add.existing(this);

        //this.body.allowGravity = false;
        //this.setImmovable(true);
    }
    hit() {
        
        this.hit_count--;
        if (this.hit_count == 4)
        {
            this.setTexture('el_purple')
        } else if (this.hit_count == 3)
        {
            this.setTexture('el_green')
        } else if (this.hit_count == 2)
        {
            this.setTexture('el_blue')
        } else if (this.hit_count == 1)
        {
            this.setTexture('el_yellow')
        }
         if (this.hit_count <= 0)
        {
            this.disableBody(true, true);
            this.scene.score += this.scoreValue;
            this.scene.decreaseBrickCount();
        }   
    }


}