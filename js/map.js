// ============================================================
// JusSocial — Mapa SVG Interactivo de Argentina
// ============================================================

// Coordenadas SVG simplificadas de las provincias argentinas
// Viewbox: 0 0 400 800
const PROVINCE_PATHS = {
  // --- PATAGONIA SUR ---
  tierradelfuego: {
    d: "M 130,730 L 170,720 L 195,740 L 210,760 L 185,785 L 150,790 L 125,770 Z",
    labelX: 165, labelY: 758,
  },
  santacruz: {
    d: "M 100,640 L 200,625 L 220,650 L 215,720 L 130,730 L 125,770 L 90,720 L 85,670 Z",
    labelX: 155, labelY: 680,
  },
  chubut: {
    d: "M 80,535 L 205,515 L 220,540 L 220,650 L 200,625 L 100,640 L 85,670 L 75,600 Z",
    labelX: 150, labelY: 578,
  },
  rionegro: {
    d: "M 70,440 L 200,425 L 215,450 L 215,515 L 205,515 L 80,535 L 75,500 L 65,465 Z",
    labelX: 142, labelY: 478,
  },
  neuquen: {
    d: "M 60,370 L 120,355 L 140,380 L 135,430 L 70,440 L 65,465 L 55,405 Z",
    labelX: 95, labelY: 400,
  },
  lapampa: {
    d: "M 155,355 L 255,345 L 265,380 L 260,440 L 200,450 L 140,440 L 135,430 L 140,380 L 120,355 Z",
    labelX: 200, labelY: 398,
  },
  // --- CUYO ---
  mendoza: {
    d: "M 100,265 L 165,250 L 185,275 L 180,355 L 155,355 L 120,355 L 105,330 L 98,295 Z",
    labelX: 140, labelY: 305,
  },
  sanjuan: {
    d: "M 105,185 L 170,170 L 185,200 L 185,250 L 165,250 L 100,265 L 98,230 Z",
    labelX: 145, labelY: 218,
  },
  sanluisargo: {
    d: "M 200,300 L 265,285 L 275,315 L 270,370 L 260,440 L 200,450 L 180,430 L 185,355 L 180,315 Z",
    labelX: 225, labelY: 360,
  },
  // --- PAMPEANA CENTRAL ---
  cordoba: {
    d: "M 220,200 L 315,188 L 330,220 L 325,285 L 275,295 L 265,285 L 200,300 L 190,260 L 195,220 Z",
    labelX: 265, labelY: 245,
  },
  buenosaires: {
    d: "M 250,320 L 350,305 L 365,335 L 370,400 L 350,450 L 300,480 L 260,490 L 240,465 L 215,430 L 200,450 L 260,440 L 270,380 L 275,315 L 265,285 L 325,285 Z",
    labelX: 305, labelY: 395,
  },
  caba: {
    d: "M 315,330 L 325,320 L 340,332 L 328,345 L 315,340 Z",
    labelX: 328, labelY: 333,
  },
  // --- LITORAL / MESOPOTAMIA ---
  entrerios: {
    d: "M 300,210 L 355,200 L 375,230 L 370,280 L 350,305 L 325,285 L 330,220 Z",
    labelX: 345, labelY: 252,
  },
  santafe: {
    d: "M 270,135 L 345,120 L 360,155 L 355,200 L 300,210 L 315,188 L 220,200 L 225,160 Z",
    labelX: 295, labelY: 170,
  },
  corrientes: {
    d: "M 330,100 L 390,88 L 400,120 L 395,155 L 355,165 L 345,120 Z",
    labelX: 368, labelY: 127,
  },
  misiones: {
    d: "M 365,55 L 400,45 L 405,85 L 390,88 L 330,100 L 335,72 Z",
    labelX: 375, labelY: 72,
  },
  // --- GRAN NORTE ---
  chaco: {
    d: "M 265,55 L 335,42 L 365,55 L 335,72 L 330,100 L 280,110 L 270,85 Z",
    labelX: 310, labelY: 78,
  },
  formosa: {
    d: "M 230,20 L 310,10 L 345,30 L 335,42 L 265,55 L 245,40 Z",
    labelX: 285, labelY: 32,
  },
  santiago: {
    d: "M 225,88 L 280,75 L 290,108 L 280,110 L 330,100 L 325,130 L 290,145 L 270,135 L 225,140 L 215,112 Z",
    labelX: 270, labelY: 112,
  },
  // --- NOA ---
  tucuman: {
    d: "M 195,120 L 235,112 L 245,138 L 225,155 L 200,155 L 190,140 Z",
    labelX: 218, labelY: 138,
  },
  salta: {
    d: "M 165,35 L 240,20 L 255,48 L 250,75 L 230,88 L 215,112 L 195,120 L 175,100 L 155,70 Z",
    labelX: 207, labelY: 70,
  },
  jujuy: {
    d: "M 155,8 L 200,0 L 215,20 L 205,38 L 165,35 L 155,20 Z",
    labelX: 183, labelY: 22,
  },
  catamarca: {
    d: "M 155,120 L 195,108 L 215,138 L 210,175 L 190,190 L 155,185 L 140,155 Z",
    labelX: 175, labelY: 150,
  },
  larioja: {
    d: "M 125,125 L 155,112 L 165,140 L 155,185 L 130,195 L 108,175 L 110,148 Z",
    labelX: 135, labelY: 155,
  },
};

