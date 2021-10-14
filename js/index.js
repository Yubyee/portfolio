window.addEventListener('DOMContentLoaded', function(){

    let canvas = null,
    container = document.getElementById("app");
    
    canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    

    // 리사이징 함수 찾아보기 ( width, height 값 다시 설정하는 함수 찾기)

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;   
    container.appendChild(canvas);
    
    /*
    * helper function
    * returns random integer between min and max.
    */
    function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    /*================================================*/
    /* Main Class */
    /*================================================*/
    
    class App {
        constructor() {
            this.FPS = 60;
            this.started = false;
            this.layers = new Array();
            this.numLayers = 12;
            this.stars = 6;
        }
    
        init() {
            for (let i = this.numLayers; i > 0; i--) {
                let stars = new Array();
        
            for (let j = 0; j < this.stars * i; j++) {
                let star = {
                    x: getRandom(0, canvas.width),
                    y: getRandom(0, canvas.height),
                    radius: 1 / i,
                    speed: {
                        x: 0,
                        y: 2 / i
                    }
                };
        
                stars.push(star);
            }
        
            this.layers.push(stars);
            }
        }
    
        inBounds(x, y) {
            return ((x > 0 && x < canvas.width) && (y > 0 && y < canvas.height));
        }
    
        update(delta) {
            if (!this.started) {
                this.started = true;
                this.init();
            } else {
                for (let i = 0; i < this.layers.length; i++) {
                    for (let j = 0; j < this.layers[i].length; j++) {
                        let star = this.layers[i][j];
        
                        if (this.inBounds(star.x, star.y)) {
                        // Move star if it is in bounds of the window.
                        star.x += star.speed.x * delta;
                        star.y += star.speed.y * delta;
                        } else {
                        // Reset star if it is not within the bounds of the window.
                        star.x = getRandom(0, canvas.width);
                        star.y = 1;
                        }
                    }
                }
            }
        }
    
        render() {
            ctx.fillStyle = "#000";
            ctx.strokeStyle = "#FFF";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
            ctx.save();
            ctx.fillStyle = ctx.strokeStyle = "#FFF";
        
            for (let i = 0; i < this.layers.length; i++) {
                for (let j = 0; j < this.layers[i].length; j++) {
                    let star = this.layers[i][j];
            
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.stroke();
                }
            }
            ctx.restore();
        }
    }
    
    let app = new App();
    
    /*==============================*/
    /* Main Loop
    /*==============================*/
    
    let main = function() {
        let now = Date.now(),
        delta = (now - then) / 10;    
        app.update(delta);
        app.render();        
        then = now;
    }
    
    let then = Date.now();
    setInterval(main, 1000 / app.FPS);
    
    
    













 







});
