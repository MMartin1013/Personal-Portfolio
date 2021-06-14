let dropdown = document.getElementById('dropdown');

let main = document.querySelector('main');

dropdown.onclick = function() {
    let nav = document.getElementById('dropdown-navigation');
    
    if(nav.style.display == 'flex'){
        nav.style.display = 'none';
    }else{
        nav.style.display ='flex';
    }
}

main.onclick = function() {
    document.getElementById('dropdown-navigation').style.display = 'none';
}
