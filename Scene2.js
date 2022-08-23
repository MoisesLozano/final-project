class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }
create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.scaleX = this.background.scaleY
    

    
    this.car1 = this.add.image(2000, 0, "car").setFlipX(true);
    this.car2 = this.add.image();
    
    this.car
    
        
    this.add.text(20, 20, "Playing Game", {
            font: "25px Arial",
            fill: "yellow"
    });
}
moveCar(car, speed) {
    car.y += speed;
    if (car.y > config.height) {
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