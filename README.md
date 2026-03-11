# 🎸 BassLine — Free Bass Learning App

**A fully offline-capable PWA (Progressive Web App) — edit on PC, install on Android.**

---

## 📱 How to Install on Android (Samsung Galaxy)

1. Open `index.html` in a local server or host it (see below)
2. Open Chrome on your Android phone
3. Navigate to the URL
4. Tap the **"Add to Home Screen"** banner, or tap ⋮ → "Install App"
5. BassLine installs like a native app — no app store needed!

---

## 💻 How to Run Locally on PC (for editing)

### Option A — VS Code Live Server (easiest)
1. Install VS Code + "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"
3. Scan the QR code or type the IP into your Android Chrome

### Option B — Python quick server
```bash
cd bassline-app/
python -m http.server 8080
# Open: http://localhost:8080
# On Android: http://YOUR_PC_IP:8080
```

### Option C — Node.js
```bash
npx serve .
```

---

## 🎛️ Features Included

| Feature | Status |
|---------|--------|
| 🎛️ Smart Bass Tuner | ✅ Real mic + YIN pitch detection |
| 📻 Demo Mode | ✅ Simulates tuning when mic unavailable |
| 🎸 4/5/6-string + Drop D | ✅ All tuning modes |
| 📚 Skill Tree (10 nodes) | ✅ Beginner → Advanced |
| 🎵 Song Library (10 songs) | ✅ Rock, Funk, Jazz, Metal |
| 🎮 Scrolling Tab View | ✅ With playhead + note highlighting |
| 🎯 Accuracy Scoring | ✅ Live feedback system |
| 🔁 Tempo Slow-Down | ✅ 30%–200% |
| 📊 Progress Dashboard | ✅ Heatmap + Radar chart |
| 🏆 Badges & XP | ✅ Streak tracking |
| 🌙 Dark Theme | ✅ Amp-glow amber palette |

---

## 🛠️ Customization Guide

### Add Songs
In `index.html`, find `state.songs` array (~line 350) and add:
```js
{ id:'your-id', name:"Song Name", artist:"Artist", genre:"rock", diff:"med", bpm:120, icon:"🎸" }
```

### Add Tab Data
Find `SONGS_TAB` object and add entries as `[string(0-3), fret, beat_16th]`:
```js
SONGS_TAB['your-id'] = [
  [3,0,0], [3,2,2], [2,0,4], ...
]
```

### Change Colors
Edit CSS variables at the top of `<style>`:
```css
--amber: #FF8C00;     /* Main accent */
--bg: #080808;        /* Background */
--green: #39FF14;     /* In-tune / Perfect */
```

### Add Tuning Modes
In `state.tunings`, add a new entry:
```js
'5-dropb': [{note:'Eb',freq:77.78}, {note:'Bb',freq:58.27}, ...]
```

---

## 🔜 Next Steps / What to Build

- [ ] Firebase auth + cloud save
- [ ] Real MP3 backing tracks with Web Audio sync
- [ ] More tab songs (import from GuitarPro .gp5/.gpx format)
- [ ] Metronome with tap tempo
- [ ] MIDI input support
- [ ] Multiplayer challenges

---

## 📦 File Structure
```
bassline-app/
├── index.html      ← Entire app (edit this)
├── manifest.json   ← PWA install config
└── README.md       ← This file
```

All in one HTML file — no build tools, no npm, no frameworks needed.
