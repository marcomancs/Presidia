/* ══════════════════════════════════════════════════════════════════════
   DVR Generator · Stone Safety — Frontend SPA
   ══════════════════════════════════════════════════════════════════════ */

const App = (() => {

  /* ── SVG Icon System (Feather / Lucide style) ───────────────────────── */
  const SVG_PATHS = {
    building:     `<rect x="3" y="9" width="18" height="13" rx="1"/><path d="M3 9l9-7 9 7"/><line x1="9" y1="22" x2="9" y2="14"/><line x1="15" y1="22" x2="15" y2="14"/>`,
    user:         `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>`,
    shield:       `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    bell:         `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,
    bar_chart:    `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
    users:        `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    grid:         `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>`,
    folder:       `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>`,
    file_text:    `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`,
    check:        `<polyline points="20 6 9 17 4 12"/>`,
    check_circle: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
    x:            `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,
    info:         `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
    alert:        `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
    search:       `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
    chevron_down: `<polyline points="6 9 12 15 18 9"/>`,
    star:         `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    plus:         `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
    download:     `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  };

  function ic(name, size = 14, extraStyle = '') {
    const p = SVG_PATHS[name] || SVG_PATHS.file_text;
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" ` +
      `stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ` +
      `stroke-linejoin="round" style="display:inline-block;vertical-align:middle;` +
      `flex-shrink:0;${extraStyle}">${p}</svg>`;
  }

  function buildChapterIcon(chId) {
    const icons = {
      '0':  '<path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="m17 12 2 2 4-4"/>',
      '1':  '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
      '2':  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
      '3':  '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      '4':  '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
      '5':  '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
      '6':  '<path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="12" y1="22" x2="12" y2="12"/>',
      '6b': '<path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="12" y1="22" x2="12" y2="12"/>',
      '7':  '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
      '8':  '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
      '10': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
      '11': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      '14': '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
      '17': '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
      '19': '<path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="6" cy="14" r="3"/><path d="M4.5 17 2 22l4-1 4 1-2.5-5"/>',
      '20': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>',
      '21': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      '22': '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    };
    const cats = {
      '0': 'cat-doc',
      '1': 'cat-doc',
      '2': 'cat-risk',  '3': 'cat-risk',
      '4': 'cat-equip', '5': 'cat-equip',
      '6': 'cat-ergo',  '6b': 'cat-ergo',  '7': 'cat-ergo',  '8': 'cat-ergo',
      '10': 'cat-phys', '11': 'cat-phys',
      '14': 'cat-chem', '17': 'cat-chem',
      '19': 'cat-org',
      '20': 'cat-fire',
      '21': 'cat-org',  '22': 'cat-org',
    };
    const paths = icons[String(chId)] || '';
    return {
      svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`,
      cat: cats[String(chId)] || '',
    };
  }

  /* ── State ──────────────────────────────────────────────────────────── */
  const state = {
    view:           'home',     // 'home' | 'client' | 'form' | 'config'
    history:        [],
    currentClient:  null,       // {id, name, json_path, chapters, ...}
    currentChapter: '1',
    jsonRaw:        null,
    extracted:      null,
    autoFields:     {},
    manualFields:   [],
    tablePrefill:   {},
    formValues:     {},         // id → current value
    fromClientView: false,      // per il pulsante back nel form
    inailCodes:     [],         // [{code, sector, label, rate}]
    mmcCatalog:     null,       // Cap6: [{key,nome,has_trasporto,varianti[]}] (lazy)
    mvrCatalog:     null,       // Cap7: [{key,nome,has_xlsx}] (lazy)
    inailSelected:  null,       // voce INAIL selezionata
    chaptersCache:  [],         // [{ id, title, active }] — per navigazione prev/next
    navigating:     false,      // lock anti-doppio-click
    freshImport:    false,      // true dopo import JSON → mostra hint "Inizia dal Cap 1"
    config:         {},         // configurazione app (nome_utente, cartelle, ecc.)
    clockStarted:   false,      // flag per evitare multipli setInterval
  };

  /* ── Init ───────────────────────────────────────────────────────────── */
  // Avanzamento reale dello splash di avvio (barra + stato)
  function _setSplash(pct, msg) {
    const fill = document.getElementById('splash-bar-fill');
    const st   = document.getElementById('splash-status');
    if (fill) fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
    if (st && msg != null) st.textContent = msg;
  }

  async function init() {
    const splashStart = Date.now();
    _setSplash(8, 'Avvio…');

    // Attendi pywebview pronto
    await waitForPywebview();
    _setSplash(25, 'Connessione al motore…');

    // Logo: l'icona stone + wordmark nell'header sono già in HTML (adattano al tema).
    // Dal backend recuperiamo il logo completo solo per lo splash.
    const logoB64 = await call('get_logo_base64');
    if (logoB64) {
      const splashLogo = document.getElementById('splash-logo');
      if (splashLogo) splashLogo.src = `data:image/png;base64,${logoB64}`;
    }
    _setSplash(45, 'Caricamento risorse…');

    // Carica config e aggiorna avatar
    const cfg = await call('get_config') || {};
    state.config = cfg;
    _updateAvatar(cfg.nome_utente);
    if (cfg.tema) {
      document.documentElement.setAttribute('data-theme', cfg.tema);
      try { localStorage.setItem('dvr-theme', cfg.tema); } catch (e) {}
    }
    _setSplash(65, 'Lettura impostazioni…');

    await refreshHistory();
    _setSplash(90, 'Caricamento DVR…');
    resetDropzone();

    showView('home');
    updateClock();
    if (!state.clockStarted) { state.clockStarted = true; setInterval(updateClock, 1000); }
    _setSplash(100, 'Pronto');

    // Fade-out splash: attesa minima (la barra riflette i passi reali)
    const elapsed = Date.now() - splashStart;
    const delay = Math.max(0, 1600 - elapsed);
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 600);
      }
    }, delay);

    // NB: distribuzione via Git (GitHub Desktop → Pull). Il controllo
    // aggiornamenti in-app è DISATTIVATO per non creare conflitti al Pull.
    // (Per riattivarlo: setTimeout(() => { _checkUpdates(); }, delay + 1200);)
  }

  function waitForPywebview() {    return new Promise(resolve => {
      if (window.pywebview && window.pywebview.api) { resolve(); return; }
      window.addEventListener('pywebviewready', resolve, { once: true });
      setTimeout(resolve, 3000); // fallback
    });
  }

  /* ── API bridge ─────────────────────────────────────────────────────── */
  async function call(method, ...args) {
    if (!window.pywebview?.api?.[method]) {
      console.warn(`API method not found: ${method}`);
      return null;
    }
    try {
      return await window.pywebview.api[method](...args);
    } catch (e) {
      console.error(`API error [${method}]:`, e);
      return { error: String(e) };
    }
  }

  /* ── View router ────────────────────────────────────────────────────── */
  const _VIEW_DEPTH = { home: 0, config: 0, client: 1, form: 2 };

  function showView(name, opts = {}) {
    const prevDepth = _VIEW_DEPTH[state.view] ?? 0;
    const nextDepth = _VIEW_DEPTH[name] ?? 0;
    const goingDeeper = nextDepth > prevDepth;

    // Nascondi tutte le view
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active', 'from-left', 'from-right');
    });

    // Aggiorna breadcrumb
    const bc = document.getElementById('breadcrumb');
    const bcClient = document.getElementById('bc-client');
    const bcSep2 = document.getElementById('bc-sep2');
    const bcChapter = document.getElementById('bc-chapter');

    if (name === 'home' || name === 'config') {
      bc.style.display = 'none';
    } else {
      bc.style.display = 'flex';
      bcClient.textContent = state.currentClient?.name || opts.clientName || '—';
      if (name === 'form') {
        bcSep2.style.display = 'inline';
        bcChapter.style.display = 'inline';
        const chapters = { '1': 'Anagrafica Azienda', '2': 'Val. Generale Rischi' };
        bcChapter.textContent = chapters[state.currentChapter] || `Capitolo ${state.currentChapter}`;
      } else {
        bcSep2.style.display = 'none';
        bcChapter.style.display = 'none';
      }
    }

    // Mostra/nascondi form-topbar (solo nella view form)
    const formTopbar = document.getElementById('form-topbar');
    if (formTopbar) formTopbar.style.display = (name === 'form') ? 'flex' : 'none';

    state.view = name;
    const el = document.getElementById(`view-${name}`);
    if (el) {
      // Direzione animazione: avanti=da destra, indietro=da sinistra
      el.classList.add(goingDeeper ? 'from-right' : 'from-left');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add('active');
        });
      });
    }
  }

  /* ── Helpers: data, ora, stats ─────────────────────────────────────── */

  function _greeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Buongiorno';
    if (h < 18) return 'Buon pomeriggio';
    return 'Buonasera';
  }

  function _italianDate(d = new Date()) {
    const days = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
    const months = ['gennaio','febbraio','marzo','aprile','maggio','giugno',
                    'luglio','agosto','settembre','ottobre','novembre','dicembre'];
    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  }

  function _clockStr(d = new Date()) {
    return d.toLocaleTimeString('it-IT', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
  }

  function updateClock() {
    const now = new Date();
    const el = document.getElementById('home-clock');
    if (el) el.textContent = _clockStr(now);
    const dtEl = document.getElementById('home-date-label');
    if (dtEl) dtEl.textContent = _italianDate(now);
  }

  function timeAgo(dateStr) {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins  = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days  = Math.floor(diff / 86400000);
    if (mins  < 2)  return 'poco fa';
    if (hours < 1)  return `${mins} min fa`;
    if (hours < 24) return `${hours} ${hours === 1 ? 'ora' : 'ore'} fa`;
    if (days  === 1) return 'ieri';
    if (days  < 7)  return `${days} giorni fa`;
    if (days  < 14) return '1 settimana fa';
    if (days  < 30) return `${Math.floor(days / 7)} settimane fa`;
    const m = Math.floor(days / 30);
    return `${m} ${m === 1 ? 'mese' : 'mesi'} fa`;
  }

  function extractMeta(client) {
    const cap1 = (client.chapters || []).find(ch => ch.id === '1')?.form_data || {};
    const rawSettore = cap1.tipologia_attivita || cap1.settore_ateco || '';
    const settore = rawSettore.split(' - ')[0].split(' – ')[0].trim();
    const citta = cap1.citta || cap1.localita || '';
    return { settore, citta };
  }

  function _updateAvatar(_nomeUtente) {
    // avatar rimosso — funzione mantenuta per compatibilità
  }

  // Capitoli implementati (0,1,2,3,4,5,6,7,8,10,11,14,17,20,21,22). Totale per
  // cliente = 16 meno i capitoli esclusi.
  const CAP_TOTALI = 16;
  function _totCap(client) {
    const escl = Object.keys((client && client.capitoli_esclusi) || {}).length;
    return Math.max(1, CAP_TOTALI - escl);
  }
  function _capNonEsclusi(client) {
    const escl = (client && client.capitoli_esclusi) || {};
    return (client && client.chapters || []).filter(ch => !escl[String(ch.id)]);
  }

  function _updateStats(history) {
    let inCorso = 0, completati = 0, capitoli = 0;
    (history || []).forEach(c => {
      const chapters = _capNonEsclusi(c);
      const total = _totCap(c);
      const exported = chapters.filter(ch => ch.output_path).length;
      const withData = chapters.filter(ch => ch.form_data || ch.output_path).length;
      capitoli += withData;
      if (exported >= total) completati++;
      else if (withData > 0) inCorso++;
    });
    const el = id => document.getElementById(id);
    if (el('stat-in-corso'))   el('stat-in-corso').textContent   = inCorso;
    if (el('stat-completati')) el('stat-completati').textContent = completati;
    if (el('stat-capitoli'))   el('stat-capitoli').textContent   = capitoli;
    if (el('stat-totali'))     el('stat-totali').textContent     = (history || []).length;
  }

  /* ── Home ───────────────────────────────────────────────────────────── */
  async function showHome() {
    const cfg = await call('get_config') || {};
    state.config = cfg;
    _updateAvatar(cfg.nome_utente);

    await refreshHistory();

    // Saluto + orologio
    const nome = (cfg.nome_utente || '').trim();
    const greetEl = document.getElementById('home-greeting-text');
    if (greetEl) greetEl.textContent = nome ? `${_greeting()}, ${nome}` : _greeting();

    updateClock();
    if (!state.clockStarted) {
      state.clockStarted = true;
      setInterval(updateClock, 1000);
    }

    _updateStats(state.history);

    showView('home');
  }

  async function refreshHistory() {
    const history = await call('get_history') || [];
    state.history = history;
    _applyHomeFilters();
    _renderResume();
    const countEl = document.getElementById('clients-count');
    if (countEl) countEl.textContent = history.length || '';
    _updateStats(history);
  }

  // Card "Riprendi": l'ultimo DVR in corso (dati presenti ma non tutto esportato).
  function _renderResume() {
    const box = document.getElementById('home-resume');
    if (!box) return;
    let best = null, bestDate = '';
    (state.history || []).forEach(c => {
      const chapters = _capNonEsclusi(c);
      const total    = _totCap(c);
      const withData = chapters.filter(ch => ch.form_data || ch.output_path).length;
      const exported = chapters.filter(ch => ch.output_path).length;
      if (withData > 0 && exported < total) {
        const dates = chapters.map(ch => ch.completed_at).filter(Boolean).sort();
        const d = dates.at(-1) || c.created_at || '';
        if (d >= bestDate) { bestDate = d; best = { c, total, withData }; }
      }
    });
    if (!best) { box.style.display = 'none'; box.innerHTML = ''; return; }
    const { c, total, withData } = best;
    box.style.display = 'block';
    box.innerHTML = `
      <div class="home-resume-card" onclick="App.showClient('${c.id}')">
        <span class="hr-ico">${ic('file_text', 20)}</span>
        <div class="hr-text">
          <div class="hr-label">Riprendi dove eri</div>
          <div class="hr-name">${escHtml(c.name || 'Azienda')} — ${withData} di ${total} capitoli</div>
        </div>
        <button class="hr-btn" onclick="event.stopPropagation(); App.showClient('${c.id}')">Continua</button>
      </div>`;
  }

  function renderClientList(history) {
    const list  = document.getElementById('clients-list');
    const count = document.getElementById('clients-count');
    if (!list) return;

    if (!history || history.length === 0) {
      if (count) count.textContent = '';
      list.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${ic('file_text', 40)}</div>
          <p>Nessun DVR da mostrare.<br>Trascina un file JSON o clicca <strong>Nuovo DVR</strong> per iniziare.</p>
        </div>`;
      return;
    }
    if (count) count.textContent = (state.history || []).length;

    list.innerHTML = history.map((c, i) => {
      const name      = escHtml(c.name || 'Azienda');
      const TOTAL_CAP = _totCap(c);
      const chapters  = _capNonEsclusi(c);
      const exported  = chapters.filter(ch => ch.output_path).length;
      const withData  = chapters.filter(ch => ch.form_data || ch.output_path).length;
      const pct       = Math.min(100, Math.round(withData / TOTAL_CAP * 100));

      let dotColor, cntLabel, cntColor;
      if (exported >= TOTAL_CAP)              { dotColor = 'var(--success)';  cntLabel = 'Completato';         cntColor = 'var(--success)'; }
      else if (withData >= TOTAL_CAP)         { dotColor = '#B9770E';         cntLabel = `${withData}/${TOTAL_CAP}`; cntColor = 'var(--gray-600)'; }
      else if (withData > 0)                  { dotColor = 'var(--blue-800)'; cntLabel = `${withData}/${TOTAL_CAP}`; cntColor = 'var(--gray-600)'; }
      else                                    { dotColor = 'var(--gray-400)'; cntLabel = `0/${TOTAL_CAP}`;     cntColor = 'var(--gray-500)'; }

      const parts    = (c.name || 'A').trim().split(/\s+/);
      const initials = (parts.length >= 2 ? (parts[0][0] + parts[1][0]) : (c.name || 'A').slice(0, 2)).toUpperCase();

      const dates    = chapters.map(ch => ch.completed_at).filter(Boolean).sort();
      const ago      = timeAgo(dates.at(-1) || c.created_at || '');

      return `
        <div class="dvr-row" onclick="App.showClient('${c.id}')" style="animation-delay:${i * 28}ms">
          <div class="dvr-av">${escHtml(initials)}</div>
          <div class="dvr-main">
            <div class="dvr-name"><span class="dvr-dot" style="background:${dotColor}"></span>${name}</div>
            <div class="dvr-bar"><i style="width:${pct}%"></i></div>
          </div>
          <div class="dvr-right">
            <div class="dvr-count" style="color:${cntColor}">${cntLabel}</div>
            <div class="dvr-ago">${ago || ''}</div>
          </div>
          <button class="dvr-del" title="Rimuovi dalla lista"
                  onclick="event.stopPropagation(); App.deleteClient('${c.id}')">${ic('x', 13)}</button>
        </div>`;
    }).join('');
  }

  function _homeMatchesFilter(c) {
    const chapters = _capNonEsclusi(c);
    const total    = _totCap(c);
    const exported = chapters.filter(ch => ch.output_path).length;
    const withData = chapters.filter(ch => ch.form_data || ch.output_path).length;
    const completo = exported >= total;
    if (state.homeFilter === 'completati') return completo;
    if (state.homeFilter === 'in_corso')   return withData > 0 && !completo;
    return true;
  }

  function _applyHomeFilters() {
    const q = (state.homeSearch || '').trim().toLowerCase();
    let list = (state.history || []).filter(_homeMatchesFilter);
    if (q) list = list.filter(c => {
      if ((c.name || '').toLowerCase().includes(q)) return true;
      const { settore, citta } = extractMeta(c);
      return settore.toLowerCase().includes(q) || citta.toLowerCase().includes(q);
    });
    renderClientList(list);
  }

  function onHomeFilter(f) {
    state.homeFilter = f;
    document.querySelectorAll('.home-filter-chips .hchip').forEach(b =>
      b.classList.toggle('active', b.getAttribute('data-hf') === f));
    _applyHomeFilters();
  }

  function onHomeSearch(query) {
    state.homeSearch = query || '';
    _applyHomeFilters();
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  async function deleteClient(clientId) {
    if (!confirm('Rimuovere questo cliente dalla lista?\nI documenti Word già generati non verranno eliminati.')) return;
    await call('delete_client', clientId);
    await refreshHistory();
    toast('Cliente rimosso dalla lista', 'info');
  }

  /* ── Drop zone ──────────────────────────────────────────────────────── */
  function onDragOver(e) {
    e.preventDefault();
    document.getElementById('home-dropzone')?.classList.add('dragover-active');
  }

  function onDragLeave(e) {
    document.getElementById('home-dropzone')?.classList.remove('dragover-active');
  }

  function onDrop(e) {
    e.preventDefault();
    document.getElementById('home-dropzone')?.classList.remove('dragover-active');
    const file = e.dataTransfer?.files?.[0];
    if (!file || !file.name.endsWith('.json')) {
      toast('Trascina un file .json valido', 'error');
      return;
    }
    // WebView2 non espone file.path — usa FileReader come fallback
    if (file.path) {
      loadJsonFromPath(file.path);
    } else {
      const reader = new FileReader();
      reader.onload = async evt => {
        showLoading('Lettura JSON…');
        const res = await call('load_json_from_content', file.name, evt.target.result);
        hideLoading();
        if (!res || res.error) { toast(res?.error || 'Errore lettura JSON', 'error'); return; }
        handleJsonLoaded(res);
      };
      reader.readAsText(file);
    }
  }

  async function pickJson() {
    showLoading('Apertura file…');
    const res = await call('open_json_dialog');
    hideLoading();
    if (!res || res.cancelled) return;
    if (res.error) { toast(res.error, 'error'); return; }
    handleJsonLoaded(res);
  }

  // Apre nel browser la cartella Drive dove i tecnici caricano i JSON.
  const TECH_DRIVE_URL = 'https://drive.google.com/drive/folders/1jc25L6Azfpi8zJS7DTwri-qFR7yPK3dh?usp=drive_link';
  async function openTechDrive() {
    const res = await call('open_url', TECH_DRIVE_URL);
    if (res?.error) toast(res.error, 'error');
  }

  async function loadJsonFromPath(path) {
    showLoading('Lettura JSON…');
    const res = await call('load_json_from_path', path);
    hideLoading();
    if (!res || res.error) { toast(res?.error || 'Errore lettura JSON', 'error'); return; }
    handleJsonLoaded(res);
  }

  function handleJsonLoaded(res) {
    state.jsonRaw       = res.json_raw;
    state.extracted     = res.extracted;
    state.autoFields    = res.assessment?.auto || {};
    state.manualFields  = res.assessment?.manual || [];
    state.tablePrefill  = res.assessment?.table_prefill || {};
    state.currentChapter = '1';
    state.fromClientView = false;

    // Controlla se il cliente esiste già nella history
    const existing = state.history.find(c => c.json_path === res.path);
    state.currentClient = existing || {
      id:        null,
      name:      res.name,
      json_path: res.path,
      chapters:  [],
    };
    // Cliente originato da template: spunte per-capitolo ("Usa i dati del
    // template per questo capitolo"). Default accese; scelte salvate rispettate.
    state.currentClient.da_template = !!res.da_template;
    if (!state.currentClient.usa_template_cap) {
      state.currentClient.usa_template_cap = {};
    }
    if (!state.currentClient.capitoli_esclusi) {
      state.currentClient.capitoli_esclusi = {};
    }

    showImportSuccess();
    _handleSurveyInfo(res);
  }

  // La spunta del capitolo è accesa? (default: sì per i clienti template)
  function _usaTemplateCap(cid) {
    return !!state.currentClient?.da_template &&
           state.currentClient?.usa_template_cap?.[String(cid)] !== false;
  }

  // Il capitolo è stato escluso per questo cliente (non pertinente)?
  function _isCapEscluso(cid) {
    return !!state.currentClient?.capitoli_esclusi?.[String(cid)];
  }

  // Lista degli id dei capitoli ATTIVI e NON esclusi (per navigazione/export)
  function _capitoliDaCompilare() {
    return (state.chaptersCache || [])
      .filter(c => c.active && !_isCapEscluso(c.id))
      .map(c => c.id);
  }

  async function onToggleCapitoloEscluso(cid) {
    if (!state.currentClient) return;
    if (!state.currentClient.capitoli_esclusi) state.currentClient.capitoli_esclusi = {};
    const key = String(cid);
    const nuovo = !state.currentClient.capitoli_esclusi[key];
    if (nuovo) state.currentClient.capitoli_esclusi[key] = true;
    else delete state.currentClient.capitoli_esclusi[key];
    await call('imposta_capitolo_escluso',
               state.currentClient.json_path || '', key, nuovo);
    renderChaptersList(state.currentClient);
  }

  // Quali capitoli hanno dati precompilabili dal template?
  function _chapterHasTemplateData(cid) {
    const d = state.jsonRaw || {};
    const gruppi = d.ciclo_lavoro?.gruppi || [];
    const locali = d.luoghi_lavoro?.locali || [];
    const fogli = d.fogli_calcolo || [];
    switch (String(cid)) {
      case '1':  return !!d.anagrafica?.codice_tariffa;
      case '2':  return gruppi.some(g => (g.valutazioni_pxd || []).length);
      case '3':  return locali.some(l => (l.valutazioni_pxd || []).length);
      case '6':  return fogli.some(f => /sollev|trasporto|traino/i.test(f.file || ''));
      case '10': return fogli.some(f => f.capitolo === 10 || /rumore/i.test(f.file || ''));
      case '11': return fogli.some(f => /vibra|mano brac|corpo intero/i.test(f.file || ''));
      default:   return false;
    }
  }

  /* ── Questionari: gestione al caricamento del JSON ─────────────────── */
  function _handleSurveyInfo(res) {
    const s = res.survey;
    if (!s || !s.attivo) return;
    if (s.needs_email) {
      // L'email del cliente non è nel JSON → è l'unica cosa da chiedere
      _askSurveyEmail(res.path, res.name);
    } else {
      toast(`Questionario iniziale in invio a ${s.email}`, 'info');
    }
  }

  function _askSurveyEmail(jsonPath, clientName) {
    const old = document.getElementById('survey-email-overlay');
    if (old) old.remove();
    const ov = document.createElement('div');
    ov.id = 'survey-email-overlay';
    ov.className = 'survey-email-overlay';
    ov.innerHTML = `
      <div class="survey-email-card">
        <h3>Email del cliente</h3>
        <p>Il file JSON di <b>${escHtml(clientName)}</b> contiene i questionari da
        inviare al cliente, ma non la sua email. Inseriscila per attivare
        l'invio automatico (iniziale subito, qualità a 7 giorni dall'export).</p>
        <input type="email" id="survey-email-input" placeholder="es. cliente@azienda.it"
          autocomplete="off" spellcheck="false">
        <div class="survey-email-actions">
          <button class="btn btn-ghost" onclick="document.getElementById('survey-email-overlay').remove()">Più tardi</button>
          <button class="btn btn-primary" onclick="App.confirmSurveyEmail('${escAttr(jsonPath)}')">Attiva invio</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
    setTimeout(() => document.getElementById('survey-email-input')?.focus(), 100);
  }

  async function confirmSurveyEmail(jsonPath) {
    const inp = document.getElementById('survey-email-input');
    const email = (inp?.value || '').trim();
    if (!email || !email.includes('@')) {
      toast('Inserire un indirizzo email valido', 'error');
      return;
    }
    const res = await call('registra_survey_email', jsonPath, email);
    document.getElementById('survey-email-overlay')?.remove();
    if (res?.ok) {
      toast(`Questionari attivati: invio a ${email}`, 'success');
      // Aggiorna il banner se siamo sulla schermata di quel cliente
      if (state.currentClient?.json_path === jsonPath) {
        _renderSurveyBanner(state.currentClient);
      }
    }
  }

  function showImportSuccess() {
    const ext  = state.extracted || {};
    const raw  = state.jsonRaw   || {};
    const name = state.currentClient?.name || ext.ragione_sociale || 'Azienda';

    document.getElementById('import-success-company').textContent = name;

    const parts = [];
    if (ext.indirizzo) parts.push(ext.indirizzo);
    if (ext.tipologia_attivita) parts.push(ext.tipologia_attivita);
    const ndip = ext.numero_dipendenti || raw.anagrafica?.numero_dipendenti;
    if (ndip) parts.push(`${ndip} dipendent${ndip === 1 ? 'e' : 'i'}`);
    document.getElementById('import-success-meta').textContent = parts.join(' · ');

    const overlay = document.getElementById('import-success-overlay');
    overlay.classList.remove('fade-out');
    overlay.style.display = 'flex';
  }

  async function dismissImportSuccess() {
    const overlay = document.getElementById('import-success-overlay');
    overlay.classList.add('fade-out');
    setTimeout(async () => {
      overlay.style.display = 'none';
      await showClientAfterImport();
    }, 280);
  }

  async function showClientAfterImport() {
    const client = state.currentClient;
    const ext    = state.extracted || {};

    const cdIcon = document.getElementById('cd-icon');
    if (cdIcon) cdIcon.innerHTML = ic('building', 28);
    document.getElementById('cd-name').textContent = client.name;
    document.getElementById('cd-meta').textContent =
      ext.indirizzo || client.json_path || '';

    state.freshImport = true;
    _renderTemplateToggle(client);      // spunta "Usa i dati del template"
    _renderSurveyBanner(client);        // conferma questionari anche dopo l'import
    await renderChaptersList(client, true);
    _renderDvrTypeBar(client);
    setClientSection('menu');
    showView('client');
  }

  function resetDropzone() {
    document.getElementById('home-dropzone')?.classList.remove('dragover-active');
  }

  /* ── Client detail ──────────────────────────────────────────────────── */
  async function showClient(clientId) {
    const client = state.history.find(c => c.id === clientId);
    if (!client) return;
    state.currentClient = client;

    // Azzera lo stato residuo del cliente precedente (verrà ricaricato dal JSON
    // del cliente corrente al bisogno). Evita dati incrociati tra clienti.
    state.jsonRaw = null; state.extracted = null;
    state.autoFields = {}; state.manualFields = []; state.tablePrefill = {};
    state.formValues = {}; state.inailSelected = null; state.checklistDraft = null;

    // Icona con iniziali
    const parts = (client.name || 'AZ').trim().split(/\s+/);
    const initials = parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : (client.name || 'AZ').substring(0, 2).toUpperCase();
    const cdIcon = document.getElementById('cd-icon');
    if (cdIcon) {
      cdIcon.style.cssText = 'font-size:18px;font-weight:800;letter-spacing:.02em';
      cdIcon.textContent = initials;
    }

    document.getElementById('cd-name').textContent = client.name;
    const date = new Date(client.created_at).toLocaleDateString('it-IT', {
      day: '2-digit', month: 'long', year: 'numeric'
    });
    const { settore, citta } = extractMeta(client);
    const metaParts = [settore, citta, `creato il ${date}`].filter(Boolean);
    document.getElementById('cd-meta').textContent = metaParts.join(' · ');

    // Avanzamento → anello di progresso (capitoli con dati / capitoli pertinenti)
    const TOTAL_CAP = _totCap(client);
    const withData = _capNonEsclusi(client).filter(ch => ch.form_data || ch.output_path).length;
    const done = Math.min(withData, TOTAL_CAP);
    const pct = Math.round(done / TOTAL_CAP * 100);
    const ringFg = document.getElementById('cd-ring-fg');
    if (ringFg) {
      const C = 2 * Math.PI * 19;                 // circonferenza r=19
      ringFg.style.strokeDasharray = C.toFixed(1);
      setTimeout(() => { ringFg.style.strokeDashoffset = (C * (1 - pct / 100)).toFixed(1); }, 80);
    }
    const pctEl = document.getElementById('cd-ring-pct');
    const cntEl = document.getElementById('cd-ring-count');
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (cntEl) cntEl.textContent = `${done}/${TOTAL_CAP}`;
    const heroFill = document.getElementById('cd-hero-fill');
    if (heroFill) setTimeout(() => { heroFill.style.width = `${pct}%`; }, 80);

    _renderTemplateToggle(client);
    _renderSurveyBanner(client);
    _renderClientSteps(client, done, TOTAL_CAP);
    _renderChapterFilterBar(client);
    renderChaptersList(client, true);   // anima solo all'ingresso nella vista
    _renderDvrTypeBar(client);
    setClientSection('menu');
    showView('client');
  }

  /* ── Tipo DVR + sezioni della scheda cliente ───────────────────────── */
  const DVR_TYPES = {
    completo: { label: 'DVR Completo', note: 'allegati 0–30' },
    super_g:  { label: 'DVR Super G',  note: 'allegati 0–33' },
    e:        { label: 'DVR E',        note: 'allegati 0–33' },
  };

  // Il JSON indica SOLO super G / normale: la scelta finale la fa il tecnico.
  function _rilevaTipoDvrDalJson(raw) {
    const t = String(raw?.meta?.tipo_dvr || raw?.tipo_dvr || '').toLowerCase();
    return t.includes('super') ? 'super_g' : 'normale';
  }

  function _tipoDvrCliente(client) {
    if (client?.tipo_dvr) return client.tipo_dvr;           // scelta salvata
    const det = _rilevaTipoDvrDalJson(state.jsonRaw || {}); // default dal JSON
    return det === 'super_g' ? 'super_g' : 'completo';
  }

  const _CHEVRON_DOWN = '<svg class="dvr-chip-ch" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  const _CHEVRON_UP = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';

  function _renderDvrTypeBar(client) {
    const bar = document.getElementById('dvr-type-bar');
    if (!bar) return;
    const cur = _tipoDvrCliente(client);
    const info = DVR_TYPES[cur] || DVR_TYPES.completo;
    const hasRaw = !!(state.jsonRaw && Object.keys(state.jsonRaw).length);
    const det = _rilevaTipoDvrDalJson(state.jsonRaw || {});
    const detLabel = det === 'super_g' ? 'Super G' : 'normale';

    if (!state.dvrTypeExpanded) {
      // Compatto: chip con il tipo selezionato, cliccabile per espandere.
      bar.className = 'dvr-type-bar dvr-type-bar--chip';
      bar.innerHTML =
        `<button class="dvr-chip" onclick="App.toggleDvrType()" title="Cambia tipo di DVR">
           <span class="dvr-chip-k">Tipo DVR</span>
           <span class="dvr-chip-v">${info.label}<small>${info.note}</small></span>
           ${_CHEVRON_DOWN}
         </button>`;
      bar.style.display = '';
      return;
    }

    // Esteso: scelta completa tra i 3 tipi.
    bar.className = 'dvr-type-bar';
    const detHtml = hasRaw
      ? `<span class="dvr-type-det">Dal JSON: <b>${detLabel}</b> — scegli il tipo</span>`
      : '';
    const btns = Object.entries(DVR_TYPES).map(([k, v]) =>
      `<button class="dvr-type-btn${k === cur ? ' dvr-type-active' : ''}"
         onclick="App.onPickTipoDvr('${k}')">
         <span class="dvr-btn-tt">${v.label}</span><small>${v.note}</small>
       </button>`
    ).join('');
    bar.innerHTML =
      `<div class="dvr-type-head"><span>Tipo di DVR</span>${detHtml}
         <button class="dvr-type-collapse" onclick="App.toggleDvrType()" title="Comprimi">${_CHEVRON_UP}</button></div>
       <div class="dvr-type-opts">${btns}</div>`;
    bar.style.display = '';
  }

  function toggleDvrType() {
    state.dvrTypeExpanded = !state.dvrTypeExpanded;
    if (state.currentClient) _renderDvrTypeBar(state.currentClient);
  }

  async function onPickTipoDvr(tipo) {
    if (!state.currentClient || !DVR_TYPES[tipo]) return;
    state.currentClient.tipo_dvr = tipo;
    // Nelle sezioni dove il selettore è compatto, dopo la scelta si richiude.
    if (state.clientSection !== 'allegati' && state.clientSection !== 'menu') {
      state.dvrTypeExpanded = false;
    }
    _renderDvrTypeBar(state.currentClient);
    const jp = state.currentClient.json_path;
    if (jp) { try { await call('imposta_tipo_dvr', jp, tipo); } catch (e) {} }
  }

  function setClientSection(name) {
    const panes = {
      menu: 'sec-menu', capitoli: 'sec-capitoli', allegati: 'sec-allegati',
      haccp: 'sec-haccp', piano: 'sec-piano',
    };
    Object.entries(panes).forEach(([sec, id]) => {
      const el = document.getElementById(id);
      if (el) el.style.display = (sec === name) ? '' : 'none';
    });
    // La barra schede è nascosta sul menu, visibile dentro una sezione.
    const tabs = document.getElementById('client-sections');
    if (tabs) tabs.style.display = (name === 'menu') ? 'none' : '';
    document.querySelectorAll('#client-sections .cx-tab').forEach(t => {
      t.classList.toggle('cx-tab--active', t.dataset.sec === name);
    });
    state.clientSection = name;
    // Il selettore Tipo DVR è esteso solo in Allegati (e sul menu iniziale),
    // compatto altrove (es. Capitoli) ma sempre riapribile.
    state.dvrTypeExpanded = (name === 'allegati' || name === 'menu');
    if (state.currentClient) _renderDvrTypeBar(state.currentClient);
  }

  async function generaAllegati() {
    const client = state.currentClient;
    const jp = client?.json_path;
    if (!jp) { toast('Apri un cliente con un JSON per generare gli allegati', 'error'); return; }
    const tipo = _tipoDvrCliente(client);
    const box = document.getElementById('alg-results');
    showLoading('Generazione allegati…');
    // apri=false: NON apre la cartella (resta tutto dentro il software).
    const res = await call('genera_allegati', jp, tipo, false);
    hideLoading();
    if (!res || res.error) { toast(res?.error || 'Errore generazione allegati', 'error'); return; }
    state.allegatiFolder = res.cartella || '';
    const righe = (res.generati || []).map(g => {
      const n = (g.numero != null) ? `Allegato ${g.numero}` : g.file;
      const comp = g.stato === 'compilato';
      return `<div class="alg-row">
        <span class="alg-dot${comp ? ' alg-dot--ok' : ''}"></span>
        <span class="alg-name">${escHtml(n)}</span>
        <span class="alg-state">${comp ? 'compilato' : 'copiato'}</span>
      </div>`;
    }).join('');
    const nerr = (res.errori || []).length;
    box.innerHTML = `
      <div class="alg-summary">Generati <b>${res.n_totali}</b> allegati
        (${res.n_compilati} compilati automaticamente)${nerr ? ` · <span class="alg-err">${nerr} errori</span>` : ''}
        · usa <b>Apri cartella</b> in alto per vederli</div>
      <div class="alg-list">${righe}</div>`;
    toast('Allegati generati', 'success');
  }

  async function apriCartellaAllegati() {
    const f = state.allegatiFolder;
    if (!f) { toast('Genera prima gli allegati', 'error'); return; }
    const res = await call('apri_cartella', f);
    if (res?.error) toast(res.error, 'error');
  }

  // Pulsante fisso nell'intestazione: apre la cartella Allegati del cliente.
  async function apriCartellaAllegatiCliente() {
    const jp = state.currentClient?.json_path;
    if (!jp) { toast('Apri un cliente', 'error'); return; }
    const res = await call('apri_cartella_allegati', jp);
    if (res?.error) { toast(res.error, 'error'); return; }
    if (res?.cartella) state.allegatiFolder = res.cartella;
  }

  // 3 passi IN LINEA nella testata navy della pagina cliente.
  async function _renderClientSteps(client, done, total) {
    const box = document.getElementById('cd-steps');
    if (!box) return;
    let avvisi = [];
    try { avvisi = await call('controlla_dati', client.json_path) || []; } catch (e) { avvisi = []; }
    const nAvv = avvisi.length;
    const allDone = done >= total;
    const s1cls = nAvv ? 'bad' : 'ok';
    const s1txt = nAvv ? `${nAvv} da sistemare` : 'A posto';
    const s3cls = allDone ? 'ok' : '';
    const s3txt = allDone ? 'Pronto' : 'In attesa';
    box.innerHTML = `
      <div class="cd-phase ${s1cls}" onclick="App.openChecklist()">
        <span class="cd-phase-n">1</span>
        <span class="cd-phase-l">Controlla i dati</span>
        <span class="cd-phase-v">${s1txt}</span>
      </div>
      <div class="cd-phase active">
        <span class="cd-phase-n">2</span>
        <span class="cd-phase-l">Compila i capitoli</span>
        <span class="cd-phase-v">${done}/${total}</span>
      </div>
      <div class="cd-phase ${s3cls}" onclick="App.compileAllToFolder('docx')">
        <span class="cd-phase-n">3</span>
        <span class="cd-phase-l">Genera il DVR</span>
        <span class="cd-phase-v">${s3txt}</span>
      </div>`;
  }

  // Barra filtri dei capitoli + pulsante "Continua".
  function _renderChapterFilterBar(client) {
    const box = document.getElementById('chapter-filterbar');
    if (!box) return;
    const chapters = _capNonEsclusi(client);
    const done = new Map((client.chapters || []).map(c => [c.id, c]));
    let nFatti = 0, nBozze = 0, nDaFare = 0;
    chapters.forEach(ch => {
      const e = done.get(ch.id);
      if (e && e.output_path) nFatti++;
      else if (e) nBozze++;
      else nDaFare++;
    });
    const f = state.chapterFilter || 'all';
    const chip = (key, label, n) =>
      `<button class="chfilter${f === key ? ' active' : ''}" onclick="App.onChapterFilter('${key}')">${label}${n != null ? ` ${n}` : ''}</button>`;
    box.innerHTML =
      chip('all', 'Tutti', chapters.length) +
      chip('todo', 'Da fare', nDaFare) +
      chip('draft', 'Bozze', nBozze) +
      chip('done', 'Fatti', nFatti) +
      `<span class="chfilter-spacer"></span>` +
      `<button class="chfilter-continua" onclick="App.continuaProssimo()">${ic('download', 14)} Continua</button>`;
  }

  function onChapterFilter(f) {
    state.chapterFilter = f;
    _renderChapterFilterBar(state.currentClient);
    _applyChapterFilter();
  }

  function _applyChapterFilter() {
    const f = state.chapterFilter || 'all';
    document.querySelectorAll('#chapters-grid .chapter-row').forEach(row => {
      const st = row.getAttribute('data-chstatus') || '';
      let show = true;
      if (f === 'todo')  show = (st === 'todo');
      else if (f === 'draft') show = (st === 'draft');
      else if (f === 'done')  show = (st === 'done');
      if (f !== 'all' && st === 'escluso') show = false;
      row.style.display = show ? '' : 'none';
    });
  }

  // Salta al primo capitolo non completato (prima le bozze, poi i da fare).
  function continuaProssimo() {
    const client = state.currentClient;
    if (!client) return;
    const done = new Map((client.chapters || []).map(c => [c.id, c]));
    const active = (state.chaptersCache || []).filter(ch => ch.active && !_isCapEscluso(ch.id));
    let target = active.find(ch => { const e = done.get(ch.id); return e && !e.output_path; });
    if (!target) target = active.find(ch => !done.get(ch.id));
    if (!target) target = active.find(ch => ch.id !== '0') || active[0];
    if (!target) { toast('Nessun capitolo da compilare', 'info'); return; }
    if (done.get(target.id)) editChapter(target.id); else startChapter(target.id);
  }

  // Banner informativo "Cliente da template" (le spunte vere sono nei capitoli).
  function _renderTemplateToggle(client) {
    const el = document.getElementById('cd-template-banner');
    if (!el) return;
    if (!client || !client.da_template) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    el.innerHTML = `
      <div class="tmpl-info">
        <span class="tmpl-info-ic">${ic('info', 15)}</span>
        <span><b>Cliente da template.</b> In ogni capitolo con dati precompilati trovi
        in alto una spunta per usare o meno i dati del template per quel capitolo.</span>
      </div>`;
  }

  // Spunta per-capitolo, mostrata in cima al form del capitolo corrente.
  function _templateCapToggleHtml(cid) {
    if (!_chapterHasTemplateData(cid) || !state.currentClient?.da_template) return '';
    const on = _usaTemplateCap(cid);
    return `
      <label class="tmpl-cap-toggle${on ? ' on' : ''}">
        <input type="checkbox" ${on ? 'checked' : ''}
          onchange="App.onToggleTemplateCap('${cid}', this.checked)">
        <span class="tmpl-toggle-body">
          <span class="tmpl-toggle-title">Usa i dati del template per questo capitolo</span>
          <span class="tmpl-toggle-hint">${on
            ? 'Attivo: valori precompilati dal template (modificabili).'
            : 'Disattivato: compili questo capitolo da zero.'}</span>
        </span>
      </label>`;
  }

  async function onToggleTemplateCap(cid, checked) {
    const cli = state.currentClient;
    if (!cli) return;
    if (!cli.usa_template_cap) cli.usa_template_cap = {};
    cli.usa_template_cap[String(cid)] = checked;
    call('imposta_usa_template_cap', cli.json_path || '', String(cid), checked);
    toast(checked ? 'Dati del template attivati per il capitolo'
                  : 'Dati del template disattivati per il capitolo',
          checked ? 'success' : 'info');
    // Ricostruisci il capitolo con/ senza i dati del template
    await startChapter(String(cid), null);
  }

  async function _renderSurveyBanner(client) {
    const banner = document.getElementById('cd-survey-banner');
    if (!banner) return;
    banner.style.display = 'none';
    banner.innerHTML = '';
    if (!client?.json_path) return;
    const st = await call('get_survey_status_for', client.json_path);
    if (!st || !st.attivo) return;
    const parts = (st.voci || []).map(v => {
      const nome = v.tipo === 'qualita' ? 'Questionario di qualità' : 'Questionario iniziale';
      if (v.stato === 'inviata') {
        const d = v.inviata_il ? ' il ' + new Date(v.inviata_il).toLocaleDateString('it-IT') : '';
        return `<span class="cd-sv ok">✓ ${nome} inviato a ${escHtml(v.email)}${d}</span>`;
      }
      if (!v.email) {
        return `<span class="cd-sv warn">⚠ ${nome}: manca l'email del cliente
          <button class="cd-sv-btn" onclick="App.askSurveyEmailForClient()">Inserisci email</button></span>`;
      }
      const prev = v.invia_dopo
        ? ' (previsto per il ' + new Date(v.invia_dopo).toLocaleDateString('it-IT') + ')' : '';
      const err = v.ultimo_errore ? ' — errore: ' + escHtml(v.ultimo_errore).slice(0, 50) : '';
      return `<span class="cd-sv wait">⏳ ${nome} in attesa d'invio${prev}${err}</span>`;
    });
    banner.innerHTML = parts.join('');
    banner.style.display = 'flex';

    // L'invio iniziale parte in un thread in background: se una voce è ancora
    // "in attesa" con email e SMTP configurato, ricontrolla una volta dopo poco
    // così il badge passa da "in attesa" a "inviato" senza riaprire la schermata.
    const daAggiornare = st.configurato &&
      (st.voci || []).some(v => v.stato !== 'inviata' && v.email);
    if (daAggiornare && !banner._pendingRefresh) {
      banner._pendingRefresh = true;
      setTimeout(() => {
        banner._pendingRefresh = false;
        if (state.currentClient?.json_path === client.json_path) {
          _renderSurveyBanner(client);
        }
      }, 2500);
    }
  }

  function askSurveyEmailForClient() {
    const c = state.currentClient;
    if (c?.json_path) _askSurveyEmail(c.json_path, c.name);
  }

  async function renderChaptersList(client, animate = false) {
    const chaptersInfo = await call('get_chapters') || [];
    state.chaptersCache = chaptersInfo;                              // cache per navigazione prev/next
    const grid = document.getElementById('chapters-grid');
    const done = new Map(client.chapters?.map(c => [c.id, c]) || []);

    // Mostra hint "Inizia dal Capitolo 1" solo dopo import fresco
    const hint = document.getElementById('import-start-hint');
    if (hint) hint.style.display = state.freshImport ? 'flex' : 'none';

    // Azioni secondarie compatte (icona) → meno pulsanti testuali per riga
    const _svgEye = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
    const _svgDl = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
    const _svgEdit = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
    const _svgExcl = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68"/><path d="M6.6 6.6A13.5 13.5 0 0 0 2 12s3 7 10 7a9.1 9.1 0 0 0 5.4-1.6"/><line x1="2" y1="2" x2="22" y2="22"/></svg>';
    const chIco = (onclick, title, svg) =>
      `<button class="ch-ico-btn" title="${title}" onclick="${onclick}">${svg}</button>`;

    grid.innerHTML = '<div id="client-warn-banner"></div><div class="chapters-section-hdr">Capitoli</div>' + chaptersInfo.map((ch, idx) => {
      const chapterEntry = done.get(ch.id);
      const escluso      = _isCapEscluso(ch.id);
      const isActive     = ch.active && !escluso;

      // Capitolo escluso: riga attenuata + pulsante "Includi"
      if (escluso) {
        const iconExc = buildChapterIcon(ch.id);
        return `
        <div class="chapter-row ch-escluso" data-chstatus="escluso" style="animation-delay:${idx * 30}ms">
          <div class="ch-num">${iconExc.svg}</div>
          <div class="ch-info">
            <div class="ch-title">Cap. ${ch.id} — ${escHtml(ch.title)}<span class="ch-badge escluso-badge">Escluso</span></div>
            <div class="ch-date">Non pertinente per questo cliente</div>
          </div>
          <div class="ch-actions">
            <button class="btn btn-outline btn-sm" onclick="App.onToggleCapitoloEscluso('${ch.id}')">Includi</button>
          </div>
        </div>`;
      }
      // hasDraft: entry esiste ma senza output_path → bozza non esportata
      // hasExport: entry con output_path → già esportato almeno una volta
      const hasDraft  = chapterEntry && !chapterEntry.output_path;
      const hasExport = chapterEntry && !!chapterEntry.output_path;

      const iconData = buildChapterIcon(ch.id);
      const catClass = (hasExport || hasDraft) ? '' : iconData.cat;
      const numClass = hasExport ? 'done' : (hasDraft ? 'draft' : (isActive ? 'active' : ''));
      const dateStr  = hasExport
        ? `Esportato il ${new Date(chapterEntry.completed_at).toLocaleDateString('it-IT')}`
        : hasDraft
          ? `Bozza del ${new Date(chapterEntry.completed_at).toLocaleDateString('it-IT')}`
          : (isActive ? 'Disponibile' : 'In arrivo');

      const statusBadge = hasExport
        ? `<span class="ch-badge exported">Esportato</span>`
        : hasDraft
          ? `<span class="ch-badge draft">Bozza</span>`
          : '';
      const manualBadge = (chapterEntry && chapterEntry.manual_edit)
        ? `<span class="ch-badge manual" title="Le modifiche fatte a mano nell'anteprima Word sono salvate e verranno usate nell'esportazione">✎ Modificato a mano da anteprima</span>`
        : '';

      // Azione primaria etichettata + secondarie come icone (meno affollamento)
      const actions = hasExport
        ? `<button class="btn btn-primary btn-sm" onclick="App.openFile('${escAttr(chapterEntry.output_path)}')">Apri documento</button>
           ${chIco(`App.editChapter('${ch.id}')`, 'Modifica', _svgEdit)}
           ${chIco(`App.previewChapterFromHistory('${ch.id}')`, 'Anteprima', _svgEye)}
           ${chIco(`App.exportChapterFromHistory('${ch.id}')`, 'Ri-genera .docx', _svgDl)}`
        : hasDraft
          ? `<button class="btn btn-primary btn-sm" onclick="App.editChapter('${ch.id}')">Continua</button>
             ${chIco(`App.previewChapterFromHistory('${ch.id}')`, 'Anteprima', _svgEye)}
             ${chIco(`App.exportChapterFromHistory('${ch.id}')`, 'Genera .docx', _svgDl)}`
          : isActive
            ? `<button class="btn btn-primary btn-sm" onclick="App.startChapter('${ch.id}')">Inizia</button>
               ${chIco(`App.editChapter('${ch.id}')`, "Apri l'editor (anche se completo dal JSON)", _svgEdit)}`
            : `<span style="font-size:11px;color:var(--gray-400)">Prossimamente</span>`;

      // "Escludi" (capitolo non pertinente) → icona discreta. Cap 0 non escludibile.
      const btnEscludi = (isActive && ch.id !== '0')
        ? chIco(`App.onToggleCapitoloEscluso('${ch.id}')`, 'Escludi capitolo (non pertinente)', _svgExcl)
        : '';

      const chStatus = hasExport ? 'done' : (hasDraft ? 'draft' : 'todo');
      return `
        <div class="chapter-row ${isActive ? '' : 'locked'}" data-chstatus="${chStatus}"
             style="animation-delay:${idx * 30}ms">
          <div class="ch-num ${numClass} ${catClass}">${hasExport ? ic('check', 16) : iconData.svg}</div>
          <div class="ch-info">
            <div class="ch-title">Cap. ${ch.id} — ${escHtml(ch.title)}${statusBadge}${manualBadge}</div>
            <div class="ch-date">${dateStr}</div>
          </div>
          <div class="ch-actions">${actions}${btnEscludi}</div>
        </div>`;
    }).join('');
    // Anima le righe solo alla prima apertura (non su Escludi/Includi/aggiornamenti)
    grid.classList.toggle('animate-in', !!animate);
    // Controllo dati AUTOMATICO: banner in cima alla lista capitoli
    _loadClientWarnBanner(client);
    // Riapplica il filtro di stato attivo (dopo ogni re-render della griglia)
    _applyChapterFilter();
  }

  async function _loadClientWarnBanner(client) {
    const path = client?.json_path;
    const box = document.getElementById('client-warn-banner');
    if (!box || !path) return;
    let avvisi = [];
    try { avvisi = await call('controlla_dati', path) || []; } catch (e) { avvisi = []; }
    if (!avvisi.length) { box.innerHTML = ''; return; }
    const ic = (lv) => lv === 'errore' ? '⛔' : lv === 'attenzione' ? '⚠️' : 'ℹ️';
    const nErr = avvisi.filter(a => a.livello === 'errore').length;
    const sev = nErr ? 'errore' : 'attenzione';
    box.innerHTML = `
      <div class="client-warn cw-${sev}">
        <div class="client-warn-head" onclick="App.toggleClientWarn()">
          <span class="cw-ico">${ic(sev)}</span>
          <span class="cw-text"><b>Controllo dati:</b> ${avvisi.length} incongruenz${avvisi.length === 1 ? 'a' : 'e'} da sistemare</span>
          <span class="cw-chevron" id="cw-chevron">▾</span>
        </div>
        <div class="client-warn-list" id="client-warn-list" style="display:none">
          ${avvisi.map(a => {
            const t = a.target ? ` data-cl-goto="${escAttr(JSON.stringify(a.target))}"` : '';
            return `<div class="cw-item cw-item-${escAttr(a.livello)}${a.target ? ' cw-item-clickable' : ''}"${t}>
            <div class="cw-msg">${ic(a.livello)} ${escHtml(a.messaggio)}${a.target ? ' <span class="cl-warn-go">→ apri e correggi</span>' : ''}</div>
            ${a.soluzione ? `<div class="cw-fix"><b>Come risolvere:</b> ${escHtml(a.soluzione)}</div>` : ''}
          </div>`;
          }).join('')}
          <div class="cw-foot"><button class="btn btn-outline btn-sm" onclick="App.openChecklist()">Apri checklist dati</button></div>
        </div>
      </div>`;
    box.querySelectorAll('[data-cl-goto]').forEach(el =>
      el.addEventListener('click', () => gotoChecklistField(el.getAttribute('data-cl-goto'))));
  }

  function toggleClientWarn() {
    const list = document.getElementById('client-warn-list');
    const chev = document.getElementById('cw-chevron');
    if (!list) return;
    const open = list.style.display === 'none';
    list.style.display = open ? 'block' : 'none';
    if (chev) chev.textContent = open ? '▴' : '▾';
  }

  function toggleChecklistWarn() {
    const list = document.getElementById('cl-warn-list');
    const chev = document.getElementById('cl-warn-chev');
    if (!list) return;
    const open = list.style.display === 'none';
    list.style.display = open ? 'block' : 'none';
    if (chev) chev.textContent = open ? '▾' : '▸';
  }

  function _showChapterCompleteAnim(chapterId, onDone) {
    const ch = (state.chaptersCache || []).find(c => c.id === chapterId);
    const title = ch?.title || `Capitolo ${chapterId}`;
    const active = _capitoliDaCompilare();
    const nextId = active[active.indexOf(chapterId) + 1];
    const nextCh = nextId ? (state.chaptersCache || []).find(c => c.id === nextId) : null;
    const nextLine = nextCh
      ? `<div class="cda-next">Prossimo: Cap. ${nextId} — ${escHtml(nextCh.title)}</div>`
      : `<div class="cda-next">Ultimo capitolo completato</div>`;
    const continuaLabel = nextCh ? 'Continua →' : 'Torna alla lista ✓';
    const eyeSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;

    const el = document.createElement('div');
    el.className = 'cda-overlay';
    el.innerHTML = `
      <div class="cda-card">
        <div class="cda-check">${ic('check_circle', 72)}</div>
        <div class="cda-title">${escHtml(title)}</div>
        <div class="cda-badge">Già compilato dal JSON</div>
        ${nextLine}
        <div class="cda-ask">Vuoi visualizzare l'anteprima di questo capitolo?</div>
        <div class="cda-actions">
          <button class="cda-btn" id="cda-preview">${eyeSvg} Visualizza anteprima</button>
          <button class="cda-btn cda-btn--primary" id="cda-continue">${continuaLabel}</button>
        </div>
      </div>`;
    document.body.appendChild(el);

    const btnPreview  = el.querySelector('#cda-preview');
    const btnContinue = el.querySelector('#cda-continue');
    if (btnPreview) {
      btnPreview.addEventListener('click', () => previewChapterFromHistory(chapterId));
    }
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        el.classList.add('cda-out');
        const cleanup = () => { el.remove(); onDone(); };
        const fallback = setTimeout(cleanup, 500);
        el.addEventListener('animationend', () => { clearTimeout(fallback); cleanup(); }, { once: true });
      });
    }
  }

  async function startChapter(chapterId, savedFormData = null, direction = 'forward', forceEdit = false) {
    state.freshImport = false;
    if (!state.currentClient?.json_path) {
      toast('Carica prima un file JSON per questo cliente', 'error'); return;
    }
    showLoading('Lettura JSON…');
    const res = await call('load_json_from_path', state.currentClient.json_path);
    hideLoading();
    if (!res || res.error) { toast(res?.error || 'Errore lettura JSON', 'error'); return; }
    state.jsonRaw   = res.json_raw;
    state.extracted = res.extracted;

    // Valutazione del capitolo, tenendo conto della spunta "Usa i dati del template"
    // (clienti template: la spunta accende/spegne la precompilazione dai dati extra).
    // forceEdit → mostra ANCHE i capitoli auto-completati dal JSON (editor sempre
    // apribile/modificabile dal back office).
    showLoading('Valutazione campi…');
    const assessment = await call('evaluate_fields', chapterId, res.json_raw, _usaTemplateCap(chapterId), forceEdit);
    hideLoading();
    state.autoFields   = assessment?.auto || {};
    state.manualFields = assessment?.manual || [];
    state.tablePrefill = assessment?.table_prefill || {};

    // Auto-complete: nessun campo manuale → salva e mostra animazione (o salta backward).
    // Con forceEdit NON si auto-completa: si apre comunque l'editor da modificare.
    if (state.manualFields.length === 0 && !savedFormData && !forceEdit) {
      const _active = _capitoliDaCompilare();
      const _currIdx = _active.indexOf(chapterId);

      if (direction === 'backward') {
        const _prevId = _currIdx > 0 ? _active[_currIdx - 1] : null;
        if (_prevId) await startChapter(_prevId, null, 'backward');
        else await goBackFromForm(true);
        return;
      }

      state.currentChapter = chapterId;
      state.formValues = {};
      const allData = buildFullData();
      await call('save_to_history',
        state.currentClient?.name || 'Azienda',
        state.currentClient?.json_path || '',
        chapterId,
        `Capitolo ${chapterId}`,
        '',
        allData
      );
      await refreshHistory();
      const _upd = state.history.find(c => c.json_path === state.currentClient?.json_path);
      if (_upd) { state.currentClient = _upd; }
      const _nextId = _active[_currIdx + 1];
      openChapterForm(chapterId, state.currentClient.name, true, null);
      await new Promise(r => setTimeout(r, 0));
      _showChapterCompleteAnim(chapterId, async () => {
        if (_nextId) { await startChapter(_nextId, null, 'forward'); }
        else         { await goBackFromForm(true); }
      });
      return;
    }

    // Capitolo con campi manuali: se non è stata passata una bozza esplicita,
    // recupera quella salvata dalla history (così tornando indietro il capitolo
    // già compilato viene ripristinato invece di risultare vuoto).
    if (!savedFormData) {
      await refreshHistory();
      const _c = state.history.find(c => c.json_path === state.currentClient?.json_path);
      if (_c) state.currentClient = _c;
      const _saved = state.currentClient?.chapters?.find(c => c.id === chapterId)?.form_data;
      if (_saved && typeof _saved === 'object') savedFormData = _saved;
    }

    openChapterForm(chapterId, state.currentClient.name, true, savedFormData);
  }

  async function recompileChapter(chapterId) {
    // Recupera i dati del form salvati al momento dell'ultimo salvataggio
    const savedChapter = state.currentClient?.chapters?.find(c => c.id === chapterId);
    const savedFormData = savedChapter?.form_data || null;
    await startChapter(chapterId, savedFormData);
  }

  /* ── Chapter form ───────────────────────────────────────────────────── */
  async function openChapterForm(chapterId, clientName, fromClient = false, savedFormData = null) {
    state.currentChapter = chapterId;
    state.fromClientView = fromClient;
    state.formValues     = {};
    state.inailSelected  = null;

    const titles = {
      '1': 'Anagrafica Azienda',
      '2': 'Valutazione Generale dei Rischi',
    };
    // Aggiorna la topbar con il capitolo corrente
    const topbarStep = document.getElementById('form-topbar-step');
    if (topbarStep) {
      topbarStep.textContent = `CAPITOLO ${chapterId} — ${titles[chapterId] || `Capitolo ${chapterId}`}`.toUpperCase();
    }
    // Nome cliente nel pulsante back
    const backLabel = document.getElementById('form-topbar-back-label');
    if (backLabel) backLabel.textContent = state.currentClient?.name || 'Home';
    // Reset indicatore "Salvato"
    const savedEl = document.getElementById('form-topbar-saved');
    if (savedEl) savedEl.style.display = 'none';

    // Reset form-bar: navigazione prev/next (l'export avviene dalla vista cliente)
    {
      const active  = _capitoliDaCompilare();
      const idx     = active.indexOf(chapterId);
      const hasPrev = idx > 0;
      const hasNext = idx < active.length - 1;
      const nextLabel = hasNext ? 'Prossimo Capitolo →' : 'Fine — Torna alla Lista ✓';
      const hasFogli = ['6', '7', '10', '11'].includes(String(chapterId));
      const btnFogli = hasFogli ? `
        <button class="btn btn-ghost" id="btn-fogli-xls" onclick="App.apriFogliCalcolo('${chapterId}')"
          title="Apre in Excel i fogli di calcolo del capitolo (schede/gruppi selezionati)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>
          Apri fogli Excel</button>` : '';
      document.getElementById('form-bar').innerHTML = `
        <span class="form-bar-info" id="form-bar-info">Le bozze vengono salvate automaticamente.</span>
        <button class="btn btn-ghost" id="btn-preview" onclick="App.previewChapter()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Anteprima</button>
        ${btnFogli}
        <button class="btn btn-outline btn-sm" id="btn-prev-ch"
          onclick="App.goToPrevChapter()"
          ${hasPrev ? '' : 'disabled style="opacity:.35;cursor:not-allowed"'}>
          ← Capitolo Prec.</button>
        <button class="btn btn-primary btn-lg" id="btn-next-ch"
          onclick="App.goToNextChapter()">
          ${nextLabel}</button>`;
    }

    // Carica codici INAIL se non già caricati
    if (!state.inailCodes.length) {
      const codes = await call('get_inail_codes');
      if (codes) state.inailCodes = codes;
    }

    renderAutoFields(state.autoFields);

    // Se c'è una bozza salvata, gli editor (cap2/3/4/… editor) devono ripartire
    // da quella e non dal solo JSON: sovrascrivo il prefill con la bozza salvata
    // così initCapNEditor/buildCapNEditor la usano (altrimenti tornando indietro
    // il capitolo compilato risulta vuoto).
    if (savedFormData) {
      for (const fd of state.manualFields) {
        if (fd.type && fd.type.endsWith('_editor')
            && savedFormData[fd.id] && typeof savedFormData[fd.id] === 'object') {
          state.tablePrefill[fd.id] = savedFormData[fd.id];
        }
      }
    }

    renderManualFields(state.manualFields, state.tablePrefill);

    // Pre-riempie i campi semplici se si sta ricompilando un capitolo salvato
    if (savedFormData) {
      requestAnimationFrame(() => applySavedFormData(savedFormData));
    }

    updateGruppo();
    showView('form');

    // Animazione di apertura: il form entra da destra come unità.
    // Solo su apertura diretta — la navigazione prev/next gestisce da sé la direzione.
    if (!state.navigating) {
      const scroll = document.getElementById('form-scroll');
      if (scroll) {
        scroll.classList.remove('ch-enter-left', 'ch-enter-right');
        void scroll.offsetWidth;   // reflow per far ripartire l'animazione
        scroll.classList.add('ch-enter-right');
        scroll.addEventListener('animationend',
          () => scroll.classList.remove('ch-enter-right'), { once: true });
      }
    }
  }

  async function goBackFromForm(skipSave = false) {
    if (!skipSave) await saveChapterDraft();
    if (state.fromClientView && state.currentClient?.id) {
      showClient(state.currentClient.id);
    } else {
      showHome();
    }
  }

  /* ── Navigazione capitoli ───────────────────────────────────────────── */

  async function saveChapterDraft() {
    if (!state.currentClient?.json_path) return;
    const allData = buildFullData();
    await call('save_to_history',
      state.currentClient?.name || 'Azienda',
      state.currentClient?.json_path || '',
      state.currentChapter,
      `Capitolo ${state.currentChapter}`,
      '',          // output_path vuoto = bozza (non ancora esportato)
      allData
    );
  }

  async function _animateFormScroll(exitCls, enterCls, fn) {
    const scroll = document.getElementById('form-scroll');
    if (scroll) {
      scroll.classList.add(exitCls);
      await Promise.race([
        new Promise(r => scroll.addEventListener('animationend', r, { once: true })),
        new Promise(r => setTimeout(r, 500))
      ]);
      scroll.classList.remove(exitCls);
    }
    await fn();
    if (scroll) {
      scroll.classList.add(enterCls);
      scroll.addEventListener('animationend', () => scroll.classList.remove(enterCls), { once: true });
    }
  }

  async function goToNextChapter() {
    if (state.navigating) return;
    state.navigating = true;
    try {
      await saveChapterDraft();
      const active = _capitoliDaCompilare();
      const idx    = active.indexOf(state.currentChapter);
      if (idx < 0) return;
      const nextId = active[idx + 1];
      if (nextId) {
        await _animateFormScroll('ch-exit-left', 'ch-enter-right', () => startChapter(nextId, null, 'forward'));
      } else {
        await goBackFromForm(true);
        toast('Bozze salvate! Esporta i capitoli dalla vista cliente.', 'success', 4000);
      }
    } finally {
      state.navigating = false;
    }
  }

  async function goToPrevChapter() {
    if (state.navigating) return;
    state.navigating = true;
    try {
      await saveChapterDraft();
      const active = _capitoliDaCompilare();
      const idx    = active.indexOf(state.currentChapter);
      if (idx < 0) return;
      if (idx > 0) {
        await _animateFormScroll('ch-exit-right', 'ch-enter-left', () => startChapter(active[idx - 1], null, 'backward'));
      }
    } finally {
      state.navigating = false;
    }
  }

  function editChapter(chapterId) {
    const ch = state.currentClient?.chapters?.find(c => c.id === chapterId);
    // forceEdit: apre sempre l'editor, anche per i capitoli auto-completati dal JSON
    startChapter(chapterId, ch?.form_data || null, 'forward', true);
  }

  async function exportChapterFromHistory(chapterId) {
    const ch = state.currentClient?.chapters?.find(c => c.id === chapterId);
    if (!ch?.form_data) {
      toast('Nessun dato salvato. Apri e compila prima il capitolo.', 'error'); return;
    }
    const prefixes = { '1': '1_Anagrafica', '2': '2_ValRischi', '3': '3_Luoghi', '4': '4_Attrezzature', '5': '5_Segnaletica', '6': '6_MMC', '20': '20_Incendio' };
    const prefix = prefixes[chapterId] || `${chapterId}_Cap`;
    const clientSafe = (state.currentClient?.name || 'Azienda').replace(/[^a-zA-Z0-9 _-]/g, '').trim();
    const suggestedName = `${prefix}_${clientSafe}.docx`;

    showLoading('Generazione documento…');
    const res = await call('compile_chapter', chapterId, ch.form_data, suggestedName,
                           state.currentClient?.json_path || '');
    hideLoading();

    if (!res || res.cancelled) return;
    if (res.error) { toast(res.error, 'error', 6000); return; }

    // Aggiorna history con il percorso output reale → badge "Esportato"
    await call('save_to_history',
      state.currentClient?.name || 'Azienda',
      state.currentClient?.json_path || '',
      chapterId,
      `Capitolo ${chapterId}`,
      res.path,
      ch.form_data
    );
    await refreshHistory();
    const updated = state.history.find(c => c.json_path === state.currentClient?.json_path);
    if (updated) { state.currentClient = updated; renderChaptersList(updated); }
    toast(`Capitolo ${chapterId} esportato correttamente!`, 'success');
  }

  async function previewChapterFromHistory(chapterId) {
    const ch = state.currentClient?.chapters?.find(c => c.id === chapterId);
    if (!ch?.form_data) {
      toast('Nessun dato salvato. Apri e compila prima il capitolo.', 'error'); return;
    }
    showLoading('Generazione anteprima…');
    const res = await call('preview_chapter', chapterId, ch.form_data,
                           state.currentClient?.json_path || '');
    hideLoading();
    if (res?.error) toast(res.error, 'error');
    else toast('Anteprima: sommario e n° pagine verranno aggiornati automaticamente nell\'esportazione finale.', 'info', 5000);
  }

  /* ── Restore saved form data (ricompila) ────────────────────────────── */
  function applySavedFormData(data) {
    if (!data) return;
    const COLS_CBG = [
      ['Uomini','uomini'],['Donne','donne'],['Minori','minori'],
      ['Stranieri','stranieri'],['Tip.Contr.','contratti'],
    ];

    for (const fd of state.manualFields) {
      const val = data[fd.id];
      if (val === undefined || val === null) continue;

      if (fd.type === 'text' || fd.type === 'number') {
        const el = document.getElementById(`field-${fd.id}`);
        if (el) { el.value = val; state.formValues[fd.id] = val; }

      } else if (fd.type === 'dropdown') {
        const el = document.getElementById(`field-${fd.id}`);
        if (el) { el.value = val; state.formValues[fd.id] = val; }

      } else if (fd.type === 'turno_picker') {
        const wrap = document.querySelector(`[data-turno-field="${fd.id}"]`);
        if (wrap && val) {
          const m = String(val).match(/^(\S+)\s+(\d\d:\d\d)[–-](\d\d:\d\d)$/);
          if (m) {
            const sel = wrap.querySelector('.turno-giorni');
            const ini = wrap.querySelector('.turno-inizio');
            const fin = wrap.querySelector('.turno-fine');
            if (sel) sel.value = m[1];
            if (ini) ini.value = m[2];
            if (fin) fin.value = m[3];
          }
          state.formValues[fd.id] = val;
        }

      } else if (fd.type === 'checkbox') {
        const el = document.getElementById(`field-${fd.id}`);
        if (el) { el.checked = !!val; state.formValues[fd.id] = val; }

      } else if (fd.type === 'inail_picker') {
        // Seleziona il codice INAIL se salvato
        if (data.codice_tariffa) {
          selectInailCode(data.codice_tariffa);
        }

      } else if (fd.type === 'table') {
        const body = document.getElementById(`table-body-${fd.id}`);
        if (body && Array.isArray(val) && val.length) {
          body.innerHTML = '';
          val.forEach(row => {
            const div = document.createElement('div');
            div.className = 'table-row';
            div.innerHTML = buildTableRow(fd.id, fd.columns || [], row);
            body.appendChild(div);
          });
          state.formValues[fd.id] = val;
        }

      } else if (fd.type === 'checkbox_group') {
        const body = document.getElementById(`cbg-body-${fd.id}`);
        if (body && Array.isArray(val) && val.length) {
          body.innerHTML = '';
          val.forEach(row => {
            const div = document.createElement('div');
            div.innerHTML = buildCbgRow(fd.id, row, COLS_CBG);
            body.appendChild(div.firstElementChild);
          });
          state.formValues[fd.id] = val;
        }

      } else if (fd.type === 'procedure_picker') {
        // Ripristina la selezione salvata; le checkbox vengono ri-spuntate
        // quando il picker (asincrono) finisce di caricare.
        if (Array.isArray(val)) state.formValues[fd.id] = val;

      } else if (fd.type === 'cap20_editor') {
        // Ripristina la bozza salvata (gruppi per area compresi): senza questo
        // ramo il form riparte dai soli dati JSON e le modifiche vanno perse.
        if (val && typeof val === 'object') {
          delete state.formValues[fd.id];
          initCap20Editor(fd.id, val);      // merge con i default (chiavi nuove)
          const wrap = document.querySelector(`[data-field-id="${fd.id}"]`);
          const ed = wrap?.querySelector('.c20-editor');
          if (ed) ed.outerHTML = buildCap20Editor(fd.id, state.formValues[fd.id]) || '';
        }
      }
    }
    updateGruppo();
    updateProgressPills();
  }

  /* ── Auto fields rendering ──────────────────────────────────────────── */
  function renderAutoFields(auto) {
    const grid = document.getElementById('auto-fields-grid');
    const section = document.getElementById('auto-section');
    const countBadge = document.getElementById('auto-count');

    const entries = Object.entries(auto)
      .filter(([k, v]) => typeof v === 'string' || typeof v === 'number');

    countBadge.textContent = `${entries.length} campi`;
    section.style.display = entries.length > 0 ? 'block' : 'none';

    const labels = {
      ragione_sociale: 'Ragione Sociale', indirizzo: 'Indirizzo',
      telefono: 'Telefono', email: 'E-mail', pec: 'PEC',
      partita_iva: 'P.IVA', tipologia_attivita: 'Attività',
      datore_lavoro: 'Datore di Lavoro', rspp_nome: 'RSPP',
      rls_nome: 'RLS', medico_nome: 'Medico Competente',
      numero_dipendenti: 'N° Dipendenti',
    };

    grid.innerHTML = entries.map(([k, v]) => `
      <div class="auto-field">
        <div class="auto-field-label">${labels[k] || k.replace(/_/g, ' ')}</div>
        <div class="auto-field-value" title="${escHtml(String(v))}">${escHtml(String(v))}</div>
      </div>`).join('');
  }

  function toggleAutoSection() {
    document.getElementById('auto-section').classList.toggle('open');
  }

  /* ── Manual fields rendering ────────────────────────────────────────── */
  function renderManualFields(fields, prefill) {
    const container = document.getElementById('manual-sections');
    container.innerHTML = '';
    state.formValues = {};

    if (!fields || fields.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:40px;color:var(--gray-600)">
          <div style="display:flex;justify-content:center;margin-bottom:10px;color:var(--success)">${ic('check_circle', 40)}</div>
          <p style="font-weight:700;font-size:14px">Tutti i dati estratti dal JSON!</p>
          <p style="font-size:12px;margin-top:4px">Puoi procedere direttamente con Valida e Salva.</p>
        </div>`;
      // Svuota le pills
      const pp = document.getElementById('progress-pills');
      if (pp) pp.innerHTML = '';
      return;
    }

    // Raggruppa per sezione
    const sections = {};
    for (const fd of fields) {
      if (!sections[fd.section]) {
        sections[fd.section] = { title: fd.section_title, fields: [] };
      }
      sections[fd.section].fields.push(fd);
    }

    // Icone per sezione (usano currentColor — eredita var(--blue-700) da .manual-section-icon)
    const sectionIcons = {
      '3.1': ic('building',  15),
      '3.2': ic('user',      15),
      '3.3': ic('users',     15),
      '3.4': ic('shield',    15),
      '3.5': ic('bell',      15),
      '3.6': ic('bar_chart', 15),
      '4.1': ic('users',     15),
      '4.2': ic('grid',      15),
    };

    // Crea progress pills
    const pp = document.getElementById('progress-pills');
    if (pp) {
      pp.innerHTML = Object.entries(sections).map(([secId, sec]) => `
        <div class="pill" id="pill-${secId.replace('.', '_')}">
          <span class="pill-dot"></span>${secId}
        </div>`).join('');
    }

    // Spunta per-capitolo "Usa i dati del template" (in cima al form)
    const _tmplHtml = _templateCapToggleHtml(state.currentChapter);
    if (_tmplHtml) {
      const holder = document.createElement('div');
      holder.innerHTML = _tmplHtml;
      if (holder.firstElementChild) container.appendChild(holder.firstElementChild);
    }

    Object.entries(sections).forEach(([secId, sec], sIdx) => {
      const secEl = document.createElement('div');
      secEl.className = 'manual-section';
      secEl.id = `section-${secId.replace('.', '_')}`;
      secEl.style.animationDelay = `${sIdx * 50}ms`;

      // Conta i required in questa sezione
      const reqCount = sec.fields.filter(f => f.required &&
        f.type !== 'table' && f.type !== 'checkbox_group').length;
      const badgeText = reqCount > 0 ? `${reqCount} obbligatori` : 'opzionale';

      secEl.innerHTML = `
        <div class="manual-section-title">
          <span class="manual-section-icon">${sectionIcons[secId] || ic('file_text', 15)}</span>
          <span class="manual-section-num">${secId}</span>
          <span class="manual-section-label">${escHtml(sec.title)}</span>
          <span class="manual-section-badge">${badgeText}</span>
        </div>`;

      // Determina numero colonne (rispetta span_full: campi full-width non contano,
      // tabelle con span_full===false contano come colonne normali)
      const numInlineFields =
        sec.fields.filter(f =>
          (f.type === 'text' || f.type === 'number' || f.type === 'dropdown') &&
          f.span_full !== true
        ).length +
        sec.fields.filter(f =>
          (f.type === 'table' || f.type === 'checkbox_group') && f.span_full === false
        ).length;
      const cols = numInlineFields >= 3 ? 'cols-3' : (numInlineFields === 1 ? 'cols-1' : '');
      const grid = document.createElement('div');
      grid.className = `fields-grid ${cols}`;
      const wrapper = document.createElement('div');
      wrapper.className = 'fields-grid-wrapper';

      sec.fields.forEach((fd, fIdx) => {
        const delay = (sIdx * 50) + (fIdx * 40);
        const fieldEl = buildField(fd, prefill, delay);
        if (fieldEl) grid.appendChild(fieldEl);
      });

      wrapper.appendChild(grid);
      secEl.appendChild(wrapper);

      // Se la sezione ha il gruppo (3.6), aggiunge il gruppo-box dentro la card
      if (secId === '3.6') {
        const gb = document.getElementById('gruppo-box');
        if (gb) wrapper.appendChild(gb);
      }

      container.appendChild(secEl);
    });

    // Rimuove le animazioni dai field-wrap dopo che sono completate (≈1.2s):
    // elimina gli stacking context residui che impedirebbero al dropdown INAIL
    // (position: absolute, z-index: 1000 in .inail-picker-wrap) di sovrapporsi ai fratelli.
    setTimeout(() => {
      document.querySelectorAll('#manual-sections .field-wrap').forEach(el => {
        el.style.animation = 'none';
      });
    }, 1200);
  }

  function buildField(fd, prefill, delay) {
    const wrap = document.createElement('div');
    wrap.className = 'field-wrap';
    wrap.style.animationDelay = `${delay}ms`;
    wrap.dataset.fieldId = fd.id;

    const labelStar = fd.required
      ? `<span class="field-required">*</span>` : '';

    if (fd.type === 'text' || fd.type === 'number') {
      // span_full=true → occupa l'intera riga
      if (fd.span_full === true) wrap.style.gridColumn = '1 / -1';
      wrap.innerHTML = `
        <label class="field-label">${escHtml(fd.label)} ${labelStar}</label>
        <input class="field-input" type="${fd.type}" id="field-${fd.id}"
               placeholder="${escAttr(fd.placeholder)}"
               oninput="App.onFieldInput('${fd.id}', this.value)">
        ${fd.hint ? `<span class="field-hint">${escHtml(fd.hint)}</span>` : ''}
        <span class="field-error">Campo obbligatorio</span>`;

    } else if (fd.type === 'dropdown') {
      if (fd.span_full === true) wrap.style.gridColumn = '1 / -1';
      const opts = (fd.options || []).map(o =>
        `<option value="${escAttr(o)}">${escHtml(o)}</option>`).join('');
      wrap.innerHTML = `
        <label class="field-label">${escHtml(fd.label)} ${labelStar}</label>
        <select class="field-select" id="field-${fd.id}"
                onchange="App.onFieldInput('${fd.id}', this.value)">
          ${opts}
        </select>
        <span class="field-error">Campo obbligatorio</span>`;
      setTimeout(() => {
        const sel = document.getElementById(`field-${fd.id}`);
        // Default alla prima opzione SOLO se non c'è già un valore (bozza) — evita
        // di sovrascrivere il valore ripristinato da applySavedFormData.
        if (sel && sel.options.length > 0 && state.formValues[fd.id] === undefined) {
          const autoVal = state.autoFields ? state.autoFields[fd.id] : undefined;
          const valido = autoVal !== undefined &&
            Array.from(sel.options).some(o => o.value === autoVal);
          const val = valido ? autoVal : sel.options[0].value;
          sel.value = val;
          state.formValues[fd.id] = val;
        }
      }, 0);

    } else if (fd.type === 'checkbox') {
      wrap.className += ' cols-1-override';
      wrap.style.gridColumn = '1 / -1';
      wrap.innerHTML = `
        <label class="field-checkbox">
          <input type="checkbox" id="field-${fd.id}"
                 onchange="App.onFieldInput('${fd.id}', this.checked)">
          <span>${escHtml(fd.label)}</span>
        </label>`;

    } else if (fd.type === 'turno_picker') {
      wrap.style.gridColumn = '1 / -1';
      const existing = '';
      const giorni_opts = ['Lun-Ven','Lun-Sab','Lun-Dom','Mar-Sab','Mer-Dom','Mer-Dom']
        .filter((v,i,a) => a.indexOf(v)===i)
        .map(o => `<option value="${o}">${o}</option>`).join('');
      wrap.dataset.turnoField = fd.id;
      wrap.innerHTML = `
        <label class="field-label">${escHtml(fd.label)}</label>
        <div class="turno-picker">
          <select class="field-select turno-giorni" style="width:130px"
                  onchange="App.onTurnoChange('${fd.id}')">
            <option value="">Giorni…</option>${giorni_opts}
          </select>
          <input type="time" class="field-input turno-inizio" style="width:100px"
                 onchange="App.onTurnoChange('${fd.id}')">
          <span class="turno-sep">–</span>
          <input type="time" class="field-input turno-fine" style="width:100px"
                 onchange="App.onTurnoChange('${fd.id}')">
        </div>`;

    } else if (fd.type === 'table') {
      // span_full===false → metà larghezza (affiancato); default=full
      if (fd.span_full !== false) wrap.style.gridColumn = '1 / -1';
      const rows = prefill[fd.id] || [];
      const cols = fd.columns || [];
      // Per il campo "soci": nota reattiva "Amministratore già presente"
      const adminNota = fd.id === 'soci'
        ? `<div id="admin-presente-nota" class="admin-presente-nota" style="display:none"></div>`
        : '';
      wrap.innerHTML = adminNota + buildTableInput(fd.id, fd.label, cols, rows, delay);
      if (fd.id === 'soci') {
        setTimeout(() => aggiornaNotizioneAmministratore(), 0);
      }

    } else if (fd.type === 'checkbox_group') {
      if (fd.span_full !== false) wrap.style.gridColumn = '1 / -1';
      const rows = prefill[fd.id] || [];
      wrap.innerHTML = buildCheckboxGroup(fd.id, rows);

    } else if (fd.type === 'inail_picker') {
      wrap.style.gridColumn = '1 / -1';
      wrap.className = 'inail-picker-wrap field-wrap';
      wrap.innerHTML = `
        <label class="field-label">${escHtml(fd.label)} ${labelStar}</label>
        <div class="inail-search-box">
          <span class="inail-search-icon">${ic('search', 14)}</span>
          <input class="inail-search-input" type="text" id="inail-search-input"
                 placeholder="Cerca per codice o attività (es: edil, metall, 0421)…"
                 oninput="App.onInailSearch(this.value)"
                 onfocus="App.onInailFocus()"
                 onblur="App.onInailBlur()">
        </div>
        <div class="inail-selected" id="inail-selected" style="display:none"></div>
        ${fd.hint ? `<span class="field-hint">${escHtml(fd.hint)}</span>` : ''}
        <span class="field-error">Seleziona una voce INAIL</span>`;
      // Pre-selezione INAIL dal template (spunta capitolo attiva, nessuna selezione salvata)
      if (_usaTemplateCap('1') && !state.inailSelected) {
        const rawInail = state.jsonRaw?.anagrafica?.codice_tariffa;
        if (rawInail) setTimeout(() => _preselectInailDaTemplate(rawInail), 0);
      }

    } else if (fd.type === 'cap0_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap0Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap0Editor(fd.id, cap0Data);
      wrap.innerHTML = buildCap0Editor(fd.id, cap0Data);

    } else if (fd.type === 'cap2_editor') {
      wrap.style.gridColumn = '1 / -1';
      const gruppiData = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      const gruppi = (gruppiData.gruppi || []);
      wrap.innerHTML = buildCap2Editor(fd.id, gruppi);
      setTimeout(() => initCap2Editor(fd.id, gruppi), 0);

    } else if (fd.type === 'cap3_editor') {
      wrap.style.gridColumn = '1 / -1';
      const localiData = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      const locali = (localiData.locali || []);
      wrap.innerHTML = buildCap3Editor(fd.id, locali);
      setTimeout(() => initCap3Editor(fd.id, locali), 0);

    } else if (fd.type === 'cap4_editor') {
      wrap.style.gridColumn = '1 / -1';
      const cap4Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      wrap.innerHTML = buildCap4Editor(fd.id, cap4Data);
      setTimeout(() => initCap4Editor(fd.id, cap4Data), 0);

    } else if (fd.type === 'cap5_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap5Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap5Editor(fd.id, cap5Data);
      wrap.innerHTML = buildCap5Editor(fd.id, cap5Data);

    } else if (fd.type === 'cap8_editor') {
      wrap.style.gridColumn = '1 / -1';
      const cap8Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      wrap.innerHTML = buildCap8Editor(fd.id, cap8Data);
      setTimeout(() => initCap8Editor(fd.id, cap8Data), 0);

    } else if (fd.type === 'cap14_editor') {
      wrap.style.gridColumn = '1 / -1';
      const cap14Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      wrap.innerHTML = buildCap14Editor(fd.id, cap14Data);
      setTimeout(() => initCap14Editor(fd.id, cap14Data), 0);

    } else if (fd.type === 'cap6_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap6Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap6Editor(fd.id, cap6Data);
      wrap.innerHTML = buildCap6Editor(fd.id, cap6Data);

    } else if (fd.type === 'cap20_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap20Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap20Editor(fd.id, cap20Data);
      wrap.innerHTML = buildCap20Editor(fd.id, cap20Data);

    } else if (fd.type === 'cap10_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap10Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap10Editor(fd.id, cap10Data);
      wrap.innerHTML = buildCap10Editor(fd.id, cap10Data);

    } else if (fd.type === 'cap7_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap7Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap7Editor(fd.id, cap7Data);
      wrap.innerHTML = buildCap7Editor(fd.id, cap7Data);

    } else if (fd.type === 'cap11_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap11Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap11Editor(fd.id, cap11Data);
      wrap.innerHTML = buildCap11Editor(fd.id, cap11Data);

    } else if (fd.type === 'cap21_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap21Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap21Editor(fd.id, cap21Data);
      wrap.innerHTML = buildCap21Editor(fd.id, cap21Data);
      setTimeout(() => wrap.querySelectorAll('select:not(.csel-hidden)').forEach(wrapSelectCustom), 0);

    } else if (fd.type === 'cap17_editor') {
      wrap.style.gridColumn = '1 / -1';
      wrap.setAttribute('data-field-id', fd.id);
      const cap17Data = (prefill[fd.id] || state.tablePrefill[fd.id] || {});
      initCap17Editor(fd.id, cap17Data);
      wrap.innerHTML = buildCap17Editor(fd.id, cap17Data);

    } else if (fd.type === 'procedure_picker') {
      wrap.style.gridColumn = '1 / -1';
      wrap.innerHTML = `<div class="field-label">${escHtml(fd.label)}</div>
        <div class="procedure-loading">Caricamento procedure…</div>`;
      const listApi = (fd.id === 'cap4_procedure') ? 'get_procedure_list_cap4' : 'get_procedure_list';
      call(listApi).then(list => {
        const html = buildProcedurePicker(fd.id, list || []);
        wrap.innerHTML = `<div class="field-label">${escHtml(fd.label)}</div>${html}`;
        initProcedurePicker(fd.id);
        // Ripristina le procedure selezionate (bozza salvata riaperta)
        const saved = state.formValues[fd.id];
        if (Array.isArray(saved) && saved.length) {
          const grid = document.getElementById(`proc-grid-${fd.id}`);
          saved.forEach(v => {
            const sel = (window.CSS && CSS.escape) ? CSS.escape(v) : v.replace(/"/g, '\\"');
            const cb = grid?.querySelector(`input[value="${sel}"]`);
            if (cb) cb.checked = true;
          });
        }
      });

    } else {
      return null;
    }

    return wrap;
  }

  /* ── Table input ────────────────────────────────────────────────────── */
  function buildTableInput(id, label, cols, preRows, delay) {
    const headCols = cols.map(([l, w]) => `<span style="flex:1;min-width:${w||200}px">${escHtml(l)}</span>`).join('');
    const initRows = preRows.map(r => buildTableRow(id, cols, r)).join('');

    return `
      <div class="table-wrap">
        ${label ? `<div class="table-label">${escHtml(label)}</div>` : ''}
        <div class="table-head">${headCols}<span style="flex:0 0 28px"></span></div>
        <div class="table-body" id="table-body-${id}">${initRows}</div>
        <div class="table-footer">
          <button class="btn-add-row" onclick="App.addTableRow('${id}')">${ic('plus', 11)} Aggiungi riga</button>
        </div>
      </div>`;
  }

  function buildTableRow(tableId, cols, values = {}) {
    const inputs = cols.map(([label, w], i) => {
      const key = label.toLowerCase();
      const val = values[key] || values[Object.keys(values)[i]] || '';
      return `<input type="text" placeholder="${escAttr(label)}" value="${escAttr(val)}"
                     style="min-width:${w||200}px"
                     oninput="App.onTableChange('${tableId}')">`;
    }).join('');
    return `<div class="table-row">${inputs}
      <button class="btn-remove-row" onclick="App.removeTableRow(this)">${ic('x', 12)}</button></div>`;
  }

  function addTableRow(tableId) {
    const field = state.manualFields.find(f => f.id === tableId);
    const cols = field?.columns || [];
    const body = document.getElementById(`table-body-${tableId}`);
    if (!body) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = buildTableRow(tableId, cols, {});
    const row = tmp.firstElementChild;   // la .table-row già completa (niente doppio wrap)
    if (row) body.appendChild(row);
    onTableChange(tableId);
  }

  function removeTableRow(btn) {
    const row = btn.closest('.table-row');
    const body = row?.parentElement;
    if (!row || !body) return;
    row.style.transition = 'opacity .15s, transform .15s';
    row.style.opacity = '0';
    row.style.transform = 'translateX(8px)';
    setTimeout(() => {
      row.remove();
      // update state for relevant table
      const tableId = body.id.replace('table-body-', '');
      onTableChange(tableId);
    }, 160);
  }

  function onTableChange(tableId) {
    const body = document.getElementById(`table-body-${tableId}`);
    if (!body) return;
    const rows = [...body.querySelectorAll('.table-row')].map(row => {
      const inputs = [...row.querySelectorAll('input')];
      return inputs.map(i => i.value.trim());
    });
    const field = state.manualFields.find(f => f.id === tableId);
    if (field) {
      const cols = field.columns || [];
      state.formValues[tableId] = rows
        .filter(r => r.some(v => v))
        .map(r => {
          const obj = {};
          cols.forEach(([label], i) => {
            obj[label.toLowerCase()] = r[i] || '';
          });
          return obj;
        });
    }
  }

  /* ── Checkbox group (gruppi omogenei) ───────────────────────────────── */
  function buildCheckboxGroup(id, preRows) {
    const COLS = [
      ['Uomini', 'uomini'], ['Donne', 'donne'], ['Minori', 'minori'],
      ['Stranieri', 'stranieri'], ['Tip.Contr.', 'contratti'],
    ];
    const headCols = COLS.map(([l]) =>
      `<span class="cbg-col">${escHtml(l)}</span>`).join('');

    const initRows = preRows.map(r => buildCbgRow(id, r, COLS)).join('');

    return `
      <div class="cbg-wrap">
        <div class="cbg-header">
          <span style="flex:1">Denominazione gruppo omogeneo</span>
          ${headCols}<span style="width:36px"></span>
        </div>
        <div class="cbg-body" id="cbg-body-${id}">${initRows}</div>
        <div class="table-footer">
          <button class="btn-add-row" onclick="App.addCbgRow('${id}')">${ic('plus', 11)} Aggiungi gruppo</button>
        </div>
      </div>`;
  }

  function buildCbgRow(id, values = {}, COLS) {
    if (!COLS) COLS = [
      ['Uomini','uomini'],['Donne','donne'],['Minori','minori'],
      ['Stranieri','stranieri'],['Tip.Contr.','contratti'],
    ];
    const nome = values.nome || '';
    const checks = COLS.map(([l, k]) => {
      const checked = (values[k] === 'SI' || values[k] === true) ? 'checked' : '';
      return `<div class="cbg-col-cb">
        <input type="checkbox" ${checked} onchange="App.onCbgChange('${id}')">
      </div>`;
    }).join('');
    return `<div class="cbg-row">
      <input type="text" placeholder="Nome gruppo…" value="${escAttr(nome)}"
             oninput="App.onCbgChange('${id}')">
      ${checks}
      <button class="btn-remove-row" onclick="App.removeCbgRow(this, '${id}')">${ic('x', 12)}</button>
    </div>`;
  }

  function addCbgRow(id) {
    const body = document.getElementById(`cbg-body-${id}`);
    if (!body) return;
    const row = document.createElement('div');
    row.innerHTML = buildCbgRow(id, {}, null);
    body.appendChild(row.firstElementChild);
    onCbgChange(id);
  }

  function removeCbgRow(btn, id) {
    const row = btn.closest('.cbg-row');
    if (!row) return;
    row.style.transition = 'opacity .15s';
    row.style.opacity = '0';
    setTimeout(() => { row.remove(); onCbgChange(id); }, 160);
  }

  function onCbgChange(id) {
    const COLS = ['uomini','donne','minori','stranieri','contratti'];
    const body = document.getElementById(`cbg-body-${id}`);
    if (!body) return;
    state.formValues[id] = [...body.querySelectorAll('.cbg-row')].map(row => {
      const nome = row.querySelector('input[type=text]')?.value.trim() || '';
      const cbs  = [...row.querySelectorAll('input[type=checkbox]')];
      const obj  = { nome };
      COLS.forEach((k, i) => { obj[k] = cbs[i]?.checked ? 'SI' : 'NO'; });
      return obj;
    }).filter(r => r.nome);
  }

  /* ── Nota reattiva "Amministratore già presente" sopra tabella soci ─── */
  function aggiornaNotizioneAmministratore() {
    const nota = document.getElementById('admin-presente-nota');
    if (!nota) return;

    const ruolo = state.formValues['ruolo_datore'] || '';
    const nome  = state.formValues['datore_lavoro']
                || state.autoFields['datore_lavoro'] || '';

    // Ruoli in cui il datore è già classificato come amministratore/dirigente
    const RUOLI_AMMIN = [
      'Amministratore', 'Presidente del c.d.a.',
      'Legale rappresentante', 'Delega ex art. 16 D.Lgs 81/2008'
    ];
    const isAmmin = RUOLI_AMMIN.includes(ruolo);

    if (isAmmin && nome) {
      nota.style.display = 'flex';
      nota.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        <span>
          <strong>${escHtml(ruolo)} già presente:</strong> ${escHtml(nome)}
          <span class="admin-nota-hint"> — Aggiungi eventuali altri soci qui sotto</span>
        </span>`;
    } else {
      nota.style.display = 'none';
    }
  }

  /* ── Field input handler ────────────────────────────────────────────── */
  function onFieldInput(id, value) {
    state.formValues[id] = value;
    const wrap = document.querySelector(`[data-field-id="${id}"]`);
    if (wrap) wrap.classList.remove('has-error');
    if (['num_uomini','num_donne','num_minorenni','indice_infortunistico','attivita_agricola'].includes(id)) {
      updateGruppo();
    }
    if (id === 'ruolo_datore' || id === 'datore_lavoro') {
      aggiornaNotizioneAmministratore();
    }
    updateProgressPills();
  }

  /* ── Turno picker ──────────────────────────────────────────────────── */
  function onTurnoChange(fieldId) {
    const wrap = document.querySelector(`[data-turno-field="${fieldId}"]`);
    if (!wrap) return;
    const g = wrap.querySelector('.turno-giorni')?.value || '';
    const i = wrap.querySelector('.turno-inizio')?.value || '';
    const f = wrap.querySelector('.turno-fine')?.value || '';
    state.formValues[fieldId] = (g && i && f) ? `${g} ${i}–${f}` : '';
    saveChapterDraft();
  }

  /* ── Button-grid option select (sostituisce <select>) ───────────────── */
  function onOptionSelect(fieldId, btn, value) {
    const grid = document.getElementById(`field-${fieldId}`);
    if (grid) grid.querySelectorAll('.field-btn-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    onFieldInput(fieldId, value);
  }

  /* ── INAIL Picker ───────────────────────────────────────────────────── */
  let _inailBlurTimer = null;

  // Il dropdown vive in <body> (portale) per evitare che finisca sotto la
  // sezione successiva o venga tagliato da antenati con transform/overflow.
  function _getInailDropdown() {
    let dd = document.getElementById('inail-dropdown');
    if (!dd) {
      dd = document.createElement('div');
      dd.id = 'inail-dropdown';
      dd.className = 'inail-dropdown';
      dd.style.display = 'none';
      document.body.appendChild(dd);
      // Scrollando il form il dropdown si detaccherebbe → nascondilo.
      document.getElementById('form-scroll')?.addEventListener('scroll', () => {
        dd.style.display = 'none';
      }, { passive: true });
    }
    return dd;
  }

  function _positionInailDropdown() {
    const box = document.querySelector('.inail-search-box');
    const dd  = document.getElementById('inail-dropdown');
    if (!box || !dd) return;
    const r = box.getBoundingClientRect();
    dd.style.top   = `${r.bottom + 4}px`;
    dd.style.left  = `${r.left}px`;
    dd.style.width = `${r.width}px`;
  }

  function onInailFocus() {
    clearTimeout(_inailBlurTimer);
    const inp = document.getElementById('inail-search-input');
    if (inp) onInailSearch(inp.value);
  }

  function onInailBlur() {
    // Ritarda per consentire il click sulle voci
    _inailBlurTimer = setTimeout(() => {
      const dd = document.getElementById('inail-dropdown');
      if (dd) dd.style.display = 'none';
    }, 200);
  }

  function onInailSearch(query) {
    const dd = _getInailDropdown();
    if (!dd) return;
    const q = (query || '').toLowerCase().trim();

    let results = state.inailCodes;
    if (q) {
      results = state.inailCodes.filter(c =>
        c.code.includes(q) ||
        c.label.toLowerCase().includes(q) ||
        c.sector.toLowerCase().includes(q)
      );
    }

    if (!results.length) {
      dd.innerHTML = `<div class="inail-no-results">Nessun risultato per "${escHtml(query)}"</div>`;
      _positionInailDropdown();
      dd.style.display = 'block';
      return;
    }

    const shown = results.slice(0, 15);
    dd.innerHTML = shown.map(c => {
      const rateClass = c.rate > 4 ? 'high' : 'low';
      return `
        <div class="inail-item" onmousedown="App.selectInailCode('${escAttr(c.code)}')">
          <span class="inail-code-badge">${escHtml(c.code)}</span>
          <span class="inail-item-label" title="${escHtml(c.label)}">${escHtml(c.label)}</span>
          <span class="inail-sector-tag">${escHtml(c.sector)}</span>
          <span class="inail-rate ${rateClass}">${c.rate.toFixed(1)}</span>
        </div>`;
    }).join('');

    if (results.length > 15) {
      dd.innerHTML += `<div class="inail-no-results" style="font-style:italic">
        … e altri ${results.length - 15} risultati. Affina la ricerca.
      </div>`;
    }

    _positionInailDropdown();
    dd.style.display = 'block';
  }

  // Preseleziona la voce INAIL dal template, tollerando il formato del codice
  // ("0200 Turismo e ristorazione", "0200", ecc.).
  function _preselectInailDaTemplate(raw) {
    const codes = state.inailCodes || [];
    const s = String(raw).trim();
    const digits = (s.match(/\d+/) || [])[0];
    const entry = codes.find(c => c.code === s)
               || (digits && codes.find(c => c.code === digits))
               || (digits && codes.find(c => String(c.code).replace(/\D/g, '') === digits))
               || codes.find(c => s.toLowerCase().startsWith(String(c.code).toLowerCase()));
    if (entry) selectInailCode(entry.code);
  }

  function selectInailCode(code) {
    const entry = state.inailCodes.find(c => c.code === code);
    if (!entry) return;

    state.inailSelected = entry;
    state.formValues['codice_tariffa']       = entry.code;
    state.formValues['indice_infortunistico'] = entry.rate;
    state.autoFields['indice_infortunistico'] = entry.rate;

    // Nascondi dropdown, svuota input ricerca
    const dd  = document.getElementById('inail-dropdown');
    const inp = document.getElementById('inail-search-input');
    if (dd) dd.style.display = 'none';
    if (inp) { inp.value = ''; inp.blur(); }

    // Mostra selezione attiva
    const sel = document.getElementById('inail-selected');
    const wrap = document.querySelector('.inail-picker-wrap');
    if (sel) {
      const rateClass = entry.rate > 4 ? 'high' : 'low';
      sel.innerHTML = `
        <span class="inail-selected-code">${escHtml(entry.code)}</span>
        <span class="inail-selected-label">${escHtml(entry.label)}</span>
        <span class="inail-sector-tag">${escHtml(entry.sector)}</span>
        <span class="inail-rate-badge ${rateClass}">Indice: ${entry.rate.toFixed(2)}</span>
        <button class="inail-clear-btn" onclick="App.clearInailCode()" title="Cambia selezione">${ic('x', 13)}</button>`;
      sel.style.display = 'flex';
    }
    if (wrap) wrap.classList.remove('has-error');

    // Aggiorna gruppo pronto soccorso
    updateGruppo();
    updateProgressPills();
  }

  function clearInailCode() {
    state.inailSelected = null;
    delete state.formValues['codice_tariffa'];
    delete state.formValues['indice_infortunistico'];
    delete state.autoFields['indice_infortunistico'];

    const sel = document.getElementById('inail-selected');
    const inp = document.getElementById('inail-search-input');
    if (sel) sel.style.display = 'none';
    if (inp) { inp.value = ''; inp.focus(); }

    updateGruppo();
    updateProgressPills();
  }

  /* ── Progress pills ─────────────────────────────────────────────────── */
  function updateProgressPills() {
    const sections = {};
    for (const fd of state.manualFields) {
      if (!sections[fd.section]) sections[fd.section] = { req: [], all: [] };
      sections[fd.section].all.push(fd);
      if (fd.required) sections[fd.section].req.push(fd);
    }

    Object.entries(sections).forEach(([secId, sec]) => {
      const pill = document.getElementById(`pill-${secId.replace('.', '_')}`);
      if (!pill) return;

      const reqDone = sec.req.filter(fd => {
        const v = state.formValues[fd.id];
        if (fd.type === 'inail_picker') return !!state.inailSelected;
        return v !== undefined && v !== null && String(v).trim() !== '';
      }).length;

      pill.classList.remove('active', 'done');
      if (reqDone === sec.req.length && sec.req.length > 0) {
        pill.classList.add('done');
        pill.innerHTML = `<span class="pill-dot"></span>${secId}`;
      } else if (reqDone > 0) {
        pill.classList.add('active');
        pill.innerHTML = `<span class="pill-dot"></span>${secId}`;
      } else {
        pill.innerHTML = `<span class="pill-dot"></span>${secId}`;
      }
    });
  }

  /* ── Gruppo pronto soccorso (calcolo lato client) ───────────────────── */
  function updateGruppo() {
    const u = parseInt(state.formValues['num_uomini'] || state.autoFields['num_uomini'] || 0) || 0;
    const d = parseInt(state.formValues['num_donne']  || state.autoFields['num_donne']  || 0) || 0;
    const m = parseInt(state.formValues['num_minorenni'] || state.autoFields['num_minorenni'] || 0) || 0;
    const tot = u + d + m;
    const idx = parseFloat(
      String(state.formValues['indice_infortunistico'] ||
             state.autoFields['indice_infortunistico'] || '0').replace(',', '.')) || 0;
    const agr = !!(state.formValues['attivita_agricola']);

    const box = document.getElementById('gruppo-box');
    if (!box) return;

    if (tot === 0 && idx === 0) {
      box.style.display = 'none'; return;
    }

    box.style.display = 'flex';
    let gruppo = '', title = '', spieg = '';
    if      (agr && tot > 5)      { gruppo = 'A3'; title = 'Gruppo A3'; spieg = `Attività agricola · ${tot} lavoratori a tempo pieno`; }
    else if (tot > 5 && idx > 4) { gruppo = 'A2'; title = 'Gruppo A2'; spieg = `${tot} lavoratori · indice INAIL ${idx.toFixed(2)} > 4`; }
    else if (tot > 5)            { gruppo = 'A1'; title = 'Gruppo A1'; spieg = `${tot} lavoratori · indice INAIL ${idx.toFixed(2)} ≤ 4`; }
    else if (tot >= 3)           { gruppo = 'B';  title = 'Gruppo B';  spieg = `${tot} lavoratori`; }
    else                         { gruppo = 'C';  title = 'Gruppo C';  spieg = `${tot} lavoratori totali`; }

    const levelClass = gruppo.startsWith('A') ? 'level-a'
                     : (gruppo === 'B' ? 'level-b' : 'level-c');
    box.className = `gruppo-box ${levelClass}`;
    box.innerHTML = `
      <div class="gruppo-badge">${escHtml(gruppo)}</div>
      <div class="gruppo-info">
        <div class="gruppo-title">${escHtml(title)} — DM 388/2003</div>
        <div class="gruppo-desc">${escHtml(spieg)}</div>
      </div>`;

    state.formValues['gruppo_pronto_soccorso'] = gruppo;
    state.autoFields['gruppo_pronto_soccorso'] = gruppo;
  }

  /* ── Cap2 Editor ────────────────────────────────────────────────────────── */

  const DPI_OPTIONS = [
    'Calzature antinfortunistiche (EN 20345)', 'Calzature antiscivolo (EN 20347)',
    'Indumenti di protezione (EN 13688)', 'Elmetto', 'Otoprotettori',
    'Occhiali', 'Maschera antipolvere', 'Maschera nebbie acquose',
    'Maschera nebbie oleose', 'Maschera per bioaerosol', 'Maschera antigas',
    'Filtri per maschera', 'Dispositivi anticaduta', 'Schermi inattinici',
    'Guanti (rischi meccanici)', 'Guanti (chimici/biologici)',
    'Guanti antitaglio (EN 1082)',
    'Guanti prot. freddo', 'Guanti prot. caldo', 'Guanti per saldatori',
    'Guanti dielettrici', 'Indumenti alta visibilità',
    'Indum. contro intemperie', 'Indum. protezione freddo',
    'Indum. protezione caldo', 'Cuffia TNT',
  ];

  // Lista schede in JS (speculare alla lista Python)
  const SCHEDE_RISCHIO_JS = [
    "Elettrico (Utilizzo impianti ed attrezzature)",
    "Elettrico (Lavori su impianti elettrici)",
    "SCIVOLAMENTI, INCIAMPI, CADUTE",
    "CADUTA DALL'ALTO (luoghi di lavoro in quota)",
    "CADUTA DALL'ALTO (uso di scale portatili)",
    "URTI, COLPI, IMPATTI, SCHIACCIAMENTI",
    "SEPPELLIMENTI",
    "ABRASIONI, TAGLI, CESOIAMENTI",
    "PROIEZIONE MATERIALI, FRAMMENTI, SCHEGGE",
    "USTIONI TERMICHE",
    "INVESTIMENTO NEI LUOGHI DI LAVORO",
    "INVESTIMENTO SU SEDE STRADALE",
    "INCIDENTI STRADALI",
    "ANNEGAMENTO",
    "POSTURE SCORRETTE",
    "MICROCLIMA",
    "LAVORO ISOLATO",
    "LAVORO NOTTURNO",
    "AGENTI FISICI (donne in maternità)",
    "AGENTI CHIMICI (donne in maternità)",
    "AGENTI BIOLOGICI (donne in maternità)",
    "DIFFERENZE DI GENERE",
    "LAVORATORI STRANIERI",
    "DIFFERENZE DI ETÀ",
    "LAVORO MINORILE",
    "ALTERNANZA SCUOLA – LAVORO",
    "ATTIVITA' USURANTI",
    "ESPOSIZIONE A RADIAZIONI SOLARI",
    "RISCHIO RAPINA",
    "SOSTANZE STUPEFACENTI E PSICOTROPE",
    "ALCOL",
    "AMBIENTI CONFINATI",
    "AGGRESSIONE IN AMBITO SANITARIO",
  ];

  // Lista rischi Allegato IV per Cap3 (speculare alla lista Python)
  const RISCHI_ALLEGATO_IV_JS = [
    {rif:'(art. 63)', desc:'Accessibilità per diversamente abili'},
    {rif:'Punto 1.1',  desc:'Stabilità e solidità'},
    {rif:'Punto 1.2',  desc:'Altezza, cubatura e superficie'},
    {rif:'Punto 1.3',  desc:'Pavimenti, muri, soffitti, finestre e lucernari'},
    {rif:'Punto 1.3',  desc:'Scale e marciapiedi mobili, banchina e rampe di carico'},
    {rif:'Punto 1.4',  desc:'Vie di circolazione, zone di pericolo, pavimenti e passaggi'},
    {rif:'Punto 1.5',  desc:'Vie e uscite di emergenza'},
    {rif:'Punto 1.6',  desc:'Porte e portoni'},
    {rif:'Punto 1.7',  desc:'Scale'},
    {rif:'Punto 1.8',  desc:'Posti di lavoro e di passaggio e luoghi di lavoro esterni'},
    {rif:'Punto 1.9',  desc:'Microclima'},
    {rif:'Punto 1.10', desc:'Illuminazione naturale ed artificiale dei luoghi di lavoro'},
    {rif:'Punto 1.11', desc:'Locali di riposo e refezione'},
    {rif:'Punto 1.12', desc:'Spogliatoi e armadi per il vestiario'},
    {rif:'Punto 1.13', desc:'Servizi igienico assistenziali'},
    {rif:'Punto 3',    desc:'Lavori in vasche, canalizzazioni, tubazioni, serbatoi, recipienti, silos'},
  ];

  function buildCap2Editor(fieldId, gruppi) {
    if (!gruppi || gruppi.length === 0) {
      return `<div class="cap2-no-data">Nessun gruppo omogeneo trovato nel JSON.</div>`;
    }
    return gruppi.map((g, gi) => buildCap2Group(fieldId, g, gi)).join('');
  }

  function buildCap2Group(fieldId, g, gi) {
    const gid = `cap2-g${gi}`;
    const idx = g.idx || (gi + 1);
    const nome = escHtml(g.nome || `Gruppo ${idx}`);

    const fasiSrc = g.fasi && g.fasi.length > 0 ? g.fasi
      : (g.fasi_dpi && g.fasi_dpi.length > 0 ? g.fasi_dpi : [{fase: ''}]);
    const fasiHtml = fasiSrc.map((f, fi) => buildFaseRow(gid, fi, f)).join('');

    const selDpi = Array.isArray(g.dpi_gruppo) && g.dpi_gruppo.length > 0 ? g.dpi_gruppo
      : (g.fasi_dpi ? [...new Set(g.fasi_dpi.flatMap(f => f.dpi || []))] : []);
    const dpiGroupChecks = DPI_OPTIONS.map(d => {
      const ch = selDpi.some(s => s.toLowerCase() === d.toLowerCase()) ? 'checked' : '';
      return `<label class="dpi-check"><input type="checkbox" value="${escAttr(d)}" ${ch}> ${escHtml(d)}</label>`;
    }).join('');

    const schedeHtml = SCHEDE_RISCHIO_JS.map((s, si) => {
      const scheda = (g.schede || [])[si] || {};
      const pv = parseInt(scheda.p) || 0;
      const dv = parseInt(scheda.d) || 0;
      const pxd = (pv > 0 && dv > 0) ? pv * dv : 0;
      const rc = pxd === 0 ? '' : pxd <= 3 ? 'r-low' : pxd <= 6 ? 'r-mild' : pxd <= 9 ? 'r-high' : 'r-vhigh';
      const pBtns = [1,2,3,4].map(v =>
        `<button class="risk-btn${pv===v?' active':''}" onclick="App.onCap2SchedaChange('${fieldId}',${gi},${si},'p',${v})" data-v="${v}">${v}</button>`).join('');
      const dBtns = [1,2,3,4].map(v =>
        `<button class="risk-btn${dv===v?' active':''}" onclick="App.onCap2SchedaChange('${fieldId}',${gi},${si},'d',${v})" data-v="${v}">${v}</button>`).join('');
      return `<tr id="${gid}-s${si}-row">
        <td style="text-align:center;color:var(--gray-600);font-size:10.5px">${si+1}</td>
        <td>${escHtml(s)}</td>
        <td class="risk-pd-cell">
          <div class="risk-pd-group">
            <span class="risk-pd-label">P</span>
            <div class="risk-btns">${pBtns}</div>
            <span class="risk-pd-sep">×</span>
            <span class="risk-pd-label">D</span>
            <div class="risk-btns">${dBtns}</div>
          </div>
        </td>
        <td class="risk-pxd ${rc}" id="${gid}-s${si}-pxd">${pxd || '—'}</td>
      </tr>`;
    }).join('');

    return `
    <div class="cap2-accordion" id="${gid}" data-field-id="${fieldId}">
      <div class="cap2-accordion-header" onclick="App.toggleCap2Group('${gid}')">
        <span class="cap2-group-num">${idx}</span>
        <span class="cap2-group-nome">${nome}</span>
        <span class="cap2-toggle-icon" style="margin-left:auto">${ic(gi === 0 ? 'chevron_up' : 'chevron_down',13)}</span>
      </div>
      <div class="cap2-accordion-body${gi === 0 ? ' open' : ''}" id="${gid}-body">
        <div class="cap2-section-label">Denominazione e descrizione</div>
        <div class="cap2-row-2col">
          <div>
            <label class="field-label">Nome gruppo</label>
            <input class="field-input" type="text" value="${escAttr(g.nome||'')}"
              oninput="App.onCap2FieldChange('${fieldId}',${gi},'nome',this.value)">
          </div>
          <div>
            <label class="field-label">Attrezzature (una per riga)</label>
            <textarea class="field-textarea" rows="3"
              oninput="App.onCap2FieldChange('${fieldId}',${gi},'attrezzature_text',this.value)"
              >${escHtml((g.attrezzature||[]).join('\n'))}</textarea>
          </div>
        </div>
        <div style="margin-bottom:10px">
          <label class="field-label">Descrizione sintetica delle fasi</label>
          <textarea class="field-textarea" rows="4"
            oninput="App.onCap2FieldChange('${fieldId}',${gi},'descrizione',this.value)"
            >${escHtml(g.descrizione||'')}</textarea>
        </div>
        <div style="margin-bottom:10px">
          <label class="field-label">Impianti presenti <span class="cap2-derived-tag">derivati automaticamente</span></label>
          <textarea class="field-textarea cap2-readonly" rows="2" readonly
            title="Derivati dalla sezione Impianti del JSON — modificali lì"
            >${escHtml((g.impianti||[]).join('\n')) || '—'}</textarea>
          <div class="cap2-derived-note">Riportati automaticamente dalla sezione <b>Impianti</b> (elettrico/termico/aeraulico) e collegati anche al Cap.4 — non si modificano qui.</div>
        </div>
        <div style="margin-bottom:10px">
          <label class="field-label">Prodotti chimici <span class="cap2-derived-tag">precompilati — uno per riga</span></label>
          <textarea class="field-textarea" rows="3"
            placeholder="Un prodotto per riga"
            title="Precompilati dal Cap.14 (agenti chimici): puoi aggiungerne o modificarne a mano"
            oninput="App.onCap2FieldChange('${fieldId}',${gi},'chimici_text',this.value)"
            >${escHtml((g.prodotti_chimici||[]).join('\n'))}</textarea>
          <div class="cap2-derived-note">Vengono riportati automaticamente gli stessi agenti chimici del <b>Cap.14</b>; puoi comunque <b>aggiungerne altri a mano</b> (uno per riga). Le aggiunte manuali vengono mantenute.</div>
        </div>
        <div class="cap2-row-2col" style="margin-bottom:10px">
          <div>
            <label class="field-label">Agenti cancerogeni (uno per riga — lascia vuoto se non presenti)</label>
            <textarea class="field-textarea" rows="2"
              oninput="App.onCap2FieldChange('${fieldId}',${gi},'agenti_cancerogeni_text',this.value)"
              >${escHtml((g.agenti_cancerogeni||[]).join('\n'))}</textarea>
          </div>
          <div>
            <label class="field-label">Agenti biologici (uno per riga — lascia vuoto se non presenti)</label>
            <textarea class="field-textarea" rows="2"
              oninput="App.onCap2FieldChange('${fieldId}',${gi},'agenti_biologici_text',this.value)"
              >${escHtml((g.agenti_biologici||[]).join('\n'))}</textarea>
          </div>
        </div>

        <div class="cap2-section-label">Fasi di lavoro</div>
        <div class="cap2-fasi-body" id="${gid}-fasi">${fasiHtml}</div>
        <button class="btn-add-row" style="margin-bottom:16px"
          onclick="App.addCap2Fase('${fieldId}',${gi})">
          ${ic('plus',11)} Aggiungi fase
        </button>

        <div class="cap2-section-label" style="margin-top:8px">DPI — Dispositivi di Protezione Individuale</div>
        <div class="cap2-dpi-checks" id="${gid}-dpi">${dpiGroupChecks}</div>

        <div class="cap2-section-label">Matrice Valutazione Rischi (P × D) — <strong>${nome}</strong></div>
        <div style="overflow-x:auto">
          <table class="risk-matrix">
            <thead><tr>
              <th style="width:36px">N.</th>
              <th style="text-align:left">Rischio</th>
              <th>P &nbsp;×&nbsp; D</th>
              <th style="width:60px">R</th>
            </tr></thead>
            <tbody>${schedeHtml}</tbody>
          </table>
        </div>
      </div>
    </div>`;
  }

  function buildFaseRow(gid, fi, fase) {
    const faseName = escAttr((fase && fase.fase) || '');
    const faseDpi = (fase && Array.isArray(fase.dpi)) ? fase.dpi : [];
    const dpiChecks = DPI_OPTIONS.map(d => {
      const ch = faseDpi.some(s => s.toLowerCase() === d.toLowerCase()) ? 'checked' : '';
      return `<label class="dpi-check"><input type="checkbox" value="${escAttr(d)}" ${ch} onchange="App.onCap2FaseDpiToggle('${gid}')"> ${escHtml(d)}</label>`;
    }).join('');
    return `<div class="cap2-fase-row" id="${gid}-fase${fi}">
      <div class="cap2-fase-header">
        <span class="cap2-fase-num">Fase ${fi + 1}</span>
        <input class="field-input" type="text" placeholder="Nome fase / attività…"
          value="${faseName}" style="flex:1">
        <button class="btn-remove-row" onclick="App.removeCap2Fase(this)">${ic('x',12)}</button>
      </div>
      <div class="cap2-fase-dpi">
        <div class="cap2-fase-dpi-label">DPI di questa fase</div>
        <div class="cap2-dpi-checks cap2-fase-dpi-checks" id="${gid}-fase${fi}-dpi">${dpiChecks}</div>
      </div>
    </div>`;
  }

  // Rinumera le etichette "Fase N" dopo aggiunta/rimozione.
  function _renumberCap2Fasi(container) {
    if (!container) return;
    container.querySelectorAll('.cap2-fase-row .cap2-fase-num').forEach((el, i) => {
      el.textContent = `Fase ${i + 1}`;
    });
  }

  function initCap2Editor(fieldId, initialGruppi) {
    if (!state.formValues[fieldId]) {
      state.formValues[fieldId] = { gruppi: JSON.parse(JSON.stringify(initialGruppi)) };
    }
  }

  function toggleCap2Group(gid) {
    const accordion = document.getElementById(gid);
    const fieldId = accordion?.dataset.fieldId;
    if (fieldId) {
      document.querySelectorAll(`.cap2-accordion[data-field-id="${fieldId}"] .cap2-accordion-body`)
        .forEach(b => {
          if (b.id !== `${gid}-body`) {
            b.classList.remove('open');
            const hdr = document.getElementById(b.id.replace('-body', ''))?.querySelector('.cap2-toggle-icon');
            if (hdr) hdr.innerHTML = ic('chevron_down', 13);
          }
        });
    }
    const body = document.getElementById(`${gid}-body`);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    const header = accordion?.querySelector('.cap2-toggle-icon');
    if (header) header.innerHTML = ic(isOpen ? 'chevron_up' : 'chevron_down', 13);
  }

  function onCap2FieldChange(fieldId, gi, key, value) {
    _ensureCap2State(fieldId, gi);
    const g = state.formValues[fieldId].gruppi[gi];
    if (key === 'attrezzature_text') {
      g.attrezzature = value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (key === 'chimici_text') {
      g.prodotti_chimici = value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (key === 'agenti_cancerogeni_text') {
      g.agenti_cancerogeni = value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (key === 'agenti_biologici_text') {
      g.agenti_biologici = value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (key === 'impianti_text') {
      g.impianti = value.split('\n').map(s => s.trim()).filter(Boolean);
    } else {
      g[key] = value;
    }
  }

  function onCap2FaseDpiToggle(gid) {
    const acc = document.getElementById(gid);
    if (!acc) return;
    const sel = new Set(
      [...acc.querySelectorAll('.cap2-fase-dpi-checks input[type=checkbox]:checked')]
        .map(c => c.value.toLowerCase()));
    const groupBox = document.getElementById(`${gid}-dpi`);
    if (!groupBox) return;
    groupBox.querySelectorAll('input[type=checkbox]').forEach(c => {
      if (sel.has(c.value.toLowerCase())) c.checked = true;
    });
  }

  function onCap2SchedaChange(fieldId, gi, si, prop, val) {
    _ensureCap2State(fieldId, gi);
    const g = state.formValues[fieldId].gruppi[gi];
    if (!g.schede) g.schede = Array.from({length:33}, (_,i) => ({id:i+1,presente:false,p:0,d:0}));
    if (!g.schede[si]) g.schede[si] = {id:si+1, presente:false, p:0, d:0};
    const sch = g.schede[si];
    const cur = parseInt(sch[prop]) || 0;
    sch[prop] = (cur === val) ? 0 : val;
    sch.presente = sch.p > 0 && sch.d > 0;

    const pxd = sch.presente ? sch.p * sch.d : 0;
    const rc = pxd === 0 ? '' : pxd <= 3 ? 'r-low' : pxd <= 6 ? 'r-mild' : pxd <= 9 ? 'r-high' : 'r-vhigh';

    const rowEl = document.getElementById(`cap2-g${gi}-s${si}-row`);
    if (rowEl) {
      rowEl.querySelectorAll('.risk-btns').forEach((group, idx) => {
        const type = idx === 0 ? 'p' : 'd';
        const cur2 = parseInt(sch[type]) || 0;
        group.querySelectorAll('.risk-btn').forEach(btn =>
          btn.classList.toggle('active', parseInt(btn.dataset.v) === cur2));
      });
    }

    const pxdEl = document.getElementById(`cap2-g${gi}-s${si}-pxd`);
    if (pxdEl) { pxdEl.textContent = pxd || '—'; pxdEl.className = `risk-pxd ${rc}`; }
    saveChapterDraft();
  }

  function addCap2Fase(fieldId, gi) {
    _ensureCap2State(fieldId, gi);
    const g = state.formValues[fieldId].gruppi[gi];
    if (!g.fasi) g.fasi = [];
    const fi = g.fasi.length;
    g.fasi.push({fase: ''});
    const container = document.getElementById(`cap2-g${gi}-fasi`);
    if (container) {
      const div = document.createElement('div');
      div.innerHTML = buildFaseRow(`cap2-g${gi}`, fi, {fase: ''});
      container.appendChild(div.firstElementChild);
      _renumberCap2Fasi(container);
    }
  }

  function removeCap2Fase(btn) {
    const row = btn.closest('.cap2-fase-row');
    if (!row) return;
    row.style.opacity = '0';
    setTimeout(() => {
      const container = row.parentElement;
      row.remove();
      // Ri-serializza le fasi rimaste
      if (!container) return;
      const accEl = container.closest('.cap2-accordion');
      if (!accEl) return;
      const fieldId = accEl.dataset.fieldId;
      const match = accEl.id.match(/cap2-g(\d+)/);
      if (!match || !fieldId) return;
      const gi = parseInt(match[1]);
      _ensureCap2State(fieldId, gi);
      const g = state.formValues[fieldId].gruppi[gi];
      const rows = [...container.querySelectorAll('.cap2-fase-row')];
      // Conserva ANCHE i DPI di ciascuna fase rimasta (prima venivano persi).
      g.fasi = rows.map(r => ({
        fase: r.querySelector('input[type=text]')?.value || '',
        dpi: [...r.querySelectorAll('.cap2-fase-dpi-checks input[type=checkbox]:checked')].map(c => c.value),
      }));
      _renumberCap2Fasi(container);
    }, 160);
  }

  function _ensureCap2State(fieldId, gi) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = {gruppi:[]};
    if (!state.formValues[fieldId].gruppi) state.formValues[fieldId].gruppi = [];
    while (state.formValues[fieldId].gruppi.length <= gi) {
      const i = state.formValues[fieldId].gruppi.length;
      state.formValues[fieldId].gruppi.push({
        idx:i+1, nome:'', descrizione:'',
        attrezzature:[], prodotti_chimici:[],
        rischi_json:{}, fasi:[], dpi_gruppo:[],
        schede: Array.from({length:33}, (_,j)=>({id:j+1,presente:false,p:'',d:''})),
      });
    }
  }

  /* ── Cap3 Editor (Luoghi di Lavoro) ─────────────────────────────────────── */

  function buildCap3Editor(fieldId, locali) {
    if (!locali || locali.length === 0) {
      return `<div class="cap2-no-data">Nessun luogo di lavoro trovato nel file JSON.</div>
        <button class="cap3-add-btn" onclick="App.onCap3AddManual('${fieldId}')">${ic('plus',13)} Aggiungi luogo manualmente</button>`;
    }
    return locali.map((loc, li) => buildCap3Locale(fieldId, loc, li)).join('')
      + `<button class="cap3-add-btn" onclick="App.onCap3AddLocale('${fieldId}')">${ic('plus',13)} Aggiungi locale</button>`;
  }

  function _c3Rebuild(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    const locali = state.formValues[fieldId]?.locali || [];
    if (outer) outer.innerHTML = buildCap3Editor(fieldId, locali);
    saveChapterDraft();
  }

  function onCap3AddManual(fieldId) {
    if (!confirm('Il file JSON non contiene luoghi di lavoro. Vuoi aggiungerli manualmente?')) return;
    onCap3AddLocale(fieldId);
  }

  function onCap3AddLocale(fieldId) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = { locali: [] };
    if (!Array.isArray(state.formValues[fieldId].locali)) state.formValues[fieldId].locali = [];
    const locali = state.formValues[fieldId].locali;
    locali.push({
      idx: locali.length + 1, nome: '', descrizione: '', superficie_mq: '',
      caratteristica: '', attivita_svolte: '',
      rischi: Array.from({ length: 16 }, (_, j) => ({ id: j + 1, presente: false, p: '', d: '' })),
    });
    _c3Rebuild(fieldId);
  }

  function onCap3RemoveLocale(fieldId, li) {
    const locali = state.formValues[fieldId]?.locali;
    if (!Array.isArray(locali)) return;
    locali.splice(li, 1);
    locali.forEach((l, i) => { l.idx = i + 1; });
    _c3Rebuild(fieldId);
  }

  // Rischi Allegato IV "situazionali": possono esserci o no in azienda.
  // Per questi si chiede esplicitamente Presente/Non presente; se "Non presente"
  // la riga NON viene compilata affatto (feedback 2026-09-24).
  const CAP3_OPTIONAL_RI = new Set([8, 13, 14, 15]); // Scale 1.7, Spogliatoi 1.12, Servizi 1.13, Vasche/silos

  function _cap3RowHtml(fieldId, li, ri, r, rischio) {
    const lid = `cap3-l${li}`;
    const optional = CAP3_OPTIONAL_RI.has(ri);
    const pv = parseInt(rischio.p) || 0;
    const dv = parseInt(rischio.d) || 0;
    // Per le righe opzionali la presenza è ESPLICITA (rischio.presente).
    const presente = optional ? (rischio.presente !== false && rischio.presente !== undefined ? !!rischio.presente : false)
                              : true;
    const pxd = (pv > 0 && dv > 0) ? pv * dv : 0;
    const rc = pxd === 0 ? '' : pxd <= 3 ? 'r-low' : pxd <= 6 ? 'r-mild' : pxd <= 9 ? 'r-high' : 'r-vhigh';
    const pBtns = [1,2,3,4].map(v =>
      `<button class="risk-btn${pv===v?' active':''}" onclick="App.onCap3RischioChange('${fieldId}',${li},${ri},'p',${v})" data-v="${v}">${v}</button>`).join('');
    const dBtns = [1,2,3,4].map(v =>
      `<button class="risk-btn${dv===v?' active':''}" onclick="App.onCap3RischioChange('${fieldId}',${li},${ri},'d',${v})" data-v="${v}">${v}</button>`).join('');
    const presToggle = optional ? `
        <div class="cap3-pres-toggle">
          <button class="cap3-pres-btn${presente?' on':''}" onclick="App.onCap3PresenteToggle('${fieldId}',${li},${ri},true)">Presente</button>
          <button class="cap3-pres-btn${!presente?' off':''}" onclick="App.onCap3PresenteToggle('${fieldId}',${li},${ri},false)">Non presente</button>
        </div>` : '';
    const pdBlock = (!optional || presente) ? `
          <div class="risk-pd-group">
            <span class="risk-pd-label">P</span>
            <div class="risk-btns">${pBtns}</div>
            <span class="risk-pd-sep">×</span>
            <span class="risk-pd-label">D</span>
            <div class="risk-btns">${dBtns}</div>
          </div>` : `<span class="cap3-esclusa">Non valutata (esclusa)</span>`;
    return `<tr id="${lid}-r${ri}-row">
        <td style="font-size:10.5px;color:var(--gray-600);white-space:nowrap">${escHtml(r.rif)}</td>
        <td style="font-size:11px">${escHtml(r.desc)}</td>
        <td class="risk-pd-cell">${presToggle}${pdBlock}</td>
        <td class="risk-pxd ${rc}" id="${lid}-r${ri}-pxd">${(!optional||presente)?(pxd || '—'):'—'}</td>
      </tr>`;
  }

  function buildCap3Locale(fieldId, loc, li) {
    const lid = `cap3-l${li}`;
    const idx = loc.idx || (li + 1);
    const nome = escHtml(loc.nome || `Locale ${idx}`);

    const rischiHtml = RISCHI_ALLEGATO_IV_JS.map((r, ri) => {
      const rischio = (loc.rischi || [])[ri] || {};
      return _cap3RowHtml(fieldId, li, ri, r, rischio);
    }).join('');

    return `
    <div class="cap2-accordion" id="${lid}" data-field-id="${fieldId}">
      <div class="cap2-accordion-header" onclick="App.toggleCap3Locale('${lid}')">
        <span class="cap2-group-num">${idx}</span>
        <span class="cap2-group-nome">${nome}</span>
        <span class="cap2-toggle-icon" style="margin-left:auto">${ic(li === 0 ? 'chevron_up' : 'chevron_down',13)}</span>
        <button class="cap3-rm-btn" onclick="event.stopPropagation();App.onCap3RemoveLocale('${fieldId}',${li})" title="Rimuovi locale">✕</button>
      </div>
      <div class="cap2-accordion-body${li === 0 ? ' open' : ''}" id="${lid}-body">
        <div class="cap2-section-label">Dati locale</div>
        <div class="cap2-row-2col" style="margin-bottom:10px">
          <div>
            <label class="field-label">Nome locale</label>
            <input class="field-input" type="text" value="${escAttr(loc.nome||'')}"
              oninput="App.onCap3FieldChange('${fieldId}',${li},'nome',this.value)">
          </div>
          <div>
            <label class="field-label">Caratteristica (es. Fuori terra, Seminterrato)</label>
            <input class="field-input" type="text" value="${escAttr(loc.caratteristica||'')}"
              oninput="App.onCap3FieldChange('${fieldId}',${li},'caratteristica',this.value)">
          </div>
        </div>
        <div style="margin-bottom:10px">
          <label class="field-label">Descrizione</label>
          <textarea class="field-textarea" rows="3"
            oninput="App.onCap3FieldChange('${fieldId}',${li},'descrizione',this.value)"
            >${escHtml(loc.descrizione||'')}</textarea>
        </div>
        <div class="cap2-row-2col" style="margin-bottom:10px">
          <div>
            <label class="field-label">Attività svolte</label>
            <textarea class="field-textarea" rows="2"
              oninput="App.onCap3FieldChange('${fieldId}',${li},'attivita_svolte',this.value)"
              >${escHtml(loc.attivita_svolte||'')}</textarea>
          </div>
          <div>
            <label class="field-label">Superficie (m²)</label>
            <input class="field-input" type="number" value="${escAttr(String(loc.superficie_mq||''))}"
              oninput="App.onCap3FieldChange('${fieldId}',${li},'superficie_mq',this.value)">
          </div>
        </div>

        <div class="cap2-section-label">Valutazione Rischi Allegato IV — <strong>${nome}</strong></div>
        <div style="overflow-x:auto">
          <table class="risk-matrix">
            <thead>
              <tr>
                <th style="width:90px;text-align:left">Rif. All. IV</th>
                <th style="text-align:left">Rischio</th>
                <th>P &nbsp;×&nbsp; D</th>
                <th style="width:60px">R</th>
              </tr>
            </thead>
            <tbody>${rischiHtml}</tbody>
          </table>
        </div>
      </div>
    </div>`;
  }

  function initCap3Editor(fieldId, initialLocali) {
    if (!state.formValues[fieldId]) {
      state.formValues[fieldId] = { locali: JSON.parse(JSON.stringify(initialLocali)) };
    }
  }

  function toggleCap3Locale(lid) {
    const accordion = document.getElementById(lid);
    const fieldId = accordion?.dataset.fieldId;
    if (fieldId) {
      document.querySelectorAll(`.cap2-accordion[data-field-id="${fieldId}"] .cap2-accordion-body`)
        .forEach(b => {
          if (b.id !== `${lid}-body`) {
            b.classList.remove('open');
            const hdr = document.getElementById(b.id.replace('-body', ''))?.querySelector('.cap2-toggle-icon');
            if (hdr) hdr.innerHTML = ic('chevron_down', 13);
          }
        });
    }
    const body = document.getElementById(`${lid}-body`);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    const header = accordion?.querySelector('.cap2-toggle-icon');
    if (header) header.innerHTML = ic(isOpen ? 'chevron_up' : 'chevron_down', 13);
  }

  function onCap3FieldChange(fieldId, li, key, value) {
    _ensureCap3State(fieldId, li);
    const loc = state.formValues[fieldId].locali[li];
    loc[key] = value;
  }

  function onCap3RischioChange(fieldId, li, ri, prop, val) {
    _ensureCap3State(fieldId, li);
    const loc = state.formValues[fieldId].locali[li];
    if (!loc.rischi) loc.rischi = Array.from({length:16}, (_,i) => ({id:i+1,presente:false,p:0,d:0}));
    if (!loc.rischi[ri]) loc.rischi[ri] = {id:ri+1, presente:false, p:0, d:0};
    const rsc = loc.rischi[ri];
    const cur = parseInt(rsc[prop]) || 0;
    rsc[prop] = (cur === val) ? 0 : val;
    // Righe opzionali: la presenza è gestita dal toggle esplicito, non dal P×D.
    if (!CAP3_OPTIONAL_RI.has(ri)) {
      rsc.presente = rsc.p > 0 && rsc.d > 0;
    }

    const pxd = (rsc.p > 0 && rsc.d > 0) ? rsc.p * rsc.d : 0;
    const rc = pxd === 0 ? '' : pxd <= 3 ? 'r-low' : pxd <= 6 ? 'r-mild' : pxd <= 9 ? 'r-high' : 'r-vhigh';

    const rowEl = document.getElementById(`cap3-l${li}-r${ri}-row`);
    if (rowEl) {
      rowEl.querySelectorAll('.risk-btns').forEach((group, idx) => {
        const type = idx === 0 ? 'p' : 'd';
        const cur2 = parseInt(rsc[type]) || 0;
        group.querySelectorAll('.risk-btn').forEach(btn =>
          btn.classList.toggle('active', parseInt(btn.dataset.v) === cur2));
      });
    }

    const pxdEl = document.getElementById(`cap3-l${li}-r${ri}-pxd`);
    if (pxdEl) { pxdEl.textContent = pxd || '—'; pxdEl.className = `risk-pxd ${rc}`; }
    saveChapterDraft();
  }

  function onCap3PresenteToggle(fieldId, li, ri, present) {
    _ensureCap3State(fieldId, li);
    const loc = state.formValues[fieldId].locali[li];
    if (!loc.rischi) loc.rischi = Array.from({length:16}, (_,i) => ({id:i+1,presente:false,p:'',d:''}));
    if (!loc.rischi[ri]) loc.rischi[ri] = {id:ri+1, presente:false, p:'', d:''};
    const rsc = loc.rischi[ri];
    rsc.presente = !!present;
    if (!present) { rsc.p = ''; rsc.d = ''; }   // esclusa → niente valutazione
    // Ridisegna la riga (mostra/nasconde il blocco P×D)
    const rowEl = document.getElementById(`cap3-l${li}-r${ri}-row`);
    if (rowEl) {
      const tmp = document.createElement('tbody');
      tmp.innerHTML = _cap3RowHtml(fieldId, li, ri, RISCHI_ALLEGATO_IV_JS[ri], rsc);
      rowEl.replaceWith(tmp.firstElementChild);
    }
    saveChapterDraft();
  }

  function _ensureCap3State(fieldId, li) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = {locali:[]};
    if (!state.formValues[fieldId].locali) state.formValues[fieldId].locali = [];
    while (state.formValues[fieldId].locali.length <= li) {
      const i = state.formValues[fieldId].locali.length;
      state.formValues[fieldId].locali.push({
        idx: i+1, nome: '', descrizione: '', caratteristica: '',
        attivita_svolte: '', superficie_mq: '',
        rischi: Array.from({length:16}, (_,j) => ({id:j+1, presente:false, p:'', d:''})),
      });
    }
  }

  /* ── Procedure Picker ────────────────────────────────────────────────────── */

  function buildProcedurePicker(fieldId, list) {
    if (!list || list.length === 0) {
      return `<div class="procedure-empty">Nessun file .docx trovato nella cartella procedure.<br>Vai in <strong>Configurazione → Cartella Procedure</strong>.</div>`;
    }
    const total = list.length;
    const items = list.map(f => {
      const label = f.replace(/\.docx$/i, '');
      return `<label class="procedure-item">
        <input type="checkbox" value="${escAttr(f)}"
               onchange="App.onProcedureChange('${fieldId}')">
        <span>${escHtml(label)}</span>
      </label>`;
    }).join('');
    return `
      <div class="procedure-search-wrap">
        <input type="search" class="procedure-search"
               placeholder="Cerca procedura…"
               oninput="App.filterProcedures('${fieldId}', this.value)">
        <span class="procedure-count" id="proc-count-${fieldId}">${total} procedure</span>
      </div>
      <div class="procedure-grid" id="proc-grid-${fieldId}">${items}</div>`;
  }

  function filterProcedures(fieldId, query) {
    const grid = document.getElementById(`proc-grid-${fieldId}`);
    const counter = document.getElementById(`proc-count-${fieldId}`);
    if (!grid) return;
    const q = query.trim().toLowerCase();
    const items = grid.querySelectorAll('.procedure-item');
    let visible = 0;
    items.forEach(item => {
      const label = item.querySelector('span')?.textContent?.toLowerCase() || '';
      const match = !q || label.includes(q);
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (counter) {
      counter.textContent = q
        ? `${visible} di ${items.length} procedure`
        : `${items.length} procedure`;
    }
  }

  function initProcedurePicker(fieldId) {
    // Non azzerare se una selezione è già presente (es. ripristino da bozza salvata)
    if (!Array.isArray(state.formValues[fieldId])) state.formValues[fieldId] = [];
  }

  function onProcedureChange(fieldId) {
    const grid = document.getElementById(`proc-grid-${fieldId}`);
    if (!grid) return;
    state.formValues[fieldId] = [...grid.querySelectorAll('input[type=checkbox]:checked')]
      .map(cb => cb.value);
  }

  /* ── Cap4 Editor (Attrezzature + Impianti) ──────────────────────────────── */

  function buildCap4Editor(fieldId, data) {
    const attrezzature = (data && data.attrezzature) || [];
    const lavoriTensione = !!(data && data.lavori_tensione);
    const manutenzioneAffidata = (data && data.manutenzione_affidata !== undefined)
      ? data.manutenzione_affidata : true;
    const isp = (data && data.aeraulico_ispezioni) || {};
    const ispRow = (key, label) => `
      <div class="cap4-isp-row">
        <label class="cap4-isp-lbl">${label}</label>
        <input class="field-input" type="text" value="${escAttr(isp[key] || '')}"
          placeholder="Nominativo…"
          onchange="App.onCap4Ispezione('${fieldId}','${key}',this.value)">
      </div>`;

    const attrRows = attrezzature.map((a, i) => {
      const ce = a.ce || 'Sì';
      const anteCe = a.ante_ce || 'No';
      const incl = a.selezionata !== false;
      return `<tr>
        <td style="text-align:center">
          <input type="checkbox" class="cap4-attr-incl" ${incl ? 'checked' : ''}
            title="Includi nel DVR"
            onchange="App.onCap4AttrInclude('${fieldId}',${i},this.checked)"></td>
        <td style="text-align:center;color:var(--gray-600);font-size:11px">${a.ref || (i + 1)}</td>
        <td style="font-size:12px">${escHtml(a.nome || '')}</td>
        <td style="text-align:center">
          <div style="display:inline-flex;gap:4px">
            <button id="cap4-${fieldId}-${i}-ce-si"
              class="cap5-sino-btn cap5-sino-sm${ce==='Sì'?' cap5-sino-si':''}"
              onclick="App.onCap4AttrChange('${fieldId}',${i},'ce','Sì')">Sì</button>
            <button id="cap4-${fieldId}-${i}-ce-no"
              class="cap5-sino-btn cap5-sino-sm${ce!=='Sì'?' cap5-sino-no':''}"
              onclick="App.onCap4AttrChange('${fieldId}',${i},'ce','No')">No</button>
          </div>
        </td>
        <td style="text-align:center">
          <div style="display:inline-flex;gap:4px">
            <button id="cap4-${fieldId}-${i}-ante_ce-si"
              class="cap5-sino-btn cap5-sino-sm${anteCe==='Sì'?' cap5-sino-si':''}"
              onclick="App.onCap4AttrChange('${fieldId}',${i},'ante_ce','Sì')">Sì</button>
            <button id="cap4-${fieldId}-${i}-ante_ce-no"
              class="cap5-sino-btn cap5-sino-sm${anteCe!=='Sì'?' cap5-sino-no':''}"
              onclick="App.onCap4AttrChange('${fieldId}',${i},'ante_ce','No')">No</button>
          </div>
        </td>
      </tr>`;
    }).join('');

    const attrTable = attrezzature.length === 0
      ? `<div class="cap2-no-data">Nessuna attrezzatura trovata nel JSON (sezione ciclo_lavoro).</div>`
      : `<div style="overflow-x:auto">
          <table class="risk-matrix">
            <thead>
              <tr>
                <th style="width:60px">Includi</th>
                <th style="width:56px">Rif.</th>
                <th>Nome Attrezzatura / DPI</th>
                <th style="width:70px">CE</th>
                <th style="width:80px">Ante-CE</th>
              </tr>
            </thead>
            <tbody>${attrRows}</tbody>
          </table>
        </div>`;

    return `
      <div class="cap4-section">
        <div class="cap2-section-label">Attrezzature Utilizzate in Azienda</div>
        ${attrTable}
      </div>
      <div class="cap4-section" style="margin-top:18px">
        <div class="cap2-section-label">Scelte Impianti</div>
        <div style="display:flex;flex-direction:column;gap:12px;padding:14px 0">
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer">
            <input type="checkbox" class="cap4-option-cb"
              id="cap4-lavori-tensione-${fieldId}"
              ${lavoriTensione ? 'checked' : ''}
              onchange="App.onCap4Change('${fieldId}','lavori_tensione',this.checked)">
            <span>Lavori sotto tensione: <strong>SONO ESEGUITI</strong>
              <span style="font-size:11px;color:var(--gray-500);display:block">
                (deselezionato = NON SONO ESEGUITI)</span>
            </span>
          </label>
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer">
            <input type="checkbox" class="cap4-option-cb"
              id="cap4-manutenzione-${fieldId}"
              ${manutenzioneAffidata ? 'checked' : ''}
              onchange="App.onCap4Change('${fieldId}','manutenzione_affidata',this.checked)">
            <span>Manutenzione termica: <strong>affidata a ditta specializzata</strong>
              <span style="font-size:11px;color:var(--gray-500);display:block">
                (deselezionato = non affidata)</span>
            </span>
          </label>
        </div>
      </div>
      <div class="cap4-section" style="margin-top:18px">
        <div class="cap2-section-label">Impianto aeraulico — Ispezioni programmate</div>
        <p class="cap14-note">Chi pianifica ed esegue le ispezioni dell'impianto aeraulico (§6.1 visiva e §6.2 tecnica). Se compilati, l'impianto è considerato presente.</p>
        <div class="cap4-isp-grid">
          <div class="cap4-isp-block">
            <div class="cap4-isp-title">Ispezione visiva (§6.1)</div>
            ${ispRow('resp_visiva','Responsabile della pianificazione')}
            ${ispRow('esec_visiva','Esecutore')}
          </div>
          <div class="cap4-isp-block">
            <div class="cap4-isp-title">Ispezione tecnica (§6.2)</div>
            ${ispRow('resp_tecnica','Responsabile della pianificazione')}
            ${ispRow('esec_tecnica','Esecutore')}
          </div>
        </div>
      </div>`;
  }

  function initCap4Editor(fieldId, data) {
    if (!state.formValues[fieldId]) {
      const attrezzature = (data && data.attrezzature) || [];
      const aer = state.jsonRaw?.impianti?.aeraulico || {};
      state.formValues[fieldId] = {
        attrezzature: attrezzature.map(a => ({ ...a })),
        lavori_tensione: !!(data && data.lavori_tensione),
        manutenzione_affidata: (data && data.manutenzione_affidata !== undefined)
          ? !!data.manutenzione_affidata : true,
        aeraulico_ispezioni: {
          resp_visiva:  aer.resp_ispezione_visiva  || '',
          esec_visiva:  aer.esecut_ispezione_visiva || '',
          resp_tecnica: aer.resp_ispezione_tecnica || '',
          esec_tecnica: aer.esecut_ispezione_tecnica || '',
        },
      };
    }
  }

  function onCap4Change(fieldId, prop, value) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = {};
    state.formValues[fieldId][prop] = value;
  }

  function onCap4AttrInclude(fieldId, idx, checked) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = { attrezzature: [] };
    if (!state.formValues[fieldId].attrezzature) state.formValues[fieldId].attrezzature = [];
    const arr = state.formValues[fieldId].attrezzature;
    if (!arr[idx]) arr[idx] = { ref: idx + 1, nome: '', ce: 'Sì', ante_ce: 'No' };
    arr[idx].selezionata = !!checked;
    saveChapterDraft();
  }

  function onCap4Ispezione(fieldId, key, value) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = {};
    if (!state.formValues[fieldId].aeraulico_ispezioni) state.formValues[fieldId].aeraulico_ispezioni = {};
    state.formValues[fieldId].aeraulico_ispezioni[key] = value;
    saveChapterDraft();
  }

  function onCap4AttrChange(fieldId, idx, key, value) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = { attrezzature: [] };
    if (!state.formValues[fieldId].attrezzature) state.formValues[fieldId].attrezzature = [];
    const arr = state.formValues[fieldId].attrezzature;
    if (!arr[idx]) arr[idx] = { ref: idx + 1, nome: '', ce: 'Sì', ante_ce: 'No' };
    arr[idx][key] = value;
    const siBtn = document.getElementById(`cap4-${fieldId}-${idx}-${key}-si`);
    const noBtn = document.getElementById(`cap4-${fieldId}-${idx}-${key}-no`);
    if (siBtn && noBtn) {
      const isYes = value === 'Sì';
      siBtn.className = `cap5-sino-btn cap5-sino-sm${isYes ? ' cap5-sino-si' : ''}`;
      noBtn.className = `cap5-sino-btn cap5-sino-sm${!isYes ? ' cap5-sino-no' : ''}`;
    }
    saveChapterDraft();
  }

  /* ── Cap5 editor (pre-compilato: regole segnaletica) ──────────────────── */
  const CAP5_ROWS = [
    ['applicazione_in_azienda', 'Segnaletica applicata in azienda',
      'La segnaletica di sicurezza si applica in azienda (§2).'],
    ['impianto_termico', 'Impianto termico presente',
      'Se sì → spunta la segnaletica delle TUBAZIONI (§2.2.1).'],
    ['serbatoio', 'Serbatoio presente',
      'Se sì → spunta la segnaletica dei CONTENITORI (§2.2.1).'],
    ['categoria_ce', 'Categoria C o E',
      'Se sì → spunta i segnali LUMINOSI e ACUSTICI (§2.2.2).'],
    ['gestuali', 'Comunicazione gestuale / verbale',
      'Se sì → attiva la sezione comunicazione verbale e gestuale (§2.2.3).'],
  ];

  function initCap5Editor(fieldId, data) {
    const d = data || {};
    state.formValues[fieldId] = {
      applicazione_in_azienda: d.applicazione_in_azienda !== false,
      impianto_termico: !!d.impianto_termico,
      serbatoio: !!d.serbatoio,
      categoria_ce: !!d.categoria_ce,
      gestuali: !!d.gestuali,
    };
  }

  function buildCap5Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || data || {};
    const rows = CAP5_ROWS.map(([key, label, hint]) => {
      const v = ed[key] !== undefined ? !!ed[key] : (key === 'applicazione_in_azienda');
      return `<div class="cap5-row">
        <div class="cap5-row-txt">
          <div class="cap5-row-lbl">${escHtml(label)}</div>
          <div class="cap5-row-hint">${escHtml(hint)}</div>
        </div>
        <div class="cap5-sino">
          <button class="cap5-sino-btn${v ? ' cap5-sino-si' : ''}" onclick="App.onCap5Toggle('${fieldId}','${key}',true)">SI</button>
          <button class="cap5-sino-btn${!v ? ' cap5-sino-no' : ''}" onclick="App.onCap5Toggle('${fieldId}','${key}',false)">NO</button>
        </div>
      </div>`;
    }).join('');
    return `<div class="cap5-editor" id="cap5-editor-${fieldId}">
      <div class="cap5-intro">Editor pre-compilato dai dati del cliente. Verifica le voci qui sotto e genera: tutte le altre spunte del capitolo (7 categorie di segnaletica e le risposte di conformità) sono impostate automaticamente su <b>“Presente e completa”</b>.</div>
      ${rows}
    </div>`;
  }

  function onCap5Toggle(fieldId, key, value) {
    const ed = state.formValues[fieldId] || {};
    ed[key] = value;
    state.formValues[fieldId] = ed;
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap5Editor(fieldId, ed);
    saveChapterDraft();
  }

  /* ── Cap8 — Videoterminali editor ───────────────────────────────────── */
  const CAP8_ARREDI_VOCI = [
    ['ampliamento_superficie', 'Ampliamento superficie di lavoro'],
    ['colore_piano',           'Adeguamento colore del piano di lavoro'],
    ['altezza_scrivania',      'Adeguamento altezza da terra del piano di lavoro'],
    ['basamento_solidita',     'Basamento e solidità seduta'],
    ['regolazioni_seduta',     'Regolazioni altezza seduta e/o profondità supporto lombare'],
  ];
  const CAP8_ATT_VOCI = [
    ['sostituzione_schermi',       'Sostituzione schermi'],
    ['altezza_schermi',            'Adeguamento altezza schermi (orizzonte visivo)'],
    ['sostituzione_tastiere',      'Sostituzione tastiere'],
    ['distanziamento_tastiere',    'Corretto distanziamento tastiere dal bordo scrivania'],
    ['posizionamento_tastiera',    'Posizionamento tastiera sul piano principale'],
    ['portatili_tastiera_esterna', 'Computer portatili: tastiera separata e monitor esterno'],
  ];
  const CAP8_AMB_VOCI = [
    ['eliminazione_rumore', 'Eliminazione problemi di rumore (stampanti ecc.)'],
    ['correnti_aria',       "Evitare correnti d'aria (porte, bocchette, ventilatori)"],
    ['illuminazione',       'Assicurare illuminazione adeguata (anti-riflesso)'],
  ];

  function _cap8PdRow(fieldId, section, pd) {
    const p = pd.p || 2, d = pd.d || 2, r = p * d;
    const rColor = r <= 2 ? '#16a34a' : r <= 4 ? '#ca8a04' : r <= 9 ? '#ea580c' : '#dc2626';
    return `
      <div style="display:flex;align-items:center;gap:18px;margin:10px 0 14px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:12px;color:var(--gray-600);font-weight:600;min-width:14px">P:</span>
          ${[1,2,3,4].map(v => `
            <button id="${fieldId}-${section}-p-${v}"
                class="cap5-sino-btn cap5-sino-sm${p===v?' cap5-sino-si':''}"
                style="width:28px"
                onclick="App.onCap8Change('${fieldId}','${section}','p',${v})">${v}</button>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:12px;color:var(--gray-600);font-weight:600;min-width:14px">D:</span>
          ${[1,2,3,4].map(v => `
            <button id="${fieldId}-${section}-d-${v}"
                class="cap5-sino-btn cap5-sino-sm${d===v?' cap5-sino-si':''}"
                style="width:28px"
                onclick="App.onCap8Change('${fieldId}','${section}','d',${v})">${v}</button>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <span style="font-size:12px;color:var(--gray-600);font-weight:600">R =</span>
          <span id="${fieldId}-${section}-r-badge"
              style="font-size:14px;font-weight:700;color:${rColor};
                     background:${rColor}1a;border:1px solid ${rColor}55;
                     border-radius:8px;padding:2px 10px">${r}</span>
        </div>
      </div>`;
  }

  function _cap8CheckRows(fieldId, section, voci, sectionData) {
    return voci.map(([key, label]) => {
      const val = sectionData[key] === true;
      return `<tr>
        <td style="font-size:12.5px;padding:6px 8px">${escHtml(label)}</td>
        <td style="text-align:center;width:54px">
          <button id="${fieldId}-${section}-${key}-si"
              class="cap5-sino-btn cap5-sino-sm${val ? ' cap5-sino-si' : ''}"
              onclick="App.onCap8Change('${fieldId}','${section}','${key}',true)">SI</button>
        </td>
        <td style="text-align:center;width:54px">
          <button id="${fieldId}-${section}-${key}-no"
              class="cap5-sino-btn cap5-sino-sm${!val ? ' cap5-sino-no' : ''}"
              onclick="App.onCap8Change('${fieldId}','${section}','${key}',false)">NO</button>
        </td>
      </tr>`;
    }).join('');
  }

  function buildCap8Editor(fieldId, data) {
    const d = data || {};
    const arr = d.arredi       || {};
    const att = d.attrezzature || {};
    const amb = d.ambienti     || {};

    function mkSection(titleText, section, voci, sectionData) {
      return `
        <div class="cap4-section" style="margin-top:16px">
          <div class="cap2-section-label">${escHtml(titleText)}</div>
          ${_cap8PdRow(fieldId, section, sectionData)}
          <div style="overflow-x:auto">
            <table class="risk-matrix">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th style="width:54px;text-align:center">Sì</th>
                  <th style="width:54px;text-align:center">No</th>
                </tr>
              </thead>
              <tbody>${_cap8CheckRows(fieldId, section, voci, sectionData)}</tbody>
            </table>
          </div>
        </div>`;
    }

    return (
      mkSection('Arredi della postazione',       'arredi',       CAP8_ARREDI_VOCI, arr) +
      mkSection('Attrezzature della postazione', 'attrezzature', CAP8_ATT_VOCI,    att) +
      mkSection('Ambiente della postazione',     'ambienti',     CAP8_AMB_VOCI,    amb)
    );
  }

  function initCap8Editor(fieldId, data) {
    if (!state.formValues[fieldId]) {
      const d = data || {};
      state.formValues[fieldId] = {
        arredi:       { p: 2, d: 2, ...(d.arredi       || {}) },
        attrezzature: { p: 2, d: 2, ...(d.attrezzature || {}) },
        ambienti:     { p: 2, d: 2, ...(d.ambienti     || {}) },
      };
    }
  }

  function onCap8Change(fieldId, section, key, value) {
    if (!state.formValues[fieldId]) state.formValues[fieldId] = {};
    if (!state.formValues[fieldId][section]) state.formValues[fieldId][section] = {};
    state.formValues[fieldId][section][key] = value;

    if (key === 'p' || key === 'd') {
      [1,2,3,4].forEach(v => {
        const btn = document.getElementById(`${fieldId}-${section}-${key}-${v}`);
        if (btn) btn.classList.toggle('cap5-sino-si', v === value);
      });
      const sec = state.formValues[fieldId][section] || {};
      const r = (sec.p || 2) * (sec.d || 2);
      const rColor = r <= 2 ? '#16a34a' : r <= 4 ? '#ca8a04' : r <= 9 ? '#ea580c' : '#dc2626';
      const badge = document.getElementById(`${fieldId}-${section}-r-badge`);
      if (badge) {
        badge.textContent = r;
        badge.style.color           = rColor;
        badge.style.background      = rColor + '1a';
        badge.style.borderColor     = rColor + '55';
      }
    } else if (typeof value === 'boolean') {
      const siBtn = document.getElementById(`${fieldId}-${section}-${key}-si`);
      const noBtn = document.getElementById(`${fieldId}-${section}-${key}-no`);
      if (siBtn) { siBtn.classList.toggle('cap5-sino-si', value);  siBtn.classList.remove('cap5-sino-no'); }
      if (noBtn) { noBtn.classList.toggle('cap5-sino-no', !value); noBtn.classList.remove('cap5-sino-si'); }
    }
  }

  /* ── Cap14 Editor (Chimico) ─────────────────────────────────────────── */

  function buildCap14Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || data || {};
    const gruppi = ed.gruppi || [];
    const schede = Array.isArray(ed.schede_valutazione) ? ed.schede_valutazione : [];
    const tipoAtt = state.jsonRaw?.anagrafica?.tipologia_attivita
                 || state.jsonRaw?.anagrafica?.settore_ateco || '';
    const emptyMsg = tipoAtt
      ? `Nessun prodotto chimico è stato rilevato nel file JSON. Attività dell'azienda: <b>${escHtml(tipoAtt)}</b>. Individua i prodotti chimici tipici di questa attività e allega qui sotto le relative schede di valutazione.`
      : `Nessun prodotto chimico è stato rilevato nel file JSON.`;

    const gruppiHtml = gruppi.length ? (() => {
      const counter = { n: 1 };
      return gruppi.map(g => {
        const prodsHtml = (g.prodotti_chimici || []).map(pc => {
          const n = counter.n++;
          return `<div class="cap14-product">
            <div class="cap14-product-info">
              <span class="cap14-scheda-n">${n}</span>
              <span class="cap14-product-name">${escHtml(pc.nome || '')}</span>
            </div>
          </div>`;
        }).join('');
        return `<div class="cap14-group">
          <div class="cap14-group-header">${escHtml(g.nome || '')}</div>
          <div class="cap14-group-products">${prodsHtml}</div>
        </div>`;
      }).join('');
    })() : '<p class="cap14-note">Nessun prodotto chimico trovato nel JSON.</p>';

    const schedeHtml = schede.map((p, idx) => {
      const fname = p.split('\\').pop() || p.split('/').pop() || p;
      return `<div class="cap14-sds-row">
        <span class="cap14-sds-label cap14-sds-label--set">${ic('paperclip', 13)} ${escHtml(fname)}</span>
        <button class="cap14-rm-scheda" onclick="App.removeSchedaValutazione('${fieldId}',${idx})" title="Rimuovi">✕</button>
      </div>`;
    }).join('');

    setTimeout(() => _loadCap14Catalog(fieldId), 0);
    return `
      <div class="cap4-section">
        <div class="cap2-section-label">Prodotti chimici rilevati dal JSON</div>
        ${gruppi.length
          ? `<p class="cap14-note">Questi sono i prodotti chimici rilevati dal file JSON e già inseriti nel documento, raggruppati per fase di lavoro. Qui sotto seleziona le relative schede di valutazione dei rischi dal database.</p>
        <div class="cap14-groups">${gruppiHtml}</div>`
          : `<p class="cap14-empty">${emptyMsg}</p>`}
      </div>
      <div class="cap4-section cap14-db-section">
        <div class="cap2-section-label">§3.2 Schede di valutazione dei rischi (database)</div>
        <p class="cap14-note">Seleziona le schede da inserire nel documento (verranno incollate in <b>Word, modificabili</b>). Quelle <b>suggerite</b> in base ai prodotti rilevati sono già spuntate: puoi aggiungerne o toglierne a mano.</p>
        <input class="cap14-search" type="text" placeholder="Cerca scheda nel database…"
          value="${escAttr(ed._catSearch || '')}"
          oninput="App.onCap14Search('${fieldId}', this.value)">
        <div id="cap14-catalog-${fieldId}" class="cap14-catalog">Caricamento database…</div>
      </div>
      <div class="cap4-section cap14-schede-section">
        <div class="cap2-section-label">SDS esterne (facoltative)</div>
        <p class="cap14-note">Facoltativo: allega la SDS del fornitore (PDF/Word/Excel). Viene inserita come immagine in coda al capitolo.</p>
        ${schedeHtml}
        <button class="cap14-sds-btn" onclick="App.pickSchedaValutazione('${fieldId}')">
          ${ic('paperclip', 13)} Aggiungi SDS esterna
        </button>
      </div>`;
  }

  // ── Cap14: database schede valutazione rischio chimico ───────────────────
  function _c14Norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  const _C14_STOP = new Set(['per', 'di', 'da', 'e', 'a', 'il', 'la', 'lo', 'i',
    'gli', 'le', 'del', 'della', 'con', 'dei', 'in', 'su',
    // parole generiche di pulizia: troppo comuni, fanno rumore nel match
    'detergente', 'detersivo', 'prodotto', 'prodotti']);
  function _c14Tokens(s) {
    return _c14Norm(s).split(' ').filter(t => t && !_C14_STOP.has(t));
  }
  function _c14Match(prodNome, catalog) {
    const pt = _c14Tokens(prodNome);
    if (!pt.length) return null;
    const pn = _c14Norm(prodNome);
    let best = null, bestScore = 0;
    (catalog || []).forEach(c => {
      const ct = _c14Tokens(c.nome);
      if (!ct.length) return;
      const inter = pt.filter(t => ct.includes(t)).length;
      let score = inter / Math.max(pt.length, ct.length);
      const cn = _c14Norm(c.nome);
      if (pn === cn) score = 1;
      else if (pn.includes(cn) || cn.includes(pn)) score = Math.max(score, 0.8);
      if (score > bestScore) { bestScore = score; best = c; }
    });
    return bestScore >= 0.5 ? best : null;
  }

  async function _loadCap14Catalog(fieldId) {
    const cont = document.getElementById(`cap14-catalog-${fieldId}`);
    if (!cont) return;
    if (!state.chimicoCatalog) {
      try { state.chimicoCatalog = await call('get_chimico_catalog'); }
      catch (e) { state.chimicoCatalog = []; }
    }
    const cat = state.chimicoCatalog || [];
    const ed = state.formValues[fieldId] || {};
    if (!Array.isArray(ed.schede_db)) ed.schede_db = [];
    // Suggerimenti una-tantum: pre-spunta le schede che corrispondono ai prodotti
    if (!ed._schede_db_seeded) {
      const sugg = new Set(ed.schede_db);
      (ed.gruppi || []).forEach(g => (g.prodotti_chimici || []).forEach(pc => {
        const m = _c14Match(pc.nome || '', cat);
        if (m) sugg.add(m.file);
      }));
      ed.schede_db = [...sugg];
      ed._schede_db_seeded = true;
    }
    if (!cat.length) {
      cont.innerHTML = '<p class="cap14-note">Database schede non trovato (cartella «14_ Schede prodotti chimici»).</p>';
      return;
    }
    _renderCap14Catalog(fieldId);
  }

  function _renderCap14Catalog(fieldId) {
    const cont = document.getElementById(`cap14-catalog-${fieldId}`);
    if (!cont) return;
    const cat = state.chimicoCatalog || [];
    const ed = state.formValues[fieldId] || {};
    const sel = new Set(ed.schede_db || []);
    const q = _c14Norm(ed._catSearch || '');
    const rows = cat.filter(c => !q || _c14Norm(c.nome).includes(q)).map(c => {
      const on = sel.has(c.file);
      return `<label class="cap14-cat-row${on ? ' on' : ''}">
        <input type="checkbox" ${on ? 'checked' : ''}
          onchange="App.onCap14SchedaToggle('${fieldId}', ${JSON.stringify(c.file)})">
        <span>${escHtml(c.nome)}</span></label>`;
    }).join('');
    const nSel = sel.size;
    cont.innerHTML = `<div class="cap14-cat-count">${nSel} selezionate · ${cat.length} nel database</div>`
      + (rows || '<p class="cap14-note">Nessuna scheda corrisponde alla ricerca.</p>');
  }

  function onCap14SchedaToggle(fieldId, file) {
    const ed = state.formValues[fieldId];
    if (!ed) return;
    if (!Array.isArray(ed.schede_db)) ed.schede_db = [];
    const i = ed.schede_db.indexOf(file);
    if (i >= 0) ed.schede_db.splice(i, 1); else ed.schede_db.push(file);
    _renderCap14Catalog(fieldId);
    saveChapterDraft();
  }

  function onCap14Search(fieldId, q) {
    const ed = state.formValues[fieldId];
    if (!ed) return;
    ed._catSearch = q;
    _renderCap14Catalog(fieldId);
  }

  function _c14Rebuild(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap14Editor(fieldId, state.formValues[fieldId]);
    saveChapterDraft();
  }

  function initCap14Editor(fieldId, data) {
    if (!state.formValues[fieldId]) {
      const d = JSON.parse(JSON.stringify(data || { gruppi: [] }));
      if (!Array.isArray(d.schede_valutazione)) d.schede_valutazione = [];
      if (!Array.isArray(d.schede_db)) d.schede_db = [];
      state.formValues[fieldId] = d;
    } else {
      const d = state.formValues[fieldId];
      if (!Array.isArray(d.schede_valutazione)) d.schede_valutazione = [];
      if (!Array.isArray(d.schede_db)) d.schede_db = [];
    }
  }

  async function pickSchedaValutazione(fieldId) {
    const path = await call('pick_sds_pdf');
    if (!path) return;
    const ed = state.formValues[fieldId];
    if (!ed) return;
    if (!Array.isArray(ed.schede_valutazione)) ed.schede_valutazione = [];
    ed.schede_valutazione.push(path);
    _c14Rebuild(fieldId);
  }

  function removeSchedaValutazione(fieldId, idx) {
    const ed = state.formValues[fieldId];
    if (!ed || !Array.isArray(ed.schede_valutazione)) return;
    ed.schede_valutazione.splice(idx, 1);
    _c14Rebuild(fieldId);
  }

  /* ══════════════════════════════════════════════════════════════════════
     CAP20 — Valutazione Rischio Incendio
     ══════════════════════════════════════════════════════════════════════ */

  const DPR151_ATTIVITA = [
    {n:1,  t:"Stabilimenti ed impianti ove si producono e/o impiegano gas infiammabili e/o comburenti con quantità globali in ciclo superiori a 25 Nm³/h"},
    {n:2,  t:"Impianti di compressione o di decompressione dei gas infiammabili e/o comburenti con potenzialità superiore a 50 Nm³/h"},
    {n:3,  t:"Impianti di riempimento, depositi, rivendite di gas infiammabili in recipienti mobili (≥0.75 m³ compressi; ≥75 kg disciolti/liquefatti)"},
    {n:4,  t:"Depositi di gas infiammabili in serbatoi fissi (≥0.75 m³ compressi; ≥0.3 m³ disciolti/liquefatti)"},
    {n:5,  t:"Depositi di gas comburenti compressi e/o liquefatti in serbatoi fissi e/o recipienti mobili ≥3 m³"},
    {n:6,  t:"Reti di trasporto e di distribuzione di gas infiammabili (pressione >0.5 MPa)"},
    {n:7,  t:"Centrali di produzione di idrocarburi liquidi e gassosi e di stoccaggio sotterraneo di gas naturale"},
    {n:8,  t:"Oleodotti con diametro superiore a 100 mm"},
    {n:9,  t:"Officine e laboratori con saldatura e taglio dei metalli utilizzanti gas infiammabili e/o comburenti, con oltre 5 addetti"},
    {n:10, t:"Stabilimenti ed impianti ove si producono e/o impiegano liquidi infiammabili e/o combustibili (p.i. ≤125°C) con quantitativi >1 m³"},
    {n:11, t:"Stabilimenti ed impianti per la preparazione di oli lubrificanti, diatermici e simili (p.i. >125°C) con quantitativi >5 m³"},
    {n:12, t:"Depositi e/o rivendite di liquidi infiammabili e/o combustibili e/o oli lubrificanti di capacità >1 m³"},
    {n:13, t:"Impianti fissi di distribuzione carburanti per autotrazione, nautica e aeronautica"},
    {n:14, t:"Officine o laboratori per la verniciatura con vernici infiammabili e/o combustibili con oltre 5 addetti"},
    {n:15, t:"Depositi e/o rivendite di alcoli con concentrazione >60% in volume di capacità >1 m³"},
    {n:16, t:"Stabilimenti di estrazione con solventi infiammabili e raffinazione di oli e grassi, con quantitativi >0.5 m³"},
    {n:17, t:"Stabilimenti ed impianti ove si producono, impiegano o detengono sostanze esplodenti"},
    {n:18, t:"Esercizi di minuta vendita e/o depositi di sostanze esplodenti e artifici pirotecnici"},
    {n:19, t:"Stabilimenti ed impianti ove si producono, impiegano o detengono sostanze instabili (perossidi organici inclusi)"},
    {n:20, t:"Stabilimenti ed impianti ove si producono, impiegano o detengono nitrati di ammonio e perossidi inorganici"},
    {n:21, t:"Stabilimenti con sostanze soggette ad accensione spontanea o che sviluppano gas infiammabili a contatto con acqua"},
    {n:22, t:"Stabilimenti ed impianti ove si produce acqua ossigenata con concentrazione >60%"},
    {n:23, t:"Stabilimenti ed impianti ove si produce, impiega e/o detiene fosforo e/o sesquisolfuro di fosforo"},
    {n:24, t:"Stabilimenti ed impianti per la macinazione e raffinazione dello zolfo; depositi di zolfo >10.000 kg"},
    {n:25, t:"Fabbriche di fiammiferi; depositi di fiammiferi >500 kg"},
    {n:26, t:"Stabilimenti ed impianti ove si produce, impiega o detiene magnesio, elektron e leghe ad alto tenore di magnesio"},
    {n:27, t:"Mulini per cereali e macinazioni >20.000 kg/g; depositi di cereali >50.000 kg"},
    {n:28, t:"Impianti per l'essiccazione di cereali e vegetali con depositi >50.000 kg"},
    {n:29, t:"Stabilimenti ove si producono surrogati del caffè"},
    {n:30, t:"Zuccherifici e raffinerie dello zucchero"},
    {n:31, t:"Pastifici e/o riserie con produzione giornaliera >50.000 kg"},
    {n:32, t:"Stabilimenti ed impianti ove si lavora e/o detiene foglia di tabacco con processi di essiccazione con oltre 100 addetti o >50.000 kg"},
    {n:33, t:"Stabilimenti ed impianti per la produzione della carta e dei cartoni con oltre 25 addetti o materiale >50.000 kg"},
    {n:34, t:"Depositi di carta, cartoni, archivi, biblioteche, depositi carta usata >5.000 kg"},
    {n:35, t:"Stabilimenti con carte fotografiche, pellicole cinematografiche e fotografiche con materiale >5.000 kg"},
    {n:36, t:"Depositi di legnami, paglia, fieno, canne, carbone, sughero e prodotti affini >50.000 kg"},
    {n:37, t:"Stabilimenti e laboratori per la lavorazione del legno con materiale >5.000 kg"},
    {n:38, t:"Stabilimenti ed impianti ove si producono, lavorano fibre tessili e tessuti con quantitativi >5.000 kg"},
    {n:39, t:"Stabilimenti per la produzione di arredi, abbigliamento, lavorazione pelle e calzaturifici con oltre 25 addetti"},
    {n:40, t:"Stabilimenti ed impianti per la preparazione del crine vegetale, lavorazione della paglia, sughero con quantitativi >5.000 kg"},
    {n:41, t:"Teatri e studi per le riprese cinematografiche e televisive"},
    {n:42, t:"Laboratori per la realizzazione di attrezzerie e scenografie, compresi depositi, di superficie >200 m²"},
    {n:43, t:"Stabilimenti per la produzione, lavorazione e rigenerazione della gomma e/o vulcanizzazione >5.000 kg; depositi pneumatici >10.000 kg"},
    {n:44, t:"Stabilimenti ed impianti ove si producono, lavorano materie plastiche >5.000 kg"},
    {n:45, t:"Stabilimenti ed impianti ove si producono e lavorano resine sintetiche, fitofarmaci, coloranti, farmaceutici con solventi infiammabili"},
    {n:46, t:"Depositi di fitofarmaci e/o concimi chimici a base di nitrati e/o fosfati >50.000 kg"},
    {n:47, t:"Stabilimenti ed impianti per la fabbricazione di cavi e conduttori elettrici isolati >10.000 kg; depositi cavi >10.000 kg"},
    {n:48, t:"Centrali termoelettriche, macchine elettriche fisse con liquidi isolanti combustibili >1 m³"},
    {n:49, t:"Gruppi per la produzione di energia elettrica sussidiaria con motori endotermici e cogenerazione di potenza >25 kW"},
    {n:50, t:"Stabilimenti ed impianti ove si producono lampade elettriche, pile ed accumulatori con oltre 5 addetti"},
    {n:51, t:"Stabilimenti siderurgici e per la produzione di altri metalli con oltre 5 addetti; lavorazioni a caldo di metalli con oltre 5 addetti"},
    {n:52, t:"Stabilimenti con oltre 5 addetti per costruzione aeromobili, veicoli a motore, materiale rotabile; cantieri navali con oltre 5 addetti"},
    {n:53, t:"Officine per la riparazione di veicoli a motore (superficie coperta >300 m²) o materiale rotabile/aeromobili (>1000 m²)"},
    {n:54, t:"Officine meccaniche per lavorazioni a freddo con oltre 25 addetti"},
    {n:55, t:"Attività di demolizioni di veicoli e simili con depositi di superficie >3000 m²"},
    {n:56, t:"Stabilimenti ed impianti ove si producono laterizi, maioliche, porcellane e simili con oltre 25 addetti"},
    {n:57, t:"Cementifici con oltre 25 addetti"},
    {n:58, t:"Pratiche di cui al D.Lgs. 230/95 soggette a provvedimenti autorizzativi"},
    {n:59, t:"Autorimesse adibite al ricovero di mezzi per il trasporto di materie fissili speciali e radioattive"},
    {n:60, t:"Impianti di deposito delle materie nucleari e attività assoggettate agli artt. 33 e 52 del D.Lgs. 230/95"},
    {n:61, t:"Impianti nei quali siano detenuti combustibili nucleari o prodotti o residui radioattivi"},
    {n:62, t:"Impianti relativi all'impiego pacifico dell'energia nucleare"},
    {n:63, t:"Stabilimenti per la produzione di sapone, candele, cere e paraffina, acidi grassi, glicerina con oltre 500 kg in lavorazione/deposito"},
    {n:64, t:"Centri informatici di elaborazione e/o archiviazione dati con oltre 25 addetti"},
    {n:65, t:"Locali di spettacolo, impianti sportivi, palestre con capienza >100 persone o superficie >200 m²"},
    {n:66, t:"Alberghi, pensioni, motel, studentati, ostelli, B&B, dormitori, case per ferie con oltre 25 posti-letto; campeggi >400 persone"},
    {n:67, t:"Scuole di ogni ordine, grado e tipo, collegi, accademie con oltre 100 persone; asili nido con oltre 30 persone"},
    {n:68, t:"Strutture sanitarie in regime di ricovero con oltre 25 posti letto; strutture ambulatoriali con superficie >500 m²"},
    {n:69, t:"Locali adibiti ad esposizione e/o vendita all'ingrosso o al dettaglio, fiere, con superficie lorda >400 m²"},
    {n:70, t:"Locali adibiti a deposito di superficie lorda >1000 m² con materiali combustibili >5000 kg"},
    {n:71, t:"Aziende ed uffici con oltre 300 persone presenti"},
    {n:72, t:"Edifici sottoposti a tutela ai sensi del D.Lgs. 42/2004 (biblioteche, archivi, musei, gallerie, mostre)"},
    {n:73, t:"Edifici e/o complessi edilizi a uso terziario e/o industriale con presenza >300 persone o superficie >5000 m²"},
    {n:74, t:"Impianti per la produzione di calore alimentati a combustibile con potenzialità >116 kW"},
    {n:75, t:"Autorimesse pubbliche e private, parcheggi pluriplano e meccanizzati di superficie >300 m²; natanti/aeromobili >500 m²; rotabili >1000 m²"},
    {n:76, t:"Tipografie, litografie, stampa in offset e attività similari con oltre 5 addetti"},
    {n:77, t:"Edifici destinati ad uso civile con altezza antincendio superiore a 24 m"},
    {n:78, t:"Aerostazioni, stazioni ferroviarie e marittime con superficie >5000 m²; metropolitane sotterranee"},
    {n:79, t:"Interporti con superficie superiore a 20.000 m²"},
    {n:80, t:"Gallerie stradali di lunghezza >500 m e ferroviarie >2000 m"},
  ];

  /* ── Cap20 helpers ─────────────────────────────────────────────────── */

  function _c20Sn(fieldId, aIdx, section, idx, value) {
    return `<span class="c20-sn-group">
      <button class="field-sn-btn${value === true ? ' field-sn-active' : ''}"
        onclick="App.onCap20Sn('${fieldId}',${aIdx},'${section}',${idx},true)">Sì</button>
      <button class="field-sn-btn${value === false ? ' field-sn-active' : ''}"
        onclick="App.onCap20Sn('${fieldId}',${aIdx},'${section}',${idx},false)">No</button>
    </span>`;
  }

  function _c20Row(label, snHtml) {
    return `<tr><td class="c20-lbl">${escHtml(label)}</td><td class="c20-val">${snHtml}</td></tr>`;
  }

  function _c20SectionHdr(letter, title) {
    return `<tr class="c20-sect-hdr"><td class="c20-sect-letter">${letter}</td>
      <td class="c20-sect-title">${escHtml(title)}</td></tr>`;
  }

  /* ── Cap0 — Formalizzazione: capitoli applicabili (filtro DVR) ──────────── */
  // DVR super G: capitoli esclusi di default (ri-attivabili a mano).
  const SUPER_G_ESCLUSI = ['6', '7', '10', '11', '17', '19', '22'];

  function initCap0Editor(fieldId, data) {
    const suggerita = (data && data.applicabilita) || {};
    if (!state.formValues[fieldId]) {
      state.formValues[fieldId] = {
        applicabilita: { ...suggerita },
        data_emissione: (data && data.data_emissione) || '',
        super_g: false,
        _proposta: { ...suggerita },
      };
    } else {
      const ed = state.formValues[fieldId];
      if (ed.data_emissione === undefined) ed.data_emissione = (data && data.data_emissione) || '';
      if (!ed._proposta) ed._proposta = { ...suggerita };
      if (ed.super_g === undefined) ed.super_g = false;
    }
  }

  function buildCap0Editor(fieldId) {
    setTimeout(() => _loadCap0(fieldId), 0);
    const ed = state.formValues[fieldId] || {};
    const sg = !!ed.super_g;
    return `<div class="cap0-editor">
      <div class="c20-compact-intro">
        Seleziona i <b>capitoli applicabili</b> a questo cliente. I capitoli impostati
        su <b>NO</b> non verranno generati nel DVR. La proposta qui sotto è calcolata
        automaticamente dai rischi del cliente: puoi modificarla.
      </div>
      <div class="c20-field-row c20-field-row--full" style="margin:4px 0 8px">
        <label class="c20-field-lbl" style="flex:1">Tipo DVR</label>
        <span class="c20-sn-group">
          <button class="field-sn-btn${!sg ? ' field-sn-active' : ''}" onclick="App.onCap0SuperG('${fieldId}',false)">Completo</button>
          <button class="field-sn-btn${sg ? ' field-sn-active' : ''}" onclick="App.onCap0SuperG('${fieldId}',true)">super G</button>
        </span>
      </div>
      <div class="cap0-superg-note" style="font-size:12px;color:var(--gray-600);margin:0 0 10px;${sg ? '' : 'display:none'}">
        <b>DVR super G</b>: esclusi di default Agenti biologici, Movimentazione manuale carichi,
        Movimenti ripetitivi, Near Miss, Rumore, Vibrazioni e DUVRI (puoi comunque ri-attivarli
        singolarmente qui sotto).
      </div>
      <div class="c20-field-row c20-field-row--full" style="margin:4px 0 10px">
        <label class="c20-field-lbl" style="flex:1">Data emissione (sopralluogo)</label>
        <input class="c20-input" style="max-width:180px" value="${escAttr(ed.data_emissione||'')}"
          oninput="App.onCap0DataEmissione('${fieldId}',this.value)"
          placeholder="gg/mm/aaaa">
      </div>
      <div id="cap0-list-${fieldId}" class="cap0-list">
        <div style="color:var(--gray-600);font-size:12px;padding:12px">Caricamento capitoli…</div>
      </div>
    </div>`;
  }

  async function _setCapEscluso(cid, escluso) {
    if (!state.currentClient) return;
    if (!state.currentClient.capitoli_esclusi) state.currentClient.capitoli_esclusi = {};
    if (escluso) state.currentClient.capitoli_esclusi[String(cid)] = true;
    else delete state.currentClient.capitoli_esclusi[String(cid)];
    try {
      await call('imposta_capitolo_escluso',
        state.currentClient.json_path || '', String(cid), !!escluso);
    } catch (e) {}
  }

  async function _loadCap0(fieldId) {
    const cont = document.getElementById(`cap0-list-${fieldId}`);
    if (!cont) return;
    if (!state.cap0Meta) {
      try { state.cap0Meta = await call('get_cap0_chapters'); }
      catch (e) { state.cap0Meta = []; }
    }
    const meta = state.cap0Meta || [];
    const ed = state.formValues[fieldId] || (state.formValues[fieldId] = { applicabilita: {} });
    const appl = ed.applicabilita || (ed.applicabilita = {});
    const escl = (state.currentClient && state.currentClient.capitoli_esclusi) || {};
    const hasEscl = Object.keys(escl).length > 0;

    // Capitoli core sempre SI; per gli implementati opzionali le esclusioni sono
    // autorevoli (se già impostate), altrimenti vale la proposta dai rischi.
    meta.forEach(m => {
      if (m.core) appl[m.id] = true;
      else if (m.implementato && hasEscl) appl[m.id] = !escl[m.id];
    });

    // Seed una-tantum: nessuna esclusione ancora → applica la proposta ai
    // capitoli generati (i NO diventano esclusi → non prodotti nel DVR).
    // Feedback 2026-10-09: nessun capitolo è più "base sempre incluso" — Rumore
    // e Vibrazioni seguono la derivazione dai dati come gli altri (restano
    // ri-attivabili a mano dal tecnico).
    if (!hasEscl && state.currentClient) {
      for (const m of meta) {
        if (m.implementato && !m.core && appl[m.id] === false) {
          await _setCapEscluso(m.id, true);
        }
      }
    }

    cont.innerHTML = meta.map(m => {
      const on = appl[m.id] !== false;
      const badge = !m.implementato
        ? '<span class="cap0-badge">informativo (non generato)</span>'
        : (m.core ? '<span class="cap0-badge core">sempre incluso</span>' : '');
      const btns = m.core
        ? '<span class="cap0-fixed">SI</span>'
        : `<span class="c20-sn-group">
            <button class="field-sn-btn${on ? ' field-sn-active' : ''}" onclick="App.onCap0Toggle('${fieldId}','${m.id}',true)">SI</button>
            <button class="field-sn-btn${!on ? ' field-sn-active' : ''}" onclick="App.onCap0Toggle('${fieldId}','${m.id}',false)">NO</button>
          </span>`;
      return `<div class="cap0-row" id="cap0-row-${fieldId}-${m.id}"
                style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-bottom:1px solid var(--border)">
        <span class="cap0-cap-id" style="min-width:52px;font-weight:600;color:var(--gray-600)">Cap. ${m.id}</span>
        <span class="cap0-cap-title" style="flex:1;font-size:13px">${escHtml(m.titolo)} ${badge}</span>
        ${btns}
      </div>`;
    }).join('');
  }

  function onCap0DataEmissione(fieldId, value) {
    const ed = state.formValues[fieldId] || (state.formValues[fieldId] = { applicabilita: {} });
    ed.data_emissione = value;
  }

  async function onCap0SuperG(fieldId, on) {
    const ed = state.formValues[fieldId] || (state.formValues[fieldId] = { applicabilita: {} });
    ed.super_g = !!on;
    if (!ed.applicabilita) ed.applicabilita = {};
    const base = ed._proposta || {};
    // super G ON → i capitoli esclusi vanno a NO; OFF → ripristina la proposta
    // automatica dai dati (SI/NO derivato). In entrambi i casi aggiorna le
    // esclusioni reali (capitoli_esclusi) così la generazione li rispetta.
    for (const cid of SUPER_G_ESCLUSI) {
      const applicabile = on ? false : (base[cid] !== false);
      ed.applicabilita[cid] = applicabile;
      await _setCapEscluso(cid, !applicabile);
    }
    // Ri-renderizza l'intero editor Cap0 (aggiorna i bottoni Tipo DVR, la nota
    // e la lista capitoli); _loadCap0 è richiamato dal setTimeout interno.
    const list = document.getElementById(`cap0-list-${fieldId}`);
    const wrap = list ? list.closest('.cap0-editor') : null;
    if (wrap) wrap.outerHTML = buildCap0Editor(fieldId);
  }

  async function onCap0Toggle(fieldId, cid, applicabile) {
    const ed = state.formValues[fieldId] || (state.formValues[fieldId] = { applicabilita: {} });
    if (!ed.applicabilita) ed.applicabilita = {};
    ed.applicabilita[cid] = applicabile;
    const m = (state.cap0Meta || []).find(x => x.id === String(cid));
    if (m && m.implementato && !m.core) {
      await _setCapEscluso(cid, !applicabile);
    }
    const row = document.getElementById(`cap0-row-${fieldId}-${cid}`);
    if (row) {
      const btns = row.querySelectorAll('.field-sn-btn');
      btns.forEach(b => b.classList.remove('field-sn-active'));
      if (btns.length === 2) (applicabile ? btns[0] : btns[1]).classList.add('field-sn-active');
    }
    saveChapterDraft();
  }

  function buildCap20Editor(fieldId, data) {
    if (!data) return '<p class="c20-empty">Nessun dato incendio nel JSON.</p>';
    const d = state.formValues[fieldId];
    if (!d) return '';

    // Default: vista COMPLETA ed EDITABILE (feedback 2026-10-09 — "non posso
    // cambiare niente, tutto è bloccato"). Tutte le sezioni (pericoli, contesto,
    // occupanti, beni, misure, classificazione) sono mostrate e modificabili,
    // precompilate dal JSON dove disponibile. La modalità compatta (solo i campi
    // da completare) resta disponibile OPZIONALMENTE col pulsante in fondo.
    const haJson = !!(state.tablePrefill && state.tablePrefill[fieldId]);
    const compatto = haJson && state.c20Compact === true;

    let html = `<div class="c20-editor" id="c20-${fieldId}">`;

    if (compatto) {
      html += `<div class="c20-compact-intro">
        I dati della valutazione incendio (pericoli, contesto, occupanti, misure,
        classificazione) sono già stati letti dal file JSON e il livello di rischio
        viene calcolato automaticamente. <b>Completa solo le informazioni qui sotto.</b>
      </div>`;
      (d.aree || []).forEach((area, aIdx) => {
        html += _buildCap20AreaCompact(fieldId, aIdx, area);
      });
      html += _buildCap20GlobalCompact(fieldId, d);
      html += `<button class="c20-showfull-btn" onclick="App.toggleCap20Full('${fieldId}')">
        Mostra e modifica TUTTI i dati (pericoli, classificazione, misure…) ▾</button>`;
      html += '</div>';
      return html;
    }

    // ── Modalità completa (DEFAULT) ────────────────────────────────────
    html += `<div class="c20-compact-intro">
      Tutti i dati della valutazione incendio sono <b>modificabili</b> qui sotto
      (precompilati dal file JSON dove presente). Il livello di rischio è calcolato
      automaticamente dalla classificazione.
    </div>`;
    // ── Per-area sections ──────────────────────────────────────────────
    (d.aree || []).forEach((area, aIdx) => {
      html += _buildCap20Area(fieldId, aIdx, area, d.aree.length);
    });

    // ── Global sections ────────────────────────────────────────────────
    html += _buildCap20Global(fieldId, d);
    if (haJson) {
      html += `<button class="c20-showfull-btn" onclick="App.toggleCap20Full('${fieldId}')">
        Mostra solo i campi da completare (vista compatta) ▴</button>`;
    }
    html += '</div>';
    return html;
  }

  function toggleCap20Full(fieldId) {
    state.c20Compact = !state.c20Compact;
    _updateCap20(fieldId);
  }

  // ── Modalità compatta: card area con i SOLI campi mancanti dal JSON ──────
  function _buildCap20AreaCompact(fieldId, aIdx, area) {
    const n = area.numero || (aIdx + 1);
    const desc = area.descrizione ? ` — ${escHtml(area.descrizione)}` : '';
    const rientra = area.dpr_rientra === 'rientra';
    const pickerRow = rientra ? `
      <div class="c20-field-row c20-field-row--full">
        <label class="c20-field-lbl">Attività DPR 151/2011</label>
        <div class="c20-dpr-picker">
          <input class="c20-dpr-search" id="c20-dpr-search-${fieldId}-${aIdx}"
            placeholder="Cerca attività (n° o parola chiave)…"
            value="${escAttr(area.dpr_attivita||'')}"
            oninput="App.onCap20DprSearch('${fieldId}',${aIdx},this.value)"
            onblur="App.onCap20DprBlur('${fieldId}',${aIdx})"
            autocomplete="off">
          <div class="c20-dpr-dropdown" id="c20-dpr-dd-${fieldId}-${aIdx}" style="display:none"></div>
        </div>
      </div>` : '';
    return `<div class="c20-area" id="c20-area-${fieldId}-${aIdx}">
      <div class="c20-area-hdr" style="cursor:default">
        <span>AREA OMOGENEA N° ${n}${desc}</span>
      </div>
      <div class="c20-area-body open"><div class="c20-area-fields">
        ${_c20GruppiRow(fieldId, aIdx, area)}
        <div class="c20-field-row">
          <label class="c20-field-lbl">Area soggetta a CPI</label>
          <span class="c20-sn-group">
            <button class="field-sn-btn${area.cpi ? ' field-sn-active' : ''}"
              onclick="App.onCap20Field('${fieldId}',${aIdx},'cpi',true)">Sì</button>
            <button class="field-sn-btn${!area.cpi ? ' field-sn-active' : ''}"
              onclick="App.onCap20Field('${fieldId}',${aIdx},'cpi',false)">No</button>
          </span>
        </div>
        <div class="c20-field-row">
          <label class="c20-field-lbl">DPR 151/2011</label>
          <span class="c20-sn-group">
            <button class="field-sn-btn${rientra ? ' field-sn-active' : ''}"
              onclick="App.onCap20Dpr('${fieldId}',${aIdx},'rientra')">RIENTRA</button>
            <button class="field-sn-btn${!rientra ? ' field-sn-active' : ''}"
              onclick="App.onCap20Dpr('${fieldId}',${aIdx},'non_rientra')">NON RIENTRA</button>
          </span>
        </div>
        ${pickerRow}
      </div></div>
    </div>`;
  }

  function onCap20Dpr(fieldId, aIdx, value) {
    state.formValues[fieldId].aree[aIdx].dpr_rientra = value;
    const card = document.getElementById(`c20-area-${fieldId}-${aIdx}`);
    const haJson = !!(state.tablePrefill && state.tablePrefill[fieldId]);
    if (card && haJson && state.c20Compact === true) {
      // Modalità compatta: ri-renderizza la card (mostra/nasconde il picker)
      card.outerHTML = _buildCap20AreaCompact(
        fieldId, aIdx, state.formValues[fieldId].aree[aIdx]);
    } else {
      _refreshCap20Btns(fieldId, aIdx, 'dpr_rientra', value);
    }
  }

  function _buildCap20GlobalCompact(fieldId, d) {
    const lf = String(d.livello_formazione || '1');
    return `<div class="c20-global">
      <div class="c20-section">
        <div class="c20-section-hdr">DA COMPLETARE</div>
        <div class="c20-area-fields" style="padding:12px 16px">
          <div class="c20-field-row">
            <label class="c20-field-lbl">Sono presenti cantieri temporanei o mobili?</label>
            <span class="c20-sn-group">
              <button class="field-sn-btn${d.has_cantieri ? ' field-sn-active' : ''}"
                onclick="App.onCap20Global('${fieldId}','has_cantieri',true)">Sì</button>
              <button class="field-sn-btn${!d.has_cantieri ? ' field-sn-active' : ''}"
                onclick="App.onCap20Global('${fieldId}','has_cantieri',false)">No</button>
            </span>
          </div>
          <div class="c20-field-row c20-field-row--full">
            <label class="c20-field-lbl">Gruppi per formazione LIVELLO ${lf}</label>
            <input class="c20-input" value="${escAttr(d['gruppi_livello_'+lf]||'')}"
              oninput="App.onCap20Global('${fieldId}','gruppi_livello_${lf}',this.value)"
              placeholder="es. OPERAI; IMPIEGATI (facoltativo)">
          </div>
        </div>
      </div>
      ${_c20StrategiaSection(fieldId, d)}
    </div>`;
  }

  // ── Cap20 §4 Strategia antincendio: domande caricate dal template ────────
  function _c20StrategiaSection(fieldId, d) {
    // Mostrata SEMPRE: il tecnico deve poter compilare la strategia a
    // prescindere dal livello di rischio calcolato (feedback 2026-10-09 —
    // "avevo compilato la sezione ma nel documento è rimasto tutto su No").
    // Le risposte compilate qui vengono riportate nel §4.1 del documento.
    setTimeout(() => _loadCap20Strategia(fieldId), 0);
    return `<div class="c20-section">
      <div class="c20-section-hdr">STRATEGIA ANTINCENDIO (§4) — rispondi per misura</div>
      <div id="c20-strategia-${fieldId}" class="c20-strategia-body" style="padding:12px 16px">
        <div style="color:var(--gray-600);font-size:12px">Caricamento misure…</div>
      </div>
    </div>`;
  }

  async function _loadCap20Strategia(fieldId) {
    const cont = document.getElementById(`c20-strategia-${fieldId}`);
    if (!cont) return;
    if (!state.c20StrategiaQ) {
      try { state.c20StrategiaQ = await call('get_cap20_strategia'); }
      catch (e) { state.c20StrategiaQ = []; }
    }
    const domande = state.c20StrategiaQ || [];
    const d = state.formValues[fieldId] || {};
    const risposte = d.strategia || {};
    if (!domande.length) {
      cont.innerHTML = '<div style="color:var(--gray-600);font-size:12px">Misure non disponibili.</div>';
      return;
    }
    cont.innerHTML = domande.map((q, i) => {
      const val = risposte[i] || '';
      const btn = (v, l) => `<button class="field-sn-btn${val === v ? ' field-sn-active' : ''}"
        onclick="App.onCap20Strategia('${fieldId}',${i},'${v}')">${l}</button>`;
      return `<div class="c20-field-row c20-field-row--full c20-strategia-row" style="align-items:flex-start">
        <label class="c20-field-lbl" style="flex:1">${escHtml(q.testo || ('Misura ' + (i + 1)))}</label>
        <span class="c20-sn-group">${btn('Si', 'Sì')}${btn('No', 'No')}${q.na ? btn('N/A', 'N/A') : ''}</span>
      </div>`;
    }).join('');
  }

  function onCap20Strategia(fieldId, idx, val) {
    const d = state.formValues[fieldId]; if (!d) return;
    if (!d.strategia) d.strategia = {};
    d.strategia[idx] = val;
    const rows = document.querySelectorAll(`#c20-strategia-${fieldId} .c20-strategia-row`);
    const row = rows[idx];
    if (row) {
      const btns = row.querySelectorAll('.field-sn-btn');
      btns.forEach(b => b.classList.remove('field-sn-active'));
      const map = { 'Si': 0, 'No': 1, 'N/A': 2 };
      if (btns[map[val]]) btns[map[val]].classList.add('field-sn-active');
    }
    saveChapterDraft();
  }

  // ── Cap20: gruppi omogenei per area (selezione OBBLIGATORIA a chip) ──────
  function _c20GruppiSelezionati(area) {
    return String(area.gruppi_omogenei || '')
      .split(/\s*[;,]\s*/).map(s => s.trim()).filter(Boolean);
  }

  function _c20GruppiRow(fieldId, aIdx, area) {
    const nomi = _availableGroupNames();
    const sel = _c20GruppiSelezionati(area);
    if (!nomi.length) {
      // Fallback: nessun gruppo nel JSON → testo libero
      return `<div class="c20-field-row">
        <label class="c20-field-lbl">Gruppi omogenei presenti nell'area *</label>
        <input class="c20-input" value="${escAttr(area.gruppi_omogenei||'')}"
          oninput="App.onCap20Field('${fieldId}',${aIdx},'gruppi_omogenei',this.value)"
          placeholder="es. OPERAI; IMPIEGATI">
      </div>`;
    }
    // Anche eventuali nomi legacy salvati ma non più nel JSON restano selezionabili
    const tutti = [...nomi];
    sel.forEach(n => { if (!tutti.includes(n)) tutti.push(n); });
    const chips = tutti.map(nm => `
      <button class="field-sn-btn${sel.includes(nm) ? ' field-sn-active' : ''}"
        onclick="App.onCap20Gruppo('${fieldId}',${aIdx},'${escAttr(nm)}')">${escHtml(nm)}</button>`
    ).join('');
    const warn = sel.length ? '' : `<div class="c20-gruppi-warn">
      Informazione obbligatoria: seleziona il gruppo o i gruppi omogenei presenti in quest'area.</div>`;
    return `<div class="c20-field-row c20-field-row--full">
      <label class="c20-field-lbl">Gruppi omogenei presenti nell'area *</label>
      <div class="c20-gruppi-chips" id="c20-gruppi-${fieldId}-${aIdx}">${chips}${warn}</div>
    </div>`;
  }

  function onCap20Gruppo(fieldId, aIdx, nome) {
    const area = state.formValues[fieldId].aree[aIdx];
    const sel = _c20GruppiSelezionati(area);
    const pos = sel.indexOf(nome);
    if (pos >= 0) sel.splice(pos, 1); else sel.push(nome);
    area.gruppi_omogenei = sel.join('; ');
    // Rebuild della sola riga chip (l'accordion resta aperto)
    const box = document.getElementById(`c20-gruppi-${fieldId}-${aIdx}`);
    if (box) {
      const row = box.closest('.c20-field-row');
      if (row) { row.outerHTML = _c20GruppiRow(fieldId, aIdx, area); return; }
    }
    saveChapterDraft();
  }

  function _buildCap20Area(fieldId, aIdx, area, totalAree) {
    const n = area.numero || (aIdx + 1);
    const desc = area.descrizione ? ` — ${escHtml(area.descrizione)}` : '';
    let html = `<div class="c20-area" id="c20-area-${fieldId}-${aIdx}">
      <div class="c20-area-hdr" onclick="App.toggleC20Area('${fieldId}',${aIdx})">
        <span>AREA OMOGENEA N° ${n}${desc}</span>
        <span class="c20-toggle-icon">${ic(aIdx === 0 ? 'chevron_up' : 'chevron_down', 13)}</span>
      </div>
      <div class="c20-area-body${aIdx === 0 ? ' open' : ''}">
      <div class="c20-area-fields">`;

    // Basic info
    html += `
      <div class="c20-field-row">
        <label class="c20-field-lbl">Locale</label>
        <input class="c20-input" value="${escAttr(area.locale||'')}"
          oninput="App.onCap20Field('${fieldId}',${aIdx},'locale',this.value)">
      </div>
      <div class="c20-field-row">
        <label class="c20-field-lbl">Descrizione area</label>
        <input class="c20-input" value="${escAttr(area.descrizione||'')}"
          oninput="App.onCap20Field('${fieldId}',${aIdx},'descrizione',this.value)">
      </div>
      ${_c20GruppiRow(fieldId, aIdx, area)}
      <div class="c20-field-row">
        <label class="c20-field-lbl">Area soggetta a CPI</label>
        <span class="c20-sn-group">
          <button class="field-sn-btn${area.cpi ? ' field-sn-active' : ''}"
            onclick="App.onCap20Field('${fieldId}',${aIdx},'cpi',true)">Sì</button>
          <button class="field-sn-btn${!area.cpi ? ' field-sn-active' : ''}"
            onclick="App.onCap20Field('${fieldId}',${aIdx},'cpi',false)">No</button>
        </span>
      </div>
      <div class="c20-field-row">
        <label class="c20-field-lbl">DPR 151/2011</label>
        <span class="c20-sn-group">
          <button class="field-sn-btn${area.dpr_rientra === 'rientra' ? ' field-sn-active' : ''}"
            onclick="App.onCap20Field('${fieldId}',${aIdx},'dpr_rientra','rientra')">RIENTRA</button>
          <button class="field-sn-btn${area.dpr_rientra !== 'rientra' ? ' field-sn-active' : ''}"
            onclick="App.onCap20Field('${fieldId}',${aIdx},'dpr_rientra','non_rientra')">NON RIENTRA</button>
        </span>
      </div>
      <div class="c20-field-row c20-field-row--full">
        <label class="c20-field-lbl">Attività DPR 151/2011</label>
        <div class="c20-dpr-picker">
          <input class="c20-dpr-search" id="c20-dpr-search-${fieldId}-${aIdx}"
            placeholder="Cerca attività (n° o parola chiave)…"
            value="${escAttr(area.dpr_attivita||'')}"
            oninput="App.onCap20DprSearch('${fieldId}',${aIdx},this.value)"
            onblur="App.onCap20DprBlur('${fieldId}',${aIdx})"
            autocomplete="off">
          <div class="c20-dpr-dropdown" id="c20-dpr-dd-${fieldId}-${aIdx}" style="display:none"></div>
        </div>
      </div>`;

    html += '</div>';

    // ── A — PERICOLI DI INCENDIO ──────────────────────────────────────
    const aMatLabels  = ['Nessun materiale combustibile','Carta','Materiali di imballaggio',
      'Materiali plastici in genere','Materiali sotto forma di schiuma',
      'Legno (trucioli, polveri, manufatti)','Arredi combustibili',
      'Pareti, rivestimenti, solai combustibili'];
    const aSostLabels = ['Nessuna sostanza o materiale infiammabile','Vernici e solventi infiammabili',
      'Adesivi infiammabili','Metano','Propano','Ossigeno','Acetilene','Benzina','Gasolio',
      'Manufatti infiammabili','Prodotti chimici infiammabili o reagenti'];
    const aSorgLabels = ['Nessuna sorgente di innesco','Impianto elettrico','Impianto termico',
      'Macchine con produzione di calore','Fiamme o scintille da processi di lavoro',
      'Sorgenti causate da attriti','Uso di fiamme libere (lavori a caldo)',
      'Possibile formazione di atmosfere esplosive'];

    html += `<div class="c20-section">
      <div class="c20-section-hdr">A — PERICOLI DI INCENDIO</div>
      <div class="c20-3col">`;

    html += `<div><div class="c20-col-hdr">Materiali combustibili</div>`;
    aMatLabels.forEach((lbl, i) => {
      html += `<div class="c20-check-row">
        ${_c20Sn(fieldId, aIdx, 'a_mat', i, (area.a_mat||[])[i])}
        <span class="c20-check-lbl">${escHtml(lbl)}</span></div>`;
    });
    html += `<div class="c20-check-row c20-altro-row">
      <span class="c20-altro-lbl">Altro:</span>
      <input class="c20-altro-input" value="${escAttr((area.a_mat||[])[8]||'')}"
        oninput="App.onCap20ArrText('${fieldId}',${aIdx},'a_mat',8,this.value)">
    </div></div>`;

    html += `<div><div class="c20-col-hdr">Sostanze infiammabili</div>`;
    aSostLabels.forEach((lbl, i) => {
      html += `<div class="c20-check-row">
        ${_c20Sn(fieldId, aIdx, 'a_sost', i, (area.a_sost||[])[i])}
        <span class="c20-check-lbl">${escHtml(lbl)}</span></div>`;
    });
    html += `<div class="c20-check-row c20-altro-row">
      <span class="c20-altro-lbl">Altro:</span>
      <input class="c20-altro-input" value="${escAttr((area.a_sost||[])[11]||'')}"
        oninput="App.onCap20ArrText('${fieldId}',${aIdx},'a_sost',11,this.value)">
    </div></div>`;

    html += `<div><div class="c20-col-hdr">Sorgenti di innesco</div>`;
    aSorgLabels.forEach((lbl, i) => {
      html += `<div class="c20-check-row">
        ${_c20Sn(fieldId, aIdx, 'a_sorg', i, (area.a_sorg||[])[i])}
        <span class="c20-check-lbl">${escHtml(lbl)}</span></div>`;
    });
    html += `<div class="c20-check-row c20-altro-row">
      <span class="c20-altro-lbl">Altro:</span>
      <input class="c20-altro-input" value="${escAttr((area.a_sorg||[])[8]||'')}"
        oninput="App.onCap20ArrText('${fieldId}',${aIdx},'a_sorg',8,this.value)">
    </div></div>`;

    html += `</div></div>`;

    // ── B — CONTESTO E AMBIENTE ───────────────────────────────────────
    const bLabels = [
      "L'accessibilità e la viabilità al contesto lavorativo risulta limitata",
      "La tipologia della struttura e l'assenza di trattamenti ignifughi comportano pericolo",
      "La volumetria dell'ambiente risulta angusta con superfici circoscritte e altezze limitate",
      "Il contesto lavorativo è situato nei piani interrati con percorsi elevati per uscire",
      "La compartimentazione tra le aree non è idonea a evitare la propagazione dell'incendio",
      "L'aerazione, ventilazione e le superfici finestrate non sono sufficienti per smaltire fumi",
    ];
    html += `<div class="c20-section">
      <div class="c20-section-hdr">B — CONTESTO E AMBIENTE</div>
      <table class="c20-table">`;
    bLabels.forEach((lbl, i) => {
      html += _c20Row(lbl, _c20Sn(fieldId, aIdx, 'b', i, (area.b||[])[i]));
    });
    html += `</table></div>`;

    // ── C — OCCUPANTI ────────────────────────────────────────────────
    const cTipLabels = [
      'Lavoratori in aree a rischio specifico di incendio',
      'Lavoratori incapaci di reagire prontamente in caso di incendio',
      "Lavoratori ignari del pericolo causato da un incendio (aree isolate, vie di esodo difficili)",
      'Persone la cui mobilità, udito o vista sia limitata',
      "Persone che non hanno familiarità con i luoghi e con le relative vie di esodo",
      'Persone che possono essere incapaci di reagire prontamente in caso di incendio',
    ];
    html += `<div class="c20-section">
      <div class="c20-section-hdr">C — NUMERO E TIPOLOGIA OCCUPANTI</div>
      <div class="c20-occ-row">
        <label>Lavoratori (nr):</label>
        <input type="number" class="c20-num" value="${area.num_lavoratori||0}"
          oninput="App.onCap20Field('${fieldId}',${aIdx},'num_lavoratori',+this.value)">
        <label style="margin-left:16px">Altri occupanti (nr):</label>
        <input type="number" class="c20-num" value="${area.num_altri||0}"
          oninput="App.onCap20Field('${fieldId}',${aIdx},'num_altri',+this.value)">
      </div>
      <table class="c20-table">`;
    cTipLabels.forEach((lbl, i) => {
      html += _c20Row(lbl, _c20Sn(fieldId, aIdx, 'c_tip', i, (area.c_tip||[])[i]));
    });
    html += `</table></div>`;

    // ── D — BENI ESPOSTI ─────────────────────────────────────────────
    const dLabels = [
      'Presenza di beni tutelati di valore storico, culturale, architettonico o artistico',
      'Presenza di beni di valore economico elevato (beni in deposito, in vendita, in esposizione)',
    ];
    html += `<div class="c20-section">
      <div class="c20-section-hdr">D — BENI ESPOSTI A RISCHI DI INCENDIO</div>
      <table class="c20-table">`;
    dLabels.forEach((lbl, i) => {
      html += _c20Row(lbl, _c20Sn(fieldId, aIdx, 'd', i, (area.d||[])[i]));
    });
    html += `</table></div>`;

    // ── E — ELIMINAZIONE/RIDUZIONE ───────────────────────────────────
    const e1Labels = [
      'Rimozione o significativa riduzione dei materiali facilmente combustibili',
      'Sostituzione dei materiali pericolosi con altri meno pericolosi',
      'Immagazzinamento dei materiali infiammabili in locali con strutture resistenti al fuoco',
      'Rimozione o sostituzione dei materiali di rivestimento che favoriscono la propagazione',
      "Riparazione dei rivestimenti degli arredi imbottiti per evitare l'innesco diretto",
      "Controllo del luogo di lavoro e provvedimenti per l'eliminazione dei rifiuti e degli scarti",
    ];
    const e2Labels = [
      'Rimozione delle sorgenti di calore non necessarie',
      'Utilizzo di sorgenti di calore sicure: adeguamento impianto termico al DM 37/2008',
      'Sostituzione delle sorgenti di calore con altre più sicure',
      "Controllo dell'utilizzo dei generatori di calore secondo le istruzioni dei costruttori",
      'Schermaggio delle sorgenti di calore valutate pericolose tramite elementi resistenti al fuoco',
      'Installazione e mantenimento in efficienza dei dispositivi di protezione',
      'Controllo della conformità degli impianti elettrici alle normative tecniche vigenti',
      'Pulizia e riparazione dei condotti di ventilazione e canne fumarie',
      'Divieto di fumo',
    ];
    const e3Labels = [
      "Migliorare l'accessibilità e la viabilità al contesto lavorativo",
      'Installazione di materiali per garantire il trattamento ignifugo delle strutture',
      'Individuare spazi con superfici e altezze idonee in cui trasferire le postazioni di lavoro',
      'Individuare misure di compartimentazione idonea tra le aree',
      'Aumentare la ventilazione dei locali o la superficie finestrata',
    ];
    const e4Labels = [
      "Ridurre il numero massimo degli occupanti consentito all'interno dei locali",
      'Addestrare i lavoratori ad affrontare situazioni di rischio incendio',
      'Spostare le postazioni di lavoro dei lavoratori con limitata capacità motoria vicino alle uscite',
    ];
    const e5Labels = [
      'Posizionare i beni tutelati e di valore economico elevato in compartimenti appositamente progettati',
      'Aumentare le misure per la pronta estinzione: estintori, idranti, impianto rivelazione e allarme',
    ];

    const eSubs = [
      {key:'e1', label:'E1 — Misure per ridurre i pericoli causati da materiali e sostanze infiammabili', items:e1Labels},
      {key:'e2', label:'E2 — Misure per ridurre i pericoli causati da sorgenti di innesco', items:e2Labels},
      {key:'e3', label:'E3 — Misure per ridurre i pericoli causati dal contesto e dall\'ambiente', items:e3Labels},
      {key:'e4', label:'E4 — Misure per ridurre i pericoli causati dal numero e dalla tipologia degli occupanti', items:e4Labels},
      {key:'e5', label:'E5 — Misure per ridurre danni nei confronti di beni esposti a rischio', items:e5Labels},
    ];

    html += `<div class="c20-section"><div class="c20-section-hdr">E — ELIMINAZIONE/RIDUZIONE PERICOLI INCENDI</div>`;
    eSubs.forEach(({key, label, items}) => {
      html += `<div class="c20-subsection-hdr">${escHtml(label)}</div>
        <table class="c20-table">`;
      items.forEach((lbl, i) => {
        html += _c20Row(lbl, _c20Sn(fieldId, aIdx, key, i, (area[key]||[])[i]));
      });
      html += `</table>`;
    });
    html += `</div>`;

    // ── CLASSIFICAZIONE ──────────────────────────────────────────────
    const classifLabels = [
      "L'azienda rientra in quelle elencate nel DPR 151/2011, soggette ai controlli dei VVF",
      'Affollamento complessivo ≥ 100 occupanti',
      'Superficie lorda complessiva ≥ 1000 m²',
      'Piani situati a quota inferiore a -5 m e superiore a 24 m',
      'Detenzione o trattamento di materiali combustibili in quantità significative (qf > 900 MJ/m²)',
      'Detenzione o trattamento di sostanze o miscele pericolose in quantità significative',
      'Presenza di lavorazioni pericolose ai fini dell\'incendio',
    ];
    const vLabels = [
      'V.1 — Aree a rischio specifico (impianti in pressione, alte temperature, reazioni chimiche)',
      'V.2 — Aree a rischio per atmosfere esplosive (gas, vapori, polveri combustibili)',
      'V.3 — Vani degli ascensori (locali macchinario, vani di corsa)',
      'V.4 — Uffici: oltre 25 presenti e fino a 300 (DM 22 febbraio 2006)',
      'V.5 — Centrali termiche alimentate a combustibili gassosi >35 kW e ≤116 kW',
      'V.6 — Stabilimenti e impianti di stoccaggio e trattamento rifiuti',
      'V.7 — Attività di intrattenimento e di spettacolo in genere',
    ];

    const cl = area.classificazione || {};
    const _clKeys = ['c1','c2','c3','c4','c5','c6','c7','v1','v2','v3','v4','v5','v6','v7'];
    const calcolato = _clKeys.some(k => cl[k]) ? 'Non Basso' : 'Basso';
    // Livello EFFETTIVO: quello indicato dal tecnico (cl.livello) ha la precedenza
    // sul calcolo (feedback 2026-10-13 — "deve leggere quello che indicano i tecnici").
    const livello = cl.livello || calcolato;
    html += `<div class="c20-section">
      <div class="c20-section-hdr">CLASSIFICAZIONE DEL LIVELLO DI RISCHIO</div>
      <table class="c20-table">`;
    classifLabels.forEach((lbl, i) => {
      html += _c20Row(lbl, _c20Sn(fieldId, aIdx, 'cl_c', i, cl[`c${i+1}`]));
    });
    html += `<tr class="c20-subsect-sep"><td colspan="2" class="c20-subsect-label">Regole tecniche verticali</td></tr>`;
    vLabels.forEach((lbl, i) => {
      html += _c20Row(lbl, _c20Sn(fieldId, aIdx, 'cl_v', i, cl[`v${i+1}`]));
    });
    html += `</table>
      <div class="c20-livello-row">
        <span class="c20-livello-lbl">Livello di rischio incendio (impostalo tu — suggerito dal calcolo: <b>${calcolato.toUpperCase()}</b>):</span>
        <span class="c20-sn-group">
          <button class="field-sn-btn${livello==='Basso' ? ' field-sn-active' : ''}"
            onclick="App.onCap20Livello('${fieldId}',${aIdx},'Basso')">BASSO</button>
          <button class="field-sn-btn${livello!=='Basso' ? ' field-sn-active' : ''}"
            onclick="App.onCap20Livello('${fieldId}',${aIdx},'Non Basso')">NON BASSO</button>
        </span>
      </div>
    </div>`;

    html += `</div></div></div>`;
    return html;
  }

  function toggleC20Area(fieldId, aIdx) {
    document.querySelectorAll(`#c20-${fieldId} .c20-area`).forEach((a, idx) => {
      if (idx !== aIdx) {
        a.querySelector('.c20-area-body')?.classList.remove('open');
        const icon = a.querySelector('.c20-toggle-icon');
        if (icon) icon.innerHTML = ic('chevron_down', 13);
      }
    });
    const body = document.querySelector(`#c20-area-${fieldId}-${aIdx} .c20-area-body`);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    const icon = document.querySelector(`#c20-area-${fieldId}-${aIdx} .c20-toggle-icon`);
    if (icon) icon.innerHTML = ic(isOpen ? 'chevron_up' : 'chevron_down', 13);
  }

  function _buildCap20Global(fieldId, d) {
    const pe = d.piano_emergenza || {};
    const necessario = pe.necessario !== false;
    const lf = d.livello_formazione || '1';
    const idon = d.idoneita_tecnica || 'non_necessaria';

    let html = `<div class="c20-global">
      <div class="c20-area-title">Gestione dell'Emergenza</div>

      <div class="c20-section">
        <div class="c20-section-hdr">NECESSITÀ PIANO DI EMERGENZA e PROVE DI EVACUAZIONE</div>
        <table class="c20-table">
          <tr><td class="c20-lbl">Luoghi di lavoro ove sono occupati almeno 10 lavoratori</td>
            <td class="c20-val"><span class="c20-sn-group">
              <button class="field-sn-btn${pe.c1 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c1',true)">Sì</button>
              <button class="field-sn-btn${!pe.c1 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c1',false)">No</button>
            </span></td></tr>
          <tr><td class="c20-lbl">Luoghi di lavoro aperti al pubblico con presenza contemporanea >50 persone</td>
            <td class="c20-val"><span class="c20-sn-group">
              <button class="field-sn-btn${pe.c2 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c2',true)">Sì</button>
              <button class="field-sn-btn${!pe.c2 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c2',false)">No</button>
            </span></td></tr>
          <tr><td class="c20-lbl">Luoghi di lavoro che rientrano nell'allegato I al DPR 151/2011</td>
            <td class="c20-val"><span class="c20-sn-group">
              <button class="field-sn-btn${pe.c3 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c3',true)">Sì</button>
              <button class="field-sn-btn${!pe.c3 ? ' field-sn-active' : ''}"
                onclick="App.onCap20PE('${fieldId}','c3',false)">No</button>
            </span></td></tr>
        </table>
        <div class="c20-pe-result">
          Piano di emergenza e prove di evacuazione:
          <strong>${necessario ? 'NECESSARI' : 'Non necessari'}</strong>
        </div>
      </div>

      <div class="c20-section">
        <div class="c20-section-hdr">LIVELLO DI RISCHIO AI FINI DELLA FORMAZIONE ANTINCENDIO</div>
        <div class="c20-lf-row">
          ${[1,2,3].map(l=>`<button class="c20-lf-btn ${lf===String(l)?'c20-lf-btn--active':''}"
            onclick="App.onCap20LF('${fieldId}',${l})">LIVELLO ${l}</button>`).join('')}
        </div>
        <div class="c20-lf-groups">
          ${[1,2,3].map(l=>`
          <div class="c20-field-row">
            <label class="c20-field-lbl">Gruppi LIVELLO ${l}:</label>
            <input class="c20-input" value="${escAttr(d['gruppi_livello_'+l]||'')}"
              oninput="App.onCap20Global('${fieldId}','gruppi_livello_${l}',this.value)">
          </div>`).join('')}
        </div>
      </div>

      <div class="c20-section">
        <div class="c20-section-hdr">IDONEITÀ TECNICA DEGLI ADDETTI AL SERVIZIO ANTINCENDIO</div>
        <div class="c20-idon-row">
          <button class="c20-idon-btn ${idon==='necessaria'?'c20-idon-btn--active':''}"
            onclick="App.onCap20Global('${fieldId}','idoneita_tecnica','necessaria')">Necessaria</button>
          <button class="c20-idon-btn ${idon!=='necessaria'?'c20-idon-btn--active':''}"
            onclick="App.onCap20Global('${fieldId}','idoneita_tecnica','non_necessaria')">Non necessaria</button>
        </div>
      </div>

      <div class="c20-section">
        <div class="c20-section-hdr">CANTIERI</div>
        <div class="c20-field-row">
          <label class="c20-field-lbl">Sono presenti cantieri temporanei o mobili?</label>
          <span class="c20-sn-group">
            <button class="field-sn-btn${d.has_cantieri ? ' field-sn-active' : ''}"
              onclick="App.onCap20Global('${fieldId}','has_cantieri',true)">Sì</button>
            <button class="field-sn-btn${!d.has_cantieri ? ' field-sn-active' : ''}"
              onclick="App.onCap20Global('${fieldId}','has_cantieri',false)">No</button>
          </span>
        </div>
      </div>
      ${_c20StrategiaSection(fieldId, d)}
    </div>`;
    return html;
  }

  function initCap20Editor(fieldId, data) {
    if (!state.formValues[fieldId]) {
      const d = data || {};
      const defaultArea = {
        numero:1, locale:'', descrizione:'', gruppi_omogenei:'', cpi:false,
        dpr_rientra:'non_rientra', dpr_attivita:'',
        a_mat:  [false,false,false,false,false,false,false,false,''],
        a_sost: [false,false,false,false,false,false,false,false,false,false,false,''],
        a_sorg: [false,false,false,false,false,false,false,false,''],
        b: [false,false,false,false,false,false],
        num_lavoratori:0, num_altri:0,
        c_tip: [false,false,false,false,false,false],
        d: [false,false],
        e1:[false,false,false,false,false,false],
        e2:[false,false,false,false,false,false,false,false,false],
        e3:[false,false,false,false,false],
        e4:[false,false,false], e5:[false,false],
        classificazione:{c1:false,c2:false,c3:false,c4:false,c5:false,c6:false,c7:false,
          v1:false,v2:false,v3:false,v4:false,v5:false,v6:false,v7:false,livello:'Basso'},
      };
      state.formValues[fieldId] = {
        aree: (d.aree && d.aree.length > 0)
          ? d.aree.map(a => ({...defaultArea, ...a,
              classificazione: {...defaultArea.classificazione, ...(a.classificazione||{})}}))
          : [defaultArea],
        piano_emergenza: {c1:false, c2:false, c3:false, necessario:false, ...(d.piano_emergenza||{})},
        livello_formazione: d.livello_formazione || '1',
        gruppi_livello_1: d.gruppi_livello_1 || '',
        gruppi_livello_2: d.gruppi_livello_2 || '',
        gruppi_livello_3: d.gruppi_livello_3 || '',
        idoneita_tecnica: d.idoneita_tecnica || 'non_necessaria',
        has_cantieri: d.has_cantieri || false,
        strategia: d.strategia || {},
      };
    }
  }

  function _reRenderCap20(fieldId) {
    const wrapper = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (!wrapper) return;
    const d = state.formValues[fieldId];
    wrapper.querySelector('.c20-editor').outerHTML = buildCap20Editor(fieldId, d) || '';
    // re-render inline
    const el = wrapper.querySelector('.c20-editor');
    if (el) el.outerHTML = buildCap20Editor(fieldId, d);
  }

  function _updateCap20(fieldId) {
    const wrapper = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (!wrapper) return;
    const newHtml = buildCap20Editor(fieldId, state.formValues[fieldId]);
    const editorEl = wrapper.querySelector('.c20-editor');
    if (editorEl) editorEl.outerHTML = newHtml;
    // scroll preservation is not needed here
  }

  function onCap20Field(fieldId, aIdx, key, value) {
    state.formValues[fieldId].aree[aIdx][key] = value;
    if (key === 'cpi' || key === 'dpr_rientra') _refreshCap20Btns(fieldId, aIdx, key, value);
    if (key === 'num_lavoratori' || key === 'num_altri') {
      // Auto-update piano emergenza c1
      const total = state.formValues[fieldId].aree.reduce((s,a)=>s+(a.num_lavoratori||0),0);
      state.formValues[fieldId].piano_emergenza.c1 = total >= 10;
      _refreshCap20PE(fieldId);
    }
    saveChapterDraft();
  }

  function onCap20Sn(fieldId, aIdx, section, idx, value) {
    const area = state.formValues[fieldId].aree[aIdx];
    if (section === 'cl_c') {
      area.classificazione[`c${idx+1}`] = value;
      _autoCalcLivello(fieldId, aIdx);
    } else if (section === 'cl_v') {
      area.classificazione[`v${idx+1}`] = value;
      _autoCalcLivello(fieldId, aIdx);
    } else {
      if (!area[section]) area[section] = [];
      area[section][idx] = value;
    }
    // Update button visuals: i bottoni di _c20Sn hanno classe field-sn-btn (no
    // id) → li localizziamo dall'onclick e togglamo 'field-sn-active'. (Bug
    // 2026-10-09: prima si cercava un id inesistente → il click non evidenziava
    // nulla e il capitolo sembrava "bloccato".)
    const siSel = `[onclick="App.onCap20Sn('${fieldId}',${aIdx},'${section}',${idx},true)"]`;
    const anchor = document.querySelector(siSel);
    const grp = anchor ? anchor.closest('.c20-sn-group') : null;
    if (grp) {
      const btns = grp.querySelectorAll('.field-sn-btn');
      btns.forEach(b => b.classList.remove('field-sn-active'));
      if (btns[0] && value === true) btns[0].classList.add('field-sn-active');
      if (btns[1] && value === false) btns[1].classList.add('field-sn-active');
    }
    // Update livello display if classification changed
    if (section === 'cl_c' || section === 'cl_v') _refreshLivelloDisplay(fieldId, aIdx);
    saveChapterDraft();
  }

  function _autoCalcLivello(fieldId, aIdx) {
    const cl = state.formValues[fieldId].aree[aIdx].classificazione;
    // Se il tecnico ha scelto il livello a mano, NON lo sovrascriviamo col calcolo.
    if (cl._livello_manuale) return;
    const nonBasso = ['c1','c2','c3','c4','c5','c6','c7','v1','v2','v3','v4','v5','v6','v7']
      .some(k => cl[k]);
    cl.livello = nonBasso ? 'Non Basso' : 'Basso';
  }

  function _refreshLivelloDisplay(fieldId, aIdx) {
    const livello = state.formValues[fieldId].aree[aIdx].classificazione.livello || 'Basso';
    // Aggiorna i due bottoni BASSO / NON BASSO del selettore livello.
    const btn = document.querySelector(`[onclick="App.onCap20Livello('${fieldId}',${aIdx},'Basso')"]`);
    const grp = btn ? btn.closest('.c20-sn-group') : null;
    if (grp) {
      const btns = grp.querySelectorAll('.field-sn-btn');
      btns.forEach(b => b.classList.remove('field-sn-active'));
      if (btns[0] && livello === 'Basso') btns[0].classList.add('field-sn-active');
      if (btns[1] && livello !== 'Basso') btns[1].classList.add('field-sn-active');
    }
  }

  function onCap20Livello(fieldId, aIdx, livello) {
    const cl = state.formValues[fieldId].aree[aIdx].classificazione;
    cl.livello = livello;
    cl._livello_manuale = true;   // scelta esplicita del tecnico → vince sul calcolo
    _refreshLivelloDisplay(fieldId, aIdx);
    saveChapterDraft();
  }

  function onCap20ArrText(fieldId, aIdx, section, idx, value) {
    const area = state.formValues[fieldId].aree[aIdx];
    if (!area[section]) area[section] = [];
    area[section][idx] = value;
  }

  function _refreshCap20Btns(fieldId, aIdx, key, value) {
    // I bottoni (cpi / dpr_rientra) hanno classe field-sn-btn e nessun id → si
    // localizzano dall'onclick esatto e si evidenzia quello cliccato (bug
    // 2026-10-09: prima si cercavano id inesistenti → nessun feedback visivo).
    const lit = (value === true) ? 'true'
      : (value === false) ? 'false' : `'${value}'`;
    const sel = `[onclick="App.onCap20Field('${fieldId}',${aIdx},'${key}',${lit})"]`;
    const btn = document.querySelector(sel);
    const grp = btn ? btn.closest('.c20-sn-group') : null;
    if (grp) {
      grp.querySelectorAll('.field-sn-btn').forEach(b => b.classList.remove('field-sn-active'));
      if (btn) btn.classList.add('field-sn-active');
    }
  }

  function _refreshCap20PE(fieldId) {
    const pe = state.formValues[fieldId].piano_emergenza;
    pe.necessario = pe.c1 || pe.c2 || pe.c3;
    const resultEl = document.querySelector('.c20-pe-result strong');
    if (resultEl) resultEl.textContent = pe.necessario ? 'NECESSARI' : 'Non necessari';
    ['c1','c2','c3'].forEach(k => {
      const si = document.querySelector(`[onclick*="onCap20PE('${fieldId}','${k}',true)"]`);
      const no = document.querySelector(`[onclick*="onCap20PE('${fieldId}','${k}',false)"]`);
      if (si) si.className = `c20-sn${pe[k] ? ' c20-sn--si' : ''}`;
      if (no) no.className = `c20-sn${!pe[k] ? ' c20-sn--no' : ''}`;
    });
  }

  function onCap20PE(fieldId, key, value) {
    state.formValues[fieldId].piano_emergenza[key] = value;
    state.formValues[fieldId].piano_emergenza.necessario =
      ['c1','c2','c3'].some(k => state.formValues[fieldId].piano_emergenza[k]);
    _refreshCap20PE(fieldId);
  }

  function onCap20LF(fieldId, livello) {
    state.formValues[fieldId].livello_formazione = String(livello);
    document.querySelectorAll(`#c20-${fieldId} .c20-lf-btn`).forEach((btn, i) => {
      btn.className = `c20-lf-btn${String(i+1) === String(livello) ? ' c20-lf-btn--active' : ''}`;
    });
  }

  function onCap20Global(fieldId, key, value) {
    state.formValues[fieldId][key] = value;
    if (key === 'idoneita_tecnica') {
      document.querySelectorAll(`#c20-${fieldId} .c20-idon-btn`).forEach(btn => {
        const isNec = btn.textContent.trim().toLowerCase().includes('non') ? 'non_necessaria' : 'necessaria';
        btn.className = `c20-idon-btn${value === isNec ? ' c20-idon-btn--active' : ''}`;
      });
    }
    if (key === 'has_cantieri') {
      const si = document.querySelector(`[onclick*="onCap20Global('${fieldId}','has_cantieri',true)"]`);
      const no = document.querySelector(`[onclick*="onCap20Global('${fieldId}','has_cantieri',false)"]`);
      if (si) si.className = `c20-sn${value  ? ' c20-sn--si' : ''}`;
      if (no) no.className = `c20-sn${!value ? ' c20-sn--no' : ''}`;
    }
  }

  /* ── DPR 151 searchable picker ─────────────────────────────────────── */
  function onCap20DprSearch(fieldId, aIdx, query) {
    state.formValues[fieldId].aree[aIdx].dpr_attivita = query;
    const ddId = `c20-dpr-dd-${fieldId}-${aIdx}`;
    const dd = document.getElementById(ddId);
    if (!dd) return;
    const q = query.trim().toLowerCase();
    if (!q) { dd.style.display = 'none'; return; }
    const matches = DPR151_ATTIVITA.filter(a =>
      String(a.n).includes(q) || a.t.toLowerCase().includes(q)
    ).slice(0, 15);
    if (!matches.length) { dd.style.display = 'none'; return; }
    dd.innerHTML = matches.map(a =>
      `<div class="c20-dpr-item" onmousedown="App.onCap20DprSelect('${fieldId}',${aIdx},${a.n},'${escJs(String(a.n)+' — '+a.t)}')">${escHtml(a.n + ' — ' + a.t.substring(0,100))}</div>`
    ).join('');
    dd.style.display = 'block';
  }

  function onCap20DprSelect(fieldId, aIdx, n, fullText) {
    state.formValues[fieldId].aree[aIdx].dpr_attivita = fullText;
    const inp = document.getElementById(`c20-dpr-search-${fieldId}-${aIdx}`);
    if (inp) inp.value = fullText;
    const dd = document.getElementById(`c20-dpr-dd-${fieldId}-${aIdx}`);
    if (dd) dd.style.display = 'none';
  }

  function onCap20DprBlur(fieldId, aIdx) {
    setTimeout(() => {
      const dd = document.getElementById(`c20-dpr-dd-${fieldId}-${aIdx}`);
      if (dd) dd.style.display = 'none';
    }, 200);
  }

  /* ══════════════════════════════════════════════════════════════════════
     CAP 6 — MMC (Movimentazione Manuale dei Carichi)
     ══════════════════════════════════════════════════════════════════════ */

  function initCap6Editor(fieldId, data) {
    // Nuovo modello Ed. 2.0: per ogni gruppo omogeneo il tecnico sceglie le
    // movimentazioni-tipo (dal catalogo MMC) e le varianti demografiche.
    // Lista gruppi SEMPRE dal JSON vivo (self-healing); le movimentazioni scelte
    // dal tecnico si conservano per nome gruppo. Evita il falso "Nessun gruppo".
    const gruppi = _mergeGruppiFromJson(data, 'movimentazioni', 'mmc', 'mmc');
    state.formValues[fieldId] = { gruppi };
    // Catalogo MMC dal backend (movimentazioni + varianti). Caricato una sola
    // volta; se torna vuoto (errore transitorio) si ritenta alla prossima apertura.
    if (!Array.isArray(state.mmcCatalog) || !state.mmcCatalog.length) {
      state.mmcCatalog = [];
      call('get_mmc_catalog').then(cat => {
        state.mmcCatalog = Array.isArray(cat) ? cat : [];
        _c6Rerender(fieldId);
      }).catch(() => { state.mmcCatalog = []; _c6Rerender(fieldId); });
    }
  }

  function _c6Rerender(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap6Editor(fieldId, state.formValues[fieldId]);
  }

  // Nomi dei gruppi omogenei realmente presenti nel JSON (ciclo_lavoro).
  // Usato ovunque un record debba RIFERIRE un gruppo esistente (Cap6/7/10).
  function _availableGroupNames() {
    return (state.jsonRaw?.ciclo_lavoro?.gruppi || [])
      .map(g => g.nome)
      .filter(Boolean);
  }

  // ── Riconciliazione gruppi omogenei Cap6/Cap7 (SELF-HEALING) ───────────────
  // La lista dei gruppi omogenei è SEMPRE quella del JSON vivo del cliente
  // (`ciclo_lavoro.gruppi`): il prefill/la bozza salvata forniscono soltanto le
  // SCELTE del tecnico (movimentazioni Cap6 / schede Cap7), riportate sul gruppo
  // corrispondente per NOME. Così, se il JSON ha gruppi, l'editor li mostra
  // SEMPRE — anche con bozze vecchie, JSON re-importati o numero gruppi cambiato
  // (prima la lista veniva "congelata" nel prefill e non si riallineava mai,
  // facendo comparire a torto "Nessun gruppo omogeneo nel JSON").
  //   selKey  = 'movimentazioni' (Cap6) | 'schede' (Cap7)
  //   flagKey = 'mmc' (Cap6) | 'mr' (Cap7)   riskFlag = campo in g.rischi
  function _mergeGruppiFromJson(data, selKey, flagKey, riskFlag) {
    const jsonGruppi = (state.jsonRaw?.ciclo_lavoro?.gruppi || []);
    const saved = (data && Array.isArray(data.gruppi)) ? data.gruppi : [];
    // Nessun gruppo nel JSON (o JSON non ancora caricato): usa la bozza com'è.
    if (!jsonGruppi.length) return saved;
    const byName = {};
    saved.forEach(g => { if (g && g.nome != null) byName[String(g.nome)] = g; });
    const out = jsonGruppi.map((g, i) => {
      const nome = g.nome || `Gruppo ${i + 1}`;
      const prev = byName[String(nome)];
      const sel = (prev && Array.isArray(prev[selKey])) ? prev[selKey] : [];
      const rec = { numero: i + 1, nome,
                    [flagKey]: !!(g.rischi && g.rischi[riskFlag]) };
      rec[selKey] = sel;
      return rec;
    });
    // Gruppi con il rischio pertinente per primi (stabile), come il backend.
    out.sort((a, b) => (a[flagKey] ? 0 : 1) - (b[flagKey] ? 0 : 1) || a.numero - b.numero);
    return out;
  }

  // Costruisce un menu a tendina dei gruppi disponibili (o un input testo di
  // fallback se il JSON non ha gruppi). `onChangeAttr` è il codice JS per onchange.
  function _groupSelectHtml(current, onChangeAttr, placeholder, cls) {
    const names = _availableGroupNames();
    const klass = cls || 'field-select';
    if (!names.length) {
      return `<input class="${klass}" type="text" value="${escAttr(current || '')}"
        onchange="${onChangeAttr}" placeholder="${escAttr(placeholder || 'Nome gruppo omogeneo')}">`;
    }
    const opts = [...names];
    if (current && !opts.includes(current)) opts.unshift(current);
    const optHtml = [`<option value="">— ${escHtml(placeholder || 'Seleziona gruppo')} —</option>`]
      .concat(opts.map(nm =>
        `<option value="${escAttr(nm)}"${nm === current ? ' selected' : ''}>${escHtml(nm)}</option>`))
      .join('');
    return `<select class="${klass}" onchange="${onChangeAttr}">${optHtml}</select>`;
  }

  // Etichetta breve della variante demografica (sesso + fascia d'età).
  function _c6VarLabel(v) {
    const eta = (v.eta || '').replace(/\s+/g, ' ').trim();
    return `${v.sesso || ''}${eta ? ' ' + eta : ''}`.trim() || (v.label || v.key);
  }

  // ── Info dal JSON del tecnico esterno (Cap6/Cap7) ──────────────────────────
  // Mostrano al tecnico interno TUTTO ciò che il tecnico esterno ha scritto sul
  // gruppo omogeneo (mansione, descrizione attività, addetti, attrezzature) e le
  // valutazioni specifiche di MMC/movimenti ripetitivi, così può scegliere le
  // schede giuste con cognizione di causa. Dati letti da `state.jsonRaw`.
  function _normNome(s) { return String(s == null ? '' : s).trim().toLowerCase(); }

  // Gruppo grezzo del ciclo_lavoro per nome (match tollerante a spazi/maiuscole).
  function _gruppoRawByName(nome) {
    const gs = (state.jsonRaw && state.jsonRaw.ciclo_lavoro && state.jsonRaw.ciclo_lavoro.gruppi) || [];
    return gs.find(g => _normNome(g.nome) === _normNome(nome)) || null;
  }

  function _demoChips(cat) {
    if (!cat) return [];
    const out = [];
    if (cat.uomini) out.push('Uomini');
    if (cat.donne) out.push('Donne');
    if (cat.minori || cat.minorenni) out.push('Minori');
    if (cat.stranieri) out.push('Stranieri');
    if (cat.disabili) out.push('Disabili');
    return out;
  }

  function _fasciaEtaLabel(v) {
    const m = { '20_45': '20–45 anni', 'meno_20': 'meno di 20 anni',
                'oltre_45': 'oltre 45 anni', 'over_45': 'oltre 45 anni',
                'under_20': 'meno di 20 anni' };
    const k = String(v == null ? '' : v).trim();
    return m[k] || k.replace(/_/g, ' ');
  }
  function _genereLabel(v) {
    const m = { 'M': 'Uomini', 'F': 'Donne', 'MF': 'Uomini e donne', 'FM': 'Uomini e donne' };
    const k = String(v == null ? '' : v).trim().toUpperCase();
    return m[k] || String(v == null ? '' : v);
  }
  function _attrNomi(raw) {
    return ((raw && raw.attrezzature) || [])
      .map(a => (typeof a === 'string' ? a : (a && a.nome) || '')).filter(Boolean);
  }

  // Carichi movimentati valutati dal tecnico esterno (varie strutture JSON:
  // mmc.valutazioni dict-per-id o lista, mmc.schede lista).
  function _mmcEntries() {
    const m = (state.jsonRaw && state.jsonRaw.mmc) || {};
    const out = [];
    const fromVal = v => v && out.push({
      descr: v.denominazione_carico || v.descrizione || '',
      peso: v.peso_kg, sesso: v.genere || v.sesso,
      eta: v.fascia_eta || v.eta, distanza: v.distanza_trasporto,
      gruppo: v.gruppo || '' });
    const val = m.valutazioni;
    if (Array.isArray(val)) val.forEach(fromVal);
    else if (val && typeof val === 'object') Object.values(val).forEach(fromVal);
    if (Array.isArray(m.schede)) m.schede.forEach(fromVal);
    if (Array.isArray(m.valutazioni_lista)) m.valutazioni_lista.forEach(fromVal);
    return out;
  }

  // Movimenti ripetitivi valutati dal tecnico esterno.
  function _mrEntries() {
    const m = (state.jsonRaw && state.jsonRaw.movimenti_ripetitivi) || {};
    const out = [];
    const push = v => v && out.push({
      fase: v.fase_lavoro || v.fase || '',
      frequenza: v.frequenza, forza: v.forza,
      spalla: v.postura_spalla, gomito: v.postura_gomito,
      polso: v.postura_polso, mano: v.postura_mano_dito,
      durata: v.durata_ore, gruppo: v.gruppo || '' });
    const val = m.valutazioni;
    if (Array.isArray(val)) val.forEach(push);
    else if (val && typeof val === 'object') Object.values(val).forEach(push);
    if (Array.isArray(m.valutazioni_lista)) m.valutazioni_lista.forEach(push);
    return out;
  }

  // Voci pertinenti a un gruppo: quelle marcate col suo nome + quelle senza
  // gruppo (il tecnico esterno spesso non le associa) come riferimento comune.
  function _entriesForGruppo(entries, nome) {
    const mine = entries.filter(e => _normNome(e.gruppo) === _normNome(nome) && _normNome(e.gruppo));
    const shared = entries.filter(e => !_normNome(e.gruppo));
    return mine.concat(shared);
  }

  function _infoTag(txt) { return txt ? `<span class="c6-tag">${escHtml(String(txt))}</span>` : ''; }

  // Pannello info comune (descrizione, addetti, attrezzature, rischio).
  function _gruppoInfoHead(raw, riskLabel, hasRisk) {
    const descr = ((raw && raw.descrizione) || '').trim();
    const demo = _demoChips(raw && raw.categorie_lavoratori);
    const attr = _attrNomi(raw);
    return `
      ${descr ? `<div class="c6-info-descr">${escHtml(descr)}</div>` : ''}
      <div class="c6-info-chips">
        ${hasRisk ? `<span class="c6-chip c6-chip-risk">${escHtml(riskLabel)}</span>` : ''}
        ${demo.map(d => `<span class="c6-chip">${escHtml(d)}</span>`).join('')}
      </div>
      ${attr.length ? `<div class="c6-info-kv"><span class="c6-info-k">Attrezzature</span>
        <span class="c6-info-v">${escHtml(attr.join(', '))}</span></div>` : ''}`;
  }

  function _c6InfoPanel(g) {
    const raw = _gruppoRawByName(g.nome) || {};
    const evals = _entriesForGruppo(_mmcEntries(), g.nome);
    const hasRisk = !!(raw.rischi && raw.rischi.mmc) || !!g.mmc;
    const evalHtml = evals.length ? `
      <div class="c6-info-sec">
        <div class="c6-info-sec-t">${ic('grid', 13)} Carichi valutati dal tecnico esterno</div>
        <ul class="c6-eval-list">${evals.map(e => `<li>
          <span class="c6-eval-main">${escHtml(e.descr || 'Movimentazione carichi')}</span>
          <span class="c6-eval-tags">
            ${_infoTag(e.peso != null && e.peso !== '' ? `${e.peso} kg` : '')}
            ${_infoTag(e.sesso ? _genereLabel(e.sesso) : '')}
            ${_infoTag(e.eta ? _fasciaEtaLabel(e.eta) : '')}
            ${_infoTag(e.distanza != null && e.distanza !== '' ? `trasporto ${e.distanza} m` : '')}
          </span></li>`).join('')}</ul>
      </div>` : `<div class="c6-info-none">Il tecnico esterno non ha dettagliato i carichi per questo gruppo. Scegli le schede in base alla descrizione dell'attività.</div>`;
    return `<div class="c6-info">${_gruppoInfoHead(raw, 'Rischio MMC segnalato', hasRisk)}${evalHtml}</div>`;
  }

  function _c7InfoPanel(g) {
    const raw = _gruppoRawByName(g.nome) || {};
    const evals = _entriesForGruppo(_mrEntries(), g.nome);
    const hasRisk = !!(raw.rischi && raw.rischi.movimenti_ripetitivi) || !!g.mr;
    const evalHtml = evals.length ? `
      <div class="c6-info-sec">
        <div class="c6-info-sec-t">${ic('bar_chart', 13)} Movimenti ripetitivi valutati dal tecnico esterno</div>
        <ul class="c6-eval-list">${evals.map(e => `<li>
          <span class="c6-eval-main">${escHtml(e.fase || 'Attività ripetitiva')}</span>
          <span class="c6-eval-tags">
            ${_infoTag(e.frequenza ? `frequenza: ${e.frequenza}` : '')}
            ${_infoTag(e.forza ? `forza: ${e.forza}` : '')}
            ${_infoTag(e.spalla ? `spalla: ${e.spalla}` : '')}
            ${_infoTag(e.gomito ? `gomito: ${e.gomito}` : '')}
            ${_infoTag(e.polso ? `polso: ${e.polso}` : '')}
            ${_infoTag(e.mano ? `mano/dita: ${e.mano}` : '')}
            ${_infoTag(e.durata != null && e.durata !== '' ? `durata: ${e.durata} h` : '')}
          </span></li>`).join('')}</ul>
      </div>` : `<div class="c6-info-none">Il tecnico esterno non ha dettagliato le fasi ripetitive per questo gruppo. Scegli le schede in base alla descrizione dell'attività.</div>`;
    return `<div class="c6-info">${_gruppoInfoHead(raw, 'Rischio movimenti ripetitivi segnalato', hasRisk)}${evalHtml}</div>`;
  }

  function buildCap6Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || { gruppi: [] };
    const gruppi = ed.gruppi || [];
    const cat = state.mmcCatalog;

    if (!Array.isArray(cat)) {
      return `<div class="c6-editor"><div class="c6-empty">Caricamento catalogo movimentazioni…</div></div>`;
    }
    if (!cat.length) {
      return `<div class="c6-editor"><div class="c6-empty">Catalogo MMC non trovato nella cartella dei modelli (sottocartella <code>MMC/</code>). Controlla la cartella dei template.</div></div>`;
    }
    if (!gruppi.length) {
      return `<div class="c6-editor"><div class="c6-empty">Nessun gruppo omogeneo nel JSON del cliente: non è possibile assegnare le movimentazioni.</div></div>`;
    }

    const totSchede = gruppi.reduce((a, g) =>
      a + (g.movimentazioni || []).reduce((b, m) => b + (m.varianti || []).length, 0), 0);

    return `<div class="c6-editor" id="c6-editor-${fieldId}">
      <div class="c6-intro">Apri ogni <b>gruppo omogeneo</b>: sotto trovi le <b>informazioni scritte dal tecnico esterno</b> (mansione, attività, addetti e i carichi valutati) per aiutarti a scegliere. In base a queste, seleziona le <b>movimentazioni</b> svolte e, per ciascuna, le <b>varianti demografiche</b> (sesso ed età). Ogni variante genera una scheda di valutazione (n° <b>N-S</b>); ogni movimentazione un foglio di calcolo del trasporto (n° <b>N-T</b>).</div>
      ${gruppi.map((g, gi) => _buildC6Gruppo(fieldId, gi, g, cat)).join('')}
      <div class="c6-tot">Totale: <b>${totSchede}</b> scheda/e di valutazione selezionata/e</div>
    </div>`;
  }

  function _buildC6Gruppo(fieldId, gi, g, cat) {
    const movs = g.movimentazioni || [];
    const nSchede = movs.reduce((b, m) => b + (m.varianti || []).length, 0);
    const nMov = movs.filter(m => (m.varianti || []).length).length;
    const open = nSchede > 0 ? ' open' : '';
    return `<details class="c6-gruppo"${open}>
      <summary class="c6-gruppo-hdr">
        <span class="c6-gruppo-tit"><b>Gruppo ${g.numero}</b> — ${escHtml(g.nome || '')}</span>
        <span class="c6-gruppo-badge${nSchede ? ' on' : ''}">${nMov} mov · ${nSchede} scheda/e</span>
      </summary>
      ${_c6InfoPanel(g)}
      <div class="c6-mov-hdr">Seleziona le movimentazioni svolte e le varianti (sesso · età)</div>
      <div class="c6-mov-list">
        ${cat.map(m => _buildC6MovRow(fieldId, gi, g, m)).join('')}
      </div>
    </details>`;
  }

  function _buildC6MovRow(fieldId, gi, g, m) {
    const sel = (g.movimentazioni || []).find(x => x.mov_key === m.key);
    const selVar = sel ? (sel.varianti || []) : [];
    const active = selVar.length > 0;
    const chips = (m.varianti || []).map(v => {
      const on = selVar.includes(v.key);
      return `<button type="button" class="c6-var-chip${on ? ' on' : ''}"
        onclick="App.onC6VarToggle('${fieldId}',${gi},'${escAttr(m.key)}','${escAttr(v.key)}')"
        title="${escAttr(v.label || '')}">${escHtml(_c6VarLabel(v))}</button>`;
    }).join('');
    return `<div class="c6-mov-row${active ? ' active' : ''}">
      <div class="c6-mov-name">${escHtml(m.nome)}</div>
      <div class="c6-mov-vars">${chips}</div>
    </div>`;
  }

  function onC6VarToggle(fieldId, gi, movKey, varKey) {
    const ed = state.formValues[fieldId];
    if (!ed || !ed.gruppi || !ed.gruppi[gi]) return;
    const g = ed.gruppi[gi];
    if (!Array.isArray(g.movimentazioni)) g.movimentazioni = [];
    let mov = g.movimentazioni.find(m => m.mov_key === movKey);
    if (!mov) { mov = { mov_key: movKey, varianti: [] }; g.movimentazioni.push(mov); }
    const i = mov.varianti.indexOf(varKey);
    if (i >= 0) mov.varianti.splice(i, 1);
    else mov.varianti.push(varKey);
    // Movimentazione senza varianti → si rimuove (nessuna scheda/trasporto).
    if (!mov.varianti.length) {
      g.movimentazioni = g.movimentazioni.filter(m => m.mov_key !== movKey);
    }
    _c6Rerender(fieldId);
    saveChapterDraft();
  }

  /* ── Capitolo 10 — Rumore ───────────────────────────────────────────── */

  const C10_FONOMETRI = [
    { id: 'MARCHE',     label: 'Fonometro MARCHE',                                classe: 'I' },
    { id: 'LIGURIA',    label: 'Fonometro LIGURIA',                               classe: 'I' },
    { id: 'DI_GIACOMO', label: 'Fonometro Alessandro Di Giacomo',                 classe: 'I' },
    { id: 'VINCENZO',   label: 'Fonometro Vincenzo Olivieri e Francesco Brocato', classe: 'II' },
    { id: 'BALLOTTO',   label: 'Fonometro Giovanni Ballotto',                      classe: 'I' },
    { id: 'MAIOLATI',   label: 'Fonometro Letizia Maiolati',                       classe: 'I' },
    { id: 'SCIALANCA',  label: 'Fonometro Alessandro Scialanca',                   classe: 'I' },
  ];

  // NB: allineate 1:1 alle 12 righe della tabella "8. Misure di prevenzione"
  // del template 10_Rumore.doc, nello stesso ordine (r0..r11).
  const C10_PRESCRIZIONI = [
    ['metodi_lavoro',          'Adozione di altri metodi di lavoro che implicano una minore esposizione al rumore'],
    ['organizzazione',         'Riduzione del rumore mediante una migliore organizzazione del lavoro'],
    ['attrezzature_adeguate',  'Scelta di attrezzature di lavoro adeguate, tenuto conto del lavoro da svolgere'],
    ['attrezzature_specifiche','Impiego esclusivo di attrezzature adatte alla tipologia di lavoro'],
    ['luoghi_adeguati',        'Struttura e luoghi di lavoro resi adeguati alla tipologia di attività'],
    ['informazione_formazione','Informazione e formazione dei lavoratori sul corretto utilizzo delle attrezzature'],
    ['misure_tecniche',        'Predisposizione di misure tecniche per il contenimento del rumore'],
    ['delimitazione_aree',     'Delimitazione delle aree di lavoro con accesso ai soli autorizzati'],
    ['aree_riposo',            'Posizionamento delle aree di riposo lontano dalle attività rumorose'],
    ['sorveglianza_sanitaria', 'Attivazione o revisione della sorveglianza sanitaria'],
    ['riesame_valutazione',    'Riesame della valutazione del rischio ad ogni nuovo macchinario/lavorazione'],
    ['piano_pare',             'Redazione di un piano PARE (Programma Aziendale per la Riduzione dell\'Esposizione)'],
  ];

  function _c10DefaultGruppo(id, nome, attrDisponibili) {
    return {
      id, nome: nome || `Gruppo ${id}`,
      sostanze_ototossiche: false, vibrazioni: false,
      descrizione_attivita: '', rif_ambiente: String(id), rif_fase: String(id),
      ore_lavoro_gg: 8,
      attrezzature_selezionate: [],
      postazioni: [],
    };
  }

  function _c10DefaultPostazione(num) {
    return {
      numero: num,
      condizione_misura: '',
      sorgenti_rumore: [{ nome: '', m1: '', m2: '', m3: '' }],
      lavoratori_esposti: [{ gruppo: '', Tm_j: 480 }],
      misure: [
        { LAeq: '', LCeq: '', Lpicco: '' },
        { LAeq: '', LCeq: '', Lpicco: '' },
        { LAeq: '', LCeq: '', Lpicco: '' },
      ],
    };
  }

  function _c10EnergyAvg(vals) {
    const valid = vals.map(v => parseFloat(v)).filter(v => !isNaN(v) && v > 0);
    if (!valid.length) return null;
    const sum = valid.reduce((a, v) => a + Math.pow(10, v / 10), 0);
    return 10 * Math.log10(sum / valid.length);
  }

  function initCap10Editor(fieldId, data) {
    const gruppi = Array.isArray(data && data.gruppi_omogenei) ? data.gruppi_omogenei : [];
    const prescrizioni = (data && data.prescrizioni) || {};
    const attDisp = (data && Array.isArray(data.attrezzature_disponibili)) ? data.attrezzature_disponibili : [];
    const defaultPrescrizioni = {};
    C10_PRESCRIZIONI.forEach(([k]) => { defaultPrescrizioni[k] = false; });
    state.formValues[fieldId] = {
      fonometro_tipo: (data && data.fonometro_tipo) || '',
      attrezzature_disponibili: attDisp,
      gruppi_omogenei: gruppi.length ? gruppi : [_c10DefaultGruppo(1, '', attDisp)],
      prescrizioni: Object.assign({}, defaultPrescrizioni, prescrizioni),
    };
  }

  function _c10Rebuild(fieldId, keepOpenGi = 0) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap10Editor(fieldId, state.formValues[fieldId]);
    setTimeout(() => {
      outer?.querySelectorAll('select:not(.csel-hidden)').forEach(wrapSelectCustom);
      if (keepOpenGi > 0) toggleC10Gruppo(fieldId, keepOpenGi);
    }, 0);
    saveChapterDraft();
  }

  function buildCap10Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || {};
    const fonId = ed.fonometro_tipo || '';
    const fonObj = C10_FONOMETRI.find(f => f.id === fonId);
    const attDisp = ed.attrezzature_disponibili || [];
    const gruppi = ed.gruppi_omogenei || [];
    const prescrizioni = ed.prescrizioni || {};

    const optsFon = C10_FONOMETRI.map(f =>
      `<option value="${f.id}"${f.id === fonId ? ' selected' : ''}>${escHtml(f.label)} (Classe ${f.classe})</option>`
    ).join('');

    const classeInfo = fonObj
      ? `<span class="c10-classe c10-classe-${fonObj.classe}">Strumentazione di Classe ${fonObj.classe} (${fonObj.classe === 'II' ? 'IEC 651/79 e 804/85' : 'IEC 651/79 e 804/85 — precisione'})</span>`
      : '';

    const gruppiHtml = gruppi.map((g, gi) => _c10GruppoHtml(fieldId, gi, g, attDisp)).join('');

    const prescHtml = C10_PRESCRIZIONI.map(([key, label]) => `
      <label class="c10-presc-row">
        <input type="checkbox" class="c10-presc-cb" ${prescrizioni[key] ? 'checked' : ''}
          onchange="App.onC10Prescrizione('${fieldId}','${key}',this.checked)">
        <span>${escHtml(label)}</span>
      </label>`).join('');

    return `<div class="c10-editor" id="c10-editor-${fieldId}">
      <div class="c10-help">
        <div class="c10-help-title">${ic('info', 15)} Come si compila questo capitolo</div>
        <p class="c10-help-text">Qui valuti l'esposizione al rumore dei lavoratori. Segui i 3 passaggi qui sotto, in ordine:</p>
        <ol class="c10-help-steps">
          <li><b>Strumento</b> — scegli il fonometro usato per le misure.</li>
          <li><b>Gruppi esposti</b> — per ogni gruppo di lavoratori indica le attrezzature rumorose e aggiungi le <b>postazioni di misura</b> con i valori del fonometro (LAeq, Lpicco) e i lavoratori esposti.</li>
          <li><b>Prescrizioni</b> — spunta le misure di riduzione del rischio adottate.</li>
        </ol>
      </div>

      <div class="c10-section">
        <div class="c10-section-hdr"><span class="c10-step">1</span> Strumento di misura</div>
        <div class="c10-section-desc">Seleziona il fonometro con cui sono state eseguite le misurazioni.</div>
        <div class="c10-row">
          <label class="c10-lbl">Fonometro utilizzato</label>
          <select class="c10-sel" onchange="App.onC10Fonometro('${fieldId}',this.value)">
            <option value="">— Seleziona fonometro —</option>
            ${optsFon}
          </select>
        </div>
        ${classeInfo}
      </div>

      <div class="c10-section">
        <div class="c10-section-hdr"><span class="c10-step">2</span> Gruppi omogenei esposti al rumore</div>
        <div class="c10-section-desc">Un gruppo per ogni insieme di lavoratori con la stessa esposizione. Clicca su un gruppo per aprirlo e inserire attrezzature, postazioni di misura e lavoratori esposti.</div>
        ${gruppiHtml || `<div class="c10-empty-hint">Nessun gruppo. Aggiungine uno per iniziare.</div>`}
        <button class="c10-add-btn" onclick="App.onC10AddGruppo('${fieldId}')">${ic('plus', 13)} Aggiungi gruppo omogeneo</button>
      </div>

      <div class="c10-section">
        <div class="c10-section-hdr"><span class="c10-step">3</span> Prescrizioni e misure di riduzione</div>
        <div class="c10-section-desc">Spunta le misure di prevenzione e protezione adottate per ridurre il rischio rumore.</div>
        <div class="c10-prescrizioni">
          ${prescHtml}
        </div>
      </div>
    </div>`;
  }

  function _c10GruppoHtml(fieldId, gi, g, attDisp) {
    // Elenca le attrezzature DEL gruppo (non quelle di tutti i gruppi): fix
    // associazione attrezzature↔gruppo (feedback 2026-10-15). Fallback alla
    // lista globale solo se il gruppo non porta la propria.
    const attList = (Array.isArray(g.attrezzature) && g.attrezzature.length)
      ? g.attrezzature : attDisp;
    const attChecks = attList.map(a => {
      const sel = g.attrezzature_selezionate && g.attrezzature_selezionate.includes(a);
      return `<label class="c10-att-row">
        <input type="checkbox" ${sel ? 'checked' : ''}
          onchange="App.onC10AttSel('${fieldId}',${gi},'${escHtml(a).replace(/'/g,"\\'")}',this.checked)">
        <span>${escHtml(a)}</span>
      </label>`;
    }).join('');

    const postazioniHtml = (g.postazioni || []).map((p, pi) =>
      _c10PostazioneHtml(fieldId, gi, pi, p)
    ).join('');

    return `<div class="c10-gruppo" id="c10-g-${fieldId}-${gi}">
      <div class="c10-gruppo-hdr" onclick="App.toggleC10Gruppo('${fieldId}',${gi})">
        <span class="c10-gruppo-n">Gruppo omogeneo ${gi + 1}${g.nome ? ' — ' + escHtml(g.nome) : ''}</span>
        <span class="c10-toggle-icon">${ic(gi === 0 ? 'chevron_up' : 'chevron_down', 13)}</span>
        <button class="c10-rm-btn" onclick="event.stopPropagation();App.onC10RemoveGruppo('${fieldId}',${gi})" title="Rimuovi gruppo">✕</button>
      </div>

      <div class="c10-gruppo-body${gi === 0 ? ' open' : ''}">
      <div class="c10-grid2">
        <div class="c10-field-row">
          <label class="c10-lbl">Nome gruppo</label>
          <input class="c10-inp" type="text" value="${escHtml(g.nome || '')}"
            onchange="App.onC10GruppoField('${fieldId}',${gi},'nome',this.value)"
            placeholder="es. Operai produzione">
        </div>
        <div class="c10-field-row">
          <label class="c10-lbl">Ore lavoro / giorno</label>
          <input class="c10-num" type="number" step="0.5" min="1" max="12" value="${g.ore_lavoro_gg || 8}"
            onchange="App.onC10GruppoField('${fieldId}',${gi},'ore_lavoro_gg',parseFloat(this.value)||8)">
        </div>
        <div class="c10-field-row">
          <label class="c10-lbl">Rif. ambiente</label>
          <input class="c10-inp-sm" type="text" value="${escHtml(g.rif_ambiente || '')}"
            onchange="App.onC10GruppoField('${fieldId}',${gi},'rif_ambiente',this.value)">
        </div>
        <div class="c10-field-row">
          <label class="c10-lbl">Rif. fase</label>
          <input class="c10-inp-sm" type="text" value="${escHtml(g.rif_fase || '')}"
            onchange="App.onC10GruppoField('${fieldId}',${gi},'rif_fase',this.value)">
        </div>
      </div>

      <div class="c10-sn-row">
        <span class="c10-sn-lbl">Sostanze ototossiche</span>
        <button class="c10-sn-btn${g.sostanze_ototossiche ? ' c10-sn-active' : ''}"
          onclick="App.onC10GruppoField('${fieldId}',${gi},'sostanze_ototossiche',true)">Sì</button>
        <button class="c10-sn-btn${!g.sostanze_ototossiche ? ' c10-sn-active' : ''}"
          onclick="App.onC10GruppoField('${fieldId}',${gi},'sostanze_ototossiche',false)">No</button>
      </div>
      <div class="c10-sn-row">
        <span class="c10-sn-lbl">Esposizione a vibrazioni</span>
        <button class="c10-sn-btn${g.vibrazioni ? ' c10-sn-active' : ''}"
          onclick="App.onC10GruppoField('${fieldId}',${gi},'vibrazioni',true)">Sì</button>
        <button class="c10-sn-btn${!g.vibrazioni ? ' c10-sn-active' : ''}"
          onclick="App.onC10GruppoField('${fieldId}',${gi},'vibrazioni',false)">No</button>
      </div>

      <div class="c10-field-row c10-full">
        <label class="c10-lbl">Descrizione attività</label>
        <textarea class="c10-textarea" rows="2"
          onchange="App.onC10GruppoField('${fieldId}',${gi},'descrizione_attivita',this.value)"
          placeholder="Descrivere le attività lavorative svolte...">${escHtml(g.descrizione_attivita || '')}</textarea>
      </div>

      ${attList.length ? `<div class="c10-att-section">
        <div class="c10-subsec-hdr">Attrezzature rumorose usate dal gruppo</div>
        <div class="c10-subsec-desc">Spunta le attrezzature rumorose effettivamente utilizzate da questo gruppo.</div>
        <div class="c10-att-grid">${attChecks}</div>
      </div>` : ''}

      <div class="c10-postazioni-section">
        <div class="c10-subsec-hdr">Postazioni di misura</div>
        <div class="c10-subsec-desc">Ogni postazione è un punto/condizione in cui hai misurato il rumore: inserisci i valori letti dal fonometro e i lavoratori esposti.</div>
        ${postazioniHtml || `<div class="c10-empty-hint">Nessuna postazione. Aggiungine una per inserire i valori fonometrici.</div>`}
        <button class="c10-add-sm-btn" onclick="App.onC10AddPostazione('${fieldId}',${gi})">${ic('plus', 12)} Aggiungi postazione di misura</button>
      </div>
      </div>
    </div>`;
  }

  function _c10PostazioneHtml(fieldId, gi, pi, p) {
    const misure = p.misure || [{},{},{}];

    const misureRows = [0, 1, 2].map(mi => {
      const m = misure[mi] || {};
      return `<tr>
        <td class="c10-td-center">Misura ${mi + 1}</td>
        <td><input class="c10-meas" type="number" step="0.1" value="${m.LAeq !== undefined && m.LAeq !== '' ? m.LAeq : ''}"
          onchange="App.onC10Misura('${fieldId}',${gi},${pi},${mi},'LAeq',this.value)"
          placeholder="—"></td>
        <td><input class="c10-meas" type="number" step="0.1" value="${m.LCeq !== undefined && m.LCeq !== '' ? m.LCeq : ''}"
          onchange="App.onC10Misura('${fieldId}',${gi},${pi},${mi},'LCeq',this.value)"
          placeholder="—"></td>
        <td><input class="c10-meas" type="number" step="0.1" value="${m.Lpicco !== undefined && m.Lpicco !== '' ? m.Lpicco : ''}"
          onchange="App.onC10Misura('${fieldId}',${gi},${pi},${mi},'Lpicco',this.value)"
          placeholder="—"></td>
      </tr>`;
    }).join('');

    const laeqs  = misure.map(m => m.LAeq);
    const lceqs  = misure.map(m => m.LCeq);
    const lpicos = misure.map(m => m.Lpicco);
    const laeq_m  = _c10EnergyAvg(laeqs);
    const lceq_m  = _c10EnergyAvg(lceqs);
    const lpico_m = Math.max(...lpicos.map(v => parseFloat(v)).filter(v => !isNaN(v) && v > 0), 0) || null;
    const fmt = v => v !== null && !isNaN(v) && v > 0 ? v.toFixed(1) : '—';

    const sorgenti = p.sorgenti_rumore || [{ nome: '', m1: '', m2: '', m3: '' }];
    const sorgentiHtml = sorgenti.map((s, si) => `
      <div class="c10-sorgente-row">
        <input class="c10-inp" type="text" value="${escHtml(s.nome || '')}"
          onchange="App.onC10Sorgente('${fieldId}',${gi},${pi},${si},'nome',this.value)"
          placeholder="Nome sorgente (es. Fresatrice)">
        <input class="c10-inp-sm" type="text" value="${escHtml(s.m1 || '')}"
          onchange="App.onC10Sorgente('${fieldId}',${gi},${pi},${si},'m1',this.value)"
          placeholder="Misura 1 — condiz.">
        <input class="c10-inp-sm" type="text" value="${escHtml(s.m2 || '')}"
          onchange="App.onC10Sorgente('${fieldId}',${gi},${pi},${si},'m2',this.value)"
          placeholder="Misura 2 — condiz.">
        <input class="c10-inp-sm" type="text" value="${escHtml(s.m3 || '')}"
          onchange="App.onC10Sorgente('${fieldId}',${gi},${pi},${si},'m3',this.value)"
          placeholder="Misura 3 — condiz.">
        <button class="c10-rm-inline" onclick="App.onC10RemoveSorgente('${fieldId}',${gi},${pi},${si})" title="Rimuovi">✕</button>
      </div>`).join('');

    const lavRows = (p.lavoratori_esposti || []).map((lav, li) => `
      <tr>
        <td>${_groupSelectHtml(lav.gruppo,
          `App.onC10Lavoratore('${fieldId}',${gi},${pi},${li},'gruppo',this.value)`,
          'Gruppo esposto', 'c10-inp')}</td>
        <td><input class="c10-meas" type="number" step="1" value="${lav.Tm_j || ''}"
          onchange="App.onC10Lavoratore('${fieldId}',${gi},${pi},${li},'Tm_j',this.value)"
          placeholder="min"></td>
        <td><button class="c10-rm-inline" onclick="App.onC10RemoveLav('${fieldId}',${gi},${pi},${li})">✕</button></td>
      </tr>`).join('');

    return `<div class="c10-postazione" id="c10-p-${fieldId}-${gi}-${pi}">
      <div class="c10-post-hdr">
        <span>Postazione ${pi + 1}</span>
        <button class="c10-rm-btn" onclick="App.onC10RemovePostazione('${fieldId}',${gi},${pi})">✕</button>
      </div>

      <div class="c10-field-row">
        <label class="c10-lbl">Condizione di misura</label>
        <input class="c10-inp c10-full-w" type="text" value="${escHtml(p.condizione_misura || '')}"
          onchange="App.onC10PostazioneField('${fieldId}',${gi},${pi},'condizione_misura',this.value)"
          placeholder="es. Normale operatività">
      </div>

      <div class="c10-subsec-hdr c10-mt">Sorgenti di rumore</div>
      <div class="c10-subsec-desc">Le macchine/attività che generano rumore in questa postazione.</div>
      ${sorgentiHtml}
      <button class="c10-add-xs-btn" onclick="App.onC10AddSorgente('${fieldId}',${gi},${pi})">${ic('plus', 11)} Aggiungi sorgente</button>

      <div class="c10-subsec-hdr c10-mt">Misure acustiche</div>
      <div class="c10-subsec-desc">Inserisci i valori letti dal fonometro (fino a 3 rilievi). L<sub>Aeq</sub> = livello medio, L<sub>picco</sub> = picco massimo. La media è calcolata da sola.</div>
      <table class="c10-meas-table">
        <thead><tr>
          <th></th><th>L<sub>Aeq,mi</sub> [dBA]</th>
          <th>L<sub>Ceq,mi</sub> [dBC]</th>
          <th>L<sub>picco,mi</sub> [dBC]</th>
        </tr></thead>
        <tbody>
          ${misureRows}
          <tr class="c10-avg-row">
            <td class="c10-td-center c10-avg-lbl">Media (auto)</td>
            <td class="c10-avg-val">${fmt(laeq_m)}</td>
            <td class="c10-avg-val">${fmt(lceq_m)}</td>
            <td class="c10-avg-val">${fmt(lpico_m)}</td>
          </tr>
        </tbody>
      </table>

      <div class="c10-subsec-hdr c10-mt">Lavoratori esposti</div>
      <div class="c10-subsec-desc">Chi lavora in questa postazione e per quanti minuti al giorno (T<sub>m,j</sub>).</div>
      <table class="c10-lav-table">
        <thead><tr><th>Gruppo omogeneo</th><th>Minuti/giorno (T<sub>m,j</sub>)</th><th></th></tr></thead>
        <tbody>
          ${lavRows || `<tr><td colspan="3" class="c10-empty-hint">Nessun lavoratore. Aggiungine uno.</td></tr>`}
        </tbody>
      </table>
      <button class="c10-add-xs-btn" onclick="App.onC10AddLavoratore('${fieldId}',${gi},${pi})">${ic('plus', 11)} Aggiungi lavoratore esposto</button>
    </div>`;
  }

  /* ── Event handlers cap10 ────────────────────────────────────────────── */

  function onC10Fonometro(fieldId, val) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    ed.fonometro_tipo = val;
    _c10Rebuild(fieldId);
  }

  function onC10GruppoField(fieldId, gi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    g[key] = value;
    const rebuild = (key === 'sostanze_ototossiche' || key === 'vibrazioni');
    if (rebuild) _c10Rebuild(fieldId, gi); else saveChapterDraft();
  }

  function onC10AttSel(fieldId, gi, nome, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!Array.isArray(g.attrezzature_selezionate)) g.attrezzature_selezionate = [];
    if (checked) { if (!g.attrezzature_selezionate.includes(nome)) g.attrezzature_selezionate.push(nome); }
    else g.attrezzature_selezionate = g.attrezzature_selezionate.filter(a => a !== nome);
    saveChapterDraft();
  }

  function onC10AddGruppo(fieldId) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const id = (ed.gruppi_omogenei.length || 0) + 1;
    ed.gruppi_omogenei.push(_c10DefaultGruppo(id, '', ed.attrezzature_disponibili || []));
    _c10Rebuild(fieldId, ed.gruppi_omogenei.length - 1);
  }

  function onC10RemoveGruppo(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    if (ed.gruppi_omogenei.length <= 1) return;
    ed.gruppi_omogenei.splice(gi, 1);
    ed.gruppi_omogenei.forEach((g, i) => { g.id = i + 1; });
    _c10Rebuild(fieldId);
  }

  function onC10AddPostazione(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!Array.isArray(g.postazioni)) g.postazioni = [];
    g.postazioni.push(_c10DefaultPostazione(g.postazioni.length + 1));
    _c10Rebuild(fieldId, gi);
  }

  function onC10RemovePostazione(fieldId, gi, pi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    g.postazioni.splice(pi, 1);
    g.postazioni.forEach((p, i) => { p.numero = i + 1; });
    _c10Rebuild(fieldId, gi);
  }

  function onC10PostazioneField(fieldId, gi, pi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = (ed.gruppi_omogenei[gi] || {}).postazioni && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    p[key] = value;
    saveChapterDraft();
  }

  function onC10Misura(fieldId, gi, pi, mi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    if (!Array.isArray(p.misure)) p.misure = [{},{},{}];
    if (!p.misure[mi]) p.misure[mi] = {};
    p.misure[mi][key] = value === '' ? '' : parseFloat(value) || '';
    _c10Rebuild(fieldId, gi);
  }

  function onC10Sorgente(fieldId, gi, pi, si, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    if (!Array.isArray(p.sorgenti_rumore)) p.sorgenti_rumore = [];
    if (!p.sorgenti_rumore[si]) p.sorgenti_rumore[si] = {};
    p.sorgenti_rumore[si][key] = value;
    saveChapterDraft();
  }

  function onC10AddSorgente(fieldId, gi, pi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    if (!Array.isArray(p.sorgenti_rumore)) p.sorgenti_rumore = [];
    p.sorgenti_rumore.push({ nome: '', m1: '', m2: '', m3: '' });
    _c10Rebuild(fieldId, gi);
  }

  function onC10RemoveSorgente(fieldId, gi, pi, si) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p || !p.sorgenti_rumore || p.sorgenti_rumore.length <= 1) return;
    p.sorgenti_rumore.splice(si, 1);
    _c10Rebuild(fieldId, gi);
  }

  function onC10Lavoratore(fieldId, gi, pi, li, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    if (!Array.isArray(p.lavoratori_esposti)) p.lavoratori_esposti = [];
    if (!p.lavoratori_esposti[li]) p.lavoratori_esposti[li] = {};
    p.lavoratori_esposti[li][key] = key === 'Tm_j' ? (parseFloat(value) || 0) : value;
    saveChapterDraft();
  }

  function onC10AddLavoratore(fieldId, gi, pi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p) return;
    if (!Array.isArray(p.lavoratori_esposti)) p.lavoratori_esposti = [];
    p.lavoratori_esposti.push({ gruppo: '', Tm_j: 480 });
    _c10Rebuild(fieldId, gi);
  }

  function onC10RemoveLav(fieldId, gi, pi, li) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const p = ed.gruppi_omogenei[gi] && ed.gruppi_omogenei[gi].postazioni[pi];
    if (!p || !p.lavoratori_esposti || p.lavoratori_esposti.length <= 1) return;
    p.lavoratori_esposti.splice(li, 1);
    _c10Rebuild(fieldId, gi);
  }

  function onC10Prescrizione(fieldId, key, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    if (!ed.prescrizioni) ed.prescrizioni = {};
    ed.prescrizioni[key] = checked;
    saveChapterDraft();
  }

  function toggleC10Gruppo(fieldId, gi) {
    document.querySelectorAll(`#c10-editor-${fieldId} .c10-gruppo`).forEach((g, idx) => {
      if (idx !== gi) {
        g.querySelector('.c10-gruppo-body')?.classList.remove('open');
        const icon = g.querySelector('.c10-toggle-icon');
        if (icon) icon.innerHTML = ic('chevron_down', 13);
      }
    });
    const body = document.querySelector(`#c10-g-${fieldId}-${gi} .c10-gruppo-body`);
    if (!body) return;
    const isOpen = body.classList.toggle('open');
    const icon = document.querySelector(`#c10-g-${fieldId}-${gi} .c10-toggle-icon`);
    if (icon) icon.innerHTML = ic(isOpen ? 'chevron_up' : 'chevron_down', 13);
  }

  /* ── Cap7 — Movimenti Ripetitivi (OCRA) ────────────────────────────── */


  function initCap7Editor(fieldId, data) {
    // Nuovo modello: per ogni gruppo omogeneo il tecnico sceglie le schede
    // (attività) dal catalogo MODELLI MOVIMENTI RIPETUTI (≥1 per gruppo).
    // Lista gruppi SEMPRE dal JSON vivo (self-healing); le schede scelte dal
    // tecnico si conservano per nome gruppo. Evita il falso "Nessun gruppo".
    const gruppi = _mergeGruppiFromJson(data, 'schede', 'mr', 'movimenti_ripetitivi');
    state.formValues[fieldId] = { gruppi };
    if (!Array.isArray(state.mvrCatalog) || !state.mvrCatalog.length) {
      state.mvrCatalog = [];
      call('get_mvr_catalog').then(cat => {
        state.mvrCatalog = Array.isArray(cat) ? cat : [];
        _c7Rerender(fieldId);
      }).catch(() => { state.mvrCatalog = []; _c7Rerender(fieldId); });
    }
  }

  function _c7Rerender(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap7Editor(fieldId, state.formValues[fieldId]);
  }

  function buildCap7Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || { gruppi: [] };
    const gruppi = ed.gruppi || [];
    const cat = state.mvrCatalog;

    if (!Array.isArray(cat)) {
      return `<div class="c6-editor"><div class="c6-empty">Caricamento catalogo schede…</div></div>`;
    }
    if (!cat.length) {
      return `<div class="c6-editor"><div class="c6-empty">Catalogo schede non trovato nella cartella dei modelli (sottocartella <code>MODELLI MOVIMENTI RIPETUTI/</code>). Controlla la cartella dei template.</div></div>`;
    }
    if (!gruppi.length) {
      return `<div class="c6-editor"><div class="c6-empty">Nessun gruppo omogeneo nel JSON del cliente: non è possibile assegnare le schede.</div></div>`;
    }

    const tot = gruppi.reduce((a, g) => a + (g.schede || []).length, 0);
    return `<div class="c6-editor" id="c7-editor-${fieldId}">
      <div class="c6-intro">Apri ogni <b>gruppo omogeneo</b>: sotto trovi le <b>informazioni scritte dal tecnico esterno</b> (mansione, attività, addetti e i movimenti ripetitivi valutati) per aiutarti a scegliere. In base a queste, seleziona le <b>schede</b> (attività) dei movimenti ripetitivi svolti. Ogni scheda scelta viene riportata integralmente nel capitolo con il proprio foglio di calcolo OCRA; il software compila solo <b>numero scheda</b> e <b>gruppo omogeneo</b>. Ogni gruppo può avere più schede.</div>
      ${gruppi.map((g, gi) => _buildC7Gruppo(fieldId, gi, g, cat)).join('')}
      <div class="c6-tot">Totale: <b>${tot}</b> scheda/e selezionata/e</div>
    </div>`;
  }

  function _buildC7Gruppo(fieldId, gi, g, cat) {
    const sel = g.schede || [];
    const open = sel.length > 0 ? ' open' : '';
    return `<details class="c6-gruppo"${open}>
      <summary class="c6-gruppo-hdr">
        <span class="c6-gruppo-tit"><b>Gruppo ${g.numero}</b> — ${escHtml(g.nome || '')}</span>
        <span class="c6-gruppo-badge${sel.length ? ' on' : ''}">${sel.length} scheda/e</span>
      </summary>
      ${_c7InfoPanel(g)}
      <div class="c6-mov-hdr">Seleziona le schede (attività) dei movimenti ripetitivi svolti</div>
      <div class="c6-mov-list">
        ${cat.map(s => {
          const on = sel.includes(s.key);
          return `<div class="c6-mov-row${on ? ' active' : ''}">
            <div class="c6-mov-name">${escHtml(s.nome)}</div>
            <div class="c6-mov-vars">
              <button type="button" class="c6-var-chip${on ? ' on' : ''}"
                onclick="App.onC7SchedaToggle('${fieldId}',${gi},'${escAttr(s.key)}')">${on ? 'Inclusa' : 'Includi'}</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </details>`;
  }

  function onC7SchedaToggle(fieldId, gi, key) {
    const ed = state.formValues[fieldId];
    if (!ed || !ed.gruppi || !ed.gruppi[gi]) return;
    const g = ed.gruppi[gi];
    if (!Array.isArray(g.schede)) g.schede = [];
    const i = g.schede.indexOf(key);
    if (i >= 0) g.schede.splice(i, 1);
    else g.schede.push(key);
    _c7Rerender(fieldId);
    saveChapterDraft();
  }

  /* ── Cap17 — Agenti Biologici ───────────────────────────────────────── */
  const C17_SETTORI = [
    ['ALBERGHI',                                                        'Alberghi'],
    ['AMBULATORIO MEDICO',                                              'Ambulatorio medico'],
    ['ASILI',                                                           'Asili e strutture per l\'infanzia'],
    ['ATTIVITA\' AGRICOLE E DI GIARDINAGGIO',                          'Attività agricole e di giardinaggio'],
    ['ATTIVITA\' FORESTALI',                                            'Attività forestali'],
    ['AUTOFFICINE-METALMECCANICA E SIMILI',                             'Autofficine / Metalmeccanica e simili'],
    ['AUTOLAVAGGIO',                                                    'Autolavaggio'],
    ['AZIENDA AGRICOLA CON ALLEVAMENTO',                                'Azienda agricola con allevamento'],
    ['CENTRI BENESSERE (estetiste, parruchieri)',                        'Centri benessere (estetiste, parrucchieri)'],
    ['EDILIZIA',                                                        'Edilizia'],
    ['FALEGNAMERIE',                                                    'Falegnamerie'],
    ['IMPRESA DI PULIZIA E DISINFEZIONE',                               'Impresa di pulizia e disinfezione'],
    ['ITTICI',                                                          'Attività ittiche'],
    ['OSPEDALI E CASE DI CURA',                                         'Ospedali e case di cura'],
    ['rev.1_FARMACIE vaccinazioni-tamponi e taglio e punture',          'Farmacie (vaccinazioni, tamponi, taglio e punture)'],
    ['RISTORANTI E SIMILI',                                             'Ristoranti e simili'],
    ['STABILIMENTO BALNEARE CON RISTORANTE',                            'Stabilimento balneare con ristorante'],
    ['UFFICI',                                                          'Uffici e attività amministrative'],
  ];

  function initCap17Editor(fieldId, data) {
    state.formValues[fieldId] = {
      tipo_attivita: (data && data.tipo_attivita) || '',
    };
  }

  function _c17Rebuild(fieldId) {
    const wrap = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (wrap) wrap.innerHTML = buildCap17Editor(fieldId, state.formValues[fieldId]);
    saveChapterDraft();
  }

  function buildCap17Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || {};
    const tipo = ed.tipo_attivita || '';
    const settoreOpts = C17_SETTORI.map(([k, label]) =>
      `<option value="${escHtml(k)}"${tipo === k ? ' selected' : ''}>${escHtml(label)}</option>`
    ).join('');
    const badge = tipo
      ? `<span class="c17-tpl-badge">📄 17_Agenti biologici_${escHtml(tipo)}.doc</span>`
      : '';
    return `
    <div class="c17-editor">
      <div class="c17-section">
        <div class="c17-section-hdr">Tipo di attività aziendale</div>
        <div class="c17-section-body">
          <select class="c17-settore-sel" data-searchable="1" onchange="App.onC17Settore('${fieldId}',this.value)">
            <option value="">— Seleziona il settore di attività —</option>
            ${settoreOpts}
          </select>
          ${badge}
        </div>
      </div>
    </div>`;
  }

  function onC17Settore(fieldId, val) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    ed.tipo_attivita = val;
    _c17Rebuild(fieldId);
  }

  /* ── Cap21 — Stress Lavoro Correlato ────────────────────────────────── */
  const C21_SETTORI = [
    ['ALBERGHI',              'Alberghi e strutture ricettive'],
    ['EDILIZIA',              'Edilizia'],
    ['ESTETISTA',             'Estetica e benessere'],
    ['FALEGNAMERIA',          'Falegnameria e lavorazione legno'],
    ['IMPRESA DI PULIZIA',    'Impresa di pulizia'],
    ['MACELLERIE',            'Macellerie e gastronomia'],
    ['MANUTENZIONE DEL VERDE','Manutenzione del verde'],
    ['METALMECCANICA',        'Metalmeccanica e carpenteria'],
    ['NEGOZIO',               'Negozio / commercio al dettaglio'],
    ['OFFICINA',              'Officina meccanica'],
    ['PARRUCCHIERI',          'Parrucchieri e barbieri'],
    ['PASTICCERIA',           'Pasticceria e panificazione'],
    ['RISTORANTI E BAR',      'Ristoranti e bar'],
    ['UFFICI',                'Uffici e attività amministrative'],
  ];

  function _c21DefaultGruppo(id, nome) {
    return { id, nome: nome || `Gruppo ${id}`, orig_ids: [id] };
  }

  function initCap21Editor(fieldId, data) {
    const gruppi = Array.isArray(data && data.gruppi) ? data.gruppi : [];
    state.formValues[fieldId] = {
      tipo_attivita: (data && data.tipo_attivita) || '',
      gruppi: gruppi.length ? gruppi : [_c21DefaultGruppo(1, '')],
      data_audit: (data && data.data_audit) || '',
      data_dvr:   (data && data.data_dvr)   || '',
      _mergeChecked: {},
    };
  }

  function _c21Rebuild(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap21Editor(fieldId, state.formValues[fieldId]);
    setTimeout(() => outer?.querySelectorAll('select:not(.csel-hidden)').forEach(wrapSelectCustom), 0);
    saveChapterDraft();
  }

  function buildCap21Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || {};
    const tipo = ed.tipo_attivita || '';
    const gruppi = ed.gruppi || [];

    const settoreOpts = C21_SETTORI.map(([k, label]) =>
      `<option value="${k}" ${tipo === k ? 'selected' : ''}>${escHtml(label)}</option>`
    ).join('');

    // Accorpamento gruppi rimosso: ogni gruppo omogeneo resta separato.
    const gruppiHtml = gruppi.map((g, gi) => {
      return `<div class="c21-gruppo-row">
        <span class="c21-gruppo-n">${g.id}.</span>
        <input class="c21-nome-inp" type="text" value="${escHtml(g.nome || '')}"
          onchange="App.onC21GruppoNome('${fieldId}',${gi},this.value)"
          placeholder="Nome gruppo omogeneo">
      </div>`;
    }).join('');

    return `<div class="c21-editor" id="c21-editor-${fieldId}">
      <div class="c21-section">
        <div class="c21-section-hdr">Tipo di attività aziendale</div>
        <div class="c21-section-body">
          <select class="c21-settore-sel" onchange="App.onC21Settore('${fieldId}',this.value)">
            <option value="">— Seleziona il settore di attività —</option>
            ${settoreOpts}
          </select>
          ${tipo ? `<span class="c21-tpl-badge">Template: ${escHtml(tipo)}</span>` : ''}
        </div>
      </div>

      <div class="c21-section">
        <div class="c21-section-hdr">Gruppi omogenei esposti</div>
        <div class="c21-section-body">
          <div class="c21-gruppi-list">${gruppiHtml}</div>
        </div>
      </div>

      <div class="c21-section">
        <div class="c21-section-hdr">Date verbali</div>
        <div class="c21-section-body">
          <div class="c21-date-row">
            <label class="c21-lbl">Data audit (fase propedeutica)</label>
            <input class="c21-date-inp" type="date" value="${escHtml(ed.data_audit || '')}"
              onchange="App.onC21DataField('${fieldId}','data_audit',this.value)">
          </div>
          <div class="c21-date-row">
            <label class="c21-lbl">Data DVR (verbale informazione)</label>
            <input class="c21-date-inp" type="date" value="${escHtml(ed.data_dvr || '')}"
              onchange="App.onC21DataField('${fieldId}','data_dvr',this.value)">
          </div>
        </div>
      </div>
    </div>`;
  }

  function onC21Settore(fieldId, val) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    ed.tipo_attivita = val;
    _c21Rebuild(fieldId);
  }

  function onC21GruppoNome(fieldId, gi, val) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi[gi]; if (!g) return;
    g.nome = val;
    saveChapterDraft();
  }

  function onC21MergeCheck(fieldId, gi, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    if (!ed._mergeChecked) ed._mergeChecked = {};
    ed._mergeChecked[gi] = checked;
    _c21Rebuild(fieldId);
  }

  function onC21AccorpaSubmit(fieldId, nomeNuovo) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const nome = (nomeNuovo || '').trim();
    if (!nome) { toast('Inserisci un nome per il gruppo accorpato', 'error'); return; }

    const checked = ed._mergeChecked || {};
    const indices = ed.gruppi
      .map((_, gi) => gi)
      .filter(gi => checked[gi] && !(ed.gruppi[gi].orig_ids && ed.gruppi[gi].orig_ids.length > 1));

    if (indices.length < 2) { toast('Seleziona almeno 2 gruppi non già accorpati', 'error'); return; }

    const origIds = indices.flatMap(gi => ed.gruppi[gi].orig_ids || [ed.gruppi[gi].id]);
    const merged = { id: ed.gruppi[indices[0]].id, nome, orig_ids: origIds };

    // Rimuovi i gruppi selezionati e inserisci quello accorpato
    const nuovi = [];
    let inserito = false;
    ed.gruppi.forEach((g, gi) => {
      if (indices.includes(gi)) {
        if (!inserito) { nuovi.push(merged); inserito = true; }
      } else {
        nuovi.push(g);
      }
    });
    // Rinumera
    nuovi.forEach((g, i) => { g.id = i + 1; });
    ed.gruppi = nuovi;
    ed._mergeChecked = {};
    _c21Rebuild(fieldId);
  }

  function onC21SciogliGruppo(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi[gi]; if (!g || !g.orig_ids || g.orig_ids.length <= 1) return;
    // Riespandi: crea un gruppo per ogni orig_id originale
    // I nomi originali non sono più disponibili — usa nomi generici
    const espansi = g.orig_ids.map((oid, k) => ({
      id: oid,
      nome: k === 0 ? g.nome : `Gruppo ${oid}`,
      orig_ids: [oid],
    }));
    ed.gruppi.splice(gi, 1, ...espansi);
    // Rinumera
    ed.gruppi.forEach((gr, i) => { gr.id = i + 1; });
    ed._mergeChecked = {};
    _c21Rebuild(fieldId);
  }

  function onC21DataField(fieldId, key, val) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    ed[key] = val;
    saveChapterDraft();
  }

  /* ── Cap11 — Vibrazioni ─────────────────────────────────────────────── */
  const C11_PRESCRIZIONI_HAV = [
    ['scelta_attrezzature',    'Scelta di attrezzature adeguate tenendo conto dell\'emissione di vibrazioni'],
    ['manutenzione',           'Manutenzione regolare delle attrezzature di lavoro'],
    ['informazione_formazione','Informazione e formazione dei lavoratori sull\'uso corretto delle attrezzature'],
    ['guanti_antivibrazione',  'Utilizzo di guanti antivibrazioni (DPI)'],
  ];

  const C11_PRESCRIZIONI_WBV = [
    ['scelta_attrezzature',    'Scelta di attrezzature adeguate tenendo conto dell\'emissione di vibrazioni'],
    ['supporti_elastici',      'Utilizzo di sedili ammortizzati o supporti elastici che attenuino le vibrazioni'],
    ['manutenzione',           'Manutenzione regolare delle attrezzature di lavoro'],
    ['informazione_formazione','Informazione e formazione dei lavoratori sull\'uso corretto delle attrezzature'],
  ];

  const C11_PRESCRIZIONI_GEN = [
    ['altri_metodi_lavoro',          'Adottare altri metodi di lavoro che comportino una minore esposizione alle vibrazioni meccaniche'],
    ['scelta_attrezzature_adeguate', 'Scegliere attrezzature adeguate, ergonomicamente concepite, che producano il minore livello di vibrazioni possibile'],
    ['fornitura_accessori',          'Fornitura di accessori che riducano il rischio di lesioni provocate dalle vibrazioni (es. sedili, maniglie)'],
    ['manutenzione_adeguata',        'Adeguata manutenzione delle attrezzature di lavoro, del posto di lavoro e dei sistemi sul posto di lavoro'],
    ['progettazione_luoghi',         'Progettazione e layout dei luoghi e dei posti di lavoro al fine di ridurre l\'esposizione'],
    ['informazione_formazione',      'Adeguata informazione e formazione dei lavoratori sull\'uso corretto e sicuro delle attrezzature'],
    ['limitazione_durata',           'Limitazione della durata e dell\'intensità dell\'esposizione alle vibrazioni'],
    ['orari_adeguati',               'Orari di lavoro adeguati, con adeguati periodi di riposo'],
    ['indumenti_protezione',         'Fornitura ai lavoratori di indumenti per la protezione dal freddo e dall\'umidità'],
  ];

  function _c11DefaultGruppo(id) {
    return {
      id, nome: `Gruppo ${id}`,
      hav: { presente: false, attrezzature: [] },
      wbv: { presente: false, attrezzature: [] },
      prescrizioni_hav: { scelta_attrezzature: false, manutenzione: false, informazione_formazione: false, guanti_antivibrazione: false, altri_dpi: '' },
      prescrizioni_wbv: { scelta_attrezzature: false, supporti_elastici: false, manutenzione: false, informazione_formazione: false, altri_dpi: '' },
    };
  }

  function _c11DefaultHavAtt() {
    return { tipo: '', marca_modello: '', modalita: '', avi: '', arto_dx: true, arto_sx: true, fattore_correttivo: 1.0, tempo_min: '' };
  }

  function _c11DefaultWbvAtt() {
    return { tipo: '', marca_modello: '', modalita: '', awmaxi: '', tempo_min: '' };
  }

  function initCap11Editor(fieldId, data) {
    const gruppi = Array.isArray(data && data.gruppi_omogenei) ? data.gruppi_omogenei : [];
    const genDefaults = {};
    C11_PRESCRIZIONI_GEN.forEach(([k]) => { genDefaults[k] = false; });
    state.formValues[fieldId] = {
      gruppi_omogenei: gruppi.length ? gruppi : [_c11DefaultGruppo(1)],
      prescrizioni_generali: Object.assign({}, genDefaults, (data && data.prescrizioni_generali) || {}),
    };
  }

  function _c11Rebuild(fieldId) {
    const outer = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (outer) outer.innerHTML = buildCap11Editor(fieldId, state.formValues[fieldId]);
    saveChapterDraft();
  }

  function _c11HavA8(atts) {
    let sumSq = 0;
    for (const a of (atts || [])) {
      const avi = parseFloat(a.avi) || 0;
      const tOre = (parseFloat(a.tempo_min) || 0) / 60;
      sumSq += avi * avi * tOre;
    }
    return sumSq > 0 ? Math.sqrt(sumSq / 8) : 0;
  }

  function _c11WbvA8(atts) {
    let sumSq = 0;
    for (const a of (atts || [])) {
      const awmax = parseFloat(a.awmaxi) || 0;
      const tOre = (parseFloat(a.tempo_min) || 0) / 60;
      sumSq += awmax * awmax * tOre;
    }
    return sumSq > 0 ? Math.sqrt(sumSq / 8) : 0;
  }

  function _c11FasciaHtml(A8, type) {
    const basso = type === 'hav' ? 2.5 : 0.5;
    const limite = type === 'hav' ? 5.0 : 1.0;
    let cls, lbl;
    if (A8 >= limite) { cls = 'c11-alto'; lbl = 'ELEVATO'; }
    else if (A8 >= basso) { cls = 'c11-medio'; lbl = 'MEDIO'; }
    else { cls = 'c11-basso'; lbl = 'BASSO'; }
    return `<span class="c11-fascia ${cls}">${lbl}</span>`;
  }

  function buildCap11Editor(fieldId, data) {
    const ed = state.formValues[fieldId] || {};
    const gruppi = ed.gruppi_omogenei || [];
    const presGen = ed.prescrizioni_generali || {};

    const gruppiHtml = gruppi.map((g, gi) => _c11GruppoHtml(fieldId, gi, g)).join('');

    const presGenHtml = C11_PRESCRIZIONI_GEN.map(([key, label]) => `
      <label class="c11-presc-row">
        <input type="checkbox" class="c11-presc-cb" ${presGen[key] ? 'checked' : ''}
          onchange="App.onC11PrescrizioneGen('${fieldId}','${key}',this.checked)">
        <span>${escHtml(label)}</span>
      </label>`).join('');

    return `<div class="c11-editor" id="c11-editor-${fieldId}">
      <div class="c11-section">
        <div class="c11-section-hdr">Gruppi omogenei esposti a vibrazioni</div>
        <div style="padding:14px 18px">
          ${gruppiHtml}
          <button class="c11-add-btn" onclick="App.onC11AddGruppo('${fieldId}')">+ Aggiungi gruppo omogeneo</button>
        </div>
      </div>

      <div class="c11-section">
        <div class="c11-section-hdr">Misure di prevenzione e protezione generali (art. 203 D.Lgs 81/08)</div>
        <div style="padding:14px 18px">
          <div class="c11-prescrizioni">${presGenHtml}</div>
        </div>
      </div>
    </div>`;
  }

  function _c11GruppoHtml(fieldId, gi, g) {
    const havHtml = g.hav && g.hav.presente ? _c11HavHtml(fieldId, gi, g) : '';
    const wbvHtml = g.wbv && g.wbv.presente ? _c11WbvHtml(fieldId, gi, g) : '';

    return `<div class="c11-gruppo" id="c11-g-${fieldId}-${gi}">
      <div class="c11-gruppo-hdr">
        <span class="c11-gruppo-n">Gruppo omogeneo ${gi + 1}${g.nome ? ' — ' + escHtml(g.nome) : ''}</span>
        <button class="c11-rm-btn" onclick="App.onC11RemoveGruppo('${fieldId}',${gi})" title="Rimuovi gruppo">✕</button>
      </div>
      <div class="c11-gruppo-body">
        <div class="c11-field-row">
          <label class="c11-lbl">Nome gruppo</label>
          <input class="c11-inp" type="text" value="${escHtml(g.nome || '')}"
            onchange="App.onC11GruppoField('${fieldId}',${gi},'nome',this.value)"
            placeholder="es. Operatori carpenteria">
        </div>
        <div class="c11-toggle-row">
          <span class="c11-toggle-lbl">Vibrazioni mano-braccio (HAV)</span>
          <label class="c11-toggle">
            <input type="checkbox" ${g.hav && g.hav.presente ? 'checked' : ''}
              onchange="App.onC11HavToggle('${fieldId}',${gi},this.checked)">
            <span class="c11-toggle-slider"></span>
          </label>
          <span class="c11-toggle-lbl" style="margin-left:12px">Vibrazioni al corpo intero (WBV)</span>
          <label class="c11-toggle">
            <input type="checkbox" ${g.wbv && g.wbv.presente ? 'checked' : ''}
              onchange="App.onC11WbvToggle('${fieldId}',${gi},this.checked)">
            <span class="c11-toggle-slider"></span>
          </label>
        </div>
        ${havHtml}
        ${wbvHtml}
      </div>
    </div>`;
  }

  function _c11HavHtml(fieldId, gi, g) {
    const atts = (g.hav && g.hav.attrezzature) || [];
    const preHav = g.prescrizioni_hav || {};

    const attRows = atts.map((a, ai) => {
      const tOre = (parseFloat(a.tempo_min) || 0) / 60;
      const avi = parseFloat(a.avi) || 0;
      const gfc = parseFloat(a.fattore_correttivo) || 1.0;
      const a8i = (tOre > 0 && avi > 0) ? (avi * Math.sqrt(tOre / 8) * gfc).toFixed(3) : '—';
      return `<tr>
        <td><input class="c11-meas" type="text" value="${escHtml(a.tipo || '')}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'tipo',this.value)" placeholder="Attrezzatura"></td>
        <td><input class="c11-meas" type="text" value="${escHtml(a.marca_modello || '')}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'marca_modello',this.value)" placeholder="—"></td>
        <td><input class="c11-meas" type="text" value="${escHtml(a.modalita || '')}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'modalita',this.value)" placeholder="—"></td>
        <td><input class="c11-meas-n" type="number" step="0.01" value="${a.avi !== '' && a.avi !== undefined ? a.avi : ''}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'avi',this.value)" placeholder="—"></td>
        <td style="text-align:center"><input type="checkbox" ${a.arto_dx ? 'checked' : ''}
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'arto_dx',this.checked)"></td>
        <td style="text-align:center"><input type="checkbox" ${a.arto_sx ? 'checked' : ''}
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'arto_sx',this.checked)"></td>
        <td><input class="c11-meas-n" type="number" step="0.1" min="0.1" value="${a.fattore_correttivo !== undefined && a.fattore_correttivo !== '' ? a.fattore_correttivo : 1.0}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'fattore_correttivo',this.value)" placeholder="1.0"></td>
        <td><input class="c11-meas-n" type="number" step="1" min="0" value="${a.tempo_min !== '' && a.tempo_min !== undefined ? a.tempo_min : ''}"
          onchange="App.onC11HavField('${fieldId}',${gi},${ai},'tempo_min',this.value)" placeholder="0"></td>
        <td class="c11-calc">${tOre > 0 ? tOre.toFixed(2) : '—'}</td>
        <td class="c11-calc">${a8i}</td>
        <td><button class="c11-rm-inline" onclick="App.onC11RemoveHav('${fieldId}',${gi},${ai})">✕</button></td>
      </tr>`;
    }).join('');

    const A8 = _c11HavA8(atts);
    const A8fmt = A8 > 0 ? A8.toFixed(3) : '—';

    const presRows = C11_PRESCRIZIONI_HAV.map(([key, label]) => `
      <label class="c11-presc-row">
        <input type="checkbox" class="c11-presc-cb" ${preHav[key] ? 'checked' : ''}
          onchange="App.onC11PrescrizioneHav('${fieldId}',${gi},'${key}',this.checked)">
        <span>${escHtml(label)}</span>
      </label>`).join('');

    return `<div class="c11-vib-block c11-hav-block">
      <div class="c11-vib-hdr">Vibrazioni mano-braccio (HAV) — UNI EN ISO 5349-1</div>
      <div class="c11-vib-body">
        <div style="overflow-x:auto">
          <table class="c11-meas-table">
            <thead><tr>
              <th>Attrezzatura</th><th>Marca/Modello</th><th>Modalità d'uso</th>
              <th>a<sub>vi</sub> (m/s²)</th><th>Dx</th><th>Sx</th><th>G</th>
              <th>t (min)</th><th>t (ore)</th><th>A(8)i (m/s²)</th><th></th>
            </tr></thead>
            <tbody>${attRows}</tbody>
            <tfoot><tr class="c11-total-row">
              <td colspan="9" class="c11-total-lbl">A(8) totale gruppo</td>
              <td class="c11-total-val">${A8fmt}</td><td></td>
            </tr></tfoot>
          </table>
        </div>
        <button class="c11-add-sm-btn" onclick="App.onC11AddHav('${fieldId}',${gi})">+ Aggiungi attrezzatura HAV</button>
        ${A8 > 0 ? `<div class="c11-result-row">Livello di rischio: ${_c11FasciaHtml(A8, 'hav')}
          <span class="c11-soglie">Soglie: Basso &lt;2,5 — Medio 2,5÷5,0 — Elevato ≥5,0 m/s²</span></div>` : ''}
        <div class="c11-presc-section">
          <div class="c11-subsec-hdr">Misure di prevenzione per vibrazioni mano-braccio</div>
          <div class="c11-prescrizioni">${presRows}</div>
          <div class="c11-field-row c11-mt8">
            <label class="c11-lbl">Altri DPI</label>
            <input class="c11-inp" type="text" value="${escHtml(preHav.altri_dpi || '')}"
              onchange="App.onC11PrescrizioneHav('${fieldId}',${gi},'altri_dpi',this.value)"
              placeholder="Specificare altri dispositivi di protezione individuale">
          </div>
        </div>
      </div>
    </div>`;
  }

  function _c11WbvHtml(fieldId, gi, g) {
    const atts = (g.wbv && g.wbv.attrezzature) || [];
    const preWbv = g.prescrizioni_wbv || {};

    const attRows = atts.map((a, ai) => {
      const tOre = (parseFloat(a.tempo_min) || 0) / 60;
      const awmax = parseFloat(a.awmaxi) || 0;
      const a8i = (tOre > 0 && awmax > 0) ? (awmax * Math.sqrt(tOre / 8)).toFixed(3) : '—';
      return `<tr>
        <td><input class="c11-meas" type="text" value="${escHtml(a.tipo || '')}"
          onchange="App.onC11WbvField('${fieldId}',${gi},${ai},'tipo',this.value)" placeholder="Attrezzatura"></td>
        <td><input class="c11-meas" type="text" value="${escHtml(a.marca_modello || '')}"
          onchange="App.onC11WbvField('${fieldId}',${gi},${ai},'marca_modello',this.value)" placeholder="—"></td>
        <td><input class="c11-meas" type="text" value="${escHtml(a.modalita || '')}"
          onchange="App.onC11WbvField('${fieldId}',${gi},${ai},'modalita',this.value)" placeholder="—"></td>
        <td><input class="c11-meas-n" type="number" step="0.001" value="${a.awmaxi !== '' && a.awmaxi !== undefined ? a.awmaxi : ''}"
          onchange="App.onC11WbvField('${fieldId}',${gi},${ai},'awmaxi',this.value)" placeholder="—"></td>
        <td><input class="c11-meas-n" type="number" step="1" min="0" value="${a.tempo_min !== '' && a.tempo_min !== undefined ? a.tempo_min : ''}"
          onchange="App.onC11WbvField('${fieldId}',${gi},${ai},'tempo_min',this.value)" placeholder="0"></td>
        <td class="c11-calc">${tOre > 0 ? tOre.toFixed(2) : '—'}</td>
        <td class="c11-calc">${a8i}</td>
        <td><button class="c11-rm-inline" onclick="App.onC11RemoveWbv('${fieldId}',${gi},${ai})">✕</button></td>
      </tr>`;
    }).join('');

    const A8 = _c11WbvA8(atts);
    const A8fmt = A8 > 0 ? A8.toFixed(3) : '—';

    const presRows = C11_PRESCRIZIONI_WBV.map(([key, label]) => `
      <label class="c11-presc-row">
        <input type="checkbox" class="c11-presc-cb" ${preWbv[key] ? 'checked' : ''}
          onchange="App.onC11PrescrizioneWbv('${fieldId}',${gi},'${key}',this.checked)">
        <span>${escHtml(label)}</span>
      </label>`).join('');

    return `<div class="c11-vib-block c11-wbv-block">
      <div class="c11-vib-hdr">Vibrazioni al corpo intero (WBV) — ISO 2631-1</div>
      <div class="c11-vib-body">
        <div style="overflow-x:auto">
          <table class="c11-meas-table">
            <thead><tr>
              <th>Attrezzatura</th><th>Marca/Modello</th><th>Modalità d'uso</th>
              <th>a<sub>wmax,i</sub> (m/s²)</th><th>t (min)</th><th>t (ore)</th>
              <th>A(8)i (m/s²)</th><th></th>
            </tr></thead>
            <tbody>${attRows}</tbody>
            <tfoot><tr class="c11-total-row">
              <td colspan="6" class="c11-total-lbl">A(8) totale gruppo</td>
              <td class="c11-total-val">${A8fmt}</td><td></td>
            </tr></tfoot>
          </table>
        </div>
        <button class="c11-add-sm-btn" onclick="App.onC11AddWbv('${fieldId}',${gi})">+ Aggiungi attrezzatura WBV</button>
        ${A8 > 0 ? `<div class="c11-result-row">Livello di rischio: ${_c11FasciaHtml(A8, 'wbv')}
          <span class="c11-soglie">Soglie: Basso &lt;0,5 — Medio 0,5÷1,0 — Elevato ≥1,0 m/s²</span></div>` : ''}
        <div class="c11-presc-section">
          <div class="c11-subsec-hdr">Misure di prevenzione per vibrazioni al corpo intero</div>
          <div class="c11-prescrizioni">${presRows}</div>
          <div class="c11-field-row c11-mt8">
            <label class="c11-lbl">Altri DPI</label>
            <input class="c11-inp" type="text" value="${escHtml(preWbv.altri_dpi || '')}"
              onchange="App.onC11PrescrizioneWbv('${fieldId}',${gi},'altri_dpi',this.value)"
              placeholder="Specificare altri dispositivi di protezione individuale">
          </div>
        </div>
      </div>
    </div>`;
  }

  function onC11GruppoField(fieldId, gi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    g[key] = value;
    saveChapterDraft();
  }

  function onC11HavToggle(fieldId, gi, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!g.hav) g.hav = { presente: false, attrezzature: [] };
    g.hav.presente = checked;
    if (checked && (!g.hav.attrezzature || !g.hav.attrezzature.length))
      g.hav.attrezzature = [_c11DefaultHavAtt()];
    _c11Rebuild(fieldId);
  }

  function onC11WbvToggle(fieldId, gi, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!g.wbv) g.wbv = { presente: false, attrezzature: [] };
    g.wbv.presente = checked;
    if (checked && (!g.wbv.attrezzature || !g.wbv.attrezzature.length))
      g.wbv.attrezzature = [_c11DefaultWbvAtt()];
    _c11Rebuild(fieldId);
  }

  function onC11HavField(fieldId, gi, ai, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.hav) return;
    const a = g.hav.attrezzature[ai]; if (!a) return;
    if (key === 'arto_dx' || key === 'arto_sx') a[key] = Boolean(value);
    else if (key === 'avi' || key === 'fattore_correttivo' || key === 'tempo_min')
      a[key] = value === '' ? '' : (parseFloat(value) || '');
    else a[key] = value;
    _c11Rebuild(fieldId);
  }

  function onC11WbvField(fieldId, gi, ai, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.wbv) return;
    const a = g.wbv.attrezzature[ai]; if (!a) return;
    if (key === 'awmaxi' || key === 'tempo_min')
      a[key] = value === '' ? '' : (parseFloat(value) || '');
    else a[key] = value;
    _c11Rebuild(fieldId);
  }

  function onC11AddHav(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.hav) return;
    g.hav.attrezzature.push(_c11DefaultHavAtt());
    _c11Rebuild(fieldId);
  }

  function onC11RemoveHav(fieldId, gi, ai) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.hav) return;
    g.hav.attrezzature.splice(ai, 1);
    _c11Rebuild(fieldId);
  }

  function onC11AddWbv(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.wbv) return;
    g.wbv.attrezzature.push(_c11DefaultWbvAtt());
    _c11Rebuild(fieldId);
  }

  function onC11RemoveWbv(fieldId, gi, ai) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g || !g.wbv) return;
    g.wbv.attrezzature.splice(ai, 1);
    _c11Rebuild(fieldId);
  }

  function onC11AddGruppo(fieldId) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const id = ed.gruppi_omogenei.length + 1;
    ed.gruppi_omogenei.push(_c11DefaultGruppo(id));
    _c11Rebuild(fieldId);
  }

  function onC11RemoveGruppo(fieldId, gi) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    if (ed.gruppi_omogenei.length <= 1) return;
    ed.gruppi_omogenei.splice(gi, 1);
    ed.gruppi_omogenei.forEach((g, i) => { g.id = i + 1; });
    _c11Rebuild(fieldId);
  }

  function onC11PrescrizioneHav(fieldId, gi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!g.prescrizioni_hav) g.prescrizioni_hav = {};
    g.prescrizioni_hav[key] = value;
    saveChapterDraft();
  }

  function onC11PrescrizioneWbv(fieldId, gi, key, value) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    const g = ed.gruppi_omogenei[gi]; if (!g) return;
    if (!g.prescrizioni_wbv) g.prescrizioni_wbv = {};
    g.prescrizioni_wbv[key] = value;
    saveChapterDraft();
  }

  function onC11PrescrizioneGen(fieldId, key, checked) {
    const ed = state.formValues[fieldId]; if (!ed) return;
    if (!ed.prescrizioni_generali) ed.prescrizioni_generali = {};
    ed.prescrizioni_generali[key] = checked;
    saveChapterDraft();
  }

  /* ── Validate & Save ────────────────────────────────────────────────── */
  async function validateAndSave() {
    // Verifica template prima di tutto
    const tmplCheck = await call('check_template_configured');
    if (!tmplCheck?.ok) {
      toast((tmplCheck?.msg || 'Template non configurato') + ' — Vai in Configurazione', 'error', 5000);
      setTimeout(() => showConfig(), 700);
      return;
    }

    // Raccogli valori per select (primo valore default)
    document.querySelectorAll('.field-select').forEach(sel => {
      const id = sel.id.replace('field-', '');
      if (!state.formValues[id]) state.formValues[id] = sel.value;
    });

    const required = state.manualFields.filter(f => f.required &&
      f.type !== 'table' && f.type !== 'checkbox_group' && f.type !== 'checkbox' &&
      f.type !== 'cap2_editor' && f.type !== 'cap4_editor' && f.type !== 'procedure_picker' &&
      f.type !== 'cap6_editor' && f.type !== 'cap20_editor' && f.type !== 'cap10_editor' &&
      f.type !== 'cap7_editor' && f.type !== 'cap11_editor' &&
      f.type !== 'cap17_editor' && f.type !== 'cap21_editor');

    let hasError = false;
    required.forEach(fd => {
      // inail_picker: controlla che ci sia una selezione attiva
      if (fd.type === 'inail_picker') {
        if (!state.inailSelected) {
          const wrap = document.querySelector(`[data-field-id="${fd.id}"]`);
          if (wrap) {
            wrap.classList.add('has-error');
            document.getElementById('inail-search-input')?.focus();
          }
          hasError = true;
        }
        return;
      }
      const val = state.formValues[fd.id];
      const empty = val === undefined || val === null || String(val).trim() === '';
      const wrap = document.querySelector(`[data-field-id="${fd.id}"]`);
      if (empty && wrap) {
        wrap.classList.add('has-error');
        const inp = wrap.querySelector('input, select');
        if (inp) inp.focus();
        hasError = true;
      }
    });

    if (hasError) {
      toast('Compila tutti i campi obbligatori (evidenziati in rosso)', 'error');
      // Scroll al primo errore
      const firstErr = document.querySelector('.has-error');
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    doSave();
  }

  async function doSave() {
    const allData = buildFullData();
    const clientSafe = (state.currentClient?.name || 'Azienda').replace(/[^a-zA-Z0-9 _-]/g, '').trim();
    const prefixes = { '1': '1_Anagrafica', '2': '2_ValRischi', '3': '3_Luoghi', '4': '4_Attrezzature', '5': '5_Segnaletica', '6': '6_MMC', '20': '20_Incendio' };
    const prefix = prefixes[state.currentChapter] || `${state.currentChapter}_Cap`;
    const suggestedName = `${prefix}_${clientSafe}.docx`;

    showLoading('Generazione documento…');
    const res = await call('compile_chapter', state.currentChapter, allData, suggestedName);
    hideLoading();

    if (!res) return;
    if (res.cancelled) return;
    if (res.error) { toast(res.error, 'error'); return; }

    // Salva in history (con form_data per consentire la ricompilazione)
    await call('save_to_history',
      state.currentClient?.name || 'Azienda',
      state.currentClient?.json_path || '',
      state.currentChapter,
      `Capitolo ${state.currentChapter}`,
      res.path,
      allData
    );

    toast('Capitolo salvato correttamente', 'success');

    // Mostra "Salvato" nella topbar per 3 secondi
    const savedEl = document.getElementById('form-topbar-saved');
    if (savedEl) {
      savedEl.style.display = 'flex';
      setTimeout(() => { savedEl.style.display = 'none'; }, 3000);
    }

    // Mostra pulsante "Apri documento"
    const bar = document.getElementById('form-bar');
    bar.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;flex:1">
        <span style="color:var(--success);animation:successPop 500ms var(--spring)">${ic('check_circle', 20)}</span>
        <span style="font-size:13px;font-weight:600;color:var(--success)">Capitolo salvato!</span>
        <span style="font-size:11px;color:var(--gray-600)">${escHtml(res.path)}</span>
      </div>
      <button class="btn btn-ghost" onclick="App.openFile('${escAttr(res.path)}')">Apri documento</button>
      <button class="btn btn-primary" onclick="App.showHome()">← Torna alla Home</button>`;

    // Aggiorna currentClient con il nuovo id se era nuovo
    await refreshHistory();
    const newEntry = state.history.find(c => c.json_path === (state.currentClient?.json_path));
    if (newEntry) state.currentClient = newEntry;
  }

  /* ══ Checklist dati tecnico — editor JSON per CAPITOLI (modulare) ═════════ */
  // Mappa MODULARE sezione-JSON → capitolo DVR: i dati sono raggruppati nei
  // capitoli in cui vengono usati. Le sezioni non elencate (anche future)
  // finiscono in "Altri dati", così il software legge JSON futuri senza perdere
  // nulla. Aggiungere qui una nuova sezione la sposta nel capitolo giusto.
  const CHECKLIST_CHAPTERS = [
    { id: '1',  title: 'Anagrafica e organizzazione',        sections: ['anagrafica', 'formazione'] },
    { id: '2',  title: 'Valutazione generale dei rischi',    sections: ['ciclo_lavoro', 'valutazione_rischi'] },
    { id: '3',  title: 'Luoghi di lavoro',                   sections: ['luoghi_lavoro'] },
    { id: '4',  title: 'Attrezzature e impianti',            sections: ['impianti', 'attrezzature_schede'] },
    { id: '5',  title: 'Segnaletica di sicurezza',           sections: ['segnaletica_sicurezza'] },
    { id: '6',  title: 'Movimentazione manuale dei carichi', sections: ['mmc', 'mmc_schede'] },
    { id: '6b', title: 'Trasporto: traino e spinta',         sections: ['traino_spinta'] },
    { id: '7',  title: 'Movimenti ripetitivi',               sections: ['movimenti_ripetitivi', 'movimenti_ripetitivi_schede'] },
    { id: '14', title: 'Agenti chimici',                     sections: ['rischio_chimico'] },
    { id: '19', title: 'DUVRI — rischi da interferenze',     sections: ['ditte_esterne'] },
    { id: '20', title: 'Incendio ed emergenza',              sections: ['valutazione_incendio', 'classificazione_incendio', 'emergenza_formazione'] },
    { id: '21', title: 'Stress lavoro-correlato',            sections: ['stress_lavoro'] },
    { id: '9',  title: 'Altri rischi specifici',             sections: ['rischi_specifici'] },
  ];
  // Titolo leggibile per ogni sezione (sottosezione dentro il capitolo).
  const CHECKLIST_SECTION_TITLES = {
    anagrafica: 'Dati azienda e figure', ditte_esterne: 'Ditte esterne', formazione: 'Formazione',
    ciclo_lavoro: 'Gruppi omogenei, rischi e attrezzature', valutazione_rischi: 'Valutazione rischi',
    luoghi_lavoro: 'Locali', impianti: 'Impianti (elettrico, termico…)', attrezzature_schede: 'Schede attrezzature',
    segnaletica_sicurezza: 'Segnaletica', mmc: 'Schede sollevamento', mmc_schede: 'Schede MMC', traino_spinta: 'Traino e spinta',
    movimenti_ripetitivi: 'Valutazioni movimenti ripetitivi', movimenti_ripetitivi_schede: 'Schede movimenti ripetitivi',
    rischio_chimico: 'Prodotti chimici', valutazione_incendio: 'Valutazione incendio',
    classificazione_incendio: 'Strategia antincendio', emergenza_formazione: 'Emergenza e formazione antincendio',
    stress_lavoro: 'Indicatori stress', rischi_specifici: 'Rischi specifici',
  };
  // Sezioni/chiavi NON pertinenti ai tecnici → nascoste (oltre a tutte le
  // chiavi che iniziano con '_': _id, _survey_url, _quality_survey_url, _calcolati…).
  const CHECKLIST_HIDDEN_SECTIONS = new Set(['meta', 'verbale_sopralluogo']);
  function _clHiddenKey(k) { return String(k).charAt(0) === '_' || CHECKLIST_HIDDEN_SECTIONS.has(k); }
  // Chiave "tecnica" (id generato, es. "1785824351253_w3uux9k14d") → da rietichettare
  function _clIsIdLike(k) { return /^\d{6,}[_-][a-z0-9]{4,}$/i.test(String(k)) || /^[0-9a-f]{16,}$/i.test(String(k)); }
  function _clEmpty(v) {
    if (v == null) return true;
    if (Array.isArray(v)) return v.length === 0;
    if (typeof v === 'object') return Object.keys(v).filter(k => !_clHiddenKey(k)).length === 0;
    return false;
  }

  // Etichette "maschera": testo leggibile mostrato al tecnico. La CHIAVE reale
  // del JSON resta invariata (gestione interna), qui si semplifica solo la vista.
  const CHECKLIST_LABELS = {
    // Anagrafica / figure
    ragione_sociale: 'Ragione sociale', partita_iva: 'Partita IVA',
    indirizzo_sede_legale: 'Indirizzo sede legale',
    indirizzo_sede_operativa: 'Indirizzo sede operativa',
    sedi_multiple: 'Più sedi operative', tipologia_attivita: 'Tipologia attività',
    settore_ateco: 'Codice ATECO', codice_tariffa: 'Codice tariffa INAIL',
    orario_lavoro: 'Orario di lavoro', datori_lavoro: 'Datori di lavoro',
    rspp: 'RSPP', rls: 'RLS', medico_competente: 'Medico competente',
    preposti: 'Preposti', preposti_presenti: 'Preposti presenti',
    addetti_antincendio: 'Addetti antincendio', addetti_antincendio_presenti: 'Addetti antincendio presenti',
    addetti_primo_soccorso: 'Addetti primo soccorso', addetti_primo_soccorso_presenti: 'Addetti primo soccorso presenti',
    nominativo: 'Nominativo', sede_operativa: 'Sede operativa', ruolo: 'Ruolo', nome: 'Nome',
    num_uomini: 'N. uomini', num_donne: 'N. donne', num_minori: 'N. minori',
    // Ciclo lavoro / rischi
    descrizione: 'Descrizione', attrezzature: 'Attrezzature', rischi: 'Rischi',
    categorie_lavoratori: 'Categorie lavoratori', gruppi: 'Gruppi omogenei',
    rischi_ulteriori: 'Altri rischi', formazioni_richieste: 'Formazioni richieste',
    mmc: 'Movimentazione carichi', traino_spinta: 'Traino / spinta',
    movimenti_ripetitivi: 'Movimenti ripetitivi', biologico: 'Rischio biologico', chimico: 'Rischio chimico',
    // Luoghi
    denominazione: 'Denominazione', superficie_mq: 'Superficie (m²)',
    caratteristica: 'Caratteristica', attivita_svolte: 'Attività svolte',
    segnaletica_mancante: 'Segnaletica mancante', agibilita: 'Agibilità',
    idoneita_servizi_igienici: 'Idoneità servizi igienici', idoneita_spogliatoi: 'Idoneità spogliatoi',
    scaffalature: 'Scaffalature', deroga_seminterrati: 'Deroga seminterrati',
    autorizzazione_ex67: 'Autorizzazione ex art. 67',
    // Impianti
    elettrico: 'Impianto elettrico', termico: 'Impianto termico', aeraulico: 'Impianto aeraulico',
    dichiarazione_conformita: 'Dichiarazione di conformità',
    progetto_stato: 'Progetto impianto (stato)', progetto_caratt: 'Caratteristiche del progetto',
    denuncia_esercizio: 'Denuncia di messa in esercizio',
    terra_anno_verifica: 'Impianto di terra — anno ultima verifica',
    terra_periodicita: 'Impianto di terra — periodicità verifiche',
    atmosferiche: 'Protezione scariche atmosferiche', stato: 'Stato',
    pot_6kw: 'Potenza oltre 6 kW', vol_200: 'Volume oltre 200 m³',
    // Chimico
    prodotti: 'Prodotti chimici', frasi_h: 'Frasi H', sds_allegata: 'Scheda di sicurezza allegata',
    esposizione_kg_sett: 'Esposizione (kg/settimana)', esposizione_perc_giorn: 'Esposizione (% giornata)',
    gruppi_esposti: 'Gruppi esposti',
    // Segnaletica
    divieto: 'Divieto', avvertimento: 'Avvertimento', prescrizione: 'Prescrizione',
    salvataggio_soccorso: 'Salvataggio / soccorso', informazione: 'Informazione',
    antincendio: 'Antincendio', vie_circolazione: 'Vie di circolazione',
    // Incendio / emergenza
    aree: 'Aree', livello_formazione: 'Livello formazione antincendio',
    idoneita_tecnica: 'Idoneità tecnica addetti', strategia: 'Strategia antincendio',
    // MMC / OCRA
    sesso: 'Sesso operatore', eta: 'Fascia di età', mansioni: 'Mansioni',
    fase_lavoro: 'Fase di lavoro', frequenza: 'Frequenza', forza: 'Forza',
    durata_ore: 'Durata (ore)', gruppo: 'Gruppo omogeneo',
    // Stress / rischi specifici
    indicatori: 'Indicatori', microclima: 'Microclima', presente: 'Presente',
  };

  function _clPretty(key) {
    if (CHECKLIST_LABELS[key] !== undefined) return CHECKLIST_LABELS[key];
    return String(key).replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  function _clIsBoolStr(v) { return v === 'True' || v === 'False' || v === 'true' || v === 'false'; }
  function _clPathAttr(path) { return escAttr(JSON.stringify(path)); }

  async function openChecklist() {
    // Carica sempre il JSON dal percorso del cliente corrente (funziona anche
    // per i clienti già salvati, dove state.jsonRaw non è ancora in memoria, e
    // garantisce di mostrare i dati del cliente giusto).
    const path = state.currentClient?.json_path;
    if (!path) { toast('Percorso JSON non disponibile per questo cliente.', 'error'); return; }
    showLoading('Lettura JSON…');
    const res = await call('load_json_from_path', path);
    hideLoading();
    if (!res || res.error || !res.json_raw) {
      toast(res?.error || 'Impossibile leggere il JSON del cliente.', 'error'); return;
    }
    state.jsonRaw = res.json_raw;
    state.extracted = res.extracted || state.extracted;
    state.checklistDraft = JSON.parse(JSON.stringify(res.json_raw));
    _ensureChecklistSkeleton(state.checklistDraft);
    const ov = document.createElement('div');
    ov.className = 'checklist-overlay';
    ov.id = 'checklist-overlay';
    ov.innerHTML = `
      <div class="cl-modal">
        <div class="cl-header">
          <div class="cl-title">Checklist dati tecnico — ${escHtml(state.currentClient?.name || '')}</div>
          <div class="cl-header-actions">
            <button class="btn btn-outline" data-cl-action="close">Annulla</button>
            <button class="btn btn-primary" data-cl-action="save">Salva e sovrascrivi JSON</button>
          </div>
        </div>
        <div class="cl-intro">Controlla e correggi i dati inseriti dal tecnico. Al salvataggio il JSON viene
          sovrascritto e diventa la base <b>definitiva</b> per la generazione del DVR (viene comunque conservato un backup).</div>
        <div id="cl-warnings"></div>
        <input class="cl-search" type="text" placeholder="Filtra campi…" data-cl-action="search">
        <div class="cl-body">${_buildChecklistChapters(state.checklistDraft)}</div>
      </div>`;
    document.body.appendChild(ov);
    document.body.style.overflow = 'hidden';
    ov.addEventListener('input', _onChecklistInput);
    ov.addEventListener('change', _onChecklistInput);
    ov.addEventListener('click', _onChecklistClick);
    ov.addEventListener('keyup', _onChecklistSearch);
    _loadChecklistWarnings(path);
  }

  async function _loadChecklistWarnings(path) {
    let avvisi = [];
    try { avvisi = await call('controlla_dati', path) || []; } catch (e) { avvisi = []; }
    const box = document.getElementById('cl-warnings');
    if (!box || !avvisi.length) return;
    const ic = (lv) => lv === 'errore' ? '⛔' : lv === 'attenzione' ? '⚠️' : 'ℹ️';
    // Box COLLASSABILE + altezza massima con scroll: da chiuso mostra solo
    // titolo+conteggio, così non occupa mezza schermata e si lavora sui campi
    // sotto (feedback 2026-10-15). Click sul titolo = apri/chiudi.
    box.innerHTML = `<div class="cl-warn-box">
      <div class="cl-warn-title" onclick="App.toggleChecklistWarn()">
        <span class="cl-warn-chev" id="cl-warn-chev">▸</span>
        Controllo dati — ${avvisi.length} segnalazion${avvisi.length === 1 ? 'e' : 'i'} (clicca per aprire)
      </div>
      <div class="cl-warn-list" id="cl-warn-list" style="display:none">
      ${avvisi.map(a => {
        const t = a.target ? ` data-cl-goto="${escAttr(JSON.stringify(a.target))}"` : '';
        return `<div class="cl-warn-row cl-warn-${escAttr(a.livello)}${a.target ? ' cl-warn-clickable' : ''}"${t}>
        <div class="cl-warn-msg">${ic(a.livello)} ${escHtml(a.messaggio)}${a.target ? ' <span class="cl-warn-go">→ vai</span>' : ''}</div>
        ${a.soluzione ? `<div class="cl-warn-fix"><b>Come risolvere:</b> ${escHtml(a.soluzione)}</div>` : ''}
      </div>`;
      }).join('')}
      </div>
    </div>`;
    box.querySelectorAll('[data-cl-goto]').forEach(el =>
      el.addEventListener('click', () => gotoChecklistField(el.getAttribute('data-cl-goto'))));
  }

  function closeChecklist() {
    const ov = document.getElementById('checklist-overlay');
    if (ov) ov.remove();
    document.body.style.overflow = '';
    state.checklistDraft = null;
  }

  // Scheletro dei campi ATTESI: garantisce che la checklist mostri SEMPRE tutti i
  // campi importanti (anche se assenti nel JSON), così il tecnico può inserirli e
  // risolvere le segnalazioni. Aggiunge solo le chiavi MANCANTI (non sovrascrive).
  function _ensureChecklistSkeleton(draft) {
    if (!draft || typeof draft !== 'object') return;
    const a = draft.anagrafica = draft.anagrafica || {};
    const scalari = {
      ragione_sociale: '', partita_iva: '', codice_fiscale: '',
      indirizzo_sede_legale: '', cap: '', citta: '', provincia: '',
      sede_operativa: '', telefono: '', email: '', pec: '',
      tipologia_attivita: '', codice_ateco: '',
      num_uomini: '', num_donne: '', num_minori: '', num_stranieri: '',
      rspp: '', rls: '', medico_competente: '',
    };
    for (const k in scalari) if (!(k in a)) a[k] = scalari[k];
    // Datore/i di lavoro: se manca, crea una scheda vuota compilabile
    if (!Array.isArray(a.datori_lavoro) || a.datori_lavoro.length === 0) {
      a.datori_lavoro = [{ nominativo: '', ruolo: 'Titolare' }];
    }
    // Figure/liste opzionali: non le forziamo (l'utente le aggiunge con "+ Aggiungi").
  }

  // Click su una segnalazione → apre la checklist (se chiusa), scorre al campo
  // interessato e lo evidenzia.
  async function gotoChecklistField(targetJson) {
    let target;
    try { target = JSON.parse(targetJson); } catch (e) { target = null; }
    if (!Array.isArray(target) || !target.length) return;
    if (!document.getElementById('checklist-overlay')) {
      await openChecklist();
      await new Promise(r => setTimeout(r, 90));
    }
    _scrollHighlightChecklist(target);
  }

  function _findChecklistTarget(target) {
    const ov = document.getElementById('checklist-overlay');
    if (!ov) return null;
    // Miglior match sul data-cl-path (prefisso più lungo che combacia col target)
    let best = null, bestLen = -1;
    ov.querySelectorAll('[data-cl-path]').forEach(el => {
      let p; try { p = JSON.parse(el.getAttribute('data-cl-path')); } catch (e) { return; }
      if (!Array.isArray(p)) return;
      const n = Math.min(p.length, target.length);
      for (let i = 0; i < n; i++) if (String(p[i]) !== String(target[i])) return;
      if (n > bestLen) { best = el; bestLen = n; }
    });
    if (best) return best;
    // Fallback: la sottosezione della prima chiave (es. "anagrafica")
    return ov.querySelector(`[data-cl-section="${CSS.escape(String(target[0]))}"]`);
  }

  function _scrollHighlightChecklist(target) {
    const el = _findChecklistTarget(target);
    if (!el) return;
    // Espande tutti i <details> antenati (le sezioni chiuse)
    let d = el.closest('details');
    while (d) { d.open = true; d = d.parentElement && d.parentElement.closest('details'); }
    const box = el.closest('.cl-field, .cl-item, .cl-group, .cl-subsec') || el;
    setTimeout(() => {
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      box.classList.add('cl-flash');
      const inp = box.querySelector('input, textarea, select');
      if (inp) { try { inp.focus({ preventScroll: true }); } catch (e) {} }
      setTimeout(() => box.classList.remove('cl-flash'), 2800);
    }, 60);
  }

  function _clSubsection(sectionKey, data) {
    const title = CHECKLIST_SECTION_TITLES[sectionKey] || _clPretty(sectionKey);
    return `<div class="cl-subsec" data-cl-section="${escAttr(sectionKey)}">
      <div class="cl-subsec-title">${escHtml(title)}</div>
      ${_clRenderNode(data[sectionKey], [sectionKey])}
    </div>`;
  }

  function _buildChecklistChapters(data) {
    data = data || {};
    const usate = new Set();
    const blocks = [];
    CHECKLIST_CHAPTERS.forEach(cap => {
      const secs = cap.sections.filter(s => (s in data) && !_clEmpty(data[s]) && !_clHiddenKey(s));
      if (!secs.length) return;
      secs.forEach(s => usate.add(s));
      const inner = secs.map(s => _clSubsection(s, data)).join('');
      const open = blocks.length < 1 ? ' open' : '';
      blocks.push(`<details class="cl-section${open}">
        <summary><span class="cl-cap-num">Cap. ${cap.id}</span><span>${escHtml(cap.title)}</span></summary>
        <div class="cl-section-body">${inner}</div>
      </details>`);
    });
    // Sezioni non mappate (future/sconosciute), non nascoste → "Altri dati"
    const altre = Object.keys(data).filter(k =>
      !usate.has(k) && !_clHiddenKey(k) && !_clEmpty(data[k]));
    if (altre.length) {
      const inner = altre.map(s => _clSubsection(s, data)).join('');
      blocks.push(`<details class="cl-section">
        <summary><span>Altri dati</span></summary>
        <div class="cl-section-body">${inner}</div>
      </details>`);
    }
    return blocks.join('') || '<div class="cl-empty">Nessun dato da mostrare.</div>';
  }

  function _clRenderNode(value, path) {
    if (Array.isArray(value)) return _clRenderArray(value, path);
    if (value && typeof value === 'object') return _clRenderObject(value, path);
    return `<div class="cl-field cl-field--solo">${_clRenderScalar(value, path)}</div>`;
  }

  function _clRenderObject(obj, path) {
    // Salta le chiavi tecniche (_id, _*) e gli oggetti annidati vuoti.
    const keys = Object.keys(obj).filter(k => !_clHiddenKey(k));
    let voce = 0;
    const rows = keys.map(k => {
      const child = obj[k];
      const label = _clIsIdLike(k) ? `Voce ${++voce}` : _clPretty(k);
      if (child && typeof child === 'object') {
        if (_clEmpty(child)) return '';   // oggetto/array vuoto → niente da mostrare
        return `<div class="cl-group" data-cl-key="${escAttr(label)}">
          <div class="cl-group-label">${escHtml(label)}</div>
          <div class="cl-group-body">${_clRenderNode(child, [...path, k])}</div>
        </div>`;
      }
      return `<div class="cl-field" data-cl-key="${escAttr(label)}">
        <label class="cl-field-label">${escHtml(label)}</label>
        ${_clRenderScalar(child, [...path, k])}
      </div>`;
    }).filter(Boolean).join('');
    return rows || '<div class="cl-empty">— nessun dato —</div>';
  }

  function _clVisibleKeys(obj) { return Object.keys(obj).filter(k => !_clHiddenKey(k)); }

  // Titolo significativo di un elemento-oggetto (es. nome del gruppo omogeneo)
  function _clItemTitle(item, idx) {
    if (item && typeof item === 'object') {
      for (const k of ['nome', 'nominativo', 'denominazione', 'gruppo', 'titolo', 'fase_lavoro', 'descrizione', 'tipo']) {
        if (item[k] && typeof item[k] === 'string' && item[k].trim()) return item[k];
      }
    }
    return `#${idx + 1}`;
  }

  // Array "semplice": ogni elemento è un oggetto con UN solo campo scalare
  // visibile (es. attrezzature: [{nome}]) → lista compatta (solo i valori).
  function _clIsSimpleObjList(arr) {
    return arr.length > 0 && arr.every(it => {
      if (!it || typeof it !== 'object' || Array.isArray(it)) return false;
      const ks = _clVisibleKeys(it);
      return ks.length === 1 && (it[ks[0]] == null || typeof it[ks[0]] !== 'object');
    });
  }
  function _clIsScalarList(arr) {
    return arr.length > 0 && arr.every(it => it == null || typeof it !== 'object');
  }

  function _clListRow(scalarHtml, itemPath) {
    return `<div class="cl-listitem">
      ${scalarHtml}
      <button class="cl-rm-btn" data-cl-action="remove-item" data-cl-path="${_clPathAttr(itemPath)}" title="Rimuovi">✕</button>
    </div>`;
  }

  function _clRenderArray(arr, path) {
    const addBtn = `<button class="cl-add-btn" data-cl-action="add-item" data-cl-path="${_clPathAttr(path)}">+ Aggiungi</button>`;
    // Lista compatta di oggetti mono-campo (attrezzature, ruoli…): solo i valori
    if (_clIsSimpleObjList(arr)) {
      const key = _clVisibleKeys(arr[0])[0];
      const rows = arr.map((it, idx) =>
        _clListRow(_clRenderScalar(it[key], [...path, idx, key]), [...path, idx])).join('');
      return `<div class="cl-array cl-array--list">${rows}${addBtn}</div>`;
    }
    // Lista compatta di scalari
    if (_clIsScalarList(arr)) {
      const rows = arr.map((it, idx) =>
        _clListRow(_clRenderScalar(it, [...path, idx]), [...path, idx])).join('');
      return `<div class="cl-array cl-array--list">${rows}${addBtn}</div>`;
    }
    // Altrimenti: una card per elemento con TITOLO significativo (es. nome gruppo)
    const items = arr.map((item, idx) => {
      const inner = (item && typeof item === 'object')
        ? _clRenderNode(item, [...path, idx])
        : `<div class="cl-field cl-field--solo">${_clRenderScalar(item, [...path, idx])}</div>`;
      return `<div class="cl-item">
        <div class="cl-item-hdr">
          <span class="cl-item-n">${escHtml(_clItemTitle(item, idx))}</span>
          <button class="cl-rm-btn" data-cl-action="remove-item" data-cl-path="${_clPathAttr([...path, idx])}" title="Rimuovi">✕</button>
        </div>
        <div class="cl-item-body">${inner}</div>
      </div>`;
    }).join('');
    return `<div class="cl-array">
      ${items || '<div class="cl-empty">Nessun elemento</div>'}
      ${addBtn}
    </div>`;
  }

  // Scelte a valori fissi → PULSANTI (invece di testo libero tipo "non_presente").
  // Il codice interno resta invariato; è solo la maschera per il tecnico. Il valore
  // corrente è sempre incluso tra le opzioni (nessuna perdita di dati).
  const CHECKLIST_ENUMS = [
    { match: ['presente', 'non_presente'],
      opts: [['presente', 'Presente'], ['non_presente', 'Non presente']] },
    { match: ['assente'],
      opts: [['presente', 'Presente'], ['assente', 'Assente']] },
    { match: ['annuale', 'biennale', 'triennale', 'quinquennale'],
      opts: [['annuale', 'Annuale'], ['biennale', 'Biennale'], ['triennale', 'Triennale'], ['quinquennale', 'Quinquennale']] },
    { match: ['necessaria', 'non_necessaria'],
      opts: [['necessaria', 'Necessaria'], ['non_necessaria', 'Non necessaria']] },
  ];
  function _clEnumFor(v) {
    if (typeof v !== 'string' || !v) return null;
    for (const g of CHECKLIST_ENUMS) {
      if (g.match.includes(v)) {
        const has = g.opts.some(o => o[0] === v);
        return { opts: has ? g.opts : [[v, _clPretty(v)], ...g.opts] };
      }
    }
    return null;
  }

  // Campi "orario / turni di lavoro" → testo libero + inserimento guidato di fasce orarie
  function _clIsTurni(k) { return /orari|turn/i.test(String(k)); }
  function _clRenderTurni(value, path) {
    // Semplificato (feedback 2026-10-13): solo uno spazio di testo libero per
    // scrivere i turni a mano (nella maggior parte dei casi "Diurno con pausa
    // pranzo"); rimosso l'inserimento guidato di fasce orarie.
    const p = _clPathAttr(path);
    const s = value == null ? '' : String(value);
    return `<div class="cl-turni">
      <input class="cl-input" type="text" value="${escAttr(s)}"
        placeholder="es. Diurno con pausa pranzo" data-cl-path="${p}" data-cl-vtype="string">
    </div>`;
  }

  function _clRenderScalar(value, path, keyName) {
    const p = _clPathAttr(path);
    // Orario/turni → widget guidato (mostra comunque il testo del tecnico)
    const lastKey = keyName != null ? keyName : path[path.length - 1];
    if (typeof lastKey === 'string' && _clIsTurni(lastKey) &&
        (value == null || typeof value === 'string')) {
      return _clRenderTurni(value, path);
    }
    // Booleano (vero o "True"/"False") → toggle Sì/No
    if (typeof value === 'boolean' || _clIsBoolStr(value)) {
      const on = value === true || value === 'True' || value === 'true';
      const vtype = (typeof value === 'boolean') ? 'bool' : 'boolstr';
      return `<span class="cl-sn" data-cl-path="${p}" data-cl-vtype="${vtype}">
        <button class="cl-sn-btn${on ? ' on' : ''}" data-cl-action="bool" data-cl-val="1">Sì</button>
        <button class="cl-sn-btn${!on ? ' on' : ''}" data-cl-action="bool" data-cl-val="0">No</button>
      </span>`;
    }
    // Scelta a valori fissi (es. presente / non presente / assente) → pulsanti
    const en = _clEnumFor(value);
    if (en) {
      return `<span class="cl-enum" data-cl-path="${p}">
        ${en.opts.map(([code, lab]) =>
          `<button class="cl-sn-btn${value === code ? ' on' : ''}" data-cl-action="enum" data-cl-code="${escAttr(code)}">${escHtml(lab)}</button>`).join('')}
      </span>`;
    }
    // Numero → input numerico
    if (typeof value === 'number') {
      return `<input class="cl-input cl-num" type="number" step="any" value="${escAttr(String(value))}"
        data-cl-path="${p}" data-cl-vtype="number">`;
    }
    // null → campo vuoto (resta null se non compilato)
    if (value === null) {
      return `<input class="cl-input" type="text" value="" placeholder="— non specificato —"
        data-cl-path="${p}" data-cl-vtype="null">`;
    }
    // Testo (textarea se lungo/multilinea)
    const s = String(value);
    if (s.length > 60 || s.includes('\n')) {
      return `<textarea class="cl-input cl-textarea" rows="2" data-cl-path="${p}" data-cl-vtype="string">${escHtml(s)}</textarea>`;
    }
    return `<input class="cl-input" type="text" value="${escAttr(s)}" data-cl-path="${p}" data-cl-vtype="string">`;
  }

  function _clRef(path) {
    let node = state.checklistDraft;
    for (let i = 0; i < path.length - 1; i++) node = node[path[i]];
    return [node, path[path.length - 1]];
  }

  function _clBlankLike(sample) {
    if (Array.isArray(sample)) return [];
    if (sample && typeof sample === 'object') {
      const o = {}; for (const k in sample) o[k] = _clBlankLike(sample[k]); return o;
    }
    if (typeof sample === 'boolean') return false;
    if (sample === 'True' || sample === 'False') return 'False';
    if (typeof sample === 'number') return 0;
    return '';
  }

  function _onChecklistInput(e) {
    const el = e.target;
    if (!el.dataset || el.dataset.clPath === undefined) return;
    if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') return;
    if (el.classList.contains('cl-sn-btn')) return;
    const path = JSON.parse(el.dataset.clPath);
    const vtype = el.dataset.clVtype || 'string';
    let val = el.value;
    if (vtype === 'number') {
      const t = String(val).trim();
      if (t === '') val = null;                         // numero svuotato → null
      else { const n = Number(t.replace(',', '.')); val = isNaN(n) ? val : n; }
    } else if (vtype === 'null') {
      val = (String(val).trim() === '') ? null : val;   // resta null se vuoto
    }
    const [parent, key] = _clRef(path);
    if (parent) parent[key] = val;
  }

  function _onChecklistClick(e) {
    const btn = e.target.closest('[data-cl-action]');
    if (!btn) return;
    const action = btn.dataset.clAction;
    if (action === 'close') return closeChecklist();
    if (action === 'save') return saveChecklist();
    if (action === 'bool') {
      const span = btn.closest('.cl-sn');
      const path = JSON.parse(span.dataset.clPath);
      const vtype = span.dataset.clVtype;
      const on = btn.dataset.clVal === '1';
      const val = vtype === 'bool' ? on : (on ? 'True' : 'False');
      const [parent, key] = _clRef(path);
      if (parent) parent[key] = val;
      span.querySelectorAll('.cl-sn-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      return;
    }
    if (action === 'remove-item') {
      const path = JSON.parse(btn.dataset.clPath);
      const idx = path[path.length - 1];
      const [arr] = _clRef(path);
      if (Array.isArray(arr)) { arr.splice(idx, 1); _clRefreshBody(); }
      return;
    }
    if (action === 'add-item') {
      const path = JSON.parse(btn.dataset.clPath);
      const arr = path.reduce((n, k) => n[k], state.checklistDraft);
      if (Array.isArray(arr)) { arr.push(arr.length ? _clBlankLike(arr[0]) : ''); _clRefreshBody(); }
      return;
    }
    if (action === 'enum') {
      const span = btn.closest('.cl-enum');
      const path = JSON.parse(span.dataset.clPath);
      const [parent, key] = _clRef(path);
      if (parent) parent[key] = btn.dataset.clCode;
      span.querySelectorAll('.cl-sn-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      return;
    }
    if (action === 'turno-add') {
      const wrap = btn.closest('.cl-guided');
      const from = wrap.querySelector('.cl-g-from').value;
      const to = wrap.querySelector('.cl-g-to').value;
      if (!from || !to) { toast('Imposta ora inizio e fine del turno.', 'error'); return; }
      const seg = `${from}-${to}`;
      const path = JSON.parse(btn.dataset.clPath);
      const [parent, key] = _clRef(path);
      const cur = (parent[key] == null ? '' : String(parent[key])).trim();
      const val = cur ? `${cur} e ${seg}` : seg;
      parent[key] = val;
      const inp = wrap.closest('.cl-turni').querySelector('input.cl-input');
      if (inp) inp.value = val;
      wrap.querySelector('.cl-g-from').value = '';
      wrap.querySelector('.cl-g-to').value = '';
      return;
    }
  }

  function _clRefreshBody() {
    const ov = document.getElementById('checklist-overlay');
    if (!ov) return;
    const body = ov.querySelector('.cl-body');
    const dets = [...body.querySelectorAll(':scope > details')];
    const openState = dets.map(d => d.open);
    const scroll = body.scrollTop;
    body.innerHTML = _buildChecklistChapters(state.checklistDraft);
    [...body.querySelectorAll(':scope > details')].forEach((d, i) => {
      if (openState[i] !== undefined) d.open = openState[i];
    });
    body.scrollTop = scroll;
  }

  function _onChecklistSearch(e) {
    if (!e.target.classList.contains('cl-search')) return;
    const q = e.target.value.trim().toLowerCase();
    const ov = document.getElementById('checklist-overlay');
    if (!ov) return;
    ov.querySelectorAll('.cl-field, .cl-group').forEach(el => {
      const key = (el.getAttribute('data-cl-key') || '').toLowerCase();
      el.style.display = (!q || key.includes(q)) ? '' : 'none';
    });
    if (q) ov.querySelectorAll('.cl-section').forEach(d => { d.open = true; });
  }

  async function saveChecklist() {
    const path = state.currentClient?.json_path || '';
    if (!path) { toast('Percorso JSON non disponibile.', 'error'); return; }
    showLoading('Salvataggio JSON…');
    const res = await call('save_json', path, state.checklistDraft);
    hideLoading();
    if (!res || res.error) { toast(res?.error || 'Errore nel salvataggio', 'error'); return; }
    state.jsonRaw = res.json_raw;
    if (res.extracted) state.extracted = res.extracted;
    closeChecklist();
    // Le bozze dei capitoli sono state ri-derivate dal JSON corretto → ricarica
    // la history così la vista capitoli riflette lo stato aggiornato.
    await refreshHistory();
    const upd = (state.history || []).find(c => c.json_path === state.currentClient?.json_path);
    if (upd) state.currentClient = upd;
    const n = res.bozze_azzerate || 0;
    toast(n > 0
      ? `Checklist salvata. ${n} capitolo/i verranno ri-generati dai dati corretti.`
      : 'Checklist salvata: il JSON è la nuova base per il DVR.', 'success', 4500);
    if (state.currentClient) renderChaptersList(state.currentClient);
  }

  function buildFullData() {
    // Layer 1: tutti i campi estratti da json_loader.py
    // (include indirizzo_up con fallback all'indirizzo completo, unita_produttiva, ecc.)
    const data = { ...(state.extracted || {}) };

    // Layer 2: override con campi auto del schema (json_extractor, stessa fonte ma normalizzata)
    Object.assign(data, state.autoFields);

    // Layer 3: override con i valori inseriti/modificati manualmente nel form
    for (const [k, v] of Object.entries(state.formValues)) {
      data[k] = v;
    }

    // Raccogli tabelle dal DOM che non sono state aggiornate via input
    state.manualFields.filter(f => f.type === 'table').forEach(fd => {
      if (data[fd.id] === undefined) onTableChange(fd.id);
      if (state.formValues[fd.id] !== undefined) data[fd.id] = state.formValues[fd.id];
    });
    state.manualFields.filter(f => f.type === 'checkbox_group').forEach(fd => {
      onCbgChange(fd.id);
      if (state.formValues[fd.id] !== undefined) data[fd.id] = state.formValues[fd.id];
    });

    // Tabelle prefill (dal JSON) + eventuali modifiche manuali
    for (const [k, v] of Object.entries(state.tablePrefill)) {
      if (data[k] === undefined) data[k] = v;
    }

    // Normalizza formato tabelle per docx_filler
    const antinc = data['addetti_antincendio'];
    if (Array.isArray(antinc)) {
      data['addetti_antincendio'] = antinc.map(r => {
        if (Array.isArray(r)) return { nome: r[0] || '', luogo: r[1] || '' };
        return { nome: r.nominativo || r.nome || '', luogo: r.luogo || '' };
      });
    }
    const soccorso = data['addetti_primo_soccorso'];
    if (Array.isArray(soccorso)) {
      data['addetti_primo_soccorso'] = soccorso.map(r => {
        if (Array.isArray(r)) return { nome: r[0] || '', luogo: r[1] || '' };
        return { nome: r.nominativo || r.nome || '', luogo: r.luogo || '' };
      });
    }
    const soci = data['soci'];
    if (Array.isArray(soci)) {
      data['soci'] = soci.map(r => {
        if (Array.isArray(r)) return { nome: r[0] || '', qualifica: r[1] || '' };
        return r;
      });
    }

    // Defaults
    if (!data['soci']) data['soci'] = [];
    if (!data['addetti_antincendio']) data['addetti_antincendio'] = [];
    if (!data['addetti_primo_soccorso']) data['addetti_primo_soccorso'] = [];
    if (!data['gruppi']) data['gruppi'] = [];
    if (!data['fascia_dipendenti']) data['fascia_dipendenti'] = '';
    if (!data['turni']) data['turni'] = ['', '', ''];
    if (!data['dirigenti']) data['dirigenti'] = [];
    if (!data['preposti']) data['preposti'] = [];

    // Passa i dati impianti dal JSON grezzo (per cap4)
    if (state.jsonRaw && state.jsonRaw.impianti) {
      data['impianti'] = state.jsonRaw.impianti;
    }

    // Normalizza cap4_editor
    const cap4 = data['cap4_editor'];
    if (cap4 && typeof cap4 === 'object') {
      if (!cap4.attrezzature) cap4.attrezzature = [];
      data['cap4_editor'] = cap4;
    }

    // Normalizza cap5_editor (nuovo modello: toggle segnaletica)
    const cap5 = data['cap5_editor'];
    if (cap5 && typeof cap5 === 'object') {
      data['cap5_editor'] = {
        applicazione_in_azienda: cap5.applicazione_in_azienda !== false,
        impianto_termico: !!cap5.impianto_termico,
        serbatoio: !!cap5.serbatoio,
        categoria_ce: !!cap5.categoria_ce,
        gestuali: !!cap5.gestuali,
      };
    }

    // Normalizza cap2_gruppi: sincronizza fasi e dpi_gruppo dal DOM prima di inviare
    const cap2 = data['cap2_gruppi'];
    if (cap2 && typeof cap2 === 'object' && cap2.gruppi) {
      cap2.gruppi.forEach((g, gi) => {
        const gid = `cap2-g${gi}`;
        const fasiContainer = document.getElementById(`${gid}-fasi`);
        if (fasiContainer) {
          const rows = [...fasiContainer.querySelectorAll('.cap2-fase-row')];
          g.fasi = rows.map(r => ({
            fase: r.querySelector('input[type=text]')?.value || '',
            dpi: [...r.querySelectorAll('.cap2-fase-dpi-checks input[type=checkbox]:checked')].map(c => c.value),
          }));
          // fasi_dpi = fasi con i DPI per sottofase (consumato dal filler)
          g.fasi_dpi = g.fasi.map(f => ({ fase: f.fase, dpi: f.dpi || [] }));
        }
        if (!g.fasi) g.fasi = [];
        const dpiContainer = document.getElementById(`${gid}-dpi`);
        if (dpiContainer) {
          g.dpi_gruppo = [...dpiContainer.querySelectorAll('input[type=checkbox]:checked')].map(c => c.value);
        }
        if (!g.dpi_gruppo) g.dpi_gruppo = [];
        // I DPI di gruppo ereditano anche quelli scelti nelle singole fasi
        const _seenDpi = new Set(g.dpi_gruppo.map(d => (d || '').toLowerCase()));
        (g.fasi_dpi || []).flatMap(f => f.dpi || []).forEach(d => {
          if (d && !_seenDpi.has(d.toLowerCase())) { _seenDpi.add(d.toLowerCase()); g.dpi_gruppo.push(d); }
        });
        if (!g.schede) g.schede = Array.from({length:33}, (_,i)=>({id:i+1,presente:false,p:0,d:0}));
        g.schede.forEach(s => { s.presente = (parseInt(s.p) > 0 && parseInt(s.d) > 0); });
      });
      data['cap2_gruppi'] = cap2;
    }

    // Normalizza cap3_locali
    const cap3 = data['cap3_locali'];
    if (cap3 && typeof cap3 === 'object' && cap3.locali) {
      cap3.locali.forEach(loc => {
        if (!loc.rischi) loc.rischi = Array.from({length:16}, (_,i) => ({id:i+1, presente:false, p:0, d:0}));
        loc.rischi.forEach(r => { r.presente = (parseInt(r.p) > 0 && parseInt(r.d) > 0); });
      });
      data['cap3_locali'] = cap3;
    }

    // Normalizza cap6_editor (modello Ed. 2.0: gruppi → movimentazioni → varianti)
    const cap6 = data['cap6_editor'];
    if (cap6 && typeof cap6 === 'object') {
      if (!Array.isArray(cap6.gruppi)) cap6.gruppi = [];
      cap6.gruppi.forEach(g => {
        g.movimentazioni = (g.movimentazioni || []).filter(
          m => m && m.mov_key && Array.isArray(m.varianti) && m.varianti.length);
      });
      data['cap6_editor'] = cap6;
    }

    // Normalizza cap7_editor (gruppi → schede-attività)
    const cap7 = data['cap7_editor'];
    if (cap7 && typeof cap7 === 'object') {
      if (!Array.isArray(cap7.gruppi)) cap7.gruppi = [];
      cap7.gruppi.forEach(g => {
        g.schede = (g.schede || []).filter(k => typeof k === 'string' && k);
      });
      data['cap7_editor'] = cap7;
    }

    // Normalizza cap20_editor
    const cap20 = data['cap20_editor'];
    if (cap20 && typeof cap20 === 'object') {
      if (!cap20.aree) cap20.aree = [];
      cap20.aree.forEach(a => {
        if (!a.classificazione) a.classificazione = {};
        if (!a.classificazione.livello) a.classificazione.livello = 'Basso';
      });
      if (!cap20.piano_emergenza) cap20.piano_emergenza = {c1:false, c2:false, c3:false, necessario:false};
      // c3 (luoghi rientranti nell'allegato I DPR 151/2011) è DERIVABILE:
      // se almeno un'area rientra nel DPR, c3 = Sì (non si chiede all'utente)
      if (cap20.aree.some(a => a.dpr_rientra === 'rientra')) cap20.piano_emergenza.c3 = true;
      cap20.piano_emergenza.necessario =
        !!(cap20.piano_emergenza.c1 || cap20.piano_emergenza.c2 || cap20.piano_emergenza.c3);
      if (!cap20.livello_formazione) cap20.livello_formazione = '1';
      if (!cap20.idoneita_tecnica) cap20.idoneita_tecnica = 'non_necessaria';
      if (cap20.has_cantieri === undefined) cap20.has_cantieri = false;
      data['cap20_editor'] = cap20;
    }

    // Cap0: mappa applicabilità per il docx Formalizzazione. Riflette le
    // esclusioni reali per i capitoli generati (unica fonte) + la scelta per
    // quelli informativi.
    const cap0e = data['cap0_editor'];
    if (cap0e && cap0e.applicabilita) {
      const appl = { ...cap0e.applicabilita };
      const escl = (state.currentClient && state.currentClient.capitoli_esclusi) || {};
      (state.cap0Meta || []).forEach(m => {
        if (m.core) appl[m.id] = true;
        else if (m.implementato) appl[m.id] = !escl[m.id];
      });
      data['cap0_applicabilita'] = appl;
      if (cap0e.data_emissione) data['data_emissione'] = cap0e.data_emissione;
      if (cap0e.super_g) data['cap0_super_g'] = true;
    }

    // Nomi dei gruppi omogenei dal JSON (usati da Cap17 §6.5, ecc.)
    const _grOmog = (state.jsonRaw && state.jsonRaw.ciclo_lavoro && state.jsonRaw.ciclo_lavoro.gruppi) || [];
    data['gruppi_omogenei'] = _grOmog.map(g => g.nome).filter(Boolean);

    // Normalizza cap21_editor: passa i gruppi omogenei ORIGINALI (dal JSON)
    // per la tabella §2.1.2, distinti dalle mansioni accorpate (elenco puntato).
    const cap21 = data['cap21_editor'];
    if (cap21 && typeof cap21 === 'object') {
      const gr = (state.jsonRaw && state.jsonRaw.ciclo_lavoro && state.jsonRaw.ciclo_lavoro.gruppi) || [];
      cap21.gruppi_originali = gr.map((g, i) => ({ id: i + 1, nome: g.nome || `Gruppo ${i + 1}` }));
      data['cap21_editor'] = cap21;
    }

    return data;
  }

  /* ── Preview ────────────────────────────────────────────────────────── */
  async function previewChapter() {
    const allData = buildFullData();
    showLoading('Generazione anteprima…');
    const res = await call('preview_chapter', state.currentChapter, allData,
                           state.currentClient?.json_path || '');
    hideLoading();
    if (res?.error) toast(res.error, 'error');
    else toast('Anteprima aperta in Word. Sommario e n° pagine verranno aggiornati automaticamente nell\'esportazione finale.', 'info', 5000);
  }

  // Chiamata dal backend (watcher) quando l'anteprima viene salvata in Word.
  // Il salvataggio è ORA AUTOMATICO (il watcher rende permanente la modifica a
  // ogni Save di Word): qui aggiorniamo solo il badge e diamo conferma.
  let _previewSavedToastAt = 0;
  async function onPreviewSaved() {
    try { await refreshHistory(); } catch (e) {}
    const upd = (state.history || []).find(c => c.id === state.currentClient?.id);
    if (upd) {
      state.currentClient = upd;
      if (state.view === 'client') renderChaptersList(upd);
    }
    // Evita di ripetere il toast a ogni salvataggio ravvicinato.
    const now = Date.now();
    if (now - _previewSavedToastAt > 3000) {
      _previewSavedToastAt = now;
      toast('Modifiche dell\'anteprima salvate nel capitolo', 'success', 3500);
    }
  }

  /* ── Open file ──────────────────────────────────────────────────────── */
  async function openFile(path) {
    const res = await call('open_file', path);
    if (res?.error) toast(res.error, 'error');
  }

  /* ── Apri fogli di calcolo Excel del capitolo (Cap6/7/10/11) ─────────── */
  async function apriFogliCalcolo(chapterId) {
    const allData = buildFullData();
    showLoading('Apertura fogli di calcolo in Excel…');
    const res = await call('apri_fogli_calcolo', String(chapterId), allData,
                           state.currentClient?.json_path || '');
    hideLoading();
    if (res?.error) { toast(res.error, 'error', 5000); return; }
    // Conferma + istruzioni (feedback 2026-10-13): il tecnico compila il foglio
    // in Excel, lo SALVA, e i file verranno inclusi nell'esportazione.
    toast(`${res.aperti || 0} foglio/i aperto/i in Excel. Compilali e SALVALI (⌘S): ` +
          `i fogli verranno salvati nell'esportazione del DVR.`, 'success', 7000);
  }

  /* ── Config ─────────────────────────────────────────────────────────── */
  async function showConfig() {
    const cfg = await call('get_config') || {};
    state.config = cfg;
    const nomeEl = document.getElementById('cfg-nome-utente');
    if (nomeEl) nomeEl.value = cfg.nome_utente || '';
    document.getElementById('cfg-root-folder').value = cfg.root_folder || '';
    const clientiEl = document.getElementById('cfg-clienti-folder');
    if (clientiEl) clientiEl.value = cfg.clienti_folder || '';
    // Email questionari
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = v ?? ''; };
    set('cfg-smtp-email', cfg.smtp_email);
    set('cfg-smtp-mittente', cfg.smtp_mittente);
    set('cfg-smtp-host', cfg.smtp_host || 'smtp.office365.com');
    set('cfg-smtp-port', cfg.smtp_port || 587);
    const pwd = document.getElementById('cfg-smtp-password');
    if (pwd) {
      pwd.value = '';
      pwd.placeholder = cfg.smtp_password_set
        ? '••••••••  (già impostata — scrivi solo per cambiarla)'
        : 'password dell’account';
    }
    _refreshSurveyStatus();
    _updateDerivedPaths(cfg);
    await checkTemplate();
    showView('config');
  }

  async function _refreshSurveyStatus() {
    const box = document.getElementById('cfg-survey-status');
    if (!box) return;
    const st = await call('get_survey_status') || {};
    state._surveyRows = {};
    let rid = 0;
    const righe = (st.voci || []).slice(0, 8).map(v => {
      const tipo = v.tipo === 'qualita' ? 'Qualità' : 'Iniziale';
      // Voce senza email → nome cliente in evidenza + inserimento email inline
      if (!v.email && v.stato !== 'inviata') {
        const id = rid++;
        state._surveyRows[id] = v.json_path || '';
        return `<div class="cfg-survey-row cfg-survey-row--warn">
          <div class="cfg-survey-warn-hd">⚠ <b>${escHtml(v.cliente || 'Cliente')}</b> — email mancante · ${tipo}</div>
          <div class="cfg-survey-inline">
            <input type="email" id="cfg-survey-mail-${id}" placeholder="email del cliente" autocomplete="off" spellcheck="false">
            <button class="btn btn-primary btn-sm" onclick="App.salvaEmailCoda(${id})">Salva</button>
          </div>
        </div>`;
      }
      let stato;
      if (v.stato === 'inviata') {
        stato = '✓ inviata' + (v.inviata_il
          ? ' il ' + new Date(v.inviata_il).toLocaleDateString('it-IT') : '');
      } else if (v.ultimo_errore) {
        stato = '⚠ in attesa (' + escHtml(v.ultimo_errore).slice(0, 60) + '…)';
      } else {
        stato = 'in attesa' + (v.invia_dopo
          ? ' — prevista: ' + new Date(v.invia_dopo).toLocaleDateString('it-IT') : '');
      }
      return `<div class="cfg-survey-row"><b>${tipo}</b> · ${escHtml(v.cliente || '?')}
        → ${escHtml(v.email || '—')} · ${stato}</div>`;
    }).join('');
    box.innerHTML = `
      <div class="cfg-survey-summary">
        Questionari: <b>${st.in_attesa ?? 0}</b> in attesa · <b>${st.inviate ?? 0}</b> inviati
        ${st.configurato ? '' : ' — <span style="color:var(--error)">account non configurato</span>'}
        ${(st.in_attesa ?? 0) > 0 ? `<button class="btn btn-outline btn-sm" style="margin-left:10px"
          onclick="App.surveyInviaOra()">Invia ora quelli scaduti</button>` : ''}
      </div>${righe}`;
  }

  async function salvaEmailCoda(rid) {
    const jsonPath = (state._surveyRows || {})[rid];
    const inp = document.getElementById('cfg-survey-mail-' + rid);
    const email = (inp?.value || '').trim();
    if (!email || !email.includes('@')) {
      toast('Inserire un indirizzo email valido', 'error');
      return;
    }
    const res = await call('registra_survey_email', jsonPath, email);
    if (res?.ok) {
      toast('Email salvata — questionari in invio', 'success');
      _refreshSurveyStatus();
    }
  }

  /* ── Note di rilascio (modale) ─────────────────────────────────────── */
  function showReleaseNotes() {
    const old = document.getElementById('release-modal-overlay');
    if (old) old.remove();
    const ov = document.createElement('div');
    ov.id = 'release-modal-overlay';
    ov.className = 'survey-email-overlay';
    ov.innerHTML = `
      <div class="survey-email-card release-modal">
        <h3>Note di rilascio</h3>
        <div class="release-version">Gestione DVR Stone · versione 1.1</div>
        <p class="release-copyright">Il presente software è stato ideato e sviluppato da
        <strong>Marco Mancuso</strong>. Opera tutelata ai sensi della normativa vigente in materia
        di diritto d'autore e proprietà intellettuale. Tutti i diritti sono riservati al titolare.
        È fatto espresso divieto di riproduzione, distribuzione, vendita, sublicenza, modifica o
        qualsiasi forma di utilizzo del software — in tutto o in parte — senza previa autorizzazione
        scritta del titolare dei diritti. La violazione di tali disposizioni costituisce illecito
        perseguibile nelle sedi competenti.</p>
        <div class="survey-email-actions">
          <button class="btn btn-primary" onclick="document.getElementById('release-modal-overlay').remove()">Chiudi</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
  }

  async function surveyInviaOra() {
    const res = await call('processa_survey_queue') || {};
    toast(`Inviate: ${res.inviate ?? 0} — errori: ${res.errori ?? 0}`,
          (res.errori ? 'error' : 'success'));
    _refreshSurveyStatus();
  }

  async function testSmtp() {
    const esito = document.getElementById('cfg-smtp-esito');
    if (esito) { esito.textContent = 'Salvataggio e invio in corso…'; esito.className = 'cfg-smtp-esito'; }
    await _saveSmtpConfig();                 // usa i valori appena digitati
    const res = await call('test_smtp') || {};
    if (esito) {
      esito.textContent = res.messaggio || (res.ok ? 'Inviata.' : 'Errore.');
      esito.className = 'cfg-smtp-esito ' + (res.ok ? 'ok' : 'err');
    }
    _refreshSurveyStatus();
  }

  async function _saveSmtpConfig() {
    const val = id => (document.getElementById(id)?.value || '').trim();
    const payload = {
      smtp_email:    val('cfg-smtp-email'),
      smtp_mittente: val('cfg-smtp-mittente'),
      smtp_host:     val('cfg-smtp-host') || 'smtp.office365.com',
      smtp_port:     parseInt(val('cfg-smtp-port') || '587', 10) || 587,
    };
    const pwd = val('cfg-smtp-password');
    if (pwd) payload.smtp_password = pwd;    // vuota = mantieni quella salvata
    await call('save_config', payload);
  }

  function _updateDerivedPaths(cfg) {
    const root  = cfg.root_folder || '';
    const panel = document.getElementById('cfg-derived-paths');
    if (panel) panel.style.display = root ? 'block' : 'none';
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };
    set('cfg-derived-template', cfg.template_folder);
    set('cfg-derived-clienti',  cfg.clienti_folder);
    set('cfg-derived-proc',     cfg.procedure_folder);
  }

  async function pickRootFolder() {
    const folder = await call('pick_root_folder');
    if (!folder) return;
    document.getElementById('cfg-root-folder').value = folder;
    const res = await call('save_config', { root_folder: folder });
    if (res?.ok) {
      const cfg = await call('get_config');
      _updateDerivedPaths(cfg);
      await checkTemplate();
      toast('Cartella principale impostata', 'success');
    }
  }

  async function pickClientiFolder() {
    const folder = await call('pick_clienti_folder');
    if (!folder) return;
    const el = document.getElementById('cfg-clienti-folder');
    if (el) el.value = folder;
    const res = await call('save_config', { clienti_folder: folder });
    if (res?.ok) {
      toast('Cartella clienti impostata (separata dagli aggiornamenti)', 'success');
      const cfg = await call('get_config');
      state.config = cfg;
    } else {
      toast('Errore nel salvataggio della cartella clienti', 'error');
    }
  }

  async function checkTemplate() {
    const res = await call('check_template_configured');
    const status = document.getElementById('template-status');
    if (!status) return;
    status.className = 'template-status ' + (res?.ok ? 'ok' : 'warn');
    status.innerHTML = res?.ok
      ? (ic('check', 13) + ' Template trovati ✓')
      : (ic('alert', 13) + ' ' + escHtml(res?.msg || 'Nessuna cartella configurata'));
  }

  async function saveConfig() {
    const root = document.getElementById('cfg-root-folder').value;
    const nomeEl = document.getElementById('cfg-nome-utente');
    const nome = nomeEl ? nomeEl.value.trim() : '';
    const res = await call('save_config', { root_folder: root, nome_utente: nome });
    await _saveSmtpConfig();
    if (res?.ok) {
      toast('Configurazione salvata', 'success');
      state.config.nome_utente = nome;
      _updateAvatar(nome);
    } else toast('Errore nel salvataggio', 'error');
    const cfg = await call('get_config');
    _updateDerivedPaths(cfg);
    _refreshSurveyStatus();
    await checkTemplate();
  }

  /* ── Loading overlay ────────────────────────────────────────────────── */
  function showLoading(msg = 'Caricamento…') {
    document.getElementById('loading-msg').textContent = msg;
    document.getElementById('loading-overlay').classList.add('visible');
  }

  function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('visible');
  }

  /* ── Toast ──────────────────────────────────────────────────────────── */
  /* ── Aggiornamenti via GitHub ───────────────────────────────────────── */
  async function _checkUpdates() {
    try {
      const info = await call('updater_check');
      if (!info || !info.ok) return;                       // offline o errore → silenzio
      const nSupp = (info.supporto_changed || []).length;
      if (!info.app_update && nSupp === 0) return;          // già aggiornato
      state._updateInfo = info;
      _renderUpdateBanner(info);
    } catch (e) { /* l'assenza di rete non deve disturbare l'avvio */ }
  }

  function _renderUpdateBanner(info) {
    const old = document.getElementById('update-banner');
    if (old) old.remove();
    const nSupp = (info.supporto_changed || []).length;
    const appUp = !!info.app_update;
    const parts = [];
    if (appUp) parts.push(`nuova versione app (${escHtml(info.app_version_remote || '')})`);
    if (nSupp) parts.push(`${nSupp} file di supporto da aggiornare`);
    let btns = '';
    if (nSupp) btns += `<button class="ub-btn ub-primary" onclick="App.updaterApplySupporto()">Aggiorna supporto (${nSupp})</button>`;
    if (appUp) btns += `<button class="ub-btn" onclick="App.updaterDownloadApp()">Scarica nuova app</button>`;
    const bar = document.createElement('div');
    bar.id = 'update-banner';
    bar.className = 'update-banner';
    bar.innerHTML =
      `<span class="ub-ico">${ic('download', 16)}</span>` +
      `<span class="ub-txt">Aggiornamento disponibile · ${parts.join(' · ')}</span>` +
      `<span class="ub-actions">${btns}</span>` +
      `<button class="ub-close" title="Chiudi" onclick="App.updaterDismiss()">${ic('x', 14)}</button>`;
    document.body.appendChild(bar);
  }

  function updaterDismiss() {
    const bar = document.getElementById('update-banner');
    if (bar) bar.remove();
  }

  async function updaterApplySupporto() {
    const info = state._updateInfo || {};
    const list = info.supporto_changed || [];
    if (!list.length) { updaterDismiss(); return; }
    if (!info.root_configurata) {
      toast('Configura prima la cartella di supporto nelle impostazioni', 'error');
      return;
    }
    showLoading(`Aggiornamento file di supporto… (${list.length})`);
    const res = await call('updater_apply_supporto', list);
    hideLoading();
    if (res && res.ok) {
      toast(`Aggiornati ${res.scaricati} file di supporto`, 'success');
      updaterDismiss();
    } else {
      const falliti = (res && res.falliti) ? res.falliti.length : 0;
      const scar = (res && res.scaricati) || 0;
      const extra = (res && res.errore) ? ': ' + res.errore : '';
      toast(`Aggiornati ${scar}, non riusciti ${falliti}${extra}`, 'error', 5000);
    }
  }

  async function updaterDownloadApp() {
    const res = await call('updater_download_app');
    if (res && res.ok) {
      toast("Download avviato nel browser: scarica lo ZIP e sostituisci l'app", 'info', 6000);
    } else {
      toast('Impossibile avviare il download della nuova app', 'error');
    }
  }

  function toast(msg, type = 'info', duration = 3500) {
    const toastIcons = {
      success: ic('check',  14),
      error:   ic('x',      14),
      info:    ic('info',   14),
    };
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.innerHTML = `<span class="toast-icon">${toastIcons[type] || toastIcons.info}</span><span>${escHtml(msg)}</span>`;
    container.appendChild(el);
    setTimeout(() => {
      el.classList.add('out');
      el.addEventListener('animationend', () => el.remove(), { once: true });
    }, duration);
  }

  /* ── Utilities ──────────────────────────────────────────────────────── */
  function escHtml(s) {
    return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escAttr(s) {
    return String(s ?? '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // Escape per stringhe passate DENTRO un handler JS inline (on*="App.fn('...')").
  // escAttr NON basta: l'apostrofo (&#39;) viene ridecodificato dall'HTML e rompe
  // il literal JS. JSON.stringify produce una stringa JS valida e ci togliamo gli
  // apici esterni (li mettiamo noi nel template).
  function escJs(s) {
    return escAttr(JSON.stringify(String(s ?? '')).slice(1, -1));
  }

  /* ── Export bulk ────────────────────────────────────────────────────── */
  async function exportClientDocx() {
    if (!state.currentClient?.json_path) return;
    const hasDocs = (state.currentClient.chapters || []).some(ch => ch.output_path);
    if (!hasDocs) { toast('Nessun documento generato per questo cliente', 'error'); return; }
    showLoading('Copia DOCX in corso…');
    const res = await call('export_client_docx', state.currentClient.json_path);
    hideLoading();
    if (!res || res.cancelled) return;
    if (res.ok) toast(`${res.count} file copiati in: ${res.dest}`, 'success', 5000);
    else toast(res.error || 'Errore durante l\'esportazione', 'error');
  }

  async function exportClientPdf() {
    if (!state.currentClient?.json_path) return;
    const hasDocs = (state.currentClient.chapters || []).some(ch => ch.output_path);
    if (!hasDocs) { toast('Nessun documento generato per questo cliente', 'error'); return; }
    showLoading('Conversione PDF (Word in apertura)…');
    const res = await call('export_client_pdf', state.currentClient.json_path);
    hideLoading();
    if (!res || res.cancelled) return;
    if (res.ok) toast(`${res.count} PDF salvati in: ${res.dest}`, 'success', 5000);
    else toast(res.error || 'Errore durante la conversione', 'error');
  }

  /* ── Custom dropdown wrapper ─────────────────────────────────────────── */
  function wrapSelectCustom(sel) {
    if (!sel || sel.dataset.cselWrapped || sel.classList.contains('csel-hidden')) return;
    if (sel.closest('.csel')) return;
    sel.dataset.cselWrapped = '1';
    sel.classList.add('csel-hidden');

    const wrap = document.createElement('div');
    wrap.className = 'csel';

    const chevron = `<svg class="csel-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'csel-btn';
    btn.innerHTML = `<span class="csel-val"></span>${chevron}`;
    wrap.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'csel-panel';
    panel.setAttribute('role', 'listbox');
    document.body.appendChild(panel);

    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);

    function _posPanel() {
      const r = btn.getBoundingClientRect();
      panel.style.top   = `${r.bottom + 4}px`;
      panel.style.left  = `${r.left}px`;
      panel.style.width = `${r.width}px`;
    }

    const searchable = !!sel.dataset.searchable;

    function _renderOpts(filter) {
      const q = (filter || '').toLowerCase();
      let optsContainer = panel.querySelector('.csel-opts');
      if (!optsContainer) {
        optsContainer = document.createElement('div');
        optsContainer.className = 'csel-opts';
        panel.appendChild(optsContainer);
      }
      optsContainer.innerHTML = '';
      const val = sel.value;
      Array.from(sel.options).forEach(opt => {
        if (q && !opt.text.toLowerCase().includes(q)) return;
        const d = document.createElement('div');
        d.className = 'csel-opt' + (opt.value === val ? ' csel-sel' : '');
        d.setAttribute('role', 'option');
        d.dataset.val = opt.value;
        d.textContent = opt.text;
        d.addEventListener('mousedown', e => {
          e.preventDefault();
          sel.value = d.dataset.val;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          _close();
          _sync();
        });
        optsContainer.appendChild(d);
      });
    }

    function _sync() {
      if (searchable) {
        _renderOpts(panel.querySelector('.csel-search')?.value || '');
      } else {
        panel.innerHTML = '';
        _renderOpts('');
      }
      const selOpt = sel.options[sel.selectedIndex];
      btn.querySelector('.csel-val').textContent = selOpt ? selOpt.text : '';
    }

    function _open() {
      if (searchable && !panel.querySelector('.csel-search')) {
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'csel-search';
        inp.placeholder = 'Cerca…';
        inp.addEventListener('input', () => _renderOpts(inp.value));
        panel.insertBefore(inp, panel.firstChild);
      }
      _posPanel();
      wrap.classList.add('open');
      panel.classList.add('open');
      if (searchable) setTimeout(() => panel.querySelector('.csel-search')?.focus(), 10);
    }
    function _close() {
      wrap.classList.remove('open');
      panel.classList.remove('open');
    }

    btn.addEventListener('click', () => wrap.classList.contains('open') ? _close() : _open());
    document.addEventListener('mousedown', e => {
      if (!wrap.contains(e.target) && !panel.contains(e.target)) _close();
    });
    sel.addEventListener('change', _sync);

    _sync();
  }

  // Auto-wrap any <select> inserted into the DOM
  const _cselObs = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const sels = node.tagName === 'SELECT'
        ? [node]
        : [...(node.querySelectorAll?.('select:not(.csel-hidden)') ?? [])];
      sels.forEach(wrapSelectCustom);
    }));
  });
  _cselObs.observe(document.body, { childList: true, subtree: true });

  async function exportAllTogether() {
    if (!state.currentClient?.json_path) return;
    const hasDocs = (state.currentClient.chapters || []).some(ch => ch.output_path);
    if (!hasDocs) { toast('Nessun documento generato per questo cliente', 'error'); return; }
    showLoading('Esporta DOCX + PDF in corso…');
    const res = await call('export_client_all', state.currentClient.json_path);
    hideLoading();
    if (!res || res.cancelled) return;
    if (res.ok) toast(`${res.count} documenti (DOCX + PDF) salvati in: ${res.dest}`, 'success', 5000);
    else toast(res.error || 'Errore durante l\'esportazione', 'error');
  }

  function _buildSuggestedName(chId, formData) {
    const prefix = {
      '1':'1_Anagrafica','2':'2_ValRischi','3':'3_Luoghi','4':'4_Attrezzature',
      '5':'5_Segnaletica','6':'6_MMC','7':'7_MovimentiRipetitivi','8':'8_Videoterminali',
      '10':'10_Rumore','11':'11_Vibrazioni','14':'14_Chimico','17':'17_Biologico',
      '20':'20_Incendio','21':'21_StressLavoro','22':'22_NearMiss',
    }[String(chId)] || `${chId}_Cap`;
    const rag = ((formData && formData.ragione_sociale) || 'Azienda')
      .replace(/[^\w\s-]/g, '').trim();
    return `${prefix}_${rag}.docx`;
  }

  async function compileAllToFolder(format) {
    const client = state.currentClient;
    if (!client) return;
    // Gate template: evita errori a raffica se la cartella template non è configurata
    const tmplCheck = await call('check_template_configured');
    if (!tmplCheck?.ok) {
      toast((tmplCheck?.msg || 'Template non configurato') + ' — Vai in Configurazione', 'error', 5000);
      setTimeout(() => showConfig(), 700);
      return;
    }
    const chaptersList = (client.chapters || [])
      .filter(ch => (ch.form_data || ch.manual_edit) && !_isCapEscluso(ch.id))
      .map(ch => ({
        id: ch.id,
        form_data: ch.form_data || {},
        suggested_name: _buildSuggestedName(ch.id, ch.form_data || {}),
        manual_edit: !!ch.manual_edit,
        output_path: ch.output_path || '',
      }));
    if (!chaptersList.length) {
      toast('Nessun capitolo con dati da esportare.', 'error'); return;
    }
    const label = format === 'pdf' ? 'PDF' : format === 'all' ? 'DOCX + PDF' : 'DOCX';
    showLoading(`Generazione ${label} in corso…`);
    const apiCall = format === 'pdf' ? 'compile_all_to_folder_pdf'
                  : format === 'all' ? 'compile_all_to_folder_all'
                  : 'compile_all_to_folder';
    const res = await call(apiCall, chaptersList,
                           state.currentClient?.json_path || '');
    hideLoading();
    if (!res || res.cancelled) return;
    if (res.error) { toast(res.error, 'error'); return; }
    for (const item of (res.paths || [])) {
      const ch = (client.chapters || []).find(c => c.id === item.chapter_id);
      // I capitoli modificati a mano mantengono il loro .docx e il flag manual_edit:
      // non li ri-salviamo (altrimenti perderebbero la modifica manuale).
      if (ch && !ch.manual_edit) {
        await call('save_to_history',
          client.name || 'Azienda', client.json_path || '',
          item.chapter_id, `Capitolo ${item.chapter_id}`,
          item.path, ch.form_data
        );
      }
    }
    await refreshHistory();
    const updated = state.history.find(c => c.json_path === client.json_path);
    if (updated) { state.currentClient = updated; renderChaptersList(updated); }
    const alg = res.allegati;
    const msgAlg = (alg && alg.n)
      ? ` + ${alg.n} allegati (cartella "Allegati")`
      : '';
    toast(`${res.count} document${res.count === 1 ? 'o' : 'i'} salvati${msgAlg}`, 'success', 5000);
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('dvr-theme', next); } catch (e) {}
    call('save_config', { tema: next });
  }

  return {
    init, showHome, showClient, showConfig, toggleTheme,
    pickJson, openTechDrive, onDragOver, onDragLeave, onDrop, dismissImportSuccess,
    onPickTipoDvr, toggleDvrType, setClientSection, generaAllegati,
    apriCartellaAllegati, apriCartellaAllegatiCliente,
    onToggleTemplateCap, onToggleCapitoloEscluso,
    startChapter, recompileChapter, openChapterForm,
    goBackFromForm, toggleAutoSection,
    onFieldInput, onOptionSelect, onHomeSearch, onHomeFilter,
    onTableChange, addTableRow, removeTableRow,
    onCbgChange, addCbgRow, removeCbgRow,
    onInailSearch, onInailFocus, onInailBlur,
    selectInailCode, clearInailCode,
    previewChapter, onPreviewSaved, openFile, apriFogliCalcolo,
    pickRootFolder, pickClientiFolder, saveConfig,
    deleteClient, applySavedFormData,
    onChapterFilter, continuaProssimo,
    // Navigazione capitoli
    saveChapterDraft, goToNextChapter, goToPrevChapter,
    editChapter, exportChapterFromHistory, previewChapterFromHistory,
    // Cap2 editor
    toggleCap2Group, onCap2FieldChange, onCap2SchedaChange,
    addCap2Fase, removeCap2Fase, onCap2FaseDpiToggle,
    // Cap3 editor
    toggleCap3Locale, onCap3FieldChange, onCap3RischioChange, onCap3PresenteToggle,
    onCap3AddManual, onCap3AddLocale, onCap3RemoveLocale,
    // Cap4 editor
    onCap4Change, onCap4AttrChange, onCap4AttrInclude, onCap4Ispezione,
    // Cap5 editor
    onCap5Toggle,
    // Cap1 turno picker
    onTurnoChange,
    // Cap8 editor
    onCap8Change,
    // Procedure picker
    onProcedureChange, filterProcedures,
    // Cap20 editor
    onCap20Field, onCap20Sn, onCap20Livello, onCap20ArrText, onCap20Gruppo,
    toggleCap20Full, onCap20Dpr,
    onCap0Toggle,
    onCap0DataEmissione,
    onCap0SuperG,
    openChecklist, closeChecklist, saveChecklist, toggleClientWarn, toggleChecklistWarn, gotoChecklistField,
    onCap20PE, onCap20LF, onCap20Global, onCap20Strategia,
    onCap20DprSearch, onCap20DprSelect, onCap20DprBlur,
    toggleC20Area,
    // Cap6 editor
    onC6VarToggle,
    // Cap10 editor
    onC10Fonometro, onC10GruppoField, onC10AttSel,
    onC10AddGruppo, onC10RemoveGruppo,
    onC10AddPostazione, onC10RemovePostazione, onC10PostazioneField,
    onC10Misura, onC10Sorgente, onC10AddSorgente, onC10RemoveSorgente,
    onC10Lavoratore, onC10AddLavoratore, onC10RemoveLav,
    onC10Prescrizione,
    toggleC10Gruppo,
    // Cap14 editor
    pickSchedaValutazione, removeSchedaValutazione,
    onCap14SchedaToggle, onCap14Search,
    // Cap7 editor
    onC7SchedaToggle,
    // Cap17 editor
    onC17Settore,
    // Cap21 editor
    onC21Settore, onC21GruppoNome, onC21MergeCheck,
    onC21AccorpaSubmit, onC21SciogliGruppo, onC21DataField,
    // Cap11 editor
    onC11GruppoField, onC11HavToggle, onC11WbvToggle,
    onC11HavField, onC11WbvField,
    onC11AddHav, onC11RemoveHav, onC11AddWbv, onC11RemoveWbv,
    onC11AddGruppo, onC11RemoveGruppo,
    onC11PrescrizioneHav, onC11PrescrizioneWbv, onC11PrescrizioneGen,
    exportClientDocx, exportClientPdf, exportAllTogether, compileAllToFolder,
    testSmtp, surveyInviaOra, confirmSurveyEmail,
    salvaEmailCoda, showReleaseNotes, askSurveyEmailForClient,
    toast, showLoading, hideLoading,
    // Aggiornamenti GitHub
    updaterDismiss, updaterApplySupporto, updaterDownloadApp,
  };
})();

// Espone App su window così che il backend (watcher anteprima) possa
// invocarlo via evaluate_js("window.App.onPreviewSaved()").
window.App = App;

/* ── Bootstrap ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => App.init());
