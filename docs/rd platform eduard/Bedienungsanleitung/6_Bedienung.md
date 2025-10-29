---
sidebar_position: 7
---

# Bedienung

:::info
Um die Plattform sinnvoll benutzen zu können, bietet es sich an, einen Laptop oder 
PC, auf dem ein Ubuntu-Betriebssystem in der Version 16.04 LTS oder höher instal-
liert ist, zu verwenden. Zudem benötigt man zum manuellen Steuern im Ausliefe-
rungszustand den virtuellen Joystick (Kapitel 7.3.6).  
:::

## Laden / Spannungsversorgung

:::info
Laden Sie den Akkumulator…  

- des Roboters nur mit dem mitgelieferten 30 V DC Netzteil.  
- nur innerhalb der Systemgrenzen.  
- nur unter Aufsicht.  
- nicht außerhalb des Roboters.  
:::

Die für das Laden vorgesehene Rundbuchse ist im hinteren Bereich der Deckplatte angebracht (vgl. 
Kapitel 5). Während des Ladevorgangs ist ein Arbeiten mit dem Rechner der Plattform möglich. Auch 
die Auswertung der Sensordaten auf den Platinen ist gemeinsam mit dem Bedienen der Beleuchtung 
durchführbar. Nicht möglich ist das Betreiben der Antriebe!  

Das Anstecken des Ladekabels hat ein Wegfall der Freigabe für die H-Brücken zufolge. Diese Freigabe 
muss manuell neu gesendet werden, um den Roboter betreiben zu können. Dazu starten Sie bei einem 
autonomen Betrieb Ihren Knoten neu oder senden im manuellen Betrieb die Freigabe z.B. durch Betä-
tigung der Taste **„e“** bei Verwendung des virtuellen Joysticks (Kapitel 7.3.6).  

Der Status des Ladevorgangs wird durch die Status-LEDs, deren Funktion im 7.1.4 beschrieben wird, 
angezeigt.  

---

## Einschalten der Plattform

:::info
Versuchen Sie nicht den Roboter mehrmals ohne Zwischenladen einzuschalten, 
wenn vorher die Plattform auf Grund von Unterspannung abgeschaltet wurde.  
:::

Stellen Sie den Roboter auf das Lagergestell und stecken Sie das Ladegerät an.  

Zum Einschalten der Plattform muss der Wippschalter auf die Stellung „I“ geschaltet werden. Darauf-
hin betätigt man den Ein-Taster für ca. 1 s. Es ist zu erkennen, dass die Status-LEDs am Simatic IOT2050 
zu blinken und leuchten beginnen. Die Lichter des Roboters leuchten anfangs mit einem „pulsieren-
den“ Lichtmuster. Wenn Sie sich den Lichtern mit der Hand nähern, erkennen Sie an den kleinen LEDs, 
dass die Time-of-Flight-Sensoren den Messvorgang begonnen haben.  

---

## Netzwerkverbindung

Am komfortabelsten ist es, sich mit dem Roboter über W-LAN zu verbinden. Nutzen Sie hierzu beispiel-
weise einen kleinen Router, der als „Access Point“ konfiguriert ist. Wenn Sie diesen beim Kauf direkt 
mitbestellt haben, lautet der Netzwerkname beispielsweise **„Eduard_Red“** oder **„Eduard_Blue“**.  
Das Passwort wurde Ihnen beim Kauf mitgeteilt. Standardmäßig hat der Roboter dann die IP-Adresse  
**192.168.0.100**.  

Wenn Sie einen eigenen Router verwenden wollen, stellen Sie sicher, dass Sie die Verbindung durch 
ein sicheres Passwort schützen. Ansonsten kann der Roboter von außen manipuliert werden.  

Sind Sie per Standardrouter mit dem Roboter verbunden, so haben Sie keinen Zugriff zum Internet.  
Wollen Sie dennoch Zugriff haben, um z.B. die Software zu aktualisieren, müssen Sie entweder den 
Router neu konfigurieren und in Ihr Hausnetz einbinden oder den Roboter direkt per LAN-Kabel am 
Hausnetz anschließen.  

