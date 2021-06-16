let dropdown = document.getElementById('dropdown');
let xmark = document.getElementById('x-mark');
let main = document.querySelector('main');
let nav = document.getElementById('dropdown-navigation');

dropdown.onclick = function() {
    nav.style.display ='flex';
    dropdown.style.display ='none';
    xmark.style.display = 'flex';
    xmark.style.color = 'white';
}

xmark.onclick = function() {
    nav.style.display = 'none';
    dropdown.style.display ='flex';
    xmark.style.display = 'none';
}

xmark.onmouseover = function(){
    xmark.style.backgroundColor = 'white';
    xmark.style.color = 'black';
    xmark.style.cursor = 'pointer'
}

xmark.onmouseleave = function(){
    xmark.style.backgroundColor = 'black';
    xmark.style.color = 'white';
}

dropdown.onmouseover = function(){
    dropdown.style.backgroundColor = 'white';
    dropdown.style.color = 'black';
    dropdown.style.cursor = 'pointer'
}

dropdown.onmouseleave = function(){
    dropdown.style.backgroundColor = 'black';
    dropdown.style.color = 'white';
}

main.onclick = function() {
    nav.style.display = 'none';
    xmark.style.display = 'none';
    dropdown.style.backgroundColor = 'black';
    dropdown.style.color = 'white';
}

