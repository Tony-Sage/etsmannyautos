// search2.js (takes care of the search functionality)
// =============================
// Pagination added: 10 results per page
// Structure: top = vars, middle = functions, end = event listeners
// =============================

/* ============================
   Top: Variable declarations
   ============================ */

import { autoParts } from "./data.js"; // ensure your data.js exports autoParts exactly as given

// Config
const PAGE_SIZE = 10; // <-- pagination: 10 results per page
const WHATSAPP_PHONE = "+237697436198"; // keep your number here or leave empty
const INSTRUCTION_MODAL_DELAY_MS = 3000; // show tip modal N ms after a search

// DOM selectors (queried once)
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".btn-primary");
// sessionStorage key to remember modal display for the current browser session
const INSTRUCTION_SHOWN_KEY = "manny_instruction_shown_session";

// Results container - create if missing (same logic as your working file)
let resultsSection = document.getElementById("results-section");
if (!resultsSection) {
  const container = document.createElement("section");
  container.id = "results-section";
  container.className = "results-section page-inner";
  const searchRow = document.querySelector(".search-row");
  if (searchRow && searchRow.parentNode) {
    searchRow.parentNode.insertBefore(container, searchRow.nextSibling);
  } else {
    document.querySelector("main")?.appendChild(container);
  }
  resultsSection = container;
}

// Modals (as before)
let detailsModal = document.getElementById("details-modal");
if (!detailsModal) {
  detailsModal = document.createElement("div");
  detailsModal.id = "details-modal";
  detailsModal.className = "modal hidden";
  detailsModal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="details-modal-title">
      <header>
        <h2 id="details-modal-title">Part details</h2>
      </header>
      <div class="modal-body"></div>
      <footer>
        <button class="modal-close">Close</button>
      </footer>
    </div>
  `;
  document.body.appendChild(detailsModal);
}

let instructionModal = document.getElementById("instruction-modal");
if (!instructionModal) {
  instructionModal = document.createElement("div");
  instructionModal.id = "instruction-modal";
  instructionModal.className = "modal hidden";
  instructionModal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="instruction-modal-title">
      <header><h2 id="instruction-modal-title">Quick tip</h2></header>
      <div class="modal-body">
        Click <strong>See Details</strong> on any result to view full compatibilities, or click <strong>Place Order</strong> to start an order on WhatsApp.
      </div>
      <footer>
        <button class="instruction-ok">Ok</button>
      </footer>
    </div>
  `;
  document.body.appendChild(instructionModal);
}

// instruction modal timeout handle
let instructionModalTimeout = null;

// App state for pagination & last results
const state = {
  lastResults: [], // full array of results from the last search (not paged)
  page: 1,
  pageSize: PAGE_SIZE
};

/* ============================
   Middle: Function definitions
   ============================ */