Sie erreichen ihn dann per **ssh-Verbindung**, wenn Sie die IP-Adresse kennen:  

```bash
ssh root@192.168.0.100
````

Hierbei ist `root` der Standard-Admin auf dem **IOT2050**.  
Das Passwort lautet `root`.  

Bitte beachten Sie: Bei der Passworteingabe im Terminalfenster unter Linux werden **keine Sternchen** ausgegeben.  
Geben Sie das Passwort fehlerfrei ein und drücken Sie anschließend **Enter**.  

Sie können nun im Dateisystem des IOT2050 frei navigieren, Knoten starten und Dateien verändern.  

---

## ROS Umgebung einrichten

Um über Ihren Rechner den Roboter steuern zu können, muss die **ROS-Umgebung** richtig konfiguriert sein.  
Dafür ist es notwendig, die richtige `ROS_IP` sowie `ROS_MASTER_URI` zu vergeben.  
Der Master im System ist hierbei der Roboter – auf ihm sollte man immer den `roscore` starten.  
Der Rechner muss also die IP-Adresse des Roboters kennen.  

Standardmäßig erhält der Roboter über den DHCP-Server des Routers die IP-Adresse `192.168.0.100`.  
Im Normalfall wird dem nächsten Rechner im System die Adresse `192.168.0.101` zugewiesen.  
Dies kann aber in Einzelfällen auch anders sein.  
Sie können den Router auch so konfigurieren, dass der DHCP-Server dem Rechner immer dieselbe IP-Adresse zuweist.  

Um dem Rechner die Umgebungsvariablen mitzuteilen, muss die Datei `~/.bashrc` verändert werden.  

Navigieren Sie zunächst in Ihr Home-Verzeichnis  
(automatisch durch Öffnen eines Terminals mittels des Shortcuts **Strg + T**):

```bash
cd
```

Um die Datei bearbeiten zu können, tippen Sie folgenden Befehl ein:

```bash
nano .bashrc
```
Es öffnet sich die Datei im Terminal.
Navigieren Sie nun über die Pfeiltasten bis ganz nach unten.
Die folgenden beiden Einträge erleichtern das Arbeiten mit ROS.
Ergänzen Sie diese Zeilen am Ende der Datei:

```bash
source /opt/ros/noetic/setup.bash
source ~/catkin_ws/devel/setup.bash
```

Es wurden hier die Annahmen getroffen, dass Sie ROS in der Version Noetic verwenden
und Ihr Catkin-Workspace im Home-Verzeichnis mit dem Namen catkin_ws liegt.
Falls dies bei Ihnen nicht der Fall ist, ändern Sie die beiden Zeilen entsprechend ab.
Tragen Sie nun die für die Kommunikation relevanten Umgebungsvariablen ein:
```bash

export ROS_MASTER_URI=http://192.168.0.100:11311
export ROS_IP=192.168.0.101
```

Wichtig ist hierbei, dass bei ROS_MASTER_URI die IP-Adresse des IOT2050 steht.
Haben Sie hier eine andere Adresse vergeben oder sind Sie per LAN-Kabel über den Port P2 verbunden,
so ist diese entsprechend anders (vgl. Kapitel 6.3).
Falls Sie sich nicht sicher sind, welche IP-Adresse Ihr Rechner besitzt, geben Sie folgenden Befehl ein:

```bash
ip a
```

Suchen Sie in der Ausgabe nach dem Bestandteil inet 192….
Stellen Sie sicher, dass Sie mit dem richtigen W-LAN verbunden sind, falls Sie diese Art der Verbindung nutzen.

Schließen Sie die Datei ~/.bashrc mit der Tastenkombination Strg + X und bestätigen Sie das Speichern der Änderungen
durch Drücken der Taste y (für „yes“).
Durch die Enter-Taste wird nun der Name festgelegt (dieser muss .bashrc bleiben).

Das System hat die Variablen noch nicht übernommen.
Dafür müssen Sie zunächst einmal den Befehl ausführen:

```bash
source ~/.bashrc
```

(in jedem bereits geöffneten Terminal) oder alternativ alle Terminalfenster neu öffnen.

Weiter bei 6.5 auf Seite 14