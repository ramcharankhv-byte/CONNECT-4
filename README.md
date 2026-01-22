# 🎮 Connect 4 Game (Web Version)

A browser-based **Connect 4** game built using **HTML, CSS (Tailwind), and Vanilla JavaScript**.  
The core **game logic, win detection, turn handling, and scoring system** are fully implemented by me.

---

## 🚀 Features

- 🟥🟨 **Two-player gameplay** (Red vs Yellow)
- ⬇️ **Gravity-based disc drop logic** (no floating moves allowed)
- 🧠 **Accurate win detection**
  - Horizontal
  - Vertical
  - Diagonal (both directions)
- 🔊 **Sound effects**
  - Disc drop sound
  - Win sound
- ✨ **Smooth animations**
  - Drop animation
  - Winning pattern highlight
- 📊 **Live score tracking** for both players
- 🔁 **Restart game button**
- 🎯 **Turn indicator UI**

---

## 🛠️ Tech Stack

- **HTML** – Structure
- **Tailwind CSS** – Styling & animations
- **JavaScript (Vanilla)** – Game logic & DOM manipulation

---

## 🧩 Game Logic Overview

- Board represented using `.box` elements (7 × 6 grid → 42 cells)
- Each cell uses `data-player` attribute:
  - `"R"` → Red player  
  - `"Y"` → Yellow player  
  - `"null"` → Empty
- Turn handled using a boolean toggle (`turnR`)
- **Gravity logic** ensures a disc can only be placed if:
  - It’s on the bottom row **or**
  - The cell below is already played
- Win conditions are checked using predefined **winning combinations**
- Winning patterns are stored to avoid duplicate scoring
- Scores update dynamically without resetting the board

---

## 🔊 Sound System

A reusable `sound()` constructor is used to:

- Load audio
- Clone audio on play (prevents overlap issues)
- Handle multiple sounds simultaneously

```js
playSound = new sound("gamePlay.mp3");
winSound = new sound("gameWin.mp3");
```

---

## 🎨 Animations

- Drop animation on disc placement
- Pulsing ring animation on winning discs
- Color-based visual feedback for turns and wins

> Animation ideas were suggested earlier, but **integration and game logic were written by me**.

---

## 📁 Project Structure

```
/connect-4
│── index.html
│── style.css
│── script.js
│── gamePlay.mp3
│── gameWin.mp3
```

---

## 🔮 Future Improvements

- 🤖 **Play vs AI mode**
- 🧠 AI difficulty levels (Easy / Medium / Hard)
- 📱 Mobile responsiveness improvements
- 🧹 Code refactoring into modules
- 🏆 Match history / win statistics

---

## 📌 What This Project Demonstrates

- Strong **JavaScript fundamentals**
- DOM manipulation without frameworks
- Game state management
- Logical thinking & edge-case handling
- Clean UI behavior with real-world constraints (gravity)

---

## 🧑‍💻 Author

**RC**  
B.Tech CSE Student  
Focused on mastering **DSA, JavaScript, and Full-Stack Development**

