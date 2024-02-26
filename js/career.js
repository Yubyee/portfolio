window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url:'./json/data.json',
        success:function(data){

            // 리스트노출 
            let li='';
            const elUl = document.querySelector('.career');
            
            data.career.forEach(function (v) {
                li += `<li>
                            <h2>${v.careerTitle}</h2>
                            <span></span>
                            <div>
                                <h3>회사소개</h3>
                                <p>${v.careerDetailA}</p>
                                <h3>부서 및 직책</h3>
                                <p>${v.careerDetailB}</p>
                                <h3>근무기간</h3>
                                <p>${v.careerDetailC}</p>
                                <h3>퇴직 사유</h3>
                                <p>${v.careerDetailD}</p>
                                <h3>수행 업무</h3>
                                <p>${v.careerDetailE}</p>
                                <h3>업무 성과</h3>
                                <p>${v.careerDetailF}</p>
                            </div>
                        </li>`                
            })
            elUl.innerHTML = li;
        },
        error:function(){
            console.log('실패')
        }
    })
    


    
});
