goog.require('bio.Components');
goog.require('bio.DisplayService');
goog.require('bio.FootprintService');
goog.require('bio.Initializable');
goog.require('bio.LocationService');

/** @export */ function main() {
  const components = new bio.Components();
  const footprintService = new bio.FootprintService(components.canvas);
  const locationService = new bio.LocationService();

  const initializables = /** @type {!Array<!bio.Initializable>} */ ([
    footprintService,
    locationService,
    new bio.DisplayService(
      components, footprintService, locationService),
  ]);
  
  for (const i of initializables) {
    i.initialize();
  }
}

main();
