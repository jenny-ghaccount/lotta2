# BuchKompass

BuchKompass ist eine kleine Web-App, die auf Basis von Alter und Lieblings-Genre passende Buchempfehlungen anzeigt.

## Funktionen

- Eingabe von Alter und bevorzugtem Genre
- Ausgabe von 3 passenden Buchempfehlungen
- Button fuer die naechsten 3 Empfehlungen, falls beim ersten Block nichts dabei war
- Buchcover pro Vorschlag (automatisch ueber Open Library)
- Kauf-Link pro Buch (Thalia-Suche mit Titel und Autor)
- Responsive Darstellung fuer Desktop und Mobile

## Verwendete Technologien

- HTML
- CSS
- Vanilla JavaScript (ohne Framework)

## Projektstruktur

- index.html: Seitenaufbau, Formular und Ergebnisbereich
- styles.css: Design, Layout, Responsiveness und Animationen
- script.js: Empfehlungslogik, Cover-Lookup, Kauf-Links und Naechste-3-Flow
- PRODUKTBESCHREIBUNG.md: Zusammenfassung des Produkts in Business-Sprache

## Lokal starten

1. In das Projektverzeichnis wechseln:

	cd /workspaces/lotta2

2. Statischen Server starten:

	python3 -m http.server 5500 --bind 0.0.0.0

3. Im Browser oeffnen:

	http://localhost:5500

Hinweis: In Codespaces kann alternativ die weitergeleitete Port-URL aus dem Ports-Tab genutzt werden.

## Aktueller Stand

Die App funktioniert komplett clientseitig und benoetigt kein Backend.
Die Cover kommen aus einer externen API. Wenn kein Cover verfuegbar ist, wird ein Platzhalterbild angezeigt.