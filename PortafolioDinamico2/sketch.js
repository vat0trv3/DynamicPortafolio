// =========================================================================
// CV-DATA: El contenido final y detallado de tu CV.
// Nota: Se han agregado y corregido las propiedades que faltaban.
// =========================================================================

const cvData = {
  header: {
    name: "Vato Trave",
    title: "Compositor Musical / Artista Audiovisual Generativo",
    contact: {
      location: "Puruándiro, Michoacán, México",
      email: "lacasonamichoacana5@gmail.com",
      socialLinks: [
        { platform: "Portafolio Visual (Instagram)", url: "https://www.instagram.com/vat0trave", user: "@vat0trave" },
        { platform: "Música & Sound Design (TikTok)", url: "https://www.tiktok.com/@vatotrave", user: "@vatotrave" }
      ]
    }
  },
  profile: {
    title: "PERFIL PROFESIONAL",
    text: "Artista audiovisual y diseñador sonoro, creador de experiencias inmersivas donde el sonido es protagonista. Mi proceso fusiona la producción Audio Visual con  Reaper, Bandlab, Touch Designer, Gimp 2.0, IbisPant y recientemente (técnicas de Creative Coding apoyadp con IA) para optimizar la programación y explorar estéticas únicas. Como autodidacta, busco colaborar en proyectos que desafíen la frontera entre arte y tecnología. "
  },
  specialization: {
    title: "Áreas de Especialización",
    areas: [
      { name: "Diseño Sonoro Inmersivo y Composición Musical", desc: "Creación de paisajes sonoros y piezas musicales que definen la atmósfera y emoción de un proyecto." },
      { name: "Producción Audiovisual Integral", desc: "Dirección del ciclo completo de un proyecto, desde la conceptualización y grabación hasta la postproducción y etalonaje." },
      { name: "Arte Generativo & Creative Coding", desc: "Desarrollo de visuales dinámicos y sistemas interactivos utilizando Python, p5.js y Processing." },
      { name: "Prompt Engineering & Flujos de Trabajo con IA", desc: "Diseño de instrucciones precisas para generar y refinar contenido visual y conceptual mediante modelos de IA." },
      { name: "Cinematografía y Edición de Video ", desc: "Captura  y edición enfocada en el ritmo, el color y la narrativa visual." }
    ]
  },
  toolbox: {
    title: "CAJA DE HERRAMIENTAS TECNOLÓGICAS (TOOLBOX)",
    categories: {
      "DAW & Audio": ["Reaper (Producción, mezcla, sincronización y mastering), Síntesis y diseño sonoro experimental y Produccion de visuales sincronizados a la musica o instrumentos especificos."],
      "Visuales Generativos": ["TouchDesigner (Visuales generativos en tiempo real)", "Inshot (Etalonaje y Edicion Agil para redes sociales )", "Gimp2.0 (Edición ágil para animacion 2D y arte base de proyectos)."],
      "Creative Coding": ["Processing", "Python ", "p5.js", " Habilidad para encontrar el lenguaje preciso para que una IA (Gemini) comprenda el objetivo. Se traduce en un diálogo efectivo para con-crear código funcional, generar ideas y resolver problemas complejos."],
      "Hardware de Captura": ["Dron DJI (Cinematografía aérea)", "DJI Osmo Pocket 3 (Video 4K estabilizado, slow-motion, hyperlapse)."]
    }
  },
  experience: {
    title: "EXPERIENCIA Y PROYECTOS DESTACADOS",
    projects: [
      { name: "Dirección Creativa y Desarrollo de Marca | Proyecto 'VATOTRAVE/by.vatt'", points: [".", "Evolución estratégica del proyecto desde un enfoque puramente musical hacia una propuesta audiovisual integral que incorpora arte generativo y tecnología."] },
      { name: "Producción Musical y Diseño Sonoro Experimental", points: ["Composición, producción, mezcla y masterización de un portafolio con más de 20 tracks originales.", "Exploración de técnicas de síntesis, grabación y diseño sonoro para crear texturas y ambientes únicos."] },
      { name: "Investigación y Desarrollo en Colaboración con IA ", points: ["Desarrollo proactivo de competencias en Creative Coding a través de la colaboración con un asistente de IA.", "Creación de prototipos funcionales en Python, como traductores de texto a código Morse y generadores de señales de audio (WAV/MIDI), optimizando flujos de trabajo y acelerando el aprendizaje de nuevas tecnologías."] },
      { name: "Producción Audiovisual Comercial Restaurante La Casona Michoacana", points: ["Desarrollo de contenido audiovisual estratégico para campañas de marketing digital en redes sociales.", "Responsable de la grabación, edición y postproducción de video enfocado en la promoción de marca y la captación de clientes."] },
      { name: "Dirección de Arte Audiovisual y Motion Graphics", points: ["Diseño y ejecución de piezas audiovisuales con un alto enfoque en la sincronía rítmica entre música y visuales.", "Implementación de técnicas de etalonaje (color grading) y creación de motion graphics generativos para fortalecer la identidad visual de los proyectos."] }
    ]
  },
  thinkBig: {
    title: "VISIÓN A FUTURO (THINKBIG)",
    projectTitle: "El Traductor Sensorial", // <-- ¡Corregido! Ahora esta propiedad existe
    concepto: { title: "Concepto", text: "En un mundo dominado por la vista, donde la información se consume mayoritariamente a través de lo visual, nos hemos propuesto explorar un territorio menos transitado: la percepción sensorial más allá de lo evidente." },
    propuesta: { title: "El Traductor Sensorial surge como una propuesta innovadora para repensar la transmisión del conocimiento. No se trata solo de traducir símbolos, sino de transformar cada punto táctil en una experiencia sonora, cada letra en un paisaje sensorial que puede sentirse, habitarse y comprenderse ." },
    pruebas: { title: "", items: [{ name: "", desc: "¿Y si pudiéramos aprender y percibir la información de una forma completamente nueva? Mi proyecto de innovación, el Traductor Sensorial, busca crear un puente entre los datos y la percepción auditiva. La idea central es transformar sistemas abstractos, como el Braille, en una esfera de sonido 8D, donde cada punto de información se traduce en un estímulo sonoro espacial único, permitiendo al usuario sentir la estructura de los datos a través del oído" }, ] },
    impacto: { title: "", items: [{ name: "", desc: "Impacto y Beneficios Potenciales Evolución en Diagnóstico Médico: Ofrecer a los profesionales de la salud una herramienta que complemente los datos visuales, permitiéndoles detectar patrones y anomalías a través del oído.Terapias de Biofeedback Sonoro Crear sistemas de terapia personalizados donde un paciente pueda modular activamente su estado fisiológico al interactuar con la música que su propio cuerpo genera.Existen vacíos por cubrir, nuevas estructuras sensoriales por diseñar y otros lenguajes aún no explorados —desde la complejidad del código genético hasta las dinámicas de las emociones humanasque requieren ser interpretados y sistematizados para conformar una nueva orquesta de comunicación." },] },
    conclusion: "Este es el horizonte hacia el que se dirige mi trabajo: la intersección definitiva entre el arte, el código y la salud, buscando crear tecnología que no solo informa, sino que también resuena con nuestra humanidad."
  }
};

const cvDataEN = {
  header: {
    name: "Vato Trave",
    title: "Musical Composer / Generative Audiovisual Artist",
    contact: {
      location: "Puruándiro, Michoacán, Mexico",
      email: "lacasonamichoacana5@gmail.com",
      socialLinks: [
        { platform: "Visual Portfolio (Instagram)", url: "https://www.instagram.com/vat0trave", user: "@vat0trave" },
        { platform: "Music & Sound Design (TikTok)", url: "https://www.tiktok.com/@vatotrave", user: "@vatotrave" }
      ]
    }
  },
  profile: {
    title: "PROFESSIONAL PROFILE",
    text: "Audiovisual artist and sound designer, creator of immersive experiences where sound is the main protagonist. My process fuses Audiovisual production with Reaper, Bandlab, TouchDesigner, GIMP 2.0, IbisPaint, and recently (Creative Coding techniques supported by AI) to optimize programming and explore unique aesthetics. As a self-taught professional, I seek to collaborate on projects that challenge the boundary between art and technology."
  },
  specialization: {
    title: "Areas of Specialization",
    areas: [
      { name: "Immersive Sound Design & Musical Composition", desc: "Creation of soundscapes and musical pieces that define the atmosphere and emotion of a project." },
      { name: "Comprehensive Audiovisual Production", desc: "Direction of a project's full cycle, from conceptualization and recording to post-production and color grading." },
      { name: "Generative Art & Creative Coding", desc: "Development of dynamic visuals and interactive systems using Python, p5.js, and Processing." },
      { name: "Prompt Engineering & AI Workflows", desc: "Design of precise instructions to generate and refine visual and conceptual content using AI models." },
      { name: "Cinematography and Video Editing", desc: "Capture and editing focused on rhythm, color, and visual narrative." }
    ]
  },
  toolbox: {
    title: "TECHNOLOGICAL TOOLBOX",
    categories: {
      "DAW & Audio": ["Reaper (Production, mixing, synchronization, and mastering), Experimental synthesis and sound design, and Production of visuals synchronized to music or specific instruments."],
      "Generative Visuals": ["TouchDesigner (real-time generative visuals)", "Inshot (Agile color grading and editing for social media)", "GIMP 2.0 (Agile editing for 2D animation and base art for projects)."],
      "Creative Coding": ["Processing", "Python", "p5.js", "Ability to find the precise language for an AI (Gemini) to understand the objective. This translates into an effective dialogue to co-create functional code, generate ideas, and solve complex problems."],
      "Capture Hardware": ["DJI Drone (Aerial cinematography)", "DJI Osmo Pocket 3 (Stabilized 4K video, slow-motion, hyperlapse)."]
    }
  },
  experience: {
    title: "EXPERIENCE AND FEATURED PROJECTS",
    projects: [
      { name: "Creative Direction & Brand Development | 'VATOTRAVE/by.vatt' Project", points: [".", "Strategic evolution of the project from a purely musical focus to a comprehensive audiovisual proposal that incorporates generative art and technology."] },
      { name: "Musical Production and Experimental Sound Design", points: ["Composition, production, mixing, and mastering of a portfolio with more than 20 original tracks.", "Exploration of synthesis, recording, and sound design techniques to create unique textures and atmospheres."] },
      { name: "Research and Development in Collaboration with AI", points: ["Proactive development of Creative Coding skills through collaboration with an AI assistant.", "Creation of functional prototypes in Python, such as text-to-Morse code translators and audio signal generators (WAV/MIDI), optimizing workflows and accelerating the learning of new technologies."] },
      { name: "Commercial Audiovisual Production 'La Casona Michoacana' Restaurant", points: ["Development of strategic audiovisual content for digital marketing campaigns on social media.", "Responsible for recording, editing, and video post-production focused on brand promotion and customer acquisition."] },
      { name: "Audiovisual Art Direction and Motion Graphics", points: ["Design and execution of audiovisual pieces with a strong focus on rhythmic synchronization between music and visuals.", "Implementation of color grading techniques and creation of generative motion graphics to strengthen the visual identity of projects."] }
    ]
  },
  thinkBig: {
    title: "VISION FOR THE FUTURE (THINKBIG)",
    projectTitle: "The Sensory Translator", // <-- ¡Corregido! Ahora esta propiedad existe
    concepto: { title: "Concept", text: "In a world dominated by sight, where information is consumed mostly through visuals, we have set out to explore a less-traveled territory: sensory perception beyond the obvious." },
    propuesta: { title: "The Sensory Translator emerges as an innovative proposal to rethink the transmission of knowledge. It is not just about translating symbols, but about transforming each tactile point into a sonic experience, each letter into a sensory landscape that can be felt, inhabited, and understood." },
    pruebas: { title: "", items: [{ name: "", desc: "What if we could learn and perceive information in a completely new way? My innovation project, the Sensory Translator, seeks to create a bridge between data and auditory perception. The central idea is to transform abstract systems, like Braille, into an 8D sound sphere, where each point of information is translated into a unique spatial sonic stimulus, allowing the user to feel the data's structure through sound." },] },
    impacto: { title: "", items: [{ name: "", desc: "Impact and Potential Benefits: Evolution in Medical Diagnostics: Offering healthcare professionals a tool that complements visual data, allowing them to detect patterns and anomalies through sound. Sonic Biofeedback Therapies: Creating personalized therapy systems where a patient can actively modulate their physiological state by interacting with the music their own body generates. There are gaps to fill, new sensory structures to design, and other unexplored languages—from the complexity of genetic code to the dynamics of human emotions—that need to be interpreted and systematized to form a new orchestra of communication." },] },
    conclusion: "This is the horizon toward which my work is directed: the definitive intersection between art, code, and health, seeking to create technology that not only informs but also resonates with our humanity."
  }
};

