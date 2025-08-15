let videoIframe;

function setup() {
  // Crear lienzo transparente que flote sobre el fondo
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('position', 'fixed');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('z-index', '-1'); // Debajo del contenido HTML

  // Crear el iframe del video SOLO una vez
  videoIframe = createElement('iframe');
  videoIframe.attribute(
    'src',
    'https://www.tiktok.com/embed/7511062640240626952'
  );
  videoIframe.attribute('frameborder', '0');
  videoIframe.attribute('allowfullscreen', '');
  videoIframe.style('z-index', '1'); // Encima del fondo
  videoIframe.style('border', 'none');

  // Posicionarlo inicialmente
  positionVideo();
}

function draw() {
  clear(); // Hacer el lienzo transparente
  fill(255, 0, 0, 150); // Rojo semi-transparente
  noStroke();
  ellipse(mouseX, mouseY, 50, 50); // Seguir el ratón
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positionVideo(); // Reposicionar video en cambio de tamaño
}

function positionVideo() {
  let iframeWidth = min(640, windowWidth * 0.8);
  let iframeHeight = (iframeWidth * 9) / 16; // Relación 16:9
  let iframeX = (windowWidth - iframeWidth) / 2;
  let iframeY = windowHeight / 4;

  videoIframe.position(iframeX, iframeY);
  videoIframe.size(iframeWidth, iframeHeight);
}
