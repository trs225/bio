goog.provide('bio.ButtonComponents');
goog.provide('bio.Components');
goog.provide('bio.FullProjectComponents');
goog.provide('bio.PageComponents');
goog.provide('bio.ProjectComponents');
goog.provide('bio.TextComponents');

bio.Components = class {
  constructor() {
    this.canvas = /** @type {HTMLCanvasElement}*/ (document.getElementById('canvas'));
    this.wrapper = /** @type {HTMLDivElement} */ (document.getElementById('wrapper'));
    this.page = /** @type {HTMLDivElement} */ (document.getElementById('page'));

    this.buttons = new bio.ButtonComponents();
    this.text = new bio.TextComponents();
    this.pages = new bio.PageComponents();
    this.projects = new bio.ProjectComponents();
    this.fullProjects = new bio.FullProjectComponents();
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

bio.TextComponents = class {
  constructor() {
    this.home =
        /** @type {HTMLDivElement} */ (document.getElementById('home-button-text'));
    this.about =
        /** @type {HTMLDivElement} */ (document.getElementById('about-button-text'));
    this.bio =
        /** @type {HTMLDivElement} */ (document.getElementById('bio-button-text'));
    this.projects =
        /** @type {HTMLDivElement} */ (document.getElementById('projects-button-text'));
    this.website =
        /** @type {HTMLDivElement} */ (document.getElementById('website-button-text'));
    this.hemophilia =
        /** @type {HTMLDivElement} */ (document.getElementById('hemophilia-button-text'));
    this.probabilities =
        /** @type {HTMLDivElement} */ (document.getElementById('probabilities-button-text'));
    this.pygquery =
        /** @type {HTMLDivElement} */ (document.getElementById('pygquery-button-text'));
    this.builder =
        /** @type {HTMLDivElement} */ (document.getElementById('builder-button-text'));
    this.books =
        /** @type {HTMLDivElement} */ (document.getElementById('books-button-text'));
    this.music =
        /** @type {HTMLDivElement} */ (document.getElementById('music-button-text'));
    this.other =
        /** @type {HTMLDivElement} */ (document.getElementById('other-button-text'));
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

bio.ProjectComponents = class {
  constructor() {
    this.projects =
        /** @type {HTMLDivElement} */ (document.getElementById('projects'));
    this.website =
        /** @type {HTMLDivElement} */ (document.getElementById('website'));
    this.hemophilia =
        /** @type {HTMLDivElement} */ (document.getElementById('hemophilia'));
    this.probabilities =
        /** @type {HTMLDivElement} */ (document.getElementById('probabilities'));
    this.pygquery =
        /** @type {HTMLDivElement} */ (document.getElementById('pygquery'));
    this.builder =
        /** @type {HTMLDivElement} */ (document.getElementById('builder'));
    this.books =
        /** @type {HTMLDivElement} */ (document.getElementById('books'));
    this.music =
        /** @type {HTMLDivElement} */ (document.getElementById('music'));
    this.other =
        /** @type {HTMLDivElement} */ (document.getElementById('other'));
  }
};

bio.FullProjectComponents = class {
  constructor() {
    this.hemophilia =
        /** @type {HTMLDivElement} */ (document.getElementById('full-hemophilia'));
    this.probabilities =
        /** @type {HTMLDivElement} */ (document.getElementById('full-probabilities'));
  }
};