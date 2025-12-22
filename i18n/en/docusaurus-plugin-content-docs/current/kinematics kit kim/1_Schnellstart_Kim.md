---
sidebar_position: 1
---

# Quick Start

## Target Audience
This document is intended for anyone who has purchased a Kinematics Kit Kim or components thereof.

## Kim Components
- Raspberry Adapter Board
- Motor Controller Bundle
- Power Management
- Battery
- Cable Set
- Power Supply
- DC Motors including mounting brackets and motor adapters

Optional
- Auxiliary Power Supply including 4-pin plug
- Servo Shield
- Mecanum Wheels
- Offroad Wheels
- Vision 360° Sensor Ring Module

## Assembly

Connect the modules in the following order:
- Insert the adapter board onto the Raspberry Single-Board Computer. Make sure to also install the spacers.
- Insert the motor shields onto the adapter boards. You must always build a single layer, so you must always use an even number of modules. For an odd number, balancing modules are available. Also ensure that the CAN termination resistors are set correctly (only on the top layer of the motor shields).
- Insert the AuxPowerSupply if available.
- Insert the power management module. Then connect the control cable.

**Tip:** Pay attention to clean cable management while working. Cut the cables to an appropriate length and secure them properly so they don't get in the way later if you need to disassemble the robot again.


## SD Card

Download the image [here](https://eduart-robotik.com/downloads/#kim-v-rpi5-1-0-0) or use your own installation (see: [https://github.com/eduart-robotik/edu_drive_ros2](https://github.com/eduart-robotik/edu_drive_ros2)).

Extract the downloaded image via terminal or right-click → **Extract**:

```shell
unzip 2025_12_12_rpi_edu_drive_ros2.zip
```

Alternatively, you can extract the ZIP file using a graphical tool.

For the following terminal command, replace `<path_to_sd_card>` with the actual device name of your SD card.

**Example:**
On Linux, the SD card often appears as `/dev/sdX` or `/dev/mmcblk0`, e.g., `/dev/sdb`.

```shell
dd if=2025_12_12_rpi_edu_drive_ros2.img of=/dev/sdb bs=4M status=progress
```

⚠️ **Warning:** Make sure you select the correct drive, as the SD card contents will be completely overwritten.

Then insert the SD card into the Raspberry Pi and boot the system.

## First Start

The image is configured as a DHCP client → Connect the Raspberry Pi to a router that provides a DHCP server, or configure a static IP address (mount the SD card image and access the card's file system).

To find the IP address in a DHCP environment, use `nmap -sP <IP-pattern>`. This helps determine which IP address the Raspberry Pi received.
Example with a subnet mask of 255.255.255.0 and a network with addresses 192.168.178.*:

```shell
nmap -sP 192.168.178.*
```

You can log in to the Raspberry Pi via Secure Shell without a connected monitor:

```shell
ssh user@<IP-address>
```

The password is **"user"**. It is recommended to change this after first login.
Two packages are pre-installed on the Raspberry: `edu_drive_ros2` and `edu_sensorring_ros2`.
To control connected motors, you must start a ROS node from the `edu_drive_ros2` package.

This is best done using launch files that read the appropriate parameter files, e.g.:

```shell
ros2 launch edu_drive_ros2 <launch_file>
```

## Motor Selection

Depending on the number and type of connected motors, it is recommended to start an appropriate launch file. The detailed documentation describes how to customize the parameter file for this launch file. For a quick start, several launch examples are listed below:

**Four-Wheel Drive with Faulhaber Motors**

```shell
ros2 launch edu_drive_ros2 edu_drive_faulhaber_4ch.launch
```

**Six-Wheel Drive with Faulhaber Motors**

```shell
ros2 launch edu_drive_ros2 edu_drive_faulhaber_6ch.launch
```

**Four-Wheel Drive with Leison Motors**

```shell
ros2 launch edu_drive_ros2 edu_drive_leison_4ch.launch
```

**Six-Wheel Drive with Leison Motors**

```shell
ros2 launch edu_drive_ros2 edu_drive_leison_6ch.launch
```

For custom adjustments, copy a launch file and parameter file as templates and modify them accordingly.

## Control the Robot

Before accessing the robot from a remote computer, verify that communication with the started nodes works.
The default setting on the pre-configured Raspberry image is Domain ID **17**. This ID must also be set on the remote computer:

```shell
export ROS_DOMAIN_ID=17
```

It is best to add this ID to the `~/.bashrc` file so it is set automatically on each system start.

With the command

```shell
ros2 topic list
```

you can verify that communication with the started `edu_drive_ros2` node is possible.

The Kinematic Kit offers two interfaces for controlling the motors: joystick-based and Twist message-based control. The joystick-based control is shown below:

```shell
ros2 run joy joy_node --ros-args --remap joy:=/rmrc/joy
```

To further explore the Kinematic Kit's capabilities, use the following ROS commands to display all available topics and services:

```shell
ros2 topic list
```

```shell
ros2 service list
```

