import { Button } from "@/ui/components/ui/button";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hello World</h2>
        <p className="mb-4">This is a simple Electron React app.</p>
      </div>

      <Button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Ana Sayfaya Dön
      </Button>
    </div>
  );
}
