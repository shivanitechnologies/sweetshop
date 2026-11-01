/**
 * SweetBliss - Sweet Shop & Traditional Snacks Store
 * Master JavaScript Application (app.js)
 * Covers: Dark Mode, RTL, Navigation, Cart System, Search & Filters, 
 * Modals, Toasts, Countdown, FAQs, Auth validation, and Dashboard.
 */

// ==========================================
// 1. PRODUCTS DATASET (MITHAI & SNACKS)
// Categories: 'sweets', 'savories', 'dryfruits', 'giftboxes'
// ==========================================
const SWEETBLISS_PRODUCTS = [
  {
    id: 'sb-01',
    name: 'Royal Kaju Katli (Silver Leaf)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 320,
    prices: { '250g': 320, '500g': 620, '1kg': 1180 },
    image: 'assets/images/royal_kaju_katli_1793441959061.jpg',
    fallbackImage: 'assets/images/royal_kaju_katli_1793441959061.jpg',
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    description: 'Crafted from premium Goan cashews, simmered to perfection, and garnished with delicate edible silver leaf (vark). Melt-in-the-mouth texture.',
    ingredients: 'Cashew nuts, Cane sugar, Purified water, Cardamom, Edible silver foil.',
    allergens: 'Tree nuts (Cashew). Gluten-free.',
    shelfLife: '20 Days at ambient cool temperature.',
    isGhee: false,
    isVegan: true
  },
  {
    id: 'sb-02',
    name: 'Pure Desi Ghee Gulab Jamun',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 240,
    prices: { '250g': 240, '500g': 460, '1kg': 880 },
    image: 'assets/images/desi_ghee_gulab_jamun_1793441980923.jpg',
    fallbackImage: 'assets/images/desi_ghee_gulab_jamun_1793441980923.jpg',
    rating: 4.8,
    reviews: 218,
    badge: '100% Desi Ghee',
    badgeType: 'badge-ghee',
    description: 'Golden fried khoya dumplings infused with green cardamom, submerged in aromatic rose-saffron syrup. Best served warm.',
    ingredients: 'Fresh Khoya (Mawa), Milk, A2 Cow Ghee, Saffron, Rose water, Green cardamom, Sugar.',
    allergens: 'Dairy. May contain traces of gluten.',
    shelfLife: '12 Days refrigerated.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-03',
    name: 'Kashmiri Saffron Motichoor Ladoo',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 220,
    prices: { '250g': 220, '500g': 420, '1kg': 800 },
    image: 'assets/images/kashmiri_saffron_motichoor_ladoo_1793442005055.jpg',
    fallbackImage: 'assets/images/kashmiri_saffron_motichoor_ladoo_1793442005055.jpg',
    rating: 4.9,
    reviews: 310,
    badge: 'Pure Desi Ghee',
    badgeType: 'badge-ghee',
    description: 'Microscopic gram flour pearls slow-fried in pure desi ghee, soaked in saffron syrup, and blended with melon seeds and pistachio slivers.',
    ingredients: 'Gram flour (Besan), Cow Ghee, Saffron, Magaz (Melon seeds), Cardamom, Pistachio.',
    allergens: 'Nuts (Pistachio), Dairy (Ghee).',
    shelfLife: '15 Days in a cool, dry place.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-04',
    name: 'Spongy Kolkata Rasgulla (Chenna)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 200,
    prices: { '250g': 200, '500g': 380, '1kg': 720 },
    image: 'assets/images/kolkata_spongy_rasgulla_1793442162817.jpg',
    fallbackImage: 'assets/images/kolkata_spongy_rasgulla_1793442162817.jpg',
    rating: 4.7,
    reviews: 98,
    badge: 'Authentic Bengal',
    badgeType: 'badge-tag bg-blue-100 text-blue-900',
    description: 'Handcrafted fresh cow milk cottage cheese (chenna) spheres gently cooked in a light, fragrant sugar syrup. Ultra-tender and juicy.',
    ingredients: 'Fresh Cow Milk Chenna, Purified Cane Sugar, Cardamom essence, Rose water.',
    allergens: 'Dairy.',
    shelfLife: '7 Days refrigerated.',
    isGhee: false,
    isVegan: false
  },
  {
    id: 'sb-05',
    name: 'Crispy Saffron Jalebi (Pack of 12)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 190,
    prices: { '250g': 190, '500g': 360, '1kg': 680 },
    image: 'assets/images/crispy_saffron_jalebi_1793442136428.jpg',
    fallbackImage: 'assets/images/crispy_saffron_jalebi_1793442136428.jpg',
    rating: 4.8,
    reviews: 175,
    badge: 'Fresh Daily',
    badgeType: 'badge-bestseller',
    description: 'Crisp spiral ribbons fried in pure ghee, steeped in hot saffron sugar syrup with subtle tang and cardamom notes.',
    ingredients: 'Wheat flour, Saffron strands, Desi Ghee, Sugar syrup, Lemon juice, Cardamom.',
    allergens: 'Gluten, Dairy.',
    shelfLife: '3 Days. Best consumed fresh.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-06',
    name: 'Mysore Pak (Ghee Melt)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 280,
    prices: { '250g': 280, '500g': 540, '1kg': 1020 },
    image: 'assets/images/mysore_pak_ghee_1793444408147.jpg',
    fallbackImage: 'assets/images/mysore_pak_ghee_1793444408147.jpg',
    rating: 4.9,
    reviews: 84,
    badge: 'Royal Heritage',
    badgeType: 'badge-ghee',
    description: 'The legendary royal recipe from the palaces of Mysore. Soft, porous, ghee-dripping delight that melts on the tongue.',
    ingredients: 'Roasted Gram Flour, Excessive A2 Cow Ghee, Sugar, Cardamom essence.',
    allergens: 'Dairy.',
    shelfLife: '25 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-07',
    name: 'Crispy Cocktail Samosa (Box of 8)',
    category: 'savories',
    categoryName: 'Traditional Savories',
    basePrice: 160,
    prices: { '250g': 160, '500g': 300, '1kg': 580 },
    image: 'assets/images/crispy_cocktail_samosa_1793442099403.jpg',
    fallbackImage: 'assets/images/crispy_cocktail_samosa_1793442099403.jpg',
    rating: 4.7,
    reviews: 162,
    badge: 'Crunchy Savory',
    badgeType: 'badge-tag bg-amber-100 text-amber-900',
    description: 'Golden flaky pyramid pastries packed with spiced potatoes, green peas, roasted cashews, and whole roasted cumin seeds.',
    ingredients: 'Refined wheat flour, Potatoes, Green peas, Spices, Hing, Cumin, Mustard oil/Sunflower oil.',
    allergens: 'Gluten.',
    shelfLife: 'Best eaten fresh or re-crisped in oven/air-fryer.',
    isGhee: false,
    isVegan: true
  },
  {
    id: 'sb-08',
    name: 'Royal Ratlami Sev & Bhujia Combo',
    category: 'savories',
    categoryName: 'Traditional Savories',
    basePrice: 150,
    prices: { '250g': 150, '500g': 280, '1kg': 540 },
    image: 'assets/images/ratlami_sev_bhujia_1793445838005.jpg',
    fallbackImage: 'assets/images/ratlami_sev_bhujia_1793445838005.jpg',
    rating: 4.8,
    reviews: 119,
    badge: 'Spicy Crunch',
    badgeType: 'badge-tag bg-red-100 text-red-900',
    description: 'Authentic clove and black pepper infused gram flour crispy noodles, blended with delicate moth-bean crunchy bhujia.',
    ingredients: 'Gram flour, Moth flour, Black pepper, Clove, Asafoetida (Hing), Salt, Cold-pressed groundnut oil.',
    allergens: 'Peanut oil.',
    shelfLife: '60 Days.',
    isGhee: false,
    isVegan: true
  },
  {
    id: 'sb-09',
    name: 'Anjeer & Dry Fruit Sugar-Free Barfi',
    category: 'dryfruits',
    categoryName: 'Dry Fruits & Nuts',
    basePrice: 380,
    prices: { '250g': 380, '500g': 740, '1kg': 1420 },
    image: 'assets/images/anjeer_barfi.jpg',
    fallbackImage: 'assets/images/anjeer_barfi.jpg',
    rating: 4.9,
    reviews: 73,
    badge: 'Zero Sugar Added',
    badgeType: 'badge-vegan',
    description: 'Sweetened naturally with premium Afghani wild figs and Medjool dates, combined with toasted almonds, pistachios, and cashews.',
    ingredients: 'Sun-dried Figs (Anjeer), Dates, Almonds, Pistachios, Cashews, Cardamom, Poppy seeds.',
    allergens: 'Tree nuts.',
    shelfLife: '30 Days.',
    isGhee: false,
    isVegan: true
  },
  {
    id: 'sb-10',
    name: 'Emperor Royal Festive Gifting Hamper',
    category: 'giftboxes',
    categoryName: 'Gift Boxes & Hampers',
    basePrice: 1450,
    prices: { '250g': 1450, '500g': 2250, '1kg': 3800 },
    image: 'assets/images/imperial_velvet_shagun_trunk_1793442028061.jpg',
    fallbackImage: 'assets/images/imperial_velvet_shagun_trunk_1793442028061.jpg',
    rating: 5.0,
    reviews: 58,
    badge: 'Luxury Velvet Box',
    badgeType: 'badge-bestseller',
    description: 'An opulent handcrafted velvet and gold-embossed treasure box containing Kaju Katli, Pista Roll, Roasted Cashews, Afghani Raisins, and Saffron Motichoor.',
    ingredients: 'Assorted premium mithai, roasted dry fruits, organic saffron vial.',
    allergens: 'Tree nuts, Dairy.',
    shelfLife: '20 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-11',
    name: 'Crispy Butter Murukku & Chakli',
    category: 'savories',
    categoryName: 'Traditional Savories',
    basePrice: 140,
    prices: { '250g': 140, '500g': 260, '1kg': 500 },
    image: 'assets/images/crispy_butter_murukku_1793445861561.jpg',
    fallbackImage: 'assets/images/crispy_butter_murukku_1793445861561.jpg',
    rating: 4.7,
    reviews: 95,
    badge: 'Crispy Savory',
    badgeType: 'badge-tag bg-amber-100 text-amber-900',
    description: 'Traditional spiral crunch made from aged rice flour, sesame seeds, cumin, and country butter. Irresistible evening tea companion.',
    ingredients: 'Rice flour, Urad dal, Country butter, White sesame, Ajwain, Sea salt, Cold pressed oil.',
    allergens: 'Dairy, Sesame.',
    shelfLife: '45 Days.',
    isGhee: false,
    isVegan: false
  },
  {
    id: 'sb-12',
    name: 'Khoya Peda (Mathura Style)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 210,
    prices: { '250g': 210, '500g': 400, '1kg': 760 },
    image: 'assets/images/khoya_peda.jpg',
    fallbackImage: 'assets/images/khoya_peda.jpg',
    rating: 4.8,
    reviews: 134,
    badge: 'Desi Ghee',
    badgeType: 'badge-ghee',
    description: 'Slow-caramelized milk solids infused with freshly cracked green cardamom, nutmeg, and dusted with powdered boora sugar.',
    ingredients: 'Fresh Buffalo Milk Mawa, Unrefined Boora Sugar, Nutmeg, Cardamom.',
    allergens: 'Dairy.',
    shelfLife: '15 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-13',
    name: 'Slow-Roasted Jumbo Salted Cashews',
    category: 'dryfruits',
    categoryName: 'Dry Fruits & Nuts',
    basePrice: 340,
    prices: { '250g': 340, '500g': 660, '1kg': 1280 },
    image: 'assets/images/roasted_cashews.jpg',
    fallbackImage: 'assets/images/roasted_cashews.jpg',
    rating: 4.9,
    reviews: 82,
    badge: 'Goan Jumbo W-210',
    badgeType: 'badge-tag bg-amber-100 text-amber-900',
    description: 'Hand-selected W-210 grade whole Goan cashews, lightly slow-roasted in country ghee with pink Himalayan rock salt.',
    ingredients: 'Goan Cashews, Cow Ghee, Himalayan Rock Salt.',
    allergens: 'Tree nuts.',
    shelfLife: '90 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-14',
    name: 'Heritage 4-in-1 Festive Sweet Box',
    category: 'giftboxes',
    categoryName: 'Gift Boxes & Hampers',
    basePrice: 899,
    prices: { '250g': 899, '500g': 1450, '1kg': 2650 },
    image: 'assets/images/festive_sweet_box.jpg',
    fallbackImage: 'assets/images/festive_sweet_box.jpg',
    rating: 5.0,
    reviews: 64,
    badge: 'Festival Special',
    badgeType: 'badge-bestseller',
    description: 'Gold-embossed festive box with four quadrants: Kaju Katli, Motichoor Ladoo, Gulab Jamun, and Roasted Spicy Sev.',
    ingredients: 'Assorted pure ghee sweets and savories.',
    allergens: 'Tree nuts, Dairy, Gluten.',
    shelfLife: '15 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-15',
    name: 'Shahi Mawa & Coconut Gujiya (Festival Special)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 260,
    prices: { '250g': 260, '500g': 500, '1kg': 960 },
    image: 'assets/images/shahi_mawa_gujiya_1793444457260.jpg',
    fallbackImage: 'assets/images/shahi_mawa_gujiya_1793444457260.jpg',
    rating: 4.9,
    reviews: 112,
    badge: 'Holi & Diwali Special',
    badgeType: 'badge-bestseller',
    description: 'Crisp golden flaky pastry slow-fried in cow ghee, stuffed with caramelized buffalo mawa, roasted coconut, pistachios and green cardamom.',
    ingredients: 'Mawa (Khoya), Fine flour, A2 Cow Ghee, Dry Coconut, Pistachio, Cardamom, Cane sugar.',
    allergens: 'Dairy, Tree nuts, Gluten.',
    shelfLife: '15 Days in a cool dry place.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-16',
    name: 'Kesar Ukadiche Modak (Puja Prasad)',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 280,
    prices: { '250g': 280, '500g': 540, '1kg': 1020 },
    image: 'assets/images/kesar_ukadiche_modak_1793444499657.jpg',
    fallbackImage: 'assets/images/kesar_ukadiche_modak_1793444499657.jpg',
    rating: 5.0,
    reviews: 89,
    badge: 'Sacred Prasad',
    badgeType: 'badge-ghee',
    description: 'Steamed aromatic rice flour dumplings filled with freshly grated coconut, organic jaggery, nutmeg, and Kashmiri kesar.',
    ingredients: 'Fragrant Rice Flour, Grated Fresh Coconut, Organic Jaggery, Kashmiri Saffron, Cardamom, Nutmeg, Cow Ghee.',
    allergens: 'Dairy. Gluten-free.',
    shelfLife: '5 Days refrigerated.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-17',
    name: 'Royal Malai Ghevar with Silver Vark',
    category: 'sweets',
    categoryName: 'Traditional Sweets',
    basePrice: 350,
    prices: { '250g': 350, '500g': 680, '1kg': 1300 },
    image: 'assets/images/royal_malai_ghevar_1793442193024.jpg',
    fallbackImage: 'assets/images/royal_malai_ghevar_1793442193024.jpg',
    rating: 4.9,
    reviews: 145,
    badge: 'Teej & Rakhi Pride',
    badgeType: 'badge-bestseller',
    description: 'Traditional Rajasthani honeycomb disc soaked in saffron syrup, layered with thick condensed malai rabri and crushed pistachios.',
    ingredients: 'Wheat Flour, Desi Cow Ghee, Saffron, Fresh Milk Rabri, Pistachios, Almonds, Edible Silver Leaf.',
    allergens: 'Gluten, Dairy, Tree nuts.',
    shelfLife: '7 Days refrigerated.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-18',
    name: 'The Royal Velvet Wedding Shagun Hamper',
    category: 'giftboxes',
    categoryName: 'Gift Boxes & Hampers',
    basePrice: 1850,
    prices: { '250g': 1850, '500g': 2850, '1kg': 4800 },
    image: 'assets/images/imperial_velvet_shagun_trunk_1793442028061.jpg',
    fallbackImage: 'assets/images/imperial_velvet_shagun_trunk_1793442028061.jpg',
    rating: 5.0,
    reviews: 73,
    badge: 'Wedding Keepsake',
    badgeType: 'badge-bestseller',
    description: 'Opulent hand-stitched velvet keepsake trunk with antique brass clasp, custom gold foil couple monogram, containing 4 curated signature sweets and slow-roasted dry fruits.',
    ingredients: 'Assorted pure ghee sweets, roasted cashews, Afghani almonds, saffron vial.',
    allergens: 'Tree nuts, Dairy, Gluten.',
    shelfLife: '20 Days.',
    isGhee: true,
    isVegan: false
  },
  {
    id: 'sb-19',
    name: 'Curated Wedding Tasting Sample Box (5 Delicacies)',
    category: 'giftboxes',
    categoryName: 'Gift Boxes & Hampers',
    basePrice: 299,
    prices: { '250g': 299, '500g': 599, '1kg': 999 },
    image: 'assets/images/tasting_sample_box.jpg',
    fallbackImage: 'assets/images/tasting_sample_box.jpg',
    rating: 5.0,
    reviews: 120,
    badge: 'Taste Before Ordering',
    badgeType: 'badge-tag bg-emerald-100 text-emerald-900',
    description: 'Doorstep tasting sample box featuring mini portions of our 5 signature wedding sweets. Cost fully adjusted against final bulk wedding orders.',
    ingredients: 'Kaju Katli, Saffron Motichoor, Ghee Mysore Pak, Anjeer Barfi, Jumbo Salted Cashews.',
    allergens: 'Tree nuts, Dairy.',
    shelfLife: '15 Days.',
    isGhee: true,
    isVegan: false
  }
];