// =========================================================================
// VARIABLES GLOBALES
// =========================================================================

let vatoImage; // Variable para la imagen de perfil
let demoSound, fft; // Variables para el sonido y el análisis de frecuencia
let particles = []; // Array para almacenar las partículas
let interactiveElements = []; // Array para los elementos interactivos
let backgroundImage; // Variable para la imagen de fondo
let isPaused = false; // Estado de pausa
let scrollY = 0; // Posición actual del scroll
let totalContentHeight = 5000; // Altura total del contenido a desplazar
let touchStartY = 0; // Posición inicial del toque en Y
let scrollY_atTouchStart = 0; // Posición del scroll al inicio del toque
let isInitialState = true; // Estado inicial del programa, solo muestra la foto
let initialProfileSize = 1; // Tamaño inicial para el efecto de fade-in
const numParticles = 693; // Número total de partículas
let connections = []; // Variable para almacenar las conexiones precalculadas
let currentLang = "es";
let btnTranslate; // Variable del botón de traducción

// =========================================================================
// CLASE PARTÍCULA
// =========================================================================

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y); // Posición inicial de la partícula
    this.vel = p5.Vector.random3D().mult(random(0.5, 3.5)); // Velocidad y dirección aleatorias
    this.lifespan = 6000; // Tiempo de vida de la partícula
    this.size = random(0.01, 3.6); // Tamaño aleatorio
    this.gray = random(80, 250); // Color base de la partícula

    // Clasifica la partícula en una familia y asigna el color de línea según su posición horizontal
    let screenThird = width / 3;
    if (x < screenThird) { // Si la partícula está en el tercio izquierdo
      this.family = 'left';
      this.lineColor = color(0, 180, 0); // El color de la línea será verde
    } else if (x > screenThird * 2) { // Si la partícula está en el tercio derecho
      this.family = 'right';
      this.lineColor = color(180, 0, 0); // El color de la línea será rojo
    } else { // Cualquier otra posición, que corresponde al tercio central
      this.family = 'center';
      this.lineColor = color(255, 255, 255); // El color de la línea será blanco
    }
  }

  update() {
    this.pos.add(this.vel); // Mueve la partícula
    this.lifespan = 6; // Reduce el tiempo de vida

    // Rebotar en los bordes
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  show(audioLevel = 0) {
    noStroke(); // No dibuja contorno
    let sizeMultiplier; // Declara la variable aquí

    // Comprueba si la partícula es del centro y ajusta su tamaño
    if (this.family === 'center') {
      // Rango más pequeño para las partículas blancas (del 1 al 8)
      sizeMultiplier = map(audioLevel, 0, 300, 0, 0.5, true);
    } else {
      // Rango normal para las partículas rojas y verdes (del 0.5 al 8)
      sizeMultiplier = map(audioLevel, 0, 300, 0, 0.5, true);
    }

    // Mapeamos el nivel de audio a un brillo para que las partículas pulsen
    let alpha = map(audioLevel, 0, 50, 50, this.gray, 50);
    fill(alpha, 50); // Color de relleno con transparencia
    ellipse(this.pos.x, this.pos.y, this.size * sizeMultiplier);
  }

  isDead() {
    return this.lifespan < 0; // Verifica si la partícula ha muerto
  }
}

