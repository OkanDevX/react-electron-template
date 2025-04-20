import { Link, Outlet } from "react-router";

import reactLogo from "../../assets/react.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={reactLogo} className="h-8 w-8" alt="Electron Logo" />
            <span className="text-xl font-bold">Electron React App</span>
          </div>
          <div className="flex space-x-6">
            <Link className="hover:text-blue-400 transition-colors" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-400 transition-colors" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