/* ---------- Utilities ---------- */
function normalize(str = "") {
  return String(str).toLowerCase().trim();
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatNumber(n) {
  return Number(n).toLocaleString();
}

function openModal(modalEl) {
  modalEl.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(modalEl) {
  modalEl.classList.add("hidden");
  // if no other modals open, remove page-level class
  const anyOpen = document.querySelectorAll(".modal:not(.hidden)").length > 0;
  if (!anyOpen) document.body.classList.remove("modal-open");
}

function openWhatsAppForPart(part) {
  const message = `Hello, I want to order *${part.name}* \n \n • (Part ID: ${part.id}). \n • Price: ₦${formatNumber(part.price)}. \n \n Please confirm availability and delivery options.`;
  const encoded = encodeURIComponent(message);
  const waUrl = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
  window.open(waUrl, "_blank");
}

/* ---------- Search logic ---------- */
function searchParts(query) {
  const q = normalize(query);
  if (!q) return [];

  const results = autoParts
    .map((part) => {
      let score = 0;
      const nName = normalize(part.name);
      const nCategory = normalize(part.category);
      const nDesc = normalize(part.description || "");
      const nOem = (part.oem || []).map(normalize);
      const nKeywords = (part.keywords || []).map(normalize);

      if (nName.includes(q)) score += 40;
      if (nCategory.includes(q)) score += 20;
      if (nDesc.includes(q)) score += 10;
      if (nOem.some(o => o.includes(q))) score += 30;
      if (nKeywords.some(k => k.includes(q))) score += 25;

      const qTokens = q.split(/\s+/);
      qTokens.forEach(token => {
        if (token && nName.split(/\s+/).includes(token)) score += 5;
      });

      return { part, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.part);

  return results;
}

/* ---------- Result card creation ---------- */
function formatFirstCompatibility(part) {
  const first = (part.compatibilities && part.compatibilities[0]) || null;
  if (!first) return "—";
  return `${escapeHtml(first.brand)} ${escapeHtml(first.model)} (${escapeHtml(first.years)})`;
}

function availabilityClass(avail) {
  const a = normalize(avail);
  if (a.includes("in stock")) return "avail-in-stock";
  if (a.includes("low")) return "avail-low";
  if (a.includes("out") || a.includes("unavailable")) return "avail-out";
  return "avail-unknown";
}

function createResultCard(part) {
  const card = document.createElement("article");
  card.className = "result-card";
  card.dataset.partId = String(part.id);

  card.innerHTML = `
    <div class="card-media">
      <img src="${part.image}" alt="${escapeHtml(part.name)} image" onerror="this.onerror=null;this.src='images/placeholder.png'">
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(part.name)}</h3>
      <p class="card-desc">${escapeHtml(part.description)}</p>
      <p class="card-compat"><strong>Compatibility:</strong> ${formatFirstCompatibility(part)}</p>
      <div class="card-meta">
        <span class="availability ${availabilityClass(part.availability)}">${escapeHtml(part.availability)}</span>
        <span class="price">₦${formatNumber(part.price)}</span>
      </div>
      <div class="card-actions">
        <button class="btn place-order">Place Order</button>
        <button class="btn see-details">See Details</button>
      </div>
    </div>
  `;
  return card;
}

/* ---------- Rendering & Pagination ---------- */

/**
 * clearResults: empty resultsSection
 */
function clearResults() {
  resultsSection.innerHTML = "";
}

/**
 * renderResults: Accepts an array (fullResults), sets state.lastResults,
 * and renders the current page (state.page) slice.
 */
function renderResults(fullResults) {
  // store full results for paging
  state.lastResults = Array.isArray(fullResults) ? fullResults.slice() : [];
  // clamp page within valid range
  const totalPages = Math.max(1, Math.ceil(state.lastResults.length / state.pageSize));
  if (state.page > totalPages) state.page = totalPages;
  if (state.page < 1) state.page = 1;

  clearResults();

  // header
  const header = document.createElement("div");
  header.className = "results-header";
  header.innerHTML = `<h2>Search results (${state.lastResults.length})</h2>`;
  resultsSection.appendChild(header);

  if (!state.lastResults || state.lastResults.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `<p>No parts found for your search. Try keywords, OEM number, or part category.</p>`;
    resultsSection.appendChild(noResults);

    // clear pagination area if any
    renderPaginationControls();
    return;
  }

  // compute page slice
  const start = (state.page - 1) * state.pageSize;
  const end = start + state.pageSize;
  const pageItems = state.lastResults.slice(start, end);

  // results grid
  const grid = document.createElement("div");
  grid.className = "results-grid";
  pageItems.forEach(part => {
    const card = createResultCard(part);
    grid.appendChild(card);
  });
  resultsSection.appendChild(grid);

  // render pagination controls below results
  renderPaginationControls();

  // scroll to results top for better UX after search or page change
  scrollToResultsTop();

  // show instruction modal a few seconds after presenting results — only once per browser session
  if (instructionModalTimeout) clearTimeout(instructionModalTimeout);

  const resultsExist = Array.isArray(state.lastResults) && state.lastResults.length > 0;
  const alreadyShown = sessionStorage.getItem(INSTRUCTION_SHOWN_KEY) === "true";

  if (resultsExist && !alreadyShown) {
    instructionModalTimeout = setTimeout(() => {
      openModal(instructionModal);
      try {
        sessionStorage.setItem(INSTRUCTION_SHOWN_KEY, "true");
      } catch (err) {
        console.warn("Could not persist instruction state in sessionStorage:", err);
      }
    }, INSTRUCTION_MODAL_DELAY_MS);
  }
}

/**
 * renderPaginationControls: create pagination DOM and attach event handlers (Prev/Next + numbers)
 * The controls are appended to the resultsSection (or updated if existing).
 */
function renderPaginationControls() {
  const total = state.lastResults.length;
  const pageSize = state.pageSize;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  // Remove existing pagination container if present
  const existing = resultsSection.querySelector(".pagination");
  if (existing) existing.remove();

  // If only one page, do not render controls
  if (totalPages <= 1) return;

  const pagination = document.createElement("div");
  pagination.className = "pagination";

  const nav = document.createElement("nav");
  nav.className = "pager";
  nav.setAttribute("aria-label", "Pagination");

  // Prev button
  const prev = document.createElement("button");
  prev.className = "pager-btn prev";
  prev.type = "button";
  prev.textContent = "Prev";
  prev.disabled = state.page <= 1;
  prev.addEventListener("click", () => {
    if (state.page <= 1) return;
    state.page = Math.max(1, state.page - 1);
    renderResults(state.lastResults);
  });
  nav.appendChild(prev);

  // page number buttons (compact window)
  // show a window around current page: keep up to 7 buttons (first, ..., 3 before/after, ..., last)
  const maxButtons = 7;
  let startPage = Math.max(1, state.page - 3);
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  if (startPage > 1) {
    nav.appendChild(makePageButton(1));
    if (startPage > 2) nav.appendChild(makeDots());
  }

  for (let p = startPage; p <= endPage; p++) {
    nav.appendChild(makePageButton(p));
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) nav.appendChild(makeDots());
    nav.appendChild(makePageButton(totalPages));
  }

  // Next button
  const next = document.createElement("button");
  next.className = "pager-btn next";
  next.type = "button";
  next.textContent = "Next";
  next.disabled = state.page >= totalPages;
  next.addEventListener("click", () => {
    if (state.page >= totalPages) return;
    state.page = Math.min(totalPages, state.page + 1);
    renderResults(state.lastResults);
  });
  nav.appendChild(next);

  pagination.appendChild(nav);
  resultsSection.appendChild(pagination);

  // helpers used above
  function makePageButton(p) {
    const btn = document.createElement("button");
    btn.className = `pager-num ${p === state.page ? "active" : ""}`;
    btn.type = "button";
    btn.textContent = String(p);
    btn.addEventListener("click", () => {
      if (p === state.page) return;
      state.page = p;
      renderResults(state.lastResults);
    });
    return btn;
  }

  function makeDots() {
    const span = document.createElement("span");
    span.className = "dots";
    span.textContent = "…";
    return span;
  }
}

/**
 * scrollToResultsTop: scrolls the results container into view for UX when changing page.
 */
function scrollToResultsTop() {
  // scroll the resultsSection or its first child into view
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ============================
   End: Event listeners
   ============================ */

/* Search trigger: user clicks Search button */
if (searchButton) {
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const q = searchInput?.value ?? "";
    // reset page to 1 on new search
    state.page = 1;
    const results = searchParts(q);
    renderResults(results);
  });
}

/* Live search (optional): trigger on Enter or after typing (debounced) */
let debounceTimer = null;
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      state.page = 1;
      const results = searchParts(searchInput.value);
      renderResults(results);
    }
  });

  searchInput.addEventListener("input", () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.page = 1;
      const results = searchParts(searchInput.value);
      renderResults(results);
    }, 450); // 450ms debounce for usability
  });
}

