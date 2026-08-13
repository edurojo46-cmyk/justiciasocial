// ============================================================
// JusSocial — Main Application Logic
// ============================================================

import {
  PROVINCES, EVENTS, EVENT_TYPES,
  getTotalStats, getEventCountByProvince,
  getUpcomingEvents, filterEvents,
} from './data.js';
import { historyData } from './history.js';
import {
  initParticles, initNavbar, initReveal,
  initCounters, initDraggableTimeline, showToast,
} from './animations.js';
import { initArgentinaMap } from './map.js';

// ── State ────────────────────────────────────────────────────
const state = {
  activeProvince: null,
  activeType: null,
  searchQuery: '',
  joinedEvents: new Set(),
  dateFrom: '',
  dateTo: '',
};

// Map instance reference
let mapInstance = null;

// ── SVG Icons ────────────────────────────────────────────────
const ICONS = {
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  location: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  users: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  building: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  mappin: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  alert: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  share: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  noevents: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
};

// ── Helpers ──────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'long' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });
}

function getProvinceName(id) {
  return PROVINCES.find(p => p.id === id)?.name || id;
}

function getProvinceIcon(id) {
  return PROVINCES.find(p => p.id === id)?.icon || '📍';
}

// ── Stats Section ────────────────────────────────────────────
function renderStats() {
  const stats = getTotalStats();
  const el = document.getElementById('hero-stats');
  if (!el) return;
  el.innerHTML = `
    <div class="stat-card reveal">
      <span class="stat-number" data-count="${stats.events}">0</span>
      <span class="stat-label">Eventos Activos</span>
    </div>
    <div class="stat-card reveal">
      <span class="stat-number" data-count="${stats.provinces}">0</span>
      <span class="stat-label">Provincias</span>
    </div>
    <div class="stat-card reveal">
      <span class="stat-number" data-count="${stats.organizations}">0</span>
      <span class="stat-label">Organizaciones</span>
    </div>
    <div class="stat-card reveal">
      <span class="stat-number" data-count="${stats.attendees}">0</span>
      <span class="stat-label">Participantes</span>
    </div>
  `;
}

