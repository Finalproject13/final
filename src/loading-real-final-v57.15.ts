import moonLogo from './assets/moon-logo.svg';

const STYLE_ID = 'tirta-loading-real-final-v57-15';

if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
/* =========================================================
   PROJECT BY TIRTA — REAL LOADING FINAL V57.15
   Login: 88px | Refresh/App: 54px
   No card | No gold vertical line | True center
   ========================================================= */

html:has(.app-loading-screen),
body:has(.app-loading-screen),
#root:has(.app-loading-screen),
html:has(.employee-loading-screen),
body:has(.employee-loading-screen),
#root:has(.employee-loading-screen),
html:has(.login-wrap .loading),
body:has(.login-wrap .loading),
#root:has(.login-wrap .loading) {
  background: #030710 !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  background-image: none !important;
}

/* ===== FULL SCREEN SURFACES ===== */
.app-loading-screen,
.employee-loading-screen,
.login-wrap:has(.loading) {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  overflow: hidden !important;
  background: #030710 !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
}

/* ===== REMOVE CARD ===== */
.app-loading-card,
.employee-loading-card,
.login-wrap:has(.loading) .login-card {
  position: static !important;
  display: contents !important;
  width: auto !important;
  height: auto !important;
  min-width: 0 !important;
  min-height: 0 !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

/* ===== REMOVE EVERY LOADING BORDER / GOLD LINE ===== */
.app-loading-screen *,
.employee-loading-screen *,
.login-wrap:has(.loading) * {
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  outline: 0 !important;
}

/* ===== LOGIN LOADING: 88px ===== */
.login-wrap:has(.loading) .login-loading-logo,
.login-wrap:has(.loading) .loading::before {
  position: fixed !important;
  left: 50% !important;
  top: 50% !important;
  right: auto !important;
  bottom: auto !important;
  width: 88px !important;
  height: 88px !important;
  min-width: 88px !important;
  min-height: 88px !important;
  max-width: 88px !important;
  max-height: 88px !important;
  margin: 0 !important;
  padding: 0 !important;
  transform: translate(-50%, -50%) !important;
  background: transparent !important;
  background-image: url("${moonLogo}") !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  filter: drop-shadow(0 0 14px rgba(214,174,88,.34)) !important;
  display: block !important;
  animation: tirta-login-logo-v5715 1.7s ease-in-out infinite !important;
}

.login-wrap:has(.loading) .loading {
  position: static !important;
  width: 0 !important;
  height: 0 !important;
  min-width: 0 !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  color: transparent !important;
  font-size: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

.login-wrap:has(.loading) .loading::before {
  content: "" !important;
  display: block !important;
}

/* ===== REFRESH / INITIAL APP: 54px ===== */
.app-loading-screen .app-loading-logo,
.app-loading-screen .app-loading-logo-only,
.employee-loading-screen .employee-loading-logo img,
.employee-loading-screen .employee-loading-logo-only {
  position: fixed !important;
  left: 50% !important;
  top: 50% !important;
  right: auto !important;
  bottom: auto !important;
  width: 54px !important;
  height: 54px !important;
  min-width: 54px !important;
  min-height: 54px !important;
  max-width: 54px !important;
  max-height: 54px !important;
  margin: 0 !important;
  padding: 0 !important;
  transform: translate(-50%, -50%) !important;
  display: block !important;
  object-fit: contain !important;
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: drop-shadow(0 0 10px rgba(214,174,88,.30)) !important;
  animation: tirta-refresh-logo-v5715 1.6s ease-in-out infinite !important;
}

/* Hide old decorative elements on full-screen loaders */
.app-loading-copy,
.employee-loading-copy,
.app-loading-indicator,
.employee-loading-bar,
.employee-loading-skeletons,
.app-loading-screen .app-loading-brand,
.employee-loading-screen .employee-loading-logo {
  display: contents !important;
}

.app-loading-screen .app-loading-brand::before,
.employee-loading-screen .employee-loading-logo::before {
  display: none !important;
  content: none !important;
}

@keyframes tirta-login-logo-v5715 {
  0%, 100% { scale: .96; opacity: .76; }
  50% { scale: 1.04; opacity: 1; }
}

@keyframes tirta-refresh-logo-v5715 {
  0%, 100% { scale: .94; opacity: .72; }
  50% { scale: 1.06; opacity: 1; }
}
`;
  document.head.appendChild(style);
}
