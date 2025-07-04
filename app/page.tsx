'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-black text-center text-gray-800 dark:text-gray-100">
      {/* Nombre */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Miquel Alomar
      </motion.h1>

      {/* Sobre mí / filosofía */}
      <motion.div
        className="max-w-xl mx-auto bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-10 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-2">Sobre mí</h2>
        <p className="text-sm leading-relaxed">
          Soy un desarrollador de software con formación en desarrollo
          multiplataforma, pero enfocado en el desarrollo web moderno. Me gusta construir
          soluciones limpias, útiles y bien estructuradas que puedan crecer y evolucionar.
          Valoro la claridad, la accesibilidad y la eficiencia.
        </p>
      </motion.div>

      {/* Tecnologías */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4">Tecnologías que uso</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">Angular</li>
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">NestJS</li>
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">PostgreSQL</li>
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">TypeScript</li>
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded">Next.js</li>
        </ul>
      </motion.div>

      {/* Proyectos */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-6">Proyecto destacado</h2>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6 text-left">
          <img
            src="/vitalnutry-preview.png" // Asegúrate de poner una imagen de tu proyecto en /public
            alt="Vitalnutry"
            className="w-full h-auto rounded mb-4"
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
      </motion.div>
    </div>
  );
}
