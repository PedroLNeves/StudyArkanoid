export default class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() { 
        this.load.image('ball', './images/ballBlue.png');
        this.load.image('el_blue', './images/blue.png');
        this.load.image('el_green', './images/green.png');
        this.load.image('el_purple', './images/purple.png');
        this.load.image('el_red', './images/red.png');
        this.load.image('el_yellow', './images/yellow.png');
        this.load.image('paddle', './images/paddleRed.png');
    }

    create() {
        this.scene.start('MainScene');

        this.input.mouse.disableContextMenu();
    }
}
