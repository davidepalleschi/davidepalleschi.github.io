---
layout: page
title: Omnisensor
description: A DIY device for presence detection and monitoring environmental conditions
img: assets/img/project/omni16_9.jpg
importance: 2
category: fun
---



In this project, I honed my skills in electronics by integrating multiple sensors using various protocols such as UART, I2C, and I2S to develop a device with unique capabilities.

To start, I learned the fundamentals of electronics, including understanding voltages, resistors, capacitors, and other components. I then moved on to designing a PCB diagram to securely and efficiently connect the numerous sensors, as manual connections were impractical. Additionally, I gained experience in creating firmware for the board using both the Arduino IDE and ESPHome system, facilitating easier code development and home automation integration.

The final device incorporates several sensors: a PIR sensor for immediate motion detection, an LD2410 sensor for continuous monitoring even without movement, a BH1750 sensor for ambient light measurement, a BME680 sensor for temperature, humidity, and TVOC (air quality) detection, and an INMP441 MEMS microphone for environmental noise detection. It also includes a buzzer, an RGB LED, and an infrared receiver with various infrared LEDs for controlling devices like TVs or air conditioners.

An ESP32 microcontroller, equipped with WiFi and Bluetooth, manages the sensors, making the device ideal for home automation integration.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pcb.jpg" title="The Unpopulated PCB" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/pop.jpg" title="The Populated PCB" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project/case.jpg" title="The Device" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To complete the project, I learned 3D modeling to design and print the device's case using my 3D printer. One of the challenging aspects was designing an adjustable joint that allows the device to be positioned at various angles even after installation. After several iterations, I successfully created a secure and flexible connection.
