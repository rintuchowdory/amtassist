# AmtAssist

> **KI-Assistent für deutsche Behördenformulare** – Chrome Extension (Manifest V3)

[![CI](https://github.com/rintuchowdory/amtassist/actions/workflows/ci.yml/badge.svg)](https://github.com/rintuchowdory/amtassist/actions/workflows/ci.yml)
[![CodeQL](https://github.com/rintuchowdory/amtassist/actions/workflows/codeql.yml/badge.svg)](https://github.com/rintuchowdory/amtassist/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?logo=googlechrome&logoColor=white)

AmtAssist erkennt automatisch Felder auf deutschen Behördenwebseiten (ELSTER, Meldeamt, Ausländerbehörde, Jobcenter, Krankenversicherungsportale) und zeigt kontextuelle Erklärungen – auf Deutsch **und** Englisch.

---

## Features

| Feature | Details |
|---|---|
| 🔍 **Felderkennung** | Regex-basierter Matcher für 20+ typische Behördenfelder |
| 🌍 **Zweisprachig** | Erklärungen auf Deutsch und Englisch umschaltbar |
| 💡 **Inline-Tooltips** | Badge-Icon direkt neben jedem erkannten Feld |
| ⚡ **SPA-Support** | MutationObserver erkennt dynamisch geladene Formulare |
| 🔒 **Privacy-first** | Kein externer API-Call, alle Daten lokal via `chrome.storage` |
| 📦 **MV3** | Modernes Manifest V3 mit Service Worker (keine veraltete `background.js`) |

---

## Screenshots

> *(Extension Popup + Tooltip auf ELSTER-Seite)*

---

## Lokale Installation (Developer Mode)

```bash
# 1. Repository klonen
git clone https://github.com/rintuchowdory/amtassist.git
cd amtassist

# 2. Abhängigkeiten installieren
npm install

# 3. Extension in Chrome laden:
#    chrome://extensions → "Entwicklermodus" → "Entpackte Erweiterung laden"
#    → Diesen Ordner auswählen
```

---

## Development

```bash
npm run lint          # ESLint (flat config, ES2023)
npm test              # Jest unit tests
npm run dev           # web-ext live-reload in Firefox (für Entwicklung)
node scripts/validate-manifest.js  # MV3-Manifest prüfen
```

---

## CI/CD Pipeline

```
Push → main/develop
       │
       ├── validate job
       │     ├── npm ci
       │     ├── ESLint
       │     ├── manifest.json validation (MV3)
       │     └── Jest tests
       │
       └── package job (nach validate)
             ├── npm run build
             ├── zip (manifest + src + popup + public)
             └── Upload artifact (30 Tage)

GitHub Release → release job
                  └── Zip als Release-Asset anhängen
```

Workflows: [`.github/workflows/ci.yml`](.github/workflows/ci.yml) · [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml)

---

## Projektstruktur

```
amtassist/
├── manifest.json               # Chrome MV3 Manifest
├── popup.html / .css / .js     # Extension Popup UI
├── src/
│   ├── content.js              # Content Script (DOM Scanner + Tooltips)
│   ├── background.js           # Service Worker
│   └── fieldDictionary.js      # Felddefinitionen (20+ Felder, DE/EN)
├── public/icons/               # Extension Icons (16/32/48/128px)
├── scripts/
│   └── validate-manifest.js    # CI: MV3-Validierung
├── .github/workflows/
│   ├── ci.yml                  # Build, Lint, Test, Package
│   └── codeql.yml              # Security Scanning
├── eslint.config.js            # ESLint Flat Config (ES2023)
└── package.json
```

---

## Unterstützte Felder

| Bereich | Felder |
|---|---|
| Steuern | Steueridentifikationsnummer, Steuernummer, Werbungskosten, Anlage N/Kind |
| Persönlich | Geburtsdatum, Geburtsort, Staatsangehörigkeit, Familienstand |
| Adresse | Postleitzahl, Hausnummer |
| Beschäftigung | Bruttoeinkommen, Arbeitgeber, Beschäftigungsverhältnis |
| Einwanderung | Aufenthaltstitel, Reisepassnummer, Einreisedatum |
| Soziales | Sozialversicherungsnummer |

---

## Roadmap

- [ ] Chrome Web Store Veröffentlichung
- [ ] Firefox-Unterstützung (WebExtensions API)
- [ ] Optionale AI-Erklärungen via lokaler LLM (Ollama)
- [ ] Formular-Autofill aus gespeichertem Profil
- [ ] Mehr Felder: BaFin, Bundesagentur für Arbeit, GEZ

---

## Tech Stack

- **Vanilla JS (ES Modules)** – kein Framework, minimaler Footprint
- **Chrome Extensions Manifest V3** – Service Worker, `chrome.storage`, `scripting` API
- **ESLint 9** (flat config) + **Jest 29**
- **GitHub Actions** – CI/CD, CodeQL Security Scanning

---

## Lizenz

MIT © [Rintu Chowdory](https://github.com/rintuchowdory)
