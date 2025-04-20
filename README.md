# React + Tailwind CSS + Shadcn UI + Vite + Electron Template

This template provides a quick start for developing desktop applications using React, Tailwind CSS, Shadcn UI, Vite, and Electron. It includes a pre-configured setup with TypeScript support and essential development tools.

## Features

- React 19 with Vite (also Tailwind CSS + Shadcn UI)
- Electron integration
- TypeScript support
- ESLint configuration
- Hot Module Replacement (HMR)
- Cross-platform build support (Windows, macOS, Linux)

## Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm run dev
# or
npm run dev
```

This will start both the Vite + React development server and Electron application.

## Project Structure

```
├── src/
│   ├── electron/          # Electron main process files
│   │   ├── main.ts       # Main process entry point
│   │   ├── preload.cts   # Preload script for secure IPC
│   │   └── tsconfig.json # TypeScript config for Electron
│   └── renderer/         # React application files
├── package.json          # Project configuration
└── vite.config.ts        # Vite configuration
```

## Available Scripts

- `pnpm run dev`: Start development server (both React and Electron)
- `pnpm run dev:react`: Start only React development server
- `pnpm run dev:electron`: Start only Electron in development mode
- `pnpm run build:react`: Build React application
- `pnpm run transpile:electron`: Transpile Electron main process files
- `pnpm run dist:win`: Build Windows executable
- `pnpm run dist:mac`: Build macOS executable
- `pnpm run dist:linux`: Build Linux executable
- `pnpm run lint`: Run ESLint

## IPC Communication

The template includes a pre-configured IPC (Inter-Process Communication) setup between the main process and renderer process. Here's how to use it:

```typescript
// In your React component
const handleSendMessage = async () => {
  const response = await window.electron.sendMessage("Hello!");
  console.log(response);
};

const handleDivide = async () => {
  const result = await window.electron.divideOperation({
    number1: 10,
    number2: 2,
  });
  console.log(result);
};

const handleFileSelect = async () => {
  const filePath = await window.electron.selectFile();
  console.log(filePath);
};
```

## Building for Production

To build the application for production:

1. Build the React application:

```bash
pnpm run build:react
```

2. Build the Electron application for your target platform:

```bash
# For Windows
pnpm run dist:win

# For macOS
pnpm run dist:mac

# For Linux
pnpm run dist:linux
```

The built applications will be available in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
