/* ===== Dashboard Page Styles ===== */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #111;
  color: #fff;
}

header {
  background: #00fff7;
  color: #111;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 255, 247, 0.3);
}

.card h2 {
  margin-bottom: 10px;
  color: #00fff7;
}

.chart-container {
  grid-column: span 2;
  background: #222;
  padding: 20px;
  border-radius: 12px;
}