// =========================================================================
// FUNCIONES ESENCIALES DE P5.JS
// =========================================================================

function preload() {
  vatoImage = loadImage('yo.png'); // Carga la imagen de perfil
  soundFormats('mp3'); // Define el formato de sonido
  demoSound = loadSound('Enprocesso3.mp3'); // Carga el archivo de sonido
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea el canvas
  fft = new p5.FFT(0.1, 64); // Inicializa el analizador de frecuencia
  demoSound.setVolume(0.5); // Ajusta el volumen del sonido
  spawnParticles(numParticles); // Genera las partículas iniciales (350)
  imageMode(CENTER); // Dibuja las imágenes desde su centro
  rectMode(CENTER); // Dibuja los rectángulos desde su centro
  textFont("Helvetica");

  // 🎯 El botón ahora se crea y se asigna a la variable btnTranslate
  btnTranslate = createButton('EN / ES');
  btnTranslate.position(20, 20);
  btnTranslate.mousePressed(() => {
    currentLang = (currentLang === "es") ? "en" : "es";
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ajusta el tamaño del canvas al cambiar la ventana
}

function draw() {
  // 🎯 Esta variable se actualiza constantemente
  let data = (currentLang === "es") ? cvData : cvDataEN;

  background(0);
  if (isInitialState) {
    let targetSize = width * 0.9;
    initialProfileSize = lerp(initialProfileSize, targetSize, 0.09);
    image(vatoImage, width / 2, height / 2, initialProfileSize, initialProfileSize);
    return;
  }

  // ESTADO NORMAL
  background(0, alpha); // Cargas la imagen de fondo aquí
  let audioLevel = 50;
  if (demoSound.isPlaying()) {
    fft.analyze();
    audioLevel = fft.getEnergy("bass");
  }

  // Actualiza las conexiones solo cada 30 cuadros para optimizar el rendimiento
  if (frameCount % 30 === 0) {
    updateConnections();
  }

  // Dibuja las conexiones almacenadas
  
  for (let c of connections) {

    if (c.type === 'line') {

      let d = dist(c.p1.pos.x, c.p1.pos.y, c.p2.pos.x, c.p2.pos.y);

      let lineAlpha = map(d, 180, 20, 200, 2,true);

      stroke(c.p1.lineColor.levels[0], c.p1.lineColor.levels[1], c.p1.lineColor.levels[2], lineAlpha);

      strokeWeight(map(d, 0, 200, 2, 1,true));

      line(c.p1.pos.x, c.p1.pos.y, c.p2.pos.x, c.p2.pos.y);

    } else if (c.type === 'blobtrack') {

      let d = dist(c.p1.pos.x, c.p1.pos.y, c.p2.pos.x, c.p2.pos.y);

      let shapeSize = map(d, 0, 100, 20, 1);

      let shapeX = (c.p1.pos.x + c.p2.pos.x) / 2;

      let shapeY = (c.p1.pos.y + c.p2.pos.y) / 2;

      let a = map(c.audioLevel, 100, 150, 50, 200, true);

      fill(c.p1.lineColor.levels[0], c.p1.lineColor.levels[1], c.p1.lineColor.levels[2], a);

      noStroke();

      if (random(1) > .5) {

        rect(shapeX, shapeY, shapeSize, shapeSize);

      } else {

        rect(shapeX, shapeY, shapeSize, shapeSize / 15);

      }

    }

  }


  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show(audioLevel);
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }

  if (particles.length < numParticles) {
    spawnParticles(0.5);
  }

  push();
  translate(0, -scrollY);
  interactiveElements = [];
  drawCV();
  pop();

  drawPauseButton();
  handleHover();
}

// =========================================================================
// FUNCIONES DE DIBUJO Y MANEJO DE EVENTOS
// =========================================================================

function updateConnections() {
  connections = []; // Limpiamos la lista anterior
  let audioLevel = fft.getEnergy("bass"); // Obtenemos el nivel de audio
  let chance = map(audioLevel, 0, 150, 0, 0.05, true);

  for (let i = 0; i < particles.length; i++) {
    let p1 = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j];
      let d = dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);

      // Conexión de líneas por familia
      if (d < 50 && p1.family === p2.family) {
        connections.push({ type: 'line', p1, p2 });
      }

      // Conexión de "blobtrack"
      if (d < 100 && random(1) < chance) {
        connections.push({ type: 'blobtrack', p1, p2, audioLevel });
      }
    }
  }
}

