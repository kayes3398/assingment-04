filterButtons.forEach(function (btn) {
  btn.onclick = function () {
    document
      .querySelector('.filter-buttons .active')
      .classList.remove('active');
    btn.classList.add('active');

    var filterValue = btn.innerText.toLowerCase();
    var allCards = document.querySelectorAll('.job-card');

    allCards.forEach(function (card) {
      var status = card.getAttribute('data-status');

      if (filterValue == 'all' || filterValue == status) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    var msg = document.getElementById('no-jobs-msg');

    if (visibleCount == 0) {
      msg.style.display = 'block';
    } else {
      msg.style.display = 'none';
    }

    var total = allCards.length;
    var countDisplay = document.querySelector('.job-count');
    if (filterValue == 'all') {
      countDisplay.innerText = total + ' jobs';
    } else {
      countDisplay.innerText = visibleCount + ' of ' + total + ' jobs';
    }
  };
});



