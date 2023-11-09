console.log("==================================\n[+] Design by FloxSecurity.com [+]\n==================================")

/**
   * Navbar links active state on scroll
   */
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
let selectHeader = select('#header')
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}

/**
 * Scroll with ofset on links with a class name .scrollto
 */
on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
        e.preventDefault()

        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
    }
}, true)

/**
 * Stats counter
 */
$(function () {
    runCounter();

    function runCounter() {
        $('.counter').each(function () {
            const This = $(this);
            const finalCount = parseInt(This.parent().attr("data-count"), 10);

            $({ Count: This.text() }).animate(
                { Count: finalCount },
                {
                    duration: 2000,
                    easing: "linear",
                    step: function () {
                        This.text(Math.floor(this.Count));
                    },
                    complete: function () {
                        This.text(finalCount);
                    }
                }
            );
        });
    }
});