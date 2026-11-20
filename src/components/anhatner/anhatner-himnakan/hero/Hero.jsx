import { useState } from 'react'
import './Hero.css'
import mountain from './assets/mountain.png'

const SLIDES = 12

export default function Hero() {
  const [active, setActive] = useState(2)
  return (
    <section className="ait-hero" aria-roledescription="carousel">
      <div className="ait-container ait-hero__inner">
        <div className="ait-hero__text">
          <h1>Կայուն զարգացում՝</h1>
          <p>չափելի արդյունքներով</p>
          <a href="#" className="ait-btn">Ավելին</a>
        </div>
        <img className="ait-hero__img" src={mountain} alt="" />
        <div className="ait-hero__dots">
          {Array.from({ length: SLIDES }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active}
              className={i === active ? 'is-active' : ''}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
