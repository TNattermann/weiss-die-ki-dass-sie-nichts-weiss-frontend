# ⚛️ React + TypeScript + Vite Frontend

Dies ist das **Frontend** für unser Master-Projekt. Es basiert auf einem modernen Stack bestehend aus:

- [React](https://react.dev/) – Komponentenbasiertes JavaScript-Framework
- [TypeScript](https://www.typescriptlang.org/) – Wir hassen dynamische Typisierung
- [Vite](https://vitejs.dev/) – Build-Tool
- [Tailwind CSS v4.1](https://tailwindcss.com/) – CSS-Framework

## Git-Richtlinien
- Features NIE direkt auf Master pushen
- Wir arbeiten auf Feature-Branches
  - Für neue Funktionen: feature/nameOfFeature
  - Für Defects/Bugfixes: hotfix/nameOffBug
- Für fertige Features/Defects Merge-Request erstellen
- Teammitglieder benachrichtigen => Review => Merge durch Reviewer

## Server
- Auf unserem Server läuft Debian
- Der Server wird vom SCI verwaltet (Ansprechpartner Daniel Sponheimer - daniel.sponheimer@cs.rptu.de)
- Domain: https://aalab-weiss-die-ki-dass-sie-nichts-weiss.cs.rptu.de/
- Username: masterprojekt

## Deploy
- Wenn man das Projekt mit 'npm run build' baut, dann wird der Ordner 'dist' mit allen zugehörigen Dateien erstellt
- Um zu deployen, kann das deploy.sh Skript verwendet werden
  - Um das Skript auf Windows auszuführen, wird eine Shell benötigt, die bash unterstützt, z.B. Git Bash 
- Im Skript muss der eigene Nutzername eingetragen werden (oder masterprojekt)
- Der 'dist'-Ordner wird dann auf unserem Server in /home/masterprojekt/frontend/dist hochgeladen.
- Der ngnix erwartet diesen Ordner dort und liefert die darin enthaltene index.html aus
- Das SSH-Zertifikat wird vom SCI verwaltet
```bash
./deploy.sh
```

## Infos

### 1. Abhängigkeiten installieren
```bash
npm install
src/config/config.ts     #Richtige BACKEND-URL auswählen (Für Lokal oder Production)
```

### 2. Dev-Server starten
```bash
npm run dev
```

### 3. Build für Produktion + Deploy
```bash
npm run build
./deploy.sh
```

## Newsletter
- Link zum Verwalten des Newsletters: https://lists.rptu.de/wws/info/cs-aal-zweig
- Auf unsere Seite kann man Daten zum Registrieren bei dem Newsletter eingeben. Dies leitet einen jedoch nur zu der Bestätigung auf der Seite des Newsletters weiter, da dieser keine API zum Anmelden hat
- Der Newsletter ist aktuell nur mit Standardeinstellungen eingerichtet