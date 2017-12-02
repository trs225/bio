goog.provide('bio.FootprintService');

goog.require('bio.Initializable');

/** @implements {bio.Initializable} */ bio.FootprintService = class {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    /** @private @const */ this.canvas = canvas;
    /** @private @const */ this.context = canvas.getContext('2d');
    /** @private @const */ this.background = 'white';
    /** @private @const */ this.color = 'black';
    /** @private @const */ this.width = 2;
    /** @private @const */ this.radius = 20;
  }

  /** @override */ initialize() {
    this.canvas.style.backgroundColor = this.background;
    this.context.shadowColor = "";
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  draw(x, y) {
    this.context.beginPath();
    this.context.arc(x, y, this.radius, 0, 2*Math.PI);
    this.context.lineWidth = this.width;
    this.context.strokeStyle = this.color;
    this.context.stroke();
    this.context.closePath();
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  undraw(x, y) {
    this.context.beginPath();
    this.context.arc(x, y, this.radius, 0, 2*Math.PI);
    this.context.lineWidth = this.width + 5;
    this.context.strokeStyle = 'white';
    this.context.stroke();
    this.context.closePath();
  }
};