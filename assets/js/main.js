/* NovaX Global — interactions */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WHATSAPP = "900000000000"; // TODO: رقم واتساب الشركة

  /* ---------- i18n ---------- */
  const EN = {
    "mk.label": "Export destinations",
    "top.msg": "Direct from Türkiye's factories to the Gulf, the Middle East and Europe",
    "nav.about": "About", "nav.collections": "Collections", "nav.process": "Export Process",
    "nav.regions": "Markets", "nav.contact": "Contact",
    "cta.quote": "Request a Quote", "cta.explore": "Explore Collections", "cta.catalog": "Get the Catalog",
    "cta.wa": "Chat on WhatsApp",
    "hero.eyebrow": "From Türkiye to the World", "hero.l1": "Luxury Turkish furniture,",
    "hero.l2": "crafted with care, <em>exported</em>", "hero.l3": "everywhere.",
    "hero.lead": "We source the finest pieces from Türkiye's top factories and handle quality, packing, shipping and customs — delivered to your door across the Gulf, the Middle East and Europe.",
    "about.badge": "Made in Türkiye", "about.eyebrow": "About Us",
    "about.title": "Your direct bridge to <em>Türkiye's finest</em> furniture makers",
    "about.p": "NovaX Global is a specialist export house connecting buyers, developers and showroom owners worldwide with leading furniture factories in İnegöl, Istanbul and Kayseri. We remove the distance, the language barrier and the guesswork — with factory pricing and factory quality.",
    "about.chip.t": "Inspected before shipping", "about.chip.d": "Every piece checked and photographed for you",
    "about.r1": "Factory", "about.r2": "Inspection", "about.r3": "Shipping", "about.r4": "Your door", "about.cta": "How we work",
    "p1.t": "Factory Direct", "p1.d": "No middlemen, factory prices.",
    "p2.t": "Strict Quality Control", "p2.d": "Every piece inspected before loading.",
    "p3.t": "Shipping & Customs", "p3.d": "Sea and land freight to your warehouse.",
    "p4.t": "Made to Order", "p4.d": "Your sizes, fabrics and finishes.",
    "coll.eyebrow": "Collections", "coll.title": "Every room deserves <em>a Turkish piece</em>",
    "c1.t": "Sofa Sets", "c1.d": "Modern and classic sets in premium fabrics and custom colours.",
    "c2.t": "Corner Sofas", "c2.d": "Comfortable corners in flexible sizes for any space.",
    "c3.t": "Modular Sofas", "c3.d": "Separate pieces arranged your way — ideal for showrooms and projects.",
    "c4.t": "Hotels & Projects", "c4.d": "Full fit-out for hotel lounges, serviced apartments and offices.",
    "c5.t": "Modern Luxury", "c5.d": "Gold accents, velvet and details that make a statement.",
    "c6.t": "Tea & Garden Sets", "c6.d": "Bergères, chairs and light sets for indoors and out.",
    "s1": "Export Countries", "s2": "Partner Factories", "s3": "Containers Shipped", "s4": "Years of Experience",
    "proc.eyebrow": "Export Process", "proc.title": "From your idea to <em>your warehouse</em> in six steps",
    "proc.lead": "One team with you from the first message to the last delivered piece — in your language, fully transparent.",
    "st1.t": "Consultation", "st1.d": "We learn your project, budget and target market.",
    "st2.t": "Selection & Design", "st2.d": "Catalogs, samples and showroom or factory visits — in person or by video.",
    "st3.t": "Quote & Contract", "st3.d": "A clear offer at factory prices with written payment and delivery terms.",
    "st4.t": "Production Tracking", "st4.d": "Regular photo reports from the production line.",
    "st5.t": "QC & Packing", "st5.d": "Piece-by-piece inspection and export-grade packing.",
    "st6.t": "Shipping & Delivery", "st6.d": "Container loading, customs paperwork and door delivery.",
    "reg.eyebrow": "Our Markets", "reg.title": "Türkiye at the centre, <em>the world</em> our destination",
    "r1.t": "Arabian Gulf", "r1.d": "Saudi Arabia · UAE · Qatar · Kuwait · Oman · Bahrain",
    "r2.t": "Middle East", "r2.d": "Iraq · Jordan · Lebanon · Syria",
    "r3.t": "North Africa", "r3.d": "Libya · Algeria · Morocco · Tunisia · Egypt",
    "r4.t": "Europe", "r4.d": "Germany · France · Netherlands · Belgium · UK",
    "show.eyebrow": "Selected", "show.title": "Designs that <em>make the difference</em>",
    "tag.living": "Living", "sp.hint": "Hover the dots to explore the details",
    "sp.eyebrow": "Product Spotlight", "sp.title": "Details you <em>feel</em> before you see",
    "sp.set": "Sofa Set", "sp.berg": "Bergère", "sp.three": "3-Seater", "sp.len": "Length", "sp.hei": "Height", "sp.dep": "Depth",
    "sp.fab": "Fabric", "sp.custom": "All sizes, fabrics and colours can be customised to order.", "sp.ask": "Ask for price",
    "cat.eyebrow": "Catalog 2026", "cat.title": "Thousands of pieces from <em>dozens of factories</em> in one catalog",
    "cat.lead": "Request the full catalog with export pricing — delivered within hours by WhatsApp or email.",
    "ct.eyebrow": "Contact", "ct.title": "Let's start <em>your next project</em>",
    "ct.wa": "WhatsApp", "ct.mail": "Email", "ct.addr": "Head Office", "ct.addrv": "Istanbul, Türkiye",
    "f.name": "Full name", "f.company": "Company", "f.phone": "Phone / WhatsApp", "f.country": "Country",
    "f.type": "Request type", "f.msg": "Details (quantities, sizes, delivery date)",
    "f.send": "Send via WhatsApp", "f.note": "We reply to every request within 24 hours.",
    "o1": "Living rooms", "o2": "Bedrooms", "o3": "Dining rooms", "o4": "Hotel / commercial project", "o5": "Offices", "o6": "Other",
    "ft.about": "Exporting luxury Turkish furniture from the factory to the world.",
    "ft.company": "Company", "ft.coll": "Collections", "ft.rights": "All rights reserved."
  };
  const AR = {};
  $$("[data-i18n]").forEach(el => AR[el.dataset.i18n] = el.textContent);
  $$("[data-i18n-html]").forEach(el => AR[el.dataset.i18nHtml] = el.innerHTML);

  $$(".btn > span[data-i18n]").forEach(sp => {
    const r = document.createElement("span"); r.className = "roll"; r.dataset.roll = "";
    sp.replaceWith(r); r.appendChild(sp);
  });
  function splitWords() {
    $$("[data-split]").forEach(el => {
      let i = 0;
      const wrap = node => {
        const w = document.createElement("span"); w.className = "w";
        const inner = document.createElement("span"); inner.style.setProperty("--i", i++);
        inner.appendChild(node); w.appendChild(inner); return w;
      };
      [...el.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            frag.appendChild(/^\s+$/.test(part) ? document.createTextNode(" ") : wrap(document.createTextNode(part)));
          });
          n.replaceWith(frag);
        } else el.replaceChild(wrap(n.cloneNode(true)), n);
      });
    });
  }
  splitWords();
  function syncRolls() { $$("[data-roll]").forEach(r => r.dataset.text = r.textContent.trim()); }
  syncRolls();
  let activeLink = null, moveInd = () => {};

  function setLang(lang) {
    const dict = lang === "en" ? EN : AR;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(el => { const v = dict[el.dataset.i18n]; if (v) el.textContent = v; });
    $$("[data-i18n-html]").forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v) el.innerHTML = v; });
    $$(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    splitWords();
    syncRolls();
    try { buildMarquee(); } catch (e) { /* not built yet on first load */ }
    try { renderSpots(); moveKnob(); } catch (e) { /* spotlight not ready yet */ }
    requestAnimationFrame(() => moveInd(activeLink));
    try { localStorage.setItem("nx-lang", lang); } catch (e) {}
  }
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  try { const saved = localStorage.getItem("nx-lang"); if (saved && saved !== "ar") setLang(saved); } catch (e) {}

  /* ---------- Preloader ---------- */
  const name = $("#loaderName");
  name.innerHTML = [..."NOVAX"].map((c, i) => `<span style="animation-delay:${.35 + i * .08}s">${c}</span>`).join("");
  const loader = $("#loader");
  const finish = () => {
    loader.classList.add("done");
    document.body.classList.remove("is-loading");
    setTimeout(() => document.body.classList.add("ready"), 500);
    setTimeout(() => loader.classList.add("gone"), 1600);
  };
  const minTime = new Promise(r => setTimeout(r, 2400));
  const loaded = new Promise(r => document.readyState === "complete" ? r() : addEventListener("load", r));
  Promise.race([Promise.all([minTime, loaded]), new Promise(r => setTimeout(r, 5000))]).then(finish);

  /* ---------- Background images with fallback ---------- */
  $$("[data-bg]").forEach(el => {
    const img = new Image();
    img.onload = () => el.style.backgroundImage = `url("${el.dataset.bg}")`;
    img.src = el.dataset.bg;
  });
  $$("img").forEach(img => img.addEventListener("error", () => img.style.visibility = "hidden"));

  /* ---------- Hero slider ---------- */
  const hero = $("#hero"), slides = $$(".hero__slide");
  const DUR = 7000; let cur = 0, timer, busy = false;
  function go(i) {
    i = (i + slides.length) % slides.length;
    if (i === cur || busy) return;
    busy = true;
    const prev = slides[cur], next = slides[i];
    prev.classList.remove("active"); prev.classList.add("leaving");
    next.classList.add("active");
    cur = i;
    setTimeout(() => { prev.classList.remove("leaving"); busy = false; }, 1650);
    schedule();
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(() => go(cur + 1), DUR); }
  schedule();
  const rtl = () => document.documentElement.dir === "rtl";
  let tx = null;
  hero.addEventListener("touchstart", e => tx = e.touches[0].clientX, { passive: true });
  hero.addEventListener("touchend", e => {
    if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) go(cur + ((dx < 0) !== rtl() ? 1 : -1));
  });
  // subtle mouse parallax
  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(3));
    hero.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(3));
  });
  hero.addEventListener("mouseleave", () => { hero.style.setProperty("--mx", 0); hero.style.setProperty("--my", 0); });

  /* ---------- Marquee (duplicate for seamless loop) ---------- */
  const COUNTRIES = [
    ["SA", "السعودية", "Saudi Arabia"], ["AE", "الإمارات", "UAE"], ["QA", "قطر", "Qatar"], ["KW", "الكويت", "Kuwait"],
    ["OM", "عُمان", "Oman"], ["BH", "البحرين", "Bahrain"], ["IQ", "العراق", "Iraq"], ["JO", "الأردن", "Jordan"],
    ["LB", "لبنان", "Lebanon"], ["LY", "ليبيا", "Libya"], ["DZ", "الجزائر", "Algeria"], ["MA", "المغرب", "Morocco"],
    ["DE", "ألمانيا", "Germany"], ["FR", "فرنسا", "France"], ["NL", "هولندا", "Netherlands"], ["GB", "بريطانيا", "United Kingdom"]
  ];
  const mq = $("#marquee");
  function buildMarquee() {
    const en = document.documentElement.lang === "en";
    const items = COUNTRIES.map(([c, ar, e]) => `<span class="mk"><span class="mk__code">${c}</span>${en ? e : ar}</span>`).join("");
    mq.innerHTML = items + items;
    requestAnimationFrame(() => mq.style.setProperty("--mq-dur", (mq.scrollWidth / 2 / 35).toFixed(1) + "s"));
  }
  buildMarquee();

  /* ---------- Header ---------- */
  const header = $("#header"), progress = $("#progress"); let lastY = scrollY, off = 0, snapT;
  const navLinks = $$("#nav a"), ind = $("#navInd");
  moveInd = link => {
    if (!link) { ind.classList.remove("on"); return; }
    ind.style.left = link.offsetLeft + "px"; ind.style.width = link.offsetWidth + "px"; ind.classList.add("on");
  };
  navLinks.forEach(a => a.addEventListener("mouseenter", () => moveInd(a)));
  $("#nav").addEventListener("mouseleave", () => moveInd(activeLink));
  const sections = navLinks.map(a => $(a.getAttribute("href"))).filter(Boolean);

  addEventListener("scroll", () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle("scrolled", y > 60);
    // drawer: header follows the scroll delta, then settles smoothly
    const h = header.offsetHeight + 10;
    header.classList.remove("snap");
    if (y < 120 || document.body.classList.contains("menu-open")) off = 0;
    else off = Math.min(h, Math.max(0, off + (y - lastY)));
    header.style.transform = `translateY(${-off}px)`;
    clearTimeout(snapT);
    snapT = setTimeout(() => {
      if (off > 0 && off < h) { header.classList.add("snap"); off = off > h / 2 ? h : 0; header.style.transform = `translateY(${-off}px)`; }
    }, 120);
    lastY = y;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    // scrollspy
    let cur = null;
    sections.forEach((sec, i) => { if (sec.getBoundingClientRect().top < innerHeight * .4) cur = navLinks[i]; });
    if (cur !== activeLink) { activeLink = cur; navLinks.forEach(a => a.classList.toggle("active", a === cur)); if (!$("#nav:hover")) moveInd(cur); }
    const bg = $("#catalogBg");
    if (bg) { const r = bg.parentElement.getBoundingClientRect(); bg.style.transform = `translateY(${r.top * -0.15}px)`; }
  }, { passive: true });

  /* ---------- Magnetic buttons ---------- */
  $$("[data-magnetic]").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });

  $("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
  }), { threshold: 0, rootMargin: "0px 0px -12% 0px" });
  $$(".reveal, .frame, .globe, [data-split], .about__media").forEach(el => io.observe(el));

  $$(".about__ring").forEach(r => {
    const chars = [...r.dataset.text];
    r.innerHTML = chars.map((c, i) => `<span style="transform:rotate(${(360 / chars.length * i).toFixed(2)}deg)">${c}</span>`).join("");
  });

  /* ---------- About: parallax layers, background word, pillar spotlight ---------- */
  const layers = $$("[data-speed]"), word = $("#aboutWord"), about = $("#about");
  function aboutScroll() {
    const r = about.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const mid = r.top + r.height / 2 - innerHeight / 2;
    layers.forEach(l => l.style.transform = `translate3d(0, ${(mid * +l.dataset.speed).toFixed(1)}px, 0)`);
    word.style.transform = `translate3d(${(-mid * .35 - 200).toFixed(1)}px, 0, 0)`;
  }
  addEventListener("scroll", aboutScroll, { passive: true }); aboutScroll();
  $$(".pillar").forEach(p => p.addEventListener("mousemove", e => {
    const r = p.getBoundingClientRect();
    p.style.setProperty("--x", e.clientX - r.left + "px"); p.style.setProperty("--y", e.clientY - r.top + "px");
  }));

  /* ---------- Counters ---------- */
  const co = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 2200;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 4)));
      el.textContent = v.toLocaleString("en");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick); co.unobserve(el);
  }), { threshold: .6 });
  $$("[data-count]").forEach(el => co.observe(el));

  /* ---------- Showcase drag + arrows ---------- */
  const track = $("#showTrack");
  const step = () => (track.querySelector(".shot")?.offsetWidth || 400) + 22;
  const dirSign = () => document.documentElement.dir === "rtl" ? -1 : 1;
  $("#shNext").onclick = () => track.scrollBy({ left: step() * dirSign(), behavior: "smooth" });
  $("#shPrev").onclick = () => track.scrollBy({ left: -step() * dirSign(), behavior: "smooth" });
  let down = false, sx = 0, sl = 0;
  track.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = track.scrollLeft; track.classList.add("dragging"); });
  addEventListener("pointerup", () => { down = false; track.classList.remove("dragging"); });
  addEventListener("pointermove", e => { if (down) track.scrollLeft = sl - (e.clientX - sx); });

  /* ---------- Product spotlight ---------- */
  const PRODUCTS = {
    azori: {
      name: "Azori", fabric: "Dara · Atlas", swatches: ["#d9ccb7", "#7b6466", "#c19a5b"],
      pieces: { three: [225, 100, 85], berg: [95, 100, 85] },
      spots: [
        { x: 40, y: 20, ar: ["القماش", "بوكليه ناعم بملمس دافئ"], en: ["Fabric", "Soft, warm-touch bouclé"] },
        { x: 33, y: 39, ar: ["التنجيد", "مخمل مضلّع بخياطة يدوية"], en: ["Upholstery", "Hand-stitched pleated velvet"] },
        { x: 39, y: 49, ar: ["القاعدة", "إطار ستانلس بلون ذهبي"], en: ["Base", "Gold-finish stainless frame"] },
        { x: 50, y: 38, ar: ["الطاولات", "سطح رخامي وأرجل مضلّعة"], en: ["Tables", "Marble tops, fluted bases"] },
        { x: 70, y: 27, ar: ["البيرجير", "بنفس التصميم والقماش"], en: ["Bergère", "Same design and fabric"] }
      ]
    },
    luka: {
      name: "Yeni Luka", fabric: "Troya", swatches: ["#e7dbc8", "#7a5a45", "#b08a6a"],
      pieces: { three: [230, 80, 100], berg: [115, 95, 90] },
      spots: [
        { x: 43, y: 46, ar: ["القماش", "Troya بملمس ناعم"], en: ["Fabric", "Soft-touch Troya"] },
        { x: 30, y: 55, ar: ["القاعدة", "ملفوفة بقماش متباين"], en: ["Base", "Wrapped in a contrast fabric"] },
        { x: 54, y: 58, ar: ["الأرجل", "خشب طبيعي متين"], en: ["Legs", "Solid natural wood"] },
        { x: 70, y: 55, ar: ["البيرجير", "طاولة جانبية مدمجة"], en: ["Bergère", "Built-in side table"] }
      ]
    }
  };
  const SHAPES = {
    three: "M30 92 V58 Q30 40 48 40 H272 Q290 40 290 58 V92 M20 92 H300 V80 Q300 70 290 70 M20 92 V80 Q20 70 30 70 M60 92 V100 M260 92 V100 M48 40 Q160 30 272 40",
    berg: "M105 92 V52 Q105 34 125 34 H195 Q215 34 215 52 V92 M95 92 H225 V78 Q225 68 215 68 M95 92 V78 Q95 68 105 68 M120 92 V100 M200 92 V100"
  };
  let spCur = "azori", spPiece = "three";
  const spKnob = $("#spKnob"), spDraw = $("#spDraw");
  function moveKnob() {
    const b = $(`.sp-switch__btn[data-product="${spCur}"]`);
    spKnob.style.left = b.offsetLeft + "px"; spKnob.style.width = b.offsetWidth + "px";
  }
  function renderSpots() {
    const en = document.documentElement.lang === "en", box = $("#spSpots");
    box.classList.remove("show");
    box.innerHTML = PRODUCTS[spCur].spots.map((p, i) => {
      const [t, d] = en ? p.en : p.ar;
      return `<button class="spot${p.y < 30 ? " low" : ""}" style="--x:${p.x}%;--y:${p.y}%;--i:${i}" aria-label="${t}"><span class="spot__tip"><b>${t}</b>${d}</span></button>`;
    }).join("");
    placeSpots();
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("show")));
    $$(".spot", box).forEach(s => s.addEventListener("click", () => { const o = s.classList.contains("open"); $$(".spot", box).forEach(x => x.classList.remove("open")); s.classList.toggle("open", !o); }));
  }
  // map image-relative hotspot coordinates onto the object-fit: cover box
  function placeSpots() {
    const box = $("#spSpots"), W = box.offsetWidth, H = box.offsetHeight, IW = 1800, IH = 997;
    const k = Math.max(W / IW, H / IH), ox = (W - IW * k) / 2, oy = (H - IH * k) / 2;
    $$(".spot", box).forEach((el, i) => {
      const p = PRODUCTS[spCur].spots[i];
      const x = ox + p.x / 100 * IW * k, y = oy + p.y / 100 * IH * k;
      el.style.setProperty("--px", x.toFixed(1) + "px");
      el.style.setProperty("--py", y.toFixed(1) + "px");
      el.hidden = x < 24 || x > W - 24 || y < 24 || y > H - 24; // cropped out of view
    });
  }
  function renderDims() {
    const d = PRODUCTS[spCur].pieces[spPiece];
    $$("[data-dim]").forEach(el => {
      const i = +el.dataset.dim, from = +el.textContent || 0, to = d[i], t0 = performance.now();
      const tick = t => { const p = Math.min((t - t0) / 900, 1); el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    $$("[data-bar]").forEach(el => el.style.width = (d[+el.dataset.bar] / 240 * 100).toFixed(1) + "%");
    $("#spShape").setAttribute("d", SHAPES[spPiece]);
    spDraw.classList.remove("go"); void spDraw.offsetWidth; spDraw.classList.add("go");
  }
  function renderProduct(first) {
    const p = PRODUCTS[spCur];
    $("#spSwatches").innerHTML = p.swatches.map(c => `<i style="background:${c}"></i>`).join("");
    $("#spFabric").textContent = p.fabric;
    const nameBox = $("#spName").parentElement;
    if (first) $("#spName").textContent = p.name;
    else { nameBox.classList.add("swap"); setTimeout(() => { $("#spName").textContent = p.name; nameBox.classList.remove("swap"); }, 350); }
    renderSpots(); renderDims(); moveKnob();
  }
  $$(".sp-switch__btn").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.product === spCur) return;
    const prev = $(`.sp-img[data-product="${spCur}"]`), next = $(`.sp-img[data-product="${b.dataset.product}"]`);
    prev.classList.remove("active"); prev.classList.add("leaving"); next.classList.add("active");
    setTimeout(() => prev.classList.remove("leaving"), 1250);
    $$(".sp-switch__btn").forEach(x => x.classList.toggle("active", x === b));
    spCur = b.dataset.product; renderProduct();
  }));
  $$(".sp-piece").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.piece === spPiece) return;
    $$(".sp-piece").forEach(x => x.classList.toggle("active", x === b));
    spPiece = b.dataset.piece; renderDims();
  }));
  // start the drawing/bars when the card scrolls into view
  const spIo = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { renderProduct(true); spIo.disconnect(); } }), { threshold: .25 });
  spIo.observe($(".sp-card"));
  addEventListener("resize", () => { moveKnob(); placeSpots(); });
  requestAnimationFrame(moveKnob);

  /* ---------- Quote form → WhatsApp ---------- */
  $("#quoteForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const lines = [
      "NovaX Global — Quote Request",
      `Name: ${f.get("name")}`, `Company: ${f.get("company") || "-"}`,
      `Phone: ${f.get("phone")}`, `Country: ${f.get("country")}`,
      `Type: ${f.get("type")}`, `Details: ${f.get("msg") || "-"}`
    ];
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });

  $("#year").textContent = new Date().getFullYear();
})();
