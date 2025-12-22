---
id: installationsvarianten
title: Installation Variants
sidebar_position: 2
---

# Installation Variants

In addition to the currently described method using the Docker container in the browser or VNC Viewer, the simulation can also be started in several other ways. Below are some described.

## Windows Installation with WSL 

### Configuration

Open a PowerShell terminal in the folder where the image is located.
```powershell
wsl --import EduArtRosJazzy . .\eduart-ros-jazzy-wsl.tar
wsl -d EduArtRosJazzy
```

In the Linux terminal that opens in the same PowerShell window, the sudo password is `user`.
```bash
sudo nano /etc/wsl.conf
```

Set the default user there.
```bash
[boot]
systemd=true

[user]
default=user
```

Next, configure the network interfaces for ROS. To do this, display the current network interfaces:
```bash
ifconfig
```

Find the network interface (e.g., eth0, eth1 ...) from the output that the container is connected to Windows. If the interface is **not eth1**, it needs to be set in three files. Replace `eth1` with the correct interface in each of them. Make the same changes in the following two files.
```bash
nano /home/user/cyclone_profile.xml
```
```bash
nano /home/user/edu_nodered_ros2_plugin/docker/raspberry/launch_content/cyclone_profile.xml
```
```bash
nano /home/user/edu_virtual_joy/docker/generic/launch_content/cyclone_profile.xml
```

Then exit and restart WSL. To do this, exit the Linux console.
```bash
exit
```

Then shut down and restart WSL under Windows:
```powershell
wsl --d EduArtRosJazzy --shutdown
```

### Execution

Start WSL
```powershell
wsl -d EduArtRosJazzy
```

Then start ROS2 in the Linux console. **This must be done after every restart**
```bash
cd ~
ros2 daemon start
```

Now the simulation can be started. For this, we need at least two WSL terminals, one for each command:
 
```bash
ros2 launch edu_simulation gazebo.launch.py world:=maze.world 
```

```bash
ros2 launch edu_simulation eduard.launch.py wheel_type:=mecanum pos_x:=0.0 pos_y:=0.0 pos_z:=0.04 yaw:=0.0 edu_robot_namespace:=eduard
```

Optionally, monitoring can also be started:
```bash
ros2 launch edu_simulation eduard_monitor.launch.py edu_robot_namespace:=eduard
```

The remote control can be opened in a browser window at the address `localhost:8888`.


## Setting Up a Virtual Machine (VM)
For this, a VM service is installed, e.g., VMware Fusion (free for students), VirtualBox, or similar.

Then download the desired operating system (at least >>TODO needed for the simulation) and load, install, and start it in the VM, following the upcoming setup steps.

Advantages: You can quickly access the operating system within your own computer without restarting.

Disadvantages: Likely the use of the internet in both operating systems, copy + paste could be cumbersome, possibly resource-intensive programs like Gazebo and RVIZ may not work or only slowly, and the computer may not handle it at all. 


## Setting Up Dual Boot
In this case, the operating system is installed on a hard drive or USB stick instead of in a virtual machine. When starting your computer, you can select which operating system to boot with a key combination.

Advantages: Still have both operating systems on one computer. Faster than a VM. Most programs should work.

Disadvantages: During setup, you might accidentally damage something on your own computer (especially on Mac). You have to restart every time to switch between operating systems. You must not lose or forget the hard drive… 

## Reinstalling an Old Computer with Linux Operating System

As the title suggests. Solves almost all problems, but you will have to carry two computers around.

If anyone feels called to add specific installation instructions here, [send me an email](mailto:sina_steinmueller@eduart-robotik.com)
