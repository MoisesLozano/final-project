class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    preload() {
        this.load.image("background", "Assets/background.png")
        this.load.image("car", "assets/images/car.png")
    }
    create() {
        this.add.text(20, 20, "Loading Game...")
        this.scene.start("playGame");
        
    }
}