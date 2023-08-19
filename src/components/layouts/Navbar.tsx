import { ThemeToggle } from "../ui/ThemeToggle";
const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse p-5">
      <ThemeToggle></ThemeToggle>
    </nav>
  );
}

export default Navbar;
