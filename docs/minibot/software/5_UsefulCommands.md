---
id: minibot-software-useful-cmd
title: Useful Commands
sidebar_position: 5
---

This is a collection of useful commands and launch files for operating the robot.

# Robot Launch files

| Command | Is starting |
| --- | --- |
| `ros2 launch edu_drive_ros2 edu_drive_minibot.launch.py` | edu_drive_ros2 |
| `ros2 launch minibot_config tmini_launch.py` | The two Lidar publisher nodes |
| `ros2 launch minibot_scan_fusion minibot_scan_fusion.launch.py` | 2 to 1 Lidar Combination Node |
| `ros2 launch edu_drive_ros2 minibot.launch.py`  | edu_drive_ros2, Lidar Nodes, Lidar Combination Node, SLAM Toolbox  |
| `ros2 launch minibot_config navigation_launch.py` | Nav2 Nodes |


# Manual Control
| Command | Is starting |
| --- | --- |
|   `ros2 launch minibot_xbox_joy controller.launch.py`  | Xbox Controller Node* |
| `ros2 run joy joy_node --ros-args -p autorepeat_rate:=25.0 --remap joy:=edu_sml/joy` | Joystick control node |
| `ros2 run joy_linux joy_linux_node --ros-args -p autorepeat_rate:=25.0 --remap joy:=edu_sml/joy` | Linux Joystick control node |

\* This has to be set first: 
`export RMW_IMPLEMENTATION=rmw_fastrtps_cpp`


# Mapping
| Command | Use |
| --- | --- |
| `ros2 run nav2_map_server map_saver_cli -f mapname` | saving a map |
| `ros2 launch nav2_bringup bringup_launch.py   map:=/path/to/map.yaml` | loading a map |