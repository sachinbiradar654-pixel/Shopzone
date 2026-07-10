/* ==========================================================================
   ShopZone — catalog.js
   Renders the product grid on index.html, wires up category chips,
   sort control, and search-term filtering (via ?search= or ?category=).
   ========================================================================== */

(function(){

  function getQueryParam(name){
    return new URLSearchParams(window.location.search).get(name);
  }

  function starsHtml(rating){
    const full = Math.floor(rating);
    const half = rating - full >= 0.25 && rating - full < 0.75;
    const roundedUp = rating - full >= 0.75;
    let icons = "";
    for (let i = 0; i < full + (roundedUp ? 1 : 0); i++) icons += '<i class="fa-solid fa-star"></i>';
    if (half) icons += '<i class="fa-solid fa-star-half-stroke"></i>';
    const shown = full + (roundedUp ? 1 : 0) + (half ? 1 : 0);
    for (let i = shown; i < 5; i++) icons += '<i class="fa-regular fa-star"></i>';
    return `<span class="stars stars--sm" aria-label="${rating} out of 5 stars">${icons}</span>`;
  }

  function formatINR(n){ return '₹' + n.toLocaleString('en-IN'); }
  function discountPct(price, original){
    if (!original || original <= price) return 0;
    return Math.round(((original - price) / original) * 100);
  }

  const CATEGORIES = ["All", "Electronics", "Computers", "Mobiles", "Fashion", "Home & Kitchen", "Books", "Toys"];

  let activeCategory = getQueryParam('category') || "All";
  if (!CATEGORIES.includes(activeCategory)) activeCategory = "All";
  let searchTerm = getQueryParam('search') || "";
  let sortMode = "featured";

  const grid = document.getElementById('productGrid');
  const chipsWrap = document.getElementById('categoryChips');
  const resultsCount = document.getElementById('resultsCount');
  const searchBanner = document.getElementById('searchBanner');
  const sortSelect = document.getElementById('sortSelect');
  const emptyState = document.getElementById('emptyState');

  /* -------------------- Category chips -------------------- */
  chipsWrap.innerHTML = CATEGORIES.map(c =>
    `<button class="chip ${c === activeCategory ? 'is-active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');

  chipsWrap.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeCategory = chip.getAttribute('data-cat');
      chipsWrap.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      render();
    });
  });

  if (sortSelect){
    sortSelect.addEventListener('change', () => { sortMode = sortSelect.value; render(); });
  }

  if (searchTerm){
    searchBanner.innerHTML = `Showing results for <strong>"${searchTerm}"</strong> — <button id="clearSearch" class="link-btn">Clear search</button>`;
    searchBanner.classList.add('is-visible');
  }

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'clearSearch'){
      searchTerm = "";
      searchBanner.classList.remove('is-visible');
      searchBanner.innerHTML = "";
      render();
    }
  });

  /* -------------------- Render grid -------------------- */
  function render(){
    let list = PRODUCTS.slice();

    if (activeCategory !== "All"){
      list = list.filter(p => p.category === activeCategory);
    }
    if (searchTerm){
      const term = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }

    if (sortMode === "price-low") list.sort((a,b) => a.price - b.price);
    else if (sortMode === "price-high") list.sort((a,b) => b.price - a.price);
    else if (sortMode === "rating") list.sort((a,b) => b.rating - a.rating);

    resultsCount.textContent = `${list.length} result${list.length === 1 ? '' : 's'}`;

    if (list.length === 0){
      grid.innerHTML = "";
      emptyState.classList.add('is-visible');
      return;
    }
    emptyState.classList.remove('is-visible');

    grid.innerHTML = list.map(p => {
      const off = discountPct(p.price, p.originalPrice);
      return `
      <a class="catalog-card" href="product.html?id=${encodeURIComponent(p.id)}">
        ${p.badge ? `<span class="prime-badge">${p.badge}</span>` : ''}
        <div class="catalog-card__img-wrap"><img src="${p.images[0]}" alt="${p.name}"></div>
        <p class="catalog-card__category">${p.category}</p>
        <p class="catalog-card__name">${p.name}</p>
        ${starsHtml(p.rating)}
        <span class="catalog-card__review-count">(${p.reviewCount.toLocaleString('en-IN')})</span>
        <p class="catalog-card__price">${formatINR(p.price)} ${p.originalPrice ? `<span class="product-card__old">${formatINR(p.originalPrice)}</span>` : ''} ${off ? `<span class="product-card__off">-${off}%</span>` : ''}</p>
        <button class="btn btn--card" data-id="${p.id}" data-name="${p.name}">Add to Cart</button>
      </a>`;
    }).join('');

    grid.querySelectorAll('.btn--card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCartCount(1);
        showToast(`Added "${btn.getAttribute('data-name')}" to cart`);
      });
    });
  }

  render();

})();
