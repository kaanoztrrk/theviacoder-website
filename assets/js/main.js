/* ============================================
   KAAN.CODES — Portfolio JavaScript
   ============================================ */

/* ---- Language copy ---- */
const COPY = {
  en: {
    heroIm: "Hi, I'm",
    phrases: [
      "I build mobile products.",
      "I write clean Flutter code.",
      "I turn ideas into apps.",
    ],
    heroSub:
      "Creating <strong>high-quality Flutter applications</strong> with a focus on <strong>performance</strong> and <strong>user experience</strong>.",
    statusText: "Available",
    cvBtn: "Download CV",

    tlAbout: "About Me",
    tlResume: "Skills",
    tlApps: "Apps",
    tlWriting: "Writing",
    tlContact: "Contact",

    ilName: "Name",
    ilLocation: "Location",
    ilFocus: "Focus",
    ilFocusVal: "Flutter / Mobile",

    abEyebrow: "ABOUT ME",
    abTitle: "Flutter-focused mobile application developer",
    abBody1:
      "I develop end-to-end mobile applications using Flutter. I manage the full development cycle including UI/UX implementation, scalable architecture design, state management with BLoC, REST API integration, and application deployment. I follow clean architecture principles to build maintainable, testable, and production-ready codebases.",
    abBody2:
      "My focus area is building mobile applications that solve finance and everyday life problems. In my spare time, I work on mobile game projects. I prioritize performance, modular structure, and long-term maintainability. I share my projects under the @kaan.codes identity.",
    cvBtnAbout: "Download CV",
    slApps: "Published apps",
    slYears: "Years experience",
    slFocus: "Primary stack",

    skEyebrow: "SKILLS",
    skTitle: "Stack & expertise",
    sgTech: "Tech Stack",
    sgProduct: "Product & Monetization",
    sgTools: "Tools",

    apEyebrow: "APPS",
    apTitle: "Things I've built",
    apSub: "Real apps on Google Play. No tutorial projects.",

    suCategory: "SaaS Project",
    suBadge: "Founder",
    suDesc:
      "Multi-tenant B2B SaaS platform for beauty salons and barbershops. Manage appointments, customers, staff, inventory, services, and subscriptions with secure role-based access and real-time synchronization.",
    suLink: "View on Web App",

    fbCategory: "SaaS Project",
    fbBadge: "Client",
    fbDesc:
      "Multi-tenant B2B SaaS for LPG conversion dealers. Manages customers, vehicles, installations, technicians, and product catalogs across a dealer network with real-time dashboards.",
    fbLink: "View on GitHub",

    wvCategory: "Daily Puzzle Game",
    wvBadge: "Live",
    wvDesc:
      "Daily word puzzle game. Wordle-style with Daily and Levels modes, three themes (Dark / Light / Noir), and a one-time premium IAP.",
    wvLink: "View on Play Store",

    puCategory: "Enterprise Client Project",
    puBadge: "Professional Project",
    puDesc:
      "Developed the corporate Flutter mobile application for Poshta UA, a Ukrainian logistics and delivery company. Implemented the mobile client, authentication flow, shipment tracking, and API integration for production use.",
    puLink: "View Company",

    mvCategory: "Hackathon Winner",
    mvBadge: "🏆 Winner",
    mvDesc:
      'Built the mobile application for MatchVest during the Cube Incubation Hackathon in the defense industry technopark. Contributed as the Flutter Mobile Developer, delivering the MVP that won <strong>1st place</strong>.',
    mvLink: "View on GitHub",

    nnCategory: "Client Project",
    nnBadge: "Client",
    nnDesc:
      "Developed the first version of the NullNull mobile application for a client. Built with Flutter, focusing on performance, clean architecture, and a smooth user experience.",
    nnLink: "View on Play Store",

    arEyebrow: "WRITING",
    arTitle: "Articles & posts",
    arSub: "Thoughts on indie development, Flutter, and building products.",

    ctEyebrow: "CONTACT",
    ctTitle: "Let's connect",
    ctBody:
      "Open to feedback on my apps, collab ideas, or just a good conversation about indie development.",
    ctEmailLbl: "Email",
    flName: "Your name",
    flEmail: "Email",
    flMsg: "Message",
    flSend: "Send message",
    formOk: "Message sent — thanks!",
    formErr: "Something went wrong. Try emailing directly.",
    formNetErr: "Connection error. Try again later.",

    footerText: "Built with ♥ by M. Kaan Öztürk · 2026",
  },

  tr: {
    heroIm: "Merhaba, Ben",
    phrases: [
      "Flutter ile geliştiriyorum.",
      "Gerçek ürünler üretiyorum.",
      "Kullanıcı odaklı düşünüyorum.",
    ],
    heroSub:
      "Performans ve <strong>kullanıcı deneyimini</strong> odağına alan <strong>yüksek kaliteli Flutter uygulamaları</strong> geliştiriyorum.",
    statusText: "Müsait",
    cvBtn: "CV İndir",

    tlAbout: "Hakkımda",
    tlResume: "Beceriler",
    tlApps: "Uygulamalar",
    tlWriting: "Yazılar",
    tlContact: "İletişim",

    ilName: "İsim",
    ilLocation: "Konum",
    ilFocus: "Odak",
    ilFocusVal: "Flutter / Mobil",

    abEyebrow: "HAKKIMDA",
    abTitle: "Flutter odaklı mobil uygulama geliştirici",
    abBody1:
      "Flutter kullanarak uçtan uca mobil uygulamalar geliştiriyorum. UI/UX implementasyonu, ölçeklenebilir mimari tasarımı, BLoC ile state management, REST API entegrasyonu ve uygulama yayınlama süreçlerinin tamamını yönetiyorum. Temiz mimari prensipleriyle sürdürülebilir, test edilebilir ve üretime hazır kod yapıları kuruyorum.",
    abBody2:
      "Odak alanım finans ve günlük hayat problemlerini çözen mobil uygulamalar geliştirmek. Boş zamanlarımda ise mobil oyun projeleriyle ilgileniyorum. Performans, modüler yapı ve uzun vadeli bakım kolaylığına önem veriyorum. Geliştirdiğim ürünleri @kaan.codes hesabı üzerinden paylaşıyorum.",
    cvBtnAbout: "CV İndir",
    slApps: "Yayınlanan uygulama",
    slYears: "Yıllık deneyim",
    slFocus: "Ana teknoloji",

    skEyebrow: "BECERİLER",
    skTitle: "Teknoloji yığını",
    sgTech: "Teknoloji Yığını",
    sgProduct: "Ürün & Monetizasyon",
    sgTools: "Araçlar",

    apEyebrow: "UYGULAMALAR",
    apTitle: "Yaptıklarım",
    apSub: "Google Play'de gerçek uygulamalar. Tutorial projesi değil.",

    suCategory: "SaaS Projesi",
    suBadge: "Kurucu",
    suDesc:
      "Güzellik salonları ve berberler için çok kiracılı (multi-tenant) B2B SaaS platformu. Randevu, müşteri, personel, stok, hizmet ve abonelik yönetimi; güvenli rol tabanlı erişim ve gerçek zamanlı senkronizasyon.",
    suLink: "Web Uygulamasını Aç",

    fbCategory: "SaaS Projesi",
    fbBadge: "Müşteri",
    fbDesc:
      "LPG dönüşüm bayileri için çok kiracılı (multi-tenant) B2B SaaS. Bayi ağı genelinde müşteri, araç, montaj, teknisyen ve ürün kataloglarını gerçek zamanlı panellerle yönetir.",
    fbLink: "GitHub'da Gör",

    wvCategory: "Günlük Bulmaca Oyunu",
    wvBadge: "Yayında",
    wvDesc:
      "Günlük kelime bulmacası. Günlük ve Seviye modları, üç tema (Koyu / Açık / Noir) ve tek seferlik premium IAP.",
    wvLink: "Play Store'da Gör",

    puCategory: "Kurumsal Müşteri Projesi",
    puBadge: "Profesyonel Proje",
    puDesc:
      "Ukrayna merkezli bir lojistik ve kargo şirketi olan Poshta UA için kurumsal Flutter mobil uygulamasını geliştirdim. Mobil istemciyi, kimlik doğrulama akışını, gönderi takibini ve üretim ortamı için API entegrasyonunu uyguladım.",
    puLink: "Şirketi Görüntüle",

    mvCategory: "Hackathon Birincisi",
    mvBadge: "🏆 Birinci",
    mvDesc:
      "Savunma sanayi teknoparkında düzenlenen Cube Incubation Hackathon'da MatchVest için mobil uygulamayı geliştirdim. Flutter Mobile Developer olarak katkı sağlayarak <strong>1. olan</strong> MVP'yi teslim ettim.",
    mvLink: "GitHub'da Gör",

    nnCategory: "Müşteri Projesi",
    nnBadge: "Müşteri",
    nnDesc:
      "Bir müşteri için NullNull mobil uygulamasının ilk versiyonunu geliştirdim. Flutter ile performans, temiz mimari ve akıcı kullanıcı deneyimine odaklanarak inşa ettim.",
    nnLink: "Play Store'da Gör",

    arEyebrow: "YAZILAR",
    arTitle: "Makaleler & yazılar",
    arSub:
      "Bağımsız geliştirme, Flutter ve ürün geliştirme üzerine düşünceler.",

    ctEyebrow: "İLETİŞİM",
    ctTitle: "Bağlanalım",
    ctBody:
      "Uygulamalar hakkında geri bildirim, iş birliği fikirleri veya bağımsız geliştirme üzerine sohbet için yazabilirsin.",
    ctEmailLbl: "E-posta",
    flName: "Adın",
    flEmail: "E-posta",
    flMsg: "Mesaj",
    flSend: "Gönder",
    formOk: "Mesaj iletildi — teşekkürler!",
    formErr: "Bir şeyler ters gitti. Doğrudan e-posta göndermeyi dene.",
    formNetErr: "Bağlantı hatası. Daha sonra tekrar dene.",

    footerText: "M. Kaan Öztürk tarafından ♥ ile yapıldı · 2026",
  },
};

/* ---- State ---- */
let currentLang = "en";
let typingTimer = null;
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let skillsAnimated = false;

/* ---- Tab switching ---- */
function switchTab(tabId, btn) {
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-selected", "false");
  });

  const panel = document.getElementById("panel-" + tabId);
  if (panel) panel.classList.add("active");
  if (btn) {
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
  }

  if (tabId === "resume" && !skillsAnimated) {
    setTimeout(animateSkillBars, 80);
    skillsAnimated = true;
  }

  setTimeout(() => {
    const wrapper = document.querySelector(".panels-wrapper");
    if (wrapper) {
      const top = wrapper.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 50);
}

function animateSkillBars() {
  document.querySelectorAll(".skill-fill").forEach((fill) => {
    const target = fill.getAttribute("data-width");
    if (target) fill.style.width = target + "%";
  });
}

/* ---- Helper: safe setter (element yoksa hata vermez) ---- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ---- Language switching ---- */
function setLang(lang) {
  currentLang = lang;

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-tr").classList.toggle("active", lang === "tr");
  document.documentElement.setAttribute("lang", lang);

  const c = COPY[lang];

  // Hero
  setText("hero-im", c.heroIm);
  setHTML("hero-sub", c.heroSub);
  setText("status-text", c.statusText);
  setText("cv-btn-top", c.cvBtn);

  // Tab labels
  setText("tl-about", c.tlAbout);
  setText("tl-resume", c.tlResume);
  setText("tl-apps", c.tlApps);
  setText("tl-writing", c.tlWriting);
  setText("tl-contact", c.tlContact);

  // About
  setText("il-name", c.ilName);
  setText("il-location", c.ilLocation);
  setText("il-focus", c.ilFocus);
  setText("il-focus-val", c.ilFocusVal);
  setText("ab-eyebrow", c.abEyebrow);
  setText("ab-title", c.abTitle);
  setHTML("ab-body1", c.abBody1);
  setHTML("ab-body2", c.abBody2);
  setText("cv-btn-about", c.cvBtnAbout);
  setText("sl-apps", c.slApps);
  setText("sl-years", c.slYears);
  setText("sl-focus", c.slFocus);

  // Skills
  setText("sk-eyebrow", c.skEyebrow);
  setText("sk-title", c.skTitle);
  setText("sg-tech", c.sgTech);
  setText("sg-product", c.sgProduct);
  setText("sg-tools", c.sgTools);

  // Apps
  setText("ap-eyebrow", c.apEyebrow);
  setText("ap-title", c.apTitle);
  setText("ap-sub", c.apSub);

  setText("su-category", c.suCategory);
  setText("su-badge", c.suBadge);
  setText("su-desc", c.suDesc);
  setText("su-link", c.suLink);

  setText("fb-category", c.fbCategory);
  setText("fb-badge", c.fbBadge);
  setText("fb-desc", c.fbDesc);
  setText("fb-link", c.fbLink);

  setText("wv-category", c.wvCategory);
  setText("wv-badge", c.wvBadge);
  setText("wv-desc", c.wvDesc);
  setText("wv-link", c.wvLink);

  setText("pu-category", c.puCategory);
  setText("pu-badge", c.puBadge);
  setText("pu-desc", c.puDesc);
  setText("pu-link", c.puLink);

  setText("mv-category", c.mvCategory);
  setText("mv-badge", c.mvBadge);
  setHTML("mv-desc", c.mvDesc);
  setText("mv-link", c.mvLink);

  setText("nn-category", c.nnCategory);
  setText("nn-badge", c.nnBadge);
  setText("nn-desc", c.nnDesc);
  setText("nn-link", c.nnLink);

  // Writing / Articles
  setText("ar-eyebrow", c.arEyebrow);
  setText("ar-title", c.arTitle);
  setText("ar-sub", c.arSub);

  // Contact
  setText("ct-eyebrow", c.ctEyebrow);
  setText("ct-title", c.ctTitle);
  setText("ct-body", c.ctBody);
  setText("ct-email-lbl", c.ctEmailLbl);
  setText("fl-name", c.flName);
  setText("fl-email", c.flEmail);
  setText("fl-msg", c.flMsg);
  setText("fl-send", c.flSend);

  // Footer
  setHTML(
    "footer-text",
    c.footerText.replace("♥", '<span class="accent-text">♥</span>'),
  );

  // Reset typing
  clearTimeout(typingTimer);
  phraseIdx = 0;
  charIdx = 0;
  isDeleting = false;
  const typedEl = document.getElementById("typed-text");
  if (typedEl) typedEl.textContent = "";
  tick();
}

/* ---- Typing animation ---- */
function tick() {
  const phrases = COPY[currentLang].phrases;
  const current = phrases[phraseIdx];
  const typedEl = document.getElementById("typed-text");
  if (!typedEl) return;

  if (!isDeleting) {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);

    if (charIdx === current.length) {
      isDeleting = true;
      typingTimer = setTimeout(tick, 1600);
    } else {
      typingTimer = setTimeout(tick, 70);
    }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);

    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingTimer = setTimeout(tick, 350);
    } else {
      typingTimer = setTimeout(tick, 38);
    }
  }
}

/* ---- Contact form ---- */
async function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const msg = document.getElementById("f-msg").value.trim();
  const successEl = document.getElementById("form-success");
  const submitBtn = document.getElementById("fl-send");

  if (!name || !email || !msg) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "...";

  try {
    const res = await fetch("https://formspree.io/f/mrewkepe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message: msg }),
    });

    if (res.ok) {
      successEl.style.color = "var(--success)";
      successEl.textContent = COPY[currentLang].formOk;
      e.target.reset();
    } else {
      successEl.style.color = "#f87171";
      successEl.textContent = COPY[currentLang].formErr;
    }
  } catch (err) {
    successEl.style.color = "#f87171";
    successEl.textContent = COPY[currentLang].formNetErr;
  }

  submitBtn.disabled = false;
  submitBtn.textContent = COPY[currentLang].flSend;

  setTimeout(() => {
    successEl.textContent = "";
  }, 5000);
}

/* ---- Theme ---- */
function toggleTheme() {
  const isDark =
    document.documentElement.getAttribute("data-theme") !== "light";
  const next = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

/* ---- Init ---- */
// Tema index.html <head> içinde, sayfa çizilmeden önce ayarlanıyor.
document.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
});