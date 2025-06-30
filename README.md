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

## Deploy
- Wenn man das Projekt mit 'npm run build' baut, dann wird der Ordner 'dist' mit allen zugehörigen Dateien erstellt
- Um automatisch zu deployen, kann das deploy.sh Skript verwendet werden
  - Um das Skript auf Windows auszuführen, wird eine Shell benötigt, die bash unterstützt, z.B. Git Bash 
- Im Skript muss der eigene Nutzername eingetragen werden
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

### 3. Styling mit Tailwind CSS
```html
<div className="bg-blue-600 text-white rounded-xl p-4 shadow-lg"> #Style als Klasse
    Willkommen zum LLM-Visualisierer!
</div>
```

### 4. Build für Produktion
```bash
npm run build
```