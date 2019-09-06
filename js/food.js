function Food() {
    this.width = 20;
    this.height = 20;
    this.x = 0;
    this.y = 0;
}

Food.prototype.display = function () {
    let map = document.getElementsByClassName('map')[0];
    let food = document.createElement('div');
    this.temp = food;
    food.style.width = this.width + 'px';
    food.style.height = this.height + 'px';
    food.style.borderRadius = '50%';
    food.style.backgroundColor = 'red';
    this.x = Math.floor(Math.random() * 30);
    this.y = Math.floor(Math.random() * 30);
    food.style.top =  this.height * this.y + 'px';
    food.style.left = this.width * this.x + 'px';
    food.style.position = 'absolute';
    map.appendChild(food);
};
