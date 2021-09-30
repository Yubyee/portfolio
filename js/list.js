window.addEventListener('DOMContentLoaded', function(){

    const elUl = document.querySelector('.list')

    $.ajax({
        url:'../json/data.json',
        success:function(data){
            console.log(data.list[1])
            
            let li='', idx=0;

            data.list.forEach(function(v){
                li += `<li>
                            <a href="detail.html"><img src="${v.mode}" alt="${v.deviceType}"></a>
                            <img class="thumnail" src="${v.thum}" alt="${v.code}">
                        </li>`
            })
            
            elUl.innerHTML = li;

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











        },
        error:function(){
            console.log('실패')
        }
    })
    


    
});