<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر Ritalita للفرش الرقمية</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-pink: #FFC0CB;
            --soft-white: #FFF0F5;
            --mint: #E8F4F0;
            --peach: #FFE5B4;
            --lavender: #E6E6FA;
            --text-dark: #482138;
            --shadow-blend: rgba(255, 192, 203, 0.3);
        }

        /* إضافة الحركة الانسيابية (Smooth Scrolling) */
        html {
            scroll-behavior: smooth;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Tajawal', sans-serif;
        }

        body {
            background-color: var(--soft-white);
            color: var(--text-dark);
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 10% 20%, var(--lavender) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, var(--mint) 0%, transparent 40%);
            background-attachment: fixed;
        }

        /* --- Navbar --- */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 5vw;
            background: rgba(255, 240, 245, 0.85);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }

        .logo {
            font-weight: 900;
            font-size: 1.8rem;
            color: var(--text-dark);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo span {
            color: #d88fac;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 700;
            transition: 0.3s;
        }

        .nav-links a:hover {
            color: #d88fac;
        }

        .cart-btn-nav {
            background: var(--primary-pink);
            padding: 8px 18px;
            border-radius: 20px;
            color: white !important;
            box-shadow: 0 5px 15px var(--shadow-blend);
        }
        .cart-btn-nav:hover {
            transform: scale(1.05);
        }

        /* --- Hero Section --- */
        .hero {
            padding: 80px 5vw;
            text-align: center;
            animation: fadeIn 1s ease-out;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 20px;
            color: var(--text-dark);
        }

        .hero p {
            font-size: 1.3rem;
            max-width: 700px;
            margin: 0 auto 40px auto;
            color: #6d425c;
            line-height: 1.8;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- About Section --- */
        .about-section {
            background: rgba(255, 255, 255, 0.5);
            margin: 0 5vw;
            padding: 50px;
            border-radius: 30px;
            box-shadow: 0 10px 40px var(--shadow-blend);
            border: 1px solid rgba(255, 255, 255, 0.8);
            text-align: center;
            margin-bottom: 80px;
        }

        .about-section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .about-section p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #5a324b;
        }

        /* --- Products / Brushes --- */
        .products-section {
            padding: 0 5vw 80px 5vw;
        }

        .products-section > h2 {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 50px;
            color: var(--text-dark);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .search-container {
            text-align: center;
            margin-bottom: 40px;
        }
        .search-input {
            width: 80%;
            max-width: 500px;
            padding: 15px 20px;
            border-radius: 30px;
            border: 2px solid var(--primary-pink);
            font-size: 1.1rem;
            outline: none;
            transition: 0.3s;
            text-align: right;
            font-family: 'Tajawal', sans-serif;
        }
        .search-input:focus {
            box-shadow: 0 0 15px var(--shadow-blend);
        }

        .card {
            background: rgba(255, 255, 255, 0.7);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 15px 35px rgba(230, 230, 250, 0.6);
            transition: 0.3s;
            border: 1px solid white;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
        }

        .btn-favorite {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ccc;
            transition: 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 10;
        }
        .btn-favorite:hover, .btn-favorite.active {
            color: #ff4d4d;
            transform: scale(1.1);
        }

        .rating {
            color: #FFD700;
            font-size: 1.2rem;
            margin-bottom: 5px;
            text-align: center;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 45px var(--shadow-blend);
        }

        .brush-img {
            width: 100%;
            height: 250px;
            border-radius: 15px;
            margin-bottom: 20px;
            object-fit: cover;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .price {
            font-size: 1.4rem;
            font-weight: 900;
            color: #d88fac;
            margin-bottom: 15px;
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .btn-buy {
            background: var(--primary-pink);
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 15px;
            font-size: 1.1rem;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            flex: 1;
        }

        .btn-buy:hover {
            background: #f7a8b6;
        }

        .btn-trial {
            background: transparent;
            color: #9a4c7e;
            padding: 12px 20px;
            border: 2px solid var(--primary-pink);
            border-radius: 15px;
            font-size: 1.1rem;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            flex: 1;
        }

        .btn-trial:hover {
            background: var(--soft-white);
            transform: scale(1.05);
        }

        /* --- Contact Section --- */
        .contact-section {
            background: var(--text-dark);
            color: white;
            padding: 60px 5vw;
            text-align: center;
            margin-top: 50px;
        }

        .contact-section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary-pink);
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            margin-top: 30px;
        }

        .contact-card {
            background: rgba(255,255,255,0.1);
            padding: 20px 40px;
            border-radius: 15px;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: 0.3s;
            text-decoration: none;
            color: white;
            width: fit-content;
        }

        .contact-card:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-5px);
        }

        /* --- Shopping Cart Sidebar --- */
        .cart-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); z-index: 999;
            opacity: 0; pointer-events: none; transition: 0.3s;
        }
        .cart-overlay.active { opacity: 1; pointer-events: auto; }
        
        .cart-panel, .fav-panel {
            position: fixed; top: 0; left: -450px; width: 450px; height: 100vh;
            background: white; z-index: 1000; transition: left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 5px 0 30px rgba(0,0,0,0.1); padding: 30px;
            display: flex; flex-direction: column;
            border-right: 5px solid var(--primary-pink);
        }
        .cart-panel.active, .fav-panel.active { left: 0; }
        
        .cart-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--soft-white); padding-bottom: 15px; margin-bottom: 20px; }
        .cart-title { font-size: 1.8rem; font-weight: bold; color: var(--text-dark); }
        .close-cart { background: none; border: none; font-size: 2rem; cursor: pointer; color: #999; transition: 0.3s;}
        .close-cart:hover { color: var(--text-dark); transform: rotate(90deg);}
        
        .cart-items { flex: 1; overflow-y: auto; padding-left: 10px; }
        .cart-item { display: flex; justify-content: space-between; margin-bottom: 15px; padding: 15px; background: var(--soft-white); border-radius: 15px; align-items: center;}
        .item-name { font-weight: bold; color: var(--text-dark); font-size: 1.1rem;}
        .item-price { color: #d88fac; font-weight: bold; }
        .remove-item { background: #ff4d4d; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-size: 0.9rem;}
        
        .empty-cart-msg { text-align: center; color: #999; padding: 40px 0; font-size: 1.2rem; }

        .cart-total { font-size: 1.5rem; font-weight: bold; border-top: 2px solid var(--soft-white); padding-top: 15px; margin-top: 10px; display: flex; justify-content: space-between; color: var(--text-dark);}
        
        .payment-methods { display: flex; gap: 15px; justify-content: center; margin: 25px 0; }
        .payment-icon { width: 60px; height: 40px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: bold; color: #333; border: 1px solid #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
        
        .btn-checkout { background: var(--primary-pink); width: 100%; padding: 18px; border: none; border-radius: 15px; font-size: 1.3rem; font-weight: bold; color: white; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px var(--shadow-blend);}
        .btn-checkout:hover { background: #f7a8b6; transform: translateY(-3px); box-shadow: 0 15px 25px var(--shadow-blend);}

        @media (max-width: 600px) {
            .cart-panel, .fav-panel { width: 100%; left: -100%; border-right: none;}
        }

    </style>
</head>
<body>

    <nav>
        <div class="logo">🎨 Ritalita <span>Brushes</span></div>
        <div class="nav-links">
            <a href="#">الرئيسية</a>
            <a href="#about">من نحن</a>
            <a href="#store">المتجر</a>
            <a href="#contact">تواصل معنا</a>
            <a href="#" onclick="openFav(event)">❤️ المفضلة (<span id="fav-counter">0</span>)</a>
            <a href="#" class="cart-btn-nav" onclick="openCart(event)">🛒 السلة (<span id="cart-counter">0</span>)</a>
        </div>
    </nav>

    <section class="hero">
        <h1>أرقى الفرش الرقمية لإبداعك</h1>
        <p>اكتشف مجموعتنا الحصرية والاحترافية من الفرش الرقمية المُصممة بعناية فائقة لتسهل عليك رسم العيون، الأزياء، الخطوط العربية، والتفاصيل الدقيقة بكل احترافية وواقعية.</p>
    </section>

    <section class="about-section" id="about">
        <h2>نبذة عني وعن مشروعي 🖌️</h2>
        <p>مرحباً! أنا ريتاليتا، فتاة شغوفة جداً بالرسم الرقمي وأحب أن أرى الفن منتشراً في العالم لأنه لغة ومساحة إبداع بلا حدود. من خلال مسيرتي الفنية وتجاربي، لاحظت مدى أهمية تفاصيل الفرشاة في جودة وسرعة العمل النهائي وإظهار الروح في اللوحة. لذلك، قمت بإطلاق مشروع <b>Ritalita Brushes</b> ليقدم فُرشاً رقمية احترافية صُممت بدقة عالية، سواء للمهتمين بتصميم الأزياء، أو رسم الخطوط العربية المعقدة، أو رسم الملامح التفصيلية كالعيون.</p>
        <br>
        <p>هدفي هو تزويد الرسامين والمصممين بأدوات تجعل من عملية الرسم متعة حقيقية، مع توفير ميزة "التجربة المجانية" لكل فرشة لضمان جودتها قبل الشراء!</p>
    </section>

    <section class="products-section" id="store">
        <h2>مكتبة الفرشات المتاحة</h2>
        <div class="search-container">
            <input type="text" id="searchInput" class="search-input" placeholder="ابحث عن فرشة..." onkeyup="filterBrushes()">
        </div>
        <div class="grid" id="productsGrid">
            
            
            <!-- Product 1 -->
            <div class="card">
                <button class="btn-favorite" onclick="toggleFavorite(this, 'حزمة الخطوط العربية', './calligraphy_ipad_1776422765811.png', 50)">❤</button>
                <img src="./calligraphy_ipad_1776422765811.png" class="brush-img" alt="فرش الخط العربي">
                <h3>حزمة الخطوط العربية</h3>
                <div class="rating">⭐⭐⭐⭐⭐ <span style="color:#666; font-size:0.9rem;">(5.0)</span></div>
                <p style="color: #666; margin-bottom: 15px;">مجموعة فرش مصممة لمحاكاة الحبر وتفاصيل الخطوط العربية الكلاسيكية والحديثة.</p>
                <div class="price">٥٠ ريال</div>
                <div class="actions">
                    <button class="btn-buy" onclick="addToCart('حزمة الخطوط العربية', 50)">شراء الآن</button>
                    <button class="btn-trial">تجربة مجانية</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="card">
                <button class="btn-favorite" onclick="toggleFavorite(this, 'حزمة رسم العيون والملامح', './eye_drawing_1776422806033.png', 45)">❤</button>
                <img src="./eye_drawing_1776422806033.png" class="brush-img" alt="فرش العيون والملامح">
                <h3>حزمة رسم العيون والملامح</h3>
                <div class="rating">⭐⭐⭐⭐⭐ <span style="color:#666; font-size:0.9rem;">(4.9)</span></div>
                <p style="color: #666; margin-bottom: 15px;">تشمل فرش للرموش، وتفاصيل بؤبؤ العين، وتدرجات الجلد الناعمة للرسم الواقعي.</p>
                <div class="price">٤٥ ريال</div>
                <div class="actions">
                    <button class="btn-buy" onclick="addToCart('حزمة رسم العيون والملامح', 45)">شراء الآن</button>
                    <button class="btn-trial">تجربة مجانية</button>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="card">
                <button class="btn-favorite" onclick="toggleFavorite(this, 'فرش تصميم الأزياء (خيوط)', './fashion_sketch_1776422848574.png', 60)">❤</button>
                <img src="./fashion_sketch_1776422848574.png" class="brush-img" alt="فرش تصميم الأزياء">
                <h3>فرش تصميم الأزياء (خيوط)</h3>
                <div class="rating">⭐⭐⭐⭐⭐ <span style="color:#666; font-size:0.9rem;">(4.8)</span></div>
                <p style="color: #666; margin-bottom: 15px;">فرش مخصصة لمحاكاة الخياطة، الأقمشة، وطيات الملابس لمصممي الأزياء.</p>
                <div class="price">٦٠ ريال</div>
                <div class="actions">
                    <button class="btn-buy" onclick="addToCart('فرش تصميم الأزياء (خيوط)', 60)">شراء الآن</button>
                    <button class="btn-trial">تجربة مجانية</button>
                </div>
            </div>

            <!-- Product 4 -->
            <div class="card">
                <button class="btn-favorite" onclick="toggleFavorite(this, 'حزمة الأساسيات المتنوعة', './digital_shapes_1776422866840.png', 40)">❤</button>
                <img src="./digital_shapes_1776422866840.png" class="brush-img" alt="حزمة الأساسيات المتنوعة">
                <h3>حزمة الأساسيات المتنوعة</h3>
                <div class="rating">⭐⭐⭐⭐ <span style="color:#666; font-size:0.9rem;">(4.7)</span></div>
                <p style="color: #666; margin-bottom: 15px;">تشمل قوالب وأساسيات رسم تساعد في تسريع عملية إنهاء الأعمال المعقدة.</p>
                <div class="price">٤٠ ريال</div>
                <div class="actions">
                    <button class="btn-buy" onclick="addToCart('حزمة الأساسيات المتنوعة', 40)">شراء الآن</button>
                    <button class="btn-trial">تجربة مجانية</button>
                </div>
            </div>

        </div>
    </section>

    <section class="contact-section" id="contact">
        <h2>للتواصل والدعم</h2>
        <p>نحن هنا للرد على كافة استفساراتكم ومساعدتكم في استخدام الفرش.</p>
        
        <div class="contact-info">
            <!-- رابط الواتساب مباشر -->
            <a href="https://wa.me/966574987714" target="_blank" class="contact-card">
                <span class="whatsapp-icon">💬</span>
                تواصل عبر واتساب: 0574987714
            </a>

            <!-- رابط الإيميل -->
            <a href="mailto:rooo83799@gmail.com" class="contact-card">
                <span class="email-icon">✉️</span>
                راسلنا على الإيميل: rooo83799@gmail.com
            </a>
        </div>
    </section>

    <!-- واجهة المفضلة -->
    <div class="cart-overlay" id="favOverlay" onclick="closeFav()"></div>
    <div class="fav-panel" id="favPanel">
        <div class="cart-header">
            <h2 class="cart-title">❤️ مفضلاتي</h2>
            <button class="close-cart" onclick="closeFav()">×</button>
        </div>
        
        <div class="cart-items" id="favItemsContainer">
            <div class="empty-cart-msg">لا توجد فرش مفضلة حالياً 😢</div>
        </div>
    </div>

    <!-- واجهة سلة المشتريات (Cart Modal) -->
    <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
    <div class="cart-panel" id="cartPanel">
        <div class="cart-header">
            <h2 class="cart-title">🛍️ سلة مشترياتك</h2>
            <button class="close-cart" onclick="closeCart()">×</button>
        </div>
        
        <div class="cart-items" id="cartItemsContainer">
            <div class="empty-cart-msg">السلة فارغة حالياً 😢</div>
            <!-- العناصر تضاف هنا عبر الجافاسكربت -->
        </div>

        <div>
            <div class="cart-total">
                <span>المجموع الكلي:</span>
                <span id="cartTotalPrice">٠ ريال</span>
            </div>
            
            <div class="payment-methods">
                <!-- أيقونات طرق الدفع -->
                <div class="payment-icon" style="color:#000;"> Pay</div>
                <div class="payment-icon" style="color:#1a1f71;">VISA</div>
                <div class="payment-icon" style="color:#eb001b;">Master</div>
                <div class="payment-icon" style="color:#00a3e0;">Mada</div>
            </div>

            <button class="btn-checkout" onclick="checkout()">إتمام الدفع الآمن</button>
        </div>
    </div>

    <!-- كود الجافاسكربت لإدارة السلة والمفضلة والبحث -->
    <script>
        let cart = [];
        let favorites = [];

        function filterBrushes() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let cards = document.querySelectorAll('#productsGrid .card');
            
            cards.forEach(card => {
                let title = card.querySelector('h3').innerText.toLowerCase();
                if (title.includes(input)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function toggleFavorite(btn, name, img, price) {
            let index = favorites.findIndex(f => f.name === name);
            if (index > -1) {
                // إزالة من المفضلة
                favorites.splice(index, 1);
                btn.classList.remove('active');
            } else {
                // إضافة للمفضلة
                favorites.push({ name, img, price });
                btn.classList.add('active');
            }
            updateFavCounter();
            renderFavs();
        }

        function removeFavorite(index, name) {
            favorites.splice(index, 1);
            updateFavCounter();
            renderFavs();

            // إزالة الكلاس active من الزر في الصفحة
            let cards = document.querySelectorAll('#productsGrid .card');
            cards.forEach(card => {
                let title = card.querySelector('h3').innerText;
                if(title === name) {
                    card.querySelector('.btn-favorite').classList.remove('active');
                }
            });
        }

        function openFav(e) {
            if(e) e.preventDefault();
            document.getElementById('favOverlay').classList.add('active');
            document.getElementById('favPanel').classList.add('active');
            renderFavs();
        }

        function closeFav() {
            document.getElementById('favOverlay').classList.remove('active');
            document.getElementById('favPanel').classList.remove('active');
        }

        function updateFavCounter() {
            document.getElementById('fav-counter').innerText = favorites.length;
        }

        function renderFavs() {
            const container = document.getElementById('favItemsContainer');
            
            if (favorites.length === 0) {
                container.innerHTML = '<div class="empty-cart-msg">لا توجد فرش مفضلة حالياً 😢</div>';
                return;
            }

            let html = '';
            favorites.forEach((item, index) => {
                html += `
                    <div class="cart-item">
                        <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 10px; object-fit: cover; margin-left: 10px;" alt="">
                        <div style="flex: 1;">
                            <div class="item-name" style="font-size: 1rem;">${item.name}</div>
                            <div class="item-price">${item.price} ريال</div>
                        </div>
                        <button class="remove-item" onclick="removeFavorite(${index}, '${item.name}')">إزالة</button>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        function openCart(e) {
            if(e) e.preventDefault();
            document.getElementById('cartOverlay').classList.add('active');
            document.getElementById('cartPanel').classList.add('active');
            renderCart();
        }

        function closeCart() {
            document.getElementById('cartOverlay').classList.remove('active');
            document.getElementById('cartPanel').classList.remove('active');
        }

        function addToCart(itemName, itemPrice) {
            cart.push({ name: itemName, price: itemPrice });
            updateCartCounter();
            openCart(); // نفتح السلة فوراً بعد الإضافة
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCounter();
            renderCart();
        }

        function updateCartCounter() {
            document.getElementById('cart-counter').innerText = cart.length;
        }

        function renderCart() {
            const container = document.getElementById('cartItemsContainer');
            const totalEl = document.getElementById('cartTotalPrice');
            
            if (cart.length === 0) {
                container.innerHTML = '<div class="empty-cart-msg">السلة فارغة حالياً <br><br>ابدأ التسوق الآن!</div>';
                totalEl.innerText = '٠ ريال';
                return;
            }

            let html = '';
            let total = 0;
            
            cart.forEach((item, index) => {
                html += `
                    <div class="cart-item">
                        <div>
                            <div class="item-name">${item.name}</div>
                            <div class="item-price">${item.price} ريال</div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${index})">حذف</button>
                    </div>
                `;
                total += item.price;
            });

            container.innerHTML = html;
            totalEl.innerText = total + ' ريال';
        }

        function checkout() {
            if(cart.length === 0) {
                alert("السلة فارغة! قم بإضافة بعض الفرش أولاً.");
                return;
            }
            alert("تم تحويلك لصفحة الدفع الآمن بنجاح! ✓");
        }
    </script>
</body>
</html>
