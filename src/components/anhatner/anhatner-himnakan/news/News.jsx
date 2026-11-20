import { useState } from 'react'
import './News.css'
import n1 from './assets/news-1.png'
import n2 from './assets/news-2.png'
import n3 from './assets/news-3.png'

const items = [
  { img: n1, date: '13 November', title: '«COP17-ի կապն ամենաբացառիկներից մեկն էր, որ երբևէ ունեցել ենք». Team-ի ծառայությունների որակը բարձր է...' },
  { img: n2, date: '10 November', title: 'Team-ի արդեն 500-րդ աշխատակիցն է արժանացել արտերկրյա ճամփորդության. գլխավոր...' },
  { img: n3, date: '03 November', title: 'Արդյունավետ գործընկերություն հանուն բնության. Team-ը COP17-ում պանելային քննարկում էր...' },
]
const DOTS = 7

export default function News() {
  const [active, setActive] = useState(0)
  return (
    <section className="ait-news">
      <div className="ait-container">
        <h2 className="ait-news__title">Լրահոս</h2>
        <div className="ait-news__grid">
          {items.map((n) => (
            <a key={n.date} href="#" className="ait-news__card">
              <img src={n.img} alt="" />
              <div className="ait-news__body">
                <time>{n.date}</time>
                <h3>{n.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="ait-news__dots">
          {Array.from({ length: DOTS }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Page ${i + 1}`}
              className={i === active ? 'is-active' : ''}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <div className="ait-news__more">
          <hr />
          <a href="#">Տեսնել ավելին</a>
        </div>
      </div>
    </section>
  )
}
