window.addEventListener('DOMContentLoaded', function(){

    //우주배경 만들기    
    let canvas = null,
    container = document.getElementById("app");

    canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    // let elWidth = window.innerWidth;
    // let elHeight = 540;

    // canvas.width = elWidth;
    // canvas.height = elHeight;

    container.appendChild(canvas);

    function resizeCanvas(){
        let elWidth = window.innerWidth;
        let elHeight = parseInt(container.clientHeight)
    
        canvas.width = elWidth;
        canvas.height = elHeight;  
         
        let main = function() {
            let now = Date.now(),
            delta = (now - then) / 10;    
            app.update(delta);
            app.render();        
            then = now;
        }
    
        let then = Date.now();
        setInterval(main, 1000 / app.FPS);

    }

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;        
    }

    class App{
        constructor(){
            this.Fps = 60;
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
                            x: 0, y: 2 / i
                        }
                    };        
                    stars.push(star);
                }        
                this.layers.push(stars);
            }
        }
        inBounds(x,y){
            return( (x > 0 && x < canvas.width) && (y > 0 && y < canvas.height) );
        }
        update(delta){
            if(!this.started){
                this.started = true;
                this.init();
            }else{
                for(let i=0; i<this.layers.length; i++){
                    for(let j=0; j<this.layers[i].length; j++){
                        let star = this.layers[i][j];
                        if(this.inBounds(star.x, star.y)){
                            // Move star if it is in bounds of the window.
                            star.x += star.speed.x * delta;
                            star.y += star.speed.y * delta;
                        }else {
                            // Reset star if it is not within the bounds of the window.
                            star.x = getRandom(0, canvas.width);
                            star.y = 1;
                        }
                    }
                }
            }
        }
        render(){
            ctx.fillStyle = "#000";
            ctx.strokeStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.fillStyle = ctx.strokeStyle = "#fff";

            for(let i=0; i<this.layers.length; i++){
                for (let j=0; j<this.layers[i].length; j++) {
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

    // let main = function(){
    //     let now = Date.now(),
    //     delta = (now - then) / 10;
    //     app.update(delta);
    //     app.render();        
    //     then = now;
    // }
    // let then = Date.now();
    // setInterval(main, 1000/app.FPS)  

    resizeCanvas();



    // 자기소개 타이핑
    const typingTxt = document.querySelector('.typing_origin').innerHTML;
    const txt = document.querySelector('.typing');
    let num = 0;
    const typing = function() {       
        if(window.scrollY < 540){
            txt.innerHTML += typingTxt[num++]; //.txt엘리먼트에 위에 content의 변수에 저장한 문자를 순차적으로 뿌리겠다.
            if(num > typingTxt.length) { // content의의 변수 길이가 넘으면 제안을 설정한다.
                txt.innerHTML = typingTxt; // .txt엘리먼트에 위에 빈문자를 뿌리겠다.  
            } 
        }
        else if(window.scrollY >= 540){
            txt.innerHTML = '';
            num = 0;
        }
    };
    setInterval(typing, 100);


    
    //여기서부터 스크롤 이벤트
    window.addEventListener('scroll', function(){        

        // let scrolling = (window.scrollY/10).toFixed(0)*10
        
        // 숫자 카운팅
        const counter = document.querySelectorAll('.count')   ;  
        let speed = 200;
        console.log()
        if(this.scrollY >= 330){
            counter.forEach((counter) => {
                const updateCount = () => {
                    let target = parseInt(counter.getAttribute('data-target'));
                    let count = parseInt(counter.innerHTML);
                    let increment = Math.ceil(target / speed);
                    if (count < target) {
                        counter.innerHTML = count + increment;
                        setTimeout(updateCount, 300);
                        if(counter.innerHTML < 10){
                            counter.innerHTML = '0' + counter.innerHTML
                        }
                    } 
                };
                updateCount();
            });            
        }
        if(this.scrollY < 330){            
            counter.forEach((counter) => {
                counter.innerHTML = '0'
            });             
        }


        // 스킬 아이콘 애니메이션
        const skils = document.querySelectorAll('.skils li') ;  
        for(i=0; i<skils.length; i++){

            let elHei = skils[i].offsetTop;
            let winHei = this.innerHeight;  

            if(elHei-winHei <= this.scrollY){
                skils[i].classList.add('active');    
            }     
            if(this.scrollY == 0){
                skils[i].classList.remove('active');    
            }            
        }

    });

    

    // 웹디포폴 링크
    const pinterBtn = document.querySelector('.pinterest')
    pinterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('핀터레스트 로그인 후 확인 가능합니다.');
        document.location.href = 'https://www.pinterest.co.kr/hello6324/designed-by-yubyee-jang/'
    });




});