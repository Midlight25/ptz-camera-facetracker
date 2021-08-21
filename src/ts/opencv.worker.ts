/**
 * @file WebWorker for loading and using opencv wasm. Taken heavy inspiration from @link(https://aralroca.com/blog/opencv-in-the-web).
 * Added type annotations for compile-time checking.
 *
 * @author Michael Mesquita (Midlight25)
 * @author aralroca
 *
 * @requires NPM:opencv-wasm
 */

import { cv } from "opencv-wasm";

/**
 * Periodically checks for successful loading of opencv wasm until a set time.
 * @callback callbackFunction
 * @param {number} [waitTimeMs=30000] The maximum time that the program will wait for the wasm to load.
 * @param {number} [stepTimeMs=100] Defines the wait period between each check, controls the frequency of checks.
 */
function waitForOpenCV(
  callback: (successful: boolean) => void,
  waitTimeMs: number = 30000,
  stepTimeMs: number = 100
): void {
  if (cv.Mat) {
    callback(true);
  } else {
    let timeSpentMs: number = 0;
    const interval = setInterval(() => {
      const limitReached: boolean = timeSpentMs > waitTimeMs;

      if (cv.Mat || limitReached) {
        clearInterval(interval);
        return callback(false);
      } else {
        timeSpentMs += stepTimeMs;
      }
    }, stepTimeMs);
  }
}

onmessage = function (event: MessageEvent) {
  switch (event.data.msg) {
    case "load": {
      waitForOpenCV(function (success) {
        if (success) {
          postMessage({ msg: event.data.msg });
        } else {
          throw new Error("Error on loading OpenCV");
        }
      });
    }
  }
};
