document.getElementById("selectLocationBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  });
  
document.querySelectorAll('.location-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const location = this.dataset.location;
    const cards = document.querySelectorAll('.tab_contant');
    cards.forEach(card => {
      const cardLocation = card.querySelector('.addres_txt').textContent.trim();
      if (location === 'all' || cardLocation === location) {
        card.style.display = 'flex'; // Убедитесь, что карточка отображается как flex-контейнер
      } else {
        card.style.display = 'none';
      }
    });
    // Закрываем модальное окно после выбора локации
    document.getElementById("modal").style.display = "none";
  });
});