# Weather Animator — Project Overview & Guide

## 🌦️ What is Weather Animator?

**Weather Animator** is an interactive web application that visually demonstrates how CSS3 transitions and animations can be combined with JavaScript to create dynamic, real-world user experiences. The app simulates fetching weather data for different cities and animates the weather conditions (sunny, rainy, snowy, cloudy, windy) using custom CSS and JavaScript DOM manipulation.

---

## 🗂️ Project Structure

```
/
├── index.html        # Main HTML structure
├── styles.css        # All CSS styles and animations
└── script.js         # JavaScript logic for interactivity and animation control
```

---

## 🚀 How Does It Work?

1. **User Interface:**
   - The user selects a city from a dropdown menu.
   - Clicks the "Get Weather" button to fetch the weather.

2. **Simulated Data Fetch:**
   - The app simulates an API call (with a loading spinner) and retrieves weather data from a predefined JavaScript object.

3. **Dynamic Animation:**
   - Based on the selected city, the app determines the weather type (sunny, rainy, snowy, windy, or cloudy).
   - The background and animated elements (like sun rays, raindrops, snowflakes, clouds, or wind lines) are dynamically generated and displayed using CSS animations.

4. **Weather Card:**
   - Shows the city name, temperature, condition, and a friendly advice message.
   - The card can be closed, which resets the animation and status.

5. **Status Bar:**
   - Provides real-time feedback and status updates to the user.

---

## 🛠️ How to Use the Project

1. **Open `index.html` in your browser.**
2. **Select a city** from the dropdown menu.
3. **Click "Get Weather".**
   - A loading spinner appears, simulating data fetching.
   - After a short delay, the weather card animates in with the correct weather visuals and data.
4. **View the animated weather scene** and read the advice.
5. **Click the close button (×)** to hide the card and reset the dashboard.
6. **Repeat** for different cities to see all animation types.

---

## 🧑‍💻 How It Works (Technical Overview)

- **HTML (`index.html`):**
  - Contains the UI: header, city selector, fetch button, loading spinner, weather card, and status bar.
- **CSS (`styles.css`):**
  - Defines the layout, color scheme, and all weather animations (sun, rain, snow, clouds, wind).
  - Uses keyframes and animation classes that are toggled by JavaScript.
- **JavaScript (`script.js`):**
  - Handles user interactions (button clicks, dropdown changes).
  - Simulates fetching weather data.
  - Dynamically updates the DOM to show/hide elements and inject animated weather visuals.
  - Manages animation state and status messages.

---

## 🎨 What to Expect

- **Smooth, visually appealing weather animations** for each city.
- **Responsive UI** with real-time feedback and status updates.
- **No external dependencies** (except a Google Fonts link for snowflake icons).
- **A clear demonstration** of how to combine CSS3 animations and JavaScript for interactive, animated web apps.

---

## 📝 Customization & Extension Ideas

- Add more cities and weather types.
- Connect to a real weather API (like OpenWeatherMap).
- Enhance animations with more details (e.g., lightning, fog).
- Make the UI mobile-friendly or add dark mode.

---

## 📚 Learning Outcomes

- Understand how to trigger and control CSS animations from JavaScript.
- Practice DOM manipulation and dynamic element creation.
- Learn how to structure a small interactive web project.

---

**Enjoy exploring and learning with Weather Animator!**