window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url:'./json/data.json',
        success : function(data){

            const con01 = document.querySelector('.con01');
            const con02 = document.querySelector('.con02 p');
            const con03 = document.querySelector('.con03 ul');
            const con04 = document.querySelector('.con04 ul')

            let dataNum = localStorage.dataNum;
            let content = '', content2 = '', content3 = '', content4 = '';
                        
            data.detail.forEach(function(v){
                if(v.dataNum == dataNum){
                    // 소개글
                    content = `<div class="con01_top">
                                    <div class="con01_top_wrap">
                                        <h2>${v.title}</h2>
                                        <span></span>
                                        <h3>${v.sub}</h3>
                                        <div class="btn"><a href="${v.url}">바로 보러가기</a></div>
                                    </div>                
                                </div>    
                                <div class="con01_bottom">
                                    <div class="pc">
                                        <p class="pcthum"><img src="${v.pcThum}" alt="${v.code}PC"></p>
                                        <p class="pcthum2"></p>
                                        <p><img src="img/detail/pc.png" alt=""></p>
                                    </div>
                                    <div class="mo">                                                       
                                        <p class="mothum"><img src="${v.moThum}" alt="${v.code}MO"></p> 
                                        <p><img src="img/detail/mo.png" alt=""></p>                        
                                    </div>                
                                </div>`
                    
                    // 기획의도
                    content2 = `${v.plan}`

                    // 구성요소
                    v.elementTitle.forEach(function(v2,k){
                        content3 += `<li>
                                        <div><span>${v2}</span></div>
                                        <img class="thumnail" src="${v.elementThum[k]}" alt="">
                                    </li>`      
                    }) 

                    // 사이트 프리뷰
                    v.preview.forEach(function(v2){
                        content4 += `<li class="grid-item"><img src="${v2}" alt=""></li>`
                    })                  
                }                
            });
            con01.innerHTML = content;
            con02.innerHTML = content2;
            con03.innerHTML = content3;
            con04.innerHTML = content4;


            // 모바일반응형 유무
            let pcStyle = document.querySelector('.pc');
            let moStyle = document.querySelector('.mo');
            let moSrc = document.querySelector('.mothum img').getAttribute('src')
            if(moSrc == ''){
                pcStyle.style = "left:50%; transform:translateX(-50%)";
                moStyle.style = "display:none" 
            }

            // 리스트 마우스 hover 이벤트
            const listNode = document.querySelectorAll('.list li')
            const listImg = document.querySelectorAll('.list .thumnail')
            const listDim = document.querySelectorAll('.list div')

            for(let i=0; i<listNode.length; i++){
                listNode[i].addEventListener('mouseover', ()=>{
                    listImg[i].style = "transform: scale(1.1)"
                    listDim[i].classList.add('active')
                    
                });
                listNode[i].addEventListener('mouseout', ()=>{
                    listImg[i].style = "transform: scale(1)"
                    listDim[i].classList.remove('active')                     
                })
            }

            // 사이트 프리뷰 height 값 가져오기
            const prevList = document.querySelectorAll('.grid-item');  
            console.log(prevList[0].scrollHeight )         


            
            // 이전, 다음 이동
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');

            prevBtn.addEventListener('click', ()=>{
                localStorage.dataNum = parseInt(dataNum) - 1
            })
            nextBtn.addEventListener('click', ()=>{
                localStorage.dataNum = parseInt(dataNum) + 1
            })

            if(dataNum == 3){
                nextBtn.style = "display:none"
            }
            if(dataNum == 1){
                prevBtn.style = "display:none"
            }


        }
    })
    
});