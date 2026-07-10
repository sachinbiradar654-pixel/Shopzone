/* ==========================================================================
   ShopZone — product.js
   Reads ?id= from the URL, looks up the product in PRODUCTS (products-data.js),
   and renders the gallery / info / buy-box / specs / reviews / related
   sections. All interactive behaviour (gallery zoom, option pills, quantity,
   add to cart, wishlist, helpful votes, related slider) lives here too.
   ========================================================================== */

(function(){

  function getQueryParam(name){
    return new URLSearchParams(window.location.search).get(name);
  }

  function starsHtml(rating, size){
    const full = Math.floor(rating);
    const half = rating - full >= 0.25 && rating - full < 0.75;
    const roundedUp = rating - full >= 0.75;
    let icons = "";
    for (let i = 0; i < full + (roundedUp ? 1 : 0); i++) icons += '<i class="fa-solid fa-star"></i>';
    if (half) icons += '<i class="fa-solid fa-star-half-stroke"></i>';
    const shown = full + (roundedUp ? 1 : 0) + (half ? 1 : 0);
    for (let i = shown; i < 5; i++) icons += '<i class="fa-regular fa-star"></i>';
    return `<span class="stars ${size||''}" aria-label="${rating} out of 5 stars">${icons}</span>`;
  }

  function formatINR(n){
    return '₹' + n.toLocaleString('en-IN');
  }

  function discountPct(price, original){
    if (!original || original <= price) return 0;
    return Math.round(((original - price) / original) * 100);
  }

  const product = getProductById(getQueryParam('id')) || PRODUCTS[0];
  let quantity = 1;
  let stock = product.stock;
  const MAX_QTY = 10;

  /* -------------------- Page title & breadcrumb -------------------- */
  document.getElementById('pageTitle').textContent = `${product.name} | ShopZone`;
  document.getElementById('breadcrumbInner').innerHTML = `
    <a href="index.html">All Products</a> <i class="fa-solid fa-angle-right"></i>
    <a href="index.html?category=${encodeURIComponent(product.category)}">${product.category}</a> <i class="fa-solid fa-angle-right"></i>
    <span>${product.name}</span>
  `;

  /* -------------------- Gallery -------------------- */
  const images = product.images;
  const hasMultipleImages = images.length > 1;
  const thumbsHtml = hasMultipleImages ? `
    <div class="gallery__thumbs">
      <div class="gallery__thumb-track" id="thumbTrack">
        <span class="gallery__indicator" id="thumbIndicator" aria-hidden="true"></span>
        ${images.map((src, i) => `
          <button class="gallery__thumb ${i===0 ? 'is-active':''}" data-img="${src}" data-index="${i}" aria-label="View ${i+1}">
            <img src="${src}" alt="">
          </button>
        `).join('')}
      </div>
    </div>` : '';

  const galleryHtml = `
    <div class="gallery">
      ${thumbsHtml}
      <div class="gallery__main" id="galleryMain">
        ${product.badge ? `<span class="badge badge--bestseller gallery__badge"><i class="fa-solid fa-award"></i> ${product.badge}</span>` : ''}
        <button class="gallery__wishlist" id="galleryWishlist" aria-label="Add to wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
        <div class="gallery__zoom-wrap" id="zoomWrap">
          <img src="${images[0]}" alt="${product.name}" id="mainImage">
        </div>
        <p class="gallery__hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Hover image to zoom</p>
      </div>
    </div>
  `;

  /* -------------------- Product info -------------------- */
  const disc = discountPct(product.price, product.originalPrice);

  const colorsHtml = product.colors ? `
    <div class="option-group">
      <h2 class="option-group__label">Colour: <span id="selectedColor">${product.colors[0].name}</span></h2>
      <div class="swatches" id="colorSwatches">
        ${product.colors.map((c, i) => `<button class="swatch ${i===0?'is-active':''}" style="--sw:${c.hex}" data-name="${c.name}" aria-label="${c.name}"></button>`).join('')}
      </div>
    </div>` : '';

  const variantHtml = (product.variantLabel && product.variantOptions) ? `
    <div class="option-group">
      <h2 class="option-group__label">${product.variantLabel}:</h2>
      <div class="pill-group" id="variantPills">
        ${product.variantOptions.map((v, i) => `<button class="pill ${i===0?'is-active':''}" data-name="${v}">${v}</button>`).join('')}
      </div>
    </div>` : '';

  const sizeHtml = product.sizeOptions ? `
    <div class="option-group">
      <h2 class="option-group__label">Size:</h2>
      <div class="pill-group" id="sizePills">
        ${product.sizeOptions.map((v, i) => `<button class="pill ${i===0?'is-active':''}" data-name="${v}">${v}</button>`).join('')}
      </div>
    </div>` : '';

  const infoHtml = `
    <div class="product-info">
      <p class="product-info__brand">Visit the <a href="index.html?category=${encodeURIComponent(product.category)}">${product.brand}</a> Store</p>
      <h1 class="product-info__title">${product.title}</h1>

      <div class="product-info__rating">
        ${starsHtml(product.rating)}
        <a href="#reviews" class="product-info__review-count">${product.reviewCount.toLocaleString('en-IN')} ratings</a>
        ${product.badge ? `<span class="divider">|</span><span class="product-info__bestseller-tag"><i class="fa-solid fa-award"></i> ${product.badge} in ${product.category}</span>` : ''}
      </div>

      <hr class="hairline">

      <div class="price-block">
        <div class="price-block__row">
          ${disc ? `<span class="price-block__discount">-${disc}%</span>` : ''}
          <span class="price-block__current">${formatINR(product.price)}</span>
        </div>
        ${product.originalPrice ? `<p class="price-block__original">M.R.P.: <span>${formatINR(product.originalPrice)}</span></p>` : ''}
        <p class="price-block__tax">Inclusive of all taxes</p>
        <p class="price-block__emi">EMI starts at <strong>${formatINR(Math.round(product.price/12))}/month</strong>. <a href="#">EMI options available</a></p>
      </div>

      <div class="offer-box">
        <h2 class="offer-box__title"><i class="fa-solid fa-tags"></i> Available Offers</h2>
        <ul>
          <li><strong>Bank Offer:</strong> 10% instant discount up to ₹750 on ShopZone Bank Credit Card</li>
          <li><strong>No-Cost EMI:</strong> Available on orders above ₹3,000. <a href="#">Details</a></li>
          <li><strong>Coupon:</strong> Apply coupon <span class="coupon-tag">SAVE10</span> — Save extra 10%</li>
          <li><strong>Exchange Offer:</strong> Up to ₹800 off with an eligible exchange</li>
        </ul>
      </div>

      ${colorsHtml}
      ${variantHtml}
      ${sizeHtml}

      <hr class="hairline">

      <div class="about-item">
        <h2 class="about-item__title">About this item</h2>
        <ul class="about-item__list">
          ${product.about.map(line => `<li>${line}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  /* -------------------- Buy box -------------------- */
  const buyBoxHtml = `
    <aside class="buy-box" id="buyBox">
      <p class="buy-box__price">${formatINR(product.price)} <span class="buy-box__price-tax">inclusive of all taxes</span></p>

      <div class="buy-box__delivery">
        <p><i class="fa-solid fa-truck-fast"></i> <strong>FREE delivery</strong> tomorrow, 10 July.
          <a href="#" class="buy-box__details-link">Details</a>
        </p>
        <p class="buy-box__delivery-loc"><i class="fa-solid fa-location-dot"></i> Deliver to Ananya - Bengaluru 560001</p>
      </div>

      <p class="buy-box__stock" id="stockStatus"><i class="fa-solid fa-circle-check"></i> In Stock</p>

      <div class="urgency-meter" aria-hidden="true">
        <div class="urgency-meter__track"><div class="urgency-meter__fill" id="urgencyFill"></div></div>
        <p class="urgency-meter__label">Only <strong id="urgencyCount">${stock}</strong> left — order soon</p>
      </div>

      <div class="qty-row">
        <label for="qtySelect">Quantity:</label>
        <div class="qty-stepper">
          <button type="button" id="qtyMinus" aria-label="Decrease quantity">&minus;</button>
          <span id="qtyValue">1</span>
          <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <button class="btn btn--primary" id="addToCartBtn"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
      <button class="btn btn--secondary" id="buyNowBtn"><i class="fa-solid fa-bolt"></i> Buy Now</button>

      <p class="buy-box__secure"><i class="fa-solid fa-lock"></i> Secure transaction — 256-bit SSL encrypted checkout</p>

      <dl class="buy-box__meta">
        <div><dt>Ships from</dt><dd>ShopZone Fulfillment</dd></div>
        <div><dt>Sold by</dt><dd>${product.brand} Official Store</dd></div>
        <div><dt>Return policy</dt><dd>10 days replacement, no questions asked</dd></div>
        <div><dt>Warranty</dt><dd>${product.specs["Warranty"] || "1 Year Manufacturer Warranty"}</dd></div>
      </dl>

      <button class="btn btn--ghost" id="wishlistBtn"><i class="fa-regular fa-heart"></i> <span id="wishlistLabel">Add to Wish List</span></button>
      <button class="btn btn--ghost btn--ghost-alt" id="giftBtn"><i class="fa-solid fa-gift"></i> Add gift options</button>
    </aside>
  `;

  document.getElementById('productSection').innerHTML = galleryHtml + infoHtml + buyBoxHtml;

  /* -------------------- Specs table -------------------- */
  document.getElementById('specsTable').innerHTML = Object.entries(product.specs)
    .map(([k, v]) => `<div class="specs-row"><span>${k}</span><span>${v}</span></div>`).join('');

  /* -------------------- Reviews -------------------- */
  const reviews = getReviewsForProduct(product);
  const distribution = [
    { star: 5, pct: 68 }, { star: 4, pct: 18 }, { star: 3, pct: 7 }, { star: 2, pct: 4 }, { star: 1, pct: 3 }
  ];
  document.getElementById('reviewsSummary').innerHTML = `
    <div class="reviews-summary__score">
      <span class="reviews-summary__number">${product.rating}</span>
      ${starsHtml(product.rating, 'stars--lg')}
      <span class="reviews-summary__count">${product.reviewCount.toLocaleString('en-IN')} global ratings</span>
    </div>
    <div class="reviews-summary__bars">
      ${distribution.map(d => `
        <div class="rating-bar"><span>${d.star} star</span><div class="rating-bar__track"><div class="rating-bar__fill" style="width:${d.pct}%"></div></div><span>${d.pct}%</span></div>
      `).join('')}
    </div>
  `;

  document.getElementById('reviewList').innerHTML = reviews.map(r => `
    <article class="review-card">
      <div class="review-card__header">
        <img src="${r.reviewer.avatar}" alt="" class="review-card__avatar">
        <div>
          <p class="review-card__name">${r.reviewer.name}</p>
          ${starsHtml(r.rating)}
        </div>
      </div>
      <p class="review-card__title">${r.title}</p>
      <p class="review-card__meta"><span class="verified-badge"><i class="fa-solid fa-circle-check"></i> Verified Purchase</span> · Reviewed in India on ${r.date}</p>
      <p class="review-card__body">${r.body}</p>
      <div class="review-card__actions">
        <button class="helpful-btn" data-count="${r.helpfulCount}"><i class="fa-regular fa-thumbs-up"></i> Helpful (<span>${r.helpfulCount}</span>)</button>
      </div>
    </article>
  `).join('');

  /* -------------------- Related products (same category, excluding current) -------------------- */
  let related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category);
  if (related.length < 6){
    const extra = PRODUCTS.filter(p => p.id !== product.id && !related.includes(p));
    related = related.concat(extra).slice(0, 10);
  }
  document.getElementById('relatedSlider').innerHTML = related.map(p => {
    const off = discountPct(p.price, p.originalPrice);
    return `
    <a class="product-card" href="product.html?id=${encodeURIComponent(p.id)}" style="display:block;color:inherit;">
      ${p.badge ? `<span class="prime-badge">${p.badge}</span>` : ''}
      <img src="${p.images[0]}" alt="${p.name}">
      <p class="product-card__name">${p.name}</p>
      ${starsHtml(p.rating, 'stars--sm')}
      <p class="product-card__price">${formatINR(p.price)} ${p.originalPrice ? `<span class="product-card__old">${formatINR(p.originalPrice)}</span>` : ''} ${off ? `<span class="product-card__off">-${off}%</span>` : ''}</p>
      <button class="btn btn--card" data-id="${p.id}" data-name="${p.name}">Add to Cart</button>
    </a>
  `;
  }).join('');

  /* ================================================================
     Interactivity (runs after the DOM above has been injected)
     ================================================================ */

  /* Gallery thumbnails + sliding indicator */
  const thumbs = Array.from(document.querySelectorAll('.gallery__thumb'));
  const mainImage = document.getElementById('mainImage');
  const thumbIndicator = document.getElementById('thumbIndicator');
  const thumbTrack = document.getElementById('thumbTrack');

  function moveIndicatorTo(thumbEl){
    if (!thumbIndicator || !thumbTrack) return;
    if (window.innerWidth <= 980) return;
    const trackRect = thumbTrack.getBoundingClientRect();
    const thumbRect = thumbEl.getBoundingClientRect();
    const offset = (thumbRect.top - trackRect.top) - 2;
    thumbIndicator.style.transform = `translateY(${offset}px)`;
  }

  mainImage.style.transition = 'opacity .18s ease, transform .35s ease';
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
      const newSrc = thumb.getAttribute('data-img');
      mainImage.style.opacity = '0';
      setTimeout(() => { mainImage.setAttribute('src', newSrc); mainImage.style.opacity = '1'; }, 120);
      moveIndicatorTo(thumb);
    });
  });
  window.addEventListener('load', () => {
    const active = document.querySelector('.gallery__thumb.is-active');
    if (active) moveIndicatorTo(active);
  });
  window.addEventListener('resize', () => {
    const active = document.querySelector('.gallery__thumb.is-active');
    if (active) moveIndicatorTo(active);
  });

  /* Zoom */
  const zoomWrap = document.getElementById('zoomWrap');
  zoomWrap.addEventListener('mouseenter', () => zoomWrap.classList.add('is-zoomed'));
  zoomWrap.addEventListener('mouseleave', () => { zoomWrap.classList.remove('is-zoomed'); mainImage.style.transformOrigin = 'center center'; });
  zoomWrap.addEventListener('mousemove', (e) => {
    const rect = zoomWrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainImage.style.transformOrigin = `${x}% ${y}%`;
  });

  /* Gallery wishlist heart */
  const galleryWishlist = document.getElementById('galleryWishlist');
  galleryWishlist.addEventListener('click', () => {
    const icon = galleryWishlist.querySelector('i');
    const active = galleryWishlist.classList.toggle('is-active');
    icon.classList.toggle('fa-regular', !active);
    icon.classList.toggle('fa-solid', active);
    showToast(active ? 'Added to your Wish List' : 'Removed from your Wish List');
  });

  /* Colour swatches */
  const colorSwatches = document.getElementById('colorSwatches');
  if (colorSwatches){
    const selectedColorLabel = document.getElementById('selectedColor');
    colorSwatches.querySelectorAll('.swatch').forEach((sw) => {
      sw.addEventListener('click', () => {
        colorSwatches.querySelectorAll('.swatch').forEach(s => s.classList.remove('is-active'));
        sw.classList.add('is-active');
        selectedColorLabel.textContent = sw.getAttribute('data-name');
      });
    });
  }

  /* Variant / size pills */
  function wirePillGroup(id){
    const group = document.getElementById(id);
    if (!group) return;
    group.querySelectorAll('.pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        group.querySelectorAll('.pill').forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
      });
    });
  }
  wirePillGroup('variantPills');
  wirePillGroup('sizePills');

  /* Quantity stepper */
  const qtyValue = document.getElementById('qtyValue');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  function renderQty(){ qtyValue.textContent = quantity; }
  qtyMinus.addEventListener('click', () => { if (quantity > 1) { quantity--; renderQty(); } });
  qtyPlus.addEventListener('click', () => {
    if (quantity < MAX_QTY) { quantity++; renderQty(); }
    else showToast(`Only ${MAX_QTY} allowed per order`);
  });

  /* Urgency meter */
  const urgencyFill = document.getElementById('urgencyFill');
  const urgencyCount = document.getElementById('urgencyCount');
  const stockStatus = document.getElementById('stockStatus');
  const MAX_STOCK_DISPLAY = 20;
  function renderUrgency(){
    const pct = Math.max(4, Math.min(100, (stock / MAX_STOCK_DISPLAY) * 100));
    urgencyFill.style.width = pct + '%';
    urgencyCount.textContent = stock;
    stockStatus.classList.toggle('is-low', stock <= 5);
    if (stock <= 0) stockStatus.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Out of Stock';
  }
  requestAnimationFrame(() => setTimeout(renderUrgency, 200));

  /* Add to cart / Buy now */
  const addToCartBtn = document.getElementById('addToCartBtn');
  const buyNowBtn = document.getElementById('buyNowBtn');
  addToCartBtn.addEventListener('click', () => {
    if (stock <= 0){ showToast('This item is currently out of stock'); return; }
    const qtyToAdd = Math.min(quantity, stock);
    addToCartCount(qtyToAdd);
    stock -= qtyToAdd;
    renderUrgency();
    showToast(`Added ${qtyToAdd} item${qtyToAdd > 1 ? 's' : ''} to cart`);
    const originalHTML = addToCartBtn.innerHTML;
    addToCartBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    addToCartBtn.classList.add('is-success');
    setTimeout(() => { addToCartBtn.innerHTML = originalHTML; addToCartBtn.classList.remove('is-success'); }, 1300);
  });
  buyNowBtn.addEventListener('click', () => {
    if (stock <= 0){ showToast('This item is currently out of stock'); return; }
    buyNowBtn.disabled = true;
    const originalHTML = buyNowBtn.innerHTML;
    buyNowBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing…';
    setTimeout(() => { buyNowBtn.innerHTML = originalHTML; buyNowBtn.disabled = false; showToast('Taking you to secure checkout…'); }, 1100);
  });

  /* Wishlist / gift buttons in buy box */
  const wishlistBtn = document.getElementById('wishlistBtn');
  const wishlistLabel = document.getElementById('wishlistLabel');
  wishlistBtn.addEventListener('click', () => {
    const active = wishlistBtn.classList.toggle('is-active');
    wishlistLabel.textContent = active ? 'Added to Wish List' : 'Add to Wish List';
    const icon = wishlistBtn.querySelector('i');
    icon.classList.toggle('fa-regular', !active);
    icon.classList.toggle('fa-solid', active);
  });
  document.getElementById('giftBtn').addEventListener('click', () => showToast('Gift options added to your order'));

  /* Review helpful votes */
  document.querySelectorAll('.helpful-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-voted')) return;
      const span = btn.querySelector('span');
      span.textContent = parseInt(span.textContent, 10) + 1;
      btn.classList.add('is-voted');
    });
  });

  /* Related slider scroll + add to cart (stop link navigation on button click) */
  const slider = document.getElementById('relatedSlider');
  const sliderLeft = document.getElementById('sliderLeft');
  const sliderRight = document.getElementById('sliderRight');
  const SCROLL_AMOUNT = 440;
  sliderLeft.addEventListener('click', () => slider.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }));
  sliderRight.addEventListener('click', () => slider.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }));
  slider.querySelectorAll('.btn--card').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCartCount(1);
      showToast(`Added "${btn.getAttribute('data-name')}" to cart`);
    });
  });

})();
