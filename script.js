
const viewer = document.getElementById('bridgeViewer');
const loader = document.getElementById('loader');

viewer.addEventListener('load', () => {
  loader.style.display = 'none';
});

function setCamera(x, y, z) {
  viewer.cameraTarget = `${x}m ${y}m ${z}m`;
  viewer.cameraOrbit = `0deg 75deg 2.5m`;
}
