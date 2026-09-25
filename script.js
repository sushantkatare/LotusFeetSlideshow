const INTERVAL_MS = 30000;
const HIDDEN_KEY = "lotusFeetHiddenImages";

const stage = document.getElementById("stage");
const caption = document.getElementById("caption");
const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const toast = document.getElementById("toast");

function loadHidden() {
  try {
    return new Set(JSON.parse(localStorage.getItem(HIDDEN_KEY) || "[]"));
  } catch (e) {
    return new Set();
  }
}

function saveHidden(set) {
  try {
    localStorage.setItem(HIDDEN_KEY, JSON.stringify([...set]));
  } catch (e) {
    // localStorage unavailable (private browsing, disabled storage, etc.) -- hide is session-only then.
  }
}

let hidden = loadHidden();
let activeImages = LOTUS_FEET_IMAGES.filter(img => !hidden.has(img.src));
let order = shuffle(activeImages.map((_, i) => i));
let pos = 0;
let slideEls = [];
let progressStart = null;
let rafId = null;
let timer = null;
let toastTimer = null;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function makeSlide(data) {
  const div = document.createElement("div");
  div.className = "slide";
  const img = document.createElement("img");
  img.src = data.src;
  img.alt = data.title;
  img.referrerPolicy = "no-referrer";
  img.onerror = () => {
    // Hotlinked source unreachable right now -- skip past it automatically.
    div.dataset.broken = "1";
    if (div.classList.contains("active")) next();
  };
  div.appendChild(img);
  stage.appendChild(div);
  return div;
}

function setCaption(data) {
  caption.innerHTML = `
    <div class="title">${data.title}</div>
    <div class="meta">${data.artist} &middot; ${data.source} &middot; ${data.license} &middot; <a href="${data.link}" target="_blank" rel="noopener">source</a></div>
  `;
  caption.classList.add("visible");
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

function rebuildStage() {
  stage.querySelectorAll(".slide").forEach(el => el.remove());
  slideEls = [];
}

function showEmptyState() {
  caption.classList.remove("visible");
  progressBar.style.width = "0%";
}

function showIndex(orderIdx, skipsLeft = order.length) {
  if (activeImages.length === 0) {
    showEmptyState();
    return;
  }
  if (skipsLeft <= 0) return; // every remaining image failed to load; give up quietly

  const dataIdx = order[orderIdx];
  const data = activeImages[dataIdx];

  if (!slideEls[orderIdx]) {
    slideEls[orderIdx] = makeSlide(data);
  }
  const target = slideEls[orderIdx];

  if (target.dataset.broken === "1") {
    pos = (orderIdx + 1) % order.length;
    showIndex(pos, skipsLeft - 1);
    return;
  }

  stage.querySelectorAll(".slide.active").forEach(el => el.classList.remove("active"));
  target.classList.add("active");
  setCaption(data);

  // Preload the next image so its transition is instant.
  const nextOrderIdx = (orderIdx + 1) % order.length;
  if (!slideEls[nextOrderIdx]) {
    slideEls[nextOrderIdx] = makeSlide(activeImages[order[nextOrderIdx]]);
  }

  progressStart = performance.now();
}

function next() {
  if (activeImages.length === 0) return;
  pos = (pos + 1) % order.length;
  if (pos === 0) {
    // Full cycle complete -- reshuffle and rebuild the DOM so stacked <img>
    // elements don't accumulate across hours/days of continuous display.
    order = shuffle(activeImages.map((_, i) => i));
    rebuildStage();
  }
  showIndex(pos);
}

function prev() {
  if (activeImages.length === 0) return;
  pos = (pos - 1 + order.length) % order.length;
  showIndex(pos);
}

function hideCurrent() {
  if (activeImages.length === 0) return;
  const data = activeImages[order[pos]];

  hidden.add(data.src);
  saveHidden(hidden);
  showToast(`Hidden for good: "${data.title}"`);

  activeImages = LOTUS_FEET_IMAGES.filter(img => !hidden.has(img.src));
  rebuildStage();

  if (activeImages.length === 0) {
    showEmptyState();
    return;
  }

  order = shuffle(activeImages.map((_, i) => i));
  pos = 0;
  showIndex(pos);
}

function restartTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(next, INTERVAL_MS);
}

function tickProgress(now) {
  if (progressStart != null) {
    const pct = Math.min(100, ((now - progressStart) / INTERVAL_MS) * 100);
    progressBar.style.width = pct + "%";
  }
  rafId = requestAnimationFrame(tickProgress);
}

// Manual navigation jumps immediately but doesn't stop the slideshow --
// the 30s auto-advance timer simply restarts from the new image.
nextBtn.addEventListener("click", () => { next(); restartTimer(); });
prevBtn.addEventListener("click", () => { prev(); restartTimer(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideCurrent();
    restartTimer();
  }
});

if (activeImages.length === 0) {
  showEmptyState();
} else {
  showIndex(pos);
}
restartTimer();
rafId = requestAnimationFrame(tickProgress);
