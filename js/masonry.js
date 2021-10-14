// external js: masonry.pkgd.js

window.addEventListener('DOMContentLoaded', function(){
    setTimeout(() => {
        
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: $('.grid-item:first').width(),
            gutter: $('.grid').width()*0.05
        });    
    }, 1000);
    
          
});