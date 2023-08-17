//import SquareButton from "./components/SquareButton.tsx";
import Header from "./components/layouts/Header.tsx";
import Resources from "./components/layouts/Resources.tsx";
export default function App() {
  return (
    <>
      <Header />
      <Resources />
    </>
    // <div className="grid w-5/12 grid-cols-3 ">
    //  <SquareButton name='Druiven Box' color='hover:bg-blue-900' span='col-span-1' href='http://druivenbox.haltonchess.ca/index.html' />
    // </div>
  );
}
