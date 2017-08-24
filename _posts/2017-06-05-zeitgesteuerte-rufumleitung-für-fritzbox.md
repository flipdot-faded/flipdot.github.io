Rufumleitung muss manuell gesetzt und gelöscht werden. Kleine schnelle und
schmutzige Lösung: Raspberry Pi + USB nach RS232 Wandler + altes Telefonmodem
zum wählen.

[![](/post_data/{{ page.url | append: 'dialer_thumb.jpg' }})][dialer]

Das Modem wird in den analogen Telefonport der Fritzbox gesteckt, Pi und Modem
mit dem Schnittstellenwandler verbunden. 

[dialer]: /post_data/{{ page.url | append: 'dialer.jpg' }}

<!-- more -->

**Material:**

- Raspberry Pi 1
- [USB nach RS232 Wandler][usb_rs232]
- Modem Elsa Microlink 56k basic

Der Pi bekommt je ein kleines Python Script zum setzen / löschen der
Rufumleitung. (Beide Scripte hier: [rufumleitung_an_aus.zip]).

Die Scipte kommen in das Userverzeichnis /pi.

mit `crontab -e` wird die cron steuerdatei zum bearbeiten geöffnet, und unten
zwei Einträge angefügt:

```
50 17 3 python /home/pi/rul-an.py
00 19 3 python /home/pi/rul-aus.py
```

Mittwochs um 17:50 wird die Rufumleitung gesetzt, und am gleichen Tag um 19:00
wieder gelöscht.

Kleines Detail:

Um einen festen Bezeichner für das USB Gerät zu erreichen, hier im Beispiel
wurde `/dev/RS232_conv` gewählt, kann man nach dieser Anleitung vorgehen.

[usb_rs232]: https://www.reichelt.de/USB-Konverter/DELOCK-61308/3/index.html?ACTION=3&GROUPID=6105&ARTICLE=180183&OFFSET=75&
[rufumleitung_an_aus.zip]: /post_data/{{ page.url | append: 'rufumleitung_an_aus.zip' }}