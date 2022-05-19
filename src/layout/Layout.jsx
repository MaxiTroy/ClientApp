import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-[#161616] px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/clientes" ? "text-red-800" : "text-white"
            } text-2xl block mt-2 hover:text-red-800`}
            to="/clientes"
          >
            Cliente
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/new"
                ? "text-red-800"
                : "text-white"
            } text-2xl block mt-2 hover:text-red-800`}
            to="/clientes/new"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
