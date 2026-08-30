// Sticky Navigation

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});/* ==========================================
   JKWI NAVIGATION JAVASCRIPT
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("jkwiNav");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const accountToggle = document.getElementById("accountToggle");
    const mobileAccount = document.querySelector(".mobile-account");
    const navDropdown = document.querySelector(".nav-dropdown");
    /* ==========================================
       SCROLL NAVIGATION
    ========================================== */
    function updateNavbar() {
        if (!nav) return;
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });
    /* ==========================================
       MOBILE HAMBURGER
    ========================================== */
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen =
                navMenu.classList.toggle("active");
            navToggle.classList.toggle(
                "active",
                isOpen
            );
            navToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
            navToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );
            /* Close account popup */
            if (mobileAccount) {
                mobileAccount.classList.remove(
                    "active"
                );
                if (accountToggle) {
                    accountToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        });
    }
    /* ==========================================
       MOBILE ACCOUNT
    ========================================== */
    if (accountToggle && mobileAccount) {
        accountToggle.addEventListener(
            "click",
            (event) => {
                event.stopPropagation();
                const isOpen =
                    mobileAccount.classList.toggle(
                        "active"
                    );
                accountToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );
                /* Close main mobile menu */
                if (isOpen && navMenu) {
                    navMenu.classList.remove(
                        "active"
                    );
                    if (navToggle) {
                        navToggle.classList.remove(
                            "active"
                        );
                        navToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                        navToggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );
                    }
                }
            }
        );
    }
    /* ==========================================
       MOBILE DIVISIONS DROPDOWN
    ========================================== */
    if (navDropdown) {
        const dropdownLink =
            navDropdown.querySelector(":scope > a");
        if (dropdownLink) {
            dropdownLink.addEventListener(
                "click",
                (event) => {
                    /*
                     * Only use click dropdown
                     * on mobile.
                     */
                    if (window.innerWidth <= 850) {
                        event.preventDefault();
                        navDropdown.classList.toggle(
                            "active"
                        );
                    }
                }
            );
        }
    }
    /* ==========================================
       CLOSE MENU WHEN LINK IS CLICKED
    ========================================== */
    if (navMenu) {
        const menuLinks =
            navMenu.querySelectorAll(
                "a:not(.nav-dropdown > a)"
            );
        menuLinks.forEach((link) => {
            link.addEventListener(
                "click",
                () => {
                    navMenu.classList.remove(
                        "active"
                    );
                    if (navToggle) {
                        navToggle.classList.remove(
                            "active"
                        );
                        navToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                        navToggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );
                    }
                    if (navDropdown) {
                        navDropdown.classList.remove(
                            "active"
                        );
                    }
                }
            );
        });
    }
    /* ==========================================
       CLOSE ACCOUNT WHEN LINK IS CLICKED
    ========================================== */
    if (mobileAccount) {
        const accountLinks =
            mobileAccount.querySelectorAll(
                ".account-menu a"
            );
        accountLinks.forEach((link) => {
            link.addEventListener(
                "click",
                () => {
                    mobileAccount.classList.remove(
                        "active"
                    );
                    if (accountToggle) {
                        accountToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }
                }
            );
        });
    }
    /* ==========================================
       CLICK OUTSIDE
    ========================================== */
    document.addEventListener(
        "click",
        (event) => {
            /* Close account */
            if (
                mobileAccount &&
                !mobileAccount.contains(event.target)
            ) {
                mobileAccount.classList.remove(
                    "active"
                );
                if (accountToggle) {
                    accountToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
            /* Close mobile navigation */
            if (
                navMenu &&
                navToggle &&
                !navMenu.contains(event.target) &&
                !navToggle.contains(event.target)
            ) {
                navMenu.classList.remove(
                    "active"
                );
                navToggle.classList.remove(
                    "active"
                );
                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
                navToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );
            }
        }
    );
    /* ==========================================
       ESCAPE KEY
    ========================================== */
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key !== "Escape") return;
            /* Close account */
            if (mobileAccount) {
                mobileAccount.classList.remove(
                    "active"
                );
            }
            if (accountToggle) {
                accountToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
            /* Close navigation */
            if (navMenu) {
                navMenu.classList.remove(
                    "active"
                );
            }
            if (navToggle) {
                navToggle.classList.remove(
                    "active"
                );
                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
                navToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );
            }
            if (navDropdown) {
                navDropdown.classList.remove(
                    "active"
                );
            }
        }
    );
    /* ==========================================
       DESKTOP / MOBILE RESIZE
    ========================================== */
    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 850) {
                if (navMenu) {
                    navMenu.classList.remove(
                        "active"
                    );
                }
                if (navToggle) {
                    navToggle.classList.remove(
                        "active"
                    );
                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                    navToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );
                }
                if (mobileAccount) {
                    mobileAccount.classList.remove(
                        "active"
                    );
                }
                if (accountToggle) {
                    accountToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
                if (navDropdown) {
                    navDropdown.classList.remove(
                        "active"
                    );
                }
            }
        }
    );
});