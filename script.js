const welcomeBtn = document.getElementById('welcomeBtn');
const aboutPage = document.getElementById('aboutPage');

welcomeBtn.addEventListener('click', () => {
  aboutPage.style.transform = 'translateY(0)';
});
