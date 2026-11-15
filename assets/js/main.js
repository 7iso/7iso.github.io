/* Portfolio — Mostapha Guendouz */

const EMAIL = 'alaaguendouz@gmail.com';
const LANG = document.documentElement.lang === 'en' ? 'en' : 'fr';

/* Textes d'interface — le français est la langue principale. */
const UI = {
  fr: {
    cats: { llm: 'IA générative', mlops: 'ML & MLOps', research: 'Recherche' },
    details: 'Détails', detailsAria: 'Détails : ', onDemandShort: 'Démo / code sur demande',
    keyPoints: 'Points clés', stack: 'Stack technique',
    onDemand: 'Démo ou code disponibles sur demande', requestBtn: 'Demander une démo',
    requestSubject: 'Demande de démo / code — ',
    contactSubject: 'Contact depuis le portfolio — ',
    typed: ['Production LLM Engineer', 'Ingénieur IA générative', 'MLOps / LLMOps', 'Data Scientist'],
  },
  en: {
    cats: { llm: 'Generative AI', mlops: 'ML & MLOps', research: 'Research' },
    details: 'Details', detailsAria: 'Details: ', onDemandShort: 'Demo / code on request',
    keyPoints: 'Key points', stack: 'Tech stack',
    onDemand: 'Demo or code available on request', requestBtn: 'Request a demo',
    requestSubject: 'Demo / code request — ',
    contactSubject: 'Contact from portfolio — ',
    typed: ['Production LLM Engineer', 'Generative AI Engineer', 'MLOps / LLMOps', 'Data Scientist'],
  },
}[LANG];

