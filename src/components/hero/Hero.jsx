import { Button } from "@/components/ui/button"

import HeroSlider from "./HeroSlider"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

function Hero() {

  // PARALLAX

  const { scrollY } = useScroll()

  const yBg = useTransform(scrollY, [0, 1000], [0, 300])

  const yText = useTransform(scrollY, [0, 1000], [0, 150])

  const opacity = useTransform(scrollY, [0, 500], [1, 0.3])

  return (

    <section className="relative flex min-h-[120vh] items-center justify-center overflow-hidden px-6 pt-40">

      {/* VIDEO BACKGROUND */}

      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0"
      >

       <HeroSlider />

      </motion.div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-trasparent" />

      {/* GLOW EFFECTS */}

      <div className="
        absolute -left-40 bottom-0
        h-[500px] w-[500px]
        animate-pulse
        rounded-full
        bg-cyan-400/30
        blur-[140px]
      " />

      <div className="
        absolute -right-40 top-0
        h-[500px] w-[500px]
        animate-pulse
        rounded-full
        bg-violet-500/356
        blur-[140px]
      " />

      {/* CONTENT */}

      <motion.div
        style={{
          y: yText,
          opacity,
        }}
        className="relative z-10 mx-auto max-w-7xl -mt-32 text-center "
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-bold tracking-[8px] text-cyan-400"
        >
          Gigantografías Santa Fe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-6xl font-black uppercase leading-none md:text-8xl xl:text-[5rem]"
        >
          Impresión de gigantografías
          <br />

          <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            en Santa Fe Capital
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Todo lo que buscas imprimir en Santa Fe, lo encontrás en WES Gigantografías. Contamos con más de 30 años de trayectoria ayudando a los santafesinos.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >

          <Button className="h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-10 text-base font-black text-black hover:scale-105 hover:opacity-90">
            Solicitar Presupuesto
          </Button>

          <Button
            variant="outline"
            className="h-16 rounded-2xl border-cyan-400/30 bg-transparent px-10 text-base font-bold text-white hover:bg-cyan-400/10"
          >
            Ver Proyectos
          </Button>

        </motion.div>

       

      </motion.div>

    </section>
  )
}

export default Hero