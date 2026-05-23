import { useState } from "react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"


import { portfolio } from "@/data/portfolio"

function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null)

  return (

    <section className="relative py-32">

      {/* GLOW */}

      <div className="
        absolute left-1/2 top-0
        h-[500] w-[500]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[140px]
      " />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold tracking-[8px] text-cyan-400">
            PORTFOLIO
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">

            Trabajos Que
            <br />

            <span className="
              bg-gradient-to-r
              from-cyan-400
              to-violet-500
              bg-clip-text
              text-transparent
            ">
              Generan Impacto
            </span>

          </h2>

        </div>

        {/* GRID */}

        <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">

          {portfolio.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(item)}
              className="
                group relative cursor-pointer overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                break-inside-avoid
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
  src={item.image}
  alt={item.title}
  className="
    h-full
    w-full
    object-cover
    transition duration-700
    group-hover:scale-110
  "
/>

              </div>

              {/* OVERLAY */}

             <div
  className="
    absolute inset-0
    bg-gradient-to-t
    from-black
    via-black/20
    to-transparent
  "
/>

              {/* CONTENT */}

              <div className="absolute bottom-0 left-0 z-10 p-8">

  <p className="mb-3 text-sm tracking-[4px] text-cyan-400">
    {item.category}
  </p>

  <h3 className="text-4xl font-black">
    {item.title}
  </h3>

</div>
<div
  className="
    absolute inset-0
    opacity-0
    transition duration-500
    group-hover:opacity-100
  "
>

  <div
    className="
      absolute -bottom-10 left-1/2
      h-40 w-40
      -translate-x-1/2
      rounded-full
      bg-cyan-400/30
      blur-3xl
    "
  />

</div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >

        <DialogContent
  className="
     w-full
    sm:max-w-[1400px]
    border-white/10
    bg-[#02040b]
    p-0
    text-white
    overflow-hidden
  "
>
          <DialogTitle className="hidden">
  Proyecto
</DialogTitle>

<DialogDescription className="hidden">
  Información del proyecto seleccionado
</DialogDescription>

          {selectedProject && (

            <div className="
  grid
  items-center
  lg:grid-cols-[1.5fr_0.9fr]
">

              {/* IMAGE */}

              <div className="
  relative
  h-[350px]
  lg:h-[750px]
">

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                " />

              </div>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-10 lg:p-16">

                <p className="
                  mb-4 text-sm font-bold
                  tracking-[5px]
                  text-cyan-400
                ">
                  {selectedProject.category}
                </p>

                <h3 className="mb-6 text-5xl font-black">
                  {selectedProject.title}
                </h3>

                <p className="mb-6 text-white/60">

                  Cliente:
                  {" "}

                  <span className="text-white">
                    {selectedProject.client}
                  </span>

                </p>

                <p className="
                  mb-10 text-lg leading-relaxed
                  text-white/70
                ">
                  {selectedProject.description}
                </p>

                {/* CTA */}

                <a
                  href="https://wa.me/5490000000000"
                  target="_blank"
                  className="
                    inline-flex w-fit items-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-400
                    to-violet-500
                    px-8 py-5
                    font-black text-black
                    transition duration-300
                    hover:scale-105
                  "
                >

                  Solicitar Proyecto Similar

                </a>

              </div>

            </div>

          )}

        </DialogContent>

      </Dialog>

    </section>
  )
}

export default Portfolio