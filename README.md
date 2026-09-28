# BluerogerOrderTags

Shopware-Plugin, das die Bestellübersicht in der Administration um die zugeordneten Tags ergänzt. Zum Eingrenzen der Liste wird Shopwares vorhandener Tag-Filter verwendet.

## Funktionen

- Eine größenveränderbare, ausdrücklich nicht sortierbare Tags-Spalte in der nativen Bestellübersicht.
- Bestellungen ohne Tag zeigen einen Gedankenstrich; ein oder mehrere Tags erscheinen als Labels.
- Mehrere und lange Labels brechen innerhalb der Spalte um.
- Die Spalte kann über die Shopware-Spaltenauswahl ein- und ausgeblendet werden. Die Grid-Einstellung bleibt erhalten.
- Shopwares nativer Tag-Filter unterstützt die Auswahl einzelner und mehrerer Tags. Das Plugin fügt keinen eigenen Filter hinzu.

## Voraussetzungen

| Komponente | Unterstützter Bereich |
| --- | --- |
| Shopware | `>=6.7.9.1 <6.8.0` |
| PHP | `>=8.2` |

Die Mindestversion ist Shopware 6.7.9.1. Eine Unterstützung für 6.7.9.0 oder Shopware 6.8 wird mit Version 1 nicht zugesagt. Eine stabile 6.8-Version wird später gesondert geprüft.

## Installation

Das Plugin-Verzeichnis nach `custom/plugins/BluerogerOrderTags` kopieren oder ein freigegebenes Release-ZIP über die Shopware-Pluginverwaltung hochladen. Anschließend das Plugin in der Administration installieren und aktivieren. Über die Konsole geht das so:

```bash
bin/console plugin:refresh
bin/console plugin:install --activate BluerogerOrderTags
```

Bei einer Installation aus dem Quellcode müssen die Administration-Assets gebaut werden:

```bash
bin/build-administration.sh
```

## Nutzung

Unter **Bestellungen** zeigt die neue Spalte die Tags jeder Bestellung. Ihre Breite und Sichtbarkeit werden über die üblichen Einstellungen der Shopware-Bestellliste angepasst. Die Spalte besitzt keine Sortierfunktion. Für die Suche nach getaggten Bestellungen den vorhandenen Tag-Filter von Shopware verwenden; die Filterauswahl kann einzeln, mehrfach und wieder zurückgesetzt werden.

## Entwicklung und Qualitätssicherung

Die PHP-Werkzeuge werden aus dem versionierten Composer-Lockstand installiert:

```bash
composer install
composer qa
composer audit --locked
```

`composer qa` umfasst Composer-Validierung, PHPStan Level 8 und PHP CS Fixer im Prüfmodus. Die GitHub-Actions-Konfiguration sieht PHP 8.2 und 8.4 sowie den Shopware Extension Verifier vor. `vendor/` und andere lokale Entwicklungsdateien gehören nicht in das Release-ZIP.

## Entwicklung mit KI-Unterstützung

ChatGPT unterstützt die Projektsteuerung, Planung und Dokumentation. Codex führt innerhalb freigegebener Arbeitspakete die technische Umsetzung, Prüfungen und den getrennten technischen Review aus. Mihai legt Anforderungen und fachliche Entscheidungen fest, prüft Ergebnisse auch manuell und erteilt die Freigaben. Die Verantwortung für die Veröffentlichung bleibt bei Mihai.

## Lizenz

Dieses Plugin steht unter der [MIT-Lizenz](LICENSE).
