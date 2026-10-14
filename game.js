// =====================================================
// The Game of Emoji — Two-player 3-reel slot machine
// =====================================================

const outcomes = [
  { emoji: "😘", message: "Kiss me",                       color: "#C2185B" },
  { emoji: "🤗", message: "Hug me",                         color: "#E65100" },
  { emoji: "👋", message: "Slap me",                        color: "#BF360C" },
  { emoji: "😂", message: "Make me laugh",                  color: "#F57F17" },
  { emoji: "🙌", message: "Give me a high five",            color: "#2E7D32" },
  { emoji: "💃", message: "Dance for me",                   color: "#AD1457" },
  { emoji: "🎤", message: "Sing to me",                     color: "#C62828" },
  { emoji: "❤️", message: 'Say "I love you"',                color: "#D32F2F" },
  { emoji: "🤫", message: "Tell me a secret",               color: "#5D4037" },
  { emoji: "🍰", message: "Give me a treat",                color: "#E65100" },
  { emoji: "🎬", message: "Take me to a movie",             color: "#4527A0" },
  { emoji: "😚", message: "Kiss me on the cheeks",          color: "#C2185B" },
  { emoji: "💇", message: "Play with my hair",              color: "#6A1B9A" },
  { emoji: "🤝", message: "Hold my hand",                   color: "#00695C" },
  { emoji: "🤞", message: "Promise me something",           color: "#33691E" },
  { emoji: "🌹", message: "Ask me for a date",              color: "#B71C1C" },
  { emoji: "📸", message: "Post about me on Instagram",     color: "#01579B" },
  { emoji: "📱", message: "Give me your phone for 5 min",   color: "#283593" },
  { emoji: "💬", message: "Give me compliments",            color: "#F57F17" },
  { emoji: "🚫", message: "Block someone from my phone",    color: "#37474F" },
  { emoji: "🍳", message: "Cook for me",                    color: "#E65100" },
  { emoji: "✍️", message: "Write me a handwritten note",    color: "#4E342E" },
  { emoji: "🧳", message: "Hold my luggage",                color: "#2E7D32" },
  { emoji: "📖", message: 'Post a story saying "MISS YOU"', color: "#1565C0" },
  { emoji: "🎁", message: "Give me a gift",                 color: "#BF360C" }
];

const spinPool = outcomes.map(o => o.emoji);

// DOM
const slotEmoji1  = document.getElementById("slotEmoji1");
const slotEmoji2  = document.getElementById("slotEmoji2");
const slotEmoji3  = document.getElementById("slotEmoji3");
const slotMessage = document.getElementById("slotMessage");
const boyBtn      = document.getElementById("boyBtn");
const girlBtn     = document.getElementById("girlBtn");
const playersHint = document.getElementById("playersHint");
const turnBoy     = document.getElementById("turnBoy");
const turnGirl    = document.getElementById("turnGirl");
const turnSlider  = document.getElementById("turnSlider");
const slotLights  = document.getElementById("slotLights");
const slotHandle  = document.getElementById("slotHandle");

// State
let boyPressed = false;
let girlPressed = false;
let boyTime = 0;
let girlTime = 0;
let spinning = false;
let pressTimer = null;
let currentTurn = "boy";

const SIMULTANEOUS_WINDOW = 400;

// --- Turn selector ---
function setTurn(turn) {
  currentTurn = turn;
  turnBoy.classList.toggle("active", turn === "boy");
  turnGirl.classList.toggle("active", turn === "girl");
  turnSlider.classList.toggle("right", turn === "girl");
  playersHint.textContent = (turn === "boy" ? "👦 Boy" : "👧 Girl") + " will do the action. Both press together to spin.";
}

turnBoy.addEventListener("click", () => setTurn("boy"));
turnGirl.addEventListener("click", () => setTurn("girl"));

// --- Button press ---
function handleBoyPress() {
  if (spinning) return;
  boyPressed = true;
  boyTime = Date.now();
  boyBtn.classList.add("pressed");
  tryStartSpin();
}

