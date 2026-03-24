---
id: minibot-software-intro
title: Software Introduction
sidebar_position: 1
---
# Software Introduction

After Setting up the Software for this robot, you will be able to see the robot surroundings through its sensors, drive it manually with a controller or have it navigate by itself to a point you specify. Specifically we will set up the following:

- Eduart edu_drive_ros2 as the interface between the motors and ROS2
- the ydlidar SDK and the ydlidar ROS2 driver for getting the sensor data from our T-mini plus lidars
- minibot scan fusion for combining both lidar sensor data into one
- the SLAM toolbox for mapping and localisation
- Nav2 for autonomous navigation

If you intend to use similar hardware as we did for this project, you should be able to get the robot running following these instructions for installing the software. You may need to edit some configs or replace certain packages if your hardware differs.