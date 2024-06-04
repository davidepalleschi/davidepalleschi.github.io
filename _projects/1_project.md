---
layout: page
title: Privacy-oriented Object Detection 
description: Detectiong people and action in low-resolution images
img: assets/img/project/privacy.png
importance: 1
category: university
---

Leveraging state-of-the-art object detection models like YOLOv8 and pioneering preprocessing techniques such as motion stacking, I've developed a sophisticated system capable of accurately identifying individuals and their actions in extremely low-resolution settings (64x36 pixels). With a focus on preserving privacy in sensitive areas like homes and optimizing computational efficiency for real-time operation on embedded devices, my project not only advances the field of computer vision but also holds immense practical implications for privacy-preserving surveillance technologies in real-world applications.

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/Demo.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
</div>

The system employs quantization, allowing it to run on a basic PC without a GPU at 2 ms per inference. This makes it capable of real-time performance and simultaneous operation in multiple rooms.