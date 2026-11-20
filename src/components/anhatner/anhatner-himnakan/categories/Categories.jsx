import './Categories.css'
import mobile from './assets/mobile.png'
import fixed from './assets/fixed.png'
import apps from './assets/apps.png'
import tv from './assets/tv.png'

const cards = [
  { title: 'ԲՋՋԱՅԻՆ ԿԱՊ', img: mobile, cls: 'wide-a' },
  { title: 'ՖԻՔՍՎԱԾ ԿԱՊ', img: fixed, cls: 'wide-b' },
  { title: 'ՀԱՎԵԼՎԱԾՆԵՐ', img: apps, cls: 'wide-c' },
  { title: 'ԻՆՏԵՐՆԵՏ ԵՎ TV', img: tv, cls: 'wide-d' },
]

export default function Categories() {
  return (
    <section className="ait-categories">
      <div className="ait-container ait-categories__grid">
        {cards.map((c) => (
          <a key={c.title} href="#" className={`ait-categories__card ait-categories__card--${c.cls}`}>
            <h2>{c.title}</h2>
            <span className="ait-categories__more">
              Ավելին
              <svg viewBox="0 0 8 12" width="6" height="10" fill="none" stroke="#f04d4d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m1.5 1 5 5-5 5" />
              </svg>
            </span>
            <img src={c.img} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}
