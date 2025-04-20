import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "path";
import { fileURLToPath } from "url";

import { isDev } from "./utils.js";
import { getPreloadPath } from "./path-resolver.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// When the Electron app is ready this event will be triggered
app.on("ready", () => {
  // Create main window
  const mainWindow = new BrowserWindow({
    webPreferences: {
      // Load preload script
      preload: getPreloadPath(),
      // Enable Node.js integration
      nodeIntegration: true,
      // Isolate renderer process from main process
      contextIsolation: true,
    },
  });

  // If development mode, load from localhost
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    // If production mode, load built file
    mainWindow.loadFile(path.join(__dirname, "../dist-react/index.html"));
  }
});

// ----------------------------------------------------------------
// Electron IPC Handlers Examples
// ----------------------------------------------------------------
// Example 1: Simple message sending and receiving
ipcMain.handle("send-message", async (event, name) => {
  return `Hello ${name}!`;
});

// Example 2: Error handling
ipcMain.handle("divide-operation", async (event, { number1, number2 }) => {
  if (number2 === 0) {
    throw new Error("Sıfıra bölme hatası!");
  }
  return number1 / number2;
});

// Example 3: File system operations
ipcMain.handle("select-file", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [
      { name: "Text Files", extensions: ["txt"] },
      { name: "All Files", extensions: ["*"] },
    ],
  });

  if (!result.canceled) {
    return result.filePaths[0];
  }
  throw new Error("Dosya seçilmedi");
});

// Example 4: Asynchronous operations and data return
ipcMain.handle("delay-test", async (event, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Operation completed",
        delay: delay,
        timestamp: new Date().toISOString(),
      });
    }, delay);
  });
});

// You can use these handlers in the renderer process like this:
/*
  // Example 1 usage
  const answer = await window.electron.sendMessage("Ahmet");
  
  // Example 2 usage
  try {
    const result = await window.electron.divideOperation({ number1: 10, number2: 2 });
  } catch (error) {
    console.error(error);
  }
  
  // Example 3 usage
  const filePath = await window.electron.selectFile();
  
  // Example 4 usage
  const result = await window.electron.delayTest(2000);
*/
