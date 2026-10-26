const PRODUCTS = [
  // --- iPhone 16 Series ---
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'apple',
    price: 1299,
    originalPrice: 1399,
    discount: 7,
    rating: 4.9,
    badge: 'Flagship',
    image: 'images/iphone-16-pro-max.jpg',
    description: 'A18 Pro chip, 48MP Fusion camera, Grade-5 Titanium, and Apple Intelligence.',
    specs: ['6.9" OLED 120Hz', 'A18 Pro', '256GB Storage', '48MP 5x Zoom'],
    stock: 14
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'apple',
    price: 1099,
    originalPrice: 1199,
    discount: 8,
    rating: 4.9,
    badge: 'Hot Deal',
    image: 'images/iphone-16-pro.jpg',
    description: 'Triple camera system, Camera Control button, Grade 5 Titanium, and all-day battery.',
    specs: ['6.3" ProMotion', 'A18 Pro', '128GB Storage', '48MP Triple Cam'],
    stock: 18
  },
  {
    id: 3,
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'apple',
    price: 829,
    originalPrice: 899,
    discount: 8,
    rating: 4.8,
    badge: 'New Arrival',
    image: 'images/iphone-16.jpg',
    description: 'Next-gen dual camera with Camera Control, Action button, and A18 chip.',
    specs: ['6.1" OLED', 'A18 Chip', '128GB Storage', '48MP Fusion'],
    stock: 22
  },

  // --- iPhone 15 Series ---
  {
    id: 4,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'apple',
    price: 1049,
    originalPrice: 1199,
    discount: 13,
    rating: 4.9,
    badge: 'Top Pick',
    image: 'images/iphone-15-pro-max.jpg',
    description: 'Lightweight titanium design, 5x optical telephoto camera, and A17 Pro speed.',
    specs: ['6.7" OLED 120Hz', 'A17 Pro', '256GB Storage', '48MP 5x Zoom'],
    stock: 12
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'apple',
    price: 899,
    originalPrice: 999,
    discount: 10,
    rating: 4.8,
    badge: 'Popular',
    image: 'images/iphone-15-pro.jpg',
    description: 'Aerospace-grade titanium, Action button, and console-quality gaming performance.',
    specs: ['6.1" OLED 120Hz', 'A17 Pro', '128GB Storage', '48MP Main'],
    stock: 16
  },
  {
    id: 6,
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'apple',
    price: 699,
    originalPrice: 799,
    discount: 13,
    rating: 4.8,
    badge: 'Best Value',
    image: 'images/iphone-15.jpg',
    description: 'Dynamic Island, 48MP main camera, color-infused back glass, and USB-C.',
    specs: ['6.1" Super Retina', 'A16 Bionic', '128GB Storage', '48MP Cam'],
    stock: 20
  },

  // --- iPhone 14 Series ---
  {
    id: 7,
    name: 'iPhone 14 Pro Max',
    brand: 'Apple',
    category: 'apple',
    price: 799,
    originalPrice: 929,
    discount: 14,
    rating: 4.8,
    badge: 'Best Seller',
    image: 'images/iphone-14-pro.jpg',
    description: 'Dynamic Island, 48MP pro camera system, Always-On display, and long battery life.',
    specs: ['6.7" OLED 120Hz', 'A16 Bionic', '128GB Storage', '48MP Pro Cam'],
    stock: 14
  },
  {
    id: 8,
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'apple',
    price: 579,
    originalPrice: 659,
    discount: 12,
    rating: 4.7,
    badge: 'Great Deal',
    image: 'images/iphone-14.jpg',
    description: 'A15 Bionic with 5-core GPU, Photonic Engine, Crash Detection, and OLED screen.',
    specs: ['6.1" Super Retina', 'A15 Bionic', '128GB Storage', 'Dual 12MP'],
    stock: 24
  },

  // --- iPhone 13 Series ---
  {
    id: 9,
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    category: 'apple',
    price: 649,
    originalPrice: 749,
    discount: 13,
    rating: 4.8,
    badge: 'Popular',
    image: 'images/iphone-13-pro.jpg',
    description: 'ProMotion 120Hz refresh rate, Cinematic video recording, and super battery endurance.',
    specs: ['6.7" ProMotion 120Hz', 'A15 Bionic', '128GB Storage', '12MP Triple'],
    stock: 15
  },
  {
    id: 10,
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'apple',
    price: 499,
    originalPrice: 579,
    discount: 14,
    rating: 4.7,
    badge: 'Budget Pick',
    image: 'images/iphone-13.jpg',
    description: 'Super-bright Super Retina XDR OLED, Cinematic mode 1080p, and A15 performance.',
    specs: ['6.1" OLED', 'A15 Bionic', '128GB Storage', 'Dual 12MP Cam'],
    stock: 26
  },

  // --- iPhone 12 Series ---
  {
    id: 11,
    name: 'iPhone 12 Pro Max',
    brand: 'Apple',
    category: 'apple',
    price: 489,
    originalPrice: 569,
    discount: 14,
    rating: 4.6,
    badge: 'Special',
    image: 'images/iphone-12-pro-max.jpg',
    description: 'Surgical stainless steel, LiDAR scanner for AR & Night portraits, and 5G speed.',
    specs: ['6.7" Super Retina', 'A14 Bionic', '128GB Storage', 'Triple + LiDAR'],
    stock: 12
  },
  {
    id: 12,
    name: 'iPhone 12',
    brand: 'Apple',
    category: 'apple',
    price: 369,
    originalPrice: 429,
    discount: 14,
    rating: 4.6,
    badge: 'Affordable',
    image: 'images/iphone-12.jpg',
    description: 'Super Retina XDR OLED display, Ceramic Shield front, and fast 5G cellular.',
    specs: ['6.1" Super Retina', 'A14 Bionic', '128GB Storage', 'Dual 12MP Cam'],
    stock: 30
  },

  // --- Other Popular Flagships & Accessories ---
  {
    id: 13,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'samsung',
    price: 995,
    originalPrice: 1099,
    discount: 10,
    rating: 4.8,
    badge: 'New Arrival',
    image: 'images/samsung-s24.jpg',
    description: 'AI-powered performance with premium camera zoom and S Pen support.',
    specs: ['6.8" AMOLED', 'Snapdragon 8 Gen 3', '512GB', '200MP'],
    stock: 9
  },
  {
    id: 14,
    name: 'Galaxy A55 5G',
    brand: 'Samsung',
    category: 'samsung',
    price: 399,
    originalPrice: 489,
    discount: 18,
    rating: 4.5,
    badge: 'Value',
    image: 'images/samsung-a55.jpg',
    description: 'Balanced everyday performance with a bright display and strong battery.',
    specs: ['6.6" Super AMOLED', '5G', '128GB', '50MP'],
    stock: 19
  },
  {
    id: 15,
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'xiaomi',
    price: 899,
    originalPrice: 999,
    discount: 11,
    rating: 4.7,
    badge: 'Top Pick',
    image: 'images/xiaomi-14.jpg',
    description: 'Powerful flagship design with Leica-tuned optics and fast charging.',
    specs: ['6.7" LTPO', 'Snapdragon 8 Gen 3', '512GB', '50MP'],
    stock: 15
  },
  {
    id: 16,
    name: 'Foldable Pro X',
    brand: 'Foldable',
    category: 'foldable',
    price: 1299,
    originalPrice: 1499,
    discount: 15,
    rating: 4.9,
    badge: 'Premium',
    image: 'images/fold-phone.jpg',
    description: 'A large foldable display with multitasking power and thin design.',
    specs: ['7.6" Flex', '8GB RAM', '256GB', 'Dual SIM'],
    stock: 6
  },
  {
    id: 17,
    name: 'PhoneZone Charge Kit',
    brand: 'Accessory',
    category: 'accessories',
    price: 49,
    originalPrice: 69,
    discount: 29,
    rating: 4.6,
    badge: 'Bundle',
    image: 'images/charge-kit.jpg',
    description: 'Fast charger, cable, and protective case in one essential bundle.',
    specs: ['65W Fast Charge', 'USB-C', 'Case Included', '1-Year Warranty'],
    stock: 30
  },
  {
    id: 18,
    name: 'Mi Buds Pro 2',
    brand: 'Accessory',
    category: 'accessories',
    price: 69,
    originalPrice: 89,
    discount: 22,
    rating: 4.7,
    badge: 'Audio',
    image: 'images/earbuds.jpg',
    description: 'Noise cancelling earbuds with deep bass and premium comfort.',
    specs: ['ANC', '30h Battery', 'Bluetooth 5.4', 'Fast Pair'],
    stock: 22
  }
];

const state = {
  selectedCategory: 'all',
  sortBy: 'popular',
  searchQuery: '',
  cart: [],
  promoApplied: false,
  promoCode: 'PHONE10',
  activePromoCode: '',
  promoRate: 0.10,
  theme: document.documentElement.dataset.theme || 'dark',
  lang: localStorage.getItem('phonezone-lang') || 'kh'
};

function getCurrentTranslations() {
  return window.Translations?.[state.lang] || window.Translations?.kh || {};
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('phonezone-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getCurrentTranslations()[key];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = getCurrentTranslations()[key];
    if (translation) element.placeholder = translation;
  });

  document.querySelectorAll('[data-i18n-option]').forEach((element) => {
    const key = element.dataset.i18nOption;
    const translation = getCurrentTranslations()[key];
    if (translation) element.textContent = translation;
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = state.lang === 'kh' ? 'EN' : 'KH';
    langToggle.setAttribute('aria-label', state.lang === 'kh' ? 'Switch to English' : 'Switch to Khmer');
  }

  const titleEl = document.getElementById('themeToggle');
  if (titleEl) {
    titleEl.title = getCurrentTranslations().uiTheme || titleEl.title;
  }

  renderProducts();
  updateCart();
}

function formatUSD(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
}

function formatKHR(value) {
  const khr = value * 4100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KHR',
    maximumFractionDigits: 0
  }).format(khr);
}

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === Number(productId));
}

function isAnyModalOpen() {
  const prod = document.getElementById('productModalOverlay');
  const check = document.getElementById('checkoutModalOverlay');
  const succ = document.getElementById('successModalOverlay');
  const drawer = document.getElementById('cartDrawer');
  return (
    (prod && prod.style.display === 'flex') ||
    (check && check.style.display === 'flex') ||
    (succ && succ.style.display === 'flex') ||
    (drawer && drawer.classList.contains('open'))
  );
}

