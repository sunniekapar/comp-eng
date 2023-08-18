export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-4/6 p-10 mx-auto text-center lg:text-left lg:flex-row">
      <p className="mb-6 font-thin lg:mr-auto text-md lg:mb-0">
        Copyright ©️ 2023 •
        <span className=""> Designed by Sunnie Kapar</span>
      </p>
      <div>
        <a href="https://github.com/sunniekapar" target="_blank">
          <i className="mr-10 text-2xl transition-all duration-200 ease-in-out hover:text-blue-900 bi bi-github"></i>
        </a>
        <a href="#" target="_blank">
          <i className="mr-10 text-2xl transition-all duration-200 ease-in-out hover:text-blue-900 bi bi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/sunniekapar/" target="_blank">
          <i className="text-2xl transition-all duration-200 ease-in-out hover:text-blue-900 bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
