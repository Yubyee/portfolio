window.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelectorAll('.list li')
    const listA = document.querySelectorAll('.list li a')

    for(let i=0; i<list.length; i++){
        list[i].addEventListener('mouseover', ()=>{
            listA[i].classList.add('active')
        });
        list[i].addEventListener('mouseout', ()=>{
            listA[i].classList.remove('active')
        });
    }

    
    


    
});