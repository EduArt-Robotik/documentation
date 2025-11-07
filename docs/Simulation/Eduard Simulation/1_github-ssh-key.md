---
id: github-ssh-key
title: Github SSH Key
sidebar_position: 1
---

# Github SSH Key

Der Github SSH Key ist nötig, um Befehle wir `git clone` auszuführen. Die folgende Anleitung beschreibt, wie man auf Windows und Mac einen SSH Key erstellt und auf Github hinzufügt.

Die Anleitung setzt voraus, dass man einen Account auf [Github](https://github.com) bereits angelegt hat. Es empfiehlt sich für Studenten, die Studentenmailadresse zu verwenden, um kostenlos bessere Features zu bekommen (z. B. Privates Repo erstellen).  

## Mac 
Terminal öffnen und folgenden Befehl eingeben. Die Mailadresse aus Github verwenden!

```
ssh-keygen -t ed25519 -C "Email_Adresse_aus_GitHub_Acc@example.com"
```

SSH key kopieren mit folgendem Befehl:
```
cat ~/.ssh/id_ed25519.pub
```

- [Github Einstellungen](https://github.com/settings/keys) öffnen
- Grünen "New SSH Key"-Button rechts oben anklicken
- Titel, z.B. "MacBook Key von Benutzer"
- Aus Zwischenablage einfügen (cmd + v)
- Speichern


## Windows
- [https://git-scm.com/](https://git-scm.com/) installieren
- Powershell öffnen und folgenden Befehl eingeben. Die Mailadresse aus Github verwenden!

```
ssh-keygen -t ed25519 -C "Email_Adresse_aus_GitHub_Acc@example.com"
```

SSH key kopieren mit folgendem Befehl:
```
clip < C:/Users/DEIN_BENUTZER/.ssh/id_ed25519.pub
```

ODER 

SSH key kopieren mit folgendem Befehl:
```
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

ODER 

Im Windows Explorer den Dateipfad `~/.ssh/id_ed25519.pub` eingeben und die besagte Datei in deinem Benutzerordner suchen. Datei im Texteditor öffnen, Inhalt kopieren und weiter machen: 

- [Github Einstellungen](https://github.com/settings/keys) öffnen
- Grünen "New SSH Key"-Button rechts oben anklicken
- Titel, z.B. "Windows PC von Benutzer"
- Aus Zwischenablage einfügen (strg + v)
- Speichern

# Troubleshooting
- Key is invalid: anderen kopier Befehl verwenden 

Der Key sollte so in etwa aussehen, wenn er das nicht tut, kommt die Invalid Fehlermeldung. 
```
ssh-ed25519 AAAA1234567890ßqwertzuiopüasdfghjklyxcvbnm
EMailAdresseAusGithub@example.com
```

Wenn all das immer noch nicht geht … [Vielleicht hilft das.](https://www.apple.com/mac/) oder die [offizielle Github Anleitung](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). 


