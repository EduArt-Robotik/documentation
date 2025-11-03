---
sidebar_position: 2
---
Voraussetzungen
- VSC installiert
- Docker kann installiert werden
- ggf. VNC Viewer installieren
- Browser installiert :D

# Plattformunabhängige Installation mit Docker

Mit dieser Variante kann man das folgende Simulationstutorial direkt im Browser ausführen, ohne Ubuntu oder ROS Nativ oder in einer VM installiert zu haben. Ubuntu und ROS laufen lediglich in einem Dockercontainer.

1. Installation von Docker Hub: https://docs.docker.com/desktop/setup/install/mac-install/
2. Empfohlene Einstellungen verwenden

Nur für Mac-Nutzer mit Silikon Chip: `softwareupdate --install-rosetta` ins Terminal eingeben und installieren

3. In DockerHub (links in der Seitenleiste) nach ROS suchen oder im Terminal am Computer `docker pull ros:jazzy-ros-core` eingeben
4. Bei Version bzw. Latest "jazzy-ros-core" auswählen und Run klicken, Image erstellen (hier keine Eingabe nötig)
5. Lokal auf dem Rechner neuen Ordner namens "Docker" erstellen (name ist eig egal, aber wir werden im Folgenden mit dem Ordner namens Docker arbeiten)
6. in den Ordner "Docker" navigieren
entweder ins Terminal cd eingeben und mit Tabulator-Taste die Auswahlvorschläge anzeigen und stück für stück in den Ordner rein navigieren, oder über den Explorer / Finder in den Ordner gehen und rechtsklick "Terminal im Ordner öffnen" eingeben

Im Ordner Docker nun 2 Dateien anlegen:
- Datei1 "Dockerfile"
- folgenden Inhalt reinkopieren und speichern

```dockerfile
FROM osrf/ros:jazzy-desktop

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \
    xfce4 xfce4-terminal x11vnc xvfb novnc websockify supervisor dbus-x11 \
    sudo net-tools curl wget && \
    rm -rf /var/lib/apt/lists/*

# User anlegen
RUN useradd -m ros && echo "ros:ros" | chpasswd && adduser ros sudo
USER ros
WORKDIR /home/ros
ENV HOME=/home/ros
ENV USER=ros

USER root
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080
CMD ["/usr/bin/supervisord"]
```

- Datei 2 "supervisord.conf" erstellen
folgenden Inhalt reinkopieren

```supervisord.conf
[supervisord]
nodaemon=true

[program:Xvfb]
command=/usr/bin/Xvfb :0 -screen 0 1280x800x24
priority=1
autostart=true
autorestart=true

[program:x11vnc]
command=/usr/bin/x11vnc -display :0 -forever -nopw -shared
priority=2
autostart=true
autorestart=true

[program:xfce4]
command=/usr/bin/startxfce4
environment=DISPLAY=":0"
priority=3
autostart=true
autorestart=true

[program:novnc]
command=/usr/share/novnc/utils/novnc_proxy --vnc localhost:5900 --listen 8080
priority=4
autostart=true
autorestart=true
```

Dann in VSC ein Terminal öffnen und folgende Befehle nacheinander eingeben:
```
docker build --platform=linux/amd64 -t ros2-vnc .
```
- baut das Ding 

```shell
docker run --platform=linux/amd64 -p 8080:8080 --shm-size=2g --name ros2-vnc-test ros2-vnc
```
- führt es aus
- dann im Browser eingeben: http://localhost:8080/vnc.html und ausführen klicken
- dann müsste man Ubuntu im Browser sehen können

Vorteil: kein VNC Viewer nötig
Nachteil: ich hab bisher nicht rausgefunden, wie man Kopiert und einfügt.

Deswegen zusätzlich VNC Viewer verwenden:
1. VNC Viewer öffnen
2. Datei / Neue Verbindung / localhost:5900
3. Doppelklick auf die Verbindug zum Starten

dann statt dem obrigen docker run befehl, den hier im VSC Terminal im Ordner "Docker" ausführen:

```shell
docker run -it \
  -p 8080:8080 \
  -p 5900:5900 \
  --shm-size=2g \
  --name ros2-vnc-test \
  ros2-vnc
```

