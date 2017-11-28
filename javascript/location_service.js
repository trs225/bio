goog.provide('bio.LocationService');

goog.require('bio.Initializable');

/** @implements {bio.Initializable} */ bio.LocationService = class {

  constructor() {
    /** @private @const @type {Array<Array<number>>} */ this.locations = [];

    /** @private @type {number}*/ this.width;
    /** @private @type {number}*/ this.height;

    /** @private @const */ this.fuzzRange = [40, 100];
    /** @private @const */ this.nRandom = 4;

    /**
     * @private 
     * @const
     * @type {function(number): number}
     */
    this.fx = (x) => Math.pow(
       Math.E, -Math.pow(((x - (this.width / 2)) / (this.width / 4)), 2));

    /**
     * @private 
     * @const
     * @type {function(number): number}
     */
    this.fy = (y) => -y / this.height + 1;
  }

  /** @override */ initialize() {}

  /**
   * @param {number} n
   * @param {number} x
   * @param {number} y
   */
  addLocation(n, x, y) {
    this.locations[n] = this.locations[n] || [];
    this.locations[n].push(...this.transform(x, y));
  }

  /**
   * @param {number} n
   * @return {Array<number>}
   */ *getLocations(n) {
    this.locations[n] = this.locations[n] || [];
    for (let i = 0; i < this.locations[n].length; i += 2) {
      yield this.inverseTransform(this.locations[n][i], this.locations[n][i + 1]);
    }
  }

  /**
   * @param {number} n
   * @return {!Array<number>}
   */
  pop(n) {
    this.locations[n] = this.locations[n] || [];
    const [x, y] = [this.locations[n].shift(), this.locations[n].shift()];
    return this.inverseTransform(x, y);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {Array<number>}
   */
  *getRandomLocations(x, y) {
    for (let i = 0; i < this.nRandom; i++) {
      const [w, z] = this.sample(x, y);
      console.log('w ' + w + ' z ' + z);
      if (w && z) {
        yield this.fuzz(w, z);
      }
    }
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {!Array<number|undefined>}
   */
  sample(x, y) {
    const w = this.sampleFunc(this.fx, x, 1);
    const z = this.sampleFunc(this.fy, y, 1);
    return [w, z];
  }

  /**
   * @param {function(number): number} func
   * @param {number} x
   * @param {number} max
   * @return {number|void}
   */
  sampleFunc(func, x, max) {
    const y = Math.random() * max;
    if (y < Math.abs(func(x))) {
      return x;
    }
  }

  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @return {!Array<number>}
   */
  fuzz(x, y) {
    const r =
        Math.random() * (this.fuzzRange[1] - this.fuzzRange[0]) + this.fuzzRange[0];
    const theta = Math.random() * 2 * Math.PI;
    const dx = r * Math.cos(theta);
    const dy = r * Math.sin(theta);
    return [x + dx, y + dy];
  }

  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @return {!Array<number>}
   */
  inverseTransform(x, y) {
    return [x + (this.width / 2), y];
  }

  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @return {!Array<number>}
   */
  transform(x, y) {
    return [x - (this.width / 2), y];
  }
};
