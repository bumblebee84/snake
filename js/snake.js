let map = document.getElementsByClassName('map')[0];

function Snake() {
    this.width = 20;
    this.height = 20;
    this.direction = 'right';
    this.body = [
        {x: 2, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 0},
    ];

}

Snake.prototype.display = function () {
    for (let i = 0; i < this.body.length; i++) {
        if (this.body[i].x != null) {
            let newSnake = document.createElement('div');
            this.body[i].temp = newSnake;
            newSnake.style.width = this.width + 'px';
            newSnake.style.height = this.height + 'px';
            newSnake.style.backgroundColor = 'green';
            newSnake.style.borderRadius = '50%';
            newSnake.style.position = 'absolute';
            newSnake.style.top = this.body[i].y * this.height + 'px';
            newSnake.style.left = this.body[i].x * this.width + 'px';
            map.appendChild(newSnake);
        }
    }
};

Snake.prototype.run = function () {
    for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }

    switch (this.direction) {
        case 'left' :
            this.body[0].x -= 1;
            break;
        case 'right' :
            this.body[0].x += 1;
            break;
        case 'up' :
            this.body[0].y -= 1;
            break;
        case 'down' :
            this.body[0].y += 1;
            break;
    }


    if (this.body[0].x == food.x && this.body[0].y == food.y) {
        this.body.push({x: null, y: null, temp: null});
        map.removeChild(food.temp);
        food.display();
    }

    for (let i = 0; i < this.body.length; i++) {
        map.removeChild(this.body[i].temp);
    }

    this.display();
};
