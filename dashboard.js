// Chart.js Example - Sales Data
const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'line', // can be 'bar', 'pie', 'doughnut', etc.
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales ($)',
      data: [1200, 1900, 3000, 2500, 2800, 3500],
      borderColor: '#00fff7',
      backgroundColor: 'rgba(0, 255, 247, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#fff' }
      },
      y: {
        ticks: { color: '#fff' }
      }
    }
  }
});
