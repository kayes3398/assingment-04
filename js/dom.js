var jobList = document.querySelector('.job-list');
var totalCountLabel = document.querySelector('.card-value');
var interviewCountLabel = document.querySelector('.text-green');
var rejectedCountLabel = document.querySelector('.text-red');
var filterButtons = document.querySelectorAll('.filter-buttons .btn');

function updateAllCounts() {
  var allCards = document.querySelectorAll('.job-card');
  var interviewCards = document.querySelectorAll(
    '.job-card[data-status="interview"]',
  );
  var rejectedCards = document.querySelectorAll(
    '.job-card[data-status="rejected"]',
  );

  totalCountLabel.innerText = allCards.length;
  interviewCountLabel.innerText = interviewCards.length;
  rejectedCountLabel.innerText = rejectedCards.length;

  document.querySelector('.job-count').innerText = allCards.length + ' jobs';
}

jobList.onclick = function (event) {
  var target = event.target;
  var card = target.closest('.job-card');

  if (!card) return;

  if (target.classList.contains('delete-btn')) {
    card.remove();
    updateAllCounts();
  }

  if (target.classList.contains('btn-interview')) {
    card.setAttribute('data-status', 'interview');
    var badge = card.querySelector('.status-badge');
    badge.innerText = 'INTERVIEW';
    badge.style.background = '#d1fae5';
    badge.style.color = '#10b981';
    updateAllCounts();
  }

  if (target.classList.contains('btn-rejected')) {
    card.setAttribute('data-status', 'rejected');
    var badge = card.querySelector('.status-badge');
    badge.innerText = 'REJECTED';
    badge.style.background = '#fee2e2';
    badge.style.color = '#ef4444';
    updateAllCounts();
  }
};

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

      if (filterValue == 'all') {
        card.style.display = 'block';
      } else if (filterValue == status) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };
});

