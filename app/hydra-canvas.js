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
    // const isMobile = this.state.isMobile;
    // if (isMobile) {
    //   console.log("is mobile")
    //   document
    //     .getElementById("hydra-holder").style.visibility = "hidden";
    // }

      const hydraCanvas = this.canvas;
      hydraCanvas.width = window.innerWidth;
      hydraCanvas.height = window.innerHeight;

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
        console.log(hydra.audio);
        this.state.hydra = hydra;
      } else {
        hydra = this.state.hydra;
      }

      // setResolution(1080,720);

      //let main = { scrollTop: 0}
      switch (this.state.hydraFunction) {
        case "osc":
          osc().out();
          break;
      
        default:
          
          osc(5, 0.01, 0.1)
            .mult(voronoi(2.5, 0.05, 0.1).color(0.5, 0.3, 0.1), 1)
            .contrast(0.7)
            .out(o1)

        
          src(o0)
            .layer(src(o1).modulateScrollX(osc(40, 0.01, 0.5), 0.5, -0.6)
              .mask(shape(4, 0.25, 0.1).scale(5, 0.2).scrollX(0)))
            .modulateScale(o1, [0.23, 0.29].smooth().fast(0.8), 0.99)
            .modulate(noise(), 0.03)
            .out(o0)
          break;
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

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      // console.log(this.canvas)
    });


    return html`
      <div id="hydra-holder">
        ${this.canvas}
      </div>
    `;
  }
};
