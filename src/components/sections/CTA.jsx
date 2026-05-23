import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function CTA() {

  return (

    <section id="cta" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/80" />

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-sm font-bold tracking-[8px] text-cyan-400"
        >
          WES GIGANTOGRAFÍAS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase leading-none md:text-7xl xl:text-8xl"
        >

          Llevemos Tu
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Marca Al Siguiente Nivel
          </span>

        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Gigantografías, Neón Led, ploteos y soluciones visuales
          de alto impacto para negocios, marcas y empresas.
        </motion.p>

        {/* BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14"
        >

          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            className="
              group inline-flex items-center gap-4
              rounded-2xl
              bg-gradient-to-r from-cyan-400 to-violet-500
              px-10 py-6
              text-lg font-black text-black
              transition duration-300
              hover:scale-105
              hover:shadow-[0_0_45px_rgba(0,255,255,0.45)]
            "
          >

            Pedir Presupuesto

            <ArrowRight className="
              transition duration-300
              group-hover:translate-x-1
            " />

          </a>

        </motion.div>

      </div>

    </section>
  )
}

export default CTA