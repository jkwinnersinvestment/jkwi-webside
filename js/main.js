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
   Premium • Responsive • Mobile Drawer
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("jkwiNav");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const accountToggle =
        document.getElementById("accountToggle");
    const mobileAccount =
        document.querySelector(".mobile-account");
    const navDropdown =
        document.querySelector(".nav-dropdown");
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
    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );
    /* ==========================================
       BODY SCROLL CONTROL
    ========================================== */
    function lockBodyScroll() {
        document.body.style.overflow = "hidden";
    }
    function unlockBodyScroll() {
        document.body.style.overflow = "";
    }
    /* ==========================================
       CLOSE MOBILE MENU
    ========================================== */
    function closeMobileMenu() {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
        if (navToggle) {
            navToggle.classList.remove("active");
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
            navDropdown.classList.remove("active");
        }
        unlockBodyScroll();
    }
    /* ==========================================
       OPEN MOBILE MENU
    ========================================== */
    function openMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.add("active");
        if (navToggle) {
            navToggle.classList.add("active");
            navToggle.setAttribute(
                "aria-expanded",
                "true"
            );
            navToggle.setAttribute(
                "aria-label",
                "Close menu"
            );
        }
        /* Close account popup */
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
        lockBodyScroll();
    }
    /* ==========================================
       MOBILE HAMBURGER
    ========================================== */
    if (navToggle && navMenu) {
        navToggle.addEventListener(
            "click",
            (event) => {
                event.stopPropagation();
                const isOpen =
                    navMenu.classList.contains(
                        "active"
                    );
                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }
        );
    }
    /* ==========================================
       MOBILE ACCOUNT ICON
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
                /* Close main menu */
                if (isOpen) {
                    closeMobileMenu();
                }
            }
        );
    }
    /* ==========================================
       MOBILE DIVISIONS DROPDOWN
    ========================================== */
    if (navDropdown) {
        const dropdownLink =
            navDropdown.querySelector(
                ":scope > a"
            );
        if (dropdownLink) {
            dropdownLink.addEventListener(
                "click",
                (event) => {
                    /*
                     * On mobile, Divisions
                     * opens the submenu.
                     *
                     * On desktop, normal
                     * navigation remains.
                     */
                    if (
                        window.innerWidth <= 850
                    ) {
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
       MOBILE MENU LINKS
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
                    closeMobileMenu();
                }
            );
        });
    }
    /* ==========================================
       ACCOUNT LINKS
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
            /* -------------------------------
               Close account popup
            -------------------------------- */
            if (
                mobileAccount &&
                !mobileAccount.contains(
                    event.target
                )
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
            /* -------------------------------
               Close mobile drawer
            -------------------------------- */
            if (
                navMenu &&
                navToggle &&
                navMenu.classList.contains(
                    "active"
                ) &&
                !navMenu.contains(
                    event.target
                ) &&
                !navToggle.contains(
                    event.target
                )
            ) {
                closeMobileMenu();
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
            closeMobileMenu();
        }
    );
    /* ==========================================
       RESIZE
    ========================================== */
    window.addEventListener(
        "resize",
        () => {
            /*
             * If we return to desktop,
             * completely reset mobile state.
             */
            if (window.innerWidth > 850) {
                closeMobileMenu();
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
            }
        }
    );
    /* ==========================================
       INITIAL ACCESSIBILITY STATE
    ========================================== */
    if (navToggle) {
        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );
        navToggle.setAttribute(
            "aria-label",
            "Open menu"
        );
    }
    if (accountToggle) {
        accountToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});