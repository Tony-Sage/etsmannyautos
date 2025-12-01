function openDetailsModalForPart(partId, opts = {}) {
  const part = state.parts.find(p => String(p.id) === String(partId));
  if (!part) return;
  const panel = detailsModal.querySelector(".modal-panel");
  if (!panel) return;

  // Build the same structure you used previously but inject a compact carousel in the image slot.
  panel.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${escapeHtml(part.name)}</h2>
      <button class="modal-close" type="button" aria-label="Close product details">✕</button>
    </div>

    <div class="details-body">
      <div class="details-thumb" style="position:relative">
        <!-- carousel container (keeps same image dimensions as before) -->
        <div class="detail-carousel" style="position:relative; width:100%; max-width:100%; overflow:hidden; border-radius:8px;">
          <button class="img-prev" aria-label="Previous image" type="button"
            style="position:absolute;left:8px;top:50%;transform:translateY(-50%);z-index:3;border-radius:999px;padding:6px;border:0;background:rgba(255,255,255,0.9);cursor:pointer;">‹</button>

          <img id="detail-main-image" src="" alt="${escapeHtml(part.name)}"
               style="width:100%;height:300px;object-fit:cover;display:block;border-radius:8px" />

          <button class="img-next" aria-label="Next image" type="button"
            style="position:absolute;right:8px;top:50%;transform:translateY(-50%);z-index:3;border-radius:999px;padding:6px;border:0;background:rgba(255,255,255,0.9);cursor:pointer;">›</button>
        </div>
        <div id="image-pagination" style="margin-top:8px;font-size:0.9rem;color:var(--muted)"></div>
      </div>

      <div class="details-info">
        <h3>${escapeHtml(part.name)}</h3>
        <p style="color:var(--muted)">${escapeHtml(part.description)}</p>
        <div class="details-compat"><strong>Compatibility:</strong> ${ (part.compatibilities || []).map(c => `${escapeHtml(c.brand)} ${escapeHtml(c.model)} (${Array.isArray(c.years)?c.years.join(","):c.years})`).join("; ") }</div>
        <div class="details-pricing" style="margin-top:8px"><strong>Price range:</strong> ${estimatePriceRange(part)}</div>

        <div style="margin-top:12px">
          <label style="display:block;margin-bottom:6px"><strong>Select brand & model</strong></label>
          <div style="display:flex;gap:8px;align-items:center">
            <select class="sel-brand" aria-label="Select brand"><option value="">Select brand</option></select>
            <select class="sel-model" aria-label="Select model"><option value="">Select model</option></select>
            <select class="sel-year" aria-label="Select year" style="display:none"><option value="">Select year</option></select>
          </div>
          <div class="sel-warning" style="color:var(--muted);font-size:0.95rem;margin-top:8px"></div>
        </div>

        <div class="details-actions" style="margin-top:12px">
          <button class="btn-order" data-action="add">Add To Cart</button>
          <button class="btn-secondary" data-action="quick-order">Place Quick Order</button>
        </div>
      </div>
    </div>
  `;

  // ---------- Carousel logic (compact, non-invasive) ----------
  const mainImg = panel.querySelector("#detail-main-image");
  const prevBtn = panel.querySelector(".img-prev");
  const nextBtn = panel.querySelector(".img-next");
  const pagination = panel.querySelector("#image-pagination");

  // Normalize images to array
  let images = [];
  if (Array.isArray(part.image) && part.image.length) images = part.image.slice();
  else if (part.image) images = [part.image];
  else images = ["https://via.placeholder.com/600x400?text=No+image"];

  let imgIndex = 0;
  function refreshCarousel() {
    mainImg.src = images[imgIndex];
    pagination.textContent = `${imgIndex + 1} of ${images.length}`;
    // subtle hint for disabled
    prevBtn.disabled = imgIndex <= 0;
    nextBtn.disabled = imgIndex >= images.length - 1;
    prevBtn.style.opacity = prevBtn.disabled ? "0.45" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? "0.45" : "1";
  }

  prevBtn.addEventListener("click", ev => {
    ev.stopPropagation();
    if (imgIndex > 0) { imgIndex--; refreshCarousel(); }
  });
  nextBtn.addEventListener("click", ev => {
    ev.stopPropagation();
    if (imgIndex < images.length - 1) { imgIndex++; refreshCarousel(); }
  });

  // touch swipe (lightweight)
  let touchStartX = null;
  mainImg.addEventListener("touchstart", (e) => { if (e.touches && e.touches[0]) touchStartX = e.touches[0].clientX; });
  mainImg.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const touchEndX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : null;
    if (touchEndX === null) { touchStartX = null; return; }
    const dx = touchEndX - touchStartX;
    if (dx > 40 && imgIndex > 0) imgIndex--;
    else if (dx < -40 && imgIndex < images.length - 1) imgIndex++;
    refreshCarousel();
    touchStartX = null;
  });

  // click advances
  mainImg.addEventListener("click", () => {
    if (imgIndex < images.length - 1) { imgIndex++; refreshCarousel(); }
  });

  refreshCarousel();

  // ---------- selects & variant logic (keeps original behavior) ----------
  const variants = part.variants || [];
  const selBrand = panel.querySelector(".sel-brand");
  const selModel = panel.querySelector(".sel-model");
  const selYear = panel.querySelector(".sel-year");
  const selWarn = panel.querySelector(".sel-warning");

  const brands = unique(variants.map(v => v.brand)).filter(Boolean).sort();
  const modelsByBrand = {};
  const yearsByKey = {};
  variants.forEach(v => {
    if (!v.brand || !v.model) return;
    if (!modelsByBrand[v.brand]) modelsByBrand[v.brand] = new Set();
    modelsByBrand[v.brand].add(v.model);
    const key = `${v.brand}___${v.model}`;
    if (!yearsByKey[key]) yearsByKey[key] = new Set();
    yearsByKey[key].add(v.year);
  });
  Object.keys(modelsByBrand).forEach(b => modelsByBrand[b] = Array.from(modelsByBrand[b]).sort());
  Object.keys(yearsByKey).forEach(k => yearsByKey[k] = Array.from(yearsByKey[k]).sort((a,b)=>a-b));

  brands.forEach(b => selBrand.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`));

  function populateModels(brand) {
    selModel.innerHTML = `<option value="">Select model</option>`;
    selYear.style.display = "none";
    if (!brand) return;
    (modelsByBrand[brand]||[]).forEach(m => selModel.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`));
  }
  function populateYears(brand, model) {
    selYear.innerHTML = `<option value="">Select year</option>`;
    if (!brand || !model) { selYear.style.display = "none"; return; }
    const key = `${brand}___${model}`;
    (yearsByKey[key]||[]).forEach(y => selYear.insertAdjacentHTML("beforeend", `<option value="${String(y)}">${String(y)}</option>`));
    selYear.style.display = "inline-block";
  }

  // auto-deductions (same helpers you already have)
  const autoBrand = deduceBrandFromFiltersAndPart(part);
  const autoModel = deduceModelFromFiltersAndPart(part, autoBrand);
  const autoYear = deduceYearFromFiltersAndPart(part, autoBrand, autoModel);

  if (autoBrand) { selBrand.value = autoBrand; populateModels(autoBrand); } else populateModels("");
  if (autoModel) { selModel.value = autoModel; populateYears(selBrand.value, selModel.value); }
  if (autoYear) { selYear.value = String(autoYear); }

  selBrand.addEventListener("change", () => { populateModels(selBrand.value); selWarn.textContent = ""; });
  selModel.addEventListener("change", () => { populateYears(selBrand.value, selModel.value); selWarn.textContent = ""; });

  // ---------- action buttons ----------
  panel.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const brand = selBrand.value || deduceBrandFromFiltersAndPart(part);
      const model = selModel.value || deduceModelFromFiltersAndPart(part, brand);
      const year = (selYear.style.display !== "none" && selYear.value) ? selYear.value : deduceYearFromFiltersAndPart(part, brand, model);

      if (!brand || !model || !year) {
        selWarn.textContent = "Please select brand, model and year (or narrow filters first).";
        return;
      }

      const chosen = variants.find(v => String(v.brand) === String(brand) && String(v.model) === String(model) && String(v.year) === String(year));
      if (!chosen) { selWarn.textContent = "Variant not available for this selection."; return; }

      if (action === "add") openConfirmationModal({ part, variant: chosen, action: "add" });
      else if (action === "quick-order") openConfirmationModal({ part, variant: chosen, action: "quick-order" });
    });
  });

  // finally open modal (keeps your modal class styling)
  openModal(detailsModal);
}