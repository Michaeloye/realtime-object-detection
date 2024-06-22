# Real Time Object Detection

### Overview

This project is a Real Time Object Detection frontend application.
The application is responsible for running system checks to confirm if the user's **webcam**, **microphone**, **internet speed**, **lighting** are properly set.

The project capitalizes on the object detection, it runs object detection on the stream coming from the user's **webcam**, if a person is not detected on the webcam it shows an error.

Similarly, the **lighting** check capitalizes on the score value returned by the object detection function.

The **microphone** check, accesses the user's microphone and determines if a certain audio value threshold is met to confirm if the microphone is properly functional

The **internet speed** check runs a function to simulate the download of a small sized file in order to ascertain how fast the user's internet speed is.

Built using: [Next JS](https://nextjs.org/), [Tensorflow](https://www.tensorflow.org/)

Live link: [real-time-object-detection](https://michaeloye-realtime-object-detection.vercel.app/)

# Web Preview

![Web Preview](https://github.com/Michaeloye/realtime-object-detection/blob/main/RealObjectDetection.png)

# Table of contents

- [Project Title](#real-time-object-detection)
- [Overview](#overview)
- [Web Preview](#web-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Development](#development)

# Installation

[(Back to top)](#table-of-contents)

To use this project, first clone the repo on your device using the command below:

`git init`

`git clone https://github.com/Michaeloye/realtime-object-detection.git`

# Development

[(Back to top)](#table-of-contents)

After cloning the repository, change root directory to the project path

To install the dependencies run

```shell
npm run install
```

### Local Development

```shell
npm run dev
```
