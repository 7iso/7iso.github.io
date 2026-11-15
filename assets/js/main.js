/* Portfolio — Mostapha Guendouz */

const EMAIL = 'alaaguendouz@gmail.com';

const CATEGORIES = {
  llm: { label: 'IA générative', gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
  mlops: { label: 'ML & MLOps', gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)' },
  cv: { label: 'Vision', gradient: 'linear-gradient(135deg,#f43f5e,#f59e0b)' },
  data: { label: 'Data & BI', gradient: 'linear-gradient(135deg,#10b981,#0ea5e9)' },
  research: { label: 'Recherche', gradient: 'linear-gradient(135deg,#a855f7,#ec4899)' },
};

/* Chaque projet : la démo ou le code sont disponibles sur demande. */
const PROJECTS = [
  {
    id: 'text2sql', cat: 'llm', icon: 'bx-message-square-dots', featured: true,
    title: 'Agent conversationnel Text-to-SQL',
    short: "Interrogez une base de données en langage naturel : un LLM génère le SQL, l'exécute en lecture seule et résume les résultats.",
    context: 'Stage — ingénierie IA générative',
    desc: "Application de chat permettant aux équipes métier d'interroger une base de données relationnelle sans écrire de SQL. Le schéma est extrait automatiquement et fourni au LLM, qui produit une requête dans le bon dialecte ; celle-ci passe par un garde-fou avant exécution, puis les résultats sont présentés sous forme de tableau et de synthèse.",
    highlights: [
      'Introspection automatique du schéma (SQLite et MySQL) injectée dans le prompt',
      'Garde-fou lecture seule : uniquement SELECT / WITH, blocage des requêtes DDL/DML et multi-instructions',
      'Synthèse des résultats en langage naturel pour un public non technique',
      "Mode dégradé à base de règles lorsque l'API du LLM est indisponible",
      'Authentification, historique de conversation, test de connexion au modèle',
    ],
    metrics: [['−40 %', "temps d'accès aux données"]],
    stack: ['LangChain', 'Groq / Llama', 'Streamlit', 'SQLAlchemy', 'SQLite', 'MySQL'],
  },
  {
    id: 'rag', cat: 'llm', icon: 'bx-search-alt', featured: true,
    title: "Application RAG de niveau entreprise",
    short: 'Assistant RAG agentique avec ingestion robuste, recherche hybride, reranking, garde-fous et observabilité complète.',
    context: 'Projet personnel',
    desc: "Conception d'une application RAG pensée pour la production : de l'ingestion de documents propres ou bruités jusqu'à la génération de réponses tracées et sécurisées.",
    highlights: [
      "Pipeline d'ingestion pour données propres et bruitées, stratégies de chunking (taille, chevauchement)",
      'Embeddings et base vectorielle, recherche hybride et reranking des passages',
      'Mécanismes de repli (fallback) lorsque la recherche ne trouve pas de contexte pertinent',
      'Garde-fous : protection contre le jailbreak, filtrage des sujets sensibles (topic guard)',
      'Observabilité : traces, spans et analyse en cascade (Logfire), passerelle LLM et cache',
    ],
    metrics: [],
    stack: ['Python', 'LangChain', 'Base vectorielle', 'Reranker', 'Logfire', 'Docker'],
  },
  {
    id: 'aqi', cat: 'mlops', icon: 'bx-wind', featured: true,
    title: "Surveillance de la qualité de l'air à Paris",
    short: 'Collecte météo + PM2.5, base SQLite, application de bureau et prédiction de la pollution avec 10 modèles comparés.',
    context: 'Projet universitaire',
    desc: "Outil d'analyse de la qualité de l'air à Paris (station Montsouris) : scraping de la météo quotidienne, jointure avec les données PM2.5 (indice AQI EPA), stockage SQLite et interface graphique pour consulter, filtrer, corréler et prédire.",
    highlights: [
      'Pipeline de scraping avec cache, parsing et jointure par date (corrige un décalage de 174 lignes de la version initiale)',
      'Base SQLite avec requêtes paramétrées et historique des analyses de corrélation',
      'Interface Tkinter : consultation/édition des données, filtres (moyenne mobile, z-score), corrélations, prédiction',
      'Feature engineering sans fuite : décalages calendaires, saisonnalité sin/cos, historique PM des jours précédents',
      'Split chronologique + validation TimeSeriesSplit ; comparaison face aux baselines climatologie et persistance',
    ],
    metrics: [['10', 'modèles comparés'], ['2020–2025', 'données quotidiennes']],
    stack: ['Python', 'pandas', 'scikit-learn', 'SQLite', 'Tkinter', 'Matplotlib', 'BeautifulSoup'],
  },
  {
    id: 'fraud', cat: 'mlops', icon: 'bx-shield-x',
    title: "Détection de fraude à l'assurance en temps réel",
    short: 'Plateforme de bout en bout : ingestion, validation, segmentation des assurés et inférence en moins de 200 ms.',
    context: 'Mission de conseil',
    desc: "Plateforme de détection de fraude sur des déclarations de sinistres, de la validation des données brutes jusqu'à l'inférence temps réel et au monitoring en production.",
    highlights: [
      'Validation et chargement automatisés des lots de données (Airflow) avant entraînement et prédiction',
      'Segmentation des assurés par K-Means, puis sélection du meilleur modèle par cluster (SVM, XGBoost) selon l\'AUC',
      'Service d\'inférence conteneurisé avec un SLA inférieur à 200 ms',
      'CI/CD et registre de modèles versionné pour la traçabilité',
      'Monitoring du drift, de la latence et du coût d\'inférence (Prometheus / Grafana)',
    ],
    metrics: [['+12 %', 'taux de détection'], ['< 200 ms', 'latence d\'inférence']],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Airflow', 'Docker', 'Cloud Foundry', 'Prometheus', 'Grafana'],
  },
  {
    id: 'anpr', cat: 'cv', icon: 'bx-car',
    title: "Lecture automatique de plaques d'immatriculation",
    short: 'Détection de la plaque puis reconnaissance des caractères en deux étapes, exposée via une API REST.',
    context: 'Mission de conseil',
    desc: "Système ANPR (Automatic Number Plate Recognition) qui localise la plaque dans une image ou une vidéo, la recadre, puis reconnaît chaque caractère avec un détecteur dédié.",
    highlights: [
      'Pipeline en deux étapes avec SSD (TensorFlow Object Detection API) : plaque, puis caractères',
      'Traitement d\'images et de flux vidéo',
      'API REST Flask recevant les images encodées en base64',
      'Déploiement sur une plateforme cloud PaaS',
    ],
    metrics: [],
    stack: ['TensorFlow', 'Object Detection API', 'SSD', 'OpenCV', 'Flask'],
  },
  {
    id: 'helmet', cat: 'cv', icon: 'bx-hard-hat',
    title: 'Détection du port du casque',
    short: 'Détecteur d\'objets identifiant les motards avec et sans casque, servi par une API de prédiction.',
    context: 'Mission de conseil',
    desc: "Modèle de détection d'objets entraîné pour la sécurité routière : il repère les motos et distingue les conducteurs portant un casque de ceux qui n'en portent pas.",
    highlights: [
      'Fine-tuning de SSD MobileNet (pré-entraîné sur COCO) sur 3 classes : moto, avec casque, sans casque',
      'Annotation, conversion en TFRecords et carte des labels',
      'Endpoint /predict Flask (image base64 → boîtes et scores)',
      'Déployé sur une plateforme PaaS',
    ],
    metrics: [['3', 'classes détectées']],
    stack: ['TensorFlow', 'SSD MobileNet', 'OpenCV', 'Flask'],
  },
  {
    id: 'vehicle', cat: 'cv', icon: 'bx-bus',
    title: 'Détection de véhicules',
    short: 'Détection multi-classes de véhicules dans des images, exposée sous forme de service web.',
    context: 'Mission de conseil',
    desc: "Service de détection de véhicules basé sur un modèle SSD MobileNet, conçu pour être intégré dans des applications d'analyse de trafic.",
    highlights: [
      'Détecteur SSD MobileNet adapté au cas d\'usage',
      'API Flask de prédiction avec retour des boîtes englobantes et des scores',
      'Packaging et déploiement sur une plateforme PaaS',
    ],
    metrics: [],
    stack: ['TensorFlow', 'SSD MobileNet', 'Flask'],
  },
  {
    id: 'hr', cat: 'data', icon: 'bx-group',
    title: 'HR Analytics — tableau de bord RH',
    short: 'Analyse exploratoire de données RH et tableau de bord interactif pour le suivi des indicateurs emploi.',
    context: 'Mission de conseil',
    desc: "Projet d'analytique RH : extraction depuis une base MySQL, analyse exploratoire en Python et restitution des indicateurs clés dans un tableau de bord Tableau à plusieurs pages.",
    highlights: [
      'Import et nettoyage d\'un dump MySQL',
      'Analyse exploratoire (EDA) dans un notebook Python',
      'Tableau de bord Tableau : page d\'accueil, statistiques et visualisations',
      'Synthèse des insights pour les équipes métier',
    ],
    metrics: [],
    stack: ['Python', 'pandas', 'MySQL', 'Tableau'],
  },
  {
    id: 'ts', cat: 'data', icon: 'bx-trending-up',
    title: 'Prévision de séries temporelles',
    short: 'Comparaison ARIMA vs Prophet sur une série mensuelle saisonnière et restitution dans Power BI.',
    context: 'Mission de conseil',
    desc: "Étude de prévision sur une série temporelle mensuelle fortement saisonnière (trafic aérien) : analyse de la stationnarité, modélisation et comparaison des approches.",
    highlights: [
      'Décomposition tendance / saisonnalité, tests de stationnarité, différenciation',
      'Modèles ARIMA / SARIMA et Facebook Prophet',
      'Évaluation sur période de test et comparaison des erreurs',
      'Tableau de bord de prévision dans Power BI',
    ],
    metrics: [],
    stack: ['Python', 'statsmodels', 'Prophet', 'Power BI'],
  },
  {
    id: 'ocr', cat: 'research', icon: 'bx-file-find',
    title: 'Analyse d\'ordonnances médicales (mémoire)',
    short: 'Classification des zones textuelles et non textuelles d\'ordonnances : CNN + Random Forest, 95 % de précision.',
    context: 'Mémoire de Master — ENS',
    desc: "Pipeline multimodale combinant OCR, vision par ordinateur et transformers pour segmenter et classifier automatiquement les zones d'ordonnances médicales.",
    highlights: [
      'Pré-traitement : niveaux de gris, érosion/dilatation, binarisation d\'Otsu',
      'Augmentation synthétique (flou, bruit gaussien, retournement) pour mieux généraliser',
      'Modèle hybride CNN + Random Forest',
      'Interface web de visualisation des zones détectées en temps réel',
      'Évaluation de la robustesse face aux injections de prompt et contrôle d\'accès aux données sensibles',
    ],
    metrics: [['95 %', 'précision globale'], ['> 0,90', 'F1-score par classe']],
    stack: ['Python', 'OpenCV', 'OCR', 'CNN', 'Random Forest', 'Transformers'],
  },
  {
    id: 'nas', cat: 'research', icon: 'bx-network-chart',
    title: 'Évaluation zero-shot en Neural Architecture Search',
    short: 'Recherche sur les proxies zero-shot pour évaluer des architectures sans entraînement — poster présenté à IndabaX.',
    context: 'Projet de recherche — 2022',
    desc: "Étude des méthodes zero-shot qui estiment la qualité d'une architecture de réseau de neurones sans l'entraîner, afin d'accélérer drastiquement la recherche d'architectures.",
    highlights: [
      'Revue et expérimentation de proxies zero-shot pour le NAS',
      'Co-rédaction d\'un poster scientifique',
      'Présentation à la conférence IndabaX Algérie devant un public pluridisciplinaire',
    ],
    metrics: [],
    stack: ['PyTorch', 'Deep Learning', 'NAS'],
  },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const requestLink = (p) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Demande de démo / code — ${p.title}`)}`;

/* ── Projets ── */
function renderProjects() {
  const grid = $('#projectGrid');
  grid.innerHTML = PROJECTS.map((p) => {
    const c = CATEGORIES[p.cat];
    return `
      <button class="card proj reveal" data-cat="${p.cat}" data-id="${p.id}" aria-label="Détails : ${esc(p.title)}">
        <div class="proj-cover" style="background:${c.gradient}">
          <span class="badge">${p.featured ? '⭐ ' : ''}${esc(c.label)}</span>
          <i class='bx ${p.icon}'></i>
        </div>
        <div class="proj-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.short)}</p>
          <div class="tags">${p.stack.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
          <div class="proj-foot">
            <span class="on-demand"><i class='bx bx-lock-alt'></i> Démo / code sur demande</span>
            <span class="more">Détails <i class='bx bx-right-arrow-alt'></i></span>
          </div>
        </div>
      </button>`;
  }).join('');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.proj');
    if (card) openModal(card.dataset.id);
  });
}

