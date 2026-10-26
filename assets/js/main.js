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
    "coll.hint": "Hover a collection to open it", "coll.models": "models", "coll.model": "model",
    "proc.now": "Current stage", "proc.cta": "Start your project",
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
    "reg.lead": "From our warehouses in Türkiye we ship by land and sea to four main regions. Pick yours to see the route.",
    "show.lead": "A selection of the models our clients in the Gulf and Europe order most. Drag or use the arrows to browse.",
    "reg.live": "Active routes", "reg.drag": "Drag to spin the globe",
    "r1.t": "Arabian Gulf", "r1.d": "Saudi Arabia · UAE · Qatar · Kuwait · Oman · Bahrain",
    "r2.t": "Middle East", "r2.d": "Iraq · Jordan · Lebanon · Syria",
    "r3.t": "North Africa", "r3.d": "Libya · Algeria · Morocco · Tunisia · Egypt",
    "r4.t": "Europe", "r4.d": "Germany · France · Netherlands · Belgium · UK",
    "show.eyebrow": "Selected", "show.title": "Designs that <em>make the difference</em>",
    "tag.living": "Living", "sp.hint": "Hover the dots to explore the details",
    "sp.eyebrow": "Product Spotlight", "sp.title": "Details you <em>feel</em> before you see",
    "sp.set": "Sofa Set", "sp.berg": "Bergère", "sp.three": "3-Seater", "sp.len": "Length", "sp.hei": "Height", "sp.dep": "Depth",
    "sp.fab": "Fabric", "sp.custom": "All sizes, fabrics and colours can be customised to order.", "sp.ask": "Ask for price",
    "cat.eyebrow": "Catalog 2026", "cat.title": "All our collections in <em>one catalog</em>",
    "cat.f1": "Up-to-date export prices", "cat.f2": "Dimensions for every piece", "cat.f3": "Available fabric colours", "cat.f4": "Shipping and delivery terms",
    "cat.note": "We send the catalog on WhatsApp. No spam.", "cat.hint": "Hover to open the catalog",
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
    try { pCurrent = -2; processScroll(); } catch (e) { /* timeline not ready yet */ }
    if (window.__cfLayout) window.__cfLayout();
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

  /* ---------- Showcase: 3D coverflow ---------- */
  (() => {
    const stage = $("#cfStage"), cards = $$(".cf-card", stage), N = cards.length, AUTO = 5000;
    let pos = 0, dragX = null, dragOff = 0, timer;
    $("#cfTotal").textContent = String(N).padStart(2, "0");
    const rtl = () => document.documentElement.dir === "rtl";
    const wrapD = d => ((d % N) + N + N / 2) % N - N / 2; // shortest signed distance on the ring

    function layout() {
      const w = cards[0].offsetWidth, s = rtl() ? -1 : 1;
      cards.forEach((c, i) => {
        const d = wrapD(i - pos - dragOff), a = Math.abs(d);
        const x = d * w * .62 * s, z = -a * 220, ry = -d * 22 * s, sc = 1 - Math.min(a, 3) * .06;
        c.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${ry}deg) scale(${sc})`;
        c.style.opacity = a > 2.6 ? 0 : 1;
        c.style.zIndex = 100 - Math.round(a * 10);
        c.style.filter = `brightness(${(1 - Math.min(a, 2) * .28).toFixed(2)})`;
        c.classList.toggle("is-active", Math.round(a * 100) === 0);
      });
    }
    function update() {
      const i = ((pos % N) + N) % N, name = cards[i].dataset.name;
      $("#cfIdx").textContent = String(i + 1).padStart(2, "0");
      $("#cfProg").style.transform = `scaleX(${(i + 1) / N})`;
      const nm = $("#cfName").parentElement, bg = $("#shBg").parentElement;
      nm.classList.add("swap"); bg.classList.add("swap");
      setTimeout(() => { $("#cfName").textContent = name; $("#shBg").textContent = name; nm.classList.remove("swap"); bg.classList.remove("swap"); }, 320);
      layout();
    }
    const go = d => { pos += d; update(); restart(); };
    function restart() { clearTimeout(timer); timer = setTimeout(() => go(1), AUTO); }

    $("#cfNext").onclick = () => go(1);
    $("#cfPrev").onclick = () => go(-1);
    stage.addEventListener("mouseenter", () => clearTimeout(timer));
    stage.addEventListener("mouseleave", restart);

    // drag / swipe; a tap on a side card brings it to the front
    let downCard = null, moved = false;
    stage.addEventListener("pointerdown", e => {
      dragX = e.clientX; dragOff = 0; moved = false; downCard = e.target.closest(".cf-card");
      stage.setPointerCapture(e.pointerId); clearTimeout(timer);
    });
    stage.addEventListener("pointermove", e => {
      if (dragX === null) return;
      const dx = e.clientX - dragX; if (Math.abs(dx) > 6) { moved = true; stage.classList.add("dragging"); }
      if (!moved) return;
      dragOff = -dx / (cards[0].offsetWidth * .62) * (rtl() ? -1 : 1); layout();
    });
    const end = () => {
      if (dragX === null) return;
      let step = Math.round(dragOff); dragX = null; dragOff = 0;
      stage.classList.remove("dragging");
      if (!moved && downCard) step = Math.round(wrapD(cards.indexOf(downCard) - pos));
      if (step) go(step); else { layout(); restart(); }
    };
    stage.addEventListener("pointerup", end); stage.addEventListener("pointercancel", end);
    addEventListener("keydown", e => {
      const r = $("#showcase").getBoundingClientRect(); if (r.top > innerHeight || r.bottom < 0) return;
      if (e.key === "ArrowRight") go(rtl() ? -1 : 1); if (e.key === "ArrowLeft") go(rtl() ? 1 : -1);
    });
    addEventListener("resize", layout);
    update(); restart();
    window.__cfLayout = layout;
  })();

  /* ---------- Collections accordion ---------- */
  const panels = $$(".cpanel");
  const openPanel = p => panels.forEach(x => x.classList.toggle("active", x === p));
  panels.forEach(p => {
    p.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover)").matches) openPanel(p); });
    p.addEventListener("click", () => openPanel(p));
    p.addEventListener("focus", () => openPanel(p));
  });

  /* ---------- Process timeline ---------- */
  const psteps = $("#psteps"), pFill = $("#pstepsFill"), pItems = $$(".pstep"), pmFill = $("#pmFill");
  let pCurrent = -1;
  function processScroll() {
    const r = psteps.getBoundingClientRect(), mid = innerHeight * .55;
    if (r.bottom < -200 || r.top > innerHeight + 200) return;
    const line = psteps.querySelector(".psteps__line"), lr = line.getBoundingClientRect();
    const h = Math.min(Math.max(mid - lr.top, 0), lr.height);
    pFill.style.height = h + "px";
    let cur = -1;
    pItems.forEach((it, i) => {
      const on = it.querySelector(".pstep__dot").getBoundingClientRect().top + 30 < mid;
      it.classList.toggle("on", on); if (on) cur = i;
    });
    if (cur !== pCurrent) {
      pCurrent = cur;
      pItems.forEach((it, i) => it.classList.toggle("current", i === cur));
      const n = Math.max(cur, 0);
      $("#pmNum").textContent = String(n + 1).padStart(2, "0");
      $("#pmTitle").textContent = pItems[n].querySelector("h3").textContent;
      pmFill.style.strokeDashoffset = 1 - (cur + 1) / pItems.length;
    }
  }
  addEventListener("scroll", processScroll, { passive: true }); processScroll();

  /* ---------- Markets globe ---------- */
  (() => {
    const wrap = $("#globe"), cv = $("#globeCanvas"), ctx = cv.getContext("2d"), tabs = $("#rtabs");
    const D = Math.PI / 180, HUB = [41.0, 29.0];
    const CITIES = {
      gulf: [["Riyadh", 24.7, 46.7, "l"], ["Dubai", 25.2, 55.3], ["Doha", 25.3, 51.5, "b"], ["Kuwait", 29.4, 48.0], ["Muscat", 23.6, 58.4, "b"]],
      levant: [["Baghdad", 33.3, 44.4], ["Erbil", 36.2, 44.0], ["Amman", 31.9, 35.9], ["Beirut", 33.9, 35.5], ["Damascus", 33.5, 36.3]],
      africa: [["Tripoli", 32.9, 13.2], ["Algiers", 36.8, 3.1], ["Casablanca", 33.6, -7.6], ["Tunis", 36.8, 10.2], ["Cairo", 30.0, 31.2]],
      europe: [["Berlin", 52.5, 13.4], ["Paris", 48.9, 2.35], ["Amsterdam", 52.4, 4.9], ["Brussels", 50.8, 4.4], ["London", 51.5, -0.1]]
    };
    const FOCUS = { gulf: [32, 40], levant: [36.5, 34], africa: [36, 16], europe: [46, 16] };
    const RDUR = 6000;
    tabs.style.setProperty("--rdur", RDUR + "ms");

    let region = "gulf", lat0 = 32, lon0 = 38, tLat = 30, tLon = 42, W = 0, R = 0, cx = 0, cy = 0, dpr = 1, visible = false, t0 = performance.now();
    let cycleTimer, resumeTimer;

    // texture: evenly spread dots on the sphere
    const DOTS = [];
    for (let i = 0, n = 9000; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
      DOTS.push([Math.asin(y) / D, Math.atan2(Math.sin(th) * r, Math.cos(th) * r) / D]);
    }

    const vec = (lat, lon) => [Math.cos(lat * D) * Math.cos(lon * D), Math.cos(lat * D) * Math.sin(lon * D), Math.sin(lat * D)];
    function project(v) {
      const r = Math.hypot(v[0], v[1], v[2]), lat = Math.asin(v[2] / r), lon = Math.atan2(v[1], v[0]);
      const dl = lon - lon0 * D, cl0 = Math.cos(lat0 * D), sl0 = Math.sin(lat0 * D);
      const x = Math.cos(lat) * Math.sin(dl);
      const y = cl0 * Math.sin(lat) - sl0 * Math.cos(lat) * Math.cos(dl);
      const z = sl0 * Math.sin(lat) + cl0 * Math.cos(lat) * Math.cos(dl);
      return [cx + x * R * r, cy - y * R * r, z, r];
    }
    function arcPoints(a, b, steps = 48) {
      const va = vec(a[0], a[1]), vb = vec(b[0], b[1]);
      const om = Math.acos(Math.min(1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2])), so = Math.sin(om) || 1;
      const h = .06 + om * .35, pts = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps, k1 = Math.sin((1 - t) * om) / so, k2 = Math.sin(t * om) / so, lift = 1 + h * Math.sin(Math.PI * t);
        pts.push(project([(va[0] * k1 + vb[0] * k2) * lift, (va[1] * k1 + vb[1] * k2) * lift, (va[2] * k1 + vb[2] * k2) * lift]));
      }
      return pts;
    }
    const front = p => p[2] > -0.05 || p[3] > 1.02 && p[2] > -0.35;

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2); W = wrap.clientWidth;
      cv.width = W * dpr; cv.height = W * dpr; R = W * 1.1; LENS = W * .46; cx = cy = W / 2;
    }
    let LENS = 0;

    function draw(now) {
      const t = (now - t0) / 1000;
      // ease the view toward its target, with a gentle idle drift
      lat0 += (tLat - lat0) * .05;
      lon0 += (tLon + Math.sin(t * .3) * 3 - lon0) * .05;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, W);

      // the globe is larger than the frame: we look at it through a round lens
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, LENS, 0, Math.PI * 2); ctx.clip();
      const g = ctx.createRadialGradient(cx - LENS * .4, cy - LENS * .5, LENS * .1, cx, cy, LENS * 1.1);
      g.addColorStop(0, "rgba(64,55,40,1)"); g.addColorStop(.65, "rgba(26,24,18,1)"); g.addColorStop(1, "rgba(13,13,11,1)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, W);

      // graticule
      ctx.strokeStyle = "rgba(244,239,230,.06)"; ctx.lineWidth = 1;
      for (let la = -80; la <= 80; la += 10) {
        ctx.beginPath(); let pen = false;
        for (let lo = -180; lo <= 180; lo += 4) { const p = project(vec(la, lo)); if (p[2] > 0) { pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); pen = true; } else pen = false; }
        ctx.stroke();
      }
      for (let lo = -180; lo < 180; lo += 10) {
        ctx.beginPath(); let pen = false;
        for (let la = -90; la <= 90; la += 4) { const p = project(vec(la, lo)); if (p[2] > 0) { pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); pen = true; } else pen = false; }
        ctx.stroke();
      }

      // dot texture
      for (const [la, lo] of DOTS) {
        const p = project(vec(la, lo)); if (p[2] <= 0) continue;
        const dx = p[0] - cx, dy = p[1] - cy; if (dx * dx + dy * dy > LENS * LENS) continue;
        ctx.fillStyle = `rgba(226,196,143,${(.06 + p[2] * .22).toFixed(3)})`;
        ctx.fillRect(p[0] - .8, p[1] - .8, 1.6, 1.6);
      }

      // routes
      for (const key of Object.keys(CITIES)) {
        const on = key === region;
        CITIES[key].forEach(([name, la, lo, side], i) => {
          const pts = arcPoints(HUB, [la, lo]);
          ctx.beginPath(); let pen = false;
          for (const p of pts) { if (front(p)) { pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); pen = true; } else pen = false; }
          ctx.strokeStyle = on ? "rgba(226,196,143,.85)" : "rgba(193,154,91,.18)"; ctx.lineWidth = on ? 1.4 : 1; ctx.stroke();
          if (on) {
            // a light travelling along the route
            const k = ((t * .35 + i * .17) % 1), idx = Math.floor(k * (pts.length - 1)), p = pts[idx];
            if (front(p)) {
              const gl = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 9);
              gl.addColorStop(0, "rgba(255,236,200,1)"); gl.addColorStop(1, "rgba(226,196,143,0)");
              ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(p[0], p[1], 9, 0, Math.PI * 2); ctx.fill();
            }
          }
          const c = project(vec(la, lo));
          if (c[2] > 0) {
            ctx.fillStyle = on ? "#e2c48f" : "rgba(193,154,91,.45)";
            ctx.beginPath(); ctx.arc(c[0], c[1], on ? 3.2 : 2, 0, Math.PI * 2); ctx.fill();
            if (on) {
              const pr = (t * .8 + i * .2) % 1;
              ctx.strokeStyle = `rgba(226,196,143,${(1 - pr).toFixed(2)})`; ctx.beginPath(); ctx.arc(c[0], c[1], 3 + pr * 12, 0, Math.PI * 2); ctx.stroke();
              ctx.fillStyle = "rgba(244,239,230,.9)"; ctx.font = "500 11.5px Manrope, sans-serif";
              if (side === "l") { ctx.textAlign = "right"; ctx.fillText(name, c[0] - 8, c[1] + 4); }
              else if (side === "b") { ctx.textAlign = "center"; ctx.fillText(name, c[0], c[1] + 18); }
              else { ctx.textAlign = "left"; ctx.fillText(name, c[0] + 8, c[1] + 4); }
            }
          }
        });
      }

      // hub
      const h = project(vec(HUB[0], HUB[1]));
      if (h[2] > 0) {
        const pr = (t * .6) % 1;
        ctx.strokeStyle = `rgba(226,196,143,${(1 - pr).toFixed(2)})`; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(h[0], h[1], 6 + pr * 22, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "#e2c48f"; ctx.beginPath(); ctx.arc(h[0], h[1], 5.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#e2c48f"; ctx.font = "600 13px Manrope, sans-serif"; ctx.textAlign = "left";
        ctx.fillText("TÜRKİYE", h[0] + 10, h[1] - 10);
      }
      // inner vignette so the lens edge reads as a curved horizon
      const vg = ctx.createRadialGradient(cx, cy, LENS * .6, cx, cy, LENS);
      vg.addColorStop(0, "rgba(13,13,11,0)"); vg.addColorStop(1, "rgba(13,13,11,.75)");
      ctx.fillStyle = vg; ctx.fillRect(0, 0, W, W);
      ctx.restore();

      ctx.strokeStyle = "rgba(193,154,91,.45)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, LENS, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([2, 6]); ctx.strokeStyle = "rgba(193,154,91,.25)";
      ctx.beginPath(); ctx.arc(cx, cy, LENS + 14, t * .1, t * .1 + Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);

      if (visible) requestAnimationFrame(draw);
    }

    function setRegion(key, user) {
      region = key; [tLat, tLon] = FOCUS[key];
      $$(".rtab", tabs).forEach(b => {
        const on = b.dataset.region === key; b.classList.toggle("active", on);
        if (on) { const bar = b.querySelector(".rtab__bar i"); bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = ""; }
      });
      if (user) pause();
    }
    function cycle() { clearTimeout(cycleTimer); cycleTimer = setTimeout(() => { const k = Object.keys(CITIES); setRegion(k[(k.indexOf(region) + 1) % k.length]); cycle(); }, RDUR); }
    function pause() { clearTimeout(cycleTimer); clearTimeout(resumeTimer); tabs.classList.add("paused"); resumeTimer = setTimeout(() => { tabs.classList.remove("paused"); setRegion(region); cycle(); }, 12000); }

    $$(".rtab", tabs).forEach(b => b.addEventListener("click", () => setRegion(b.dataset.region, true)));

    // drag to spin
    let drag = null;
    wrap.addEventListener("pointerdown", e => { drag = [e.clientX, e.clientY, tLon, tLat]; wrap.classList.add("dragging"); wrap.setPointerCapture(e.pointerId); pause(); });
    wrap.addEventListener("pointermove", e => {
      if (!drag) return;
      tLon = drag[2] - (e.clientX - drag[0]) * .12;
      tLat = Math.max(10, Math.min(60, drag[3] + (e.clientY - drag[1]) * .12));
    });
    const endDrag = () => { drag = null; wrap.classList.remove("dragging"); };
    wrap.addEventListener("pointerup", endDrag); wrap.addEventListener("pointercancel", endDrag);

    resize(); addEventListener("resize", resize);
    new IntersectionObserver(es => es.forEach(e => {
      const was = visible; visible = e.isIntersecting;
      if (visible && !was) { requestAnimationFrame(draw); if (!tabs.classList.contains("paused")) cycle(); }
      if (!visible) clearTimeout(cycleTimer);
    }), { rootMargin: "100px" }).observe(wrap);
    draw(performance.now());
  })();

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

  /* ---------- Catalog book + quick request ---------- */
  const bookWrap = $("#bookWrap"), book = $("#book");
  bookWrap.addEventListener("mousemove", e => {
    if (bookWrap.matches(":hover") && bookWrap.classList.contains("open")) return;
    const r = bookWrap.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    book.style.setProperty("--ry", (-8 + x * 16).toFixed(1) + "deg");
    book.style.setProperty("--rx", (4 - y * 10).toFixed(1) + "deg");
  });
  bookWrap.addEventListener("mouseleave", () => { book.style.removeProperty("--ry"); book.style.removeProperty("--rx"); });
  bookWrap.addEventListener("click", () => bookWrap.classList.toggle("open"));
  $("#catForm").addEventListener("submit", e => {
    e.preventDefault();
    const phone = $("#catPhone").value.trim();
    const msg = `NovaX Global — please send me the 2026 catalog.\nMy WhatsApp: ${phone}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });

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
