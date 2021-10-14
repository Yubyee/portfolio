window.addEventListener('DOMContentLoaded', function(){

$('header').load('inc.html header > .header_wrap', header);
$('footer').load('inc.html footer > .footer_wrap', footer);
$('.top_container').load('inc.html .top_container > .top', top);

function header(){
    
    const menu = document.querySelector('.burger_box');
    const closeBtn = document.querySelector('.burger_box div') 
    const nav = document.querySelector('nav')
    const body = document.querySelector('body')

    const menuList = document.querySelectorAll('.menu')
    const underline = document.querySelectorAll('.underline')

    menu.addEventListener('click', () => {
        closeBtn.classList.toggle('close');
        nav.classList.toggle('active');
        body.classList.toggle('nav');
        
        
        for(let i=0; i<menuList.length; i++){            
            let width = menuList[i].clientWidth
            menuList[i].addEventListener('mouseenter', ()=>{                
                console.log(width)
                underline[i].style = `width:${width}px; opacity:1;`
            })
            menuList[i].addEventListener('mouseout', ()=>{
                underline[i].style = `width:0; opacity:0`
            })            
            menuList[i].addEventListener('click', (e)=>{
                localStorage.dataNum = menuList[i].getAttribute('data-num')
            })
        }
    }); 

    const pin = document.querySelector('.pin')    
    pin.addEventListener('click', (e)=>{
        e.preventDefault();
        alert('핀터레스트 로그인 후 확인 가능합니다.')
        document.location.href = 'https://www.pinterest.co.kr/hello6324/designed-by-yubyee-jang/'
    });

}




function footer(){
    const tel = document.querySelector('.tel')
    if (window.matchMedia("(min-width: 1250px)").matches) {        
        tel.addEventListener('click', function(e){
            e.preventDefault();
            alert('모바일에서 연결 가능합니다.')
        }); 
    }   
}

function top(){

    const top = document.querySelector('.top')

    window.addEventListener('scroll', function(){    
       if(this.scrollY > 550){
           top.style = "opacity: 1"
       }else{
           top.style = "opactiy: 0"
       }

       top.addEventListener('click', ()=>{
           this.scrollTo(0, 1000)
           window.scrollTo({
            top: 0,
            // left: 0,
            behavior: 'smooth'
          });
       });

    });

}



const a = document.querySelectorAll('a')
for(let i=0; i<a.length; i++){
    a[i].addEventListener('click', function(e){
        // e.preventDefault();
    });    
}









});