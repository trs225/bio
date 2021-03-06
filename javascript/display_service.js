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

    this.components.buttons.home.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.home.style.fontWeight = 'bold';
    });

    this.components.buttons.about.addEventListener('click', () => {
      this.hidePages();
      this.components.pages.about.style.display = 'inline-block';
    });

    this.components.buttons.about.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.about.style.fontWeight = 'bold';
    });

    this.components.buttons.bio.addEventListener('click', () => {
      this.hidePages();
      this.components.pages.bio.style.display = 'inline-block';
    });

    this.components.buttons.bio.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.bio.style.fontWeight = 'bold';
    });

    this.components.buttons.projects.addEventListener('click', () => {
      this.hidePages();
      this.hideFullProjects();
      this.components.pages.projects.style.display = 'inline-block';
      this.components.projects.projects.style.display = 'flex';
    });

    this.components.buttons.projects.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.projects.style.fontWeight = 'bold';
    });

    this.components.projects.website.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.website.style.fontWeight = 'bold';
    });

    this.components.projects.hemophilia.addEventListener('click', () => {
      this.hideProjects();
      this.components.fullProjects.hemophilia.style.display = 'inline-block';
    });

    this.components.projects.hemophilia.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.hemophilia.style.fontWeight = 'bold';
    });

    this.components.projects.probabilities.addEventListener('click', () => {
      this.hideProjects();
      this.components.fullProjects.probabilities.style.display = 'inline-block';
    });

    this.components.projects.probabilities.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.probabilities.style.fontWeight = 'bold';
    });

    this.components.projects.pygquery.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.pygquery.style.fontWeight = 'bold';
    });

    this.components.projects.builder.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.builder.style.fontWeight = 'bold';
    });

    this.components.projects.books.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.books.style.fontWeight = 'bold';
    });

    this.components.projects.music.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.music.style.fontWeight = 'bold';
    });

    this.components.projects.other.addEventListener('mouseover', () => {
      this.unhighlight();
      this.components.text.other.style.fontWeight = 'bold';
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

  /** @private */ hideProjects() {
    this.components.projects.projects.style.display = 'none';
  }

  /** @private */ hideFullProjects() {
    for (const fullProject of Object.values(this.components.fullProjects)) {
      fullProject.style.display = 'none';
    }
  }

  /** @private */ unhighlight() {
    for (const fullProject of Object.values(this.components.text)) {
      fullProject.style.fontWeight = 'normal';
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
};