function drawNextPageButton() {
  // Posición y tamaño del botón
  let buttonX = width - 100; // 150px desde el borde derecho
  let buttonY = height - 50; // 50px desde el borde inferior
  let buttonW = 120;
  let buttonH = 40;

  // URL a la que te llevará el botón
  let page3Url = 'https://editor.p5js.org/vat0trv3/full/Cyqi1R8BF'; // 🎯 Reemplaza esta URL con tu página 3

  // Dibuja el botón (un rectángulo con un texto)
  noStroke();
  fill(255, 50); // Color del fondo del botón
  rect(buttonX, buttonY, buttonW, buttonH, 5); // rect(x, y, ancho, alto, radio de la esquina)

  // Dibuja el texto
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("VER DEMOS", buttonX, buttonY);

  // 🎯 Crea el área de clic
  addInteractiveElement(buttonX - buttonW / 2, buttonY - buttonH / 2, buttonW, buttonH, 'link', page3Url);
}

function drawCV() {
  // Ancho del bloque de texto principal para centrarlo
  let contentWidth = width * 0.9;
  // Posición X para el texto centrado
  let centerX = width / 2;
  let currentY = 120;
  drawNextPageButton();

  currentY = drawHeader(currentY, centerX, contentWidth);
  currentY = drawProfile(currentY, centerX, contentWidth);
  currentY = drawSpecialization(currentY, centerX, contentWidth);
  currentY = drawToolbox(currentY, centerX, contentWidth);
  currentY = drawExperience(currentY, centerX, contentWidth);
  currentY = drawThinkBig(currentY, centerX, contentWidth);

  // NUEVO: Asignamos la altura final de todo el contenido a totalContentHeight
  totalContentHeight = currentY;
}