/* Global click handler for result card buttons (delegation) */
resultsSection.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".result-card");
  if (!card) return;

  const partId = Number(card.dataset.partId);
  const part = autoParts.find(p => p.id === partId);
  if (!part) return;

  if (target.matches(".place-order")) {
    openWhatsAppForPart(part);
  } else if (target.matches(".see-details")) {
    // populate and open details modal
    const body = detailsModal.querySelector(".modal-body");
    body.innerHTML = `
      <p><strong>${escapeHtml(part.name)}</strong></p>
      <p>${escapeHtml(part.description)}</p>
      <p><strong>Full compatibilities (all):</strong></p>
      <ul>
        ${part.compatibilities.map(c => `<li>${escapeHtml(c.brand)} ${escapeHtml(c.model)} — ${escapeHtml(c.years)}</li>`).join("")}
      </ul>
      <p><em>Place Order on WhatsApp to proceed.</em></p>
    `;
    openModal(detailsModal);
  }
});

/* Modal close buttons & backdrop */
document.addEventListener("click", (e) => {
  const t = e.target;
  if (t.matches(".instruction-ok")) {
    closeModal(instructionModal);
  }
  if (t.matches(".modal-close")) {
    closeModal(detailsModal);
  }
  if (t.matches(".modal-backdrop")) {
    const parent = t.parentElement;
    if (!parent) return;
    if (parent.id === "details-modal") closeModal(detailsModal);
    if (parent.id === "instruction-modal") closeModal(instructionModal);
  }
});

/* Optional: close modals with Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!detailsModal.classList.contains("hidden")) closeModal(detailsModal);
    if (!instructionModal.classList.contains("hidden")) closeModal(instructionModal);
  }
});