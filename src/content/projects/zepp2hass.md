**Zepp2Hass** is a custom integration for Home Assistant that allows you to connect your Zepp (formerly Amazfit) smartwatch to your smart home ecosystem. It enables real-time tracking of health and fitness data directly within Home Assistant.

This project was born out of a personal need to visualize and use my smartwatch data in Home Assistant automations. It bridges the gap between Zepp's ecosystem and Home Assistant by utilizing a custom-built solution that respects privacy and operates efficiently.

The integration works in tandem with a companion **Mini Program** app that I developed from scratch using JavaScript and the Zepp OS API. This app runs directly on the smartwatch and is responsible for collecting sensor data and transmitting it to Home Assistant via a secure webhook. You can find the "zepp2hass" app on the official Zepp App Store.

### Key Features

*   **Real-time Data:** Updates sensor readings as they happen.
*   **Comprehensive Metrics:** Tracks Heart Rate, Steps, Sleep, Battery, Workouts, and more.
*   **Privacy Focused:** Data is sent directly to your Home Assistant instance via a local webhook.
*   **Battery Efficient:** Configurable update intervals to balance data freshness and battery life.
*   **Easy Setup:** Simple configuration process with a user-friendly interface.

This project demonstrates my ability to work with **embedded systems (Zepp OS)**, **Javascript**, **Home Assistant integrations (Python)**, and **API development**. It is open-source and available on GitHub, where you can see the full source code and contribute.
