class Food {
    constructor(foodStock, lastFed){
        var options = {
            foodStock: foodStock,
            lastFed: lastFed
        }
        
    }
    display(){
        var x=80, y=100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock!=0){
            for(var i=0; i < this.foodStock; i++){
                x = 80;
                y = y+50;
            }
            image(this.image, x, y, 50, 50);
            x = x+30;
        }
    }
}