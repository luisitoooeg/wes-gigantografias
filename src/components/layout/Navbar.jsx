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
            px-6 py-4
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

            <div>

              <h1 className="text-sm font-black tracking-[3px]">

                WES

              </h1>

              <p className="text-sm font-black tracking-[3px]">

                GIGANTOGRAFÍAS

              </p>

            </div>

          </div>

          {/* NAV */}

          <nav className="hidden items-center gap-10 lg:flex">

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

          {/* CTA */}

          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            className="
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

            Cotizar

          </a>

        </div>

      </div>

    </motion.header>
  )
}

export default Navbar