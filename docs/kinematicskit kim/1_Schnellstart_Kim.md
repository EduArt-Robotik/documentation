---
sidebar_position: 1
---

# Schnellstart

## Zielgruppe dieses Dokuments
Dieses Dokument ist für alle Personen bestimmt, die eine Kinematics Kit Kim oder Komponenten davon gekauft haben. 

## Komponenten von Kim
- Raspy Adapterboard
- Motorcontroller-Bundle
- Powermanagement
- Battery
- Cable Set
- Power Supply
- DC Motors including mounting brackets and motor adapters

Optional 
- Auxiliary Power Supply including 4-pin plug
- Servoshield
- Mecanum Wheels
- Offroad Wheels
- Vision 360° Sensor Ring Module

## Zusammenbau

Verbinde die Module in der folgenden Reihenfolge:
- Stecke die Adapterplatine auf den Raspberry-Single-Board-Computer. Achte darauf, auch die Abstandshalter zu montieren.
- Stecke die Motor-Shields auf die Adapterplatinen. Es muss immer eine einzelne Ebene aufgebaut werden, daher muss stets eine gerade Anzahl an Modulen verwendet werden. Bei einer ungeraden Anzahl stehen Ausgleichsmodule zur Verfügung. Achte außerdem darauf, dass die CAN-Abschlusswiderstände korrekt gesetzt sind (nur auf der obersten Ebene der Motor-Shields).
- Stecke die AuxPowerSupply ein, falls vorhanden.
- Stecke das Power-Management-Modul ein. Verbinde anschließend das Steuerkabel.
Tipp: Achte während der Arbeit auf eine saubere Kabelführung. Schneide die Kabel auf eine passende Länge zu und fixiere sie ordentlich, damit sie später nicht im Weg sind, falls du den Roboter noch einmal zerlegen musst.

## SD-Karte

Lade das Image [hier](https://eduart-robotik.com/downloads/#kim-v-rpi5-1-0-0) herunter oder verwende eine eigene Installation (siehe dazu: [https://github.com/eduart-robotik/edu_drive_ros2](https://github.com/eduart-robotik/edu_drive_ros2)).

Entpacke das heruntergeladene Image entweder über das Terminal oder per Rechtsklick → **Entpacken**:

```shell
unzip 2025_12_12_rpi_edu_drive_ros2.zip
```

Alternativ kannst du die ZIP-Datei auch mit einem grafischen Tool entpacken.

Für den folgenden Terminalbefehl musst du `<path_to_sd_card>` durch den tatsächlichen Gerätenamen deiner SD-Karte ersetzen.

**Beispiel:**
Unter Linux erscheint die SD-Karte häufig als `/dev/sdX` oder `/dev/mmcblk0`, z. B. `/dev/sdb`.

```shell
dd if=2025_12_12_rpi_edu_drive_ros2.img of=/dev/sdb bs=4M status=progress
```

⚠️ **Achtung:** Stelle unbedingt sicher, dass du das richtige Laufwerk auswählst, da der Inhalt der SD-Karte dabei vollständig überschrieben wird.

Anschließend die SD-Karte in den Raspberry Pi einstecken und das System booten.


## Erster Start

Das Image ist als DHCP-Client konfiguriert → Verbinde den Raspberry Pi mit einem Router, der einen DHCP-Server bereitstellt, oder konfiguriere eine statische IP-Adresse (SD-Karten-Image einbinden und auf das Dateisystem der Karte zugreifen).

Um in einer DHCP-Umgebung die IP-Adresse herauszufinden, kannst du `nmap -sP <IP-Muster>` verwenden. So lässt sich ermitteln, welche IP-Adresse der Raspberry Pi erhalten hat.
Beispiel bei einer Subnetzmaske von 255.255.255.0 und einem Netzwerk mit den Adressen 192.168.178.*:

```shell
nmap -sP 192.168.178.*
```

Du kannst dich ohne angeschlossenen Monitor per Secure Shell auf dem Raspberry anmelden:

```shell
ssh user@<IP-Adresse>
```

Das Passwort lautet **„user“**. Es wird empfohlen, dieses nach der ersten Anmeldung zu ändern.
Auf dem Raspberry sind bereits zwei Pakete vorinstalliert: `edu_drive_ros2` und `edu_sensorring_ros2`.
Um angeschlossene Motoren zu steuern, musst du einen ROS-Node aus dem Paket `edu_drive_ros2` starten.

Dies geschieht am besten über sogenannte Launch-Dateien, die die passenden Parameterdateien einlesen, z. B.:

```shell
ros2 launch edu_drive_ros2 <launch_file>
```

## Motorauswahl

Abhängig von Anzahl und Typ der angeschlossenen Motoren empfiehlt es sich, eine passende Launch-Datei zu starten. Die detaillierte Dokumentation beschreibt, wie du die Parameterdatei dieser Launch-Datei anpassen kannst. Für einen schnellen Einstieg sind unten mehrere Launch-Beispiele aufgeführt:

**Vier-Rad-Antrieb mit Faulhaber-Motoren**

```shell
ros2 launch edu_drive_ros2 edu_drive_faulhaber_4ch.launch
```

**Sechs-Rad-Antrieb mit Faulhaber-Motoren**

```shell
ros2 launch edu_drive_ros2 edu_drive_faulhaber_6ch.launch
```

**Vier-Rad-Antrieb mit Leison-Motoren**

```shell
ros2 launch edu_drive_ros2 edu_drive_leison_4ch.launch
```

**Sechs-Rad-Antrieb mit Leison-Motoren**

```shell
ros2 launch edu_drive_ros2 edu_drive_leison_6ch.launch
```

Für individuelle Anpassungen empfiehlt es sich, eine Launch-Datei sowie eine Parameterdatei als Vorlage zu kopieren und diese anschließend entsprechend zu modifizieren.

## Roboter steuern

Bevor du von einem entfernten Rechner aus auf den Roboter zugreifst, solltest du prüfen, ob die Kommunikation mit den gestarteten Nodes funktioniert.
Die Standardeinstellung auf dem vorkonfigurierten Raspberry-Image ist die Domain-ID **17**. Diese ID muss daher auch auf dem entfernten Rechner gesetzt werden:

```shell
export ROS_DOMAIN_ID=17
```

Am besten trägst du diese ID in die Datei `~/.bashrc` ein, damit sie bei jedem Systemstart automatisch gesetzt wird.

Mit dem Befehl

```shell
ros2 topic list
```

kannst du überprüfen, ob die Kommunikation mit dem gestarteten `edu_drive_ros2`-Node möglich ist.

Das Kinematic Kit bietet zwei Schnittstellen zur Steuerung der Motoren: eine joystickbasierte und eine auf Twist-Nachrichten basierende Steuerung. Die joystickbasierte Steuerung ist unten dargestellt:

```shell
ros2 run joy joy_node --ros-args --remap joy:=/rmrc/joy
```

Um die Möglichkeiten des Kinematic Kits weiter zu erkunden, kannst du mit den folgenden ROS-Befehlen alle verfügbaren Topics und Services anzeigen lassen:

```shell
ros2 topic list
```

```shell
ros2 service list
```

