class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    preload() {
        this.load.image("background", "Assets/background.png")
        this.load.image("car", "Assets/car.png")
        this.load.image("ship" , "Assets/ship.png")
    }
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
        this.add.text(20, 20, "Loading Game...")
        this.scene.start("playGame");
    }
}