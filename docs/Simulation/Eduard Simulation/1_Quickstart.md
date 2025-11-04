---
sidebar_position: 1
---

# Quickstart

Diese Anleitung ist dafür gedacht, schnell in die Eduard Simulation zu starten. Wenn du keine Lust auf die manuelle Einrichtung hast und direkt erste Erfahrungen mit der Simulation starten willst, ist diese Anleitung für dich geeignet. Wenn du lernen willst, wie man seine Linuxumgebung selbst einrichtet, überspringe dieses Kapitel und beginne mit "Manuelle Einrichtung". 

Die folgenden Quickstart-Anleitungen sind Betriebssystemunabhängig, um die Einrichtung von Ubuntu auf dem eigenen Betriebssystem oder als Virtuelle Maschine zu vermeiden. Für Linuxnutzer empfielht es sich, die "normale" Installation zu verwenden (Weiter bei tbd).
## Voraussetzungen

- Vorhandener Github Account mit hinterlegtem SSH Key für `git clone` (vgl. https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

## Benötigte Software

- Docker Hub (vgl. https://docs.docker.com/desktop/setup/install/mac-install/), installiert, AGBs akzeptiert und mal geöffnet

optional
- VNC Viewer installiert (vgl. https://www.realvnc.com/de/connect/download/viewer/)
- Visual Studio Code installiert (vgl. https://code.visualstudio.com/download)

## Installation
- Erstelle einen Ordner "EduArt" in deinen Dokumenten
- Öffne den Ordner EduArt im Dateimanager 

Auf Mac:
- Rechtsklick auf den Ordnernamen in der Pfadleiste unten und "in Terminal öffnen"

Auf Windows: 
- Rechtsklick "in PowerShell öffnen" oder "in Terminal öffnen"

im Terminal:
- mit `cd` in den Ordner rein navigieren, z.B. 
```
cd Documents/EduArt
```
- enter drücken

Terminal öffnen und folgenden Befehl eingeben:
```
git clone git@github.com:EduArt-Robotik/edu_simulation_quickstart.git
```
- wenn hier was von "authentication failed" steht, ist der Github SSH Key nicht richtig angelegt

Wenn das Repo dann fertig geklont ist
```
cd edu_simulation_quickstart
```

Dockercontainer bauen (dauert je nach Computer und Arbeitsspeicher zwischen 3 und 20 min). 
```
docker build --platform=linux/amd64 -t ros2-vnc .
```
![[Bildschirmfoto 2025-11-04 um 17.16.53.png]]

Wenn der Container erfolgreich gebaut ist, den Dockercontainer starten:
```
docker compose -f docker-compose.run.yml up
```

![[Bildschirmfoto 2025-11-04 um 17.19.20.png]]

Danach im Browser öffnen: http://localhost:8080/vnc.html und auf "Verbinden klicken"

![[Bildschirmfoto 2025-11-04 um 17.19.40.png]]
Optional in VNC Viewer integrieren
- VNC Viewer (oder alternative Software) öffnen
- Datei / Neue Verbindung / localhost:5900 

## Tipps
- Copy + Paste über die noVNC Seitenleiste Links

## Simulation starten
Terminal in Simulation öffnen, dann öffnet sich automatisch ein 4-geteiltes Terminalfenster mit 4 Kommandos.

![[Bildschirmfoto 2025-11-04 um 17.30.17.png]]

In Fenster 1, links oben, startet das Programm "Gazebo", das ein Labyrinth zeigt. Hier ist Links unten ein Button "Run the simulation", diesen drücken.
![[Bildschirmfoto 2025-11-04 um 17.29.21.png]]

In Fenster 2, links unten, startet der Virtuelle Controller für den Roboter.

![[Bildschirmfoto 2025-11-04 um 17.30.58.png]]
Fenster 3, rechts oben, platziert einen blauen Eduardroboter im Labyrinth in Fenster 1. Wenn du die Simulation in Fenster 1 gestartet hast, klicke in dieses Terminalfenster (rechts unten in der grünen Leiste steht dann der Name des Fensters "3. Add Eduard"). Drücke Enter, dann ist der blaue Roboter im Labyrinth.
Skaliere das Fenster ggf., sodass du die Buttons unten siehst und drücke "Remote". Erfolgreich, wenn der Button grün wird. Dann kannst du mit dem linken Joystick fahren und mit dem rechten Joystick dich drehen.


Optional: Fenster 4 öffnet das Monitoring in RVIZ.

![[Bildschirmfoto 2025-11-04 um 18.02.14.png]]

## Troubleshooting

Fehler: ` ✘ ros2-vnc Error pull access denied for ros2-vnc, repository does not exist or may require 'docker login'` oder:  `if container already exists`: 

```
docker compose -f docker-compose.run.yml down
```

und danach dann 
```
docker compose -f docker-compose.run.yml up
```

