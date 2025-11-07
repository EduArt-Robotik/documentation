---
id: installationsvarianten
title: Installationsvarianten
sidebar_position: 3
---

# Installationsvarianten

Neben der aktuell beschriebenen Variante über den Dockercontainer im Browser bzw. VNC Viewer, lässt sich die Simulation noch auf einige andere Weisen starten. Im folgenden werden einige Beschrieben.


## Windows Installation mit WSL 

### Konfigurieren

In einen PowerShell Terminal, das in dem Ordner geöffnet wurde, in dem das Image liegt.
```powershell
wsl --import EduArtRosJazzy . .\eduart-ros-jazzy-wsl.tar
wsl -d EduArtRosJazzy
```

In dem Linux Terminal, das im selben PowerShell Fenster auf geht. Das sudo-Passwort ist `user`.
```bash
sudo nano /etc/wsl.conf
```

Dort den default user einstellen.
```bash
[boot]
systemd=true

[user]
default=user
```

Als nächstes die Netzwerkschnittstellen für Ros konfigurieren. Dazu die aktuellen Netzwerkinterfaces anzeigen:
```bash
ifconfig
```

Aus der Ausgabe die Netzwerkschnittstelle (z.B. eth0, eth1 ...) raussuchen, über die der Container mit Windows verbunden ist. Falls das Interface **nicht eth1** ist muss nun in drei Dateien eingestellt werden. Dort jeweils `eth1` durch die korrekte Schnittstelle ersetzen. Das ganze auch noch analog in den folgenden zwei Dateien ändern.
```bash
nano /home/user/cyclone_profile.xml
```
```bash
nano /home/user/edu_nodered_ros2_plugin/docker/raspberry/launch_content/cyclone_profile.xml
```
```bash
nano /home/user/edu_virtual_joy/docker/generic/launch_content/cyclone_profile.xml
```

Dann die WSL einmal beenden und neu starten. Dazu aus die Linux Konsole beenden.
```bash
exit
```

Dann unter Windows die WSL herunterfahren und neu starten:
```powershell
wsl --d EduArtRosJazzy --shutdown
```


### Ausführen

WSL starten
```powershell
wsl -d EduArtRosJazzy
```

Dann in der Linux Konsole noch Ros2 starten. **Das muss nach jedem Neustart gemacht werden**
```bash
cd ~
ros2 daemon start
```

 Nun kann die Simulation gestartet werden. Dazu brauchen wir mindestens zwei WSL Terminals, für jedes Befehl ein neues:
 
```bash
ros2 launch edu_simulation gazebo.launch.py world:=maze.world 
```

```bash
ros2 launch edu_simulation eduard.launch.py wheel_type:=mecanum pos_x:=0.0 pos_y:=0.0 pos_z:=0.04 yaw:=0.0 edu_robot_namespace:=eduard
```

Optional kann noch das Monitoring gestartet werden:
```bash
ros2 launch edu_simulation eduard_monitor.launch.py edu_robot_namespace:=eduard
```

Die Fernsteuerung kann in einem Browserfenster unter der Adresse `localhost:8888` geöffnet werden.


## Virtuelle Maschine (VM) einrichten
Hierzu wird ein VM Dienst installiert, z.B. VMware Fusion (für Schüler und Studenten kostenlos), VirtualBox oder Ähnliches.

Dann wird das gewünschte Betriebssystem runtergeladen (für die Simulation mindestens >>TODO nötig) und in die VM geladen, installiert und gestartet und dort folgen dann die kommenden Einrichtungsschritte.

Vorteile: Man kann innerhalb vom eigenen Computer schnell auf das Betriebssystem zugreifen ohne Neustart.

Nachteile: Vermutlich die Nutzung von Internet in beiden Betriebssystemen, Copy + Paste könnte ätzend sein, möglicherweise gehen Rechenintensive Programme wie Gazebo und RVIZ nicht oder nur langsam und vlt packt es der Computer gar nicht. 


## Dual Boot einrichten
Hierbei wird das Betriebssystem statt in einer Virtuellen Maschine auf einer Festplatte oder einem USB Stick installiert. Beim starten des eigenen Computers kann man dann mit einer Tastenkombination auswählen, welches Betriebssystem gestartet werden soll.

Vorteile: Immer noch beide Betriebssysteme auf einem Computer. Schneller als eine VM. Die meisten Programme sollten funktionieren.

Nachteile: Beim Einrichten kann man ggf. was am eigenen Rechner kaputt machen (vor allem bei Mac). Man muss immer Neustarten, um zwischen Betriebssystemen zu wechseln. Man darf die Festplatte nicht verlieren oder vergessen … 

## Alten Computer mit Linux Betriebssystem neu aufsetzen

Wie der Titel schon sagt. Löst so gut wie alle Probleme, aber man muss dann halt auch immer 2 Computer mitschleppen.

Falls sich jemand berufen fühlt, hier konkrete Anleitungen zu Installationen zu ergänzen, [schreib mir eine Mail](mailto:sina_steinmueller@eduart-robotik.com)

