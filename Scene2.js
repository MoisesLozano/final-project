class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }
create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.displayHeight = this.sys.game.config.height;
    this.background.scaleX = this.background.scaleY
    this.background.x = config.width / 2;
    this.background.y = config.height / 2;


    this.car1 = this.add.image(2000, 0, "car");
    this.car2 = this.add.image();
    
        
    this.add.text(20, 20, "Playing Game", {
            font: "25px Arial",
            fill: "yellow"
    });
}
moveCar(car, speed) {
    car.y += speed;
    if (car.y > config.height) {
        car.setFlip(true, false)
        this.resetCarPos(car);
    }
    }
resetCarPos(car) {
    car.y = 0;
    car.x = 2000;
}
update() {
    this.moveCar(this.car1, 1)
    
}
}