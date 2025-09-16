/*
 Assignment: Bringing Web Pages to Life with CSS & JavaScript
 Part 2 & 3: Functions, Scope, Parameters, Return Values + Animation Control
*/

//  GLOBAL SCOPE: Shared across functions
let currentWeatherType = null;
const statusEl = document.getElementById('statusBar');
const scene = document.getElementById('weatherScene');
// SIMULATED API DATA (in real app, fetch from OpenWeatherMap etc.)
const weatherData = {
  "nairobi": { temp: 26, condition: "Sunny", advice: "Perfect day for a walk!" },
  "tokyo": { temp: 18, condition: "Rainy", advice: "Don’t forget your umbrella." },
  "new-york": { temp: -5, condition: "Snowy", advice: "Bundle up! It's freezing!" },
  "sydney": { temp: 30, condition: "Windy", advice: "Hold onto your hat!" },
  "oslo": { temp: 2, condition: "Cloudy", advice: "Gray skies, but no rain today." }
};

//  PART 2: JavaScript Functions — Deep Dive

/**
 * Updates the status bar with a message
 * @param {string} msg - Message to display
 * @param {string} type - 'info', 'success', 'error'
 * @returns {boolean} - Always true (for chaining)
 */
function updateStatus(msg, type = 'info') {
  const colors = {
    info: 'rgba(255,255,255,0.9)',
    success: 'rgba(46, 204, 113, 0.9)',
    error: 'rgba(231, 76, 60, 0.9)'
  };
  
  statusEl.textContent = msg;
  statusEl.style.backgroundColor = colors[type] || colors.info;
  
  // 🔹 LOCAL SCOPE: Only exists here
  console.log(`[Status]: ${msg}`);
  return true;
}

/**
 * Clears previous animations and DOM elements from scene
 */
function clearScene() {
  scene.className = ''; // Remove all classes
  scene.innerHTML = ''; // Remove rain/snow/wind elements
}

/**
 * Generates multiple animated elements (raindrops, snowflakes, wind lines)
 * @param {string} elementType - 'raindrop', 'snowflake', 'wind-line'
 * @param {number} count - How many to create
 * @param {Object} styleConfig - Custom styles
 */
function createAnimatedElements(elementType, count, styleConfig = {}) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.classList.add(elementType);

    // Random positioning
    el.style.left = Math.random() * 100 + '%';
    
    if (styleConfig.delay) {
      el.style.animationDelay = (Math.random() * styleConfig.delay) + 's';
    }
    if (styleConfig.duration) {
      el.style.animationDuration = styleConfig.duration;
    }
    if (styleConfig.extraClass) {
      el.classList.add(styleConfig.extraClass);
    }

    scene.appendChild(el);
  }
}

/**
 * Main animation controller
 * @param {string} type - Weather type: sunny, rainy, etc.
 * @param {Object} data - Temperature, advice, etc.
 */
function showWeatherAnimation(type, data) {
  clearScene();
  
  const card = document.getElementById('weatherCard');
  document.getElementById('cityName').textContent = document.getElementById('citySelect').selectedOptions[0].text;
  document.getElementById('tempValue').textContent = `${data.temp}°C`;
  document.getElementById('condition').textContent = data.condition;
  document.getElementById('advice').textContent = data.advice;

  // Apply animation class
  card.classList.remove('visible');
  setTimeout(() => {
    card.classList.add('visible');
  }, 50);

  // 🔹 Add specific animation class to trigger CSS
  scene.classList.add(`animate-${type}`);

  // Create dynamic elements based on weather
  switch(type) {
    case 'sunny':
      scene.insertAdjacentHTML('beforeend', '<div class="sun-rays"></div>');
      break;
      
    case 'rainy':
      createAnimatedElements('raindrop', 40, { delay: 2 });
      break;
      
    case 'snowy':
      createAnimatedElements('snowflake', 25, { 
        delay: 5, 
        extraClass: 'material-symbols-outlined' 
      });
      // Inject icon font for snowflakes (❄)
      if (!document.querySelector('#icon-font')) {
        const link = document.createElement('link');
        link.id = 'icon-font';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
        document.head.appendChild(link);
      }
      break;
      
    case 'cloudy':
      const cloud = document.createElement('div');
      cloud.classList.add('cloud');
      scene.appendChild(cloud);
      break;
      
    case 'windy':
      createAnimatedElements('wind-line', 3, { duration: '2.5s' });
      break;
  }

  currentWeatherType = type;
  updateStatus(`Weather loaded: ${data.condition} in ${document.getElementById('citySelect').selectedOptions[0].text}`, 'success');
}

// ✨ PART 3: Combining CSS + JavaScript

// Fetch Button
document.getElementById('fetchBtn').addEventListener('click', () => {
  const select = document.getElementById('citySelect');
  const city = select.value;

  if (!city) {
    updateStatus("Please select a city first.", 'error');
    return;
  }

  // Disable button & show loading
  const btn = document.getElementById('fetchBtn');
  const loading = document.getElementById('loading');
  
  btn.disabled = true;
  loading.classList.remove('hidden');
  loading.classList.add('visible');
  updateStatus(`Fetching weather data for ${select.selectedOptions[0].text}...`, 'info');

  // Simulate API delay
  setTimeout(() => {
    const data = weatherData[city];
    let type = city === 'nairobi' ? 'sunny' :
               city === 'tokyo' ? 'rainy' :
               city === 'new-york' ? 'snowy' :
               city === 'sydney' ? 'windy' : 'cloudy';

    showWeatherAnimation(type, data);

    // Re-enable
    btn.disabled = false;
    loading.classList.remove('visible');
    setTimeout(() => loading.classList.add('hidden'), 600);
    
    document.getElementById('weatherCard').classList.remove('hidden');
  }, 1800);
});

// Close Button
document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('weatherCard').classList.remove('visible');
  setTimeout(() => {
    document.getElementById('weatherCard').classList.add('hidden');
    clearScene();
    updateStatus("Weather closed. Ready for next query.");
  }, 600);
});

// Enter key support
document.getElementById('citySelect').addEventListener('change', () => {
  if (this.value) document.getElementById('fetchBtn').focus();
});

// On Load
window.onload = () => {
  updateStatus("Dashboard ready. Select a city to begin.");
};