
import hero1200 from '../assets/img/banner/hero-1200.png'
import hero838 from '../assets/img/banner/hero-838.png'
import hero300 from '../assets/img/banner/hero-300.png'
function Banner() {
  return (
    <section id="hero">
      <picture>
        <source srcset={hero1200} media="(min-width: 839px)" />
        <source srcset={hero838} media="(min-width: 301px)" />
        <img src={hero300} alt="" />
      </picture>
    </section>
  )
}

export default Banner