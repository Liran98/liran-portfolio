

window.addEventListener("DOMContentLoaded", event => {
    let date = new Date().getFullYear();
    let thehours = new Date().getHours();



if (thehours < 12){
    document.getElementById("weather").style.backgroundImage =`url('assets/img/sunrise.jpg')`;
}else if(thehours < 18 ){
    document.getElementById("weather").style.backgroundImage=`url('assets/img/sunset.png')`;
}else{
    document.getElementById("weather").style.backgroundImage= `url('assets/img/nightsky.jpg')`;
}







    document.getElementById("footer").innerHTML = "Copyright &copy; Liran Khalil " + date ;
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink")
        } else {
            navbarCollapsible.classList.add("navbar-shrink")
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });


});