function drawHeader(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (255);

  // Imagen de perfil centrada
  let imageSize = width * 0.4;
  let imageX = centerX;
  let imageY = y + imageSize / 2;

  tint(255, alpha);
  image(vatoImage, imageX, imageY, imageSize, imageSize);
  noTint();
  y = imageY + imageSize / 2 + 50 * 1.30; // Ajustar Y después de la imagen

  textAlign(CENTER, TOP);
  fill(255, alpha);
  textSize(width * 0.09 * 1.40); // Aumenta 30% el tamaño del texto
  textStyle(BOLD);
  text(data.header.name, centerX, y, w);
  y += width * 0.09 * 1.30;

  textSize(width * 0.02 * 1.30); // Aumenta 30% el tamaño del texto
  textStyle(NORMAL);
  text(data.header.title, centerX, y, w);
  y += 82 * 1.30;

  textSize(width * 0.02 * 1.30); // Aumenta 30% el tamaño del texto
  // Centrar el texto de contacto
  textAlign(CENTER, TOP);
  fill(255, alpha);
  text(data.header.contact.location, centerX, y, w);
  y += 33 * 1.30;
  text(data.header.contact.email, centerX, y, w);
  y += 55 * 1.30;

  // Centrar los enlaces sociales
  for (let link of data.header.contact.socialLinks) {
    let linkText = `${link.platform}: ${link.user} ↗`;
    text(linkText, centerX, y, w);
    addInteractiveElement(centerX - textWidth(linkText) / 2, y - 10, textWidth(linkText), 20, 'link', link.url);
    y += 30 * 1.30;
  }
  y += 80 * 1.30;
  return y;
}

function drawProfile(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (255);

  textAlign(CENTER, TOP);
  fill(255, alpha);
  textSize(width * 0.035 * 1.30); // Aumenta 30% el tamaño del texto
  textStyle(BOLD);
  text(data.profile.title, centerX, y, w);
  y += 50 * 1.30;

  fill(255, alpha);
  textSize(width * 0.025 * 1.30); // Aumenta 30% el tamaño del texto
  textStyle(NORMAL);
  text(data.profile.text, centerX, y, w);
  y += textHeight(data.profile.text, w) + 200 * 1.30;
  return y;
}

function drawSpecialization(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (255);

  textAlign(CENTER, TOP);
  fill(255, alpha);
  textSize(width * 0.035 * 1.30); // Aumenta 30% el tamaño del texto
  textStyle(BOLD);
  text(data.specialization.title, centerX, y, w);
  y += 55 * 1.30;

  for (let area of data.specialization.areas) {
    fill(255, alpha);
    textSize(width * 0.02 * 1.30); // Aumenta 30% el tamaño del texto
    textStyle(BOLD);
    text(area.name, centerX, y, w);
    addInteractiveElement(centerX - w / 2, y - 5, w, 45, 'skill');
    y += 52 * 1.30;

    fill(255, alpha);
    textSize(width * 0.02 * 1.30); // Aumenta 30% el tamaño del texto
    textStyle(NORMAL);
    text(area.desc, centerX, y, w);
    y += textHeight(area.desc, w) + 60 * 1.30;
  }
  y += 72 * 1.30;
  return y;
}

