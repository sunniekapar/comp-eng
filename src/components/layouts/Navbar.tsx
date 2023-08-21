import { ThemeToggle } from "../ui/ThemeToggle";
const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-row-reverse p-5">
      <ThemeToggle></ThemeToggle>
    </nav>
  );
}

export default Navbar;