// ==========================================
// 2. GLOBAL STATE & LOCALSTORAGE HELPERS
// ==========================================
const AppState = {
  theme: localStorage.getItem('sweetbliss_theme') || 'light',
  direction: localStorage.getItem('sweetbliss_dir') || 'ltr',
  cart: JSON.parse(localStorage.getItem('sweetbliss_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('sweetbliss_wishlist') || '[]'),

  saveCart() {
    localStorage.setItem('sweetbliss_cart', JSON.stringify(this.cart));
    this.updateCartBadges();
  },
  saveWishlist() {
    localStorage.setItem('sweetbliss_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  },
  updateCartBadges() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });
  },
  updateWishlistBadges() {
    const totalCount = this.wishlist.length;
    document.querySelectorAll('.wishlist-count-badge').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });
  }
};

// ==========================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'primary', duration = 3000) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  let typeClass = 'border-l-4 border-burgundy';
  let iconHtml = '<i class="fa-solid fa-circle-check text-burgundy"></i>';

  if (type === 'gold') {
    typeClass = 'toast-gold';
    iconHtml = '<i class="fa-solid fa-star text-gold"></i>';
  } else if (type === 'success') {
    typeClass = 'toast-success';
    iconHtml = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';
  } else if (type === 'error') {
    iconHtml = '<i class="fa-solid fa-circle-exclamation text-rose-500"></i>';
  }

  toast.className = `toast-item ${typeClass}`;
  toast.innerHTML = `
    <div class="text-lg">${iconHtml}</div>
    <div class="flex-1 text-sm font-medium leading-snug">${message}</div>
    <button class="text-neutral-400 hover:text-neutral-600 transition" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark text-xs"></i>
    </button>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================
// 4. THEME & RTL MANAGEMENT
// ==========================================
function initThemeAndRTL() {
  // Apply Theme
  if (AppState.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeButtons();

  // Apply Direction
  document.documentElement.setAttribute('dir', AppState.direction);
  updateRTLButtons();
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  AppState.theme = isDark ? 'dark' : 'light';
  localStorage.setItem('sweetbliss_theme', AppState.theme);
  updateThemeButtons();
  showToast(isDark ? 'Dark mode activated' : 'Light mode activated', 'gold', 2000);
}

function updateThemeButtons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun text-amber-400"></i>'
      : '<i class="fa-solid fa-moon text-burgundy dark:text-gold"></i>';
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

function toggleRTL() {
  const current = document.documentElement.getAttribute('dir') || 'ltr';
  const newDir = current === 'rtl' ? 'ltr' : 'rtl';
  document.documentElement.setAttribute('dir', newDir);
  AppState.direction = newDir;
  localStorage.setItem('sweetbliss_dir', newDir);
  updateRTLButtons();
  showToast(`Switched layout to ${newDir.toUpperCase()}`, 'primary', 2000);
}

function updateRTLButtons() {
  const current = document.documentElement.getAttribute('dir') || 'ltr';
  document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
    btn.textContent = current === 'rtl' ? 'LTR' : 'RTL';
    btn.setAttribute('title', current === 'rtl' ? 'Switch to Left to Right' : 'Switch to Right to Left');
  });
}

// ==========================================
// 5. SHOPPING CART LOGIC & DRAWER
// ==========================================
function triggerCartBounce() {
  document.querySelectorAll('.cart-count-badge, header button[onclick="openCartDrawer()"]').forEach(el => {
    el.classList.remove('animate-cart-bounce');
    void el.offsetWidth;
    el.classList.add('animate-cart-bounce');
  });
}

function addToCart(productId, weight = '250g', quantity = 1, triggerBtn = null) {
  const product = SWEETBLISS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const price = product.prices[weight] || product.basePrice;
  const existingIndex = AppState.cart.findIndex(
    item => item.id === productId && item.weight === weight
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      weight: weight,
      price: price,
      quantity: quantity
    });
  }

  AppState.saveCart();
  renderCartDrawer();
  triggerCartBounce();

  // Button Morph Feedback
  if (triggerBtn) {
    const originalText = triggerBtn.innerHTML;
    triggerBtn.innerHTML = '<i class="fa-solid fa-check text-[10px] mr-1"></i> Added!';
    triggerBtn.classList.add('btn-added-feedback');
    setTimeout(() => {
      triggerBtn.innerHTML = originalText;
      triggerBtn.classList.remove('btn-added-feedback');
    }, 1200);
  }

  openCartDrawer();
  showToast(`Added ${quantity}x ${product.name} (${weight}) to your bag!`, 'success');
}

function updateCartQuantity(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
    showToast('Item removed from cart', 'primary', 2000);
  }
  AppState.saveCart();
  renderCartDrawer();
}

function removeFromCart(index) {
  if (!AppState.cart[index]) return;
  const item = AppState.cart[index];
  AppState.cart.splice(index, 1);
  AppState.saveCart();
  renderCartDrawer();
  showToast(`Removed ${item.name} from cart`, 'primary', 2000);
}

function getCartSubtotal() {
  return AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================
// WISHLIST DRAWER (ROYAL FAVORITES)
// ==========================================
function injectSharedWishlistDrawer() {
  if (document.getElementById('wishlistDrawer')) return;

  const drawerMarkup = `
    <div id="wishlistDrawer" class="wishlist-drawer-container">
      <div class="wishlist-backdrop" onclick="closeWishlistDrawer()"></div>
      <div class="wishlist-drawer-content flex flex-col h-full bg-white dark:bg-[#1C1819] text-neutral-800 dark:text-neutral-100 shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-burgundy/10 dark:bg-gold/20 text-burgundy dark:text-gold flex items-center justify-center">
              <i class="fa-solid fa-heart"></i>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold">Saved Delicacies</h3>
              <p class="text-[11px] text-neutral-500 font-normal"><span id="wishlistHeaderCount">0</span> favorites saved</p>
            </div>
          </div>
          <button onclick="closeWishlistDrawer()" class="w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500 transition cursor-pointer" aria-label="Close Wishlist">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Wishlist Items List -->
        <div class="flex-1 overflow-y-auto px-5 py-2 divide-y divide-neutral-100 dark:divide-neutral-800" id="wishlistItemsContainer">
          <!-- Dynamically populated -->
        </div>

        <!-- Empty Wishlist State -->
        <div id="wishlistEmptyState" class="hidden flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div class="w-20 h-20 rounded-full bg-amber-50 dark:bg-neutral-800 flex items-center justify-center text-burgundy dark:text-gold text-3xl mb-4">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h4 class="text-lg font-bold mb-1">Your wishlist is empty</h4>
          <p class="text-xs text-neutral-500 max-w-xs mb-6">Tap the heart icon on any mithai, namkeen, or gift box to save it here for later.</p>
          <a href="services.html" onclick="closeWishlistDrawer()" class="btn-primary text-xs py-2.5 px-6 font-bold rounded-full">
            Browse Delicacies
          </a>
        </div>

        <!-- Footer Actions -->
        <div id="wishlistFooter" class="p-4 sm:p-5 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-2.5">
          <button onclick="moveAllWishlistToCart()" class="w-full bg-burgundy hover:bg-burgundy-800 text-white font-bold py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md cursor-pointer">
            <i class="fa-solid fa-bag-shopping text-gold"></i>
            <span>Add All to Sweet Bag</span>
          </button>
          <button onclick="clearWishlist()" class="w-full text-xs font-semibold text-neutral-500 hover:text-burgundy dark:hover:text-gold py-1 text-center transition cursor-pointer">
            Clear All Favorites
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerMarkup);
}

