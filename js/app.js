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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kaju_katli_sweet.jpg?width=800',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Gulab_Jamun.jpg',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Motichur_laddu.jpg?width=800',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rasgulla.jpg?width=800',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/JalebiIndia.jpg',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_pak.jpg?width=800',
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
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bombaymix.jpg?width=800',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kaju_katli_sweet.jpg?width=800',
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
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chakli_(Indian_snack).jpg?width=800',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dharwad_peda.jpg?width=800',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cashew_nuts.JPG?width=800',
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
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Gulab_Jamun.jpg',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Motichur_laddu.jpg?width=800',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_pak.jpg?width=800',
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
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
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
function addToCart(productId, weight = '250g', quantity = 1) {
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
  openCartDrawer();
  showToast(`Added ${quantity}x ${product.name} (${weight}) to your cart!`, 'success');
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
            <button onclick="handleCheckoutSimulation()" class="btn-primary text-xs py-2.5">
              Proceed to Order
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

function handleCheckoutSimulation() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty! Please add some delicious sweets first.', 'error');
    return;
  }
  closeCartDrawer();
  showToast('Order Enquiry Initiated! Redirecting to WhatsApp & Order confirmation...', 'gold', 3000);
  setTimeout(() => {
    window.location.href = 'contact.html?order=true';
  }, 1200);
}

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
    if (btn) btn.classList.add('text-rose-500');
    showToast('Added to your Wishlist!', 'gold', 2000);
  }
  AppState.saveWishlist();
}

// ==========================================
// 7. PRODUCT RENDERING & FILTERING
// ==========================================
function renderProductCard(product) {
  const isWishlisted = AppState.wishlist.includes(product.id);
  return `
    <div class="mithai-card bg-white dark:bg-[#201B1D] border border-neutral-100 dark:border-neutral-800 shadow-sm flex flex-col group" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
      <div class="mithai-img-wrap h-56 relative bg-amber-50/50 dark:bg-neutral-900/50">
        <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover" />
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
          <button onclick="addToCart('${product.id}', '250g', 1)" class="btn-primary text-xs py-2 px-3.5" title="Add 250g pack to bag">
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
// 12. INTERACTIVE MITHAI BOX BUILDER (CONFIGURATOR)
// ==========================================
const BoxBuilder = {
  slots: {
    1: { id: 'sb-01', name: 'Royal Kaju Katli', price: 320, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kaju_katli_sweet.jpg?width=500' },
    2: { id: 'sb-03', name: 'Motichoor Ladoo', price: 220, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Motichur_laddu.jpg?width=500' },
    3: { id: 'sb-02', name: 'Gulab Jamun', price: 240, image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Gulab_Jamun.jpg' },
    4: { id: 'sb-08', name: 'Ratlami Sev & Bhujia', price: 150, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bombaymix.jpg?width=500' }
  },

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

    this.renderPreview();
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
    const itemsList = Object.values(this.slots).map(s => s.name).join(', ');
    const rawTotal = Object.values(this.slots).reduce((sum, item) => sum + (item ? item.price : 0), 0);
    const discountedTotal = Math.round(rawTotal * 0.9);

    addCustomItemToCart(
      `Custom 4-in-1 Box (${itemsList})`,
      discountedTotal,
      '1kg Curated Box',
      this.slots[1].image,
      1
    );
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
// 14. MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');

  if (!toggleBtn || !menu) return;

  function openMenu() {
    menu.classList.remove('-translate-x-full', 'translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    menu.classList.add(isRtl ? 'translate-x-full' : '-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('-translate-x-full') && !menu.classList.contains('translate-x-full');
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (backdrop) backdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-menu-close').forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
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
    badge: 'Heritage Hamper',
    badgeClass: 'badge-tag bg-amber-600 text-white font-bold',
    title: 'Maharaja Celebration Gift Hamper',
    desc: 'Royal festive pairing of traditional mithai & slow-roasted dry fruits',
    badge1Title: 'Velvet Keepsake Box',
    badge1Sub: 'Pan-India Express Courier',
    badge1Icon: 'fa-gift',
    rating: '4.9 / 5 Rating',
    ratingReviews: 'Corporate & Wedding Fav'
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
// 12. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndRTL();
  injectSharedCartDrawer();
  injectSharedModal();
  AppState.updateCartBadges();
  AppState.updateWishlistBadges();
  initMobileMenu();
  initFaqAccordion();
  initProductCatalog();
  initSocialProofToast();

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


