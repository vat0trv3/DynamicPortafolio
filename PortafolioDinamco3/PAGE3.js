let particles = [];
let maxParticles = 120;
let trailLength = 50;
let fft, amplitude;
let sounds = [];
let currentSound = 0;
let bgImg;
let canvas; // <--- aquí declaras la variable canvas

function preload() {
  sounds[0] = loadSound('assets/audio/2.wav', 
    () => console.log("Audio 1 cargado"), 
    (err) => console.error("Error cargando audio 1:", err)
  );
  sounds[1] = loadSound('assets/audio/4.wav', 
    () => console.log("Audio 2 cargado"), 
    (err) => console.error("Error cargando audio 2:", err)
  );

  bgImg = loadImage('assets/fotos/fondo1.png',
    () => console.log("Imagen de fondo cargada"),
    (err) => console.error("Error cargando imagen:", err)
  );
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // asigna a variable local
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');

  fft = new p5.FFT(0.9, 1024);
  amplitude = new p5.Amplitude();

  playNextSound();

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  strokeWeight(0.4);
}

function draw() {
 
  tint   (55,55,55,20);
  
  image(bgImg, 0, 0, width, height);
  noTint();

  // Analiza audio para reactividad
  let spectrum = fft.analyze();
  let level = amplitude.getLevel();
  let factor = map(level, 0, 0.3, 0.5, 3);

  for (let p of particles) {
    p.update(factor);
    p.show(spectrum);
  }
}

function playNextSound() {
  sounds[currentSound].play();
  sounds[currentSound].onended(() => {
    currentSound = (currentSound + 1) % sounds.length;
    playNextSound();
  });
}

// Clase Particle
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.history = [];
    this.lifetime = random(300, 600);
    this.age = 0;
  }

  update(factor) {
    this.pos.add(p5.Vector.mult(this.vel, factor));
    this.age++;

    // Rebote en bordes
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;

    // Guardar historial para trails
    this.history.push(this.pos.copy());
    if (this.history.length > trailLength) this.history.shift();

    // Resetear si muere
    if (this.age > this.lifetime) {
      this.pos = createVector(random(width), random(height));
      this.vel = p5.Vector.random2D().mult(random(0.5, 2));
      this.history = [];
      this.age = 0;
    }
  }

  show(spectrum) {
    let bass = fft.getEnergy("bass");
    let mid = fft.getEnergy("mid");
    let treble = fft.getEnergy("treble");

    let r = map(bass, 0, 255, 100, 255);
    let g = map(mid, 0, 255, 30, 150);
    let b = map(treble, 0, 255, 20, 50);

    // Líneas entre partículas cercanas
    for (let other of particles) {
      if (other !== this) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < 140) {
          // Alternar colores rojo/verde
          if (frameCount % 60 < 30) {
            stroke(r, 0, 0, map(d, 0, 140, 180, 30));
          } else {
            stroke(0, g, 0, map(d, 0, 140, 180, 30));
          }
          line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

          // Destellitos en medio de la línea
          if (random(1) < 0.02) {
            let midX = (this.pos.x + other.pos.x) / 2;
            let midY = (this.pos.y + other.pos.y) / 2;
            stroke(255, 200, 0, 200);
            point(midX, midY);
          }
        }
      }
    }

    // Trails de la partícula
    for (let i = 1; i < this.history.length; i++) {
      let p1 = this.history[i - 1];
      let p2 = this.history[i];
      stroke(r, g, b, map(i, 0, trailLength, 0, 180));
      line(p1.x, p1.y, p2.x, p2.y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
