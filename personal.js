  
    
        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

    
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navMenu').classList.remove('active');
            });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Opens the visitor's default email app with a pre-filled message to you
  const subject = encodeURIComponent('New message from ' + name);
  const body = encodeURIComponent(
    message + '\n\nFrom: ' + name + '\nReply to: ' + email
  );

  window.location.href =
    'mailto:chisomombulo34@gmail.com?subject=' + subject + '&body=' + body;

  status.textContent = 'Opening your email app to send this message...';
});