function handleGirlPress() {
  if (spinning) return;
  girlPressed = true;
  girlTime = Date.now();
  girlBtn.classList.add("pressed");
  tryStartSpin();
}

function tryStartSpin() {
  if (!boyPressed || !girlPressed) {
    clearTimeout(pressTimer);
    pressTimer = setTimeout(() => {
      if (!spinning && (!boyPressed || !girlPressed)) {
        resetButtons();
        playersHint.textContent = "Almost! Both press at the same time.";
      }
    }, SIMULTANEOUS_WINDOW);
    return;
  }

  const diff = Math.abs(boyTime - girlTime);
  if (diff <= SIMULTANEOUS_WINDOW) {
    clearTimeout(pressTimer);
    startSpin();
  } else {
    resetButtons();
    playersHint.textContent = "Not quite — try pressing together again.";
  }
}

function resetButtons() {
  boyPressed = false;
  girlPressed = false;
  boyBtn.classList.remove("pressed");
  girlBtn.classList.remove("pressed");
  clearTimeout(pressTimer);
}

// --- Handle pull animation ---
function pullHandle() {
  slotHandle.classList.add("pulled");
  setTimeout(() => slotHandle.classList.remove("pulled"), 600);
}

// --- Lights blink ---
function blinkAllLights() {
  slotLights.classList.add("blink-all");
  setTimeout(() => slotLights.classList.remove("blink-all"), 1800);
}

// --- Spin ---
function startSpin() {
  spinning = true;
  playersHint.textContent = "Spinning…";
  slotMessage.innerHTML = '<span class="dots">• • •</span>';
  slotMessage.style.color = "#DCF8C6";

  pullHandle();

  const reels = [slotEmoji1, slotEmoji2, slotEmoji3];
  const finalIndex = Math.floor(Math.random() * outcomes.length);
  const finalEmoji = outcomes[finalIndex].emoji;

  const baseSpins = 22;
  let stopped = 0;

  reels.forEach((reelEl, i) => {
    let count = 0;
    const interval = 55 + i * 8;

    const spin = setInterval(() => {
      reelEl.textContent = spinPool[Math.floor(Math.random() * spinPool.length)];
      reelEl.style.animation = "none";
      void reelEl.offsetWidth;
      reelEl.style.animation = "slotSlide 0.06s ease-out";

      count++;
      if (count >= baseSpins + i * 3) {
        clearInterval(spin);
        reelEl.textContent = finalEmoji;
        reelEl.style.animation = "slotLand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        stopped++;

        if (stopped === reels.length) {
          blinkAllLights();
          setTimeout(() => showResult(finalIndex), 350);
        }
      }
    }, interval);
  });
}

function showResult(index) {
  const result = outcomes[index];
  const who = currentTurn === "boy" ? "👦 Boy" : "👧 Girl";
  const whoClass = currentTurn === "boy" ? "msg-boy" : "msg-girl";

  slotMessage.innerHTML =
    `<span class="final-who ${whoClass}">${who} must:</span> ` +
    `<span class="final-message">${result.message}</span>`;

  slotMessage.style.color = "#075E54";
  playersHint.textContent = "Press together again to play another round.";

  setTimeout(() => {
    spinning = false;
    resetButtons();
  }, 800);
}

// --- Bind press ---
function bindPress(btn, handler) {
  btn.addEventListener("mousedown", handler);
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handler();
  }, { passive: false });
}

bindPress(boyBtn, handleBoyPress);
bindPress(girlBtn, handleGirlPress);

// --- Keyboard (PC) ---
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key.toLowerCase();
  if (key === "a" && !boyPressed) handleBoyPress();
  if (key === "l" && !girlPressed) handleGirlPress();
});

document.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  if (key === "a") boyBtn.classList.remove("pressed");
  if (key === "l") girlBtn.classList.remove("pressed");
});

// Init
setTurn("boy");
