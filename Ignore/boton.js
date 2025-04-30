function changeContent(section) {
    let contents = document.querySelectorAll('.content');
    contents.forEach(div => div.classList.remove('active'));
    
    document.getElementById(section).classList.add('active');
}