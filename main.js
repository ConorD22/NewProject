$(document).ready(function(){
    $('.header').height($(window).height());
    })

const checkbox = document.getElementById('show');

const box = document.getElementById('box');

if (box) {
    box.style.display = checkbox.checked ? 'block' : 'none' ;

    checkbox.addEventListener('click', function handleClick(){
        if(checkbox.checked) {
            box.style.display = 'block';
        }else{
            box.style.display = 'none'
        }
    });
}