function updateBodyScrollLock() {
  if (isAnyModalOpen()) {
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}

function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (state.selectedCategory !== 'all') {
    filtered = filtered.filter((product) => product.category === state.selectedCategory);
  }

  if (state.searchQuery.trim()) {
    const query = state.searchQuery.trim().toLowerCase();
    filtered = filtered.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }

  switch (state.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'discount':
      filtered.sort((a, b) => b.discount - a.discount);
      break;
    default:
      filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const products = getFilteredProducts();
  const t = getCurrentTranslations();

  if (!grid || !emptyState) return;

  const countAll = document.getElementById('countAll');
  if (countAll) countAll.textContent = String(PRODUCTS.length);

  if (!products.length) {
    emptyState.style.display = 'block';
    grid.innerHTML = '';
    return;
  }

  emptyState.style.display = 'none';
  grid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-btn" type="button" aria-label="Save ${product.name}">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span class="product-brand">${product.brand}</span>
          <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-specs">
          ${product.specs.map((spec) => `<span>${spec}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price-box">
            <span class="current-price">${formatUSD(product.price)}</span>
            <span class="original-price">${formatUSD(product.originalPrice)}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-secondary btn-sm" type="button" onclick="openProductModal(${product.id})">${t.viewBtn || 'View'}</button>
            <button class="btn btn-primary btn-sm" type="button" onclick="addToCart(${product.id})">${t.addBtn || 'Add'}</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function setActiveCategory(category) {
  state.selectedCategory = category;

  document.querySelectorAll('.filter-pill').forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    if (isActive) {
      button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  renderProducts();
}

function filterByCategory(category) {
  if (window._isCategoryDragging) return;
  setActiveCategory(category);
}

// --- Modal State & Variant Configuration ---
let currentModalConfig = {
  productId: null,
  storage: null,
  color: null,
  currentPrice: 0,
  currentOriginalPrice: 0
};

function getProductVariants(product) {
  const name = product.name.toLowerCase();
  const category = product.category;

  let colors = [];
  let storages = [];

  if (category === 'apple') {
    if (name.includes('16 pro max')) {
      colors = [
        { name: 'Desert Titanium', hex: '#c5a98d', bg: 'linear-gradient(135deg, #d3b89d, #b99a7e)' },
        { name: 'Natural Titanium', hex: '#9b9893', bg: 'linear-gradient(135deg, #aba9a4, #8b8882)' },
        { name: 'White Titanium', hex: '#f0f0ed', bg: 'linear-gradient(135deg, #ffffff, #dededb)' },
        { name: 'Black Titanium', hex: '#2f3032', bg: 'linear-gradient(135deg, #3d3e42, #1f2022)' }
      ];
      storages = [
        { size: '256GB', extra: 0, tag: 'Standard' },
        { size: '512GB', extra: 150, tag: '+$150' },
        { size: '1TB', extra: 350, tag: '+$350' }
      ];
    } else if (name.includes('16 pro')) {
      colors = [
        { name: 'Desert Titanium', hex: '#c5a98d', bg: 'linear-gradient(135deg, #d3b89d, #b99a7e)' },
        { name: 'Natural Titanium', hex: '#9b9893', bg: 'linear-gradient(135deg, #aba9a4, #8b8882)' },
        { name: 'White Titanium', hex: '#f0f0ed', bg: 'linear-gradient(135deg, #ffffff, #dededb)' },
        { name: 'Black Titanium', hex: '#2f3032', bg: 'linear-gradient(135deg, #3d3e42, #1f2022)' }
      ];
      storages = [
        { size: '128GB', extra: 0, tag: 'Standard' },
        { size: '256GB', extra: 100, tag: '+$100' },
        { size: '512GB', extra: 250, tag: '+$250' },
        { size: '1TB', extra: 450, tag: '+$450' }
      ];
    } else if (name.includes('16')) {
      colors = [
        { name: 'Ultramarine', hex: '#3d528b', bg: 'linear-gradient(135deg, #4d66aa, #2d3e6c)' },
        { name: 'Teal', hex: '#779e97', bg: 'linear-gradient(135deg, #8cb5ae, #5f857e)' },
        { name: 'Pink', hex: '#eec2cb', bg: 'linear-gradient(135deg, #f5d3da, #e0aeb9)' },
        { name: 'White', hex: '#f2f2f2', bg: 'linear-gradient(135deg, #ffffff, #dedede)' },
        { name: 'Black', hex: '#2e3032', bg: 'linear-gradient(135deg, #3e4044, #1e1f20)' }
      ];
      storages = [
        { size: '128GB', extra: 0, tag: 'Standard' },
        { size: '256GB', extra: 100, tag: '+$100' },
        { size: '512GB', extra: 250, tag: '+$250' }
      ];
    } else if (name.includes('15 pro')) {
      colors = [
        { name: 'Natural Titanium', hex: '#9b9893', bg: 'linear-gradient(135deg, #aba9a4, #8b8882)' },
        { name: 'Blue Titanium', hex: '#343f51', bg: 'linear-gradient(135deg, #455269, #232c3a)' },
        { name: 'White Titanium', hex: '#f0f0ed', bg: 'linear-gradient(135deg, #ffffff, #dededb)' },
        { name: 'Black Titanium', hex: '#2f3032', bg: 'linear-gradient(135deg, #3d3e42, #1f2022)' }
      ];
      storages = [
        { size: '128GB', extra: 0, tag: 'Standard' },
        { size: '256GB', extra: 100, tag: '+$100' },
        { size: '512GB', extra: 250, tag: '+$250' },
        { size: '1TB', extra: 450, tag: '+$450' }
      ];
    } else {
      colors = [
        { name: 'Space Gray', hex: '#3b3c3e', bg: 'linear-gradient(135deg, #4b4d50, #2b2c2d)' },
        { name: 'Silver', hex: '#e2e3e5', bg: 'linear-gradient(135deg, #ffffff, #cccdcf)' },
        { name: 'Midnight', hex: '#1e2430', bg: 'linear-gradient(135deg, #2b3342, #12161f)' },
        { name: 'Starlight', hex: '#faf4ec', bg: 'linear-gradient(135deg, #ffffff, #ece2d2)' }
      ];
      storages = [
        { size: '128GB', extra: 0, tag: 'Standard' },
        { size: '256GB', extra: 80, tag: '+$80' },
        { size: '512GB', extra: 200, tag: '+$200' }
      ];
    }
  } else if (category === 'samsung') {
    colors = [
      { name: 'Titanium Gray', hex: '#7e8082', bg: 'linear-gradient(135deg, #939598, #696b6d)' },
      { name: 'Titanium Black', hex: '#2c2d2f', bg: 'linear-gradient(135deg, #3c3d40, #1c1d1e)' },
      { name: 'Titanium Violet', hex: '#534d63', bg: 'linear-gradient(135deg, #69627d, #3e384c)' },
      { name: 'Titanium Yellow', hex: '#ded0ab', bg: 'linear-gradient(135deg, #ebdfbe, #cbba93)' }
    ];
    storages = [
      { size: '256GB', extra: 0, tag: 'Standard' },
      { size: '512GB', extra: 140, tag: '+$140' },
      { size: '1TB', extra: 320, tag: '+$320' }
    ];
  } else if (category === 'xiaomi') {
    colors = [
      { name: 'Titanium Black', hex: '#212224', bg: 'linear-gradient(135deg, #313336, #141516)' },
      { name: 'Pure White', hex: '#f3f4f6', bg: 'linear-gradient(135deg, #ffffff, #dedfe2)' },
      { name: 'Olive Green', hex: '#4c5d4f', bg: 'linear-gradient(135deg, #5d7060, #3c493e)' }
    ];
    storages = [
      { size: '256GB', extra: 0, tag: 'Standard' },
      { size: '512GB', extra: 120, tag: '+$120' },
      { size: '1TB', extra: 280, tag: '+$280' }
    ];
  } else if (category === 'foldable') {
    colors = [
      { name: 'Phantom Black', hex: '#1c1c1e', bg: 'linear-gradient(135deg, #2c2c2e, #111112)' },
      { name: 'Silver Shadow', hex: '#bcc0c4', bg: 'linear-gradient(135deg, #d4d7db, #a2a6aa)' },
      { name: 'Navy Blue', hex: '#283749', bg: 'linear-gradient(135deg, #374a62, #1b2633)' }
    ];
    storages = [
      { size: '256GB', extra: 0, tag: 'Standard' },
      { size: '512GB', extra: 150, tag: '+$150' },
      { size: '1TB', extra: 350, tag: '+$350' }
    ];
  } else {
    colors = [
      { name: 'Space Black', hex: '#202124', bg: 'linear-gradient(135deg, #303134, #121314)' },
      { name: 'Pure White', hex: '#f8fafc', bg: 'linear-gradient(135deg, #ffffff, #e2e8f0)' }
    ];
    storages = [
      { size: 'Standard Edition', extra: 0, tag: 'Standard' },
      { size: 'Pro Bundle (+Cable)', extra: 15, tag: '+$15' }
    ];
  }

  return { colors, storages };
}

function selectModalColor(colorName, colorHex) {
  currentModalConfig.color = { name: colorName, hex: colorHex };

  document.querySelectorAll('.color-swatch-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.colorName === colorName);
  });

  const label = document.getElementById('modalSelectedColorName');
  if (label) label.textContent = colorName;
}

function getUpdatedProductSpecs(product, storageSize) {
  if (!product || !Array.isArray(product.specs)) return [];
  if (!storageSize) return product.specs;

  let replaced = false;
  return product.specs.map(spec => {
    if (!replaced && (/\b\d+\s*(?:GB|TB)\b/i.test(spec) || /\bStorage\b/i.test(spec))) {
      replaced = true;
      if (/Storage/i.test(spec)) {
        return `${storageSize} Storage`;
      }
      return `${storageSize}`;
    }
    return spec;
  });
}

function renderModalSpecsHTML(product, storageSize, animated = false) {
  const specs = getUpdatedProductSpecs(product, storageSize);
  return specs.map(spec => {
    const isStorage = (/\b\d+\s*(?:GB|TB)\b/i.test(spec) || /\bStorage\b/i.test(spec));
    const extraClass = isStorage ? `is-storage-spec ${animated ? 'spec-updated' : ''}` : '';
    return `<span class="${extraClass}"><i class="fa-solid fa-check"></i> ${spec}</span>`;
  }).join('');
}

function selectModalStorage(storageSize, extraPrice) {
  const product = getProductById(currentModalConfig.productId);
  if (!product) return;

  const extra = Number(extraPrice) || 0;
  currentModalConfig.storage = { size: storageSize, extra: extra };
  currentModalConfig.currentPrice = product.price + extra;
  currentModalConfig.currentOriginalPrice = (product.originalPrice || product.price) + extra;

  document.querySelectorAll('.storage-pill-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.storageSize === storageSize);
  });

  const label = document.getElementById('modalSelectedStorageName');
  if (label) label.textContent = storageSize;

  const specsEl = document.getElementById('modalProductSpecs');
  if (specsEl) {
    specsEl.innerHTML = renderModalSpecsHTML(product, storageSize, true);
  }

  const priceEl = document.getElementById('modalDynamicPrice');
  const origEl = document.getElementById('modalDynamicOriginal');
  const discountEl = document.getElementById('modalDynamicDiscount');
  const khrEl = document.getElementById('modalDynamicKhr');
  const instEl = document.getElementById('modalDynamicInstallment');

  if (priceEl) {
    priceEl.textContent = formatUSD(currentModalConfig.currentPrice);
    priceEl.classList.remove('price-bump');
    void priceEl.offsetWidth; // trigger reflow
    priceEl.classList.add('price-bump');
  }

  if (origEl) {
    origEl.textContent = formatUSD(currentModalConfig.currentOriginalPrice);
  }

  if (discountEl && currentModalConfig.currentOriginalPrice > currentModalConfig.currentPrice) {
    const discPercent = Math.round((1 - currentModalConfig.currentPrice / currentModalConfig.currentOriginalPrice) * 100);
    discountEl.textContent = `-${discPercent}%`;
  }

  if (khrEl) {
    khrEl.textContent = `≈ ${formatKHR(currentModalConfig.currentPrice)}`;
  }

  if (instEl) {
    const monthly = currentModalConfig.currentPrice / 12;
    const t = getCurrentTranslations();
    instEl.innerHTML = `<i class="fa-solid fa-credit-card"></i> ${t.orInstallment || 'ឬបង់រំលស់ត្រឹម'} <strong>${formatUSD(monthly)}/ខែ</strong> (0%)`;
  }
}

function openProductModal(productId) {
  const product = getProductById(productId);
  const modal = document.getElementById('productModalOverlay');
  const content = document.getElementById('modalProductContent');
  const t = getCurrentTranslations();

  if (!product || !modal || !content) return;

  const variants = getProductVariants(product);
  const defaultColor = variants.colors[0];
  const defaultStorage = variants.storages[0];

  currentModalConfig = {
    productId: product.id,
    color: defaultColor,
    storage: defaultStorage,
    currentPrice: product.price + defaultStorage.extra,
    currentOriginalPrice: (product.originalPrice || product.price) + defaultStorage.extra
  };

  const discountPercent = Math.round((1 - currentModalConfig.currentPrice / currentModalConfig.currentOriginalPrice) * 100);

  content.innerHTML = `
    <div class="modal-product-figure">
      <img src="${product.image}" alt="${product.name}" class="modal-product-image">
      <div class="modal-fig-badges">
        <span class="fig-badge-warranty"><i class="fa-solid fa-shield-halved"></i> ${t.officialWarranty || 'ធានាផ្លូវការ ១ ឆ្នាំ'}</span>
        <span class="fig-badge-stock"><i class="fa-solid fa-circle-check"></i> ${product.stock} ${t.inStockText || 'គ្រឿងក្នុងស្តុក'}</span>
      </div>
    </div>
    <div class="modal-product-info">
      <div class="modal-top-row">
        <span class="modal-badge">${product.badge}</span>
        <span class="modal-brand">${product.brand}</span>
      </div>
      <h3 class="modal-title">${product.name}</h3>
      <div class="modal-meta-row">
        <div class="rating-stars">
          <i class="fa-solid fa-star"></i>
          <strong>${product.rating}</strong>
          <span>(150+ ពិនិត្យ)</span>
        </div>
        <span class="meta-dot">•</span>
        <span class="stock-pill"><i class="fa-solid fa-box-check"></i> ${product.stock} ${t.inStockText || 'គ្រឿងក្នុងស្តុក'}</span>
      </div>
      <p class="modal-desc">${product.description}</p>

      <!-- Dynamic Price Calculation Box -->
      <div class="modal-price-box">
        <div class="price-primary-row">
          <span class="modal-price" id="modalDynamicPrice">${formatUSD(currentModalConfig.currentPrice)}</span>
          <span class="modal-original" id="modalDynamicOriginal">${formatUSD(currentModalConfig.currentOriginalPrice)}</span>
          <span class="modal-discount-pill" id="modalDynamicDiscount">-${discountPercent}%</span>
        </div>
        <div class="price-secondary-row">
          <span class="modal-khr-price" id="modalDynamicKhr">≈ ${formatKHR(currentModalConfig.currentPrice)}</span>
          <span class="modal-installment-hint" id="modalDynamicInstallment">
            <i class="fa-solid fa-credit-card"></i> ${t.orInstallment || 'ឬបង់រំលស់ត្រឹម'} <strong>${formatUSD(currentModalConfig.currentPrice / 12)}/ខែ</strong> (0%)
          </span>
        </div>
      </div>

      <!-- Color Selection -->
      <div class="modal-option-section">
        <div class="option-header">
          <span class="option-title"><i class="fa-solid fa-palette"></i> ${t.selectColor || 'ជ្រើសរើសពណ៌:'}</span>
          <strong class="option-selected-label" id="modalSelectedColorName">${defaultColor.name}</strong>
        </div>
        <div class="color-swatches-grid">
          ${variants.colors.map((c, i) => `
            <button type="button" class="color-swatch-btn ${i === 0 ? 'active' : ''}"
              data-color-name="${c.name}" data-color-hex="${c.hex}"
              onclick="selectModalColor('${c.name}', '${c.hex}')" title="${c.name}">
              <span class="swatch-circle" style="background: ${c.bg || c.hex};"></span>
              <span class="swatch-name">${c.name}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Storage Memory Selection with Price Calculation -->
      <div class="modal-option-section">
        <div class="option-header">
          <span class="option-title"><i class="fa-solid fa-microchip"></i> ${t.selectStorage || 'ទំហំផ្ទុក (Memory):'}</span>
          <strong class="option-selected-label" id="modalSelectedStorageName">${defaultStorage.size}</strong>
        </div>
        <div class="storage-options-grid">
          ${variants.storages.map((s, i) => `
            <button type="button" class="storage-pill-btn ${i === 0 ? 'active' : ''}"
              data-storage-size="${s.size}" data-storage-extra="${s.extra}"
              onclick="selectModalStorage('${s.size}', ${s.extra})">
              <span class="storage-size">${s.size}</span>
              <span class="storage-tag">${s.extra === 0 ? 'ស្តង់ដារ' : `+${formatUSD(s.extra)}`}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Key Specs -->
      <div class="modal-specs" id="modalProductSpecs">
        ${renderModalSpecsHTML(product, defaultStorage.size, false)}
      </div>

      <!-- Action Buttons with Buy Now & Add to Cart -->
      <div class="modal-actions-group">
        <button class="btn btn-buy-now" type="button" onclick="buyNowFromModal(${product.id})">
          <i class="fa-solid fa-bolt"></i> <span>${t.buyNow || 'ទិញភ្លាមៗ'}</span>
        </button>
        <button class="btn btn-primary btn-modal-cart" type="button" onclick="addToCartFromModal(${product.id})">
          <i class="fa-solid fa-cart-plus"></i> <span>${t.addBtn || 'ដាក់កន្ត្រក'}</span>
        </button>
        <button class="btn btn-secondary btn-modal-close" type="button" onclick="closeProductModal()">
          ${t.closeBtn || 'បិទ'}
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  const modalBox = modal.querySelector('.modal-card') || modal.firstElementChild;
  if (modalBox) modalBox.scrollTop = 0;
  updateBodyScrollLock();
}

function buyNowFromModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  addToCart(productId, {
    storage: currentModalConfig.storage?.size || 'Standard',
    color: currentModalConfig.color?.name || 'Default',
    price: currentModalConfig.currentPrice || product.price,
    originalPrice: currentModalConfig.currentOriginalPrice || product.originalPrice
  });

  closeProductModal();
  openCheckoutModal();
}

function addToCartFromModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  addToCart(productId, {
    storage: currentModalConfig.storage?.size || 'Standard',
    color: currentModalConfig.color?.name || 'Default',
    price: currentModalConfig.currentPrice || product.price,
    originalPrice: currentModalConfig.currentOriginalPrice || product.originalPrice
  });

  closeProductModal();
}

function closeProductModal() {
  const modal = document.getElementById('productModalOverlay');
  if (modal) modal.style.display = 'none';
  updateBodyScrollLock();
}

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  state.theme = nextTheme;
  root.setAttribute('data-theme', nextTheme);

  const toggleButton = document.getElementById('themeToggle');
  if (toggleButton) {
    toggleButton.classList.toggle('light-mode', nextTheme === 'light');
  }
}

function addToCart(productId, customConfig = null) {
  const product = getProductById(productId);
  if (!product) return;

  const storage = customConfig?.storage || (product.specs?.find(s => s.includes('GB'))?.split(' ')?.[0] || 'Standard');
  const color = customConfig?.color || 'Standard';
  const unitPrice = customConfig?.price !== undefined ? customConfig.price : product.price;
  const originalPrice = customConfig?.originalPrice !== undefined ? customConfig.originalPrice : product.originalPrice;
  const cartItemId = `${product.id}-${storage}-${color}`;

  const existing = state.cart.find((item) => item.cartItemId === cartItemId || (item.id === product.id && item.storage === storage && item.color === color));

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      cartItemId: cartItemId,
      storage: storage,
      color: color,
      price: unitPrice,
      originalPrice: originalPrice,
      quantity: 1
    });
  }

  updateCart();
  const t = getCurrentTranslations();
  const configText = storage !== 'Standard' || color !== 'Standard' ? ` (${storage}${color !== 'Standard' ? ', ' + color : ''})` : '';
  showToast(`${product.name}${configText} ${t.addedToCart || 'បានដាក់ចូលកន្ត្រក!'}`);
}

