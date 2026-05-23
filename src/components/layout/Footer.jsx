import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

import { FaInstagram } from "react-icons/fa"

function Footer() {

  return (

    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-24">

      {/* GLOW */}

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-4">

              <div className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-gradient-to-r from-cyan-400 to-violet-500
                font-black text-black
              ">
                W
              </div>

              <h2 className="text-3xl font-black tracking-[4px]">
                WES
              </h2>

            </div>

            <p className="max-w-xl text-lg leading-relaxed text-white/60">

              Especialistas en comunicación visual,
              gigantografías, Neón Led,
              ploteos y soluciones gráficas premium
              para marcas, negocios y empresas.

            </p>

            {/* SOCIALS */}

            <div className="mt-8 flex gap-4">

              {[FaInstagram].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    transition duration-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                  "
                >

                  <Icon className="h-6 w-6" />

                </a>

              ))}

            </div>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="mb-6 text-xl font-black">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <a href="#" className="transition hover:text-cyan-400">
                Inicio
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Servicios
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Portfolio
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Nosotros
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Contacto
              </a>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="mb-6 text-xl font-black">
              Contacto
            </h3>

            <div className="space-y-5 text-white/60">

              <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />

                <p>
                  Santa Fe, Argentina
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Phone className="mt-1 h-5 w-5 text-cyan-400" />

                <p>
                  +54 9 342 XXXX XXX
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Mail className="mt-1 h-5 w-5 text-cyan-400" />

                <p>
                  info@wes.com.ar
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="
          mt-20 flex flex-col items-center justify-between
          gap-6 border-t border-white/10 pt-8
          text-sm text-white/40
          md:flex-row
        ">

          <p>
            © 2026 WES Gigantografías. Todos los derechos reservados.
          </p>

          <p>
            Diseño & Desarrollo Premium
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer