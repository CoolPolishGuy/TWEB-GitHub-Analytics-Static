function buildChart(object) {
  const ctx = document.getElementById("bar-chart");
  const ctx2 = document.getElementById("pie-chart");


  const Personnaldata = object.stats.daysOfWeek;
  const Personnaldata2 = object.stats.trimester;


  const graph = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'commits (unite)',
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#c45850','#c45850'],
          data: Personnaldata,
        }
      ]
    },
    options: {
      legend: { display: false },
      responsive: false,
    }
});
  const myPieChart = new Chart(ctx2,{
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
      ]
    },
    options: {
      responsive: false,
    }
});

}