function updateQuantity(itemKey, change) {
  const item = state.cart.find((cartItem) => (cartItem.cartItemId && cartItem.cartItemId === String(itemKey)) || cartItem.id === Number(itemKey));
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => (cartItem.cartItemId ? cartItem.cartItemId !== String(itemKey) : cartItem.id !== Number(itemKey)));
  }

  updateCart();
}

function removeFromCart(itemKey) {
  const item = state.cart.find((it) => (it.cartItemId ? it.cartItemId === String(itemKey) : it.id === Number(itemKey)));
  const product = item ? getProductById(item.id) : null;
  const prodName = product ? product.name : '';

  state.cart = state.cart.filter((it) => (it.cartItemId ? it.cartItemId !== String(itemKey) : it.id !== Number(itemKey)));
  updateCart();

  const msg = state.lang === 'kh'
    ? (prodName ? `បានលុប "${prodName}" ចេញពីការកុម្ម៉ង់` : 'បានលុបទំនិញចេញពីការកុម្ម៉ង់')
    : (prodName ? `Removed "${prodName}" from order` : 'Item removed from order');
  showToast(msg);
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = getProductById(item.id);
    if (!product) return sum;
    const unitPrice = item.price !== undefined ? item.price : product.price;
    return sum + unitPrice * item.quantity;
  }, 0);
}

function getDiscountAmount() {
  if (!state.promoApplied) return 0;
  const rate = state.promoRate || 0.10;
  return getCartTotal() * rate;
}

