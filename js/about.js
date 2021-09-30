window.addEventListener('DOMContentLoaded', function(){
  

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


    window.addEventListener('scroll', function(){

        

    let scrolling = (window.scrollY/10).toFixed(0)*10
    
    console.log(scrolling)





        // 숫자 카운팅
        const counter = document.querySelectorAll('.count')   ;  
        let speed = 200;
        if(window.scrollY >= 540){
            counter.forEach((counter) => {
                const updateCount = () => {
                    let target = parseInt(counter.getAttribute('data-target'));
                    let count = parseInt(counter.innerHTML);
                    let increment = Math.ceil(target / speed);
                    if (count < target) {
                        counter.innerHTML = count + increment;
                        setTimeout(updateCount, 200);
                        if(counter.innerHTML < 10){
                            counter.innerHTML = '0' + counter.innerHTML
                        }
                    } 
                };
                updateCount();
            });            
        }else if(window.scrollY < 540){
            counter.innerHTML = 0;
        }


        // 스킬 아이콘 애니메이션
        const skils = document.querySelectorAll('.skils li') ;  
        for(i=0; i<skils.length; i++){

            let elHei = skils[i].offsetTop;
            let winHei = window.innerHeight;  

            if(elHei-winHei <= window.scrollY){
                skils[i].classList.add('active');    
            }     
            if(window.scrollY == 0){
                skils[i].classList.remove('active');    
            }            
        }

    });


});