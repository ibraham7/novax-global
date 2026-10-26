/* NovaX Global — interactions */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WHATSAPP = "900000000000"; // TODO: رقم واتساب الشركة

  /* ---------- i18n ---------- */
  const EN = {
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
    "p1.t": "Factory Direct", "p1.d": "No middlemen, factory prices.",
    "p2.t": "Strict Quality Control", "p2.d": "Every piece inspected before loading.",
    "p3.t": "Shipping & Customs", "p3.d": "Sea and land freight to your warehouse.",
    "p4.t": "Made to Order", "p4.d": "Your sizes, fabrics and finishes.",
    "coll.eyebrow": "Collections", "coll.title": "Every room deserves <em>a Turkish piece</em>",
    "c1.t": "Living Rooms", "c1.d": "Sofas, corner sets, coffee tables and TV units.",
    "c2.t": "Bedrooms", "c2.d": "Beds, wardrobes, dressers and kids' rooms.",
    "c3.t": "Dining Rooms", "c3.d": "Tables, chairs, sideboards and vitrines.",
    "c4.t": "Hotels & Projects", "c4.d": "Full fit-out for hotels, serviced apartments and restaurants.",
    "c5.t": "Offices", "c5.d": "Executive desks, meeting rooms and workspaces.",
    "c6.t": "Outdoor", "c6.d": "Sun- and humidity-resistant outdoor lounges.",
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
    "tag.living": "Living", "tag.bed": "Bedroom", "tag.dining": "Dining", "tag.accent": "Accent",
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

  function setLang(lang) {
    const dict = lang === "en" ? EN : AR;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(el => { const v = dict[el.dataset.i18n]; if (v) el.textContent = v; });
    $$("[data-i18n-html]").forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v) el.innerHTML = v; });
    $$(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
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
  const slides = $$(".hero__slide"), dots = $("#heroDots"), idx = $("#heroIdx");
  let cur = 0, timer;
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", `Slide ${i + 1}`);
    b.innerHTML = "<i></i>";
    b.onclick = () => go(i);
    dots.appendChild(b);
  });
  function go(i) {
    slides[cur].classList.remove("active"); dots.children[cur].classList.remove("active");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("active");
    const d = dots.children[cur]; d.classList.remove("active"); void d.offsetWidth; d.classList.add("active");
    idx.textContent = String(cur + 1).padStart(2, "0");
    clearTimeout(timer); timer = setTimeout(() => go(cur + 1), 6000);
  }
  go(0);

  /* ---------- Marquee (duplicate for seamless loop) ---------- */
  const mq = $("#marquee"); mq.innerHTML += mq.innerHTML;

  /* ---------- Header ---------- */
  const header = $("#header"); let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY;
    header.classList.toggle("scrolled", y > 60);
    header.classList.toggle("hide", y > lastY && y > 500 && !document.body.classList.contains("menu-open"));
    lastY = y;
    const bg = $("#catalogBg");
    if (bg) { const r = bg.parentElement.getBoundingClientRect(); bg.style.transform = `translateY(${r.top * -0.15}px)`; }
  }, { passive: true });

  $("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
  }), { threshold: .15, rootMargin: "0px 0px -60px 0px" });
  $$(".reveal, .frame, .globe").forEach(el => io.observe(el));

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

  /* ---------- Custom cursor ---------- */
  const cur1 = $("#cursor"), dot = $("#cursorDot");
  let mx = 0, my = 0, cx = 0, cy = 0;
  addEventListener("mousemove", e => { document.body.classList.add("has-mouse"); mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
  (function loop() { cx += (mx - cx) * .15; cy += (my - cy) * .15; cur1.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => cur1.classList.toggle("is-hover", !!e.target.closest("a, button, [data-hover]")));

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
