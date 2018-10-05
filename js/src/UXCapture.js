import ExpectedMark from "./ExpectedMark";
import View from "./View";

const NOOP = () => {};

export default class UXCapture {
  static attachTo(window) {
    // require a valid window object to be passed in
    if (typeof window === "undefined") {
      throw new Error("Must provide a valid window object");
    }

    // already have UX Capture object defined, reuse it
    if (typeof window.UX !== "undefined") {
      return window.UX;
    }

    // assign singleton instance to window object
    window.UX = new UXCapture(window);

    return window.UX;
  }

  constructor() {
    this.onMark = NOOP;
    this.onMeasure = NOOP;
  }

  /**
   * Sets expected marks and corresponding zones for current view
   *
   * @TODO re-evaluate if we should allow multiple executions of this method
   */
  expect(zoneConfigs) {
    if (typeof zoneConfigs === "undefined" || !Array.isArray(zoneConfigs)) {
      throw new Error("Must provide an array of zone configuration objects");
    }

    // create a view object for initial, server-side rendered page view
    const pageView = new View({
      // calling currently configured onMark & onMeasure handlers inside View's callbacks
      // allows making UX.config() call after UX.expect() call
      onMark: mark => this.onMark(mark),
      onMeasure: measure => this.onMeasure(measure),
      zoneConfigs
    });
  }

  mark(name) {
    const mark = ExpectedMark.get(name);

    if (mark) {
      mark.record();
    }
  }

  config(configuration) {
    if (!configuration || typeof configuration !== "object") {
      return;
    }

    if (typeof configuration.onMark === "function") {
      this.onMark = configuration.onMark;
    } else {
      this.onMark = NOOP;
    }

    if (typeof configuration.onMeasure === "function") {
      this.onMeasure = configuration.onMeasure;
    } else {
      this.onMeasure = NOOP;
    }
  }
}
