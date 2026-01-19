In my master thesis I delved into the innovative field of privacy-oriented object detection, particularly within low-resolution imaging scenarios. The primary aim was to develop a system that can accurately detect individuals and their actions in very low-resolution environments, specifically at 64x36 pixels. This focus on low resolution is crucial for ensuring privacy in sensitive areas, like homes, and for reducing computational requirements to enable real-time operation on embedded devices.



![This is the pipeline used to make the most of the temporal information in videos.](/assets/img/project/pipeline.jpg)

The heart of my research involved adapting state-of-the-art object detection models such as YOLOv8 to work in low-resolution contexts. One of the key innovations was the use of motion stacking, a preprocessing technique that significantly improved the perception of motion and accuracy of object detection in these limited visual conditions. Additionally, the system employs quantization, which allows it to run efficiently on a basic PC without a GPU at 2 ms per inference. This capability makes it suitable for real-time performance and simultaneous operation in multiple rooms.

Throughout this project, several challenges emerged. Severe image blurring made it difficult even for humans to distinguish individuals, and camera movement during shooting further complicated the isolation of individuals within the frame. Overcoming these obstacles required innovative solutions in both preprocessing and algorithm development to enhance detection accuracy while maintaining high privacy standards.

<figure className="w-full my-6">
  <div className="grid grid-cols-2 gap-4 w-full">
    <img src="/assets/img/project/cust1.jpg" alt="example image" className="rounded-xl w-full h-auto object-cover !m-0" />
    <img src="/assets/img/project/cust2.jpg" alt="example image" className="rounded-xl w-full h-auto object-cover !m-0" />
    <img src="/assets/img/project/cust3.jpg" alt="example image" className="rounded-xl w-full h-auto object-cover !m-0" />
    <img src="/assets/img/project/cust4.jpg" alt="example image" className="rounded-xl w-full h-auto object-cover !m-0" />
  </div>
  <figcaption className="text-center text-sm text-muted-foreground mt-2">
    Four image of the Custom Dataset with Motion Stacking applied.
  </figcaption>
</figure>

To overcome some limitations of the available datasets, I created a custom dataset using a video camera to record videos in my house. I then used the Large version of YOLOv8 to create annotations on the original resolution images and subsequently trained the YOLOv8 Nano version using the low-resolution images and the created annotations. This approach allowed me to achieve excellent results, especially given the static nature of the camera, both in terms of model generalization and accuracy, reaching levels suitable for real-world applications.

In the broader context, privacy-oriented object detection has significant potential for various applications in home automation, security, and personalized user experiences. For instance, in home security, the system can act as an alarm against intrusions and unauthorized access by continuously monitoring designated areas and alerting homeowners to potential threats. Additionally, the system can be used for energy management by detecting human presence and intelligently regulating heating, ventilation, and lighting systems to optimize energy efficiency and reduce utility costs.

Moreover, the system’s action recognition capabilities allow it to discern and respond to user activities in real-time. For example, it can adjust ambient lighting levels when it detects occupants watching television, creating a more comfortable viewing experience. It can also provide personalized assistance by analyzing behavior patterns within the home, offering proactive recommendations or reminders based on users’ daily routines, such as reminding occupants to take medications at prescribed times.

My thesis demonstrates that it is possible to detect people and their actions accurately even in extremely low-resolution images. By integrating advanced object detection models with customized preprocessing techniques, this research not only advances the field of computer vision but also contributes to developing technologies that improve privacy while meeting security needs. The addition of quantization ensures the system’s efficiency and real-time performance, making it a practical solution for privacy-preserving surveillance in everyday environments.
