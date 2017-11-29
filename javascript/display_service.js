goog.provide('bio.DisplayService');

goog.require('bio.Components');
goog.require('bio.FootprintService');
goog.require('bio.Initializable');

/** @implements {bio.Initializable} */ bio.DisplayService = class {
  /**
   * @param {bio.Components} components
   * @param {bio.FootprintService} footprintService
   * @param {bio.LocationService} locationService
   */
  constructor(components, footprintService, locationService) {
    /** @private @const */ this.components = components;
    /** @private @const */ this.footprintService = footprintService;
    /** @private @const */ this.locationService = locationService;

    /** @private @type {number}*/ this.width;
    /** @private @type {number}*/ this.height;

    /** @private @const */ this.self = 0;
    /** @private @const */ this.rand = 1;
  }

  /** @override */ initialize() {
    this.resize();
    this.redraw();
  
    window.addEventListener('click', (event) => {
      const [x, y] = [event.clientX, event.clientY];

      this.footprintService.draw(x, y);
      setTimeout(() => {this.footprintService.undraw(x, y);}, 5 * 1e3);
      this.locationService.addLocation(this.self, x, y);
    });

    window.addEventListener('resize', () => {
      this.resize();
      this.redraw();
    });

    this.components.buttons.home.addEventListener('click', () => {
      this.hidePages();
    });

    this.components.buttons.about.addEventListener('click', () => {
      this.hidePages();
      this.components.pages.about.style.display = 'inline-block';
    });

    this.components.buttons.bio.addEventListener('click', () => {
      this.hidePages();
      this.components.pages.bio.style.display = 'inline-block';
    });

    this.components.buttons.projects.addEventListener('click', () => {
      this.hidePages();
      this.components.pages.projects.style.display = 'inline-block';
    });

    window.addEventListener('mousemove', (event) => {
      for (const point of
             this.locationService.getRandomLocations(event.clientX, event.clientY)) {
          const [x, y] = point;
          this.footprintService.draw(x, y);
          this.locationService.addLocation(this.rand, x, y);
          setTimeout(() => {
              const [w, z] = this.locationService.pop(this.rand);
              this.footprintService.undraw(w, z);
              this.redraw();
            }, 500);
      }
    });
  }

  /** @private */ hidePages() {
    for (const page of Object.values(this.components.pages)) {
      page.style.display = 'none';
    }
  }

  /** @private */ redraw() {
    for (const n of [this.self, this.rand]) {
      for (const point of this.locationService.getLocations(n)) {
        this.footprintService.draw(point[0], point[1]);
      }
    }
  }

  /** @private */ resize() {
    const canvas = this.components.canvas;
    const wrapper = this.components.wrapper;
    [this.width, this.height] = [wrapper.clientWidth, wrapper.clientHeight];
    [canvas.width, canvas.height] = [this.width, this.height];
    this.locationService.resize(this.width, this.height);
  }
  
  /**
   * @private
   */
  test() {
    for (let i = 0; i < this.width; i += this.width / 20) {
      for (let j = 0; j < this.height; j += this.height / 20) {
        const [x, y] = this.locationService.sample(i, j);
        if (x && y) {
          this.footprintService.draw(x, y);
        }
      }
    }
  }
};