---
id: simulation-starten
title: Simulation starten
sidebar_position: 5
---
# Simulation Starten

## Installation

### Preparation

Als erstes müssen die ganzen Repositories in den ROS2_ws geladen werden. 

```bash
cd /home/user/ros2_ws/src
```
Wir navigieren wieder in unseren Workspace (erfahrene haben vlt einen anderen Workspace oder einen anderen Benutzernamen als "ros", bitte entsprechend anpassen) und dann in den src Ordner. 

```bash
git clone https://github.com/EduArt-Robotik/edu_robot.git && 
git clone https://github.com/EduArt-Robotik/edu_robot_control.git && 
git clone https://github.com/EduArt-Robotik/edu_simulation.git && 
git clone https://github.com/EduArt-Robotik/edu_virtual_joy.git
```
Alle nötigen Repositories klonen und bauen mit folgendem Befehl:

```
colcon build --symlink-install --packages-select edu_robot edu_robot_control edu_simulation --event-handlers console_direct+
```

Da laufen dann ein paar Minuten lang ganz viele Befehle durch die Kommandozeile.

Dann öffnen wir 4 Terminalfenster und geben erstmal in alle das hier ein:
```
source /home/user/ros2_ws/install/setup.bash
```
- wir müssen unseren workspace jedes Mal sourcen. Einer der Hauptfehler, wenn irgendwelche Pakete nicht gefunden werden oder irgendwas nicht geht. Clevere Menschen schreiben das direkt ins Startsktipt vom Dockercontainer … 

Terminal 1: 
```bash
ros2 launch edu_simulation gazebo.launch.py world:=maze.world 
```
- Startet die Gazebo Simulation

![Gazebo](./assets/quickstart/5maze.png)


Terminal 2:

```bash
ros2 launch edu_simulation eduard.launch.py wheel_type:=mecanum pos_x:=0.0 pos_y:=0.0 pos_z:=0.04 yaw:=0.0 edu_robot_namespace:=eduard/blue
```
- Platziert einen blauen Eduard Roboter im Labyrinth


Terminal 3: 

```bash
ros2 run edu_virtual_joy virtual_joy --ros-args -r __ns:=/eduard/blue
```
- Startet den Joystick 

![Virtual Joystick](./assets/quickstart/6joystick.png)

Terminal 4:
```bash
ros2 launch edu_simulation eduard_monitor.launch.py edu_robot_namespace:=eduard/blue
```
- Startet das Monitoring 

![RViz](./assets/quickstart/7rviz.png)


