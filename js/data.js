// ============================================================
// JusSocial — Dataset Nacional de Eventos
// ============================================================

export const PROVINCES = [
  { id: "buenosaires",    name: "Buenos Aires",       region: "pampeana",     icon: "🏛️" },
  { id: "caba",           name: "CABA",                region: "pampeana",     icon: "🌆" },
  { id: "cordoba",        name: "Córdoba",             region: "pampeana",     icon: "⛪" },
  { id: "santafe",        name: "Santa Fe",            region: "pampeana",     icon: "🌾" },
  { id: "mendoza",        name: "Mendoza",             region: "cuyo",         icon: "🍇" },
  { id: "tucuman",        name: "Tucumán",             region: "noroeste",     icon: "🎺" },
  { id: "entrerios",      name: "Entre Ríos",          region: "mesopotamia",  icon: "🌊" },
  { id: "salta",          name: "Salta",               region: "noroeste",     icon: "🦙" },
  { id: "misiones",       name: "Misiones",            region: "mesopotamia",  icon: "🌿" },
  { id: "chaco",          name: "Chaco",               region: "nordeste",     icon: "🌵" },
  { id: "corrientes",     name: "Corrientes",          region: "mesopotamia",  icon: "🐊" },
  { id: "santiago",       name: "Santiago del Estero", region: "noroeste",     icon: "☀️" },
  { id: "sanluisargo",   name: "San Luis",            region: "cuyo",         icon: "🏔️" },
  { id: "jujuy",          name: "Jujuy",               region: "noroeste",     icon: "🪘" },
  { id: "rionegro",       name: "Río Negro",           region: "patagonia",    icon: "🏔️" },
  { id: "neuquen",        name: "Neuquén",             region: "patagonia",    icon: "⛽" },
  { id: "formosa",        name: "Formosa",             region: "nordeste",     icon: "🌴" },
  { id: "chubut",         name: "Chubut",              region: "patagonia",    icon: "🐋" },
  { id: "lapampa",        name: "La Pampa",            region: "pampeana",     icon: "🌻" },
  { id: "sanjuan",        name: "San Juan",            region: "cuyo",         icon: "🌋" },
  { id: "catamarca",      name: "Catamarca",           region: "noroeste",     icon: "💎" },
  { id: "larioja",        name: "La Rioja",            region: "noroeste",     icon: "🌄" },
  { id: "santacruz",      name: "Santa Cruz",          region: "patagonia",    icon: "🐧" },
  { id: "tierradelfuego", name: "Tierra del Fuego",    region: "patagonia",    icon: "🔥" },
];

export const EVENT_TYPES = {
  marcha:     { label: "Marcha",     color: "#e74c3c", bg: "rgba(231,76,60,0.12)",   icon: "✊" },
  audiencia:  { label: "Audiencia",  color: "#2d6a9f", bg: "rgba(45,106,159,0.12)",  icon: "⚖️" },
  asamblea:   { label: "Asamblea",   color: "#27ae60", bg: "rgba(39,174,96,0.12)",   icon: "🏛️" },
  cultural:   { label: "Cultural",   color: "#c9a84c", bg: "rgba(201,168,76,0.12)",  icon: "🎭" },
  legal:      { label: "Legal",      color: "#8e44ad", bg: "rgba(142,68,173,0.12)",  icon: "📋" },
  debate:     { label: "Debate",     color: "#16a085", bg: "rgba(22,160,133,0.12)",  icon: "🎙️" },
  solidario:  { label: "Solidario",  color: "#e67e22", bg: "rgba(230,126,34,0.12)",  icon: "🤝" },
};

