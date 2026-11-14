const startButton = document.querySelector('#startButton');
const intro = document.querySelector('#intro');
const errorBox = document.querySelector('#error');
const sceneEl = document.querySelector('#arScene');

startButton.addEventListener('click', async () => {
  errorBox.textContent = '';
  startButton.disabled = true;
  startButton.textContent = 'A iniciar a câmara…';
  try {
    const arSystem = sceneEl.systems['mindar-image-system'];
    await arSystem.start();
    intro.style.display = 'none';
  } catch (error) {
    console.error(error);
    errorBox.textContent = 'Não foi possível iniciar a câmara. Confirme a autorização do navegador, utilize HTTPS e tente novamente.';
    startButton.disabled = false;
    startButton.textContent = 'Tentar novamente';
  }
});