function openWishlistDrawer() {
  injectSharedWishlistDrawer();
  const drawer = document.getElementById('wishlistDrawer');
  if (drawer) {
    renderWishlistDrawer();
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsContainer');
  const emptyState = document.getElementById('wishlistEmptyState');
  const footer = document.getElementById('wishlistFooter');
  const headerCount = document.getElementById('wishlistHeaderCount');
  if (!container) return;

  const savedIds = AppState.wishlist || [];
  if (headerCount) headerCount.textContent = savedIds.length;

  if (savedIds.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    if (footer) footer.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  if (emptyState) emptyState.classList.add('hidden');
  if (footer) footer.classList.remove('hidden');

  container.innerHTML = savedIds.map(id => {
    const prod = SWEETBLISS_PRODUCTS.find(p => p.id === id);
    if (!prod) return '';
    const weightLabel = prod.category === 'giftboxes' ? 'Box' : '250g';
    return `
      <div class="py-3 flex items-center gap-3">
        <img src="${prod.image}" alt="${prod.name}" class="w-14 h-14 rounded-xl object-cover border border-amber-100 dark:border-neutral-700 shrink-0 shadow-sm" />
        <div class="min-w-0 flex-1">
          <h4 class="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate">${prod.name}</h4>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-xs font-bold text-burgundy dark:text-gold">₹${prod.basePrice}</span>
            <span class="text-[10px] text-neutral-400">/${weightLabel}</span>
          </div>
          <div class="flex items-center gap-3 mt-1.5">
            <button onclick="moveWishlistItemToCart('${prod.id}')" class="px-2.5 py-1 rounded-full bg-burgundy/10 hover:bg-burgundy text-burgundy hover:text-white dark:bg-gold/15 dark:hover:bg-gold dark:text-gold dark:hover:text-neutral-900 text-[10.5px] font-bold transition flex items-center gap-1 cursor-pointer">
              <i class="fa-solid fa-bag-shopping text-[9px]"></i> Add to Bag
            </button>
            <button onclick="removeFromWishlist('${prod.id}')" class="text-[10.5px] text-neutral-400 hover:text-rose-500 font-medium transition cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function moveWishlistItemToCart(productId) {
  addToCart(productId, '250g', 1);
  removeFromWishlist(productId);
  showToast('Moved delicacy to your Bag!', 'gold', 2500);
}

function moveAllWishlistToCart() {
  const savedIds = [...(AppState.wishlist || [])];
  if (savedIds.length === 0) return;
  savedIds.forEach(id => {
    addToCart(id, '250g', 1);
  });
  AppState.wishlist = [];
  AppState.saveWishlist();
  renderWishlistDrawer();
  closeWishlistDrawer();
  openCartDrawer();
  showToast('All saved delicacies added to your Bag!', 'gold', 3000);
}

function removeFromWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    AppState.saveWishlist();
    renderWishlistDrawer();
    // Update any heart icons on active cards
    document.querySelectorAll(`[onclick*="toggleWishlist('${productId}'"]`).forEach(b => {
      b.classList.remove('text-rose-500');
    });
  }
}

function clearWishlist() {
  AppState.wishlist = [];
  AppState.saveWishlist();
  renderWishlistDrawer();
  showToast('Wishlist cleared', 'burgundy', 2000);
}

window.injectSharedWishlistDrawer = injectSharedWishlistDrawer;
window.openWishlistDrawer = openWishlistDrawer;
window.closeWishlistDrawer = closeWishlistDrawer;
window.renderWishlistDrawer = renderWishlistDrawer;
window.moveWishlistItemToCart = moveWishlistItemToCart;
window.moveAllWishlistToCart = moveAllWishlistToCart;
window.removeFromWishlist = removeFromWishlist;
window.clearWishlist = clearWishlist;

function renderCartDrawer() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDeliveryEl = document.getElementById('cartDelivery');
  const cartGrandTotalEl = document.getElementById('cartGrandTotal');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartFooter = document.getElementById('cartFooter');

  if (!cartItemsContainer) return;

  if (AppState.cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    if (cartEmptyState) cartEmptyState.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.add('hidden');
    return;
  }

  if (cartEmptyState) cartEmptyState.classList.add('hidden');
  if (cartFooter) cartFooter.classList.remove('hidden');

  const subtotal = getCartSubtotal();
  const delivery = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal + delivery;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (cartDeliveryEl) cartDeliveryEl.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
  if (cartGrandTotalEl) cartGrandTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  cartItemsContainer.innerHTML = AppState.cart.map((item, index) => `
    <div class="flex items-center gap-4 py-3.5 border-b border-neutral-100 dark:border-neutral-800">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-amber-100 dark:border-neutral-700" />
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-semibold text-neutral-800 dark:text-neutral-100 truncate">${item.name}</h4>
        <div class="flex items-center gap-2 mt-0.5">
          <span class="text-xs bg-amber-50 dark:bg-neutral-800 text-amber-800 dark:text-amber-400 font-medium px-2 py-0.5 rounded">${item.weight}</span>
          <span class="text-xs font-semibold text-burgundy dark:text-gold">₹${item.price}</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-800">
            <button onclick="updateCartQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold text-xs">-</button>
            <span class="w-7 text-center text-xs font-semibold text-neutral-800 dark:text-neutral-100">${item.quantity}</span>
            <button onclick="updateCartQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold text-xs">+</button>
          </div>
          <button onclick="removeFromCart(${index})" class="text-xs text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 font-medium flex items-center gap-1">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Injects the shared Cart Drawer into the page if not present
function injectSharedCartDrawer() {
  if (document.getElementById('cartDrawer')) return;

  const drawerMarkup = `
    <div id="cartDrawer" class="cart-drawer-container">
      <div class="cart-backdrop" onclick="closeCartDrawer()"></div>
      <div class="cart-drawer-content flex flex-col h-full bg-white dark:bg-[#1C1819] text-neutral-800 dark:text-neutral-100 shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-burgundy/10 text-burgundy dark:text-gold flex items-center justify-center">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <h3 class="text-lg font-bold">Your Sweet Bag</h3>
          </div>
          <button onclick="closeCartDrawer()" class="w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500 transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Free Delivery Tracker -->
        <div class="bg-amber-50 dark:bg-amber-950/40 px-5 py-2.5 border-b border-amber-100 dark:border-amber-900/50 flex items-center gap-2 text-xs text-amber-900 dark:text-amber-300">
          <i class="fa-solid fa-truck-fast text-gold"></i>
          <span>Free delivery across India on orders above <strong>₹999</strong>!</span>
        </div>

        <!-- Cart Items List -->
        <div class="flex-1 overflow-y-auto px-5 divide-y divide-neutral-100 dark:divide-neutral-800" id="cartItemsContainer">
          <!-- Dynamically populated -->
        </div>

        <!-- Empty Cart State -->
        <div id="cartEmptyState" class="hidden flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div class="w-20 h-20 rounded-full bg-amber-50 dark:bg-neutral-800 flex items-center justify-center text-gold text-3xl mb-4">
            <i class="fa-solid fa-cookie-bite"></i>
          </div>
          <h4 class="text-lg font-bold mb-1">Your bag is empty</h4>
          <p class="text-xs text-neutral-500 max-w-xs mb-6">Looks like you haven't indulged in our handcrafted sweets and snacks yet.</p>
          <a href="services.html" onclick="closeCartDrawer()" class="btn-primary text-xs py-2 px-5">
            Explore Mithai Collection
          </a>
        </div>

        <!-- Footer / Checkout -->
        <div id="cartFooter" class="p-5 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181415]">
          <div class="space-y-2 mb-4 text-sm">
            <div class="flex justify-between text-neutral-500 dark:text-neutral-400">
              <span>Subtotal</span>
              <span id="cartSubtotal" class="font-medium text-neutral-800 dark:text-neutral-200">₹0</span>
            </div>
            <div class="flex justify-between text-neutral-500 dark:text-neutral-400">
              <span>Packaging & Express Delivery</span>
              <span id="cartDelivery" class="font-medium text-emerald-600">FREE</span>
            </div>
            <div class="flex justify-between text-base font-bold text-neutral-900 dark:text-white pt-2 border-t border-neutral-200 dark:border-neutral-700">
              <span>Total Amount</span>
              <span id="cartGrandTotal" class="text-burgundy dark:text-gold">₹0</span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <a href="service-details.html" onclick="closeCartDrawer()" class="btn-outline text-xs text-center py-2.5">
              View Product
            </a>
            <button id="btnProceedToOrder" onclick="handleCheckoutSimulation(this)" class="btn-primary btn-proceed-order text-xs py-2.5 flex items-center justify-center gap-1.5 cursor-pointer">
              <span>Proceed to Order</span>
              <i class="fa-solid fa-arrow-right text-[10px] ml-0.5"></i>
            </button>
          </div>
          <p class="text-[11px] text-center text-neutral-400 dark:text-neutral-500 mt-3 flex items-center justify-center gap-1">
            <i class="fa-solid fa-shield-halved text-emerald-500"></i> 100% Secure Checkout & Fresh Ghee Guaranteed
          </p>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerMarkup);
  renderCartDrawer();
}

// ==========================================
// 5B. ROYAL ORDER CEREMONY MODAL & PREMIUM CHECKOUT
// ==========================================
let _orderRedirectTimer = null;
let _orderCountdownInterval = null;

function injectSharedOrderModal() {
  if (document.getElementById('royalOrderModal')) return;

  const modalMarkup = `
    <div id="royalOrderModal" class="royal-order-overlay" style="display: none;">
      <div class="royal-order-backdrop" onclick="closeRoyalOrderModal()"></div>
      <div class="royal-order-card relative z-10">
        <!-- Corner Gold Accents -->
        <span class="royal-corner royal-corner-tl"></span>
        <span class="royal-corner royal-corner-tr"></span>
        <span class="royal-corner royal-corner-bl"></span>
        <span class="royal-corner royal-corner-br"></span>

        <!-- Close button -->
        <button type="button" onclick="closeRoyalOrderModal()" class="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-gold hover:text-neutral-900 text-neutral-200 flex items-center justify-center transition cursor-pointer z-30" aria-label="Close Order Preview">
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>

        <!-- Royal Crest -->
        <div class="text-center pt-1 pb-2">
          <div class="royal-medallion-crest w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 via-gold to-amber-300 text-neutral-950 font-black flex items-center justify-center text-xl sm:text-2xl mx-auto shadow-2xl mb-1.5 border-2 border-amber-200">
            <i class="fa-solid fa-crown"></i>
          </div>
          <span class="text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-[0.2em] text-gold block mb-0.5">
            👑 SweetBliss Royal Halwai Concierge
          </span>
          <h3 class="text-base sm:text-lg font-extrabold text-white tracking-tight">
            Assembling Your Auspicious Order
          </h3>
          <p class="text-[10px] sm:text-[11px] text-amber-100/75 mt-0.5" id="royalDocketSubtitle">
            Docket #SB-8921 • Handcrafted in 100% Pure Desi Ghee
          </p>
        </div>

        <!-- Order Snapshot Card -->
        <div class="my-2.5 p-2.5 sm:p-3 rounded-2xl bg-black/40 border border-gold/30 backdrop-blur-md text-xs">
          <div class="flex items-center justify-between pb-1.5 border-b border-gold/20">
            <span class="text-neutral-300 text-[11px] sm:text-xs">Total Order Value:</span>
            <span id="royalOrderTotal" class="text-sm sm:text-base font-extrabold text-gold">₹0</span>
          </div>
          <div class="flex items-center justify-between pt-1.5 text-[10.5px] sm:text-[11px] text-neutral-400">
            <span id="royalOrderItemCount">0 Delicacies in Bag</span>
            <span class="text-emerald-400 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-truck-fast"></i> Express Safe Dispatch
            </span>
          </div>
          <div id="royalOrderItemsPreview" class="mt-2 pt-2 border-t border-white/10 text-[10.5px] sm:text-[11px] text-neutral-300 max-h-20 sm:max-h-24 overflow-y-auto divide-y divide-white/5 custom-scrollbar">
            <!-- Dynamically populated -->
          </div>
        </div>

        <!-- Live 3-Stage Halwai Verification Pipeline -->
        <div class="space-y-1.5 my-3">
          <div id="orderStep1" class="royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs">
            <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-[10px] shrink-0 font-bold step-icon">
              <i class="fa-solid fa-circle-notch fa-spin"></i>
            </div>
            <span class="step-text text-neutral-300 text-[11px] sm:text-[11.5px]">100% Pure Desi Ghee & Fresh Batch Verification</span>
          </div>

          <div id="orderStep2" class="royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs">
            <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 text-neutral-400 flex items-center justify-center text-[10px] shrink-0 font-bold step-icon">
              <i class="fa-solid fa-gift"></i>
            </div>
            <span class="step-text text-neutral-400 text-[11px] sm:text-[11.5px]">Airtight Keepsake Packaging & Gold Silk Ribbon Sealed</span>
          </div>

          <div id="orderStep3" class="royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs">
            <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 text-neutral-400 flex items-center justify-center text-[10px] shrink-0 font-bold step-icon">
              <i class="fa-solid fa-stamp"></i>
            </div>
            <span class="step-text text-neutral-400 text-[11px] sm:text-[11.5px]">Halwai Shagun Docket & VIP Concierge Routing</span>
          </div>
        </div>

        <!-- Shimmer Liquid Gold Progress Bar -->
        <div class="w-full bg-black/50 h-1.5 sm:h-2 rounded-full overflow-hidden border border-gold/30 mb-3 p-0.5">
          <div id="royalProgressBar" class="royal-progress-fill h-full rounded-full" style="width: 15%;"></div>
        </div>

        <!-- Actions / Fast-track Confirmation -->
        <div class="space-y-2 pt-0.5">
          <a id="royalWhatsappBtn" href="#" target="_blank"
            class="w-full py-2.5 sm:py-3 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition cursor-pointer">
            <i class="fa-brands fa-whatsapp text-sm sm:text-base"></i>
            <span>Instant WhatsApp VIP Checkout</span>
          </a>
          <button id="royalEnquiryBtn" onclick="proceedToContactEnquiry()"
            class="w-full py-2 sm:py-2.5 px-3.5 rounded-xl border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition cursor-pointer">
            <span>Proceed to Official Order Form</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>

        <!-- Auto-redirect countdown hint -->
        <p id="royalAutoRedirectText" class="text-[9.5px] sm:text-[10px] text-center text-amber-200/60 mt-2.5 flex items-center justify-center gap-1">
          <i class="fa-regular fa-clock text-[9px]"></i> Connecting to concierge desk in <span id="royalTimerSec">3</span>s...
        </p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalMarkup);
}

function closeRoyalOrderModal() {
  const modal = document.getElementById('royalOrderModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 350);
  }
  if (_orderRedirectTimer) clearTimeout(_orderRedirectTimer);
  if (_orderCountdownInterval) clearInterval(_orderCountdownInterval);

  // Restore button state
  const btn = document.getElementById('btnProceedToOrder');
  if (btn) {
    btn.disabled = false;
    btn.classList.remove('active-shimmer');
    btn.innerHTML = '<span>Proceed to Order</span> <i class="fa-solid fa-arrow-right text-[10px] ml-0.5"></i>';
  }
  const total = document.getElementById('cartGrandTotal');
  if (total) total.classList.remove('animate-gold-halo-text');
}

function proceedToContactEnquiry(docketId) {
  if (_orderRedirectTimer) clearTimeout(_orderRedirectTimer);
  if (_orderCountdownInterval) clearInterval(_orderCountdownInterval);
  const docket = docketId || ('SB-' + Math.floor(100000 + Math.random() * 900000));
  window.location.href = `contact.html?order=true&docket=${encodeURIComponent(docket)}`;
}

function handleCheckoutSimulation(btnEl) {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty! Please add some delicious sweets first.', 'error');
    return;
  }

  // 1. Interactive Button Feedback
  const btn = btnEl || document.getElementById('btnProceedToOrder');
  if (btn) {
    btn.disabled = true;
    btn.classList.add('active-shimmer');
    btn.innerHTML = '<i class="fa-solid fa-crown fa-beat text-gold mr-1"></i><span>Securing Order...</span>';
  }

  const grandTotalEl = document.getElementById('cartGrandTotal');
  if (grandTotalEl) {
    grandTotalEl.classList.add('animate-gold-halo-text');
  }

  // 2. Prepare Order Details & Modal
  injectSharedOrderModal();
  const modal = document.getElementById('royalOrderModal');
  if (!modal) {
    window.location.href = 'contact.html?order=true';
    return;
  }

  const docketNum = 'SB-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Set docket & summary in modal
  const docketSub = document.getElementById('royalDocketSubtitle');
  if (docketSub) {
    docketSub.textContent = `Docket #${docketNum} • Handcrafted in 100% Pure Desi Ghee`;
  }
  const totalDisplay = document.getElementById('royalOrderTotal');
  if (totalDisplay) {
    totalDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }
  const countDisplay = document.getElementById('royalOrderItemCount');
  if (countDisplay) {
    countDisplay.textContent = `${totalCount} Delicac${totalCount === 1 ? 'y' : 'ies'} in Bag`;
  }

  // Populate item breakdown preview
  const previewContainer = document.getElementById('royalOrderItemsPreview');
  if (previewContainer) {
    previewContainer.innerHTML = AppState.cart.map(item => `
      <div class="py-1 flex items-center justify-between gap-2">
        <span class="truncate max-w-[240px]">${item.name} (${item.unit || '250g'}) × ${item.quantity}</span>
        <span class="font-bold text-gold shrink-0">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
      </div>
    `).join('');
  }

  // Pre-configure WhatsApp Instant Checkout link
  const itemsText = AppState.cart.map(i => `• ${i.name} (${i.unit || '250g'}) x ${i.quantity} = ₹${i.price * i.quantity}`).join('%0A');
  const waMsg = `Namaste SweetBliss!%20I%20would%20like%20to%20confirm%20my%20order%20(Docket%20${docketNum}):%0A%0A${itemsText}%0A%0ATotal%20Amount:%20₹${subtotal}%0APlease%20confirm%20delivery%20details%20and%20dispatch%20time.`;
  const waBtn = document.getElementById('royalWhatsappBtn');
  if (waBtn) {
    waBtn.href = `https://wa.me/919876543210?text=${waMsg}`;
  }

  const enquiryBtn = document.getElementById('royalEnquiryBtn');
  if (enquiryBtn) {
    enquiryBtn.onclick = () => proceedToContactEnquiry(docketNum);
  }

  // Reset steps & progress
  const step1 = document.getElementById('orderStep1');
  const step2 = document.getElementById('orderStep2');
  const step3 = document.getElementById('orderStep3');
  const progressBar = document.getElementById('royalProgressBar');
  const timerSec = document.getElementById('royalTimerSec');

  if (step1) {
    step1.className = 'royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs';
    step1.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
  }
  if (step2) {
    step2.className = 'royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs';
    step2.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-gift"></i>';
  }
  if (step3) {
    step3.className = 'royal-step-pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-white/10 text-xs';
    step3.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-stamp"></i>';
  }
  if (progressBar) progressBar.style.width = '15%';

  // 3. Open Modal with smooth transition
  setTimeout(() => {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
  }, 220);

  // 4. Staged Progression Animation
  // Phase 1: Ghee & Morning Batch (at 600ms)
  setTimeout(() => {
    if (step1) {
      step1.classList.add('completed');
      step1.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-check text-xs"></i>';
    }
    if (progressBar) progressBar.style.width = '45%';
  }, 600);

  // Phase 2: Airtight Keepsake Packaging & Ribbon (at 1400ms)
  setTimeout(() => {
    if (step2) {
      step2.classList.add('completed');
      step2.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-check text-xs"></i>';
    }
    if (progressBar) progressBar.style.width = '80%';
  }, 1400);

  // Phase 3: Shagun Docket & Routing Ready (at 2100ms)
  setTimeout(() => {
    if (step3) {
      step3.classList.add('completed');
      step3.querySelector('.step-icon').innerHTML = '<i class="fa-solid fa-crown text-xs"></i>';
    }
    if (progressBar) progressBar.style.width = '100%';
  }, 2100);

  // 5. Soft Countdown & Auto-transition
  let secondsLeft = 3;
  if (timerSec) timerSec.textContent = secondsLeft;

  if (_orderCountdownInterval) clearInterval(_orderCountdownInterval);
  setTimeout(() => {
    _orderCountdownInterval = setInterval(() => {
      secondsLeft--;
      if (timerSec) timerSec.textContent = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(_orderCountdownInterval);
      }
    }, 1000);
  }, 2200);

  if (_orderRedirectTimer) clearTimeout(_orderRedirectTimer);
  _orderRedirectTimer = setTimeout(() => {
    proceedToContactEnquiry(docketNum);
  }, 5200);
}

window.injectSharedOrderModal = injectSharedOrderModal;
window.closeRoyalOrderModal = closeRoyalOrderModal;
window.proceedToContactEnquiry = proceedToContactEnquiry;
window.handleCheckoutSimulation = handleCheckoutSimulation;

// ==========================================
// 6. QUICK VIEW & ENQUIRY MODAL
// ==========================================
function injectSharedModal() {
  if (document.getElementById('quickViewModal')) return;

  const modalMarkup = `
    <div id="quickViewModal" class="modal-container">
      <div class="modal-overlay" onclick="closeQuickView()"></div>
      <div class="modal-dialog bg-white dark:bg-[#201B1D] text-neutral-800 dark:text-neutral-100 max-w-2xl w-full p-5 sm:p-6 relative rounded-2xl max-h-[90vh] overflow-y-auto">
        <button onclick="closeQuickView()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center justify-center transition z-10">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div id="quickViewContent">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalMarkup);
}

function openQuickView(productId) {
  const product = SWEETBLISS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="rounded-xl overflow-hidden shadow-inner border border-amber-100 dark:border-neutral-800">
        <img src="${product.image}" alt="${product.name}" class="w-full h-72 object-cover" />
      </div>
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="badge-tag ${product.badgeType}">${product.badge}</span>
          <span class="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
            <i class="fa-solid fa-star text-amber-400"></i> ${product.rating} (${product.reviews})
          </span>
        </div>
        <h3 class="text-xl font-bold mb-2">${product.name}</h3>
        <p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">${product.description}</p>
        
        <!-- Weight Variant Selector -->
        <div class="mb-4">
          <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">Select Weight Pack:</label>
          <div class="grid grid-cols-3 gap-2" id="qvWeightSelector">
            <button type="button" onclick="selectQuickViewWeight('${product.id}', '250g', this)" class="qv-weight-btn active border-2 border-burgundy bg-burgundy/10 text-burgundy dark:text-gold font-semibold py-1.5 text-xs rounded-lg transition">250g</button>
            <button type="button" onclick="selectQuickViewWeight('${product.id}', '500g', this)" class="qv-weight-btn border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold py-1.5 text-xs rounded-lg transition">500g</button>
            <button type="button" onclick="selectQuickViewWeight('${product.id}', '1kg', this)" class="qv-weight-btn border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold py-1.5 text-xs rounded-lg transition">1kg</button>
          </div>
        </div>

        <!-- Price Display -->
        <div class="flex items-baseline gap-2 mb-5">
          <span id="qvPriceDisplay" class="text-2xl font-black text-burgundy dark:text-gold">₹${product.prices['250g']}</span>
          <span class="text-xs text-neutral-400">Inclusive of all taxes</span>
        </div>

        <div class="flex gap-3">
          <button id="qvAddToCartBtn" onclick="addToCart('${product.id}', '250g', 1); closeQuickView();" class="btn-primary flex-1 text-xs py-3">
            <i class="fa-solid fa-cart-plus"></i> Add To Bag
          </button>
          <a href="service-details.html?id=${product.id}" class="btn-outline text-xs px-3 py-3" title="Full Details">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewWeight(productId, weight, btn) {
  const product = SWEETBLISS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.querySelectorAll('.qv-weight-btn').forEach(b => {
    b.className = 'qv-weight-btn border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold py-1.5 text-xs rounded-lg transition';
  });
  btn.className = 'qv-weight-btn active border-2 border-burgundy bg-burgundy/10 text-burgundy dark:text-gold font-semibold py-1.5 text-xs rounded-lg transition';

  const priceEl = document.getElementById('qvPriceDisplay');
  if (priceEl) priceEl.textContent = `₹${product.prices[weight]}`;

  const addBtn = document.getElementById('qvAddToCartBtn');
  if (addBtn) {
    addBtn.setAttribute('onclick', `addToCart('${product.id}', '${weight}', 1); closeQuickView();`);
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Wishlist toggle
function toggleWishlist(productId, btn) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    if (btn) btn.classList.remove('text-rose-500');
    showToast('Removed from Wishlist', 'primary', 2000);
  } else {
    AppState.wishlist.push(productId);
    if (btn) {
      btn.classList.add('text-rose-500', 'animate-heart-pop');
      setTimeout(() => btn.classList.remove('animate-heart-pop'), 600);
    }
    // Navbar wishlist badge pop animation
    document.querySelectorAll('.wishlist-count-badge, header a[title="Wishlist"]').forEach(el => {
      el.classList.remove('animate-heart-pop');
      void el.offsetWidth;
      el.classList.add('animate-heart-pop');
    });
    showToast('Added to your Wishlist!', 'gold', 2000);
  }
  AppState.saveWishlist();
}

// ==========================================
// 7. PRODUCT RENDERING & FILTERING
// ==========================================
function renderProductCard(product) {
  const isWishlisted = AppState.wishlist.includes(product.id);
  const fallback = product.fallbackImage || 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80';
  return `
    <div class="mithai-card bg-white dark:bg-[#201B1D] border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col group" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
      <div class="mithai-img-wrap h-56 relative bg-amber-50/50 dark:bg-neutral-900/50">
        <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='${fallback}';" />
        <span class="absolute top-3 left-3 badge-tag ${product.badgeType} shadow-sm">${product.badge}</span>
        
        <!-- Hover Quick Actions -->
        <div class="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onclick="toggleWishlist('${product.id}', this)" class="w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 hover:text-rose-500 flex items-center justify-center shadow transition ${isWishlisted ? 'text-rose-500' : ''}" title="Add to Wishlist">
            <i class="fa-solid fa-heart text-xs"></i>
          </button>
          <button onclick="openQuickView('${product.id}')" class="w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold flex items-center justify-center shadow transition" title="Quick View">
            <i class="fa-solid fa-eye text-xs"></i>
          </button>
        </div>

        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
          <i class="fa-solid fa-star text-amber-400 text-[10px]"></i> ${product.rating}
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col">
        <span class="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">${product.categoryName}</span>
        <h3 class="text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-burgundy dark:group-hover:text-gold transition mb-1">
          <a href="service-details.html?id=${product.id}">${product.name}</a>
        </h3>
        <p class="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed">${product.description}</p>
        
        <div class="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
          <div>
            <span class="text-xs text-neutral-400 block font-medium">Starts from</span>
            <span class="text-lg font-black text-burgundy dark:text-gold">₹${product.basePrice}</span>
            <span class="text-[11px] text-neutral-400 font-normal">/ 250g</span>
          </div>
          <button onclick="addToCart('${product.id}', '250g', 1, this)" class="btn-primary text-xs py-2 px-3.5" title="Add 250g pack to bag">
            <i class="fa-solid fa-plus text-[10px]"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
}

function initProductCatalog() {
  const container = document.getElementById('productsCatalogGrid');
  if (!container) return;

  const categoryBtns = document.querySelectorAll('.category-filter-btn');
  const searchInput = document.getElementById('productSearchInput');
  const sortSelect = document.getElementById('productSortSelect');
  const counterEl = document.getElementById('productCountDisplay');

  let activeCategory = 'all';
  let searchTerm = '';
  let sortBy = 'featured';

  function filterAndRender() {
    let list = [...SWEETBLISS_PRODUCTS];

    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.basePrice - a.basePrice);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-50 dark:bg-neutral-800 text-gold flex items-center justify-center text-2xl mb-3">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h4 class="text-lg font-bold mb-1">No delicacies found</h4>
          <p class="text-xs text-neutral-500">Try adjusting your search terms or selecting another category.</p>
        </div>
      `;
    } else {
      container.innerHTML = list.map(renderProductCard).join('');
    }

    if (counterEl) {
      counterEl.textContent = `Showing ${list.length} delicious items`;
    }
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => {
        b.classList.remove('bg-burgundy', 'text-white', 'shadow-md');
        b.classList.add('bg-neutral-100', 'dark:bg-neutral-800', 'text-neutral-700', 'dark:text-neutral-300');
      });
      btn.classList.add('bg-burgundy', 'text-white', 'shadow-md');
      btn.classList.remove('bg-neutral-100', 'dark:bg-neutral-800', 'text-neutral-700', 'dark:text-neutral-300');
      activeCategory = btn.getAttribute('data-category') || 'all';
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}

// ==========================================
// 8. FAQ ACCORDION HANDLER
// ==========================================
function initFaqAccordion() {
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.faq-item');
      const wasActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!wasActive) {
        parent.classList.add('active');
      }
    });
  });
}

// ==========================================
// 9. COUNTDOWN TIMER (Coming Soon / Promo)
// ==========================================
function initCountdown(targetDateStr = '2026-12-31T23:59:59') {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const target = new Date(targetDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 10. AUTH & PASSWORD TOGGLE HELPERS
// ==========================================
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = isPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    showToast('Please enter both email and password.', 'error');
    return;
  }

  showToast('Logging in to SweetBliss...', 'gold', 1500);
  setTimeout(() => {
    showToast('Welcome back to SweetBliss! You are signed in.', 'success', 2000);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1200);
  }, 1000);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const fullName = form.fullname.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  const terms = form.terms && form.terms.checked;

  if (!fullName || !email || !password) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Passwords do not match! Please check.', 'error');
    return;
  }

  if (!terms) {
    showToast('Please agree to terms and conditions to register.', 'error');
    return;
  }

  showToast('Creating your sweet membership...', 'gold', 1500);
  setTimeout(() => {
    showToast('Registration successful! Redirecting to login...', 'success', 2000);
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1200);
  }, 1000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast('Sending enquiry to SweetBliss halwais...', 'gold', 1500);
  setTimeout(() => {
    showToast('Thank you! Your enquiry has been received. Our team will contact you within 2 hours.', 'success', 3500);
    e.target.reset();
  }, 1000);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input && input.value) {
    showToast(`Thank you! ₹100 discount coupon sent to ${input.value}`, 'success', 3000);
    input.value = '';
  }
}

function addCustomItemToCart(name, price, weight, image, quantity = 1) {
  AppState.cart.push({
    id: 'custom-' + Date.now(),
    name: name,
    price: price,
    weight: weight,
    image: image,
    quantity: quantity
  });
  AppState.saveCart();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added "${name}" to your bag!`, 'gold', 3000);
}

// ==========================================
// 11. OCCASION SHOWCASE GUIDE (CAKE BLOOM FEATURE)
// ==========================================
const OCCASION_DATA = {
  festivals: {
    title: 'Auspicious Festivals & Puja',
    desc: 'Pure cow ghee sweets, saffron laddus, and handcrafted silver-leaf confections made fresh for Diwali, Holi, Rakhi, and Ganesh Utsav.',
    badge: 'Festival Special',
    items: ['sb-01', 'sb-03', 'sb-02', 'sb-14']
  },
  weddings: {
    title: 'Luxury Weddings & Shagun',
    desc: 'Opulent velvet hampers, artisanal dry fruit sweets, and traditional Mathura pedas crafted to honor new beginnings.',
    badge: 'Royal Shagun',
    items: ['sb-10', 'sb-06', 'sb-12', 'sb-01']
  },
  teatime: {
    title: 'Evening Chai & Teatime Adda',
    desc: 'Irresistible crispy savories, crunchy clove-infused Ratlami sev, and golden cocktail samosas that make every evening lively.',
    badge: 'Crunchy Savories',
    items: ['sb-07', 'sb-08', 'sb-11', 'sb-05']
  },
  healthy: {
    title: 'Zero-Sugar & Guilt-Free Treats',
    desc: 'Sweetened naturally with Medjool dates and sun-dried Afghani figs, paired with slow-roasted Himalayan salted nuts.',
    badge: 'Naturally Sweetened',
    items: ['sb-09', 'sb-13', 'sb-01', 'sb-04']
  },
  corporate: {
    title: 'Corporate & Executive Gifting',
    desc: 'Custom-branded tin boxes, embossed celebration trunks, and temperature-controlled bulk pan-India courier delivery.',
    badge: 'Bulk Discount 25%',
    items: ['sb-10', 'sb-14', 'sb-09', 'sb-13']
  }
};

function selectOccasion(occasionKey, btn) {
  const occasion = OCCASION_DATA[occasionKey];
  if (!occasion) return;

  document.querySelectorAll('.occasion-tab-btn').forEach(b => {
    b.className = 'occasion-tab-btn px-4 py-2.5 rounded-full text-xs font-bold transition whitespace-nowrap bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-amber-100 dark:hover:bg-neutral-700';
  });
  if (btn) {
    btn.className = 'occasion-tab-btn active px-4 py-2.5 rounded-full text-xs font-bold transition whitespace-nowrap bg-burgundy text-white shadow-md';
  }

  const titleEl = document.getElementById('occasionTitle');
  const descEl = document.getElementById('occasionDesc');
  const gridEl = document.getElementById('occasionProductsGrid');

  if (titleEl) titleEl.textContent = occasion.title;
  if (descEl) descEl.textContent = occasion.desc;

  if (gridEl) {
    const matchedProducts = occasion.items
      .map(id => SWEETBLISS_PRODUCTS.find(p => p.id === id))
      .filter(Boolean);

    gridEl.innerHTML = matchedProducts.map(renderProductCard).join('');
  }
}

// ==========================================
// 12. INTERACTIVE MITHAI BOX BUILDER (CONFIGURATOR & PACKAGING CEREMONY)
// ==========================================
const BoxBuilder = {
  slots: {
    1: { id: 'sb-01', name: 'Royal Kaju Katli', price: 320, image: 'assets/images/royal_kaju_katli_1793441959061.jpg' },
    2: { id: 'sb-03', name: 'Motichoor Ladoo', price: 220, image: 'assets/images/kashmiri_saffron_motichoor_ladoo_1793442005055.jpg' },
    3: { id: 'sb-02', name: 'Gulab Jamun', price: 240, image: 'assets/images/desi_ghee_gulab_jamun_1793441980923.jpg' },
    4: { id: 'sb-08', name: 'Ratlami Sev & Samosa', price: 150, image: 'assets/images/ratlami_sev_bhujia_1793445838005.jpg' }
  },
  isPacking: false,
  packagingTimers: [],

  selectItemForSlot(slotNum, productId, el) {
    const product = SWEETBLISS_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    this.slots[slotNum] = {
      id: product.id,
      name: product.name,
      price: product.basePrice,
      image: product.image
    };

    // Update active button state in that slot's options
    const slotOptions = document.querySelectorAll(`[data-slot-option="${slotNum}"]`);
    slotOptions.forEach(opt => {
      opt.classList.remove('border-burgundy', 'bg-burgundy/10', 'text-burgundy', 'dark:text-gold');
      opt.classList.add('border-neutral-200', 'dark:border-neutral-700');
    });
    if (el) {
      el.classList.add('border-burgundy', 'bg-burgundy/10', 'text-burgundy', 'dark:text-gold');
      el.classList.remove('border-neutral-200', 'dark:border-neutral-700');
    }

    // Play flight animation from button to box slot
    this.playFlightAnimation(el, slotNum, product);

    this.renderPreview();
  },

  playFlightAnimation(el, slotNum, product) {
    if (!el) return;
    const srcImg = el.querySelector('img');
    const targetSlot = document.getElementById(`boxSlot${slotNum}`);
    if (!srcImg || !targetSlot) return;

    const startRect = srcImg.getBoundingClientRect();
    const endRect = targetSlot.getBoundingClientRect();

    // Create a temporary cloned thumbnail
    const clone = document.createElement('img');
    clone.src = product.image;
    clone.className = 'flying-sweet-clone';
    clone.style.left = `${startRect.left}px`;
    clone.style.top = `${startRect.top}px`;
    clone.style.width = `${startRect.width}px`;
    clone.style.height = `${startRect.height}px`;
    document.body.appendChild(clone);

    // Force reflow
    void clone.offsetWidth;

    // Smoothly fly to target quadrant
    const targetX = endRect.left + (endRect.width - 64) / 2;
    const targetY = endRect.top + (endRect.height - 64) / 2;
    clone.style.left = `${targetX}px`;
    clone.style.top = `${targetY}px`;
    clone.style.width = '64px';
    clone.style.height = '64px';
    clone.style.transform = 'scale(1.15) rotate(10deg)';

    setTimeout(() => {
      clone.remove();

      // Trigger bounce & golden glow on target slot
      targetSlot.classList.remove('animate-slot-pack');
      void targetSlot.offsetWidth;
      targetSlot.classList.add('animate-slot-pack');

      // Sparkles burst on slot
      for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'absolute pointer-events-none text-gold font-bold text-xs animate-ping';
        sparkle.textContent = '✨';
        sparkle.style.left = `${15 + Math.random() * 70}%`;
        sparkle.style.top = `${15 + Math.random() * 70}%`;
        targetSlot.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
      }
    }, 520);
  },

  renderPreview() {
    for (let slotNum = 1; slotNum <= 4; slotNum++) {
      const item = this.slots[slotNum];
      const slotImg = document.getElementById(`boxSlotImg${slotNum}`);
      const slotName = document.getElementById(`boxSlotName${slotNum}`);
      if (slotImg && item) {
        slotImg.src = item.image;
        slotImg.alt = item.name;
      }
      if (slotName && item) {
        slotName.textContent = item.name;
      }
    }

    // Calculate subtotal with 10% curated box discount
    const rawTotal = Object.values(this.slots).reduce((sum, item) => sum + (item ? item.price : 0), 0);
    const discountedTotal = Math.round(rawTotal * 0.9);

    const priceEl = document.getElementById('boxBuilderPrice');
    const oldPriceEl = document.getElementById('boxBuilderOldPrice');
    if (priceEl) priceEl.textContent = `₹${discountedTotal}`;
    if (oldPriceEl) oldPriceEl.textContent = `₹${rawTotal}`;
  },

  addBoxToCart() {
    if (this.isPacking) return;
    this.isPacking = true;
    this.startPackagingCeremony();
  },

  startPackagingCeremony() {
    // Clear any leftover timers
    this.packagingTimers.forEach(t => clearTimeout(t));
    this.packagingTimers = [];

    // Remove old modal if exists
    const oldModal = document.getElementById('boxPackagingModal');
    if (oldModal) oldModal.remove();

    const itemsList = Object.values(this.slots).map(s => s.name).join(', ');
    const rawTotal = Object.values(this.slots).reduce((sum, item) => sum + (item ? item.price : 0), 0);
    const discountedTotal = Math.round(rawTotal * 0.9);

    const modalHTML = `
      <div id="boxPackagingModal" class="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300">
        <div class="relative w-full max-w-lg mx-auto flex flex-col items-center">
          
          <!-- Header Announcement -->
          <div id="packHeader" class="text-center mb-5 transition-all duration-300">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-[11px] font-bold uppercase tracking-widest mb-1.5 border border-gold/30 shadow-sm">
              <i class="fa-solid fa-wand-magic-sparkles text-gold"></i> Live Halwai Packing Ritual
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white drop-shadow-md">
              Assembling Your 1kg Royal Festive Box
            </h3>
            <p class="text-xs text-amber-100/80 mt-1">
              Packing 4 handcrafted delicacies in an airtight keepsake trunk
            </p>
          </div>

          <!-- The 3D Royal Box Structure -->
          <div id="packTrunkBox" class="royal-trunk-3d relative w-full aspect-[4/3] max-w-md bg-gradient-to-br from-[#2D0B14] via-[#1E080E] to-[#3B0E1B] rounded-3xl border-4 border-gold/80 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(214,166,83,0.4)] p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
            
            <!-- 4 Velvet Quadrants Inside Box -->
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3 h-full w-full">
              <!-- Quad 1 -->
              <div id="packSlot1" class="relative rounded-2xl bg-gradient-to-br from-[#45111E] to-[#25070E] border-2 border-gold/40 p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden opacity-0">
                <img src="${this.slots[1].image}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl shadow-md mb-1 border border-gold/60" />
                <span class="text-[11px] font-bold text-white truncate max-w-[130px] block leading-tight">${this.slots[1].name}</span>
                <span class="inline-flex items-center gap-1 text-[9px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full mt-1 border border-amber-500/40">
                  <i class="fa-solid fa-check text-emerald-400 text-[8px]"></i> Packed 250g
                </span>
              </div>

              <!-- Quad 2 -->
              <div id="packSlot2" class="relative rounded-2xl bg-gradient-to-br from-[#45111E] to-[#25070E] border-2 border-gold/40 p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden opacity-0">
                <img src="${this.slots[2].image}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl shadow-md mb-1 border border-gold/60" />
                <span class="text-[11px] font-bold text-white truncate max-w-[130px] block leading-tight">${this.slots[2].name}</span>
                <span class="inline-flex items-center gap-1 text-[9px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full mt-1 border border-amber-500/40">
                  <i class="fa-solid fa-check text-emerald-400 text-[8px]"></i> Packed 250g
                </span>
              </div>

              <!-- Quad 3 -->
              <div id="packSlot3" class="relative rounded-2xl bg-gradient-to-br from-[#45111E] to-[#25070E] border-2 border-gold/40 p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden opacity-0">
                <img src="${this.slots[3].image}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl shadow-md mb-1 border border-gold/60" />
                <span class="text-[11px] font-bold text-white truncate max-w-[130px] block leading-tight">${this.slots[3].name}</span>
                <span class="inline-flex items-center gap-1 text-[9px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full mt-1 border border-amber-500/40">
                  <i class="fa-solid fa-check text-emerald-400 text-[8px]"></i> Packed 250g
                </span>
              </div>

              <!-- Quad 4 -->
              <div id="packSlot4" class="relative rounded-2xl bg-gradient-to-br from-[#45111E] to-[#25070E] border-2 border-gold/40 p-2 sm:p-2.5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden opacity-0">
                <img src="${this.slots[4].image}" class="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl shadow-md mb-1 border border-gold/60" />
                <span class="text-[11px] font-bold text-white truncate max-w-[130px] block leading-tight">${this.slots[4].name}</span>
                <span class="inline-flex items-center gap-1 text-[9px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full mt-1 border border-amber-500/40">
                  <i class="fa-solid fa-check text-emerald-400 text-[8px]"></i> Packed 250g
                </span>
              </div>
            </div>

            <!-- Royal Velvet Lid Container -->
            <div id="packTrunkLid" class="absolute inset-0 bg-gradient-to-br from-[#7B263A] via-[#5C1B2A] to-[#3B0E18] rounded-3xl border-4 border-gold flex flex-col items-center justify-center shadow-2xl z-20 pointer-events-none hidden">
              <!-- Corner Ornaments -->
              <div class="absolute top-2.5 left-2.5 text-gold/60 text-lg"><i class="fa-solid fa-crown"></i></div>
              <div class="absolute top-2.5 right-2.5 text-gold/60 text-lg"><i class="fa-solid fa-crown"></i></div>
              <div class="absolute bottom-2.5 left-2.5 text-gold/60 text-lg"><i class="fa-solid fa-crown"></i></div>
              <div class="absolute bottom-2.5 right-2.5 text-gold/60 text-lg"><i class="fa-solid fa-crown"></i></div>

              <!-- Shimmering Gold Ribbon Cross -->
              <div class="absolute inset-x-0 h-10 top-1/2 -translate-y-1/2 ribbon-shine flex items-center justify-center shadow-lg border-y border-amber-300/80 z-10"></div>
              <div class="absolute inset-y-0 w-10 left-1/2 -translate-x-1/2 ribbon-shine flex items-center justify-center shadow-lg border-x border-amber-300/80 z-10"></div>

              <!-- 24K Monogram Wax Seal -->
              <div id="packWaxSeal" class="relative z-30 w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-gold to-amber-600 border-4 border-amber-100 shadow-[0_0_35px_rgba(214,166,83,0.95)] flex flex-col items-center justify-center text-center p-1 hidden">
                <i class="fa-solid fa-award text-burgundy text-xl drop-shadow"></i>
                <span class="text-[9px] font-black uppercase tracking-widest text-burgundy-900 mt-0.5">SweetBliss</span>
                <span class="text-[7.5px] font-black text-burgundy-800 tracking-wider">ROYAL 1KG BOX</span>
              </div>
            </div>

          </div>

          <!-- Progress Status Text -->
          <div id="packStatus" class="mt-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs font-bold flex items-center gap-2 border border-gold/30 shadow-md">
            <i id="packStatusIcon" class="fa-solid fa-circle-notch fa-spin text-gold"></i>
            <span id="packStatusText">Placing fresh confections into golden compartments...</span>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('boxPackagingModal');
    void modal.offsetWidth;
    modal.classList.add('active');

    const schedule = (fn, delay) => {
      const t = setTimeout(fn, delay);
      this.packagingTimers.push(t);
    };

    // Staggered Packing Timeline
    schedule(() => {
      const q1 = document.getElementById('packSlot1');
      if (q1) q1.classList.add('animate-item-drop');
    }, 200);

    schedule(() => {
      const q2 = document.getElementById('packSlot2');
      if (q2) q2.classList.add('animate-item-drop');
    }, 450);

    schedule(() => {
      const q3 = document.getElementById('packSlot3');
      if (q3) q3.classList.add('animate-item-drop');
    }, 700);

    schedule(() => {
      const q4 = document.getElementById('packSlot4');
      if (q4) q4.classList.add('animate-item-drop');
      const st = document.getElementById('packStatusText');
      if (st) st.textContent = 'All 4 delicacies in place. Closing airtight royal trunk...';
    }, 950);

    // Lid Drops
    schedule(() => {
      const lid = document.getElementById('packTrunkLid');
      if (lid) {
        lid.classList.remove('hidden');
        lid.classList.add('animate-lid-close');
      }
    }, 1300);

    // Seal Stamps Down
    schedule(() => {
      const seal = document.getElementById('packWaxSeal');
      const box = document.getElementById('packTrunkBox');
      if (seal) {
        seal.classList.remove('hidden');
        seal.classList.add('animate-seal-stamp');
      }
      if (box) box.classList.add('gold-halo-pulse');

      const st = document.getElementById('packStatusText');
      const si = document.getElementById('packStatusIcon');
      if (st) st.textContent = 'Box sealed with 24K Royal Halwai guarantee of purity!';
      if (si) si.className = 'fa-solid fa-stamp text-gold';
    }, 1750);

    // Status update before flight to Bag
    schedule(() => {
      const st = document.getElementById('packStatusText');
      const si = document.getElementById('packStatusIcon');
      if (st) st.textContent = '✨ Auspicious box ready! Adding to your bag...';
      if (si) si.className = 'fa-solid fa-sparkles text-gold';
    }, 2100);

    // Fly to Shopping Bag
    schedule(() => {
      const bagBtn = document.querySelector('header button[onclick="openCartDrawer()"]') || document.querySelector('.cart-count-badge');
      const box = document.getElementById('packTrunkBox');
      if (bagBtn && box) {
        const bagRect = bagBtn.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();
        const dx = bagRect.left + bagRect.width / 2 - (boxRect.left + boxRect.width / 2);
        const dy = bagRect.top + bagRect.height / 2 - (boxRect.top + boxRect.height / 2);
        box.style.setProperty('--fly-x', `${dx}px`);
        box.style.setProperty('--fly-y', `${dy}px`);
        box.classList.add('animate-trunk-fly');
      }
    }, 2550);

    // Finalize addition & cleanup
    schedule(() => {
      this.finalizeAddToCart(itemsList, discountedTotal);
      if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 400);
      }
      this.isPacking = false;
    }, 3200);
  },

  skipAndAddToCart() {
    this.packagingTimers.forEach(t => clearTimeout(t));
    this.packagingTimers = [];

    const itemsList = Object.values(this.slots).map(s => s.name).join(', ');
    const rawTotal = Object.values(this.slots).reduce((sum, item) => sum + (item ? item.price : 0), 0);
    const discountedTotal = Math.round(rawTotal * 0.9);

    const modal = document.getElementById('boxPackagingModal');
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }

    this.finalizeAddToCart(itemsList, discountedTotal);
    this.isPacking = false;
  },

  finalizeAddToCart(itemsList, discountedTotal) {
    addCustomItemToCart(
      `Custom 4-in-1 Box (${itemsList})`,
      discountedTotal,
      '1kg Curated Box',
      this.slots[1].image,
      1
    );
    if (typeof triggerCartBounce === 'function') {
      triggerCartBounce();
    }
  }
};

// ==========================================
// 13. LIVE SOCIAL PROOF ORDER NOTIFICATIONS
// ==========================================
const RECENT_ORDERS_DATA = [
  { name: 'Pooja S.', city: 'Mumbai', sweet: '1kg Royal Kaju Katli', time: '2 mins ago' },
  { name: 'Rajesh G.', city: 'New Delhi', sweet: '4x Emperor Festive Hampers', time: '5 mins ago' },
  { name: 'Sunita M.', city: 'Bengaluru', sweet: '500g Motichoor Ladoo & Ratlami Sev', time: '7 mins ago' },
  { name: 'Kunal P.', city: 'Pune', sweet: 'Custom 4-in-1 Royal Sweet Box', time: '11 mins ago' },
  { name: 'Meera K.', city: 'Ahmedabad', sweet: 'Pure Desi Ghee Gulab Jamun (1kg)', time: '14 mins ago' }
];

function initSocialProofToast() {
  let toast = document.getElementById('socialProofToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'socialProofToast';
    toast.className = 'fixed bottom-5 left-5 z-40 bg-white/95 dark:bg-[#1E191B]/95 backdrop-blur-md border border-amber-200 dark:border-neutral-700 shadow-2xl rounded-2xl p-3.5 max-w-xs flex items-center gap-3 pointer-events-auto';
    document.body.appendChild(toast);
  }

  let index = 0;

  function showNextNotification() {
    const order = RECENT_ORDERS_DATA[index];
    index = (index + 1) % RECENT_ORDERS_DATA.length;

    toast.innerHTML = `
      <div class="relative w-10 h-10 rounded-full bg-amber-100 dark:bg-neutral-800 text-burgundy dark:text-gold flex items-center justify-center text-base shrink-0">
        <i class="fa-solid fa-bag-shopping"></i>
        <span class="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span class="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
      </div>
      <div class="flex-1 min-w-0 pr-1">
        <div class="flex items-center justify-between text-[11px] text-neutral-400">
          <span class="font-bold text-neutral-800 dark:text-neutral-200 truncate">${order.name} (${order.city})</span>
          <span class="text-[10px] text-amber-600 dark:text-amber-400 font-medium ml-1">${order.time}</span>
        </div>
        <p class="text-xs font-semibold text-neutral-900 dark:text-white truncate">Ordered ${order.sweet}</p>
      </div>
      <button onclick="document.getElementById('socialProofToast').classList.remove('show')" class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xs">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5500);
  }

  // First order appears after 4 seconds, then repeats every 14 seconds
  setTimeout(() => {
    showNextNotification();
    setInterval(showNextNotification, 14000);
  }, 4000);
}

