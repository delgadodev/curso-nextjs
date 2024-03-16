"use client";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}

      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={() => closeSideMenu()}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 bg-opacity-5 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Side menu */}

      <nav
        className={clsx(
          `fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300`,
          {
            "translate-x-0": isSideMenuOpen,
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          className="text-3xl cursor-pointer absolute top-5 right-5"
          size={50}
          onClick={() => closeSideMenu()}
        />

        {/* Input */}
        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            placeholder="Buscar"
            type="text"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>
        {/* Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all rounded"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
