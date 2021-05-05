var html = require("choo/html");
var Component = require("choo/component");
const Hydra = require("hydra-synth");

module.exports = class Map extends Component {
  constructor(id, state, emit) {
    super(id);
    this.local = state.components[id] = {};
    this.state = state;
  }

  load(element) {
    console.log("loading", element, this.canvas);
    const isMobile = this.state.isMobile;
    if (isMobile) {
      console.log("is mobile")
      document
        .getElementById("hydra-holder").style.visibility = "hidden";
    }
    // create a new hydra-synth instance
    if (isMobile == false) {
      const hydraCanvas = this.canvas;
      hydraCanvas.width = window.innerHeight;
      hydraCanvas.height = 300;

      // create canvas for drawing text
      const canvas = document.createElement("canvas");
      canvas.width = hydraCanvas.width;
      canvas.height = hydraCanvas.height;

      if (this.state.hydra == undefined) {
        var hydra = new Hydra({
          canvas: this.canvas,
          detectAudio: false
          //width: 400,
          //height: 400
        });
        this.state.hydra = hydra;
      } else {
        hydra = this.state.hydra;
      }

      //let main = { scrollTop: 0}

      const ctx = canvas.getContext("2d");
      ctx.font = "80px Helvetica";
      ctx.fillText("hydra meetup #2", 10, 100);
      s0.init({ src: canvas });

      src(o0)
        .layer(
          osc(10, 0.1, 2)
            .modulate(noise(3))
            .rotate(0, 0.2)
            // .luma(() => 1 - mouse.x/width)
            .luma([0.2, 0.5].smooth(1))
        )
        //.layer(src(s0).invert())
        .layer(
          src(s0)
            .invert()
            .mult(
              osc(2, 0.01, 0)
                .color(2, 1, 1)
                .hue(() => time)
            )
            .scale(() => {
              const main = document.getElementsByClassName("main")[0];
              return main ? 1 - main.scrollTop / 400 : 1;
            })
            .modulate(noise(3, 0.1), () => {
              let t = Math.max(0, Math.sin(time * 0.5));
              return t * t * 0.1;
            })
        )
        .scrollY(-0.005)
        .scale(0.99)
        //.mask(shape(4, 0.8, 0.2).scrollY(-0.1))
        .out();

      // //window.hasRun = true
    }
  }

  update() {
    return false;
  }

  createElement(center) {
    if (this.state.canvas == undefined) {
      this.canvas = html`
        <canvas></canvas>
      `;
      this.state.canvas = this.canvas;
    } else {
      this.canvas = this.state.canvas;
    }
    return html`
      <div id="hydra-holder">
        ${this.canvas}
      </div>
    `;
  }
};
