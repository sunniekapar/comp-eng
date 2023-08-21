//import SquareButton from "./components/SquareButton.tsx";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Footer from "./components/layouts/Footer.tsx";
import Header from "./components/layouts/Header.tsx";
import Navbar from "./components/layouts/Navbar.tsx";
import Resources from "./components/layouts/Resources.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="transition-[background] duration-500 font-poppins dark:bg-zinc-950 dark:text-gray-50">
        <Navbar />
        <main className="container">
          <Header />
          <Resources />
          <Footer />
        </main>
       
      </div>
      
    </ThemeProvider>
  );
}
