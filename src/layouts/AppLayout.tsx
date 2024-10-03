import { Outlet } from "react-router-dom";
import Logo from "../components/logo";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </section>

      <footer className="py-5">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Todos los derechos reservados -{" "}
          <span className="font-bold">
            <a href="https://estudiols.net.ar">Estudio LS</a>
          </span>
        </p>
      </footer>
    </>
  );
}
