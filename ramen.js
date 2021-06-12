// Ramen

const sidebar = document.querySelector('.sidebar');
const tabBtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

sidebar.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabBtn.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    content.forEach(function (element) {
      element.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
