console.log("Hello word")
console.log("Hello word") //2nd 

class Particle1 {
  constructor(canvas) {
    this.random = Math.random();
    this.random1 = Math.random();
    this.random2 = Math.random();
    this.progress = 0;
    this.canvas = canvas;
    this.life = 1000 + Math.random() * 3000;

    this.x =
      $(window).width() / 2 + (Math.random() * 20 - Math.random() * 20);
    this.y = $(window).height();
    this.s = 2 + Math.random();
    this.w = $(window).width();
    this.h = $(window).height();
    this.direction = this.random > 0.5 ? -1 : 1;
    this.radius = 1 + 3 * this.random;
    this.color = "#ff417d";

    this.ID = setInterval(
      function() {
        microparticles.push(
          new microParticle(c1.context, {
            x: this.x,
            y: this.y,
          })
        );
      }.bind(this),
      this.random * 20
    );
