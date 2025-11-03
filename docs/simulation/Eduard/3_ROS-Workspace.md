---
sidebar_position: 3
---
# ROS2 Workspace anlegen
- Ubuntu Docker öffnen, entweder im Browser oder im VNC Viewer
- im Homeverzeichnis einen Ordner "ros2_ws" erstellen
- in "ros2_ws" den Ordner src erstellen
- dann in den Ordner ros2_ws (zurück) navigieren und hier ein Terminalfenster öffnen
- Folgendes eingeben

```
colcon build
```
- erstellt werden jetzt die Ordner Devel, Setup und Install (glaube ich)

Als nächstes dann das Simulationstutorial starten.


# Troubleshooting
- Docker container "ros2-vnc-test" existiert bereits: 
```shell
docker rm -f ros2-vnc-test
```

