// phaser unique game building 
class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }
    // creates the background 
    create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.scaleX = this.background.scaleY
    

    // make the car png be fliped so its not faceing the wrong way on the road
    // second car is not added since i couldnt get phaser to work after i did all the user auth 
        
    this.car1 = this.add.image(2000, 0, "car").setFlipX(true);
    this.car2 = this.add.image();
    
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.physics.enable(sprite, Phaser.Physics.ARCADE);
    // wasnt able to get this to work with my knowledge in phaser being less then average.
    // same with the angular velocity line of code
        
    this.add.text(20, 20, "Playing Game", {
            font: "25px Arial",
            fill: "yellow"
    });
    }
    // moves the car down and once it hit the edge it resets the cars position 
moveCar(car, speed) {
    car.y += speed;
    if (car.y > config.height) {
        this.resetCarPos(car);
    }
    }
    // coords the car resets at
resetCarPos(car) {
    car.y = 0;
    car.x = 2000;
    }
    // supposed to put the car in the garage 
collectcar(car) {
    onclick = click;
    {
        if (car.x === click);
    }
    }
    // allows the movement to continue
update() {
    this.moveCar(this.car1, 1)
   // this.car.angularVelocity= 150
}
}