import {
  Printer,
  MonitorSmartphone,
  PanelsTopLeft,
  Sticker,
  Lightbulb,
  Building2,
} from "lucide-react"

import { motion } from "framer-motion"

import corporeosImg from "@/assets/images/services/corporeos.webp"
import neonImg from "@/assets/images/services/neon.webp"
import ploteoImg from "@/assets/images/services/ploteo_vehicular.webp"
import gigantografiasImg from "@/assets/images/services/gigantografias.webp"

const services = [
  {
    title: "Cartelería",
    subtitle: "Corpóreos · Neón LED",
    image: neonImg,
    link: "/carteleria",
  },

  {
    title: "Ploteos",
    subtitle: "Vehiculares y comerciales",
    image: ploteoImg,
    link: "/ploteos-vehiculares",
  },

  {
    title: "Vinilos",
    subtitle: "Vidrios y paredes",
    image: "/images/services/vinilos.jpg",
    link: "/vinilos",
  },

  {
    title: "Lonas",
    subtitle: "Banners y gran formato",
    image: gigantografiasImg,
    link: "/lonas-y-banners",
  },

  {
    title: "Eventos",
    subtitle: "Gigantografías y gráfica",
    image: "/images/services/eventos.jpg",
    link: "/gigantografias-eventos",
  },
]

function Services() {

  return (

    <section className="relative overflow-hidden px-6 py-40">

      {/* BACKGROUND GLOW */}

      <div className="
        absolute left-1/2 top-1/2
        h-[700px] w-[700px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-cyan-400/5
        blur-[160px]
      " />

      <div className="relative z-10 w-full px-6">

        {/* HEADER */}

        <div className="mb-24 text-center">

          <p className="mb-5 text-sm font-bold tracking-[6px] text-cyan-400">
            SERVICIOS
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">
            Comunicación
            <span className="text-cyan-400">
              {" "}Visual
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60">
            Soluciones visuales modernas para empresas,
            marcas y proyectos que buscan destacar.
          </p>

        </div>

        {/* GRID */}

        <div className="
  grid
  gap-6
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-5
">

          {services.map((service, index) => (

  <motion.a
    key={index}
    href={service.link}

    whileHover={{
      y: -10,
      scale: 1.02,
    }}

    transition={{
      duration: 0.4,
    }}

    className="
      group
      relative
      flex
      h-[650px]
      overflow-hidden
      rounded-[36px]
    "
  >

    {/* IMAGE */}

    <img
      src={service.image}
      alt={service.title}
      className="
        absolute inset-0
        h-full w-full
        object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* OVERLAY */}

    <div className="
      absolute inset-0
      bg-gradient-to-t
      from-black
      via-black/30
      to-black/10
    " />

    {/* GLOW */}

    <div className="
      absolute inset-0
      opacity-0
      transition duration-500
      group-hover:opacity-100
    ">

      <div className="
        absolute bottom-0 left-1/2
        h-40 w-40
        -translate-x-1/2
        rounded-full
        bg-cyan-400/30
        blur-3xl
      " />

    </div>

    {/* CONTENT */}

    <div className="
      relative z-10
      mt-auto
      p-8
    ">

      <p className="
        mb-3
        text-sm
        tracking-[4px]
        text-cyan-400
      ">
        {service.subtitle}
      </p>

      <h3 className="
  wrap-break-words
  text-2xl
  font-black
  uppercase
  leading-none
  2xl:text-4xl
">
        {service.title}
      </h3>

    </div>

  </motion.a>

))}

        </div>

      </div>

    </section>
  )
}

export default Services