// ── Province Grid ─────────────────────────────────────────────
function renderProvinceGrid() {
  const grid = document.getElementById('province-grid');
  if (!grid) return;

  grid.innerHTML = PROVINCES.map(prov => {
    const count = getEventCountByProvince(prov.id);
    const isSelected = state.activeProvince === prov.id;
    return `
      <div class="province-card reveal ${isSelected ? 'selected' : ''}"
           id="prov-${prov.id}"
           role="button"
           tabindex="0"
           aria-label="Ver eventos de ${prov.name}"
           onclick="selectProvince('${prov.id}')">
        <div class="province-icon">${prov.icon}</div>
        <div>
          <div class="province-name">${prov.name}</div>
          <div class="province-region">${prov.region}</div>
        </div>
        <div class="province-count">
          ${ICONS.alert}
          ${count} evento${count !== 1 ? 's' : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ── Type Filter Bar ───────────────────────────────────────────
function renderTypeFilters() {
  const bar = document.getElementById('type-filter-bar');
  if (!bar) return;

  const allBtn = `
    <button class="filter-btn ${!state.activeType ? 'active' : ''}"
            id="filter-all"
            onclick="filterByType(null)">
      Todos
    </button>
  `;

  const typeBtns = Object.entries(EVENT_TYPES).map(([key, t]) => `
    <button class="filter-btn ${state.activeType === key ? 'active' : ''}"
            id="filter-${key}"
            onclick="filterByType('${key}')"
            style="${state.activeType === key ? `border-color:${t.color};background:${t.bg};color:${t.color}` : ''}">
      <span>${t.icon}</span> ${t.label}
    </button>
  `).join('');

  bar.innerHTML = allBtn + typeBtns;
}

// ── Events Grid ───────────────────────────────────────────────
function renderEvents() {
  const grid = document.getElementById('events-grid');
  const countTag = document.getElementById('events-count');
  if (!grid) return;

  const filtered = filterEvents({
    provinceId: state.activeProvince,
    type: state.activeType,
    search: state.searchQuery,
    dateFrom: state.dateFrom,
    dateTo: state.dateTo,
  });

  if (countTag) {
    countTag.innerHTML = `<strong>${filtered.length}</strong> evento${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        ${ICONS.noevents}
        <h3>Sin resultados</h3>
        <p>Probá cambiando los filtros o la búsqueda.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ev => {
    const type = EVENT_TYPES[ev.type];
    const joined = state.joinedEvents.has(ev.id);
    const provinceName = getProvinceName(ev.provinceId);
    const provinceIcon = getProvinceIcon(ev.provinceId);
    const tagsHtml = (ev.tags || []).map(t => `<span class="tag-chip">${t}</span>`).join('');

    return `
      <article class="event-card reveal" id="event-${ev.id}" onclick="openEventModal('${ev.id}')">
        <div class="event-card-stripe" style="background:linear-gradient(180deg, ${type.color}, ${type.color}55)"></div>
        
        <div class="event-card-header">
          <span class="event-type-badge" style="color:${type.color};background:${type.bg};border:1px solid ${type.color}44">
            ${type.icon} ${type.label}
          </span>
          <span class="event-priority ${ev.priority}">
            ${ev.priority === 'alta' ? '🔴' : ev.priority === 'media' ? '🟡' : '🟢'}
            ${ev.priority.charAt(0).toUpperCase() + ev.priority.slice(1)}
          </span>
        </div>

        <h3 class="event-title">${ev.title}</h3>

        <div class="event-meta">
          <div class="event-meta-row">
            ${ICONS.calendar}
            ${formatDate(ev.date)} · ${ev.time}hs
          </div>
          <div class="event-meta-row">
            ${ICONS.location}
            ${ev.location}
          </div>
          <div class="event-meta-row">
            ${ICONS.mappin}
            ${provinceIcon} ${provinceName}
          </div>
        </div>

        <p class="event-desc">${ev.description}</p>

        <div class="event-organizer">
          ${ICONS.building}
          <strong>${ev.organizer}</strong>
        </div>

        <div class="event-tags">${tagsHtml}</div>

        <div class="event-footer" onclick="event.stopPropagation()">
          <div class="attendees-info">
            <div class="attendees-avatars">
              <div class="attendees-dot">👤</div>
              <div class="attendees-dot">👤</div>
              <div class="attendees-dot">+</div>
            </div>
            ${ev.attendees.toLocaleString('es-AR')} convocados
          </div>
          <button class="join-btn ${joined ? 'joined' : ''}"
                  id="join-${ev.id}"
                  onclick="toggleJoin('${ev.id}')">
            ${joined ? '✓ Inscripto' : 'Sumarme'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Re-run reveal observer after render
  setTimeout(() => initReveal(), 50);
}

// ── Timeline ──────────────────────────────────────────────────
function renderTimeline() {
  const track = document.getElementById('timeline-track');
  if (!track) return;

  const upcoming = getUpcomingEvents(18);

  track.innerHTML = `
    <div class="timeline-line"></div>
    ${upcoming.map((ev, i) => {
      const type = EVENT_TYPES[ev.type];
      const provinceName = getProvinceName(ev.provinceId);
      const provinceIcon = getProvinceIcon(ev.provinceId);
      return `
        <div class="timeline-item" style="animation-delay:${i * 0.06}s" onclick="openEventModal('${ev.id}')">
          <div class="timeline-dot-wrap">
            <div class="timeline-dot" style="background:${type.bg};border-color:${type.color}">
              ${type.icon}
            </div>
            <div class="timeline-connector"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-date">${formatDateShort(ev.date)}</div>
            <div class="timeline-title">${ev.title}</div>
            <div class="timeline-province">${ICONS.mappin} ${provinceIcon} ${provinceName}</div>
          </div>
        </div>
      `;
    }).join('')}
  `;
}

// ── History Accordion ─────────────────────────────────────────
function renderHistory() {
  const container = document.getElementById('history-accordion');
  if (!container) return;

  container.innerHTML = historyData.map((item, index) => {
    let icon = '📖';
    if (item.type === 'milestone') icon = '⭐';
    if (item.type === 'era') icon = '⏳';
    if (item.type === 'summary' || item.type === 'definition' || item.type === 'concepts') icon = '💡';
    
    const yearBadge = item.year ? `<span class="history-year">${item.year}</span>` : '';
    const subtitle = item.subtitle ? `<div class="history-subtitle">${item.subtitle}</div>` : '';

    return `
      <div class="history-item reveal" id="history-item-${index}">
        <button class="history-header" aria-expanded="false" aria-controls="history-content-${index}" onclick="toggleHistory(${index})">
          <div class="history-header-left">
            <span class="history-icon">${icon}</span>
            <div class="history-title-wrap">
              <h3 class="history-item-title">${item.title}</h3>
              ${subtitle}
            </div>
          </div>
          <div class="history-header-right">
            ${yearBadge}
            <span class="history-toggle-icon">▼</span>
          </div>
        </button>
        <div class="history-content" id="history-content-${index}" hidden>
          <div class="history-content-inner">
            ${item.content}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Re-run reveal observer after render
  setTimeout(() => window.dispatchEvent(new Event('scroll')), 100); // trigger scroll to reveal
}

window.toggleHistory = function(index) {
  const allItems = document.querySelectorAll('.history-item');
  const targetItem = document.getElementById(`history-item-${index}`);
  const targetHeader = targetItem.querySelector('.history-header');
  const targetContent = document.getElementById(`history-content-${index}`);
  
  const isExpanded = targetHeader.getAttribute('aria-expanded') === 'true';
  
  // Close all
  allItems.forEach(item => {
    const header = item.querySelector('.history-header');
    const content = item.querySelector('.history-content');
    header.setAttribute('aria-expanded', 'false');
    content.hidden = true;
    item.classList.remove('open');
  });
  
  // Toggle target
  if (!isExpanded) {
    targetHeader.setAttribute('aria-expanded', 'true');
    targetContent.hidden = false;
    targetItem.classList.add('open');
    
    // Optional: scroll slightly if it opens
    setTimeout(() => {
       targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
};

// ── Event Modal ───────────────────────────────────────────────
window.openEventModal = function(eventId) {
  const ev = EVENTS.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById('event-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const type = EVENT_TYPES[ev.type];
  const joined = state.joinedEvents.has(ev.id);
  const tagsHtml = (ev.tags || []).map(t => `<span class="tag-chip">${t}</span>`).join('');

  content.innerHTML = `
    <div class="modal-type">
      <span class="event-type-badge" style="color:${type.color};background:${type.bg};border:1px solid ${type.color}44">
        ${type.icon} ${type.label}
      </span>
    </div>
    <h2 class="modal-title">${ev.title}</h2>
    <div class="modal-date-loc">
      <span>${ICONS.calendar} ${formatDate(ev.date)} a las ${ev.time}hs</span>
      <span>${ICONS.location} ${ev.location}</span>
    </div>
    <p class="modal-desc">${ev.description}</p>
    <div class="modal-organizer">
      <p>Organizado por</p>
      <strong>${ev.organizer}</strong>
    </div>
    <div class="modal-tags">
      <div class="modal-tags-label">Etiquetas</div>
      <div class="event-tags" style="margin-top:0.5rem">${tagsHtml}</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem">
      ${ICONS.users}
      <strong style="color:var(--blue-bright)">${ev.attendees.toLocaleString('es-AR')}</strong> personas convocadas
    </div>
    <div class="modal-footer">
      <button class="modal-btn-primary ${joined ? 'joined' : ''}"
              id="modal-join-btn"
              onclick="toggleJoinFromModal('${ev.id}')">
        ${joined ? '✓ Ya estás inscripto' : '✊ Sumarme al evento'}
      </button>
      <button class="modal-btn-secondary" onclick="shareEvent('${ev.id}')">
        ${ICONS.share} Compartir
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modal = document.getElementById('event-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

window.toggleJoinFromModal = function(eventId) {
  toggleJoin(eventId);
  const btn = document.getElementById('modal-join-btn');
  const joined = state.joinedEvents.has(eventId);
  if (btn) {
    btn.textContent = joined ? '✓ Ya estás inscripto' : '✊ Sumarme al evento';
    btn.classList.toggle('joined', joined);
  }
};

window.shareEvent = function(eventId) {
  const ev = EVENTS.find(e => e.id === eventId);
  if (!ev) return;
  const text = `📢 ${ev.title}\n📅 ${formatDate(ev.date)}\n📍 ${ev.location}\n\n#JusSocial #JusticiaSocial`;
  if (navigator.share) {
    navigator.share({ title: ev.title, text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Información copiada al portapapeles', 'gold', '📋');
    });
  }
};

// ── Province Selection ────────────────────────────────────────
window.selectProvince = function(id) {
  if (state.activeProvince === id) {
    state.activeProvince = null;
  } else {
    state.activeProvince = id;
    const prov = PROVINCES.find(p => p.id === id);
    showToast(`Filtrando: ${prov.icon} ${prov.name}`, 'gold', '📍');
    // Scroll to events
    setTimeout(() => {
      document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
  updateNavActiveProvince();
  renderProvinceGrid();
  renderEvents();
  renderTypeFilters();
  // Rebuild map to reflect selection
  if (mapInstance) mapInstance.rebuild();
};

function updateNavActiveProvince() {
  const el = document.getElementById('nav-active-province');
  if (!el) return;
  if (state.activeProvince) {
    const prov = PROVINCES.find(p => p.id === state.activeProvince);
    el.textContent = `${prov.icon} ${prov.name}`;
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
}

// ── Type Filter ───────────────────────────────────────────────
window.filterByType = function(type) {
  state.activeType = type;
  renderTypeFilters();
  renderEvents();
};

// ── Search ────────────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');
  const heroInput = document.getElementById('hero-search-input');

  function doSearch(val) {
    state.searchQuery = val;
    renderEvents();
    if (val.trim()) {
      document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (input) {
    input.addEventListener('input', e => doSearch(e.target.value));
  }
  if (btn) {
    btn.addEventListener('click', () => {
      if (input) doSearch(input.value);
    });
  }
  if (heroInput) {
    heroInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        state.searchQuery = e.target.value;
        if (input) input.value = e.target.value;
        renderEvents();
        document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ── Join ──────────────────────────────────────────────────────
window.toggleJoin = function(eventId) {
  if (state.joinedEvents.has(eventId)) {
    state.joinedEvents.delete(eventId);
    showToast('Inscripción cancelada', '', '↩️');
  } else {
    state.joinedEvents.add(eventId);
    showToast('¡Inscripción confirmada! Te esperamos 🎉', 'success', '✅');
  }
  // Update button in grid if visible
  const btn = document.getElementById(`join-${eventId}`);
  if (btn) {
    const joined = state.joinedEvents.has(eventId);
    btn.textContent = joined ? '✓ Inscripto' : 'Sumarme';
    btn.classList.toggle('joined', joined);
  }
};

// ── Bottom Nav ──────────────────────────────────────────────────
function initBottomNav() {
  const tabs = document.querySelectorAll('.bottom-nav .nav-item');
  const screens = document.querySelectorAll('section.screen');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all screens, show target
      const targetId = tab.dataset.tab;
      screens.forEach(screen => {
        if (screen.id === targetId + '-screen') {
          screen.classList.add('active');
        } else {
          screen.classList.remove('active');
        }
      });
      
      window.scrollTo(0, 0);
    });
  });

  // Handle Home menu links
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = card.dataset.target;
      if (targetId === 'historia') {
        document.querySelector('.nav-item[data-tab="biblioteca"]').click();
      } else if (targetId === 'accion' || targetId === 'comparativa' || targetId === 'documentos' || targetId === 'conceptos') {
        document.querySelector('.nav-item[data-tab="explorar"]').click();
      }
    });
  });
}

// ── Date Filter ───────────────────────────────────────────────
function initDateFilter() {
  const fromInput = document.getElementById('date-from');
  const toInput = document.getElementById('date-to');
  const clearBtn = document.getElementById('date-clear-btn');

  if (fromInput) {
    fromInput.addEventListener('change', e => {
      state.dateFrom = e.target.value;
      renderEvents();
    });
  }
  if (toInput) {
    toInput.addEventListener('change', e => {
      state.dateTo = e.target.value;
      renderEvents();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.dateFrom = '';
      state.dateTo = '';
      if (fromInput) fromInput.value = '';
      if (toInput) toInput.value = '';
      renderEvents();
      showToast('Filtro de fechas eliminado', '', '📅');
    });
  }
}

// ── Map Init ──────────────────────────────────────────────────
function initMap() {
  mapInstance = initArgentinaMap(
    getEventCountByProvince,
    window.selectProvince,
    state,
  );
}

// ── Bootstrap ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderProvinceGrid();
  renderTypeFilters();
  renderEvents();
  renderTimeline();
  renderHistory();

  initParticles();
  initNavbar();
  initReveal();
  initCounters();
  initDraggableTimeline();
  initSearch();
  initBottomNav();
  initDateFilter();
  initMap();

  // Modal close on overlay click
  const modal = document.getElementById('event-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) window.closeModal();
    });
  }

  // Keyboard ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeModal();
  });
});
