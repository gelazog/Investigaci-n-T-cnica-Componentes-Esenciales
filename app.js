console.log('app.js cargado ✅');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('SW registrado ✅'))
    .catch(err => console.error('Error al registrar SW:', err));
}