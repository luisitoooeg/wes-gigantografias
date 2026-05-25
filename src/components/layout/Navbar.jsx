import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import logo from "@/assets/icons/logo-wes-8.png"


function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  const [hidden, setHidden] = useState(false)

  useEffect(() => {

    let lastScroll = 0

    const handleScroll = () => {

      const currentScroll = window.scrollY

      setScrolled(currentScroll > 40)

      if (currentScroll > lastScroll && currentScroll > 200) {

        setHidden(true)

      } else {

        setHidden(false)

      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])
const [mobileMenu, setMobileMenu] = useState(false)
  return (

    <motion.header

      initial={{ y: -100 }}

      animate={{
        y: hidden ? -120 : 0,
      }}

      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}

      className="
        fixed left-0 top-0 z-50
        w-full
      "
    >

      <div className="mx-auto max-w-7xl px-6 pt-6">

        <div
          className={`
            flex items-center justify-between
            rounded-full
            border
            px-4 py-3 md:px-6 md:py-4
            transition-all duration-500

            ${scrolled
              ? `
                border-white/10
                bg-black/40
                backdrop-blur-2xl
                shadow-[0_0_50px_rgba(0,255,255,0.08)]
              `
              : `
                border-transparent
                bg-transparent
              `
            }
          `}
        >

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <img
  src={logo}
  alt="Wes Gigantografías"
  className="h-14 w-auto object-contain"
/>

            <div className="hidden md:block">

  <h1 className="text-sm font-black tracking-[3px]">
    WES
  </h1>

  <p className="text-sm font-black tracking-[3px]">
    GIGANTOGRAFÍAS
  </p>

</div>

          </div>
          <button
  onClick={() => setMobileMenu(!mobileMenu)}
  className="
    relative flex h-12 w-12 md:hidden
  items-center justify-center
  rounded-full
  border border-white/10
  bg-white/5
  backdrop-blur-xl
  "
>

  <span
    className={`
      absolute h-[2px] w-7 bg-white rounded-full
      transition-all duration-300 ease-in-out

      ${mobileMenu
        ? "rotate-45"
        : "-translate-y-2"}
    `}
  />

  <span
    className={`
      absolute h-[2px] w-7 bg-white rounded-full
      transition-all duration-300 ease-in-out

      ${mobileMenu
        ? "opacity-0"
        : "opacity-100"}
    `}
  />

  <span
    className={`
      absolute h-[2px] w-7 bg-white rounded-full
      transition-all duration-300 ease-in-out

      ${mobileMenu
        ? "-rotate-45"
        : "translate-y-2"}
    `}
  />

</button>

          {/* NAV */}

          <nav className="hidden md:flex items-center gap-10">

            {[
              "Inicio",
              "Servicios",
              "Portfolio",
              "Nosotros",
              "Contacto",
            ].map((item) => (

              <a
                key={item}
                href="#"
                className="
                  relative text-sm font-semibold
                  uppercase tracking-[2px]
                  text-white/70
                  transition duration-300
                  hover:text-cyan-400
                "
              >

                {item}

              </a>

            ))}

          </nav>

          {mobileMenu && (
  <div className="absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 md:hidden">
    
    <div className="flex flex-col px-6 py-8 gap-6 text-white font-bold tracking-wide">

      <a href="#inicio">INICIO</a>

      <a href="#servicios">SERVICIOS</a>

      <a href="#portfolio">PORTFOLIO</a>

      <a href="#nosotros">NOSOTROS</a>

      <a href="#contacto">CONTACTO</a>

      <button className="mt-4 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 font-black text-black">
        Presupuesto
      </button>

    </div>

  </div>
)}

          {/* CTA */}

        <a
  href="https://wa.me/5490000000000"
  className="
    hidden md:flex
    items-center justify-center
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    to-violet-500
    px-6 py-3
    text-sm font-black
    text-black
    transition duration-300
    hover:scale-105
  "
>

            Presupuesto

          </a>

        </div>

      </div>

    </motion.header>
  )
}

export default Navbar