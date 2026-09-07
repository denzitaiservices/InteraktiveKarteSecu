# Interaktive Karte

Fertige statische Website für GitHub Pages.

## Dateien

- `index.html` – Seitenstruktur
- `style.css` – Design und responsive Darstellung
- `script.js` – Punkte, Positionen und Klick-Funktion
- `images/Karte1.jpg` – Kartenbild

## Auf GitHub Pages veröffentlichen

1. Neues GitHub Repository erstellen.
2. Den kompletten Inhalt dieses Ordners hochladen.
3. In GitHub: **Settings → Pages** öffnen.
4. Unter **Build and deployment** bei Source **Deploy from a branch** wählen.
5. Branch **main** und Ordner **/(root)** wählen.
6. **Save** klicken.

Nach kurzer Zeit ist die Seite über GitHub Pages erreichbar.

## Punkte ändern

In `script.js` findest du oben die Liste `points`.

Beispiel:

```js
{ id: 1, x: 9.3262, y: 19.6289, title: "Punkt 1" }
```

- `x`: Position von links in Prozent
- `y`: Position von oben in Prozent
- `title`: Text im Popup

Du kannst später z. B. aus `Punkt 1` auch `Kreisel Bahnhof` machen.
