window.addEventListener('scroll',() =>{
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length;i++){
        var windowheight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
});

// const btn = document.querySelectorAll('.nav-link');
// const windowPathname = window.location.pathname;

// btn.forEach(btn => {
//     const navlinkPath = new URL(btn.href).pathname;

//     if((windowPathname === navlinkPath) || (windowPathname === '/index.html' && navlinkPath === '/')) {
//         btn.classList.add('current');
//         btn.classList.add('active');
//         console.log(navlinkPath);
//     }
//     else{
//         btn.classList.remove('current');
//         btn.classList.remove('active');
//     }
// });

