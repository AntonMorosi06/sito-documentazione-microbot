
document.querySelectorAll('[data-filter-table]').forEach((input) => {
  const table = document.getElementById(input.dataset.filterTable);
  if (!table) return;
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    rows.forEach((row) => {
      row.hidden = q && !row.textContent.toLowerCase().includes(q);
    });
  });
});

document.querySelectorAll('.toc a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 860) {
      setTimeout(() => window.scrollBy({ top: -56, left: 0, behavior: 'instant' }), 0);
    }
  });
});
