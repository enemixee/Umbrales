document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("menu-list");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};