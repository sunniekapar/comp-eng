import { ThemeToggle } from "../ui/ThemeToggle";
export default function Navbar() {
  return (
    <nav className="flex flex-row-reverse p-5">
      <ThemeToggle></ThemeToggle>
    </nav>
  );
}