function updateCart() {
  const cartBody = document.getElementById('cartBody');
  const cartCount = document.getElementById('cartCount');
  const cartTotalItems = document.getElementById('cartTotalItems');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartTotalUsd = document.getElementById('cartTotalUsd');
  const cartTotalKhr = document.getElementById('cartTotalKhr');
  const discountLine = document.getElementById('discountLine');
  const miniOrderList = document.getElementById('miniOrderList');
  const miniSubtotal = document.getElementById('miniSubtotal');
  const miniDiscount = document.getElementById('miniDiscount');
  const miniDiscountRow = document.getElementById('miniDiscountRow');
  const miniFinalTotal = document.getElementById('miniFinalTotal');
  const checkoutKhqrAmount = document.getElementById('checkoutKhqrAmount');
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getCartTotal();
  const discountAmount = getDiscountAmount();
  const total = Math.max(subtotal - discountAmount, 0);
  const t = getCurrentTranslations();

  if (cartCount) cartCount.textContent = String(totalItemCount);
  if (cartTotalItems) cartTotalItems.textContent = String(totalItemCount);

  if (!state.cart.length) {
    if (cartBody) {
      cartBody.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>${t.emptyCartTitle || 'Your cart is empty'}</h4>
          <p>${t.emptyCartDesc || 'Add some phones or accessories to begin your order.'}</p>
        </div>
      `;
    }
  } else {
    if (cartBody) {
      cartBody.innerHTML = state.cart.map((item) => {
        const product = getProductById(item.id);
        if (!product) return '';
        const itemKey = item.cartItemId || item.id;
        const itemPrice = item.price !== undefined ? item.price : product.price;
        return `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-info">
              <h4>${product.name}</h4>
              ${(item.storage && item.storage !== 'Standard') || (item.color && item.color !== 'Standard') ? `
                <div class="cart-item-config">
                  ${item.storage && item.storage !== 'Standard' ? `<span class="cart-config-tag">${item.storage}</span>` : ''}
                  ${item.color && item.color !== 'Standard' ? `<span class="cart-config-tag">${item.color}</span>` : ''}
                </div>
              ` : ''}
              <p>${formatUSD(itemPrice)} each</p>
              <div class="cart-item-controls">
                <button class="qty-btn" type="button" data-action="decrease-qty" data-id="${itemKey}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" type="button" data-action="increase-qty" data-id="${itemKey}">+</button>
              </div>
            </div>
            <button class="remove-item-btn" type="button" data-action="remove-item" data-id="${itemKey}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        `;
      }).join('');
    }
  }

  if (cartSubtotal) cartSubtotal.textContent = formatUSD(subtotal);
  if (cartDiscount) cartDiscount.textContent = `-${formatUSD(discountAmount)}`;
  if (cartTotalUsd) cartTotalUsd.textContent = formatUSD(total);
  if (cartTotalKhr) cartTotalKhr.textContent = `≈ ${formatKHR(total)}`;
  if (discountLine) discountLine.style.display = discountAmount > 0 ? 'flex' : 'none';

  if (miniOrderList) {
    if (!state.cart.length) {
      miniOrderList.innerHTML = `
        <div class="mini-empty-state">
          <div class="mini-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
          <p class="mini-empty-title">${state.lang === 'kh' ? 'មិនមានទំនិញក្នុងកន្ត្រកទៀតទេ' : 'No items left in order'}</p>
          <p class="mini-empty-sub">${state.lang === 'kh' ? 'អ្នកបានលុបទំនិញទាំងអស់ចេញពីការកុម្ម៉ង់។' : 'All items have been removed from this order.'}</p>
          <button type="button" class="btn btn-secondary btn-sm" onclick="closeCheckoutModal()">
            <i class="fa-solid fa-arrow-left"></i> ${state.lang === 'kh' ? 'ត្រឡប់ទៅជ្រើសរើសទំនិញ' : 'Back to Shopping'}
          </button>
        </div>
      `;
    } else {
      miniOrderList.innerHTML = state.cart.map((item) => {
        const product = getProductById(item.id);
        if (!product) return '';
        const itemKey = item.cartItemId || item.id;
        const itemPrice = item.price !== undefined ? item.price : product.price;
        const configParts = [];
        if (item.storage && item.storage !== 'Standard') configParts.push(item.storage);
        if (item.color && item.color !== 'Standard') configParts.push(item.color);
        const configStr = configParts.join(' · ');

        return `
          <div class="mini-order-item" id="miniCartItem-${itemKey}">
            <img src="${product.image}" alt="${product.name}" class="mini-order-img">
            <div class="mini-order-details">
              <div class="mini-order-title" title="${product.name}">${product.name}</div>
              ${configStr ? `<div class="mini-order-config">${configStr}</div>` : ''}
              <div class="mini-order-meta">
                <span class="mini-unit-price">${formatUSD(itemPrice)}</span>
                <div class="mini-qty-stepper">
                  <button type="button" class="mini-qty-btn" data-action="decrease-qty" data-id="${itemKey}" title="${state.lang === 'kh' ? 'បន្ថយចំនួន' : 'Decrease'}">−</button>
                  <span class="mini-qty-num">${item.quantity}</span>
                  <button type="button" class="mini-qty-btn" data-action="increase-qty" data-id="${itemKey}" title="${state.lang === 'kh' ? 'បន្ថែមចំនួន' : 'Increase'}">+</button>
                </div>
              </div>
            </div>
            <div class="mini-order-right">
              <strong class="mini-order-price">${formatUSD(itemPrice * item.quantity)}</strong>
              <button type="button" class="mini-order-remove-btn" data-action="remove-item" data-id="${itemKey}" title="${state.lang === 'kh' ? 'លុបទំនិញនេះចេញ' : 'Cancel this item'}" aria-label="Cancel item">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const checkoutItemCountBadge = document.getElementById('checkoutItemCountBadge');
  if (checkoutItemCountBadge) {
    checkoutItemCountBadge.textContent = state.lang === 'kh' ? `${totalItemCount} មុខ` : `${totalItemCount} items`;
  }

  if (miniSubtotal) miniSubtotal.textContent = formatUSD(subtotal);
  if (miniDiscount) miniDiscount.textContent = `-${formatUSD(discountAmount)}`;
  if (miniDiscountRow) miniDiscountRow.style.display = discountAmount > 0 ? 'flex' : 'none';
  if (miniFinalTotal) miniFinalTotal.textContent = formatUSD(total);

  const miniFinalTotalKhr = document.getElementById('miniFinalTotalKhr');
  if (miniFinalTotalKhr) miniFinalTotalKhr.textContent = `≈ ${formatKHR(total)}`;

  if (checkoutKhqrAmount) checkoutKhqrAmount.textContent = formatUSD(total);
  const checkoutKhqrAmountKhr = document.getElementById('checkoutKhqrAmountKhr');
  if (checkoutKhqrAmountKhr) checkoutKhqrAmountKhr.textContent = `≈ ${formatKHR(total)}`;

  const checkoutInstallmentMonthly = document.getElementById('checkoutInstallmentMonthly');
  if (checkoutInstallmentMonthly) {
    const monthlyRate = total > 0 ? formatUSD(total / 12) : '$0.00';
    checkoutInstallmentMonthly.textContent = state.lang === 'kh' ? `${monthlyRate} / ខែ` : `${monthlyRate} / mo`;
  }

  const btnSubmitTotal = document.getElementById('btnSubmitTotal');
  if (btnSubmitTotal) btnSubmitTotal.textContent = formatUSD(total);

  const btnSubmitOrder = document.getElementById('btnSubmitOrder');
  if (btnSubmitOrder) {
    const hasItems = state.cart.length > 0;
    btnSubmitOrder.disabled = !hasItems;
    btnSubmitOrder.style.opacity = hasItems ? '1' : '0.55';
    btnSubmitOrder.style.cursor = hasItems ? 'pointer' : 'not-allowed';
  }

  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer && state.cart.length > 0 && cartDrawer.classList.contains('open')) {
    cartDrawer.classList.add('open');
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

function syncPromoUI() {
  const isApplied = !!state.promoApplied;
  const activeCode = state.activePromoCode || 'PHONE10';
  const discountPercent = Math.round((state.promoRate || 0.10) * 100);

  // 1. Checkout Modal Promo UI
  const checkoutPromoRow = document.getElementById('checkoutPromoRow');
  const checkoutPromoMsg = document.getElementById('checkoutPromoMsg');
  const checkoutPromoInput = document.getElementById('checkoutPromoInput');
  const miniDiscountPercent = document.getElementById('miniDiscountPercent');

  if (miniDiscountPercent) {
    miniDiscountPercent.textContent = `${discountPercent}%`;
  }

  if (checkoutPromoRow && checkoutPromoMsg) {
    if (isApplied) {
      checkoutPromoRow.style.display = 'none';
      checkoutPromoMsg.style.display = 'flex';
      checkoutPromoMsg.className = 'checkout-promo-msg success';
      checkoutPromoMsg.innerHTML = `
        <div class="checkout-promo-applied-banner">
          <div class="promo-applied-info">
            <i class="fa-solid fa-circle-check"></i>
            <div class="promo-applied-text">
              <strong>${activeCode} (-${discountPercent}%)</strong>
              <small>${state.lang === 'kh' ? 'បានបញ្ចុះតម្លៃ ' + discountPercent + '% ជោគជ័យ' : discountPercent + '% discount applied'}</small>
            </div>
          </div>
          <button type="button" class="btn-cancel-promo" onclick="removeCheckoutPromoCode()">
            <i class="fa-solid fa-xmark"></i> ${state.lang === 'kh' ? 'ដោះកូដ' : 'Remove'}
          </button>
        </div>
      `;
    } else {
      checkoutPromoRow.style.display = 'flex';
      checkoutPromoMsg.style.display = 'none';
      checkoutPromoMsg.className = 'checkout-promo-msg';
      checkoutPromoMsg.innerHTML = '';
      if (checkoutPromoInput) checkoutPromoInput.value = '';
    }
  }

  // 2. Cart Drawer Promo UI
  const cartPromoInput = document.getElementById('promoInput');
  const cartPromoMsg = document.getElementById('promoMessage');
  if (cartPromoInput && cartPromoMsg) {
    if (isApplied) {
      cartPromoInput.value = activeCode;
      cartPromoMsg.textContent = `${activeCode} applied! ${discountPercent}% discount included.`;
      cartPromoMsg.className = 'promo-msg success';
    } else {
      cartPromoInput.value = '';
      cartPromoMsg.textContent = '';
      cartPromoMsg.className = 'promo-msg';
    }
  }
}

function applyPromoCodeCore(code) {
  const cleaned = (code || '').trim().toUpperCase();
  if (!cleaned) {
    return { ok: false, msg: state.lang === 'kh' ? 'សូមបញ្ចូលកូដបញ្ចុះតម្លៃ!' : 'Please enter a promo code.' };
  }

  if (cleaned === 'PHONE10' || cleaned === state.promoCode) {
    state.promoApplied = true;
    state.activePromoCode = 'PHONE10';
    state.promoRate = 0.10;
    updateCart();
    syncPromoUI();
    return { ok: true, msg: state.lang === 'kh' ? 'បានប្រើកូដបញ្ចុះតម្លៃ 10% ដោយជោគជ័យ!' : '10% discount applied successfully!' };
  } else if (cleaned === 'PHONE15') {
    state.promoApplied = true;
    state.activePromoCode = 'PHONE15';
    state.promoRate = 0.15;
    updateCart();
    syncPromoUI();
    return { ok: true, msg: state.lang === 'kh' ? 'បានប្រើកូដបញ្ចុះតម្លៃ 15% ដោយជោគជ័យ!' : '15% discount applied successfully!' };
  } else {
    state.promoApplied = false;
    state.activePromoCode = '';
    state.promoRate = 0;
    updateCart();
    syncPromoUI();
    return { ok: false, msg: state.lang === 'kh' ? 'កូដមិនត្រឹមត្រូវទេ! សូមសាកល្បងកូដ PHONE10' : 'Invalid code. Try PHONE10' };
  }
}

function applyCheckoutPromoCode() {
  const input = document.getElementById('checkoutPromoInput');
  const msgEl = document.getElementById('checkoutPromoMsg');
  const code = input ? input.value : '';

  const result = applyPromoCodeCore(code);
  if (!result.ok) {
    if (msgEl) {
      msgEl.style.display = 'block';
      msgEl.className = 'checkout-promo-msg error';
      msgEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${result.msg}`;
    }
    showToast(result.msg);
  } else {
    showToast(`🎉 ${result.msg}`);
  }
}

function quickFillPromo(code) {
  const input = document.getElementById('checkoutPromoInput');
  if (input) input.value = code;
  applyCheckoutPromoCode();
}

function removeCheckoutPromoCode() {
  state.promoApplied = false;
  state.activePromoCode = '';
  state.promoRate = 0;
  updateCart();
  syncPromoUI();
  showToast(state.lang === 'kh' ? 'បានដោះកូដបញ្ចុះតម្លៃ!' : 'Promo code removed.');
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const message = document.getElementById('promoMessage');
  const code = input ? input.value : '';

  const result = applyPromoCodeCore(code);
  if (!result.ok) {
    if (message) {
      message.textContent = result.msg;
      message.classList.add('error');
      message.classList.remove('success');
    }
    showToast(result.msg);
  } else {
    if (message) {
      message.textContent = result.msg;
      message.classList.add('success');
      message.classList.remove('error');
    }
    showToast(`🎉 ${result.msg}`);
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.style.display = 'block';
  updateBodyScrollLock();
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.style.display = 'none';
  updateBodyScrollLock();
}

// --- CHECKOUT & MULTI-PAYMENT SYSTEM ---

let qrTimerInterval = null;

function startQrTimer() {
  if (qrTimerInterval) clearInterval(qrTimerInterval);
  let timeLeft = 15 * 60; // 15 minutes
  const timerElem = document.getElementById('qrTimer');
  if (!timerElem) return;

  function update() {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    timerElem.textContent = `${mins}:${secs}`;
    if (timeLeft <= 0) {
      clearInterval(qrTimerInterval);
      timerElem.textContent = '00:00 (ផុតកំណត់)';
    } else {
      timeLeft--;
    }
  }
  update();
  qrTimerInterval = setInterval(update, 1000);
}

function openCheckoutModal() {
  if (!state.cart.length) {
    showToast(state.lang === 'kh' ? 'សូមជ្រើសរើសទំនិញចូលកន្ត្រកជាមុនសិន!' : 'Add at least one item to checkout.');
    return;
  }

  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) {
    modal.style.display = 'flex';
    const modalBox = modal.querySelector('.modal-card') || modal.firstElementChild;
    if (modalBox) modalBox.scrollTop = 0;
  }

  closeCart();
  updateBodyScrollLock();
  updateCart();
  syncPromoUI();
  checkFormValidity(false);
  selectPaymentMethod('khqr');
  startQrTimer();
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) modal.style.display = 'none';
  updateBodyScrollLock();
  if (qrTimerInterval) clearInterval(qrTimerInterval);
}

