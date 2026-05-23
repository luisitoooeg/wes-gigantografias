import { motion } from "framer-motion"
import { features } from "@/data/features"

function WhyChooseUs() {

  return (

    <section id="why" className="relative py-32">

      {/* GLOW */}

      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold tracking-[8px] text-cyan-400">
            WES GIGANTOGRAFÍAS
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">

            Líderes En
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Comunicación Visual
            </span>

          </h2>

        </div>

        {/* GRID */}

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon

            return (

              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-xl
                "
              >

                {/* ICON */}

                <div className="
                  mb-8 flex h-20 w-20 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r from-cyan-400 to-violet-500
                  shadow-[0_0_35px_rgba(0,255,255,0.25)]
                ">

                  <Icon className="h-10 w-10 text-black" />

                </div>

                {/* TITLE */}

                <h3 className="mb-4 text-3xl font-black">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="max-w-md leading-relaxed text-white/70">
                  {feature.description}
                </p>

                {/* HOVER GLOW */}

                <div className="
                  absolute inset-0 opacity-0
                  transition duration-500
                  group-hover:opacity-100
                  bg-cyan-400/5
                " />

              </motion.div>

            )
          })}

        </div>

        {/* STATS */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-6xl font-black text-cyan-400">
              +10
            </h3>

            <p className="mt-3 text-sm tracking-[4px] text-white/50">
              AÑOS DE EXPERIENCIA
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-black text-cyan-400">
              +1200
            </h3>

            <p className="mt-3 text-sm tracking-[4px] text-white/50">
              PROYECTOS REALIZADOS
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-black text-cyan-400">
              +500
            </h3>

            <p className="mt-3 text-sm tracking-[4px] text-white/50">
              CLIENTES FELICES
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs