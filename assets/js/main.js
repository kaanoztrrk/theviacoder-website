/* ============================================
   theviacoder — telefon davranışları
   Kilit ekranı, ana ekran, uygulama açma/kapama,
   jestler (kaydırma), Denetim Merkezi, dil ve tema.
   ============================================ */

/* ---- Türkçe metinler (İngilizceler HTML'de duruyor) ---- */
const TR = {
  title: "M. Kaan Öztürk — Flutter Mobil Geliştirici",
  "nav.contact": "İletişim",
  cv: "CV indir",
  "side.eyebrow": "Mobil geliştirici · Flutter",
  "side.intro": "Mobil uygulamalar tasarlıyor, geliştiriyor ve yayınlıyorum. Bu site de bir uygulama gibi çalışıyor — kilidi aç ve göz at.",
  "hint.unlock": "Kilidi aç",
  "hint.swipe": "kaydır",
  "hint.home": "Ana ekran",
  "hint.bar": "alt çubuk",
  "hint.cc": "Denetim Merkezi",
  "hint.status": "durum çubuğu",
  "hint.lock": "Kilitle",
  "hint.power": "yan tuş",
  "aria.lock": "Telefonu kilitle",
  "aria.theme": "Temayı değiştir",
  "aria.unlock": "Kilidi aç: yukarı kaydır, tıkla ya da Enter'a bas",
  "aria.home": "Ana ekrana dön",
  role: "Flutter mobil geliştirici",
  "n.now": "şimdi",
  "n.2h": "2 sa önce",
  "n1.t": "Kaan yeni projelere açık",
  "n1.d": "Fikirden mağazaya Flutter uygulamaları. İletişime geçmek için dokun.",
  "n2.t": "Bugünün bulmacası yayında",
  "n2.d": "Beş harf, altı deneme. Bulabilir misin?",
  "lock.foot": "Keşfetmek için yukarı kaydır",
  available: "Yeni işlere açık",
  "widget.sub": "Flutter geliştirici · 4+ yıl · Türkiye",
  projects: "Projeler",
  "app.about": "Hakkımda",
  "app.skills": "Yetenekler",
  "app.writing": "Yazılar",
  "app.contact": "İletişim",
  back: "Ana Ekran",
  "cc.appearance": "Görünüm",
  "cc.dark": "Koyu",
  "cc.light": "Açık",
  "cc.language": "Dil",
  "cc.lock": "Ekranı kilitle",
  "cc.lockSub": "Başa dön",
  "cc.hint": "Kapatmak için yukarı kaydır ya da boşluğa dokun",

  "badge.founder": "Kurucu",
  "badge.client": "Müşteri",
  "badge.live": "Play'de yayında",
  "badge.enterprise": "Kurumsal müşteri",
  "badge.first": "Birincilik",
  "cat.puzzle": "Günlük bulmaca oyunu",
  "cat.logistics": "Lojistik",
  "cat.client": "Müşteri projesi",
  "h.overview": "Genel bakış",
  "h.built": "Kullanılanlar",
  "chip.team": "Takım projesi",
  "salonup.desc": "Güzellik salonları ve berberler için çok kiracılı (multi-tenant) SaaS: randevu, müşteri, personel, stok ve abonelik yönetimi; rol tabanlı erişim ve gerçek zamanlı senkronizasyonla.",
  "femabayi.desc": "LPG dönüşüm bayileri için çok kiracılı platform: bayi ağı genelinde müşteri, araç, montaj, teknisyen ve ürün kataloğu yönetimi, gerçek zamanlı panellerle.",
  "wordv.desc": "Wordle tarzında günlük kelime bulmacası. Günlük ve Seviye modları, üç tema (Koyu / Açık / Noir) ve tek seferlik premium satın alma.",
  "poshtaua.desc": "Ukrayna merkezli bir lojistik ve kargo şirketi için kurumsal mobil uygulama: kimlik doğrulama, gönderi takibi ve canlı ortam API entegrasyonu.",
  "matchvest.desc": "Savunma sanayi teknoparkındaki Cube Incubation Hackathon'da geliştirilen mobil MVP. Birinci olan takımın Flutter geliştiricisiydim.",
  "nullnull.desc": "Bir müşteri için geliştirdiğim NullNull mobil uygulamasının ilk sürümü; performans, temiz mimari ve akıcı bir deneyim odaklı.",
  "cta.web": "Web uygulamasını aç",
  "cta.github": "GitHub'da gör",
  "cta.play": "Google Play'den indir",
  "cta.company": "Şirketi ziyaret et",
  "cta.medium": "Medium'daki tüm yazılar",
  "cta.email": "E-posta gönder",

  "about.p1": "Flutter uygulamalarını uçtan uca tasarlıyor, geliştiriyor ve yayınlıyorum: arayüz, mimari, state management, API'ler ve mağaza yayını.",
  "about.p2": "Kendi ürünlerim ve müşteri işlerim; çok kiracılı SaaS platformlarından bulmaca oyunlarına kadar. Performansa, modüler koda ve bir yıl sonra da kolayca değiştirilebilen uygulamalara önem veriyorum.",
  "row.based": "Konum",
  "row.focus": "Odak",
  "row.focusVal": "Flutter · Mobil",
  "row.exp": "Deneyim",
  "row.expVal": "4+ yıl",
  "row.shipped": "Projeler",
  "row.shippedVal": "6 proje",
  "row.email": "E-posta",
  "skills.sub": "Her gün kullandıklarım",
  "sk.core": "Temel",
  "sk.data": "Veri & backend",
  "sk.product": "Ürün",
  "sk.tools": "Araçlar",
  "writing.sub": "Flutter ve mimari üzerine notlar",
  "w.meta": "Medium · Türkçe",
  min: "dk",
  w1: "Flutter'da State Management: BLoC + Cubit Melez Yaklaşımı",
  w2: "MVVM + BLoC ile Flutter Uygulaması Geliştirmenin Avantajları",
  w3: "Flutter'da API Verisi Çekme: freezed ve BLoC ile Basit Adımlar",
  w4: "Kendi Widget'larınızı Oluşturun: Flutter İçin Adım Adım Kılavuz",
  w5: "Flutter'da Navigasyon İşlemleri: Uygulama İçi Rota Yönetimi",
  "contact.sub": "Genellikle bir gün içinde yanıtlar",
  "contact.big": "Birlikte bir şey yapalım.",
  "contact.p": "Bir ürün fikri, bir müşteri projesi ya da uygulamalarımdan biri hakkında geri bildirim — yaz bana.",
};

const SVG = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const GLYPH = {
  about: SVG('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  skills: SVG('<path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="m2 12 10 5 10-5"/><path d="m2 16 10 5 10-5"/>'),
  writing: SVG('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
  contact: SVG('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const buzz = () => navigator.vibrate && navigator.vibrate(8);

const screen = $("#screen");
const lock = $("#lock");
const home = $("#home");
const app = $("#app");
const appScroll = $("#appScroll");
const appBar = $("#appBar");
const cc = $("#cc");
const island = $("#island");

$$("[data-glyph]").forEach((el) => (el.innerHTML = GLYPH[el.dataset.glyph]));

const PAGES = Object.fromEntries($$(".page").map((p) => [p.dataset.page, p]));

/* ============ Dil ============ */
// İngilizce metinler HTML'de; dil değişince geri dönebilmek için saklanır.
const EN_TITLE = document.title;
$$("[data-i18n]").forEach((el) => (el.dataset.en = el.textContent));
$$("[data-i18n-aria]").forEach((el) => (el.dataset.enAria = el.getAttribute("aria-label")));
$$("[data-i18n-title]").forEach((el) => (el.dataset.enTitle = el.title));

let lang = root.lang === "tr" ? "tr" : "en";
const t = (key, en) => (lang === "tr" && TR[key]) || en;

function applyLang() {
  root.lang = lang;
  $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n, el.dataset.en)));
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria, el.dataset.enAria)));
  $$("[data-i18n-title]").forEach((el) => (el.title = t(el.dataset.i18nTitle, el.dataset.enTitle)));
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  updateTitle();
  clock();
}

function updateTitle() {
  const name = current && $(".a-name, .big", appScroll);
  document.title = name ? `${name.textContent} · M. Kaan Öztürk` : t("title", EN_TITLE);
}

$$("[data-lang]").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  })
);

/* ============ Tema ============ */
function syncThemeColor() {
  $('meta[name="theme-color"]').content = root.dataset.theme === "light" ? "#ecebf5" : "#07070b";
}
$$("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", root.dataset.theme);
    syncThemeColor();
  })
);

/* ============ Telefon durumu ============ */
let state = "lock"; // lock | home | app
let current = null; // açık uygulamanın id'si
let k = 1; // telefonun ekrandaki ölçeği (jest mesafeleri için)

home.inert = true;
app.inert = true;
cc.inert = true;

function unlock(instant) {
  if (state !== "lock") return;
  state = "home";
  if (instant) {
    lock.style.transition = "none";
    requestAnimationFrame(() => requestAnimationFrame(() => (lock.style.transition = "")));
  }
  lock.style.transform = "";
  lock.classList.add("gone");
  lock.inert = true;
  home.inert = false;
  home.classList.add("in");
  if (!instant) buzz();
}

function relock() {
  closeCC();
  if (current) {
    closeApp(true);
    history.replaceState(null, "", location.pathname + location.search);
  }
  state = "lock";
  lock.classList.remove("gone");
  lock.inert = false;
  home.inert = true;
  home.classList.remove("in");
  updateTitle();
  buzz();
}

// İkonun ekran içindeki yeri, clip-path inset() olarak.
// offset* değerleri transform'dan etkilenmez; telefon ölçeklense de doğru çalışır.
function insetFor(el) {
  let x = 0, y = 0;
  for (let n = el; n && n !== screen; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
  const W = screen.clientWidth, H = screen.clientHeight;
  return `inset(${y}px ${W - x - el.offsetWidth}px ${H - y - el.offsetHeight}px ${x}px round 17px)`;
}
const fullInset = () => `inset(0px 0px 0px 0px round ${getComputedStyle(screen).borderTopLeftRadius})`;
const iconOf = (id) => $(`.home [data-app="${id}"] .ic`);

function openApp(id, instant) {
  app.getAnimations().forEach((a) => a.cancel());
  current = id;
  state = "app";

  // Sayfayı kopyala; .a-actions içindeki butonlar alttaki sabit çubuğa gider
  const page = PAGES[id].cloneNode(true);
  const actions = $(".a-actions", page);
  appBar.replaceChildren(...(actions ? actions.children : []));
  actions && actions.remove();
  page.className = "a-content";
  page.removeAttribute("data-page");
  $(".a-name, .big", page).id = "appTitle";
  appScroll.replaceChildren(page);
  appScroll.scrollTop = 0;

  app.classList.add("open");
  app.inert = false;
  home.classList.add("behind");
  home.inert = true;
  if (!instant) {
    app.animate([{ clipPath: insetFor(iconOf(id)) }, { clipPath: fullInset() }], {
      duration: reduce ? 1 : 540, easing: "cubic-bezier(.2,.9,.25,1)", fill: "forwards",
    });
    island.classList.add("pulse");
    setTimeout(() => island.classList.remove("pulse"), 600);
    buzz();
  }
  appScroll.focus({ preventScroll: true });
  updateTitle();
}

// from: jestle sürüklenmiş uygulamanın o anki transform'u — kapanış oradan devam eder
function closeApp(instant, from) {
  if (!current) return;
  const icon = iconOf(current);
  current = null;
  state = "home";
  home.classList.remove("behind");
  home.inert = false;
  app.inert = true;
  app.style.transition = "";
  const anim = app.animate(
    [
      { clipPath: fullInset(), transform: from || "none" },
      { clipPath: insetFor(icon), transform: "none" },
    ],
    { duration: reduce || instant ? 1 : 420, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }
  );
  app.style.transform = "";
  anim.onfinish = () => {
    app.classList.remove("open");
    app.getAnimations().forEach((a) => a.cancel());
    appScroll.replaceChildren();
    appBar.replaceChildren();
    icon.parentElement.focus({ preventScroll: true });
  };
  updateTitle();
}

/* ============ Adres çubuğu (#salonup gibi paylaşılabilir linkler) ============ */
// Ana ekrandan açılan uygulama geçmişe bir kayıt ekler; böylece tarayıcının
// geri tuşu uygulamayı kapatır. Uygulamadan uygulamaya geçiş kaydı değiştirir,
// "Ana Ekran" her zaman tek adımda ana ekrana döner.
function go(id) {
  if (!Object.hasOwn(PAGES, id) || current === id) return;
  if (current) history.replaceState(history.state, "", "#" + id);
  else history.pushState({ app: id }, "", "#" + id);
  route();
}

function goHome(from) {
  if (!current) return;
  closeApp(false, from);
  if (history.state && history.state.app) history.back();
  else history.replaceState(null, "", location.pathname + location.search);
}

function route(instant) {
  const id = location.hash.slice(1);
  closeCC();
  if (!Object.hasOwn(PAGES, id)) {
    if (current) closeApp(instant);
    return;
  }
  if (current === id) return;
  if (state === "lock") {
    unlock(instant);
    if (!instant) {
      setTimeout(() => location.hash.slice(1) === id && !current && openApp(id), reduce ? 0 : 550);
      return;
    }
  }
  if (current) closeApp(true);
  openApp(id, instant);
}

addEventListener("popstate", () => route());

// Sayfa içi #linkler: tarayıcı varsayılanı yerine go() — Ctrl/orta tık yeni sekmede açar
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  go(a.hash.slice(1));
});

/* ============ Denetim Merkezi ============ */
function openCC() {
  if (cc.classList.contains("open")) return;
  cc.classList.add("open");
  cc.inert = false;
  (state === "app" ? app : state === "home" ? home : lock).inert = true;
  buzz();
}
function closeCC() {
  if (!cc.classList.contains("open")) return;
  cc.classList.remove("open");
  cc.inert = true;
  if (state === "app") app.inert = false;
  else if (state === "home") home.inert = false;
  else lock.inert = false;
}
$("#gear").addEventListener("click", openCC);
$("#ccLock").addEventListener("click", relock);

/* ============ Jestler ============ */
// Ortak sürükleme yardımcısı. Mesafeler telefonun kendi pikseli cinsinden (k'ya bölünür).
function drag(el, { start, move, end }) {
  el.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || (start && start(e) === false)) return;
    const x0 = e.clientX, y0 = e.clientY;
    el.setPointerCapture(e.pointerId);
    const d = (ev) => [(ev.clientX - x0) / k, (ev.clientY - y0) / k];
    const onMove = (ev) => move && move(...d(ev));
    const onUp = (ev) => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      end(...d(ev), ev.type === "pointercancel");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
  });
}
const isTap = (dx, dy) => Math.abs(dx) < 6 && Math.abs(dy) < 6;

// Kilit ekranını yukarı kaydır (bildirime dokunmak ilgili uygulamayı açar)
let lockTarget = null;
const lockDrag = {
  start: (e) => {
    if (state !== "lock") return false;
    lockTarget = e.target.closest("[data-open]");
    lock.style.transition = "none";
  },
  move: (dx, dy) => (lock.style.transform = `translateY(${Math.min(0, dy)}px)`),
  end: (dx, dy, cancelled) => {
    lock.style.transition = "";
    if (!cancelled && isTap(dx, dy) && lockTarget) go(lockTarget.dataset.open);
    else if (!cancelled && (dy < -60 || isTap(dx, dy))) unlock();
    else lock.style.transform = "";
  },
};
drag(lock, lockDrag);

// Alt çubuk: uygulamayı yukarı sürükleyerek kapat; kilit ekranında kilidi açar
const homebar = $("#homebar");
drag(homebar, {
  start: () => {
    if (state === "lock") return lockDrag.start({ target: homebar });
    if (state === "app") app.style.transition = "none";
  },
  move: (dx, dy) => {
    if (state === "lock") return lockDrag.move(dx, dy);
    if (state !== "app") return;
    const up = Math.min(0, dy);
    const p = Math.min(1, -up / 320);
    app.style.transform = `translate(${dx * 0.5}px, ${up * 0.7}px) scale(${1 - p * 0.3})`;
  },
  end: (dx, dy, cancelled) => {
    if (state === "lock") return lockDrag.end(dx, dy, cancelled);
    if (state !== "app") return;
    if (!cancelled && (dy < -70 || isTap(dx, dy))) return goHome(app.style.transform);
    app.style.transition = "transform .35s var(--ease)";
    app.style.transform = "";
  },
});
$("#appBack").addEventListener("click", () => goHome());
homebar.addEventListener("click", (e) => {
  if (e.detail === 0) state === "lock" ? unlock() : goHome(); // klavyeyle
});

// Sol kenardan sağa kaydır: geri
drag($("#edge"), {
  start: () => { if (state !== "app") return false; app.style.transition = "none"; },
  move: (dx) => {
    const x = Math.max(0, dx);
    app.style.transform = `translateX(${x}px) scale(${1 - Math.min(1, x / 400) * 0.08})`;
  },
  end: (dx, dy, cancelled) => {
    if (!cancelled && dx > 90) return goHome(app.style.transform);
    app.style.transition = "transform .35s var(--ease)";
    app.style.transform = "";
  },
});

// Durum çubuğundan aşağı çek (ya da dokun): Denetim Merkezi
const pullCC = { end: (dx, dy, cancelled) => !cancelled && (dy > 30 || isTap(dx, dy)) && openCC() };
drag($("#status"), pullCC);
drag($("#pullZone"), pullCC);

// Denetim Merkezi: boşluğa dokun ya da yukarı kaydır → kapat
drag(cc, {
  start: (e) => { if (e.target.closest(".cc-tile")) return false; },
  end: (dx, dy, cancelled) => !cancelled && (dy < -30 || isTap(dx, dy)) && closeCC(),
});

// Yan tuş ve logo: kilitle / kilidi aç
const togglePower = () => (state === "lock" ? unlock() : relock());
$("#power").addEventListener("click", togglePower);
$("#logo").addEventListener("click", togglePower);

// Bildirime klavyeyle basmak (fareyle dokunma lockDrag'de)
$$(".notif").forEach((n) =>
  n.addEventListener("click", (e) => { if (e.detail === 0) go(n.dataset.open); })
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (cc.classList.contains("open")) closeCC();
    else goHome();
    return;
  }
  if (state === "lock" && ["Enter", " ", "ArrowUp"].includes(e.key)) {
    if (document.activeElement.closest(".notif, .top, .homebar")) return;
    e.preventDefault();
    unlock();
  }
});

/* ============ Telefonu ekrana sığdır ============ */
const stage = $("#stage");
const phone = $("#phone");
const mobile = matchMedia("(max-width: 600px)");
function fit() {
  if (mobile.matches) {
    k = 1;
    phone.style.transform = "";
    stage.style.width = stage.style.height = "";
    return;
  }
  k = Math.min(1, (innerHeight - 40) / 868, (innerWidth - 32) / 414);
  phone.style.transform = `scale(${k})`;
  stage.style.width = 414 * k + "px";
  stage.style.height = 868 * k + "px";
}
addEventListener("resize", fit);

/* ============ Saat (Türkiye) ve pil ============ */
const tz = "Europe/Istanbul";
const fTime = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" });
function clock() {
  const d = new Date();
  const fDate = new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", {
    timeZone: tz, weekday: "long", month: "long", day: "numeric",
  });
  $$("[data-time]").forEach((n) => (n.textContent = fTime.format(d)));
  $$("[data-date]").forEach((n) => (n.textContent = fDate.format(d)));
}
setInterval(clock, 15000);

// Destekleyen tarayıcılarda gerçek pil seviyesi
if (navigator.getBattery) {
  navigator.getBattery().then((b) => {
    const set = () => $("#battery").setAttribute("width", Math.max(2, 16 * b.level));
    set();
    b.addEventListener("levelchange", set);
  }).catch(() => {});
}

/* ============ Başlangıç ============ */
fit();
syncThemeColor();
applyLang();
route(true); // #salonup gibi bir linkle gelindiyse doğrudan o uygulamayı aç
