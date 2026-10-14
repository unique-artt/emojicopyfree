// =====================================================
// The Game of Emoji — Two-player slot machine
// =====================================================

// 25 outcomes with emoji + dare message
const outcomes = [
  { emoji: "😘", message: "Kiss me",                      color: "#FF6B9D" },
  { emoji: "🤗", message: "Hug me",                       color: "#FFB84D" },
  { emoji: "👋", message: "Slap me",                      color: "#FF8A65" },
  { emoji: "😂", message: "Make me laugh",                color: "#FFEB3B" },
  { emoji: "🙌", message: "High five",                    color: "#81C784" },
  { emoji: "💃", message: "Dance for me",                 color: "#F48FB1" },
  { emoji: "🎤", message: "Sing to me",                   color: "#FF8A80" },
  { emoji: "❤️", message: "Say I love you",               color: "#EF5350" },
  { emoji: "🤫", message: "Tell a secret",                color: "#A1887F" },
  { emoji: "🍰", message: "Your treat",                   color: "#FFB74D" },
  { emoji: "🎬", message: "Take me to a movie",           color: "#9575CD" },
  { emoji: "😚", message: "Kiss on cheeks",               color: "#F06292" },
  { emoji: "💇", message: "Play with my hair",            color: "#BA68C8" },
  { emoji: "🤝", message: "Hold hands",                   color: "#4DB6AC" },
  { emoji: "🤞", message: "Promise me something",         color: "#AED581" },
  { emoji: "🌹", message: "Ask me for a date",            color: "#E57373" },
  { emoji: "📸", message: "Post on Instagram praising me",color: "#4FC3F7" },
  { emoji: "📱", message: "Give phone password for 5 min",color: "#7986CB" },
  { emoji: "💬", message: "Give me compliments",          color: "#FFD54F" },
  { emoji: "🚫", message: "Block someone from my phone",  color: "#90A4AE" },
  { emoji: "🍳", message: "Cook for me",                  color: "#FFB84D" },
  { emoji: "✍️", message: "Write a handwritten note for me", color: "#A1887F" },
  { emoji: "🧳", message: "Hold my luggage",              color: "#81C784" },
  { emoji: "📖", message: 'Post story saying "MISS YOU"', color: "#64B5F6" },
  { emoji: "🎁", message: "Give a gift",                  color: "#FF8A65" }
];

const spinPool = outcomes.map(o => o.emoji);

// DOM
const slotEmoji     = document.getElementById("slotEmoji");
const slotMessage   = document.getElementById("slotMessage");
const boyBtn        = document.getElementById("boyBtn");
const girlBtn       = document.getElementById("girlBtn");
const playersHint   = document.getElementById("playersHint");
const turnToggle    = document.getElementById("turnToggle");
const turnSlider    = document.getElementById("turnSlider");
const turnBoy       = document.getElementById("turnBoy");
const turnGirl      = document.getElementById("turnGirl");

// State
let boyPressed = false;
let girlPressed = false;
let boyTime = 0;
let girlTime = 0;
let spinning = false;
let pressTimer = null;
let currentTurn = "boy"; // "boy" or "girl"

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

// --- Button press handlers ---
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

// --- Spin animation ---
function startSpin() {
  spinning = true;
  playersHint.textContent = "Spinning…";
  slotMessage.innerHTML = '<span class="dots">• • •</span>';
  slotMessage.style.color = "#DCF8C6";

  let count = 0;
  const totalSpins = 25;
  const interval = 60;
  const finalIndex = Math.floor(Math.random() * outcomes.length);

  const spinInterval = setInterval(() => {
    slotEmoji.textContent = spinPool[Math.floor(Math.random() * spinPool.length)];
    slotEmoji.style.animation = "none";
    void slotEmoji.offsetWidth;
    slotEmoji.style.animation = "slotSlide 0.06s ease-out";

    count++;
    if (count >= totalSpins) {
      clearInterval(spinInterval);
      landOn(finalIndex);
    }
  }, interval);
}

function landOn(index) {
  const result = outcomes[index];
  slotEmoji.textContent = result.emoji;
  slotEmoji.style.animation = "slotLand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";

  const who = currentTurn === "boy" ? "👦 Boy" : "👧 Girl";
  const whoClass = currentTurn === "boy" ? "msg-boy" : "msg-girl";

  slotMessage.innerHTML =
    `<span class="final-who ${whoClass}">${who} must:</span> ` +
    `<span class="final-message" style="color:${result.color}">${result.message}</span>`;

  playersHint.textContent = "Press together again to play another round.";

  setTimeout(() => {
    spinning = false;
    resetButtons();
  }, 800);
}

// --- Bind press handlers (mouse + touch) ---
function bindPress(btn, handler) {
  btn.addEventListener("mousedown", handler);
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handler();
  }, { passive: false });
}

bindPress(boyBtn, handleBoyPress);
bindPress(girlBtn, handleGirlPress);

// --- Keyboard support for PC ---
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key.toLowerCase();
  if (key === "a") {
    if (!boyPressed) handleBoyPress();
  }
  if (key === "l") {
    if (!girlPressed) handleGirlPress();
  }
});

document.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  if (key === "a") boyBtn.classList.remove("pressed");
  if (key === "l") girlBtn.classList.remove("pressed");
});

// Initialize turn state
setTurn("boy");
