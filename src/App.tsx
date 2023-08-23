import { ThemeProvider } from "./context/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Resources from "./pages/Resources.tsx";
export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="transition-[background] duration-500 font-poppins dark:bg-zinc-950 dark:text-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
