document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Create navigation items dynamically
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionID = section.id;
        const sectionNav = section.dataset.nav;

        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.classList.add('menu__link');
        navLink.href = `#${sectionID}`;
        navLink.textContent = sectionNav;

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Smooth scrolling
    navList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Highlight section in view
    const highlightSectionInView = () => {
        let currentSection = '';

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.id;
            }
        }

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            section.classList.toggle('your-active-class', section.id === currentSection);
        }

        const navLinks = document.querySelectorAll('.menu__link');
        for (let i = 0; i < navLinks.length; i++) {
            const link = navLinks[i];
            link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
        }
    };

    window.addEventListener('scroll', highlightSectionInView);
});
