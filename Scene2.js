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
    
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.physics.enable(sprite, Phaser.Physics.ARCADE);
    // wasnt able to get this to work something with my knowledge with phaser being less then average.
    // same with the angular velocity line of code
        
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
collectcar(car) {
    onclick(
        anchor
    )    
}
update() {
    this.moveCar(this.car1, 1)
   // this.car.angularVelocity= 150
}
}