export const EVENTS = [
  // ── CABA ──────────────────────────────────────────
  {
    id: "e001", provinceId: "caba", type: "marcha",
    title: "Marcha Nacional por los Derechos Humanos",
    date: "2026-08-20", time: "16:00",
    location: "Plaza de Mayo, CABA",
    organizer: "APDH — Asamblea Permanente por los DDHH",
    description: "Concentración masiva en conmemoración de las víctimas del terrorismo de estado y en defensa de los derechos conquistados.",
    attendees: 4800,
    priority: "alta",
    tags: ["derechos humanos", "memoria", "justicia"],
  },
  {
    id: "e002", provinceId: "caba", type: "audiencia",
    title: "Audiencia Pública: Acceso a la Vivienda",
    date: "2026-08-22", time: "10:00",
    location: "Legislatura de la Ciudad, CABA",
    organizer: "Defensoría del Pueblo CABA",
    description: "Audiencia pública para tratar el proyecto de ley de alquileres y acceso equitativo a la vivienda urbana.",
    attendees: 320,
    priority: "media",
    tags: ["vivienda", "alquileres", "legislación"],
  },
  {
    id: "e003", provinceId: "caba", type: "cultural",
    title: "Festival Solidario de la Diversidad",
    date: "2026-08-30", time: "14:00",
    location: "Parque Centenario, CABA",
    organizer: "Red Cultural Comunitaria",
    description: "Festival artístico y cultural con entrada libre, talleres, música en vivo y espacios de debate ciudadano.",
    attendees: 2100,
    priority: "baja",
    tags: ["cultura", "diversidad", "inclusión"],
  },
  {
    id: "e004", provinceId: "caba", type: "legal",
    title: "Clínica Jurídica Gratuita — Zona Sur",
    date: "2026-09-05", time: "09:00",
    location: "Centro Cultural Recoleta, CABA",
    organizer: "Colegio Público de Abogados",
    description: "Atención jurídica gratuita en materia laboral, familiar y previsional para vecinos de bajos recursos.",
    attendees: 150,
    priority: "alta",
    tags: ["asistencia legal", "gratuito", "derechos laborales"],
  },

  // ── BUENOS AIRES ──────────────────────────────────
  {
    id: "e005", provinceId: "buenosaires", type: "asamblea",
    title: "Asamblea Popular Bonaerense",
    date: "2026-08-19", time: "18:00",
    location: "Teatro Municipal, La Plata",
    organizer: "Frente de Organizaciones Populares",
    description: "Asamblea abierta para debatir la agenda legislativa provincial y articular demandas sectoriales.",
    attendees: 900,
    priority: "alta",
    tags: ["asamblea", "participación", "legislativa"],
  },
  {
    id: "e006", provinceId: "buenosaires", type: "marcha",
    title: "Marcha contra el Ajuste Educativo",
    date: "2026-08-25", time: "15:00",
    location: "Ministerio de Educación, La Plata",
    organizer: "SUTEBA — Sindicato Docente",
    description: "Movilización de docentes, familias y estudiantes en rechazo a los recortes presupuestarios en educación pública.",
    attendees: 6200,
    priority: "alta",
    tags: ["educación", "sindicato", "presupuesto"],
  },
  {
    id: "e007", provinceId: "buenosaires", type: "solidario",
    title: "Feria Solidaria de Invierno — GBA Oeste",
    date: "2026-08-28", time: "10:00",
    location: "Club Atlético Morón, Morón",
    organizer: "Red de Merenderos Bonaerenses",
    description: "Feria de ropa, alimentos y artículos del hogar donados por la comunidad para familias en situación vulnerable.",
    attendees: 500,
    priority: "media",
    tags: ["solidaridad", "comunidad", "GBA"],
  },
  {
    id: "e008", provinceId: "buenosaires", type: "debate",
    title: "Debate: Seguridad y Derechos en el Conurbano",
    date: "2026-09-03", time: "19:00",
    location: "Universidad Nacional de Quilmes",
    organizer: "Cátedra de Seguridad Democrática — UNQ",
    description: "Panel interdisciplinario con referentes de organizaciones sociales, académicos y funcionarios.",
    attendees: 380,
    priority: "media",
    tags: ["seguridad", "derechos", "academia"],
  },

  // ── CÓRDOBA ───────────────────────────────────────
  {
    id: "e009", provinceId: "cordoba", type: "marcha",
    title: "Marcha del Silencio — Córdoba",
    date: "2026-08-21", time: "17:00",
    location: "Plaza San Martín, Córdoba Capital",
    organizer: "H.I.J.O.S. Córdoba",
    description: "Marcha silenciosa en memoria de los 30.000 detenidos desaparecidos. Concentración en la ex D2.",
    attendees: 3400,
    priority: "alta",
    tags: ["memoria", "DDHH", "desaparecidos"],
  },
  {
    id: "e010", provinceId: "cordoba", type: "debate",
    title: "Foro: Economía Popular y Trabajo",
    date: "2026-08-26", time: "10:00",
    location: "UNC — Facultad de Ciencias Económicas",
    organizer: "CTEP Córdoba",
    description: "Espacio de debate sobre los desafíos del sector de la economía popular y propuestas de políticas públicas.",
    attendees: 420,
    priority: "media",
    tags: ["economía popular", "trabajo", "políticas"],
  },
  {
    id: "e011", provinceId: "cordoba", type: "cultural",
    title: "Mural Colectivo por la Justicia",
    date: "2026-09-01", time: "09:00",
    location: "Barrio Güemes, Córdoba",
    organizer: "Colectivo Arte y Lucha",
    description: "Jornada de muralismo comunitario para visibilizar demandas sociales en el espacio público.",
    attendees: 200,
    priority: "baja",
    tags: ["arte", "mural", "espacio público"],
  },

  // ── SANTA FE ──────────────────────────────────────
  {
    id: "e012", provinceId: "santafe", type: "audiencia",
    title: "Audiencia: Contaminación Ambiental del Paraná",
    date: "2026-08-23", time: "09:30",
    location: "Cámara de Diputados, Rosario",
    organizer: "Asamblea Ciudadana Ambiental",
    description: "Audiencia pública para exponer el impacto de los agroquímicos y el dragado sobre el ecosistema del río Paraná.",
    attendees: 280,
    priority: "alta",
    tags: ["ambiente", "Paraná", "contaminación"],
  },
  {
    id: "e013", provinceId: "santafe", type: "marcha",
    title: "Marcha por la Seguridad en Rosario",
    date: "2026-08-27", time: "16:00",
    location: "Obelisco de Rosario",
    organizer: "Madres de Víctimas de Violencia Urbana",
    description: "Movilización exigiendo políticas de estado para reducir la violencia y garantizar la paz social.",
    attendees: 7800,
    priority: "alta",
    tags: ["seguridad", "violencia", "Rosario"],
  },
  {
    id: "e014", provinceId: "santafe", type: "solidario",
    title: "Banco de Alimentos — Acción Invernal",
    date: "2026-08-29", time: "08:00",
    location: "Polideportivo Municipal, Santa Fe Capital",
    organizer: "Cáritas Santa Fe",
    description: "Gran operativo de recolección y distribución de alimentos no perecederos para 800 familias de la provincia.",
    attendees: 600,
    priority: "media",
    tags: ["alimentación", "solidaridad", "familias"],
  },

  // ── MENDOZA ───────────────────────────────────────
  {
    id: "e015", provinceId: "mendoza", type: "debate",
    title: "Cumbre: Agua y Soberanía",
    date: "2026-08-18", time: "10:00",
    location: "Teatro Independencia, Mendoza",
    organizer: "Asamblea por el Agua de Mendoza",
    description: "Encuentro de comunidades afectadas por la minería y la sequía para articular una agenda común de defensa del agua.",
    attendees: 550,
    priority: "alta",
    tags: ["agua", "soberanía", "minería"],
  },
  {
    id: "e016", provinceId: "mendoza", type: "legal",
    title: "Consulta Legal para Trabajadores Rurales",
    date: "2026-09-02", time: "09:00",
    location: "Sede UATRE, Luján de Cuyo",
    organizer: "UATRE — Unión de Trabajadores Rurales",
    description: "Atención jurídica gratuita para trabajadores del campo en materias de accidentes, despidos y obra social.",
    attendees: 180,
    priority: "media",
    tags: ["trabajadores rurales", "legal", "gratuito"],
  },

  // ── TUCUMÁN ───────────────────────────────────────
  {
    id: "e017", provinceId: "tucuman", type: "marcha",
    title: "Marcha por la Dignidad Cañera",
    date: "2026-08-22", time: "15:00",
    location: "Plaza Independencia, Tucumán",
    organizer: "Federación Obrera Tucumana de la Industria Azucarera",
    description: "Los trabajadores azucareros marchan exigiendo mejoras salariales y condiciones laborales dignas.",
    attendees: 2900,
    priority: "alta",
    tags: ["azúcar", "trabajadores", "salarios"],
  },
  {
    id: "e018", provinceId: "tucuman", type: "asamblea",
    title: "Asamblea: Tierra y Territorio en el NOA",
    date: "2026-09-04", time: "10:00",
    location: "Facultad de Derecho — UNT",
    organizer: "MOCASE — Movimiento Campesino de Santiago",
    description: "Encuentro de comunidades campesinas e indígenas del noroeste para defender el acceso a la tierra.",
    attendees: 410,
    priority: "alta",
    tags: ["tierra", "comunidades", "indígenas"],
  },

  // ── ENTRE RÍOS ────────────────────────────────────
  {
    id: "e019", provinceId: "entrerios", type: "cultural",
    title: "Festival de la Memoria y la Identidad",
    date: "2026-08-24", time: "18:00",
    location: "Costanera de Paraná",
    organizer: "Colectivo Cultural Entrerriano",
    description: "Noche cultural con música, danza, teatro callejero y debate sobre la identidad regional y la justicia.",
    attendees: 1400,
    priority: "baja",
    tags: ["identidad", "cultura", "memoria"],
  },
  {
    id: "e020", provinceId: "entrerios", type: "audiencia",
    title: "Audiencia por Fumigaciones en Escuelas",
    date: "2026-09-06", time: "10:00",
    location: "Legislatura Provincial, Paraná",
    organizer: "AGMER — Sindicato Docente",
    description: "Audiencia legislativa sobre aplicación de agroquímicos en zonas lindantes a establecimientos educativos.",
    attendees: 190,
    priority: "alta",
    tags: ["fumigaciones", "escuelas", "salud"],
  },

  // ── SALTA ─────────────────────────────────────────
  {
    id: "e021", provinceId: "salta", type: "marcha",
    title: "Marcha Indígena por Tierra y Derechos",
    date: "2026-08-20", time: "09:00",
    location: "Casa de Gobierno, Salta",
    organizer: "OCAN — Organización de Comunidades Andinas",
    description: "Comunidades kollas, wichí y guaraní marchan para exigir titulación de tierras ancestrales.",
    attendees: 1800,
    priority: "alta",
    tags: ["indígenas", "tierra", "ancestral"],
  },
  {
    id: "e022", provinceId: "salta", type: "solidario",
    title: "Operativo Sanitario Comunitario",
    date: "2026-09-07", time: "08:00",
    location: "Barrio Los Olmos, Salta Capital",
    organizer: "Cruz Roja Argentina — Filial Salta",
    description: "Campaña de vacunación, controles de salud y entrega de medicamentos gratuitos a familias vulnerables.",
    attendees: 300,
    priority: "media",
    tags: ["salud", "vacunación", "gratuito"],
  },

  // ── MISIONES ──────────────────────────────────────
  {
    id: "e023", provinceId: "misiones", type: "debate",
    title: "Foro: Deforestación y Soberanía Alimentaria",
    date: "2026-08-25", time: "09:00",
    location: "Universidad Nacional de Misiones",
    organizer: "Greenpeace Argentina — Equipo NEA",
    description: "Debate académico y comunitario sobre la pérdida de selva misionera y su impacto en las comunidades locales.",
    attendees: 360,
    priority: "alta",
    tags: ["deforestación", "selva", "soberanía"],
  },
  {
    id: "e024", provinceId: "misiones", type: "cultural",
    title: "Encuentro de Culturas Fronterizas",
    date: "2026-09-08", time: "16:00",
    location: "Costanera de Posadas",
    organizer: "Instituto de Cultura Misionero",
    description: "Celebración de las culturas guaraní, brasilera y argentina con música, danzas y gastronomía.",
    attendees: 1200,
    priority: "baja",
    tags: ["cultura", "frontera", "guaraní"],
  },

  // ── CHACO ─────────────────────────────────────────
  {
    id: "e025", provinceId: "chaco", type: "solidario",
    title: "Campaña Chaqueña contra el Hambre",
    date: "2026-08-19", time: "07:00",
    location: "Terminal de Ómnibus, Resistencia",
    organizer: "Iglesia Evangélica del Río de la Plata",
    description: "Colecta y distribución de cajas de alimentos para comunidades del interior chaqueño en situación crítica.",
    attendees: 450,
    priority: "alta",
    tags: ["hambre", "alimentación", "emergencia"],
  },
  {
    id: "e026", provinceId: "chaco", type: "legal",
    title: "Relevamiento Jurídico Comunitario",
    date: "2026-09-09", time: "09:00",
    location: "Municipio de Villa Ángela",
    organizer: "CELS — Centro de Estudios Legales y Sociales",
    description: "Relevamiento de vulneraciones de derechos en comunidades rurales del Chaco con asesoramiento legal gratuito.",
    attendees: 140,
    priority: "media",
    tags: ["legal", "CELS", "vulneraciones"],
  },

  // ── CORRIENTES ────────────────────────────────────
  {
    id: "e027", provinceId: "corrientes", type: "asamblea",
    title: "Asamblea Ciudadana por el Iberá",
    date: "2026-08-23", time: "16:00",
    location: "Salón Municipal, Ituzaingó",
    organizer: "Red por los Humedales del Litoral",
    description: "Asamblea para rechazar el avance de la agroindustria sobre los Esteros del Iberá y defender el ecosistema.",
    attendees: 310,
    priority: "alta",
    tags: ["Iberá", "humedales", "ambiente"],
  },
  {
    id: "e028", provinceId: "corrientes", type: "cultural",
    title: "Noche del Chamamé Social",
    date: "2026-09-05", time: "20:00",
    location: "Anfiteatro Cocomarola, Corrientes",
    organizer: "Fundación Cultural del Litoral",
    description: "Festival de chamamé con recaudación destinada a comedores comunitarios de la provincia.",
    attendees: 2000,
    priority: "baja",
    tags: ["chamamé", "cultura", "solidaridad"],
  },

  // ── SANTIAGO DEL ESTERO ───────────────────────────
  {
    id: "e029", provinceId: "santiago", type: "marcha",
    title: "Marcha Campesina del MOCASE",
    date: "2026-08-21", time: "08:00",
    location: "Plaza Libertad, Santiago del Estero",
    organizer: "MOCASE-VC — Movimiento Campesino",
    description: "Miles de campesinos exigen el cese de los desalojos rurales y la implementación de la ley de arraigo.",
    attendees: 3100,
    priority: "alta",
    tags: ["campesinos", "tierra", "desalojos"],
  },
  {
    id: "e030", provinceId: "santiago", type: "debate",
    title: "Debate: Minería y Comunidades en el NOA",
    date: "2026-09-10", time: "10:00",
    location: "UNSE — Campus Central",
    organizer: "Cátedra Libre de Estudios Mineros",
    description: "Espacio de reflexión crítica sobre megaminería, impacto ambiental y consulta previa a comunidades.",
    attendees: 280,
    priority: "media",
    tags: ["minería", "ambiente", "comunidades"],
  },

  // ── JUJUY ─────────────────────────────────────────
  {
    id: "e031", provinceId: "jujuy", type: "marcha",
    title: "Marcha del Litio: Tierra y Soberanía",
    date: "2026-08-18", time: "10:00",
    location: "Casa de Gobierno, San Salvador de Jujuy",
    organizer: "Comunidad Kolla Atacameña",
    description: "Comunidades originarias rechazan la explotación del litio en la Puna sin consulta previa y libre.",
    attendees: 2200,
    priority: "alta",
    tags: ["litio", "Puna", "indígenas"],
  },
  {
    id: "e032", provinceId: "jujuy", type: "legal",
    title: "Taller: Derechos de los Pueblos Indígenas",
    date: "2026-09-11", time: "09:00",
    location: "Sede CONICET Jujuy",
    organizer: "CELS + INAI",
    description: "Taller práctico sobre el Convenio 169 de la OIT y los mecanismos de exigibilidad de derechos indígenas.",
    attendees: 120,
    priority: "media",
    tags: ["indígenas", "OIT", "derechos"],
  },

  // ── RÍO NEGRO ─────────────────────────────────────
  {
    id: "e033", provinceId: "rionegro", type: "audiencia",
    title: "Audiencia: Fracking y Agua en la Patagonia",
    date: "2026-08-26", time: "10:00",
    location: "Concejo Deliberante, Bariloche",
    organizer: "Asamblea Patagónica por el Agua",
    description: "Audiencia pública para tratar el impacto de la fracturación hidráulica en los acuíferos patagónicos.",
    attendees: 240,
    priority: "alta",
    tags: ["fracking", "agua", "Patagonia"],
  },
  {
    id: "e034", provinceId: "rionegro", type: "cultural",
    title: "Festival Mapuche: Wipantu",
    date: "2026-09-12", time: "15:00",
    location: "Comunidad Mapuche Lonko Purrán, Bariloche",
    organizer: "Parlamento Mapuche Rionegrino",
    description: "Celebración del Año Nuevo Mapuche con ceremonia, música ancestral y encuentro intergeneracional.",
    attendees: 800,
    priority: "baja",
    tags: ["Mapuche", "Wipantu", "cultura ancestral"],
  },

  // ── NEUQUÉN ───────────────────────────────────────
  {
    id: "e035", provinceId: "neuquen", type: "asamblea",
    title: "Asamblea: Vaca Muerta y el Medioambiente",
    date: "2026-08-24", time: "18:00",
    location: "UNCo — Centro de Estudiantes, Neuquén",
    organizer: "Ecologistas del Neuquén",
    description: "Asamblea abierta para analizar el impacto ambiental de la explotación de Vaca Muerta y alternativas.",
    attendees: 490,
    priority: "alta",
    tags: ["Vaca Muerta", "ambiente", "petróleo"],
  },
  {
    id: "e036", provinceId: "neuquen", type: "marcha",
    title: "Marcha por los Presos Políticos Mapuche",
    date: "2026-09-01", time: "15:00",
    location: "Tribunales Federales, Neuquén Capital",
    organizer: "Coordinadora de Organizaciones Mapuche",
    description: "Movilización exigiendo la liberación de comuneros mapuche detenidos durante el conflicto territorial.",
    attendees: 1600,
    priority: "alta",
    tags: ["Mapuche", "presos políticos", "libertad"],
  },

  // ── FORMOSA ───────────────────────────────────────
  {
    id: "e037", provinceId: "formosa", type: "solidario",
    title: "Operativo Salud Fronteriza",
    date: "2026-08-22", time: "08:00",
    location: "Municipio de Ingeniero Juárez",
    organizer: "Médicos Sin Fronteras Argentina",
    description: "Asistencia médica y odontológica gratuita en zonas rurales alejadas de Formosa.",
    attendees: 250,
    priority: "alta",
    tags: ["salud", "rural", "gratuito"],
  },
  {
    id: "e038", provinceId: "formosa", type: "debate",
    title: "Debate: Derechos del Pueblo Qom",
    date: "2026-09-13", time: "10:00",
    location: "Consejo General de la Comunidad, Formosa",
    organizer: "Organización Qom Ltaxa",
    description: "Jornada de reflexión y propuestas sobre las condiciones de vida y los derechos vulnerados del pueblo Qom.",
    attendees: 220,
    priority: "alta",
    tags: ["Qom", "indígenas", "derechos"],
  },

  // ── CHUBUT ────────────────────────────────────────
  {
    id: "e039", provinceId: "chubut", type: "marcha",
    title: "No a la Minería en Chubut",
    date: "2026-08-20", time: "16:00",
    location: "Plaza Independencia, Rawson",
    organizer: "Asamblea de Vecinos Autoconvocados",
    description: "Movilización histórica para defender la prohibición de la megaminería establecida por referéndum popular.",
    attendees: 4100,
    priority: "alta",
    tags: ["minería", "referéndum", "Chubut"],
  },
  {
    id: "e040", provinceId: "chubut", type: "asamblea",
    title: "Asamblea Regional Patagónica",
    date: "2026-09-14", time: "10:00",
    location: "Universidad Nacional de la Patagonia, Comodoro Rivadavia",
    organizer: "Foro Patagónico de Organizaciones Sociales",
    description: "Encuentro de organizaciones sociales, sindicales y comunitarias del sur del país.",
    attendees: 380,
    priority: "media",
    tags: ["Patagonia", "organizaciones", "encuentro"],
  },

  // ── LA PAMPA ──────────────────────────────────────
  {
    id: "e041", provinceId: "lapampa", type: "debate",
    title: "Foro Pampeano de Soberanía Alimentaria",
    date: "2026-08-27", time: "10:00",
    location: "UNLPam — Santa Rosa",
    organizer: "Cátedra Libre de Soberanía Alimentaria",
    description: "Encuentro de productores, organizaciones y académicos para debatir el modelo agrícola y la soberanía alimentaria.",
    attendees: 290,
    priority: "media",
    tags: ["soberanía alimentaria", "agro", "debate"],
  },
  {
    id: "e042", provinceId: "lapampa", type: "solidario",
    title: "Jornada Comunitaria Solidaria",
    date: "2026-09-15", time: "10:00",
    location: "Polideportivo Municipal, Santa Rosa",
    organizer: "Red de Comedores Pampeanos",
    description: "Jornada de trabajo comunitario: feria de ropa, talleres de oficio y distribución de alimentos.",
    attendees: 350,
    priority: "baja",
    tags: ["comedor", "comunidad", "solidaridad"],
  },

  // ── SAN JUAN ──────────────────────────────────────
  {
    id: "e043", provinceId: "sanjuan", type: "audiencia",
    title: "Audiencia: Impacto Sísmico de la Minería",
    date: "2026-08-28", time: "09:00",
    location: "Cámara de Senadores, San Juan",
    organizer: "Instituto de Investigaciones Antisísmicas — UNSJ",
    description: "Presentación de estudios científicos sobre la relación entre actividad minera y sismicidad en la región de Cuyo.",
    attendees: 175,
    priority: "alta",
    tags: ["sismicidad", "minería", "ciencia"],
  },

  // ── SAN LUIS ──────────────────────────────────────
  {
    id: "e044", provinceId: "sanluisargo", type: "cultural",
    title: "Encuentro de Artistas Populares",
    date: "2026-09-03", time: "17:00",
    location: "Teatro Ciudad de San Luis",
    organizer: "Asociación de Artistas Independientes de San Luis",
    description: "Muestra de teatro, plástica, música y poesía de artistas comprometidos con la justicia social.",
    attendees: 600,
    priority: "baja",
    tags: ["arte", "cultura popular", "teatro"],
  },

  // ── CATAMARCA ─────────────────────────────────────
  {
    id: "e045", provinceId: "catamarca", type: "asamblea",
    title: "Asamblea: Litio y Agua en Catamarca",
    date: "2026-08-29", time: "10:00",
    location: "UNCa — Facultad de Humanidades",
    organizer: "Asamblea El Algarrobo",
    description: "Asamblea abierta sobre la explotación de litio en las salinas de Catamarca y sus impactos hídricos.",
    attendees: 310,
    priority: "alta",
    tags: ["litio", "agua", "salinas"],
  },

  // ── LA RIOJA ──────────────────────────────────────
  {
    id: "e046", provinceId: "larioja", type: "marcha",
    title: "Marcha por el Agua y la Vida",
    date: "2026-09-16", time: "16:00",
    location: "Casa de Gobierno, La Rioja",
    organizer: "Asamblea Riojana por el Agua",
    description: "Movilización exigiendo la declaración de emergencia hídrica y la suspensión de proyectos mineros.",
    attendees: 1300,
    priority: "alta",
    tags: ["agua", "vida", "emergencia"],
  },

  // ── SANTA CRUZ ────────────────────────────────────
  {
    id: "e047", provinceId: "santacruz", type: "debate",
    title: "Foro: Desarrollo Sustentable en la Patagonia Sur",
    date: "2026-09-17", time: "10:00",
    location: "UNPA — Río Gallegos",
    organizer: "Instituto de Desarrollo de la Patagonia",
    description: "Encuentro para diseñar una agenda de desarrollo sustentable con énfasis en energías limpias y pesca artesanal.",
    attendees: 200,
    priority: "media",
    tags: ["sustentable", "energía", "Patagonia"],
  },

  // ── TIERRA DEL FUEGO ──────────────────────────────
  {
    id: "e048", provinceId: "tierradelfuego", type: "asamblea",
    title: "Asamblea: Soberanía y Derechos en el Fin del Mundo",
    date: "2026-09-18", time: "18:00",
    location: "Teatro del Fuego, Ushuaia",
    organizer: "Foro Ciudadano Fueguino",
    description: "Asamblea ciudadana sobre soberanía territorial, derechos laborales de los trabajadores y cuidado del medioambiente antártico.",
    attendees: 280,
    priority: "media",
    tags: ["soberanía", "antártica", "derechos"],
  },
];

// ── Stats helpers ─────────────────────────────────────────────────────────────
export function getEventsByProvince(provinceId) {
  return EVENTS.filter(e => e.provinceId === provinceId);
}

export function getEventCountByProvince(provinceId) {
  return EVENTS.filter(e => e.provinceId === provinceId).length;
}

export function getTotalStats() {
  const uniqueOrgs = new Set(EVENTS.map(e => e.organizer)).size;
  const totalAttendees = EVENTS.reduce((sum, e) => sum + e.attendees, 0);
  return {
    events: EVENTS.length,
    provinces: PROVINCES.length,
    organizations: uniqueOrgs,
    attendees: totalAttendees,
  };
}

export function getUpcomingEvents(limit = 10) {
  return [...EVENTS]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
}

export function filterEvents({ provinceId = null, type = null, search = "", dateFrom = "", dateTo = "" }) {
  return EVENTS.filter(e => {
    if (provinceId && e.provinceId !== provinceId) return false;
    if (type && e.type !== type) return false;
    if (dateFrom && e.date < dateFrom) return false;
    if (dateTo && e.date > dateTo) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.organizer.toLowerCase().includes(q) ||
        (e.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }
    return true;
  });
}