Jetzt ists egal, ob man die Verbindung im Browser anzeigt oder im VNC Viewer. Geht auch beides gleichzeitig, wenn man Verwirrung mag.


# Troubleshooting
- Docker container "ros2-vnc-test" existiert bereits: 
```shell
docker rm -f ros2-vnc-test
```

--- English

Requirements
- VSC installed
- Docker can be installed
- Install VNC Viewer if necessary
- Browser installed :D

# Platform-independent installation with Docker

With this option, you can run the following simulation tutorial directly in your browser without having Ubuntu or ROS Native installed or in a VM. Ubuntu and ROS only run in a Docker container.

1. Installation of Docker Hub: https://docs.docker.com/desktop/setup/install/mac-install/
2. Use recommended settings

Only for Mac users with silicon chip: enter `softwareupdate --install-rosetta` in the terminal and install

3. Search for ROS in DockerHub (on the left in the sidebar) or enter `docker pull ros:jazzy-ros-core` in the terminal on your computer
4. Select ‘jazzy-ros-core’ for Version or Latest and click Run, create image (no input required here)
5. Create a new folder called ‘Docker’ locally on your computer (the name doesn't really matter, but we will be working with the folder called Docker in the following)
6. Navigate to the ‘Docker’ folder.
Either enter cd in the terminal and use the tab key to display the selection suggestions and navigate into the folder piece by piece, or go to the folder via Explorer/Finder and right-click ‘Open terminal in folder’.

Now create two files in the Docker folder:
- File 1: ‘Dockerfile’
- Copy the following content into the file and save it

```dockerfile
FROM osrf/ros:jazzy-desktop

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \
    xfce4 xfce4-terminal x11vnc xvfb novnc websockify supervisor dbus-x11 \
    sudo net-tools curl wget && \
    rm -rf /var/lib/apt/lists/*

# User anlegen
RUN useradd -m ros && echo "ros:ros" | chpasswd && adduser ros sudo
USER ros
WORKDIR /home/ros
ENV HOME=/home/ros
ENV USER=ros

USER root
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080
CMD ["/usr/bin/supervisord"]
```

- File 2: `supervisord.config`
- Copy the following content into the file and save it


```supervisord.conf
[supervisord]
nodaemon=true

[program:Xvfb]
command=/usr/bin/Xvfb :0 -screen 0 1280x800x24
priority=1
autostart=true
autorestart=true

[program:x11vnc]
command=/usr/bin/x11vnc -display :0 -forever -nopw -shared
priority=2
autostart=true
autorestart=true

[program:xfce4]
command=/usr/bin/startxfce4
environment=DISPLAY=":0"
priority=3
autostart=true
autorestart=true

[program:novnc]
command=/usr/share/novnc/utils/novnc_proxy --vnc localhost:5900 --listen 8080
priority=4
autostart=true
autorestart=true
```


Then open a terminal in VSC and enter the following commands one after the other:
```
docker build --platform=linux/amd64 -t ros2-vnc .
```
- builds the thing 

```shell
docker run --platform=linux/amd64 -p 8080:8080 --shm-size=2g --name ros2-vnc-test ros2-vnc
```
- runs it
- then enter the following in your browser: http://localhost:8080/vnc.html and click on ‘Run’
- you should then be able to see Ubuntu in your browser

Advantage: no VNC Viewer required
Disadvantage: I haven't figured out how to copy and paste yet.

Therefore, use VNC Viewer as well:
1. Open VNC Viewer
2. File / New Connection / localhost:5900
3. Double-click on the connection to start

Then, instead of the above docker run command, execute the following in the VSC terminal in the ‘Docker’ folder:

```shell
docker run -it \
  -p 8080:8080 \
  -p 5900:5900 \
  --shm-size=2g \
  --name ros2-vnc-test \
  ros2-vnc
```

Now it doesn't matter whether you display the connection in the browser or in the VNC Viewer. You can even do both at the same time, if you like confusion.


# Troubleshooting
- Docker container ‘ros2-vnc-test’ already exists: 
```shell
docker rm -f ros2-vnc-test
```