function setupFilters() {
  $$('.filter').forEach((btn) => btn.addEventListener('click', () => {
    $$('.filter').forEach((b) => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    $$('.proj').forEach((card) => card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f));
  }));
}

/* ── Modale ── */
let lastFocus = null;
function openModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const c = CATEGORIES[p.cat];
  $('#modalBody').innerHTML = `
    <div class="modal-head" style="background:${c.gradient}">
      <span class="badge">${esc(c.label)}</span>
      <h3 id="modalTitle">${esc(p.title)}</h3>
      <p>${esc(p.context)}</p>
    </div>
    <div class="modal-content">
      <p>${esc(p.desc)}</p>
      ${p.metrics.length ? `<div class="metrics">${p.metrics.map(([v, l]) => `<div class="metric">${esc(v)}<small>${esc(l)}</small></div>`).join('')}</div>` : ''}
      <div>
        <h4>Points clés</h4>
        <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      </div>
      <div>
        <h4>Stack technique</h4>
        <div class="tags">${p.stack.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="request">
        <span><i class='bx bx-lock-alt'></i> Démo ou code disponibles sur demande</span>
        <a class="btn btn-primary" href="${requestLink(p)}"><i class='bx bx-envelope'></i> Demander une démo</a>
      </div>
    </div>`;
  lastFocus = document.activeElement;
  $('#modal').hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal-close').focus();
}
function closeModal() {
  $('#modal').hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

/* ── Thème ── */
function setupTheme() {
  const btn = $('#themeToggle');
  const sync = () => {
    btn.innerHTML = document.documentElement.dataset.theme === 'dark' ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
  };
  sync();
  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* stockage indisponible */ }
    sync();
  });
}

