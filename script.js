document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.querySelector('.nav-list');
    navList.style.display = (navList.style.display === 'block' || navList.style.display === '') ? 'none' : 'block';
});
