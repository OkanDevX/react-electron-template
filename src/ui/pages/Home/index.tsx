import { useNavigate } from "react-router";

import { Button } from "@/ui/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Electron React App</h1>
      <p className="text-xl text-gray-300 mb-8">
        This app is developed using Electron and React.
      </p>
      <Button
        onClick={() => navigate("/about")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Go to About Page
      </Button>
    </div>
  );
}