function checkFormValidity(isSubmitting = false) {
  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const cityInput = document.getElementById('custCity');
  const addressInput = document.getElementById('custAddress');

  const nameVal = (nameInput?.value || '').trim();
  const phoneVal = (phoneInput?.value || '').replace(/[\s\-\.]/g, '');
  const cityVal = cityInput?.value || '';
  const addressVal = (addressInput?.value || '').trim();

  const nameValid = nameVal.length >= 2;
  const phoneValid = phoneVal.length >= 8 && /^[0-9+]+$/.test(phoneVal);
  const cityValid = cityVal.length > 0;
  const addressValid = addressVal.length >= 5;

  function updateFieldState(input, isValid, errorElemId) {
    if (!input) return;
    const wrapper = input.closest('.input-with-icon');
    const errorElem = errorElemId ? document.getElementById(errorElemId) : null;
    const hasValue = input.value.trim().length > 0;

    if (isValid) {
      if (wrapper) {
        wrapper.classList.add('valid');
        wrapper.classList.remove('error');
      }
      if (errorElem) errorElem.classList.remove('visible');
    } else {
      if (wrapper) {
        wrapper.classList.remove('valid');
        if (isSubmitting || hasValue) {
          wrapper.classList.add('error');
        } else {
          wrapper.classList.remove('error');
        }
      }
      if (errorElem) {
        if (isSubmitting || hasValue) {
          errorElem.classList.add('visible');
        } else {
          errorElem.classList.remove('visible');
        }
      }
    }
  }

  updateFieldState(nameInput, nameValid, 'errorCustName');
  updateFieldState(phoneInput, phoneValid, 'errorCustPhone');
  updateFieldState(cityInput, cityValid, '');
  updateFieldState(addressInput, addressValid, 'errorCustAddress');

  const allValid = nameValid && phoneValid && cityValid && addressValid;

  // Step 1 badge
  const stepBadge1 = document.getElementById('stepBadge1');
  const stepBadge2 = document.getElementById('stepBadge2');
  if (stepBadge1) {
    if (allValid) {
      stepBadge1.classList.add('completed');
    } else {
      stepBadge1.classList.remove('completed');
    }
  }
  if (stepBadge2) {
    stepBadge2.classList.toggle('active', allValid);
  }

  // Notice status banner
  const notice = document.getElementById('formValidationNotice');
  if (notice) {
    if (allValid) {
      notice.className = 'form-validation-notice success';
      notice.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>ព័ត៌មានដឹកជញ្ជូនរបស់អ្នកពេញលេញ និងត្រឹមត្រូវហើយ! លោកអ្នកអាចជ្រើសរើសវិធីសាស្រ្តទូទាត់ និងចុចបញ្ជាក់ការទូទាត់បាន។</span>`;
    } else {
      notice.className = 'form-validation-notice warning';
      notice.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>សូមបំពេញ <strong>ឈ្មោះ លេខទូរស័ព្ទ និងអាសយដ្ឋាន</strong> ឱ្យបានពេញលេញ ដើម្បីដំណើរការការទូទាត់ប្រាក់។</span>`;
    }
  }

  return allValid;
}

function highlightFirstInvalidInput() {
  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const cityInput = document.getElementById('custCity');
  const addressInput = document.getElementById('custAddress');

  let firstInvalid = null;
  if (!nameInput?.value.trim() || nameInput.value.trim().length < 2) firstInvalid = nameInput;
  else if (!phoneInput?.value.trim() || phoneInput.value.replace(/[\s\-\.]/g, '').length < 8) firstInvalid = phoneInput;
  else if (!cityInput?.value) firstInvalid = cityInput;
  else if (!addressInput?.value.trim() || addressInput.value.trim().length < 5) firstInvalid = addressInput;

  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus();
    const wrapper = firstInvalid.closest('.input-with-icon') || firstInvalid;
    wrapper.classList.add('shake');
    setTimeout(() => wrapper.classList.remove('shake'), 500);
  }
}

function selectPaymentMethod(method) {
  const cards = document.querySelectorAll('.payment-methods-grid .pay-method-card');
  cards.forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');
    const isTarget = radio && radio.value === method;
    if (radio) radio.checked = isTarget;
    card.classList.toggle('active', isTarget);
  });

  const khqrBox = document.getElementById('khqrPreviewBox');
  const codBox = document.getElementById('codPreviewBox');
  const bankBox = document.getElementById('bankPreviewBox');
  const instBox = document.getElementById('installmentPreviewBox');

  if (khqrBox) khqrBox.style.display = method === 'khqr' ? 'block' : 'none';
  if (codBox) codBox.style.display = method === 'cod' ? 'block' : 'none';
  if (bankBox) bankBox.style.display = method === 'bank' ? 'block' : 'none';
  if (instBox) instBox.style.display = method === 'installment' ? 'block' : 'none';

  if (method === 'khqr') {
    startQrTimer();
  }

  const total = Math.max(getCartTotal() - getDiscountAmount(), 0);
  const btnSubmitTotal = document.getElementById('btnSubmitTotal');
  if (btnSubmitTotal) btnSubmitTotal.textContent = formatUSD(total);
}

function togglePaymentView(method) {
  selectPaymentMethod(method);
}

function copyText(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || (state.lang === 'kh' ? 'បានចម្លងរួចរាល់!' : 'Copied!'));
    }).catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const temp = document.createElement('input');
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  showToast(message || (state.lang === 'kh' ? 'បានចម្លងរួចរាល់!' : 'Copied!'));
}

function downloadMockQR() {
  const total = Math.max(getCartTotal() - getDiscountAmount(), 0);
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(0, 0, 400, 540, 24);
  else ctx.rect(0, 0, 400, 540);
  ctx.fill();

  // Header Banner (Red)
  ctx.fillStyle = '#e11d48';
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(0, 0, 400, 70, [24, 24, 0, 0]);
  else ctx.rect(0, 0, 400, 70);
  ctx.fill();

  // Header Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('BAKONG KHQR', 200, 44);

  // Store Name
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 18px system-ui, sans-serif';
  ctx.fillText('PHONEZONE CAMBODIA', 200, 110);

  // Account
  ctx.fillStyle = '#64748b';
  ctx.font = '14px system-ui, sans-serif';
  ctx.fillText('ABA: 001 889 999', 200, 134);

  // Amount
  ctx.fillStyle = '#059669';
  ctx.font = 'bold 26px system-ui, sans-serif';
  ctx.fillText(formatUSD(total), 200, 172);

  ctx.fillStyle = '#64748b';
  ctx.font = '14px system-ui, sans-serif';
  ctx.fillText(`≈ ${formatKHR(total)}`, 200, 194);

  // Draw QR Frame
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 215, 280, 280);

  // Finder patterns
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(80, 235, 60, 60);
  ctx.clearRect(90, 245, 40, 40);
  ctx.fillRect(100, 255, 20, 20);

  ctx.fillRect(260, 235, 60, 60);
  ctx.clearRect(270, 245, 40, 40);
  ctx.fillRect(280, 255, 20, 20);

  ctx.fillRect(80, 415, 60, 60);
  ctx.clearRect(90, 425, 40, 40);
  ctx.fillRect(100, 435, 20, 20);

  // Center logo
  ctx.fillStyle = '#e11d48';
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(175, 330, 50, 50, 10);
  else ctx.rect(175, 330, 50, 50);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('QR', 200, 361);

  // Random QR matrix pixels
  ctx.fillStyle = '#0f172a';
  const positions = [
    [160, 240], [180, 250], [200, 240], [220, 260],
    [160, 280], [190, 290], [230, 285],
    [70, 320], [100, 340], [120, 325],
    [270, 330], [300, 350], [280, 380],
    [160, 420], [190, 440], [220, 430], [240, 460],
    [280, 430], [310, 450], [290, 470]
  ];
  positions.forEach(([x, y]) => {
    ctx.fillRect(x, y, 16, 16);
  });

  // Footer note
  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px system-ui, sans-serif';
  ctx.fillText('Scan with ABA Mobile, Bakong, or any bank app', 200, 520);

  const link = document.createElement('a');
  link.download = `phonezone-khqr-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast(state.lang === 'kh' ? 'បានទាញយករូប Bakong KHQR រួចរាល់!' : 'Bakong KHQR downloaded!');
}

function confirmPaymentStep() {
  const isValid = checkFormValidity(true);
  if (!isValid) {
    showToast(state.lang === 'kh' ? 'សូមបំពេញព័ត៌មានដឹកជញ្ជូនឱ្យបានគ្រប់គ្រាន់ជាមុនសិន!' : 'Please complete delivery information first!');
    highlightFirstInvalidInput();
    return;
  }
  showToast(state.lang === 'kh' ? 'កំពុងផ្ទៀងផ្ទាត់ការទូទាត់...' : 'Verifying payment...');
  setTimeout(() => {
    processOrder();
  }, 400);
}

function handleSlipSelected(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const previewContainer = document.getElementById('slipPreviewContainer');
    const previewImg = document.getElementById('slipPreviewImg');
    const statusText = document.getElementById('slipStatusText');

    if (previewImg) previewImg.src = e.target.result;
    if (previewContainer) previewContainer.style.display = 'flex';
    if (statusText) statusText.textContent = `បានជ្រើសរើស: ${file.name}`;
    showToast(state.lang === 'kh' ? 'បានភ្ជាប់រូបវិក្កយបត្ររួចរាល់' : 'Slip uploaded');
  };
  reader.readAsDataURL(file);
}

function removeSlip() {
  const input = document.getElementById('slipFileInput');
  const previewContainer = document.getElementById('slipPreviewContainer');
  const previewImg = document.getElementById('slipPreviewImg');
  const statusText = document.getElementById('slipStatusText');

  if (input) input.value = '';
  if (previewImg) previewImg.src = '';
  if (previewContainer) previewContainer.style.display = 'none';
  if (statusText) statusText.textContent = 'ភ្ជាប់វិក្កយបត្រ / បង្កាន់ដៃផ្ទេរប្រាក់ (Payment Slip - Optional)';
}

function processOrder() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  const isValid = checkFormValidity(true);
  if (!isValid) {
    showToast(state.lang === 'kh' ? 'សូមបំពេញព័ត៌មានដឹកជញ្ជូនឱ្យបានគ្រប់គ្រាន់ជាមុនសិន!' : 'Please fill in all required delivery fields!');
    highlightFirstInvalidInput();
    return;
  }

  if (!state.cart.length) {
    showToast(state.lang === 'kh' ? 'សូមជ្រើសរើសទំនិញចូលកន្ត្រកជាមុនសិន!' : 'Your cart is empty.');
    return;
  }

  const customerName = document.getElementById('custName')?.value.trim() || 'អតិថិជន';
  const customerPhone = document.getElementById('custPhone')?.value.trim() || '';
  const customerCity = document.getElementById('custCity')?.value || 'Phnom Penh';
  const customerAddress = document.getElementById('custAddress')?.value.trim() || '';
  const customerNotes = document.getElementById('custNotes')?.value.trim() || '';

  const selectedMethodRadio = document.querySelector('input[name="payMethod"]:checked');
  const selectedMethod = selectedMethodRadio ? selectedMethodRadio.value : 'khqr';

  let methodLabel = 'Bakong KHQR (ABA Bank)';
  let methodBadgeClass = 'pay-khqr-pill';
  let methodIcon = 'fa-solid fa-qrcode';
  if (selectedMethod === 'cod') {
    methodLabel = state.lang === 'kh' ? 'ទូទាត់ពេលទំនិញមកដល់ (Cash on Delivery)' : 'Cash on Delivery (COD)';
    methodBadgeClass = 'pay-cod-pill';
    methodIcon = 'fa-solid fa-hand-holding-dollar';
  } else if (selectedMethod === 'bank') {
    methodLabel = state.lang === 'kh' ? 'ផ្ទេរតាមគណនីធនាគារ (Bank Transfer)' : 'Bank Transfer';
    methodBadgeClass = 'pay-bank-pill';
    methodIcon = 'fa-solid fa-building-columns';
  } else if (selectedMethod === 'installment') {
    const partner = document.querySelector('input[name="instPartner"]:checked')?.value || 'AEON';
    methodLabel = state.lang === 'kh' ? `បង់រំលស់ការប្រាក់ 0% (${partner.toUpperCase()})` : `0% Installment (${partner.toUpperCase()})`;
    methodBadgeClass = 'pay-inst-pill';
    methodIcon = 'fa-solid fa-percent';
  }

  const subtotal = getCartTotal();
  const discount = getDiscountAmount();
  const total = Math.max(subtotal - discount, 0);
  const orderNumber = `PZ-${Math.floor(10000 + Math.random() * 90000)}`;

  const now = new Date();
  const dateFormatted = now.toLocaleDateString(state.lang === 'kh' ? 'km-KH' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const timeFormatted = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  const orderTimestamp = `${dateFormatted} • ${timeFormatted}`;

  const cartSnapshot = state.cart.map(item => {
    const p = getProductById(item.id);
    const itemPrice = item.price !== undefined ? item.price : (p ? p.price : 0);
    const configParts = [];
    if (item.storage && item.storage !== 'Standard') configParts.push(item.storage);
    if (item.color && item.color !== 'Standard') configParts.push(item.color);
    return {
      id: item.id,
      name: p ? p.name : 'Product',
      image: p ? p.image : 'images/placeholder.jpg',
      config: configParts.join(' / '),
      storage: item.storage,
      color: item.color,
      quantity: item.quantity,
      price: itemPrice,
      lineTotal: itemPrice * item.quantity
    };
  });

  const totalItemCount = cartSnapshot.reduce((sum, it) => sum + it.quantity, 0);

  window.currentOrderData = {
    orderNumber,
    timestamp: orderTimestamp,
    customerName,
    customerPhone,
    customerCity,
    customerAddress,
    notes: customerNotes,
    paymentMethod: methodLabel,
    subtotal,
    discount,
    total,
    items: cartSnapshot
  };

  const orderReceipt = document.getElementById('orderReceiptBox');
  if (orderReceipt) {
    const itemsListHtml = cartSnapshot.map(item => {
      return `
        <div class="receipt-product-item">
          <div class="receipt-prod-img-wrap">
            <img src="${item.image}" alt="${item.name}" class="receipt-prod-img" onerror="this.src='images/placeholder.jpg'">
          </div>
          <div class="receipt-prod-details">
            <h4 class="receipt-prod-title" title="${item.name}">${item.name}</h4>
            <div class="receipt-prod-meta">
              ${item.config ? `<span class="receipt-meta-chip">${item.config}</span>` : ''}
              <span class="receipt-qty-chip">x${item.quantity}</span>
            </div>
          </div>
          <div class="receipt-prod-pricing">
            <strong class="receipt-item-total">${formatUSD(item.lineTotal)}</strong>
            ${item.quantity > 1 ? `<small class="receipt-unit-price">${formatUSD(item.price)}/ea</small>` : ''}
          </div>
        </div>
      `;
    }).join('');

    const etaText = (customerCity.toLowerCase().includes('phnom penh') || customerCity === 'Phnom Penh')
      ? (state.lang === 'kh' ? 'ដឹកជញ្ជូនរហ័ស 1-2 ម៉ោង ដល់ទីកន្លែង' : 'Express Delivery: 1-2 Hours')
      : (state.lang === 'kh' ? 'ដឹកជញ្ជូនទូទាំងខេត្ត 24 ម៉ោង (Free)' : 'Nationwide Delivery: 24 Hours (Free)');

    orderReceipt.innerHTML = `
      <div class="receipt-ticket">
        <!-- Top Bar: Order Code & Date -->
        <div class="receipt-top-bar">
          <div class="receipt-code-group">
            <span class="receipt-code-label">លេខកូដកុម្ម៉ង់</span>
            <div class="receipt-code-badge" onclick="copyOrderCode('${orderNumber}')" title="ចុចដើម្បីចម្លងលេខកូដ">
              <span class="code-txt">#${orderNumber}</span>
              <button type="button" class="btn-copy-code" aria-label="Copy order code">
                <i class="fa-regular fa-copy" id="copyCodeIcon"></i>
              </button>
            </div>
          </div>
          <div class="receipt-date-group">
            <span class="receipt-date-label">កាលបរិច្ឆេទ</span>
            <strong class="receipt-date-val"><i class="fa-regular fa-calendar-check"></i> ${orderTimestamp}</strong>
          </div>
        </div>

        <!-- 3-Step Live Order Progress -->
        <div class="receipt-timeline-card">
          <div class="timeline-step done">
            <div class="t-step-dot"><i class="fa-solid fa-check"></i></div>
            <span class="t-step-name">បានបញ្ជាក់</span>
          </div>
          <div class="t-step-line active"></div>
          <div class="timeline-step active">
            <div class="t-step-dot"><i class="fa-solid fa-box"></i></div>
            <span class="t-step-name">កំពុងរៀបចំ</span>
          </div>
          <div class="t-step-line"></div>
          <div class="timeline-step">
            <div class="t-step-dot"><i class="fa-solid fa-motorcycle"></i></div>
            <span class="t-step-name">ដឹកជញ្ជូនរហ័ស</span>
          </div>
        </div>

        <!-- Customer & Shipping Info Grid -->
        <div class="receipt-info-card">
          <div class="receipt-info-grid">
            <div class="receipt-info-item">
              <div class="r-icon"><i class="fa-solid fa-user"></i></div>
              <div class="r-text">
                <span class="r-label">ឈ្មោះអ្នកទទួល</span>
                <strong class="r-val">${customerName}</strong>
              </div>
            </div>

            <div class="receipt-info-item">
              <div class="r-icon"><i class="fa-solid fa-phone"></i></div>
              <div class="r-text">
                <span class="r-label">លេខទូរស័ព្ទ</span>
                <strong class="r-val">${customerPhone}</strong>
              </div>
            </div>

            <div class="receipt-info-item full-width">
              <div class="r-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="r-text">
                <span class="r-label">ទីតាំងដឹកជញ្ជូន</span>
                <strong class="r-val">${customerAddress ? customerAddress + ', ' : ''}${customerCity}</strong>
                <span class="delivery-eta-badge">
                  <i class="fa-solid fa-bolt"></i> ${etaText}
                </span>
              </div>
            </div>

            <div class="receipt-info-item full-width">
              <div class="r-icon"><i class="fa-solid fa-credit-card"></i></div>
              <div class="r-text">
                <span class="r-label">វិធីសាស្រ្តទូទាត់</span>
                <div class="receipt-pay-pill ${methodBadgeClass}">
                  <i class="${methodIcon}"></i>
                  <span>${methodLabel}</span>
                </div>
              </div>
            </div>

            ${customerNotes ? `
            <div class="receipt-info-item full-width receipt-notes-row">
              <div class="r-icon"><i class="fa-solid fa-note-sticky"></i></div>
              <div class="r-text">
                <span class="r-label">ចំណាំពីអតិថិជន</span>
                <div class="r-note-quote">"${customerNotes}"</div>
              </div>
            </div>` : ''}
          </div>
        </div>

        <!-- Purchased Products Section -->
        <div class="receipt-products-card">
          <div class="receipt-section-title">
            <i class="fa-solid fa-basket-shopping"></i>
            <span>ទំនិញកុម្ម៉ង់ (${totalItemCount} មុខ)</span>
          </div>
          <div class="receipt-products-list">
            ${itemsListHtml}
          </div>
        </div>

        <!-- Receipt Ticket Perforation Cut Divider -->
        <div class="receipt-perforation">
          <div class="perforation-notch left"></div>
          <div class="perforation-dashed"></div>
          <div class="perforation-notch right"></div>
        </div>

        <!-- Pricing Breakdown -->
        <div class="receipt-pricing-card">
          <div class="r-price-row">
            <span>សរុបទំនិញ (${totalItemCount} មុខ):</span>
            <strong>${formatUSD(subtotal)}</strong>
          </div>

          ${discount > 0 ? `
          <div class="r-price-row discount">
            <span class="discount-label"><i class="fa-solid fa-tags"></i> បញ្ចុះតម្លៃពិសេស (PHONE10):</span>
            <strong class="discount-val">-${formatUSD(discount)}</strong>
          </div>` : ''}

          <div class="r-price-row">
            <span>ថ្លៃសេវាដឹកជញ្ជូន:</span>
            <strong class="free-shipping-tag"><i class="fa-solid fa-truck-fast"></i> ឥតគិតថ្លៃ (Free)</strong>
          </div>

          <div class="receipt-grand-total">
            <div class="grand-label">
              <span class="grand-title">សរុបចុងក្រោយ (Total)</span>
              <span class="grand-note">រួមបញ្ចូលពន្ធ និងថ្លៃដឹកជញ្ជូនរួច</span>
            </div>
            <div class="grand-amounts">
              <div class="grand-usd">${formatUSD(total)}</div>
              <div class="grand-khr">≈ ${formatKHR(total)}</div>
            </div>
          </div>
        </div>

        <!-- Store Guarantee & Helpline Footer -->
        <div class="receipt-trust-footer">
          <div class="trust-pill"><i class="fa-solid fa-shield-halved"></i> ធានាផ្លូវការ 100%</div>
          <div class="trust-pill"><i class="fa-solid fa-headset"></i> ជំនួយ: 012 345 678</div>
          <div class="trust-pill"><i class="fa-brands fa-telegram"></i> @PhoneZoneKH</div>
        </div>
      </div>
    `;
  }

  closeCheckoutModal();

  const successModal = document.getElementById('successModalOverlay');
  if (successModal) {
    successModal.style.display = 'flex';
    const modalBox = successModal.querySelector('.modal-card') || successModal.firstElementChild;
    if (modalBox) modalBox.scrollTop = 0;
    launchSuccessConfetti();
  }
  updateBodyScrollLock();

  state.cart = [];
  state.promoApplied = false;
  state.activePromoCode = '';
  state.promoRate = 0;
  updateCart();
  syncPromoUI();

  // Capture slip image before form.reset()
  const slipInput = document.getElementById('slipFileInput');
  const slipFile = slipInput && slipInput.files ? slipInput.files[0] : null;

  // Send real-time Telegram notification to Group Phone Shop
  sendTelegramOrderAlert(window.currentOrderData, slipFile);

  form.reset();
  showToast(state.lang === 'kh' ? 'ការកុម្ម៉ង់ត្រូវបានទទួលជោគជ័យ! 🎉' : 'Order placed successfully! 🎉');
}

const TELEGRAM_CONFIG = {
  botToken: '8705271551:AAHdRNBwgtjeGt07Bkh2cXa7h2WWgsQ-Lc4',
  chatId: '-5327731193'
};

function escapeTelegramHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramOrderAlert(order, slipFile) {
  if (!order) return;

  const botToken = TELEGRAM_CONFIG.botToken;
  const chatId = TELEGRAM_CONFIG.chatId;

  const itemsListText = (order.items || []).map((it, idx) => {
    const configStr = it.config ? ` (${escapeTelegramHtml(it.config)})` : '';
    return `  ${idx + 1}. <b>${escapeTelegramHtml(it.name)}</b>${configStr}\n     ចំនួន: ${it.quantity} × ${formatUSD(it.price)} = <b>${formatUSD(it.lineTotal)}</b>`;
  }).join('\n');

  const discountText = order.discount > 0 ? `\n🎁 <b>បញ្ចុះតម្លៃ:</b> -${formatUSD(order.discount)}` : '';
  const notesText = order.notes ? `\n📝 <b>ចំណាំពីអតិថិជន:</b> <i>${escapeTelegramHtml(order.notes)}</i>` : '';

  const message = `🛍️ <b>ការកុម្ម៉ង់ថ្មី (NEW ORDER) - PHONEZONE CAMBODIA</b>