// ==========================================
// 14. MOBILE MENU TOGGLE (STRICT MOBILE ONLY)
// ==========================================
// Inject Shared Mobile Menu Drawer (Fallback for pages lacking static drawer markup)
function injectSharedMobileMenuDrawer() {
  if (document.getElementById('mobileMenu')) return;

  const menuMarkup = `
    <div id="mobileMenuBackdrop" onclick="closeMobileMenu()"
      class="lg:hidden fixed inset-0 bg-black/60 z-50 hidden backdrop-blur-sm transition-opacity"></div>
    <aside id="mobileMenu"
      class="lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85%] bg-white dark:bg-[#1C1819] z-50 -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col p-5 sm:p-6 overflow-y-auto text-neutral-800 dark:text-neutral-100">
      <div class="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
        <a href="index.html" class="flex items-center gap-2">
          <img src="assets/logo.svg" alt="SweetBliss" class="h-8 sm:h-9 w-auto" />
        </a>
        <button onclick="closeMobileMenu()"
          class="mobile-menu-close w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center transition cursor-pointer"
          aria-label="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Quick Utilities Row for Mobile -->
      <div class="flex items-center gap-2 py-3 border-b border-neutral-100 dark:border-neutral-800">
        <button onclick="toggleRTL()"
          class="rtl-toggle-btn text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-amber-50 dark:hover:bg-neutral-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-language text-gold"></i> RTL Mode
        </button>
        <button onclick="closeMobileMenu(); openWishlistDrawer()"
          class="text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-amber-50 dark:hover:bg-neutral-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-regular fa-heart text-burgundy dark:text-gold pointer-events-none"></i> Wishlist
          <span
            class="wishlist-count-badge w-4 h-4 bg-burgundy text-white text-[10px] font-bold rounded-full inline-flex items-center justify-center"
            style="display: none;">0</span>
        </button>
      </div>

      <!-- Navigation Links Matching Navbar -->
      <div class="py-4 space-y-2.5 font-semibold text-sm">
        <a href="index.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Classic Home (Sweets &amp; Snacks)</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
        <a href="home-2.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Wedding &amp; Shagun Showcase</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
        <a href="services.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Products</span>
          <span class="text-[10px] bg-burgundy/10 dark:bg-gold/20 text-burgundy dark:text-gold px-2 py-0.5 rounded-full font-bold">19 Delicacies</span>
        </a>
        <a href="festivals.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-gold animate-pulse inline-block"></span> Festival Specials</span>
          <span class="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-bold">Diwali 2026</span>
        </a>
        <a href="pricing.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Bulk &amp; Corporate</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
        <a href="track-order.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Track Order</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
        <a href="about.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>About Us</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
        <a href="contact.html" class="block py-1.5 text-neutral-700 dark:text-neutral-200 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-between">
          <span>Contact</span>
          <i class="fa-solid fa-chevron-right text-[10px] text-neutral-400"></i>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
        <a href="services.html" class="btn-primary w-full justify-center text-xs py-2.5">
          Order Fresh Sweets
        </a>
        <a href="tel:+919876543210"
          class="w-full py-2 text-xs font-semibold text-center text-neutral-600 dark:text-neutral-400 hover:text-burgundy dark:hover:text-gold transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-phone text-gold"></i> +91 98765 43210
        </a>
      </div>
    </aside>
  `;
  document.body.insertAdjacentHTML('beforeend', menuMarkup);
  initMobileMenu();
}

