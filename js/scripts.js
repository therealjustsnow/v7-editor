// ─── STATE ──────────────────────────────────────────────────────────
const state = {
  platform: 'bd',
  discordTheme: 'dark',

  // Root vars
  mainColor: '#2780e6',
  hoverColor: '#1e63b3',
  successColor: '#43b581',
  dangerColor: '#982929',

  onlineColor: '#43b581',
  idleColor: '#faa61a',
  dndColor: '#982929',
  streamingColor: '#593695',
  offlineColor: '#808080',

  bgUrl: 'https://clearvision.github.io/images/sapphire.jpg',
  bgPosition: 'center',
  bgSize: 'cover',
  bgAttachment: 'fixed',
  bgShadingPct: 100,
  filterBlur: 0,
  filterBrightness: 100,
  filterSaturate: 100,
  filterContrast: 100,

  popoutLinkBg: true,
  popoutUrl: 'https://clearvision.github.io/images/sapphire.jpg',
  popoutPosition: 'center',
  popoutSize: 'cover',
  popoutAttachment: 'fixed',

  modalLinkBg: true,
  modalUrl: 'https://clearvision.github.io/images/sapphire.jpg',
  modalPosition: 'center',
  modalSize: 'cover',
  modalAttachment: 'fixed',

  homeIcon: 'https://clearvision.github.io/icons/discord.svg',
  homeSize: 'cover',

  mainFont: '"gg sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  codeFont: 'Consolas, "gg mono", "Liberation Mono", Menlo, Courier, monospace',

  channelNormal: 'var(--interactive-text-default)',
  channelMuted: 'var(--interactive-muted)',
  channelHover: 'var(--interactive-text-hover)',
  channelSelected: 'var(--interactive-text-active)',
  channelSelectedBg: 'var(--main-color)',
  channelUnread: 'var(--main-color)',
  channelUnreadHover: 'var(--hover-color)',

  customCss: '',

  // Addons
  addonTitlebar: false,
  addonHorizontalServers: false,
  addonRadialStatus: false,
  addonDiscolored: false,
  addonServerColumns: false,

  // Transparent backgrounds
  bgTransparent: false,
  popoutTransparent: false,
  modalTransparent: false,

  // Per-theme shading
  shading: {
    light: {
      bgShading: { color: '#fcfcfc', opacity: 0.3 },
      cardShading: { color: '#fcfcfc', opacity: 0.3 },
      popoutShading: { color: '#fcfcfc', opacity: 0.7 },
      modalShading: { color: '#fcfcfc', opacity: 0.5 },
      inputShading: { color: '#000000', opacity: 0.3 },
      normalText: '#36363c',
      mutedText: '#75757e',
    },
    dark: {
      bgShading: { color: '#000000', opacity: 0.4 },
      cardShading: { color: '#000000', opacity: 0.2 },
      popoutShading: { color: '#000000', opacity: 0.6 },
      modalShading: { color: '#000000', opacity: 0.4 },
      inputShading: { color: '#ffffff', opacity: 0.05 },
      normalText: '#d8d8db',
      mutedText: '#aeaeb4',
    },
    darker: {
      bgShading: { color: '#000000', opacity: 0.6 },
      cardShading: { color: '#000000', opacity: 0.3 },
      popoutShading: { color: '#000000', opacity: 0.7 },
      modalShading: { color: '#000000', opacity: 0.5 },
      inputShading: { color: '#ffffff', opacity: 0.05 },
      normalText: '#fbfbfb',
      mutedText: '#94949c',
    },
    midnight: {
      bgShading: { color: '#000000', opacity: 0.8 },
      cardShading: { color: '#000000', opacity: 0.4 },
      popoutShading: { color: '#000000', opacity: 0.8 },
      modalShading: { color: '#000000', opacity: 0.6 },
      inputShading: { color: '#ffffff', opacity: 0.05 },
      normalText: '#dcdcde',
      mutedText: '#86868e',
    },
  }
};