const PROVINCE_NAMES = {
  buenosaires: 'Buenos Aires', caba: 'CABA', cordoba: 'Córdoba', santafe: 'Santa Fe',
  mendoza: 'Mendoza', tucuman: 'Tucumán', entrerios: 'Entre Ríos', salta: 'Salta',
  misiones: 'Misiones', chaco: 'Chaco', corrientes: 'Corrientes', santiago: 'Santiago del Estero',
  sanluisargo: 'San Luis', jujuy: 'Jujuy', rionegro: 'Río Negro', neuquen: 'Neuquén',
  formosa: 'Formosa', chubut: 'Chubut', lapampa: 'La Pampa', sanjuan: 'San Juan',
  catamarca: 'Catamarca', larioja: 'La Rioja', santacruz: 'Santa Cruz', tierradelfuego: 'Tierra del Fuego',
};

// ── Inicializa el mapa SVG ─────────────────────────────────────
export function initArgentinaMap(getEventCountByProvince, selectProvince, state) {
  const svg = document.getElementById('argentina-map');
  if (!svg) return;

  const tooltip = document.getElementById('map-tooltip');

  const maxCount = Math.max(...Object.keys(PROVINCE_PATHS).map(id =>
    getEventCountByProvince(id)
  ));

  function getHeatColor(count, isSelected) {
    if (isSelected) return 'rgba(201, 168, 76, 0.35)';
    if (maxCount === 0) return 'rgba(30, 58, 95, 0.7)';
    const ratio = count / maxCount;
    const r = Math.round(30 + ratio * (74 - 30));
    const g = Math.round(58 + ratio * (158 - 58));
    const b = Math.round(95 + ratio * (218 - 95));
    const alpha = 0.3 + ratio * 0.65;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function buildMap() {
    svg.innerHTML = '';

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <filter id="province-glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    `;
    svg.appendChild(defs);

    Object.entries(PROVINCE_PATHS).forEach(([id, prov]) => {
      const count = getEventCountByProvince(id);
      const isSelected = state.activeProvince === id;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', prov.d);
      path.setAttribute('class', `prov-path${isSelected ? ' selected' : ''}`);
      path.setAttribute('data-id', id);
      path.style.fill = getHeatColor(count, isSelected);

      path.addEventListener('mouseenter', () => {
        if (!tooltip) return;
        const svgRect = svg.getBoundingClientRect();
        const containerRect = svg.parentElement.getBoundingClientRect();
        const svgX = ((prov.labelX / 400) * svgRect.width) + svgRect.left - containerRect.left;
        const svgY = ((prov.labelY / 800) * svgRect.height) + svgRect.top - containerRect.top;

        tooltip.innerHTML = `
          <strong>${PROVINCE_NAMES[id] || id}</strong>
          <span>${count} evento${count !== 1 ? 's' : ''} registrado${count !== 1 ? 's' : ''}</span>
        `;
        tooltip.style.left = `${svgX}px`;
        tooltip.style.top = `${Math.max(svgY - 65, 5)}px`;
        tooltip.classList.add('visible');
      });

      path.addEventListener('mouseleave', () => {
        if (tooltip) tooltip.classList.remove('visible');
      });

      path.addEventListener('click', () => {
        if (tooltip) tooltip.classList.remove('visible');
        selectProvince(id);
      });

      path.setAttribute('tabindex', '0');
      path.setAttribute('role', 'button');
      path.setAttribute('aria-label', `${PROVINCE_NAMES[id] || id}: ${count} eventos`);
      path.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectProvince(id);
        }
      });

      svg.appendChild(path);
    });
  }

  buildMap();
  return { rebuild: buildMap };
}
