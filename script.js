document.addEventListener('DOMContentLoaded', function() {
  const batsmanTable = document.getElementById('batsmanTable');

  for (let i = 1; i <= 11; i++) {
      const row = batsmanTable.insertRow(-1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      cell1.innerHTML = `<input type="text" id="batsman${i}" placeholder="Player${i} ">`;
      cell2.innerHTML = `<input type="number" id="runs${i}" placeholder="Runs">`;
      cell3.innerHTML = `<input type="number" id="fours${i}" placeholder="0">`;
      cell4.innerHTML = `<input type="number" id="sixes${i}" placeholder="0">`;
  }

  const extraRunsInput = document.getElementById('extraRuns');
  const totalRunsInput = document.getElementById('totalRuns');
  const runsInputs = Array.from({ length: 11 }, (_, i) => document.getElementById(`runs${i + 1}`));

  runsInputs.forEach(input => input.addEventListener('input', updateTotalRuns));
  extraRunsInput.addEventListener('input', updateTotalRuns);

  function updateTotalRuns() {
      const runs = runsInputs.map(input => parseInt(input.value) || 0);
      const extraRuns = parseInt(extraRunsInput.value) || 0;
      const totalRuns = runs.reduce((total, run) => total + run, 0) + extraRuns;
      totalRunsInput.value = totalRuns;
  }
});