function drawToolbox(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (255);

  textAlign(CENTER, TOP);
  fill(255, alpha);
  textSize(width * 0.03 * 1.30);
  textStyle(BOLD);
  text(data.toolbox.title, centerX, y, w);
  y += 111 * 1.30; // 🎯 Aumentamos el espacio después del título

  for (const category in data.toolbox.categories) {
    fill(255);
    textSize(width * 0.02 * 1.30);
    textStyle(BOLD);
    text(category, centerX, y, w);
    y += 44 * 1.30; // 🎯 Espacio después de la categoría

    fill(245);
    textSize(width * 0.02 * 1.30);
    textStyle(NORMAL);
    for (const tool of data.toolbox.categories[category]) {
      text(`• ${tool}`, centerX, y, w);
      addInteractiveElement(centerX - w / 2, y - 3, w, 25, 'skill');
      y += 76 * true;
    }
    y += 72 * 1.30;
  }
  y += 96 * 1.30;
  return y;
}

function drawExperience(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (245);

  textAlign(CENTER, TOP);
  fill(245);
  textSize(width * 0.035 * 1.33); // Aumenta 30% el tamaño del texto
  textStyle(BOLD);
  text(data.experience.title, centerX, y, w);
  y += 91 * 1.80;

  for (let project of data.experience.projects) {
    fill(255);
    textSize(width * 0.02 * 1.33); // Aumenta 30% el tamaño del texto
    textStyle(BOLD);
    text(project.name, centerX, y, w);
    y += 51 * 1.50;

    fill(255);
    textSize(width * 0.02 * 1.40); // Aumenta 30% el tamaño del texto
    textStyle(NORMAL);
    for (let point of project.points) {
      text(`• ${point}`, centerX, y, w);
      y += textHeight(`• ${point}`, w) + 30 * 1.40;
    }
    y += 41 * 1.40;
  }
  y += 101 * 1.40;
  return y;
}

function drawThinkBig(y, centerX, w) {
  let data = (currentLang === "es") ? cvData : cvDataEN;
  let alpha = (255);

  textAlign(CENTER, TOP);
  fill(255);
  textSize(width * 0.035 * true); // Título principal
  textStyle(BOLD);
  text(data.thinkBig.title, centerX, y, w);
  y += 51 * 1.40;

  // 🎯 Solución al error: Ahora la variable existe en los objetos de datos
  textSize(width * 0.03 * true); // Ajuste: Nuevo tamaño para el título del proyecto
  text(data.thinkBig.projectTitle, centerX, y, w);
  y += 41 * 1.40; // Ajuste: Espacio más adecuado después del título del proyecto

  const sections = [data.thinkBig.concepto, data.thinkBig.propuesta, data.thinkBig.pruebas, data.thinkBig.impacto];
  for (let section of sections) {
    textAlign(CENTER, TOP);
    fill(255, alpha);
    textSize(width * 0.02 * 1.30); // Tamaño del texto de subtítulos
    textStyle(BOLD);
    text(section.title, centerX, y, w); // Esto dibuja 'concepto', 'propuesta', etc.
    y += 41 * true; // Ajuste: Espacio reducido para conectar el subtítulo con el texto

    fill(255, alpha);
    textSize(width * 0.02 * 1.33); // Tamaño del texto de los párrafos y listas
    textStyle(NORMAL);
    if (section.text) {
      text(section.text, centerX, y, w);
      y += textHeight(section.text, w) + 40 * true;
    }
    if (section.items) {
      for (let item of section.items) {
        if (typeof item === 'string') {
          text(`• ${item}`, centerX, y, w);
          y += textHeight(`• ${item}`, w) + 25 * true;
        } else {
          textStyle(BOLD);
          text(item.name, centerX, y, w);
          y += textHeight(item.name, w) + 20 * 1.40;
          textStyle(NORMAL);
          text(item.desc, centerX, y, w);
          y += textHeight(item.desc, w) + 40 * true;
        }
      }
    }
    y += 51 * 1.40; // Espacio entre cada subsección
  }

  textAlign(CENTER, TOP);
  fill(255, alpha);
  textSize(width * 0.02 * 1.30);
  textStyle(ITALIC);
  text(data.thinkBig.conclusion, centerX, y, w);
  y += textHeight(data.thinkBig.conclusion, w) + 100 * 1.30;

  return y;
}

