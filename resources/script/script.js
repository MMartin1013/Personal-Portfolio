let dropdown = document.getElementById('dropdown');

let main = document.querySelector('main');

dropdown.onclick = function() {
    document.getElementById('dropdown-navigation').style.display = 'flex';
}

main.onclick = function() {
    document.getElementById('dropdown-navigation').style.display = 'none';
}
