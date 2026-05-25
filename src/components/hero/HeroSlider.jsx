import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

import banner1 from "@/assets/images/hero/banner1.webp"
import banner2 from "@/assets/images/hero/banner2.webp"
import banner3 from "@/assets/images/hero/banner3.webp"

const slides = [
  banner1,
  banner2,
  banner3,
]

function HeroSlider() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[52vh] w-full"
         speed={2400}
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div className="relative h-full w-full">

  <img
    src={slide}
    alt=""
    className="h-full w-full object-cover"
  />

  {/* Overlay suave */}

  <div className="absolute inset-0 " />

  {/* Degradado superior */}

  <div
    className="
      absolute inset-x-0 top-0
      h-[220px]
      bg-gradient-to-b
      from-[#02040b]
      via-[#02040b]/70
      to-transparent
    "
  />

  {/* Degradado inferior */}

  <div
    className="
      absolute inset-x-0 bottom-0
      h-[450px]
      bg-gradient-to-b
      from-transparent
      via-black/20
      to-[#02040b]
    "
  />

</div>

          </SwiperSlide>

        ))}

      </Swiper>

      <div className="
        absolute bottom-0 left-0 right-0
        h-64
        bg-gradient-to-b
        from-transparent
        to-[#02040b]
      " />

    </div>
  )
}

export default HeroSlider