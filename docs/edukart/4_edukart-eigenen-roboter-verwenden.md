---
id: edukart-eigenen-roboter-verwenden
title: Eigenen Roboter verwenden
sidebar_position: 4
slug: /edukart-game/eigenen-roboter-verwenden
---

# Eigenen Roboter verwenden

Du hast bereits einen eigenen Roboter und möchtest ihn mit EdukARt steuern? Aktuell können **ROS2-Roboter über eine ROS2-Python-Bridge** eingebunden werden. Die Bridge wird auf dem Roboter installiert und verbindet die Befehle aus der App mit dessen ROS2-Schnittstellen.

## So funktioniert die Anbindung

1. **ROS2-Python-Bridge auf dem Roboter installieren:** Sie nimmt die Befehle aus EdukARt entgegen und gibt sie an die passenden ROS2-Topics deines Roboters weiter.
2. **Per WLAN verbinden:** Dein iPhone muss den Roboter über WLAN erreichen können, beispielsweise im selben WLAN oder über einen WLAN-Zugangspunkt des Roboters.
3. **ROS2-Schnittstellen abstimmen:** Die von der Bridge gesendeten Topics und Nachrichten müssen zu den Schnittstellen deines Roboters passen.

Wenn die Bridge läuft, der Roboter per WLAN erreichbar ist und die Schnittstellen zusammenpassen, sollte sich dein Roboter grundsätzlich aus EdukARt heraus steuern lassen. Wie die Bridge für deinen Roboter eingerichtet werden muss, hängt von dessen ROS2-Anbindung ab.

## Geplant: Konfiguration direkt in der App

:::info Zukünftiges Update
Im Menü **„Robot“** sollst du künftig direkt in der App festlegen können, welche ROS-Befehle wie an deinen Roboter geschickt werden. Diese frei anpassbare Konfiguration ist geplant und noch nicht verfügbar.
:::

Damit sollen sich insbesondere die Befehle für **Fahren**, **Enable / Disable** und die **Lichtsteuerung** an unterschiedliche Roboter anpassen lassen.

## Hilf bei der Unterstützung deines Roboters

Du möchtest die Entwicklung unterstützen oder deinen eigenen ROS2-Roboter einbinden? Schreib mir an [hello@sinamatic.de mit dem Betreff „Eigenen ROS2-Roboter in EdukARt integrieren“](mailto:hello@sinamatic.de?subject=Eigenen%20ROS2-Roboter%20in%20EdukARt%20integrieren).

Beschreibe kurz deinen Roboter und teile mir mit, über welche **ROS2-Topics** du folgende Funktionen steuerst:

- **Fahrbefehle:** Wie werden Bewegung und Drehung vorgegeben?
- **Enable / Disable:** Wie wird die Robotersteuerung aktiviert und deaktiviert?
- **Lichter:** Wie werden Farben und Lichteffekte gesteuert?

Hilfreich sind jeweils der Topic-Name, der Nachrichtentyp und ein Beispiel für die gesendeten Werte. Damit lässt sich besser planen, welche Einstellungen die App für deinen Roboter anbieten muss.

Wenn du stattdessen einen Roboter selbst bauen möchtest, geht es unter [Baue deinen Roboter](./3_edukart-baue-deinen-roboter.md) weiter.
