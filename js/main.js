// ==========================================================================
// Kenneth Tubungbanua - Portfolio Interactivity (Vanilla JS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Project Category & Featured Filtering (Grid & List Views)
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const tableRows = document.querySelectorAll('.projects-table tbody tr');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter project cards in Gallery View
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const isFeatured = card.getAttribute('data-featured') === 'true';
                const tags = card.getAttribute('data-tags') || '';

                if (filterValue === 'all') {
                    card.classList.remove('is-hidden');
                } else if (filterValue === 'featured') {
                    if (isFeatured) {
                        card.classList.remove('is-hidden');
                    } else {
                        card.classList.add('is-hidden');
                    }
                } else if (category === filterValue || tags.includes(filterValue)) {
                    card.classList.remove('is-hidden');
                } else {
                    card.classList.add('is-hidden');
                }
            });

            // Filter table rows in List View
            tableRows.forEach(row => {
                const category = row.getAttribute('data-category');
                const isFeatured = row.getAttribute('data-featured') === 'true';

                if (filterValue === 'all') {
                    row.style.display = '';
                } else if (filterValue === 'featured') {
                    row.style.display = isFeatured ? '' : 'none';
                } else if (category === filterValue) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // Make inline card tags trigger the corresponding filter
    const inlineTags = document.querySelectorAll('.tag-clickable');
    inlineTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const targetFilter = tag.getAttribute('data-filter-target');
            if (!targetFilter) return;

            const matchingBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
            if (matchingBtn) {
                matchingBtn.click();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 2. Project View Switcher (Gallery, List, Timeline Views)
    // ----------------------------------------------------------------------
    const viewToggleButtons = document.querySelectorAll('.view-toggle-btn');
    const viewContainers = document.querySelectorAll('.view-container');

    viewToggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.getAttribute('data-view');

            viewToggleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            viewContainers.forEach(container => {
                if (container.getAttribute('id') === targetView) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 3. Git Graph Branch Filter (Experience Page)
    // ----------------------------------------------------------------------
    const gitBranchPills = document.querySelectorAll('.git-filter-pill');
    const gitCommits = document.querySelectorAll('.git-commit');

    gitBranchPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const branch = pill.getAttribute('data-branch');

            gitBranchPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            gitCommits.forEach(commit => {
                const commitBranch = commit.getAttribute('data-branch');
                if (branch === 'all' || commitBranch === branch || commitBranch === 'merge') {
                    commit.style.display = 'grid';
                } else {
                    commit.style.display = 'none';
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 4. Active Navigation Spy (highlights current section in persistent header)
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + 140;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPosition >= top && scrollPosition < top + height) {
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${id}` || href === `index.html#${id}`) {
                            navLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 5. Contact Form Submission Feedback
    // ----------------------------------------------------------------------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.querySelector('.form-feedback');
            if (feedback) {
                feedback.classList.add('success');
                feedback.textContent = 'Thank you for reaching out, Kenneth will receive your message and follow up shortly!';
                contactForm.reset();
            }
        });
    }
});
