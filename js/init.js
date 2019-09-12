function init() {
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            let gridCell = document.getElementsByClassName('grid-cell' + '-' + i + '-' + j)[0];
            gridCell.style.top = j * 20 + 'px';
            gridCell.style.left = i * 20 + 'px';
        }
    }

    window.food = new Food();
    food.display();

    let snake = new Snake();
    snake.display();
    setInterval(function () {
        snake.run();
    }, 300);


    document.body.onkeydown = function (e) {
        let ev = e || window.event;
        switch (ev.keyCode) {
            case 38 :
                if (snake.direction != 'down') {
                    snake.direction = 'up';
                }
                break;
            case 40 :
                if (snake.direction != 'up') {
                    snake.direction = 'down';
                }
                break;
            case 37 :
                if (snake.direction != 'right') {
                    snake.direction = 'left';
                }
                break;
            case 39 :
                if (snake.direction != 'left') {
                    snake.direction = 'right';
                }
                break;
        }
    }
}