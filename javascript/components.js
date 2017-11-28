goog.provide('bio.ButtonComponents');
goog.provide('bio.Components');
goog.provide('bio.PageComponents');

bio.Components = class {
  constructor() {
    this.canvas = /** @type {HTMLCanvasElement}*/ (document.getElementById('canvas'));
    this.wrapper = /** @type {HTMLDivElement} */ (document.getElementById('wrapper'));
    this.page = /** @type {HTMLDivElement} */ (document.getElementById('page'));

    this.buttons = new bio.ButtonComponents();
    this.pages = new bio.PageComponents();
  }
};

bio.ButtonComponents = class {
  constructor() {
    this.home =
        /** @type {HTMLDivElement} */ (document.getElementById('home-button'));
    this.about =
        /** @type {HTMLDivElement} */ (document.getElementById('about-button'));
    this.bio =
        /** @type {HTMLDivElement} */ (document.getElementById('bio-button'));
    this.projects =
        /** @type {HTMLDivElement} */ (document.getElementById('projects-button'));
  }
};

bio.PageComponents = class {
  constructor() {
    this.about =
        /** @type {HTMLDivElement} */ (document.getElementById('about-page'));
    this.bio =
        /** @type {HTMLDivElement} */ (document.getElementById('bio-page'));
    this.projects =
        /** @type {HTMLDivElement} */ (document.getElementById('projects-page'));
  }
};