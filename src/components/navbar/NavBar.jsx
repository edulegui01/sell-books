import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex items-center justify-center p-4">
        <li>
          <a
            href=""
            className="py-2 px-3 text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href=""
            className="py-2 px-3 text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
          >
            Categorias
          </a>
        </li>
        <li>
          <a
            href=""
            className="py-2 px-3 text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
          >
            Tienda
          </a>
        </li>
        <li>
          <a
            href=""
            className="py-2 px-3 text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href=""
            className="py-2 px-3 text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500"
          >
            Contactos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