━━━━━━━━━━━━━━━━━━━━
🧾 <b>លេខកូដកុម្ម៉ង់:</b> <code>#${escapeTelegramHtml(order.orderNumber)}</code>
📅 <b>កាលបរិច្ឆេទ:</b> ${escapeTelegramHtml(order.timestamp)}
🟢 <b>ស្ថានភាព:</b> បានបញ្ជាក់ (Confirmed)

👤 <b>ឈ្មោះអ្នកទទួល:</b> <b>${escapeTelegramHtml(order.customerName)}</b>
📞 <b>លេខទូរស័ព្ទ:</b> <code>${escapeTelegramHtml(order.customerPhone)}</code>
📍 <b>ទីតាំងដឹកជញ្ជូន:</b> ${escapeTelegramHtml(order.customerAddress ? order.customerAddress + ', ' : '')}${escapeTelegramHtml(order.customerCity)}
💳 <b>វិធីទូទាត់:</b> ${escapeTelegramHtml(order.paymentMethod)}${notesText}

📦 <b>ទំនិញដែលបានកុម្ម៉ង់ (${(order.items || []).length} មុខ):</b>
${itemsListText}
━━━━━━━━━━━━━━━━━━━━
💵 <b>សរុបទំនិញ:</b> ${formatUSD(order.subtotal)}${discountText}
🚚 <b>ថ្លៃដឹកជញ្ជូន:</b> ឥតគិតថ្លៃ (Free)
💰 <b>សរុបចុងក្រោយ:</b> <b>${formatUSD(order.total)}</b> (≈ ${formatKHR(order.total)})
━━━━━━━━━━━━━━━━━━━━
⚡ <i>សូមពិនិត្យ និងទាក់ទងរៀបចំដឹកជញ្ជូនជូនអតិថិជន!</i>`;

  try {
    // 1. If payment slip image is attached, upload photo to Telegram group
    if (slipFile) {
      const photoFormData = new FormData();
      photoFormData.append('chat_id', chatId);
      photoFormData.append('photo', slipFile);
      photoFormData.append('caption', `🧾 <b>បង្កាន់ដៃទូទាត់ប្រាក់ (Payment Slip)</b>\nលេខកូដកុម្ម៉ង់: <code>#${escapeTelegramHtml(order.orderNumber)}</code>\nអតិថិជន: ${escapeTelegramHtml(order.customerName)} (${escapeTelegramHtml(order.customerPhone)})`);
      photoFormData.append('parse_mode', 'HTML');

      fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: 'POST',
        body: photoFormData
      }).catch(err => console.warn('Telegram sendPhoto error:', err));
    }

    // 2. Send complete order details message
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const data = await res.json();
    if (data.ok) {
      console.log('Telegram order alert sent successfully:', data);
    } else {
      console.warn('Telegram API returned error, trying server fallback:', data);
      fetch('/api/telegram-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message, chat_id: chatId })
      }).catch(e => console.warn('Server fallback alert error:', e));
    }
  } catch (err) {
    console.warn('Direct Telegram fetch failed, trying local server endpoint...', err);
    fetch('/api/telegram-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message, chat_id: chatId })
    }).catch(e => console.warn('Server fallback alert error:', e));
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModalOverlay');
  if (successModal) successModal.style.display = 'none';
  updateBodyScrollLock();
  if (window._confettiFrameId) {
    cancelAnimationFrame(window._confettiFrameId);
    window._confettiFrameId = null;
  }
  const canvas = document.getElementById('successConfettiCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function copyOrderCode(code) {
  copyText(code, state.lang === 'kh' ? `បានចម្លងលេខកូដ #${code}!` : `Copied #${code}!`);
  const icon = document.getElementById('copyCodeIcon');
  if (icon) {
    icon.className = 'fa-solid fa-check text-success';
    setTimeout(() => {
      icon.className = 'fa-regular fa-copy';
    }, 2000);
  }
}

