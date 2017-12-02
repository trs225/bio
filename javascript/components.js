goog.provide('bio.ButtonComponents');
goog.provide('bio.Components');
goog.provide('bio.FullProjects');
goog.provide('bio.PageComponents');
goog.provide('bio.Projects');

bio.Components = class {
  constructor() {
    this.canvas = /** @type {HTMLCanvasElement}*/ (document.getElementById('canvas'));
    this.wrapper = /** @type {HTMLDivElement} */ (document.getElementById('wrapper'));
    this.page = /** @type {HTMLDivElement} */ (document.getElementById('page'));

    this.buttons = new bio.ButtonComponents();
    this.pages = new bio.PageComponents();
    this.projects = new bio.Projects();
    this.fullProjects = new bio.FullProjects();
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

bio.Projects = class {
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

bio.FullProjects = class {
  constructor() {
    this.hemophilia =
        /** @type {HTMLDivElement} */ (document.getElementById('full-hemophilia'));
    this.probabilities =
        /** @type {HTMLDivElement} */ (document.getElementById('full-probabilities'));
  }
};