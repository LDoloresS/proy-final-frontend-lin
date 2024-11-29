import React from "react"
import backgroundImage from '../../assets/slide-1.jpg';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Capa de superposición */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-yellow-500 px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ WebkitTextStroke: "1px black" }}>Bienvenido a Nuestra Tienda</h1>
                <p className="text-3xl font-bold sm:text-4xl mb-8 max-w-xl" style={{ WebkitTextStroke: "1px black" }}>Encuentra los mejores productos al mejor precio. Explora nuestras colecciones ahora.</p>
            </div>
        </div>
    )
}

export default Hero