// Global Mobile Menu Controllers (Callable via onclick or event listeners)
let _mobileMenuLastToggleTime = 0;

function openMobileMenu() {
  let menu = document.getElementById('mobileMenu');
  let backdrop = document.getElementById('mobileMenuBackdrop');
  if (!menu) {
    injectSharedMobileMenuDrawer();
    menu = document.getElementById('mobileMenu');
    backdrop = document.getElementById('mobileMenuBackdrop');
  }
  if (!menu) return;

  menu.classList.remove('-translate-x-full', 'translate-x-full');
  menu.classList.add('open', 'active');
  menu.style.setProperty('transform', 'translateX(0)', 'important');
  menu.style.setProperty('display', 'flex', 'important');
  menu.style.setProperty('visibility', 'visible', 'important');
  menu.style.setProperty('opacity', '1', 'important');
  menu.style.setProperty('pointer-events', 'auto', 'important');

  if (backdrop) {
    backdrop.classList.remove('hidden');
    backdrop.classList.add('open', 'active');
    backdrop.style.setProperty('display', 'block', 'important');
    backdrop.style.setProperty('visibility', 'visible', 'important');
    backdrop.style.setProperty('opacity', '1', 'important');
    backdrop.style.setProperty('pointer-events', 'auto', 'important');
  }
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!menu) return;

  const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
  menu.classList.remove('open', 'active');
  menu.classList.add(isRtl ? 'translate-x-full' : '-translate-x-full');
  menu.style.setProperty('transform', isRtl ? 'translateX(100%)' : 'translateX(-100%)', 'important');
  menu.style.setProperty('visibility', 'hidden', 'important');
  menu.style.setProperty('pointer-events', 'none', 'important');

  if (backdrop) {
    backdrop.classList.add('hidden');
    backdrop.classList.remove('open', 'active');
    backdrop.style.setProperty('display', 'none', 'important');
    backdrop.style.setProperty('visibility', 'hidden', 'important');
    backdrop.style.setProperty('pointer-events', 'none', 'important');
  }
  document.body.style.overflow = '';
}

