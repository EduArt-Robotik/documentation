---
id: rosws
title: ROS2 Workspace anlegen und bauen
sidebar_position: 4
---
# ROS2 Workspace anlegen und bauen

- Im Homeverzeichnis des Linux Betriebssystems einen Ordner "ros2_ws" erstellen
- In "ros2_ws" den Ordner src erstellen 
- dann in den Ordner ros2_ws (zurück) navigieren und hier ein Terminalfenster öffnen
- Folgendes eingeben

```
colcon build
```
- erstellt werden jetzt die Ordner Build, Install und Log. 

![Bild](./assets/rosws/colcon.png)

Alternativ zur oben genannten manuellen Erstellung kann man das ganze auch über das Terminal lösen, einfach folgenden Befehl eingeben. 

```
mkdir -p /home/ros/ros2_ws/src && cd /home/ros/ros2_ws && colcon build
```

Als nächstes dann das Simulationstutorial starten.
