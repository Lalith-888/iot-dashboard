const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let data = {
  device_id: "esp8266_1",
  temperature: 0,
  humidity: 0,
  led: false
};

app.post('/api/data', (req, res) => {
  console.log("📡 Received data:", req.body);
  data.temperature = req.body.temperature;
  data.humidity = req.body.humidity;
  data.device_id = req.body.device_id || data.device_id;
  res.json({ led: data.led });
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/led', (req, res) => {
  console.log("💡 LED state changed:", req.body);
  data.led = req.body.led;
  res.json({ success: true, led: data.led });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
