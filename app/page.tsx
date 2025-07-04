'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      {/* Header */}
      <header className="flex flex-col items-center py-8">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-2">Miquel Alomar Solorza</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Desarrollador Web & Apasionado por la tecnología
        </p>
      </header>

      {/* Sobre mí */}
      <section className="max-w-xl mx-auto bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-10 text-left">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>Sobre mí</span>
          <span>👨‍💻</span>
        </h2>
        <p className="text-sm leading-relaxed">
          Soy un desarrollador de software con formación en desarrollo
          multiplataforma, pero enfocado en el desarrollo web moderno. Me gusta construir
          soluciones limpias, útiles y bien estructuradas que puedan crecer y evolucionar.
          Valoro la claridad, la accesibilidad y la eficiencia.
        </p>
      </section>

      {/* Tecnologías */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Tecnologías que uso
        </h2>
        <ul className="flex flex-wrap justify-center gap-6">
          <li className="flex flex-col items-center">
            <img
              src="/angular.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>Angular</span>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/nestjs.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>NestJS</span>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/postgresql.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>PostgreSQL</span>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/typescript.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>TypeScript</span>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/tailwindcss.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>Tailwind CSS</span>
          </li>
          <li className="flex flex-col items-center">
            <img
              src="/nextjs.svg"
              className="w-8 h-8 mb-1 hover:scale-110 transition"
            />
            <span>Next.js</span>
          </li>
        </ul>
      </section>

      {/* Proyectos */}
      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-6">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6">
            <img
              src="/vitalnutry-preview.png"
              alt="Vitalnutry"
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold mb-1">Vitalnutry</h3>
            <p className="text-sm mb-2">
              Aplicación web que permite puntuar recetas y calcular automáticamente
              los macronutrientes. Ideal para controlar la nutrición de forma rápida y visual.
            </p>
            <a
              href="https://github.com/miqueeeeel/api-nutricion"
              target="_blank"
              className="text-sm underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Ver en GitHub →
            </a>
          </div>
          {/* ...más proyectos */}
        </div>
      </section>

      {/* Contacto */}
      <section className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-4">Contacto</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:tuemail@mail.com">
            <img src="/mail.svg" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
          >
            <img src="/github.svg" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
          >
            <img src="/linkedin.svg" className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        © 2025 Miquel Alomar
      </footer>
    </div>
  );
}
