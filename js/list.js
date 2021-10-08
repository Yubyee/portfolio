window.addEventListener('DOMContentLoaded', function(){



    $.ajax({
        url:'./json/data.json',
        success:function(data){

            // 리스트노출 
            let li='';
            const elUl = document.querySelector('.list');
            
            data.list.forEach(function (v) {
                li += `<li>
                            <a href="detail.html"><img src="${v.diveceThum}" alt="${v.deviceType}"></a>
                            <img class="thumnail" src="${v.thum}" alt="${v.name}" data-num="${v.dataNum}">
                        </li>`                
            })
            elUl.innerHTML = li;

            // 리스트 이벤트
            const list = document.querySelectorAll('.list li');
            const listA = document.querySelectorAll('.list li a');

            for(let i=0; i<list.length; i++){
                list[i].addEventListener('mouseover', ()=>{
                    list[i].classList.add('active');
                    listA[i].classList.add('active');
                });
                list[i].addEventListener('mouseout', ()=>{
                    list[i].classList.remove('active');
                    listA[i].classList.remove('active');
                });
                list[i].addEventListener('click', (e)=>{                    
                    localStorage.dataNum = list[i].children[1].getAttribute('data-num')
                });
            };          

        },
        error:function(){
            console.log('실패')
        }
    })
    


    
});
