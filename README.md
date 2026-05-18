# 🏏 IronBat - 2D Cricket Web Application

A probability-based 2D cricket batting game built with React + Vite.
Play as a batsman, choose your style, and time your shot using the power bar!

## 👤 Developer
- Ayesha Ali | 22i-2128

## 🎮 How to Play
1. Choose your batting style — **Aggressive** or **Defensive**
2. Watch the slider move across the power bar
3. Click to play your shot — where the slider stops determines the outcome
4. Survive 2 overs (12 balls) without losing all wickets!

## ⚡ Batting Styles

| Style | Risk | Reward |
|-------|------|--------|
| Aggressive | High wicket probability | High boundary probability |
| Defensive | Low wicket probability | Low boundary probability |

## 📊 Probability-Based Power Bar
Each outcome (0, 1, 2, 3, 4, 6, Wicket) has an assigned probability.
The power bar is divided into colored segments proportional to these probabilities.
The slider position at the moment of click determines the result — no randomness!

## 🏟️ Game Rules
- Total Overs: 2 (12 balls)
- Total Wickets: 2
- Game ends when overs finish or all wickets are lost

## ✨ Features
- 2D cricket ground layout
- Bowling animation before each shot
- Batting animation on shot played
- Live scoreboard (Runs, Wickets, Overs)
- Restart game option
- Dynamic commentary system (Bonus)

## 🛠️ Tech Stack
- React
- Vite
- JavaScript
- HTML + CSS
- Canvas / DOM rendering

## 🚀 How to Run
```bash
npm install
npm run dev
```
Then open `http://localhost:5173` in your browser.
