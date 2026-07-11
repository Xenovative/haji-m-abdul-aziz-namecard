const floatingContactWidgetElement = document.querySelector('.floating-contact-widget');
const floatingContactToggleElement = document.getElementById('floatingContactToggle');

if (floatingContactWidgetElement && floatingContactToggleElement) {
  const setFloatingContactOpenState = (shouldOpen) => {
    floatingContactWidgetElement.classList.toggle('is-open', shouldOpen);
    floatingContactToggleElement.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  };

  floatingContactToggleElement.addEventListener('click', () => {
    const isCurrentlyOpen = floatingContactWidgetElement.classList.contains('is-open');
    setFloatingContactOpenState(!isCurrentlyOpen);
  });

  document.addEventListener('click', (clickEvent) => {
    if (!floatingContactWidgetElement.contains(clickEvent.target)) {
      setFloatingContactOpenState(false);
    }
  });

  document.addEventListener('keydown', (keyboardEvent) => {
    if (keyboardEvent.key === 'Escape') {
      setFloatingContactOpenState(false);
    }
  });
}
