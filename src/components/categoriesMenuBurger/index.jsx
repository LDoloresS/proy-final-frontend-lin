import React, { useState } from "react";
import CategoriaList from "../categoriaList";

const CategoriesMenuBurger = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Botón para abrir/cerrar el menú */}
            <button
                className={`absolute z-50 hover:bg-slate-200/20 text-white p-2 rounded-full focus:outline-none text-2xl ${
                    isOpen ? "bg-red-500" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Menú flotante */}
            <div
                className={`fixed left-0 w-full md:w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 z-40 overflow-y-auto`}
                style={{
                    top: "var(--header-height, 4rem)", // Ajuste dinámico basado en el header
                    height: "calc(100vh - var(--header-height, 4rem))",
                }}
            >
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-4">Menú</h2>
                    <CategoriaList />
                </div>
            </div>

            {/* Fondo oscuro al abrir el menú */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default CategoriesMenuBurger;