function toggleMobileMenu(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }

  const now = Date.now();
  if (now - _mobileMenuLastToggleTime < 250) {
    // Prevent double toggle bug from simultaneous touch/click events
    return;
  }
  _mobileMenuLastToggleTime = now;

  let menu = document.getElementById('mobileMenu');
  if (!menu) {
    injectSharedMobileMenuDrawer();
    menu = document.getElementById('mobileMenu');
  }
  if (!menu) return;

  const isOpen = menu.classList.contains('open') || 
                 menu.classList.contains('active') ||
                 menu.style.transform === 'translateX(0px)' ||
                 menu.style.transform === 'translateX(0)';

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

// Expose on global window object
window.injectSharedMobileMenuDrawer = injectSharedMobileMenuDrawer;
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');

  if (toggleBtn) {
    // Single robust click handler to avoid duplicate triggers
    toggleBtn.onclick = function(e) {
      toggleMobileMenu(e);
      return false;
    };
  }

  if (backdrop) {
    backdrop.onclick = function(e) {
      closeMobileMenu();
    };
  }

  document.querySelectorAll('.mobile-menu-close').forEach(btn => {
    btn.onclick = function(e) {
      closeMobileMenu();
    };
  });

  if (menu) {
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Automatically close and restore scrolling if viewport resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });
}

