document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile navigation menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Close any open dropdowns when the main menu is toggled
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Toggle dropdowns on mobile click
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) { // Only apply on mobile
                event.preventDefault(); // Prevent default link behavior
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu and dropdowns when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdownToggles = document.querySelectorAll('.main-nav .dropdown > .dropbtn');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Toggle dropdowns in mobile view
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // Prevent default navigation if it's a dropdown toggle for mobile
            if (window.innerWidth <= 992) { // Match your CSS media query for mobile nav
                event.preventDefault();
                const parentLi = toggle.closest('.dropdown');
                parentLi.classList.toggle('active'); // Use 'active' class to show/hide content
                // Close other dropdowns if open
                dropdownToggles.forEach(otherToggle => {
                    const otherParentLi = otherToggle.closest('.dropdown');
                    if (otherParentLi !== parentLi && otherParentLi.classList.contains('active')) {
                        otherParentLi.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a:not(.dropbtn)').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Close mobile nav if clicking outside when open
    document.addEventListener('click', (event) => {
        if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
            mainNav.classList.remove('active');
        }
    });

    // --- NEW: Make "Hike Club" text clickable to Instagram ---
    const hikeClubText = document.querySelector('.site-title .pop-text');
    if (hikeClubText) {
        hikeClubText.addEventListener('click', () => {
            window.open('https://www.instagram.com/stjohnshikeclub/', '_blank'); // Open in a new tab
        });
    }
});

});