/**
 * Graph builder
 * called in dataSend.js
 * @author Wojciech Myszkorowski
 * @author Jérémie Zanone
 */

// eslint-disable-next-line
function BuildChart(object) {
  // eslint-disable-next-line
  const ctx = document.getElementById('canvas-bar-chart');
  // eslint-disable-next-line
  const ctx2 = document.getElementById('canvas-pie-chart');

  // retrieve the wanted information from the Json file
  const Personnaldata = object.stats.daysOfWeek;
  const Personnaldata2 = object.stats.trimester;

  // construction of first graph
  // eslint-disable-next-line
  const graph = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'commits (unite)',
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#2ecc71', 'rgba(255,51,166,1.0)', '#f39c12', '#c0392b'],
          data: Personnaldata,
        },
      ],
    },
    options: {
      legend: { display: false },
      responsive: false,
    },
  });

  // construction of second graph
  // eslint-disable-next-line
  const myPieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
      datasets: [{
        data: Personnaldata2,
        backgroundColor: [
          'rgba(255, 0, 0, 0.3)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 0, 255, 0.3)',
          'rgba(255, 128, 0, 0.3)',
        ],
        label: 'Dataset 1',
      }],
      labels: [
        '1st trimester',
        '2nd trimester',
        '3rd trimester',
        '4th trimester',
      ],
    },
    options: {
      responsive: false,
    },
  });
}
