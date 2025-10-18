# 🌐 IoT Sensor Dashboard with LED Control

## 📖 Project Overview

This project is a complete **IoT system** that reads real-time temperature and humidity data from a **DHT11 sensor** connected to an **ESP8266 (NodeMCU)** microcontroller.
The sensor data is sent to a **Node.js + Express backend** hosted on [Railway](https://railway.app).
A **web dashboard** and **mobile app** (built with MIT App Inventor / Thunkable) display the live sensor readings and allow the user to control an LED remotely.

---

## 🧰 Tech Stack

### Hardware:

* ESP8266 (NodeMCU)
* DHT11 Temperature & Humidity Sensor
* LED + Resistor

### Software:

* Arduino IDE (ESP8266 firmware)
* Node.js + Express (Backend)
* Railway (Cloud Hosting)
* MIT App Inventor / Thunkable (Mobile App)
* HTML, CSS, JavaScript (Web Dashboard)

---

## ⚡ Features

* 📡 **Real-time sensor data** collection from ESP8266
* ☁️ **Cloud-hosted backend** on Railway
* 🖥️ **Web-based dashboard** showing temperature and humidity
* 💡 **Remote LED control** from dashboard or mobile app
* 📱 **Mobile app** for monitoring and controlling the device
* 🔄 Automatic data refresh every 5 seconds

---

## 🛠️ System Architecture

```
[DHT11 Sensor] → [ESP8266] ⇄ [Railway Express Server] ⇄ [Web & Mobile Dashboard]
```

* The ESP8266 reads sensor data and sends it to the server.
* The server stores the latest readings and responds with LED status.
* The dashboard (web or mobile) fetches the data and sends LED commands.
* ESP8266 receives LED commands in the next API call and toggles the LED.

---

## 🚀 Getting Started

### 1. Flash ESP8266

Upload the Arduino code to your ESP8266 after setting your Wi-Fi credentials and API URL:

```cpp
String apiURL = "https://your-project.up.railway.app/api/data";
```

### 2. Run / Deploy Backend

* Clone the repository
* Install dependencies:

```bash
npm install
```

* Start the server locally:

```bash
node server.js
```

* Deploy to Railway (or other hosting platform)

### 3. Access the Dashboard

Visit:

```
https://iot-dashboard-production-eb49.up.railway.app
```

---

## 📱 Mobile App

The mobile app (built using MIT App Inventor / Thunkable):

* Displays real-time temperature and humidity
* Allows toggling LED ON/OFF
* Connects directly to the same Railway API

---

## 🔐 API Endpoints

| Method | Endpoint    | Description                            |
| ------ | ----------- | -------------------------------------- |
| POST   | `/api/data` | Receives sensor data from ESP8266      |
| GET    | `/api/data` | Returns latest sensor data + LED state |
| POST   | `/api/led`  | Toggles LED state (true/false)         |

Sample payload for `/api/led`:

```json
{ "led": true }
```

---

## 🏁 Future Enhancements

* 📊 Add real-time charts with historical data
* 📲 Add notifications when thresholds are exceeded
* 🧠 Support multiple microcontrollers (multi-device dashboard)
* 🔐 Add authentication for device and user access


