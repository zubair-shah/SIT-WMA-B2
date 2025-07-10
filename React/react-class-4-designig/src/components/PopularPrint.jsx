import React from 'react'

function PopularPrint() {
  return (
    <div class="stripe">
      <section id="popular">
        <h2>Popular Prints</h2>
        <ul>
          <li class="wow animate__animated  animate__fadeInLeft">
            <figure class="color8">
              <img src="./assets/img/popular/fork-it-up.jpg" alt="Pop Fork It Up" />
              <figcaption>
                <a href="#">Fork It Up</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color7 wow animate__animated animate__fadeInUp ">
              <img src="./assets/img/popular/eyeing-you.jpg" alt="Eyeing You" />
              <figcaption>
                <a href="#">Eyeing You</a>
              </figcaption>
            </figure>
          </li>
          <li class="tablet-card-3 wow animate__animated  animate__fadeInRight">
            <figure class="color4">
              <img src="./assets/img/popular/lets-scoot.jpg" alt="lets-scoot" />
              <figcaption>
                <a href="#">Lets Scoot</a>
              </figcaption>
            </figure>
          </li>
        </ul>

      </section>
    </div>
  )
}

export default PopularPrint