function mousePressed() {
  if (isInitialState) {
    let profileRadius = initialProfileSize / 2;
    let distance = dist(mouseX, mouseY, width / 2, height / 2);
    if (distance < profileRadius) {
      isInitialState = false;
      if (!demoSound.isPlaying()) demoSound.loop();
    }
  } else {
    handleInteraction(mouseX, mouseY);
  }
  return false;
}

function touchStarted() {
  if (isInitialState) {
    let profileRadius = initialProfileSize / 2;
    let distance = dist(mouseX, mouseY, width / 2, height / 2);
    if (distance < profileRadius) {
      isInitialState = false;
      if (!demoSound.isPlaying()) demoSound.loop();
    }
  } else {
    touchStartY = mouseY;
    scrollY_atTouchStart = scrollY;
    handleInteraction(mouseX, mouseY);
  }
  return false;
}

function mouseWheel(event) {
  if (!isPaused) {
    scrollY += event.delta;
    scrollY = constrain(scrollY, 0, totalContentHeight - height);
  }
  return false;
}

function touchMoved() {
  if (!isPaused) {
    let deltaY = mouseY - touchStartY;
    scrollY = scrollY_atTouchStart - deltaY;
    scrollY = constrain(scrollY, 0, totalContentHeight - height);
  }
  return false;
}

function handleInteraction(px, py) {
  if (dist(px, py, 40, 40) < 25) {
    isPaused = !isPaused;
    if (isPaused) {
      if (demoSound.isPlaying()) demoSound.pause();
    } else {
      if (!demoSound.isPlaying()) demoSound.loop();
    }
    return;
  }
  let y_scrolled = py + scrollY;
  for (let el of interactiveElements) {
    if (px > el.x && px < el.x + el.w && y_scrolled > el.y && y_scrolled < el.y + el.h) {
      if (el.type === 'link') {
        window.open(el.data, '_blank');
        return;
      }
      if (el.type === 'skill' && !demoSound.isPlaying()) {
        demoSound.loop();
        return;
      }
    }
  }
}

function handleHover() {
  let y_scrolled = mouseY + scrollY;
  let somethingIsHovered = false;
  for (let el of interactiveElements) {
    if (mouseX > el.x && mouseX < el.x + el.w && y_scrolled > el.y && y_scrolled < el.y + el.h) {
      if (el.type === 'skill') {
        somethingIsHovered = true;
        noStroke();
        fill(255, 25);
        rect(el.x - 10, el.y - scrollY, el.w, el.h, 5);
      }
    }
  }
  cursor(somethingIsHovered ? 'pointer' : 'default');
}

function addInteractiveElement(x, y, w, h, type, data) {
  interactiveElements.push({ x, y, w, h, type, data });
}

function spawnParticles(count) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(random(width), random(height * 1.2)));
  }
}

function drawPauseButton() {
  noStroke();
  fill(255, 50);
  ellipse(40, 40, 50, 50);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(isPaused ? '▶' : '||', 40, 40);
  textAlign(LEFT, TOP);
}

function calculateAlpha(y, sectionHeight) {
  let screenTop = scrollY;
  let screenBottom = scrollY + height;
  let sectionBottom = y + sectionHeight;
  if (sectionBottom < screenTop || y > screenBottom) return 0;
  let distanceToCenter = abs((y + sectionHeight / 2) - (screenTop + height / 2));
  let maxDistance = height * 5.5;
  let alpha = map(distanceToCenter, maxDistance, 0, 0, 255, true);
  return alpha;
}

function textHeight(txt, textWidthVal) {
  let words = txt.split(' ');
  let line = '';
  let h = textSize();
  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + '   ';
    let testWidth = textWidth(testLine);
    if (testWidth > textWidthVal && i > 0) {
      line = words[i] + '   ';
      h += textSize();
    } else {
      line = testLine;
    }
  }
  return h;
}
