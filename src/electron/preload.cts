/**
 * This file creates a secure communication bridge between the main process and renderer process
 * in an Electron application. Using Electron's contextBridge API, it exposes secure functions
 * from the main process to the renderer process.
 */

const electron = require("electron");

/**
 * Using contextBridge.exposeInMainWorld method, we create a global object named "electron".
 * This object provides secure access to functions in the main process.
 *
 * UI (React) Usage:
 *
 * 1. sendMessage usage:
 * const response = await window.electron.sendMessage("Hello world!");
 *
 * 2. divideOperation usage:
 * const result = await window.electron.divideOperation({ number1: 10, number2: 2 });
 *
 * 3. selectFile usage:
 * const filePath = await window.electron.selectFile();
 *
 * 4. delayTest usage:
 * const response = await window.electron.delayTest(2000); // Wait for 2 seconds
 */
electron.contextBridge.exposeInMainWorld("electron", {
  /**
   * Function to send a message to the main process
   * @param message - Message to send
   * @returns Promise<string> - Response from main process
   */
  sendMessage: (message: string) =>
    electron.ipcRenderer.invoke("send-message", message),

  /**
   * Function to perform division operation on two numbers
   * @param data - Numbers required for division operation
   * @returns Promise<number> - Result of the division operation
   */
  divideOperation: (data: { number1: number; number2: number }) =>
    electron.ipcRenderer.invoke("divide-operation", data),

  /**
   * Opens a file selection dialog
   * @returns Promise<string> - Path of the selected file
   */
  selectFile: () => electron.ipcRenderer.invoke("select-file"),

  /**
   * Test function that waits for the specified duration
   * @param delay - Waiting duration in milliseconds
   * @returns Promise<string> - Test completion message
   */
  delayTest: (delay: number) =>
    electron.ipcRenderer.invoke("delay-test", delay),
} satisfies Window["electron"]);