function copyOrderDetails() {
  if (!window.currentOrderData) {
    showToast(state.lang === 'kh' ? 'មិនមានទិន្នន័យកុម្ម៉ង់' : 'No order data');
    return;
  }
  const d = window.currentOrderData;
  const itemsText = d.items.map(it => `• ${it.name} ${it.config ? '(' + it.config + ')' : ''} x${it.quantity} = ${formatUSD(it.lineTotal)}`).join('\n');

  const text = `
========================================
   PHONEZONE CAMBODIA - ORDER RECEIPT
========================================
🧾 លេខកូដកុម្ម៉ង់: #${d.orderNumber}
📅 កាលបរិច្ឆេទ: ${d.timestamp}
👤 អតិថិជន: ${d.customerName}
📞 លេខទូរស័ព្ទ: ${d.customerPhone}
📍 ទីតាំងដឹកជញ្ជូន: ${d.customerAddress ? d.customerAddress + ', ' : ''}${d.customerCity}
💳 វិធីទូទាត់: ${d.paymentMethod}
${d.notes ? `📝 ចំណាំ: ${d.notes}\n` : ''}----------------------------------------
📦 ទំនិញកុម្ម៉ង់:
${itemsText}
----------------------------------------
💵 សរុបទំនិញ: ${formatUSD(d.subtotal)}
${d.discount > 0 ? `🎁 បញ្ចុះតម្លៃ: -${formatUSD(d.discount)}\n` : ''}🚚 ថ្លៃដឹកជញ្ជូន: ឥតគិតថ្លៃ (Free)
💰 សរុបចុងក្រោយ: ${formatUSD(d.total)} (≈ ${formatKHR(d.total)})
========================================
អរគុណសម្រាប់ការកុម្ម៉ង់នៅ PhoneZone Cambodia!
ទូរស័ព្ទជំនួយ: 012 345 678 | Telegram: @PhoneZoneKH
  `.trim();

  copyText(text, state.lang === 'kh' ? 'បានចម្លងព័ត៌មានវិក្កយបត្រទាំងអស់រួចរាល់!' : 'Order details copied to clipboard!');

  const btnText = document.getElementById('btnCopyOrderText');
  if (btnText) {
    const orig = btnText.textContent;
    btnText.textContent = state.lang === 'kh' ? 'បានចម្លង!' : 'Copied!';
    setTimeout(() => {
      btnText.textContent = orig;
    }, 2000);
  }
}

function printReceipt() {
  window.print();
}

function launchSuccessConfetti() {
  const canvas = document.getElementById('successConfettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#10b981', '#6366f1', '#38bdf8', '#f59e0b', '#ec4899', '#8b5cf6'];
  const confettiCount = 70;
  const particles = [];

  for (let i = 0; i < confettiCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() * 120 - 60),
      y: height * 0.35 + (Math.random() * 60 - 30),
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 12 + 6),
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      friction: 0.96,
      opacity: 1
    });
  }

  const startTime = Date.now();
  if (window._confettiFrameId) cancelAnimationFrame(window._confettiFrameId);

  function render() {
    const elapsed = Date.now() - startTime;
    if (elapsed > 3500) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.rot += p.vrot;
      p.opacity = Math.max(0, 1 - elapsed / 3500);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    window._confettiFrameId = requestAnimationFrame(render);
  }

  window._confettiFrameId = requestAnimationFrame(render);
}

function initEvents() {
  document.getElementById('closeAnnouncement')?.addEventListener('click', dismissAnnouncement);

  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLanguage(state.lang === 'kh' ? 'en' : 'kh');
  });

  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('openCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  document.getElementById('clearSearch')?.addEventListener('click', () => {
    const input = document.getElementById('searchInput');
    if (input) {
      input.value = '';
      state.searchQuery = '';
      renderProducts();
      input.focus();
      document.getElementById('clearSearch').style.display = 'none';
    }
  });

  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', (event) => {
    state.searchQuery = event.target.value;
    const clearButton = document.getElementById('clearSearch');
    if (clearButton) clearButton.style.display = state.searchQuery ? 'flex' : 'none';
    renderProducts();
  });

  document.getElementById('sortSelect')?.addEventListener('change', (event) => {
    state.sortBy = event.target.value;
    renderProducts();
  });

  document.querySelectorAll('.filter-pill').forEach((button) => {
    button.addEventListener('click', (e) => {
      if (window._isCategoryDragging) return;
      setActiveCategory(button.dataset.category || 'all');
    });
  });

  document.getElementById('resetFilterBtn')?.addEventListener('click', () => {
    state.searchQuery = '';
    state.selectedCategory = 'all';
    const search = document.getElementById('searchInput');
    if (search) search.value = '';
    const clearButton = document.getElementById('clearSearch');
    if (clearButton) clearButton.style.display = 'none';
    setActiveCategory('all');
  });

  document.getElementById('applyPromoBtn')?.addEventListener('click', applyPromoCode);
  document.getElementById('promoInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyPromoCode();
    }
  });
  document.getElementById('checkoutPromoInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCheckoutPromoCode();
    }
  });
  document.getElementById('checkoutBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutModal')?.addEventListener('click', closeCheckoutModal);

  document.getElementById('closeProductModal')?.addEventListener('click', closeProductModal);
  document.getElementById('productModalOverlay')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeProductModal();
  });

  document.getElementById('checkoutModalOverlay')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeCheckoutModal();
  });

  document.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('[data-action]');
    if (!actionTarget) return;

    const action = actionTarget.dataset.action;
    const id = actionTarget.dataset.id;

    if (action === 'increase-qty') updateQuantity(id, 1);
    if (action === 'decrease-qty') updateQuantity(id, -1);
    if (action === 'remove-item') removeFromCart(id);
  });

  document.getElementById('successModalOverlay')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeSuccessModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProductModal();
      closeCheckoutModal();
      closeSuccessModal();
      closeCart();
    }
  });

  // Installment Partner Pills Selection
  document.querySelectorAll('.inst-partner-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.inst-partner-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Enable smooth mouse drag-to-scroll, wheel scroll & nav arrows for category pills
  initCategoryDragScroll();
}

function initCategoryDragScroll() {
  const container = document.getElementById('filterCategories');
  const wrapper = document.getElementById('filterCategoriesContainer');
  const btnLeft = document.getElementById('catNavLeft');
  const btnRight = document.getElementById('catNavRight');
  if (!container) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  window._isCategoryDragging = false;
  const DRAG_THRESHOLD = 8; // Only enter drag mode if pointer moves > 8px

  function updateArrows() {
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const canLeft = container.scrollLeft > 6;
    const canRight = container.scrollLeft < maxScroll - 6;

    if (btnLeft) btnLeft.classList.toggle('visible', canLeft);
    if (btnRight) btnRight.classList.toggle('visible', canRight);
    if (wrapper) {
      wrapper.classList.toggle('can-scroll-left', canLeft);
      wrapper.classList.toggle('can-scroll-right', canRight);
    }
  }

  // Mouse Drag-to-Scroll (only with primary button)
  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDown = true;
    window._isCategoryDragging = false;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove('is-dragging');
    if (window._isCategoryDragging) {
      setTimeout(() => {
        window._isCategoryDragging = false;
      }, 80);
    }
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;

    if (!window._isCategoryDragging && Math.abs(walk) > DRAG_THRESHOLD) {
      window._isCategoryDragging = true;
      container.classList.add('is-dragging');
    }

    if (window._isCategoryDragging) {
      e.preventDefault();
      container.scrollLeft = scrollLeft - walk;
      updateArrows();
    }
  });

  // Convert mouse wheel on categories to horizontal scroll
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 0.9;
      updateArrows();
    }
  }, { passive: false });

  // Update on scroll & resize
  container.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);

  // Left & Right arrow buttons
  btnLeft?.addEventListener('click', (e) => {
    e.preventDefault();
    container.scrollBy({ left: -220, behavior: 'smooth' });
    setTimeout(updateArrows, 320);
  });

  btnRight?.addEventListener('click', (e) => {
    e.preventDefault();
    container.scrollBy({ left: 220, behavior: 'smooth' });
    setTimeout(updateArrows, 320);
  });

  setTimeout(updateArrows, 200);
}

function dismissAnnouncement() {
  const bar = document.getElementById('announcementBar');
  const nav = document.getElementById('navbar');
  if (!bar) return;

  bar.classList.add('closed');
  if (nav) nav.classList.add('at-top');
  document.body.classList.add('no-announcement');
  document.documentElement.style.setProperty('--announcement-top', '0px');

  try {
    sessionStorage.setItem('pz_announcement_closed', 'true');
  } catch (e) {
    // ignore
  }

  setTimeout(() => {
    bar.style.display = 'none';
  }, 400);
}

function updateAnnouncementHeight() {
  const bar = document.getElementById('announcementBar');
  if (bar && !bar.classList.contains('closed') && bar.style.display !== 'none') {
    if (window.innerWidth <= 768) {
      document.documentElement.style.setProperty('--announcement-top', '0px');
      return;
    }
    const h = bar.offsetHeight;
    if (h > 0) {
      document.documentElement.style.setProperty('--announcement-top', `${h}px`);
    }
  } else {
    document.documentElement.style.setProperty('--announcement-top', '0px');
  }
}

function initAnnouncement() {
  try {
    if (sessionStorage.getItem('pz_announcement_closed') === 'true') {
      const bar = document.getElementById('announcementBar');
      const nav = document.getElementById('navbar');
      if (bar) {
        bar.classList.add('closed');
        bar.style.display = 'none';
      }
      if (nav) nav.classList.add('at-top');
      document.body.classList.add('no-announcement');
      document.documentElement.style.setProperty('--announcement-top', '0px');
      return;
    }
  } catch (e) {
    // ignore
  }

  updateAnnouncementHeight();
  window.addEventListener('resize', updateAnnouncementHeight);
}

window.openProductModal = openProductModal;
window.filterByCategory = filterByCategory;
window.setActiveCategory = setActiveCategory;
window.addToCart = addToCart;
window.closeSuccessModal = closeSuccessModal;
window.togglePaymentView = togglePaymentView;
window.processOrder = processOrder;
window.closeProductModal = closeProductModal;
window.dismissAnnouncement = dismissAnnouncement;
window.buyNowFromModal = buyNowFromModal;
window.addToCartFromModal = addToCartFromModal;
window.selectModalColor = selectModalColor;
window.selectModalStorage = selectModalStorage;
window.selectPaymentMethod = selectPaymentMethod;
window.copyText = copyText;
window.downloadMockQR = downloadMockQR;
window.confirmPaymentStep = confirmPaymentStep;
window.handleSlipSelected = handleSlipSelected;
window.removeSlip = removeSlip;
window.checkFormValidity = checkFormValidity;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.copyOrderCode = copyOrderCode;
window.copyOrderDetails = copyOrderDetails;
window.printReceipt = printReceipt;
window.sendTelegramOrderAlert = sendTelegramOrderAlert;
window.applyCheckoutPromoCode = applyCheckoutPromoCode;
window.quickFillPromo = quickFillPromo;
window.removeCheckoutPromoCode = removeCheckoutPromoCode;
window.syncPromoUI = syncPromoUI;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  root.setAttribute('data-theme', state.theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.classList.toggle('light-mode', state.theme === 'light');
  }

  initAnnouncement();
  applyLanguage(state.lang);
  renderProducts();
  updateCart();
  initEvents();
  togglePaymentView('khqr');
});

