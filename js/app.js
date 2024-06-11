document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Function to create navigation items dynamically
    const createNavItems = () => {
        sections.forEach(section => {
            const sectionID = section.getAttribute('id');
            const sectionNav = section.getAttribute('data-nav');

            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.classList.add('menu__link');
            navLink.href = `#${sectionID}`;
            navLink.textContent = sectionNav;

            navItem.appendChild(navLink);
            navList.appendChild(navItem);
        });
    };

    // Function to handle smooth scrolling
    const handleSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // Function to highlight section in view
    const highlightSectionInView = () => {
        window.addEventListener('scroll', () => {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    currentSection = section.getAttribute('id');
                }
            });

            sections.forEach(section => {
                section.classList.remove('your-active-class');
                if (section.getAttribute('id') === currentSection) {
                    section.classList.add('your-active-class');
                }
            });

            const navLinks = document.querySelectorAll('.menu__link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === currentSection) {
                    link.classList.add('active');
                }
            });
        });
    };

    createNavItems();
    handleSmoothScrolling();
    highlightSectionInView();
});
