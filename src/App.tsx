import { ThemeProvider } from "./context/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Resources from "./pages/Resources.tsx";
export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </ThemeProvider>
  );
}