// ==========================================
// 15. HERO ROTATING SHOWCASE & ANIMATIONS
// ==========================================
const HERO_SLIDES = [
  {
    index: 0,
    badge: 'Signature Platter',
    badgeClass: 'badge-tag badge-bestseller',
    title: 'The Royal Silver Kaju Katli',
    desc: 'Fresh daily morning batch • 100% Pure Cashew Paste & Silver Vark',
    badge1Title: 'Royal Grade',
    badge1Sub: '100% Vegetarian',
    badge1Icon: 'fa-crown',
    rating: '4.9 / 5 Rating',
    ratingReviews: '3,400+ Families'
  },
  {
    index: 1,
    badge: 'Festive Bestseller',
    badgeClass: 'badge-tag bg-burgundy text-white font-bold',
    title: 'Saffron Shahi Motichoor Ladoo',
    desc: 'Slow-simmered in Pure Gir Cow A2 Desi Ghee & Kashmiri Kesar',
    badge1Title: 'A2 Cow Ghee',
    badge1Sub: 'Gir Cow Purity',
    badge1Icon: 'fa-fire-flame-curved',
    rating: '4.95 / 5 Rating',
    ratingReviews: 'Diwali Special'
  },
  {
    index: 2,
    badge: 'Chef’s Handcrafted',
    badgeClass: 'badge-tag bg-emerald-700 text-white font-bold',
    title: 'Pure Desi Ghee Gulab Jamun',
    desc: 'Warm, spongy mawa dumplings soaked in fragrant saffron rose syrup',
    badge1Title: 'Pure Desi Ghee',
    badge1Sub: 'Fresh Khoya & Chenna',
    badge1Icon: 'fa-certificate',
    rating: '5.0 / 5 Rating',
    ratingReviews: 'All-Time Favorite'
  },
  {
    index: 3,
    badge: 'Crunchy Savory',
    badgeClass: 'badge-tag bg-amber-600 text-white font-bold',
    title: 'Crispy Cocktail Samosa Platter',
    desc: 'Golden flaky crust filled with spiced potatoes, green peas, and cashews',
    badge1Title: 'Daily Morning Fry',
    badge1Sub: 'Served with Mint Chutney',
    badge1Icon: 'fa-bowl-food',
    rating: '4.85 / 5 Rating',
    ratingReviews: 'Evening Chai Favorite'
  }
];

const HeroShowcase = {
  currentIndex: 0,
  intervalTime: 5500, // 5.5s delay for comfortable reading & viewing
  timer: null,

  init() {
    const card = document.getElementById('heroShowcaseCard');
    if (!card) return;

    this.startAutoCycle();
  },

  startAutoCycle() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.next();
    }, this.intervalTime);
  },

  goTo(targetIndex) {
    if (targetIndex === this.currentIndex) return;
    this.currentIndex = (targetIndex + HERO_SLIDES.length) % HERO_SLIDES.length;
    this.render();
    this.startAutoCycle();
  },

  next() {
    this.currentIndex = (this.currentIndex + 1) % HERO_SLIDES.length;
    this.render();
  },

  prev() {
    this.currentIndex = (this.currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    this.render();
  },

  render() {
    const data = HERO_SLIDES[this.currentIndex];
    if (!data) return;

    // 1. Update Image Slides with crossfade and subtle zoom
    const slides = document.querySelectorAll('#heroSlidesWrapper .hero-slide');
    slides.forEach((slide, idx) => {
      if (idx === this.currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 2. Animate and Update Bottom Text Overlay
    const textContainer = document.getElementById('heroSlideTextContainer');
    const badgeEl = document.getElementById('heroSlideBadge');
    const titleEl = document.getElementById('heroSlideTitle');
    const descEl = document.getElementById('heroSlideDesc');

    if (textContainer && badgeEl && titleEl && descEl) {
      textContainer.classList.remove('animate-text-slide-up');
      void textContainer.offsetWidth; // Force DOM reflow to restart animation

      badgeEl.textContent = data.badge;
      badgeEl.className = `${data.badgeClass} mb-2 inline-block shadow-sm`;
      titleEl.textContent = data.title;
      descEl.textContent = data.desc;

      textContainer.classList.add('animate-text-slide-up');
    }

    // 3. Update Dots
    const dots = document.querySelectorAll('#heroSlideDots .hero-dot-indicator');
    dots.forEach((dot, idx) => {
      if (idx === this.currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // 4. Update Floating Badges with smooth transition
    const badge1Title = document.getElementById('heroBadge1Title');
    const badge1Sub = document.getElementById('heroBadge1Sub');
    const badge1Icon = document.getElementById('heroBadge1Icon');
    const badge2Rating = document.getElementById('heroBadge2Rating');

    if (badge1Title) badge1Title.textContent = data.badge1Title;
    if (badge1Sub) badge1Sub.textContent = data.badge1Sub;
    if (badge1Icon) badge1Icon.innerHTML = `<i class="fa-solid ${data.badge1Icon}"></i>`;
    if (badge2Rating) badge2Rating.textContent = data.rating;
  }
};

// ==========================================
// 11B. CONTACT PAGE ORDER PRE-FILL
// ==========================================
function initContactOrderPreFill() {
  if (!window.location.search.includes('order=true')) return;
  const urlParams = new URLSearchParams(window.location.search);
  const docket = urlParams.get('docket') || ('SB-' + Math.floor(100000 + Math.random() * 900000));

  const typeSelect = document.querySelector('select[name="type"]');
  if (typeSelect) {
    typeSelect.value = 'retail';
  }

  const messageTextarea = document.querySelector('textarea[name="message"]');
  if (messageTextarea && AppState.cart.length > 0) {
    const itemsList = AppState.cart.map(i => `• ${i.name} (${i.unit || '250g'}) × ${i.quantity} = ₹${(i.price * i.quantity).toLocaleString('en-IN')}`).join('\n');
    const total = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    messageTextarea.value = `👑 SweetBliss Royal Order Enquiry (Docket #${docket}):\n\n${itemsList}\n\nTotal Estimated: ₹${total.toLocaleString('en-IN')}\n\nDelivery Request: Please confirm fresh batch dispatch time, pan-India courier options, and payment gateway link.`;
    showToast(`✨ Auspicious Order Docket #${docket} details pre-loaded!`, 'gold', 4500);
  }
}
window.initContactOrderPreFill = initContactOrderPreFill;

// ==========================================
// 11C. ROYAL BESPOKE CUSTOM SELECT DROPDOWNS
// ==========================================
function initCustomSelects() {
  const selects = document.querySelectorAll('select:not([data-customized])');

  selects.forEach(select => {
    select.setAttribute('data-customized', 'true');

    // Visually hide native select but retain full accessibility and form capability
    select.style.position = 'absolute';
    select.style.opacity = '0';
    select.style.pointerEvents = 'none';
    select.style.width = '1px';
    select.style.height = '1px';
    select.style.margin = '-1px';
    select.style.clip = 'rect(0, 0, 0, 0)';
    select.setAttribute('tabindex', '-1');

    // Create wrapper
    const wrapper = document.createElement('div');
    if (select.id === 'productSortSelect') {
      wrapper.className = 'custom-select-wrapper relative inline-block w-full md:w-auto min-w-[210px]';
    } else {
      wrapper.className = 'custom-select-wrapper relative inline-block w-full';
    }

    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);

    // Selected trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#201B1D] text-xs font-semibold text-neutral-800 dark:text-neutral-100 hover:border-gold dark:hover:border-gold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'custom-select-label truncate text-left';
    const selectedOption = select.options[select.selectedIndex] || select.options[0];
    labelSpan.textContent = selectedOption ? selectedOption.text : 'Select Option';

    const chevron = document.createElement('span');
    chevron.className = 'custom-select-chevron text-gold text-[10px] transition-transform duration-300 shrink-0';
    chevron.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

    trigger.appendChild(labelSpan);
    trigger.appendChild(chevron);
    wrapper.appendChild(trigger);

    // If label exists with 'for' attribute, clicking label focuses trigger
    if (select.id) {
      trigger.id = 'trigger_' + select.id;
      const matchingLabel = document.querySelector(`label[for="${select.id}"]`);
      if (matchingLabel) {
        matchingLabel.setAttribute('for', 'trigger_' + select.id);
      }
    }

    // Floating dropdown menu
    const menu = document.createElement('div');
    menu.className = 'custom-select-menu absolute left-0 right-0 top-[calc(100%+6px)] z-50 p-1.5 rounded-2xl border border-amber-200/80 dark:border-gold/35 bg-white/95 dark:bg-[#1C1618]/95 backdrop-blur-md shadow-2xl opacity-0 translate-y-[-6px] pointer-events-none transition-all duration-200 custom-scrollbar max-h-64 overflow-y-auto';

    function renderMenuOptions() {
      menu.innerHTML = '';
      Array.from(select.options).forEach((opt, idx) => {
        const item = document.createElement('div');
        const isSelected = select.selectedIndex === idx;

        item.className = `custom-select-option px-3.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 cursor-pointer transition-all duration-150 mb-0.5 last:mb-0 ${
          isSelected
            ? 'bg-amber-100/80 dark:bg-gold/20 text-burgundy dark:text-gold font-bold'
            : 'text-neutral-700 dark:text-neutral-200 hover:bg-amber-50 dark:hover:bg-neutral-800/80 hover:text-burgundy dark:hover:text-gold'
        }`;

        const textSpan = document.createElement('span');
        textSpan.className = 'truncate';
        textSpan.textContent = opt.text;
        item.appendChild(textSpan);

        if (isSelected) {
          const check = document.createElement('i');
          check.className = 'fa-solid fa-check text-gold text-xs shrink-0';
          item.appendChild(check);
        }

        item.addEventListener('click', (e) => {
          e.stopPropagation();
          select.selectedIndex = idx;
          select.value = opt.value;
          labelSpan.textContent = opt.text;
          closeMenu();
          renderMenuOptions();
          select.dispatchEvent(new Event('change', { bubbles: true }));
        });

        menu.appendChild(item);
      });
    }

    renderMenuOptions();
    wrapper.appendChild(menu);

    function openMenu() {
      // Close other open menus
      document.querySelectorAll('.custom-select-menu.open').forEach(m => {
        if (m !== menu) {
          m.classList.remove('open');
          m.style.opacity = '0';
          m.style.transform = 'translateY(-6px)';
          m.style.pointerEvents = 'none';
          const otherTrigger = m.parentElement.querySelector('.custom-select-trigger');
          if (otherTrigger) {
            otherTrigger.classList.remove('ring-2', 'ring-gold/30', 'border-gold');
            const chev = otherTrigger.querySelector('.custom-select-chevron');
            if (chev) chev.style.transform = 'rotate(0deg)';
          }
        }
      });

      // Smart placement: check if close to viewport bottom
      const rect = wrapper.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      if (spaceBelow < 220 && rect.top > 220) {
        menu.style.top = 'auto';
        menu.style.bottom = 'calc(100% + 6px)';
      } else {
        menu.style.top = 'calc(100% + 6px)';
        menu.style.bottom = 'auto';
      }

      menu.classList.add('open');
      menu.style.opacity = '1';
      menu.style.transform = 'translateY(0)';
      menu.style.pointerEvents = 'auto';
      trigger.classList.add('ring-2', 'ring-gold/30', 'border-gold');
      chevron.style.transform = 'rotate(180deg)';
    }

    function closeMenu() {
      menu.classList.remove('open');
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-6px)';
      menu.style.pointerEvents = 'none';
      trigger.classList.remove('ring-2', 'ring-gold/30', 'border-gold');
      chevron.style.transform = 'rotate(0deg)';
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Keyboard support
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!menu.classList.contains('open')) {
          openMenu();
        } else if (e.key === 'ArrowDown') {
          if (select.selectedIndex < select.options.length - 1) {
            select.selectedIndex++;
            select.value = select.options[select.selectedIndex].value;
            labelSpan.textContent = select.options[select.selectedIndex].text;
            renderMenuOptions();
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else if (e.key === 'ArrowUp') {
          if (select.selectedIndex > 0) {
            select.selectedIndex--;
            select.value = select.options[select.selectedIndex].value;
            labelSpan.textContent = select.options[select.selectedIndex].text;
            renderMenuOptions();
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else if (e.key === 'Enter') {
          closeMenu();
        }
      } else if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Sync when select.value is changed programmatically
    select.addEventListener('change', () => {
      const currentOpt = select.options[select.selectedIndex];
      if (currentOpt) {
        labelSpan.textContent = currentOpt.text;
      }
      renderMenuOptions();
    });

    // Reset when form resets
    if (select.form) {
      select.form.addEventListener('reset', () => {
        setTimeout(() => {
          const currentOpt = select.options[select.selectedIndex];
          if (currentOpt) {
            labelSpan.textContent = currentOpt.text;
          }
          renderMenuOptions();
        }, 50);
      });
    }
  });
}

// Global click outside to close open menus
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select-wrapper')) {
    document.querySelectorAll('.custom-select-menu.open').forEach(menu => {
      menu.classList.remove('open');
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-6px)';
      menu.style.pointerEvents = 'none';
      const trigger = menu.parentElement.querySelector('.custom-select-trigger');
      if (trigger) {
        trigger.classList.remove('ring-2', 'ring-gold/30', 'border-gold');
        const chev = trigger.querySelector('.custom-select-chevron');
        if (chev) chev.style.transform = 'rotate(0deg)';
      }
    });
  }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.custom-select-menu.open').forEach(menu => {
      menu.classList.remove('open');
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-6px)';
      menu.style.pointerEvents = 'none';
      const trigger = menu.parentElement.querySelector('.custom-select-trigger');
      if (trigger) {
        trigger.classList.remove('ring-2', 'ring-gold/30', 'border-gold');
        const chev = trigger.querySelector('.custom-select-chevron');
        if (chev) chev.style.transform = 'rotate(0deg)';
      }
    });
  }
});

