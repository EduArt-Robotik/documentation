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

- Alternative mit mehr Dependencies (dauert länger aber man spart sich das Workspace anlegen)
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

RUN apt update \
    &&  apt install -y \
    tmux \
    git \
    openssh-client \
    gdb \
    build-essential

RUN apt-get update \
    && apt-get install -y \
        python3-pip \
        python3.12-venv

RUN bash -c "\
    mkdir /home/ros/python_env \
    && cd /home/ros/python_env \
    && python3 -m venv .flet \
    && source .flet/bin/activate \
    && pip3 install flet setuptools pyyaml \
    && pip install 'flet[all]==0.25.1' --upgrade"

# Configuration
RUN touch ~/.tmux.conf
RUN echo "set -g default-terminal \"screen-256color\"" >> ~/.tmux.conf
RUN echo "set -g mouse on" >> ~/.tmux.conf

# Source ROS files
RUN echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc
RUN echo "source /home/ros/ros2_ws/install/setup.bash" >> ~/.bashrc

# Install EduRobot dependencies
RUN apt update \
    && apt install -y \
    ros-jazzy-hardware-interface \
    ros-jazzy-diagnostic-updater \
    ros-jazzy-hardware-interface \
    ros-jazzy-laser-geometry \
    ros-jazzy-gz-sim-vendor \
    ros-jazzy-ros-gz-bridge \
    ros-jazzy-ros-gz-sim \
    ros-jazzy-ros-gz \
    ros-jazzy-xacro \
    ros-jazzy-rviz2

RUN mkdir /home/ros/ros2_ws/src -p
WORKDIR /home/ros/ros2_ws

# Get EduArt repos
RUN bash -c "\
    source /opt/ros/jazzy/setup.bash \
    && git clone https://github.com/EduArt-Robotik/edu_robot.git src/edu_robot\
    && colcon build --symlink-install --packages-select edu_robot --event-handlers console_direct+"
    
# Get EduArt repos
RUN bash -c "\
    source /opt/ros/jazzy/setup.bash \
    && git clone https://github.com/EduArt-Robotik/edu_robot_control.git src/edu_robot_control\
    && colcon build --symlink-install --packages-select edu_robot_control --event-handlers console_direct+"

# Get EduArt repos
RUN bash -c "\
    source /opt/ros/jazzy/setup.bash \
    && git clone -b 0.3.0 https://github.com/EduArt-Robotik/edu_simulation.git src/edu_simulation\
    && colcon build --symlink-install --packages-select edu_simulation --event-handlers console_direct+"

# Get EduArt repos
RUN bash -c "\
    source /opt/ros/jazzy/setup.bash \
    && git clone -b develop https://github.com/EduArt-Robotik/edu_virtual_joy.git src/edu_virtual_joy\
    && colcon build --symlink-install --packages-select edu_virtual_joy --event-handlers console_direct+"

# Open virtual joystick in a window, not in the browser (doesn't work in dev container)
RUN sed -i 's\ft.app(target=main, view=ft.AppView.WEB_BROWSER, port=8888, assets_dir="assets")\ft.app(target=main, assets_dir="assets")\g' /home/ros/ros2_ws/src/edu_virtual_joy/edu_virtual_joy/edu_virtual_joy.py

# Set ROS varables
ENV ROS_DOMAIN_ID=0
ENV RMW_IMPLEMENTATION=rmw_fastrtps_cpp
#ENV RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# Set Python environment
ENV PYTHONPATH='/home/ros/python_env/.flet/lib/python3.12/site-packages'

# Enable color on command prompt
ENV TERM=xterm-256color
ENV color_prompt=yes
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