/* ── Navigation ── */
function setupNav() {
  const nav = $('#nav');
  const burger = $('#burger');
  const links = $('#navLinks');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.innerHTML = open ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
  });
  $$('a', links).forEach((a) => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = "<i class='bx bx-menu'></i>";
  }));

  const sections = $$('main section[id]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$('a', links).forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* ── Texte animé ── */
function setupTyped() {
  const el = $('#typed');
  const words = ['Production LLM Engineer', 'Ingénieur IA générative', 'MLOps / LLMOps', 'Data Scientist'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let w = 0, i = words[0].length, del = true;
  const tick = () => {
    const word = words[w];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = del ? 40 : 80;
    if (!del && i === word.length) { del = true; delay = 2200; }
    else if (del && i === 0) { del = false; w = (w + 1) % words.length; delay = 300; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

/* ── Compteurs & apparition ── */
function setupCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const step = (t) => {
        const k = Math.min((t - start) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: .5 });
  $$('[data-count]').forEach((el) => obs.observe(el));
}

function setupReveal() {
  $$('.card:not(.proj), .tl-item').forEach((el) => el.classList.add('reveal'));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); } });
  }, { threshold: .08 });
  $$('.reveal').forEach((el) => obs.observe(el));
}

/* ── Contact ── */
function setupContact() {
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = f.get('subject') || `Contact depuis le portfolio — ${f.get('name')}`;
    const body = `${f.get('message')}\n\n— ${f.get('name')}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupFilters();
  setupTheme();
  setupNav();
  setupTyped();
  setupCounters();
  setupReveal();
  setupContact();
  $('#year').textContent = new Date().getFullYear();
  $$('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });
});
