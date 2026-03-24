---
id: minibot-software-manual-drive  
title: Manual Driving  
sidebar_position: 3
---

# Enabling the robot

We use [edu_drive](https://github.com/EduArt-Robotik/edu_drive_ros2) for this robot. For safety reasons, the robot has to be enabled to drive. You can either use this command to enable it with the terminal:

```bash
ros2 service call /edu_sml/enable std_srvs/srv/SetBool "data: true"
```

Or use the joy node

# Control with terminal

You can send a Geometry Message directly to the teleop topic of the robot

```bash
ros2 launch edu_drive_ros2 copy_edu_drive_leison_4ch.launch.py
ros2 topic pub /edu_sml/vel/teleop geometry_msgs/msg/Twist \ "{linear: {x: 0.1, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: 0.0}}" \ -r 10
```

# Installing Joystick Drivers

On the PC you intend to control the robot from you can use the joy node to control the robot.

If you're using a virtual machine, you'll have to set up USB passthrough for your controller. In our case we've had to install the extension pack for the VirtualBox version we had.

You can confirm with this command, that your controller is being recoginzed:

`ros2 run joy joy_enumerate_devices`

The usage of the joy node is documented on the [edu_drive_ros2 repository](https://github.com/EduArt-Robotik/edu_drive_ros2):  
`ros2 run joy joy_node --ros-args -p autorepeat_rate:=25.0 --remap joy:=YOUR_DESIRED_TOPIC`

It is recommended to use the linux_joy node instead as that reduces jittering.

```BASH
sudo apt install ros-$ROS_DISTRO-joy-linux
ros2 run joy_linux joy_linux_node --ros-args -p autorepeat_rate:=25.0 --remap joy:=YOUR_DESIRED_TOPIC
```

by default the topic of the minibot should be /edu_sml/vel/

# Installing the xbox joystick package

This is a small package that can be used to drive the Minibot with an xbox controller. It includes buttons for enabling and disabling the robot.

On the PC you intend to control the robot from you can use the joy node to control the robot clone [the package](https://github.com/neo-viktorpetrenko/minibot_xbox_joy) with this command:

```bash
git clone https://github.com/neo-viktorpetrenko/minibot_xbox_joy
```

Check if your controller is recognized by your os by running `lsusb`  
You should see a Microsoft Controller there

Then you can launch the controller node:  
`ros2 launch minibot_xbox_joy controller.launch.py`

if the enable command doesn't work from your control pc, because the payload is too big as in this message:

```bash
[edu_drive_ros2_node-1] 2026-02-28 23:05:17.324 [RTPS_READER_HISTORY Error] Change payload size of '24' bytes is larger than the history payload size of '11' bytes and cannot be resized. -> Function can_change_be_added_nts

```

run this before running the launch file:

```bash
export RMW_IMPLEMENTATION=rmw_fastrtps_cpp
```