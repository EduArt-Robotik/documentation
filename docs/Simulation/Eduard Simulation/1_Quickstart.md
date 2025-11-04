---
sidebar_position: 1
---

# Quickstart

Diese Anleitung ist dafür gedacht, schnell in die Eduard Simulation zu starten. Wenn du keine Lust auf die manuelle Einrichtung hast und direkt erste Erfahrungen mit der Simulation starten willst, ist diese Anleitung für dich geeignet. Wenn du lernen willst, wie man seine Linuxumgebung selbst einrichtet, überspringe dieses Kapitel und beginne mit "Manuelle Einrichtung". 

Die folgenden Quickstart-Anleitungen sind Betriebssystemunabhängig, um die Einrichtung von Ubuntu auf dem eigenen Betriebssystem oder als Virtuelle Maschine zu vermeiden. Für Linuxnutzer empfielht es sich, die "normale" Installation zu verwenden (Weiter bei tbd).
## Voraussetzungen

- Vorhandener Github Account mit hinterlegtem SSH Key für `git clone` (vgl. https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

## Benötigte Software

- Docker Hub (vgl. https://docs.docker.com/desktop/setup/install/mac-install/)

optional
- VNC Viewer installiert (vgl. https://www.realvnc.com/de/connect/download/viewer/)
- Visual Studio Code installiert (vgl. https://code.visualstudio.com/download)

## Installation
- Erstelle einen Ordner "EduArt" in deinen Dokumenten
- Öffne den Ordner EduArt im Dateimanager 

Auf Mac:
- Rechtsklick auf den Ordnernamen in der Pfadleiste unten und "in Terminal öffnen"

Auf Windows: 
- Rechtsklick "in PowerShell öffnen"

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

Wenn der Container erfolgreich gebaut ist, den Dockercontainer starten:
```
docker compose -f docker-compose.run.yml up
```

Danach im Browser öffnen: http://localhost:8080/vnc.html