const CATEGORIES = {
  llm: { label: UI.cats.llm, gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
  mlops: { label: UI.cats.mlops, gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)' },
  research: { label: UI.cats.research, gradient: 'linear-gradient(135deg,#a855f7,#ec4899)' },
};

/* Chaque projet : la démo ou le code sont disponibles sur demande. */
const PROJECTS_FR = [
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
    context: 'Projet freelance',
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
    short: 'Pipeline end-to-end sur données réelles de la station Paris-Montsouris : collecte, base SQLite, application et prédiction PM2.5 (10 modèles).',
    context: 'Projet universitaire — pipeline end-to-end sur données réelles (station Paris-Montsouris)',
    desc: "Pipeline de bout en bout construit sur des données réelles de la station Paris-Montsouris : collecte automatisée de la météo quotidienne, jointure avec les mesures PM2.5 (indice AQI EPA), stockage SQLite, application graphique pour consulter, filtrer et corréler les données, puis entraînement et comparaison de modèles de prédiction.",
    highlights: [
      'Données réelles 2020–2025 : météo quotidienne de la station Paris-Montsouris et mesures PM2.5 de Paris',
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
  {
    id: 'fraud', cat: 'mlops', icon: 'bx-shield-x',
    title: "Détection de fraude à l'assurance en temps réel",
    short: 'Segmentation K-Means des assurés puis meilleur modèle par cluster (SVM, XGBoost) : +12 % de taux de détection, inférence < 200 ms.',
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Plateforme de détection de fraude sur des déclarations de sinistres, de la validation des données brutes jusqu'à l'inférence temps réel et au monitoring en production. Les assurés sont d'abord segmentés par K-Means, puis le meilleur modèle est sélectionné pour chaque cluster (SVM, XGBoost).",
    highlights: [
      'Validation et chargement automatisés des lots de données (Airflow) avant entraînement et prédiction',
      'Segmentation des assurés par K-Means',
      "Sélection du meilleur modèle par cluster (SVM, XGBoost) selon l'AUC",
      "Service d'inférence conteneurisé (Docker) avec un SLA inférieur à 200 ms",
      'CI/CD et registre de modèles versionné pour la traçabilité',
      "Monitoring du drift, de la latence et du coût d'inférence (Prometheus / Grafana)",
    ],
    metrics: [['+12 %', 'taux de détection'], ['< 200 ms', "temps d'inférence"]],
    stack: ['XGBoost', 'SVM', 'K-Means', 'Docker', 'Airflow', 'CI/CD', 'Prometheus', 'Grafana'],
  },
  {
    id: 'anpr', cat: 'mlops', icon: 'bx-car',
    title: "Lecture automatique de plaques d'immatriculation (ANPR)",
    short: 'Détection de la plaque puis reconnaissance des caractères en deux étapes avec SSD, exposée via une API REST Flask.',
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Système ANPR (Automatic Number Plate Recognition) en deux étapes : un premier détecteur SSD localise la plaque dans une image ou une vidéo, la recadre, puis un second détecteur reconnaît chaque caractère. Le tout est exposé via une API REST Flask.",
    highlights: [
      'Étape 1 : détection de la plaque avec SSD (TensorFlow Object Detection API)',
      'Recadrage de la plaque détectée (OpenCV)',
      'Étape 2 : reconnaissance de chaque caractère avec un détecteur dédié',
      "Traitement d'images et de flux vidéo",
      'API REST Flask recevant les images encodées en base64',
      'Déploiement sur une plateforme cloud PaaS',
    ],
    metrics: [],
    stack: ['TensorFlow', 'Object Detection API', 'SSD', 'OpenCV', 'Flask', 'API REST'],
  },
  {
    id: 'helmet', cat: 'mlops', icon: 'bx-hard-hat',
    title: 'Détection du port du casque',
    short: 'Fine-tuning de SSD MobileNet sur 3 classes (moto, avec casque, sans casque), servi par une API Flask sur une PaaS.',
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Modèle de détection d'objets entraîné pour la sécurité routière : il repère les motos et distingue les conducteurs portant un casque de ceux qui n'en portent pas. Le modèle est servi par une API Flask déployée sur une plateforme PaaS.",
    highlights: [
      'Fine-tuning de SSD MobileNet (pré-entraîné sur COCO)',
      '3 classes : moto, avec casque, sans casque',
      'Annotation des images, conversion en TFRecords et carte des labels',
      'Endpoint /predict Flask (image base64 → boîtes englobantes et scores)',
      'Déployé sur une plateforme PaaS',
    ],
    metrics: [['3', 'classes']],
    stack: ['TensorFlow', 'SSD MobileNet', 'OpenCV', 'Flask', 'PaaS'],
  },
  {
    id: 'vehicle', cat: 'mlops', icon: 'bx-traffic-cone',
    title: 'Détection de véhicules',
    short: "Détecteur SSD MobileNet pour l'analyse de trafic, déployé comme service web de prédiction.",
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Service de détection de véhicules basé sur un modèle SSD MobileNet, conçu pour être intégré dans des applications d'analyse de trafic et déployé comme service web de prédiction.",
    highlights: [
      "Détecteur SSD MobileNet adapté au cas d'usage",
      "Cas d'usage : analyse de trafic",
      'API Flask de prédiction renvoyant les boîtes englobantes et les scores',
      'Packaging et déploiement sur une plateforme PaaS',
    ],
    metrics: [],
    stack: ['TensorFlow', 'SSD MobileNet', 'Flask', 'Vision par ordinateur'],
  },
  {
    id: 'hr', cat: 'mlops', icon: 'bx-group',
    title: 'HR Analytics',
    short: 'Analyse exploratoire de données RH extraites de MySQL, indicateurs clés restitués dans un tableau de bord Tableau.',
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Projet d'analytique RH : extraction depuis une base MySQL, analyse exploratoire en Python et restitution des indicateurs clés dans un tableau de bord Tableau à plusieurs pages.",
    highlights: [
      "Import et nettoyage d'un dump MySQL",
      'Analyse exploratoire des données (EDA) dans un notebook Python',
      "Tableau de bord Tableau à plusieurs pages : page d'accueil, statistiques et visualisations",
      'Synthèse des insights pour les équipes métier',
    ],
    metrics: [],
    stack: ['SQL', 'MySQL', 'Python', 'pandas', 'Tableau'],
  },
  {
    id: 'timeseries', cat: 'mlops', icon: 'bx-line-chart',
    title: 'Prévision de séries temporelles',
    short: 'Comparaison ARIMA/SARIMA et Prophet sur une série mensuelle saisonnière, prévisions restituées dans Power BI.',
    context: 'Consultant ML à distance — Bangalore, Inde · 2020–2022',
    desc: "Étude de prévision sur une série temporelle mensuelle fortement saisonnière (trafic aérien) : analyse de la stationnarité, modélisation, comparaison des approches (ARIMA/SARIMA et Prophet) et restitution des prévisions dans Power BI.",
    highlights: [
      'Décomposition tendance / saisonnalité, tests de stationnarité, différenciation',
      'Modèles ARIMA / SARIMA (statsmodels) et Facebook Prophet',
      'Évaluation sur une période de test et comparaison des erreurs',
      'Prévisions restituées dans un tableau de bord Power BI',
    ],
    metrics: [],
    stack: ['Python', 'statsmodels', 'ARIMA / SARIMA', 'Prophet', 'Power BI'],
  },
];

/* English version — same projects, same order. */
const PROJECTS_EN = [
  {
    id: 'text2sql', cat: 'llm', icon: 'bx-message-square-dots', featured: true,
    title: 'Conversational Text-to-SQL Agent',
    short: 'Query a database in plain language: an LLM writes the SQL, runs it read-only and summarises the results.',
    context: 'Internship — Generative AI engineering',
    desc: 'A chat application that lets business teams query a relational database without writing SQL. The schema is extracted automatically and given to the LLM, which writes a query in the right dialect; the query goes through a safety guard before it runs, and the results are shown as a table plus a plain-language summary.',
    highlights: [
      'Automatic schema introspection (SQLite and MySQL) injected into the prompt',
      'Read-only guard: SELECT / WITH only, DDL/DML and multi-statement queries blocked',
      'Natural-language summary of results for non-technical users',
      'Rule-based fallback mode when the LLM API is unavailable',
      'Authentication, conversation history, model connection test',
    ],
    metrics: [['−40 %', 'data access time']],
    stack: ['LangChain', 'Groq / Llama', 'Streamlit', 'SQLAlchemy', 'SQLite', 'MySQL'],
  },
  {
    id: 'rag', cat: 'llm', icon: 'bx-search-alt', featured: true,
    title: 'Enterprise-Grade RAG Application',
    short: 'Agentic RAG assistant with robust ingestion, hybrid search, reranking, guardrails and full observability.',
    context: 'Freelance project',
    desc: 'Design of a production-ready RAG application: from ingesting clean or noisy documents to generating traced, secured answers.',
    highlights: [
      'Ingestion pipeline for clean and noisy data, chunking strategies (size, overlap)',
      'Embeddings and vector store, hybrid search and passage reranking',
      'Fallback mechanisms when retrieval finds no relevant context',
      'Guardrails: jailbreak protection, sensitive-topic filtering (topic guard)',
      'Observability: traces, spans and waterfall analysis (Logfire), LLM gateway and caching',
    ],
    metrics: [],
    stack: ['Python', 'LangChain', 'Vector store', 'Reranker', 'Logfire', 'Docker'],
  },
  {
    id: 'aqi', cat: 'mlops', icon: 'bx-wind', featured: true,
    title: 'Paris Air-Quality Monitoring',
    short: 'End-to-end pipeline on real data from the Paris-Montsouris station: collection, SQLite database, desktop app and PM2.5 prediction (10 models).',
    context: 'University project — end-to-end pipeline on real-world data (Paris-Montsouris station)',
    desc: 'End-to-end pipeline built on real data from the Paris-Montsouris station: automated collection of daily weather, join with PM2.5 measurements (US EPA AQI index), SQLite storage, a desktop app to browse, filter and correlate the data, then training and comparison of prediction models.',
    highlights: [
      'Real 2020–2025 data: daily weather from the Paris-Montsouris station and Paris PM2.5 measurements',
      'Scraping pipeline with caching, parsing and a date-based join (fixes a 174-row misalignment in the first version)',
      'SQLite database with parameterised queries and a history of correlation runs',
      'Tkinter app: browse/edit data, filters (moving average, z-score), correlations, prediction',
      'Leak-free feature engineering: calendar lags, sin/cos seasonality, previous-day PM history',
      'Chronological split + TimeSeriesSplit validation; benchmarked against climatology and persistence baselines',
    ],
    metrics: [['10', 'models compared'], ['2020–2025', 'daily data']],
    stack: ['Python', 'pandas', 'scikit-learn', 'SQLite', 'Tkinter', 'Matplotlib', 'BeautifulSoup'],
  },
  {
    id: 'ocr', cat: 'research', icon: 'bx-file-find',
    title: 'Medical Prescription Analysis (thesis)',
    short: 'Classifying text and non-text regions of prescriptions: CNN + Random Forest, 95 % accuracy.',
    context: "Master's thesis — ENS",
    desc: 'Multimodal pipeline combining OCR, computer vision and transformers to automatically segment and classify regions of medical prescriptions.',
    highlights: [
      "Pre-processing: grayscale, erosion/dilation, Otsu binarisation",
      'Synthetic augmentation (blur, Gaussian noise, flipping) for better generalisation',
      'Hybrid CNN + Random Forest model',
      'Web interface showing detected regions in real time',
      'Robustness testing against prompt injection and access control for sensitive data',
    ],
    metrics: [['95 %', 'overall accuracy'], ['> 0.90', 'F1-score per class']],
    stack: ['Python', 'OpenCV', 'OCR', 'CNN', 'Random Forest', 'Transformers'],
  },
  {
    id: 'nas', cat: 'research', icon: 'bx-network-chart',
    title: 'Zero-Shot Evaluation for Neural Architecture Search',
    short: 'Research on zero-shot proxies that score architectures without training — poster presented at IndabaX.',
    context: 'Research project — 2022',
    desc: 'Study of zero-shot methods that estimate the quality of a neural network architecture without training it, to drastically speed up architecture search.',
    highlights: [
      'Review and experiments with zero-shot proxies for NAS',
      'Co-authored a scientific poster',
      'Presented at the IndabaX Algeria conference to a multidisciplinary audience',
    ],
    metrics: [],
    stack: ['PyTorch', 'Deep Learning', 'NAS'],
  },
  {
    id: 'fraud', cat: 'mlops', icon: 'bx-shield-x',
    title: 'Real-Time Insurance Fraud Detection',
    short: 'K-Means segmentation of policyholders, then the best model per cluster (SVM, XGBoost): +12 % detection rate, < 200 ms inference.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'Fraud detection platform for insurance claims, from raw-data validation to real-time inference and production monitoring. Policyholders are first segmented with K-Means, then the best model is picked for each cluster (SVM, XGBoost).',
    highlights: [
      'Automated validation and loading of data batches (Airflow) before training and prediction',
      'Policyholder segmentation with K-Means',
      'Best model selected per cluster (SVM, XGBoost) based on AUC',
      'Containerised inference service (Docker) with a sub-200 ms SLA',
      'CI/CD and a versioned model registry for traceability',
      'Monitoring of drift, latency and inference cost (Prometheus / Grafana)',
    ],
    metrics: [['+12 %', 'detection rate'], ['< 200 ms', 'inference time']],
    stack: ['XGBoost', 'SVM', 'K-Means', 'Docker', 'Airflow', 'CI/CD', 'Prometheus', 'Grafana'],
  },
  {
    id: 'anpr', cat: 'mlops', icon: 'bx-car',
    title: 'Automatic Number Plate Recognition (ANPR)',
    short: 'Two-stage plate detection and character recognition with SSD, exposed through a Flask REST API.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'Two-stage ANPR (Automatic Number Plate Recognition) system: a first SSD detector locates the plate in an image or video and crops it, then a second detector reads each character. Everything is exposed through a Flask REST API.',
    highlights: [
      'Stage 1: plate detection with SSD (TensorFlow Object Detection API)',
      'Cropping of the detected plate (OpenCV)',
      'Stage 2: recognition of each character with a dedicated detector',
      'Handles both images and video streams',
      'Flask REST API receiving base64-encoded images',
      'Deployed on a cloud PaaS platform',
    ],
    metrics: [],
    stack: ['TensorFlow', 'Object Detection API', 'SSD', 'OpenCV', 'Flask', 'REST API'],
  },
  {
    id: 'helmet', cat: 'mlops', icon: 'bx-hard-hat',
    title: 'Helmet Detection',
    short: 'SSD MobileNet fine-tuned on 3 classes (motorbike, helmet, no helmet), served by a Flask API on a PaaS.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'Object detection model trained for road safety: it spots motorbikes and tells riders wearing a helmet apart from those who are not. The model is served by a Flask API deployed on a PaaS platform.',
    highlights: [
      'Fine-tuned SSD MobileNet (pre-trained on COCO)',
      '3 classes: motorbike, helmet, no helmet',
      'Image annotation, conversion to TFRecords and label map',
      'Flask /predict endpoint (base64 image → bounding boxes and scores)',
      'Deployed on a PaaS platform',
    ],
    metrics: [['3', 'classes']],
    stack: ['TensorFlow', 'SSD MobileNet', 'OpenCV', 'Flask', 'PaaS'],
  },
  {
    id: 'vehicle', cat: 'mlops', icon: 'bx-traffic-cone',
    title: 'Vehicle Detection',
    short: 'SSD MobileNet detector for traffic analysis, deployed as a prediction web service.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'Vehicle detection service based on an SSD MobileNet model, built to plug into traffic-analysis applications and deployed as a prediction web service.',
    highlights: [
      'SSD MobileNet detector adapted to the use case',
      'Use case: traffic analysis',
      'Flask prediction API returning bounding boxes and scores',
      'Packaged and deployed on a PaaS platform',
    ],
    metrics: [],
    stack: ['TensorFlow', 'SSD MobileNet', 'Flask', 'Computer vision'],
  },
  {
    id: 'hr', cat: 'mlops', icon: 'bx-group',
    title: 'HR Analytics',
    short: 'Exploratory analysis of HR data pulled from MySQL, key metrics presented in a Tableau dashboard.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'HR analytics project: extraction from a MySQL database, exploratory analysis in Python and key metrics presented in a multi-page Tableau dashboard.',
    highlights: [
      'Import and cleaning of a MySQL dump',
      'Exploratory data analysis (EDA) in a Python notebook',
      'Multi-page Tableau dashboard: home page, statistics and visualisations',
      'Summary of insights for business teams',
    ],
    metrics: [],
    stack: ['SQL', 'MySQL', 'Python', 'pandas', 'Tableau'],
  },
  {
    id: 'timeseries', cat: 'mlops', icon: 'bx-line-chart',
    title: 'Time-Series Forecasting',
    short: 'ARIMA/SARIMA vs Prophet on a seasonal monthly series, forecasts presented in Power BI.',
    context: 'Remote ML consultant — Bangalore, India · 2020–2022',
    desc: 'Forecasting study on a strongly seasonal monthly time series (air traffic): stationarity analysis, modelling, comparison of approaches (ARIMA/SARIMA and Prophet) and forecasts presented in Power BI.',
    highlights: [
      'Trend / seasonality decomposition, stationarity tests, differencing',
      'ARIMA / SARIMA (statsmodels) and Facebook Prophet models',
      'Evaluation on a test period and error comparison',
      'Forecasts presented in a Power BI dashboard',
    ],
    metrics: [],
    stack: ['Python', 'statsmodels', 'ARIMA / SARIMA', 'Prophet', 'Power BI'],
  },
];

const PROJECTS =LANG === 'en' ? PROJECTS_EN : PROJECTS_FR;

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const requestLink = (p) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`${UI.requestSubject}${p.title}`)}`;

/* ── Projets ── */
function renderProjects() {
  const grid = $('#projectGrid');
  grid.innerHTML = PROJECTS.map((p) => {
    const c = CATEGORIES[p.cat];
    return `
      <button class="card proj reveal" data-cat="${p.cat}" data-id="${p.id}" aria-label="${UI.detailsAria}${esc(p.title)}">
        <div class="proj-cover" style="background:${c.gradient}">
          <span class="badge">${p.featured ? '⭐ ' : ''}${esc(c.label)}</span>
          <i class='bx ${p.icon}'></i>
        </div>
        <div class="proj-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.short)}</p>
          <div class="tags">${p.stack.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
          <div class="proj-foot">
            <span class="on-demand"><i class='bx bx-lock-alt'></i> ${UI.onDemandShort}</span>
            <span class="more">${UI.details} <i class='bx bx-right-arrow-alt'></i></span>
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
        <h4>${UI.keyPoints}</h4>
        <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      </div>
      <div>
        <h4>${UI.stack}</h4>
        <div class="tags">${p.stack.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="request">
        <span><i class='bx bx-lock-alt'></i> ${UI.onDemand}</span>
        <a class="btn btn-primary" href="${requestLink(p)}"><i class='bx bx-envelope'></i> ${UI.requestBtn}</a>
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
  const words = UI.typed;
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
    const subject = f.get('subject') || `${UI.contactSubject}${f.get('name')}`;
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
