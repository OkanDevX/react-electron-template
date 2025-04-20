import { app } from "electron";
import path from "path";
import { isDev } from "./utils.js";

/**
 * This function returns the file path of the Electron application's preload script.
 * The preload script acts as a secure bridge between the main process and renderer process.
 *
 * In development mode `(isDev() === true)`, the preload file is in the current directory `("./")`
 * In production mode `(isDev() === false)`, it is in the parent directory `("../")`
 * In both cases, it is located in the `"dist-electron/preload.cjs"` subdirectory
 */
export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "dist-electron/preload.cjs"
  );
}
