(function(window) {
  // allow running in Node.js environment
  if (typeof window === "undefined") {
    window = {};
  }

  // prepare base UX Capture object
  if (typeof window.UX === "undefined") {
    window.UX = {};
  }

  const isUserTimingSupported =
    typeof window.performance !== "undefined" &&
    typeof window.performance.mark !== "undefined" &&
    typeof window.performance.measure !== "undefined";

  const isConsoleTimeStampSupported =
    typeof window.console !== "undefined" &&
    typeof window.console.timeStamp !== "undefined";

  let expectedZones = [];

  let getMark = markLabel =>
    expectedZones.reduce((expectedMark, expectedZone) => {
      // already found in previous zone, no need to be iterating over current zone's marks
      return expectedMark
        ? expectedMark
        : expectedZone.marks.find(
            expectedMark => expectedMark.label === markLabel
          );
    }, null);

  let onMark;
  let onMeasure;

  window.UX.expect = function(zones) {
    expectedZones = zones.map(zone => {
      // only create promises if zone contains any marks, otherwise just ignore it
      if (zone.marks && zone.marks.length > 0) {
        // wrap each string in the array into an object so we can attach record() methods to them
        zone.marks = zone.marks.map(label => ({ label }));

        // create a promise for each expected mark
        const promises = zone.marks.map(
          mark =>
            new Promise((resolve, reject) => {
              mark.record = () => {
                if (isUserTimingSupported) {
                  // record the mark using W3C User Timing API
                  window.performance.mark(mark.label);

                  // if callback is specified, call it with mark label
                  if (onMark) {
                    onMark(mark.label);
                  }
                }

                /**
                 * Report same mark on Chrome/Firefox timeline
                 *
                 * keep in mind, these timestams are counted from timeline recording start
                 * while UserTiming marks are counted from navigationStart event
                 * however visually, they all will be offset by the same amount of time and align vertically on the charts
                 *
                 * (we'd provide a helper to highlight discrepancy, but unfortunately,
                 * there is no way to know when in timeline did navigationStart event occured)
                 */
                if (isConsoleTimeStampSupported) {
                  console.timeStamp(mark.label);
                }

                // remember last mark that was recorded within a zone, overriding previous one
                zone.lastMarkLabel = mark.label;

                resolve(mark.label);
              };
            })
        );

        // only if all marks were recorded (and promises resolved), go ahead and record the measure ending with last recorded mark
        Promise.all(promises).then(() => {
          if (isUserTimingSupported) {
            // record a measure using W3C User Timing API
            window.performance.measure(
              zone.label,
              "navigationStart",
              zone.lastMarkLabel
            );

            // if callback is specified, call it with zone label
            if (onMeasure) {
              onMeasure(zone.label);
            }
          }
        });

        return zone;
      }
    });
  };

  window.UX.mark = function(markLabel) {
    const mark = getMark(markLabel);

    if (mark) {
      mark.record();
    }
  };

  window.UX.config = function(configuration) {
    if (!configuration || typeof configuration !== "object") {
      return;
    }

    if (typeof configuration.onMark === "function") {
      onMark = configuration.onMark;
    }

    if (typeof configuration.onMeasure === "function") {
      onMeasure = configuration.onMeasure;
    }
  };

  //
  // Export UX Capture to the appropriate location.
  //
  // When included directly via a script tag in the browser, we're good as we've been
  // updating the window.UX object.
  //
  if (typeof define === "function" && define.amd) {
    //
    // AMD / RequireJS
    //
    define([], function() {
      return window.UX;
    });
  } else if (
    typeof module !== "undefined" &&
    typeof module.exports !== "undefined"
  ) {
    //
    // Node.js
    //
    module.exports = window.UX;
  }
})(typeof window !== "undefined" ? window : undefined);