window.initCustomSelects = initCustomSelects;


// ==========================================
// 12. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndRTL();
  initPreloader();
  injectSharedCartDrawer();
  injectSharedWishlistDrawer();
  injectSharedModal();
  injectSharedMobileMenuDrawer();
  injectSharedOrderModal();
  AppState.updateCartBadges();
  AppState.updateWishlistBadges();
  initMobileMenu();
  initFaqAccordion();
  initProductCatalog();
  initSocialProofToast();
  initScrollReveal();
  initStatCounters();
  initContactOrderPreFill();
  initCustomSelects();

  // Auto-open product quick view from URL parameter (?product=sb-xx)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const prodParam = urlParams.get('product');
    if (prodParam && typeof openQuickView === 'function') {
      setTimeout(() => {
        openQuickView(prodParam);
      }, 350);
    }
  } catch (err) {
    console.warn('URL product param inspection error:', err);
  }

  if (document.getElementById('heroShowcaseCard')) {
    HeroShowcase.init();
  }

  if (document.getElementById('occasionProductsGrid')) {
    selectOccasion('festivals', document.querySelector('.occasion-tab-btn'));
  }

  if (document.getElementById('boxBuilderPrice')) {
    BoxBuilder.renderPreview();
  }

  // Sticky header shadow
  const header = document.querySelector('header.sticky-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'bg-white/95', 'dark:bg-[#181415]/95', 'backdrop-blur-md');
      } else {
        header.classList.remove('shadow-md', 'bg-white/95', 'dark:bg-[#181415]/95', 'backdrop-blur-md');
      }
    });
  }
});

// ==========================================
// 16. HOMEPAGE PINCODE DELIVERY CHECKER
// ==========================================
function checkHomePincode() {
  const input = document.getElementById('homePincodeInput');
  const msgEl = document.getElementById('homePincodeMsg');
  if (!input) return;
  const pin = input.value.trim();
  if (!pin || pin.length < 6 || !/^\d{6}$/.test(pin)) {
    if (typeof showToast === 'function') {
      showToast('Please enter a valid 6-digit Indian PIN code (e.g. 110001)', 'error');
    }
    return;
  }

  if (msgEl) {
    msgEl.classList.remove('hidden');
    // Common metro starts (11: Delhi, 40: Mumbai, 56: Bengaluru, 70: Kolkata, 50: Hyderabad, 60: Chennai, 30: Jaipur, 38: Ahmedabad)
    if (pin.startsWith('11') || pin.startsWith('40') || pin.startsWith('56') || pin.startsWith('70') || pin.startsWith('50') || pin.startsWith('60') || pin.startsWith('30') || pin.startsWith('38')) {
      msgEl.className = 'text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 animate-fadeIn mt-2 md:mt-0';
      msgEl.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500"></i> Pincode ' + pin + ': Metro Same-Day Fresh Delivery Available!';
      showToast('Pincode verified: Same-day express local delivery available!', 'success', 3000);
    } else {
      msgEl.className = 'text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 animate-fadeIn mt-2 md:mt-0';
      msgEl.innerHTML = '<i class="fa-solid fa-plane text-burgundy dark:text-gold"></i> Pincode ' + pin + ': Pan-India Cold-Chain Air Cargo (24-48h Fresh Dispatch)';
      showToast('Pincode verified: Pan-India 24-48h air express cargo eligible!', 'gold', 3000);
    }
  }
}

// ==========================================
// 17. LUXURY FESTIVE PRELOADER (First Visit Only)
// ==========================================
function initPreloader() {
  // Show ONLY on first arrival. Strictly NEVER show on page refresh or subsequent navigation.
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const forcePreview = urlParams.get('preview_preloader') === '1' || urlParams.get('preloader') === 'true';

    const hasBeenSeen = localStorage.getItem('sweetbliss_preloader_seen') || sessionStorage.getItem('sweetbliss_preloader_seen');
    if (!forcePreview && hasBeenSeen) {
      // Remove immediately if present
      const existing = document.getElementById('sweetblissPreloader');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      return;
    }
    // Record that the preloader has been seen (persists permanently across refreshes and navigations)
    localStorage.setItem('sweetbliss_preloader_seen', 'true');
    sessionStorage.setItem('sweetbliss_preloader_seen', 'true');
  } catch (err) {
    // Graceful fallback if storage access is restricted
  }

  if (document.getElementById('sweetblissPreloader')) return;

  const preloaderMarkup = `
    <div id="sweetblissPreloader">
      <div class="preloader-sparkle" style="top:22%; left:28%; animation-delay:0.1s;"><i class="fa-solid fa-sparkles text-gold text-sm opacity-60"></i></div>
      <div class="preloader-sparkle" style="top:32%; right:22%; animation-delay:0.35s;"><i class="fa-solid fa-star text-gold text-xs opacity-75"></i></div>
      <div class="preloader-sparkle" style="bottom:28%; left:22%; animation-delay:0.5s;"><i class="fa-solid fa-sparkles text-gold text-base opacity-50"></i></div>
      <div class="preloader-sparkle" style="bottom:22%; right:28%; animation-delay:0.2s;"><i class="fa-solid fa-star text-gold text-xs opacity-70"></i></div>

      <div class="preloader-content text-center px-4">
        <div class="preloader-logo-wrap mb-4">
          <img src="assets/logo.svg" alt="SweetBliss" class="h-14 sm:h-16 w-auto brightness-200 contrast-150 drop-shadow-[0_4px_24px_rgba(214,166,83,0.45)]" />
        </div>
        <p class="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-5">
          Royal Mithai &amp; Handcrafted Snacks
        </p>
        <div class="preloader-bar-wrap w-44 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden mx-auto border border-gold/20">
          <div class="preloader-bar"></div>
        </div>
        <span class="text-[10px] text-amber-200/60 uppercase tracking-widest mt-3 block font-medium">Pure Desi Ghee Since 1974</span>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', preloaderMarkup);
  const el = document.getElementById('sweetblissPreloader');

  function dismiss() {
    if (!el || el.classList.contains('preloader-fade-out')) return;
    el.classList.add('preloader-fade-out');
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 450);
  }

  // Dismiss cleanly after ~950ms or fallback
  if (document.readyState === 'complete') {
    setTimeout(dismiss, 950);
  } else {
    window.addEventListener('load', () => setTimeout(dismiss, 950));
  }
  setTimeout(dismiss, 1600);
}

// Global helper to reset preloader for testing if desired
window.SweetBliss = window.SweetBliss || {};
window.SweetBliss.resetPreloader = function() {
  try {
    localStorage.removeItem('sweetbliss_preloader_seen');
    sessionStorage.removeItem('sweetbliss_preloader_seen');
    console.log('SweetBliss: Preloader status reset. Refresh page to see preloader once again.');
  } catch(e) {}
};

// ==========================================
// 18. SCROLL REVEAL (IntersectionObserver)
// ==========================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

// ==========================================
// 19. ANIMATED NUMBER COUNTERS
// ==========================================
function initStatCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (!counters.length) return;

  function animate(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    const target = parseFloat(el.getAttribute('data-counter-target')) || 0;
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);

      el.textContent = `${prefix}${current.toLocaleString('en-IN')}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${target.toLocaleString('en-IN')}${suffix}`;
      }
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(animate);
  }
}

// ==========================================
// 20. CELEBRATORY FESTIVE CONFETTI (DISABLED)
// ==========================================
function fireFestiveConfetti() {
  // Disabled as per user request (removed color paper blast effect)
  const existing = document.getElementById('festiveConfettiCanvas');
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing);
  }
}



