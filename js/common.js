window.addEventListener('DOMContentLoaded', function(){

$('header').load('inc.html header > .header_wrap', header);
$('footer').load('inc.html footer > .footer_wrap', footer);

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

}

function footer(){
    const tel = document.querySelector('.tel')
    // PC해상도 일때만 실행되게 설정해야됨!
    tel.addEventListener('click', ()=>{
        alert('모바일 혹은 태블릿에서 연결 가능합니다.')
    });
}

const a = document.querySelectorAll('a')
for(let i=0; i<a.length; i++){
    a[i].addEventListener('click', function(e){
        // e.preventDefault();
    });    
}









});