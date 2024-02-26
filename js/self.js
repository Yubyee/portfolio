window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url:'./json/data.json',
        success:function(data){

            // 리스트노출 
            let li='';
            const elUl = document.querySelector('.self');
            
            data.self.forEach(function (v) {
                li += `<li>
                            <h3>${v.selfTitle}</h3>
                            <span></span>
                            <p>${v.selfDetail}</p>
                        </li>`                
            })
            elUl.innerHTML = li;
        },
        error:function(){
            console.log('실패')
        }
    })
    


    
});