// ─── PRESETS ─────────────────────────────────────────────────────────
const PRESETS = {
  sapphire: {
    label: 'Sapphire',
    mainColor: '#2780e6',
    hoverColor: '#1e63b3',
    bgUrl: 'https://clearvision.github.io/images/sapphire.jpg',
  },
  ruby: {
    label: 'Ruby',
    mainColor: '#e62727',
    hoverColor: '#b31e1e',
    bgUrl: 'https://clearvision.github.io/images/ruby.jpg',
  },
  amber: {
    label: 'Amber',
    mainColor: '#e67a27',
    hoverColor: '#b35d1e',
    bgUrl: 'https://clearvision.github.io/images/amber.jpg',
  },
  emerald: {
    label: 'Emerald',
    mainColor: '#33e627',
    hoverColor: '#2ab31e',
    bgUrl: 'https://clearvision.github.io/images/emerald.jpg',
  },
  amethyst: {
    label: 'Amethyst',
    mainColor: '#da27e6',
    hoverColor: '#a71eb3',
    bgUrl: 'https://clearvision.github.io/images/amethyst.jpg',
  },
  halloween: {
    label: 'Halloween',
    mainColor: '#e67a27',
    hoverColor: '#b35d1e',
    bgUrl: 'https://clearvision.github.io/images/halloween.jpg',
  },
  winter: {
    label: 'Winter',
    mainColor: '#66aacc',
    hoverColor: '#447799',
    bgUrl: 'https://clearvision.github.io/images/winter.jpg',
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function rgbToHex(r,g,b) {
  return '#' + [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
}
function colorOpacityToRgba(color, opacity) {
  const rgb = parseColorToRgb(color);
  if (!rgb) return `rgba(0, 0, 0, ${opacity})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}
function isHexColor(v) { return typeof v === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(v.trim()); }

// Wraps multi-word font names in double quotes; strips existing quotes first
function quoteFontName(fontStack) {
  return fontStack.split(',').map(f => {
    f = f.trim().replace(/^["']|["']$/g, '');
    if (f.includes(' ')) return `"${f}"`;
    return f;
  }).join(', ');
}

function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) };
}

function parseColorToRgb(color) {
  if (!color || typeof color !== 'string') return null;
  color = color.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(color)) return hexToRgb(color);
  if (/^#[0-9a-fA-F]{3}$/.test(color)) {
    return { r: parseInt(color[1]+color[1],16), g: parseInt(color[2]+color[2],16), b: parseInt(color[3]+color[3],16) };
  }
  const rgbM = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);
  if (rgbM) return { r: Math.round(parseFloat(rgbM[1])), g: Math.round(parseFloat(rgbM[2])), b: Math.round(parseFloat(rgbM[3])) };
  const hslM = color.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%?\s*,\s*([\d.]+)%?/);
  if (hslM) return hslToRgb(parseFloat(hslM[1]), parseFloat(hslM[2]), parseFloat(hslM[3]));
  // Browser fallback: handles named colors, etc.
  try {
    const el = document.createElement('div');
    el.style.color = color;
    document.body.appendChild(el);
    const comp = getComputedStyle(el).color;
    document.body.removeChild(el);
    const m = comp.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (m) return { r: parseInt(m[1]), g: parseInt(m[2]), b: parseInt(m[3]) };
  } catch(e) {}
  return null;
}

function isValidColor(v) {
  if (!v || typeof v !== 'string') return false;
  if (v.trim().startsWith('var(')) return false;
  return parseColorToRgb(v.trim()) !== null;
}

function isGradient(v) {
  if (!v || typeof v !== 'string') return false;
  return /^\s*(repeating-)?(linear|radial|conic)-gradient\s*\(/i.test(v.trim());
}

// Build the CSS value for --background-image (and equivalent popout/modal vars)
function toBgImageValue(val) {
  if (!val || val === 'none') return 'none';
  if (isGradient(val)) return val;
  return `url(${val})`;
}

// Build the inline style background shorthand for the preview
function toBgStyle(val, position, size) {
  if (!val) return '';
  if (isGradient(val)) return val; // gradients don't support center/cover shorthand cleanly
  return `url(${val}) ${position}/${size} no-repeat`;
}

function resolveChannelVar(val) {
  // Resolve common Discord var references for preview
  const sh = state.shading[state.discordTheme];
  if (val === 'var(--main-color)') return state.mainColor;
  if (val === 'var(--hover-color)') return state.hoverColor;
  if (val === 'var(--interactive-text-default)') return sh.normalText;
  if (val === 'var(--interactive-text-hover)') return sh.normalText;
  if (val === 'var(--interactive-text-active)') return sh.normalText;
  if (val === 'var(--interactive-muted)') return sh.mutedText;
  return isHexColor(val) ? val : sh.normalText;
}

function resolveChannelSelectedBg() {
  const v = state.channelSelectedBg;
  if (v === 'var(--main-color)') return state.mainColor;
  if (isHexColor(v)) return v;
  return state.mainColor;
}

function resolveChannelUnread() {
  const v = state.channelUnread;
  if (v === 'var(--main-color)') return state.mainColor;
  if (isHexColor(v)) return v;
  return state.mainColor;
}

// ─── COLOR PICKER WIDGET ──────────────────────────────────────────────
function makeColorPicker(containerId, stateKey, onChange) {
  const el = document.getElementById(containerId);
  el.innerHTML = `
    <div class="color-input-row">
      <div class="color-swatch-wrap" title="Click to pick color">
        <div class="color-swatch" id="${containerId}-swatch"></div>
        <input type="color" id="${containerId}-picker">
      </div>
      <input type="text" class="hex-input" id="${containerId}-hex" maxlength="60" placeholder="#000000 · rgb() · hsl() · red">
    </div>`;

  const picker = document.getElementById(`${containerId}-picker`);
  const hexIn = document.getElementById(`${containerId}-hex`);
  const swatch = document.getElementById(`${containerId}-swatch`);

  function setVal(val) {
    if (val === undefined || val === null) return;
    const v = String(val).trim();
    if (isHexColor(v)) {
      const clean = v.startsWith('#') ? v : '#' + v;
      if (clean.length === 7) picker.value = clean;
      swatch.style.background = clean;
    } else if (isValidColor(v)) {
      swatch.style.background = v;
      const rgb = parseColorToRgb(v);
      if (rgb) picker.value = rgbToHex(rgb.r, rgb.g, rgb.b);
    }
    hexIn.value = v;
    if (!stateKey.startsWith('_dummy_')) state[stateKey] = v;
    onChange(v);
  }

  picker.addEventListener('input', () => {
    setVal(picker.value);
  });
  hexIn.addEventListener('input', () => {
    const v = hexIn.value.trim();
    if (isHexColor(v)) {
      swatch.style.background = v;
      if (v.length === 7) picker.value = v;
    } else if (isValidColor(v)) {
      swatch.style.background = v;
      const rgb = parseColorToRgb(v);
      if (rgb) picker.value = rgbToHex(rgb.r, rgb.g, rgb.b);
    }
    state[stateKey] = v;
    onChange(v);
  });

  // Init
  setVal(state[stateKey]);
  return { setVal };
}

// ─── RGBA SHADING WIDGET ──────────────────────────────────────────────
function makeRgbaControl(containerId, themeKey, shadingKey, label) {
  const el = document.getElementById(containerId);
  el.innerHTML = `
    <div class="rgba-row">
      <div class="color-swatch-wrap" title="Click to pick color" style="width:24px;height:24px;">
        <div class="color-swatch" id="${containerId}-swatch"></div>
        <input type="color" id="${containerId}-picker">
      </div>
      <div class="opacity-wrap">
        <div class="opacity-label">
          <span>Opacity</span>
          <span id="${containerId}-opacity-val"></span>
        </div>
        <input type="range" class="slim" id="${containerId}-opacity" min="0" max="1" step="0.01">
      </div>
    </div>`;

  const picker = document.getElementById(`${containerId}-picker`);
  const opSlider = document.getElementById(`${containerId}-opacity`);
  const opVal = document.getElementById(`${containerId}-opacity-val`);
  const swatch = document.getElementById(`${containerId}-swatch`);

  function update() {
    const color = picker.value;
    const opacity = parseFloat(opSlider.value);
    swatch.style.background = colorOpacityToRgba(color, opacity);
    opVal.textContent = Math.round(opacity * 100) + '%';
    state.shading[themeKey][shadingKey] = { color, opacity };
    updatePreview();
    updateCssOutput();
  }

  picker.addEventListener('input', update);
  opSlider.addEventListener('input', update);

  // Init
  const s = state.shading[themeKey][shadingKey];
  picker.value = s.color;
  opSlider.value = s.opacity;
  swatch.style.background = colorOpacityToRgba(s.color, s.opacity);
  opVal.textContent = Math.round(s.opacity * 100) + '%';

  return {
    refresh() {
      const s = state.shading[themeKey][shadingKey];
      picker.value = s.color;
      opSlider.value = s.opacity;
      swatch.style.background = colorOpacityToRgba(s.color, s.opacity);
      opVal.textContent = Math.round(s.opacity * 100) + '%';
    }
  };
}

// ─── COLOR PICKER REFS ────────────────────────────────────────────────
let colorPickers = {};

function initControls() {
  // Accent colors
  colorPickers.mainColor = makeColorPicker('ctrl-main-color', 'mainColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.hoverColor = makeColorPicker('ctrl-hover-color', 'hoverColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.successColor = makeColorPicker('ctrl-success-color', 'successColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.dangerColor = makeColorPicker('ctrl-danger-color', 'dangerColor', () => { updatePreview(); updateCssOutput(); });

  // Status colors
  colorPickers.onlineColor = makeColorPicker('ctrl-online-color', 'onlineColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.idleColor = makeColorPicker('ctrl-idle-color', 'idleColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.dndColor = makeColorPicker('ctrl-dnd-color', 'dndColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.streamingColor = makeColorPicker('ctrl-streaming-color', 'streamingColor', () => { updatePreview(); updateCssOutput(); });
  colorPickers.offlineColor = makeColorPicker('ctrl-offline-color', 'offlineColor', () => { updatePreview(); updateCssOutput(); });

  // Normal/muted text
  colorPickers.normalText = makeColorPicker('ctrl-normal-text', '_dummy_nt', (v) => {
    state.shading[state.discordTheme].normalText = v;
    updatePreview(); updateCssOutput();
  });
  colorPickers.mutedText = makeColorPicker('ctrl-muted-text', '_dummy_mt', (v) => {
    state.shading[state.discordTheme].mutedText = v;
    updatePreview(); updateCssOutput();
  });
  // Hacky: override _dummy_ keys
  colorPickers.normalText.setVal(state.shading[state.discordTheme].normalText);
  colorPickers.mutedText.setVal(state.shading[state.discordTheme].mutedText);

  // Shading rgba controls
  initShadingControls();

  // Background fields
  document.getElementById('ctrl-bg-url').value = state.bgUrl;
  document.getElementById('ctrl-bg-url').addEventListener('input', (e) => {
    state.bgUrl = e.target.value;
    updatePreview(); updateCssOutput();
  });
  document.getElementById('ctrl-bg-position').value = state.bgPosition;
  document.getElementById('ctrl-bg-position').addEventListener('change', (e) => { state.bgPosition = e.target.value; updateCssOutput(); });
  document.getElementById('ctrl-bg-size').value = state.bgSize;
  document.getElementById('ctrl-bg-size').addEventListener('change', (e) => { state.bgSize = e.target.value; updateCssOutput(); });
  document.getElementById('ctrl-bg-attachment').value = state.bgAttachment;
  document.getElementById('ctrl-bg-attachment').addEventListener('change', (e) => { state.bgAttachment = e.target.value; updateCssOutput(); });

  const shadingPct = document.getElementById('ctrl-bg-shading-pct');
  shadingPct.value = state.bgShadingPct;
  shadingPct.addEventListener('input', (e) => {
    state.bgShadingPct = parseInt(e.target.value);
    document.getElementById('shading-pct-label').textContent = state.bgShadingPct + '%';
    updateCssOutput();
  });

  // Filter sliders
  ['blur','brightness','saturate','contrast'].forEach(f => {
    const el = document.getElementById(`filter-${f}`);
    const valEl = document.getElementById(`filter-${f}-val`);
    const key = `filter${f.charAt(0).toUpperCase()+f.slice(1)}`;
    el.value = state[key];
    valEl.textContent = f === 'blur' ? state[key] + 'px' : state[key] + '%';
    el.addEventListener('input', () => {
      state[key] = parseFloat(el.value);
      valEl.textContent = f === 'blur' ? state[key] + 'px' : state[key] + '%';
      updatePreview(); updateCssOutput();
    });
  });

  // Popout link
  document.getElementById('popout-link-bg').addEventListener('change', (e) => {
    state.popoutLinkBg = e.target.checked;
    document.getElementById('popout-custom-fields').style.display = e.target.checked ? 'none' : 'flex';
    updateCssOutput();
  });
  ['url','position','size','attachment'].forEach(f => {
    const el = document.getElementById(`ctrl-popout-${f}`);
    if (!el) return;
    el.addEventListener('input', () => { state[`popout${f.charAt(0).toUpperCase()+f.slice(1)}`] = el.value; updateCssOutput(); });
    el.addEventListener('change', () => { state[`popout${f.charAt(0).toUpperCase()+f.slice(1)}`] = el.value; updateCssOutput(); });
  });

  // Modal link
  document.getElementById('modal-link-bg').addEventListener('change', (e) => {
    state.modalLinkBg = e.target.checked;
    document.getElementById('modal-custom-fields').style.display = e.target.checked ? 'none' : 'flex';
    updateCssOutput();
  });
  ['url','position','size','attachment'].forEach(f => {
    const el = document.getElementById(`ctrl-modal-${f}`);
    if (!el) return;
    el.addEventListener('input', () => { state[`modal${f.charAt(0).toUpperCase()+f.slice(1)}`] = el.value; updateCssOutput(); });
    el.addEventListener('change', () => { state[`modal${f.charAt(0).toUpperCase()+f.slice(1)}`] = el.value; updateCssOutput(); });
  });

  // Home icon
  document.getElementById('ctrl-home-icon').value = state.homeIcon;
  document.getElementById('ctrl-home-icon').addEventListener('input', (e) => { state.homeIcon = e.target.value; updateCssOutput(); });
  document.getElementById('ctrl-home-size').value = state.homeSize;
  document.getElementById('ctrl-home-size').addEventListener('change', (e) => { state.homeSize = e.target.value; updateCssOutput(); });

  // Fonts
  document.getElementById('ctrl-main-font').addEventListener('input', (e) => { state.mainFont = e.target.value; updateCssOutput(); });
  document.getElementById('ctrl-code-font').addEventListener('input', (e) => { state.codeFont = e.target.value; updateCssOutput(); });

  // Channel vars
  const chFields = [
    ['ctrl-channel-normal','channelNormal'],
    ['ctrl-channel-muted','channelMuted'],
    ['ctrl-channel-hover','channelHover'],
    ['ctrl-channel-selected','channelSelected'],
    ['ctrl-channel-selected-bg','channelSelectedBg'],
    ['ctrl-channel-unread','channelUnread'],
    ['ctrl-channel-unread-hover','channelUnreadHover'],
  ];
  chFields.forEach(([id, key]) => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => { state[key] = el.value; updatePreview(); updateCssOutput(); });
  });

  // Custom CSS
  document.getElementById('ctrl-custom-css').addEventListener('input', (e) => { state.customCss = e.target.value; updateCssOutput(); });

  // Platform tabs
  document.querySelectorAll('.ptab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.platform = btn.dataset.platform;
      updateCssOutput();
    });
  });

  // Discord theme
  document.getElementById('discord-theme-select').addEventListener('change', (e) => {
    state.discordTheme = e.target.value;
    refreshShadingControls();
    updatePreview();
    updateCssOutput();
  });

  // Preset select
  document.getElementById('preset-select').addEventListener('change', (e) => {
    const key = e.target.value;
    if (!key || !PRESETS[key]) return;
    applyPreset(PRESETS[key]);
  });

  // Copy / Download
  document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(generateCSS()).then(() => showToast('✓ Copied to clipboard!'));
  });
  document.getElementById('download-btn').addEventListener('click', downloadCSS);
}

let shadingRgbaControls = {};

function initShadingControls() {
  const theme = state.discordTheme;
  shadingRgbaControls.bgShading = makeRgbaControl('ctrl-bg-shading', theme, 'bgShading');
  shadingRgbaControls.cardShading = makeRgbaControl('ctrl-card-shading', theme, 'cardShading');
  shadingRgbaControls.popoutShading = makeRgbaControl('ctrl-popout-shading', theme, 'popoutShading');
  shadingRgbaControls.modalShading = makeRgbaControl('ctrl-modal-shading', theme, 'modalShading');
  shadingRgbaControls.inputShading = makeRgbaControl('ctrl-input-shading', theme, 'inputShading');
}

function refreshShadingControls() {
  const theme = state.discordTheme;
  const labels = {
    dark: 'Ash (Dark)', darker: 'Dark (Darker)', midnight: 'Onyx (Midnight)', light: 'Light'
  };
  document.getElementById('shading-note').innerHTML =
    `Editing shading for: <strong>${labels[theme]}</strong>. Change the Discord Theme selector to edit other variants.`;

  // Fully rebuild all rgba controls bound to the new theme
  shadingRgbaControls.bgShading = makeRgbaControl('ctrl-bg-shading', theme, 'bgShading');
  shadingRgbaControls.cardShading = makeRgbaControl('ctrl-card-shading', theme, 'cardShading');
  shadingRgbaControls.popoutShading = makeRgbaControl('ctrl-popout-shading', theme, 'popoutShading');
  shadingRgbaControls.modalShading = makeRgbaControl('ctrl-modal-shading', theme, 'modalShading');
  shadingRgbaControls.inputShading = makeRgbaControl('ctrl-input-shading', theme, 'inputShading');

  // Update text color pickers for the newly selected theme
  colorPickers.normalText.setVal(state.shading[theme].normalText);
  colorPickers.mutedText.setVal(state.shading[theme].mutedText);
}

// ─── APPLY PRESET ────────────────────────────────────────────────────
function applyPreset(preset) {
  Object.keys(preset).forEach(key => { state[key] = preset[key]; });
  // Refresh pickers
  colorPickers.mainColor.setVal(state.mainColor);
  colorPickers.hoverColor.setVal(state.hoverColor);
  document.getElementById('ctrl-bg-url').value = state.bgUrl;
  updatePreview();
  updateCssOutput();
}

// ─── UPDATE PREVIEW ───────────────────────────────────────────────────
function updatePreview() {
  const sh = state.shading[state.discordTheme];
  const bgUrl = state.bgUrl;
  const bgStyle = bgUrl ? toBgStyle(bgUrl, 'center', 'cover') : '#1a1b1f';
  // For gradients, position/size/attachment controls don't apply
  const isGrad = isGradient(bgUrl);

  // Sync theme color CSS vars so mobile nav + any CSS consumers stay in sync
  document.documentElement.style.setProperty('--theme-main', state.mainColor);
  document.documentElement.style.setProperty('--theme-hover', state.hoverColor);

  // Background
  document.getElementById('mock-bg').style.background = bgStyle;
  // Position/size/repeat only make sense for images
  if (!isGrad && bgUrl) {
    document.getElementById('mock-bg').style.backgroundSize = state.bgSize;
    document.getElementById('mock-bg').style.backgroundPosition = state.bgPosition;
    document.getElementById('mock-bg').style.backgroundRepeat = 'no-repeat';
  }

  // Apply filter to bg
  let filterStr = '';
  if (state.filterBlur !== 0) filterStr += `blur(${state.filterBlur}px) `;
  if (state.filterBrightness !== 100) filterStr += `brightness(${state.filterBrightness}%) `;
  if (state.filterSaturate !== 100) filterStr += `saturate(${state.filterSaturate}%) `;
  if (state.filterContrast !== 100) filterStr += `contrast(${state.filterContrast}%) `;
  document.getElementById('mock-bg').style.filter = filterStr.trim() || 'none';

  // Panel shadings
  const serversShading = colorOpacityToRgba(sh.bgShading.color, Math.min(sh.bgShading.opacity + 0.15, 1));
  const channelsShading = colorOpacityToRgba(sh.bgShading.color, sh.bgShading.opacity);
  const chatShading = colorOpacityToRgba(sh.bgShading.color, Math.max(sh.bgShading.opacity - 0.15, 0));
  const membersShading = channelsShading;

  document.getElementById('mock-servers-bg').style.background = serversShading;
  document.getElementById('mock-channels-bg').style.background = channelsShading;
  document.getElementById('mock-chat-bg').style.background = chatShading;
  document.getElementById('mock-members-bg').style.background = membersShading;

  // Text colors
  const normal = sh.normalText;
  const muted = sh.mutedText;

  document.querySelectorAll('.mock-server-name, .mock-chat-header, .mock-msg-name, .mock-member-name, .mock-user-name').forEach(el => {
    el.style.color = normal;
  });
  document.querySelectorAll('.mock-category-label, .mock-user-tag, .mock-member-cat').forEach(el => {
    el.style.color = muted;
  });

  // Channels
  const chNormal = resolveChannelVar(state.channelNormal);
  const chMuted = resolveChannelVar(state.channelMuted);
  const chSelectedBg = resolveChannelSelectedBg();
  const chUnread = resolveChannelUnread();

  ['rules','announce','showcase','offtopic'].forEach(ch => {
    const el = document.getElementById(`mock-ch-${ch}`);
    if (el) { el.style.color = chNormal; el.style.background = ''; }
  });
  // Muted not shown, hover not shown in static

  // Selected channel
  const selEl = document.getElementById('mock-ch-general');
  if (selEl) {
    selEl.style.background = chSelectedBg;
    selEl.style.color = '#ffffff';
  }

  // Unread channel
  const unreadEl = document.getElementById('mock-ch-theming');
  if (unreadEl) {
    unreadEl.style.color = chUnread;
    unreadEl.style.background = '';
    const pip = document.getElementById('mock-pip-theming');
    if (pip) pip.style.background = chUnread;
  }

  // Input box
  const inputBox = document.getElementById('mock-input-box');
  if (inputBox) {
    inputBox.style.background = colorOpacityToRgba(sh.inputShading.color, sh.inputShading.opacity);
    inputBox.style.color = muted;
  }

  // Status dots
  document.getElementById('ms-online').style.background = state.onlineColor;
  document.getElementById('ms-idle').style.background = state.idleColor;
  document.getElementById('ms-dnd').style.background = state.dndColor;
  document.getElementById('ms-streaming').style.background = state.streamingColor;
  document.getElementById('ms-offline').style.background = state.offlineColor;
  document.getElementById('mock-own-status').style.background = state.onlineColor;

  // Member status border matches bg shading
  document.querySelectorAll('.mock-member-status, .mock-status-dot').forEach(el => {
    el.style.borderColor = colorOpacityToRgba(sh.bgShading.color, Math.min(sh.bgShading.opacity + 0.2, 1));
  });

  // Main color on home avatar bg indicator
  document.getElementById('mock-active-server').style.outline = `3px solid ${state.mainColor}`;
  document.getElementById('mock-active-server').style.outlineOffset = '2px';

  // Code block shows main color
  document.getElementById('mock-code-color').style.color = state.mainColor;
  document.getElementById('mock-code-color').textContent = state.mainColor;

  // Message text color
  document.querySelectorAll('.mock-msg-text:not(.code-block)').forEach(el => { el.style.color = normal; });

  // Mention color uses main color
  document.querySelectorAll('.mock-msg-mention').forEach(el => {
    const {r,g,b} = parseColorToRgb(state.mainColor) || { r: 39, g: 128, b: 230 };
    el.style.background = `rgba(${r},${g},${b},0.25)`;
    el.style.color = `rgba(${r},${g},${b},1)`;
  });

  // Chat header border
  document.getElementById('mock-chat-header').style.borderBottomColor = colorOpacityToRgba('#000000', 0.15);

  // Avatar accent on bar
  document.getElementById('mock-avatar-bar').style.background = state.mainColor;
}

// ─── CSS GENERATION ───────────────────────────────────────────────────
function buildFilterValue() {
  let parts = [];
  if (state.filterBlur !== 0) parts.push(`blur(${state.filterBlur}px)`);
  if (state.filterBrightness !== 100) parts.push(`brightness(${state.filterBrightness}%)`);
  if (state.filterContrast !== 100) parts.push(`contrast(${state.filterContrast}%)`);
  // Saturate always included (default with saturation-factor)
  if (state.filterSaturate !== 100) {
    parts.push(`saturate(${state.filterSaturate}%)`);
  } else {
    parts.push(`saturate(calc(var(--saturation-factor, 1) * 1))`);
  }
  return parts.join(' ');
}

function getImports() {
  let lines = [];
  lines.push(`@import url("https://clearvision.github.io/ClearVision-v7/main.css");`);
  if (state.platform === 'bd' || state.platform === 'both')
    lines.push(`@import url("https://clearvision.github.io/ClearVision-v7/betterdiscord.css");`);
  if (state.platform === 'vencord' || state.platform === 'both')
    lines.push(`@import url("https://clearvision.github.io/ClearVision-v7/vencord.css");`);
  if (state.addonTitlebar)
    lines.push(`@import url("https://discordstyles.github.io/Addons/windows-titlebar.css");`);
  if (state.addonHorizontalServers)
    lines.push(`@import url("https://discordstyles.github.io/HorizontalServerList/HorizontalServerList.css");`);
  if (state.addonRadialStatus)
    lines.push(`@import url("https://discordstyles.github.io/RadialStatus/RadialStatus.css");`);
  if (state.addonDiscolored)
    lines.push(`@import url("https://nyri4.github.io/Discolored/main.css");`);
  if (state.addonServerColumns)
    lines.push(`@import url("https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css");`);
  return lines.join('\n');
}

function getMeta() {
  const platformLabel = state.platform === 'bd' ? 'BetterDiscord' :
                        state.platform === 'vencord' ? 'Vencord' :
                        'BetterDiscord and Vencord';
  const platformName = state.platform === 'bd' ? 'ClearVision V7 for BetterDiscord' :
                       state.platform === 'vencord' ? 'ClearVision V7 for Vencord' :
                       'ClearVision V7';
  return `/**
 * @name ${platformName}
 * @author ClearVision Team
 * @version 7.0.1
 * @description Highly customizable theme for ${platformLabel}.
 * @source https://github.com/ClearVision/ClearVision-v7
 * @website https://clearvision.github.io
 * @invite dHaSxn3
 */`;
}

function generateShadingBlock(themeClass, themeName, themeKey) {
  const sh = state.shading[themeKey];
  return `/* ${themeName} */
${themeClass} {
  --background-shading: ${colorOpacityToRgba(sh.bgShading.color, sh.bgShading.opacity)};
  --card-shading: ${colorOpacityToRgba(sh.cardShading.color, sh.cardShading.opacity)};
  --popout-shading: ${colorOpacityToRgba(sh.popoutShading.color, sh.popoutShading.opacity)};
  --modal-shading: ${colorOpacityToRgba(sh.modalShading.color, sh.modalShading.opacity)};
  --input-shading: ${colorOpacityToRgba(sh.inputShading.color, sh.inputShading.opacity)};
  --normal-text: ${sh.normalText};
  --muted-text: ${sh.mutedText};
}`;
}

function generateCSS() {
  const popoutImage = state.popoutTransparent ? 'none' :
                      state.popoutLinkBg ? 'var(--background-image)' : toBgImageValue(state.popoutUrl);
  const popoutPosition = state.popoutLinkBg ? 'var(--background-position)' : state.popoutPosition;
  const popoutSize = state.popoutLinkBg ? 'var(--background-size)' : state.popoutSize;
  const popoutAttachment = state.popoutLinkBg ? 'var(--background-attachment)' : state.popoutAttachment;
  const popoutFilter = state.popoutLinkBg ? 'var(--background-filter)' : 'none';

  const modalImage = state.modalTransparent ? 'none' :
                     state.modalLinkBg ? 'var(--background-image)' : toBgImageValue(state.modalUrl);
  const modalPosition = state.modalLinkBg ? 'var(--background-position)' : state.modalPosition;
  const modalSize = state.modalLinkBg ? 'var(--background-size)' : state.modalSize;
  const modalAttachment = state.modalLinkBg ? 'var(--background-attachment)' : state.modalAttachment;
  const modalFilter = state.modalLinkBg ? 'var(--background-filter)' : 'none';

  const bgImageVal = state.bgTransparent ? 'none' : toBgImageValue(state.bgUrl);
  const filterVal = buildFilterValue();

  let css = `${getMeta()}
/* IMPORT CSS */
${getImports()}
/* SETTINGS */
:root {
  /* ACCENT COLORS */
  --main-color: ${state.mainColor}; /* main accent color (hex, rgb or hsl) [default: #2780e6] */
  --hover-color: ${state.hoverColor}; /* hover accent color (hex, rgb or hsl) [default: #1e63b3] */
  --success-color: ${state.successColor}; /* positive accent color (hex, rgb or hsl) [default: #43b581] */
  --danger-color: ${state.dangerColor}; /* danger accent color (hex, rgb or hsl) [default: #982929] */
  /* STATUS COLORS */
  --online-color: ${state.onlineColor}; /* online status color (hex, rgb or hsl) [default: #43b581] */
  --idle-color: ${state.idleColor}; /* idle status color (hex, rgb or hsl) [default: #faa61a] */
  --dnd-color: ${state.dndColor}; /* dnd status color (hex, rgb or hsl) [default: #982929] */
  --streaming-color: ${state.streamingColor}; /* streaming status color (hex, rgb or hsl) [default: #593695] */
  --offline-color: ${state.offlineColor}; /* offline/invisible status color (hex, rgb or hsl) [default: #808080] */
  /* APP BACKGROUND */
  --background-shading-percent: ${state.bgShadingPct}%; /* app background shading amount (0 for complete smoothness) [default: 100%] */
  --background-image: ${bgImageVal}; /* app background image (link must be HTTPS) [default: url(https://clearvision.github.io/images/sapphire.jpg)]*/
  --background-position: ${state.bgPosition}; /* app background position [default: center] */
  --background-size: ${state.bgSize}; /* app background size (px) [default: cover] */
  --background-attachment: ${state.bgAttachment}; /* app background attachment [default: fixed] */
  --background-filter: ${filterVal}; /* app background adjustments [default: saturate(calc(var(--saturation-factor, 1) * 1))] */
  /* USER POPOUT BACKGROUND */
  --user-popout-image: ${popoutImage}; /* user popout background image (link must be HTTPS) [default: var(--background-image)] */
  --user-popout-position: ${popoutPosition}; /* user popout position [default: var(--background-position)] */
  --user-popout-size: ${popoutSize}; /* user popout size [default: var(--background-size)] */
  --user-popout-attachment: ${popoutAttachment}; /* user popout attachment [default: var(--background-attachment)] */
  --user-popout-filter: ${popoutFilter}; /* user popout background adjustments [default: var(--background-filter)] */
  /* USER MODAL BACKGROUND */
  --user-modal-image: ${modalImage}; /* user modal background image (link must be HTTPS) [default: var(--background-image)] */
  --user-modal-position: ${modalPosition}; /* user modal position [default: var(--background-position)] */
  --user-modal-size: ${modalSize}; /* user modal size [default: var(--background-size)] */
  --user-modal-attachment: ${modalAttachment}; /* user modal attachment [default: var(--background-attachment)] */
  --user-modal-filter: ${modalFilter}; /* user modal background adjustments [default: var(--background-filter)] */
  /* HOME ICON */
  --home-icon: url(${state.homeIcon}); /* home button icon (link must be HTTPS) [default: url(https://clearvision.github.io/icons/discord.svg)]*/
  --home-size: ${state.homeSize}; /* home button icon size [default: cover] */
  /* FONTS */
  --main-font: ${quoteFontName(state.mainFont)}; /* main font for app [default: gg sans, Helvetica Neue, Helvetica, Arial, sans-serif] */
  --code-font: ${quoteFontName(state.codeFont)}; /* font for codeblocks [default: Consolas, Liberation Mono, Menlo, Courier, monospace] */
  /* CHANNEL COLORS */
  --channel-normal: ${state.channelNormal}; /* channel text color [default: var(--interactive-text-default)] */
  --channel-muted: ${state.channelMuted}; /* muted channel text color [default: var(--interactive-muted)] */
  --channel-hover: ${state.channelHover}; /* hovered channel text color [default: var(--interactive-text-hover)] */
  --channel-selected: ${state.channelSelected}; /* selected channel text color [default: var(--interactive-text-active)] */
  --channel-selected-bg: ${state.channelSelectedBg}; /* selected channel background [default: var(--main-color)] */
  --channel-unread: ${state.channelUnread}; /* unread channel text color [default: var(--main-color)] */
  --channel-unread-hover: ${state.channelUnreadHover}; /* unread channel hover color [default: var(--hover-color)] */
  /* ACCESSIBILITY */
  --focus-color: var(--main-color); /* outline when pressing TAB key [default: var(--main-color)] */
}

/* THEME SPECIFIC SHADING */
${generateShadingBlock(':is(.theme-light, .theme-dark .theme-light)', 'LIGHT THEME', 'light')}

${generateShadingBlock(':is(.theme-dark, .theme-light .theme-dark)', 'ASH THEME', 'dark')}

${generateShadingBlock(':is(.theme-darker, .theme-light .theme-darker)', 'DARK THEME', 'darker')}

${generateShadingBlock(':is(.theme-midnight, .theme-light .theme-midnight)', 'ONYX THEME', 'midnight')}

/* ADD ADDITIONAL CSS BELOW HERE */
${state.customCss || ''}`;

  return css;
}

// ─── CSS OUTPUT ───────────────────────────────────────────────────────
function updateCssOutput() {
  const raw = generateCSS();
  // Simple syntax highlight
  const highlighted = raw
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    // Comments
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="css-comment">$1</span>')
    // @ rules
    .replace(/^(@\w+[^{;\n]*)/gm, '<span class="css-atrule">$1</span>')
    // Selectors — { excluded from span so punctuation rule colours it uniformly
    .replace(/^([^{}\/\n@][^{}]*?)(\s*\{)/gm, '<span class="css-selector">$1</span><span class="css-punct">$2</span>')
    // Closing braces
    .replace(/^(\s*\})/gm, '<span class="css-punct">$1</span>')
    // Properties + values combined — prevents matching https: inside url() strings
    .replace(/(--[\w-]+)(\s*:\s*)([^;{}\n]+)(;)/g, '<span class="css-property">$1</span>$2<span class="css-value">$3</span>$4');

  document.getElementById('css-output').innerHTML = highlighted;
}

// ─── DOWNLOAD CSS ─────────────────────────────────────────────────────
function downloadCSS() {
  const fname = state.platform === 'vencord' ? 'ClearVision-v7-Vencord.css' :
                state.platform === 'bd' ? 'ClearVision-v7-BetterDiscord.css' :
                'ClearVision-v7.css';
  const blob = new Blob([generateCSS()], {type:'text/css'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fname;
  a.click();
  showToast('✓ Download started!');
}

// ─── MOBILE TABS ──────────────────────────────────────────────────────
function mobileTab(tab) {
  const sidebar = document.getElementById('sidebar');
  const preview = document.getElementById('preview-area');

  // Update nav buttons
  document.querySelectorAll('.mnav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`mnav-${tab === 'css' ? 'css' : tab === 'preview' ? 'preview' : 'editor'}`).classList.add('active');

  if (tab === 'editor') {
    sidebar.classList.remove('mobile-hidden');
    preview.classList.remove('mobile-visible');
  } else {
    sidebar.classList.add('mobile-hidden');
    preview.classList.add('mobile-visible');
    // Switch inner preview tab
    if (tab === 'css') {
      document.querySelectorAll('.view-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('pane-css').classList.add('active');
    } else {
      document.querySelectorAll('.view-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('pane-preview').classList.add('active');
    }
  }
}

function openMobileSettings() {
  const sheet = document.getElementById('mobile-settings');
  sheet.style.display = 'block';
  requestAnimationFrame(() => sheet.classList.add('open'));
}
function closeMobileSettings() {
  const sheet = document.getElementById('mobile-settings');
  sheet.classList.remove('open');
  setTimeout(() => { sheet.style.display = 'none'; }, 250);
}
function closeMobileSettingsIfBg(e) {
  if (e.target === document.getElementById('mobile-settings')) closeMobileSettings();
}

// ─── VIEW TABS ────────────────────────────────────────────────────────
function switchViewTab(name, btn) {
  document.querySelectorAll('.view-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));
  document.getElementById(`pane-${name}`).classList.add('active');
}

// ─── SECTIONS ─────────────────────────────────────────────────────────
function toggleSection(id) {
  document.getElementById(id).classList.toggle('open');
}

// ─── TOAST ────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ─── TRANSPARENT WARNING ──────────────────────────────────────────────
function showTransparentWarning() {
  const anyOn = state.bgTransparent || state.popoutTransparent || state.modalTransparent;
  const warn = document.getElementById('transparent-bd-warning');
  if (warn) warn.style.display = anyOn ? 'block' : 'none';
}

// ─── CSS IMPORT PARSER ────────────────────────────────────────────────
function handleCssImport(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const css = e.target.result;
    const applied = [];
    const skipped = [];

    function extract(varName) {
      const m = css.match(new RegExp(`--${varName}\\s*:\\s*([^;]+);`));
      return m ? m[1].trim() : null;
    }

    // Color vars
    const colorMap = {
      'main-color': 'mainColor', 'hover-color': 'hoverColor',
      'success-color': 'successColor', 'danger-color': 'dangerColor',
      'online-color': 'onlineColor', 'idle-color': 'idleColor',
      'dnd-color': 'dndColor', 'streaming-color': 'streamingColor',
      'offline-color': 'offlineColor',
    };
    Object.entries(colorMap).forEach(([cssVar, stateKey]) => {
      const v = extract(cssVar);
      if (v && isHexColor(v)) { state[stateKey] = v; applied.push(`--${cssVar}`); }
      else if (v) skipped.push(`--${cssVar} (${v})`);
    });

    // Background image URL
    const bgImg = extract('background-image');
    if (bgImg) {
      const urlMatch = bgImg.match(/url\(['"]?([^'")\s]+)['"]?\)/);
      if (urlMatch) { state.bgUrl = urlMatch[1]; applied.push('--background-image'); }
    }

    // Shading percent
    const pct = extract('background-shading-percent');
    if (pct) { state.bgShadingPct = parseInt(pct); applied.push('--background-shading-percent'); }

    // Background props
    const bgPos = extract('background-position');
    if (bgPos) { state.bgPosition = bgPos; applied.push('--background-position'); }
    const bgSize = extract('background-size');
    if (bgSize) { state.bgSize = bgSize; applied.push('--background-size'); }
    const bgAtt = extract('background-attachment');
    if (bgAtt) { state.bgAttachment = bgAtt; applied.push('--background-attachment'); }

    // Home icon
    const homeImg = extract('home-icon');
    if (homeImg) {
      const urlM = homeImg.match(/url\(['"]?([^'")\s]+)['"]?\)/);
      if (urlM) { state.homeIcon = urlM[1]; applied.push('--home-icon'); }
    }
    const homeSize = extract('home-size');
    if (homeSize) { state.homeSize = homeSize; applied.push('--home-size'); }

    // Fonts
    const mFont = extract('main-font');
    if (mFont) { state.mainFont = mFont; applied.push('--main-font'); }
    const cFont = extract('code-font');
    if (cFont) { state.codeFont = cFont; applied.push('--code-font'); }

    // Channel colors
    const chMap = {
      'channel-normal': 'channelNormal', 'channel-muted': 'channelMuted',
      'channel-hover': 'channelHover', 'channel-selected': 'channelSelected',
      'channel-selected-bg': 'channelSelectedBg',
      'channel-unread': 'channelUnread', 'channel-unread-hover': 'channelUnreadHover',
    };
    Object.entries(chMap).forEach(([cssVar, stateKey]) => {
      const v = extract(cssVar);
      if (v) { state[stateKey] = v; applied.push(`--${cssVar}`); }
    });

    // Detect addons from @import lines
    if (css.includes('windows-titlebar.css')) { state.addonTitlebar = true; document.getElementById('addon-titlebar').checked = true; applied.push('Addon: Titlebar'); }
    if (css.includes('HorizontalServerList.css')) { state.addonHorizontalServers = true; document.getElementById('addon-hsl').checked = true; applied.push('Addon: Horizontal Servers'); }
    if (css.includes('RadialStatus.css')) { state.addonRadialStatus = true; document.getElementById('addon-radial').checked = true; applied.push('Addon: Radial Status'); }
    if (css.includes('Discolored')) { state.addonDiscolored = true; document.getElementById('addon-discolored').checked = true; applied.push('Addon: Discolored'); }
    if (css.includes('ServerColumns.css')) { state.addonServerColumns = true; document.getElementById('addon-servercolumns').checked = true; state.addonHorizontalServers = false; document.getElementById('addon-hsl').checked = false; applied.push('Addon: Server Columns'); }

    // Platform detection
    if (css.includes('vencord.css') && css.includes('betterdiscord.css')) {
      state.platform = 'both';
    } else if (css.includes('vencord.css')) {
      state.platform = 'vencord';
    } else if (css.includes('betterdiscord.css')) {
      state.platform = 'bd';
    }
    document.querySelectorAll('.ptab').forEach(b => b.classList.toggle('active', b.dataset.platform === state.platform));

    // Shading blocks for all 4 themes
    const themeBlocks = [
      { key: 'light', selector: 'theme-light' },
      { key: 'dark', selector: 'theme-dark' },
      { key: 'darker', selector: 'theme-darker' },
      { key: 'midnight', selector: 'theme-midnight' },
    ];
    themeBlocks.forEach(({ key, selector }) => {
      // Extract the block for this theme
      const blockMatch = css.match(new RegExp(`:is\\(\\.${selector}[^{]*\\)\\s*\\{([^}]*)\\}`, 's'));
      if (!blockMatch) return;
      const block = blockMatch[1];
      function extractFromBlock(varName) {
        const m = block.match(new RegExp(`--${varName}\\s*:\\s*([^;]+);`));
        return m ? m[1].trim() : null;
      }
      const shadingVars = [
        ['background-shading','bgShading'],['card-shading','cardShading'],
        ['popout-shading','popoutShading'],['modal-shading','modalShading'],
        ['input-shading','inputShading'],
      ];
      shadingVars.forEach(([cssVar, stateKey]) => {
        const v = extractFromBlock(cssVar);
        if (!v) return;
        const m = v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/);
        if (m) {
          state.shading[key][stateKey] = {
            color: rgbToHex(parseInt(m[1]), parseInt(m[2]), parseInt(m[3])),
            opacity: m[4] !== undefined ? parseFloat(m[4]) : 1,
          };
        }
      });
      const nt = extractFromBlock('normal-text');
      if (nt && isHexColor(nt)) state.shading[key].normalText = nt;
      const mt = extractFromBlock('muted-text');
      if (mt && isHexColor(mt)) state.shading[key].mutedText = mt;
    });

    // Refresh all controls
    Object.entries(colorMap).forEach(([, stateKey]) => {
      if (colorPickers[stateKey]) colorPickers[stateKey].setVal(state[stateKey]);
    });
    document.getElementById('ctrl-bg-url').value = state.bgUrl;
    document.getElementById('ctrl-bg-position').value = state.bgPosition;
    document.getElementById('ctrl-bg-size').value = state.bgSize;
    document.getElementById('ctrl-bg-attachment').value = state.bgAttachment;
    document.getElementById('ctrl-bg-shading-pct').value = state.bgShadingPct;
    document.getElementById('shading-pct-label').textContent = state.bgShadingPct + '%';
    document.getElementById('ctrl-home-icon').value = state.homeIcon;
    document.getElementById('ctrl-home-size').value = state.homeSize;
    document.getElementById('ctrl-main-font').value = state.mainFont;
    document.getElementById('ctrl-code-font').value = state.codeFont;
    Object.entries(chMap).forEach(([, stateKey]) => {
      const id = 'ctrl-' + Object.keys(chMap).find(k => chMap[k] === stateKey).replace(/([A-Z])/g, m => '-' + m.toLowerCase());
      // map stateKey back to input id
    });
    // Easier: just set all channel inputs directly
    document.getElementById('ctrl-channel-normal').value = state.channelNormal;
    document.getElementById('ctrl-channel-muted').value = state.channelMuted;
    document.getElementById('ctrl-channel-hover').value = state.channelHover;
    document.getElementById('ctrl-channel-selected').value = state.channelSelected;
    document.getElementById('ctrl-channel-selected-bg').value = state.channelSelectedBg;
    document.getElementById('ctrl-channel-unread').value = state.channelUnread;
    document.getElementById('ctrl-channel-unread-hover').value = state.channelUnreadHover;
    refreshShadingControls();
    updatePreview();
    updateCssOutput();

    const resultEl = document.getElementById('import-result');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `<strong style="color:var(--ed-success)">✓ Imported ${applied.length} setting${applied.length !== 1 ? 's' : ''}</strong>` +
      (applied.length ? `<br><span style="opacity:0.7">${applied.join(', ')}</span>` : '') +
      (skipped.length ? `<br><span style="color:var(--ed-danger)">Skipped (non-hex): ${skipped.join(', ')}</span>` : '');
  };
  reader.readAsText(file);
}

// ─── INIT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initControls();
  updatePreview();
  updateCssOutput();
  // Refresh shading note on load
  refreshShadingControls();
});
