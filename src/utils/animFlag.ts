export function getAnimEnabled(): boolean {
    if (typeof document === 'undefined') return true;
    const saved = localStorage.getItem('anim');
    return saved ? saved === 'on' : true;
  }
  
export function setAnimEnabled(enabled: boolean) {
    if (typeof document === 'undefined') return;
    const v = enabled ? 'on' : 'off';
    document.documentElement.setAttribute('data-anim', v);
    localStorage.setItem('anim', v);
    window.dispatchEvent(new CustomEvent('anim-change', { detail: { enabled } }));
}
  
export function initAnimFlagOnce() {
    if (typeof document === 'undefined') return;
    const attr = document.documentElement.getAttribute('data-anim');
    if (!attr) setAnimEnabled(getAnimEnabled());
}