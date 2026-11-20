import './Header.css'
import logo from './assets/logo.png'
import eshop from './assets/eshop.png'
import cartBtn from './assets/cart-btn.png'

const tabs = ['Անհատներին', 'Բիզնես']
const navLinks = ['Սակագներ', 'Ինտերնետ', 'Ծառայություններ', 'Ռոումինգ', 'Ցանց խանութ', 'Առաջարկներ', 'Օգնություն']

export default function Header() {
  return (
    <header className="ait-header">
      <div className="ait-header__top">
        <div className="ait-container ait-header__top-inner">
          <ul className="ait-header__tabs">
            {tabs.map((t, i) => (
              <li key={t}>
                <a href="#" className={i === 0 ? 'is-active' : ''}>{t}</a>
              </li>
            ))}
            <li>
              <a href="#" className="ait-header__eshop">
                <img src={eshop} alt="" />
                E-shop
              </a>
            </li>
          </ul>

          <ul className="ait-header__tools">
            <li>
              <button type="button" aria-label="Search" className="ait-header__icon-btn">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="m16 16 5 5" />
                </svg>
              </button>
            </li>
            <li><a href="#" className="ait-header__lang is-current">Հայ</a></li>
            <li><a href="#" className="ait-header__lang">Рус</a></li>
            <li><a href="#" className="ait-header__lang">Eng</a></li>
            <li>
              <a href="#" className="ait-header__account">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                Անձնական գրասենյակ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ait-header__nav">
        <div className="ait-container ait-header__nav-inner">
          <a href="#" className="ait-header__logo" aria-label="Team Telecom Armenia">
            <img src={logo} alt="Team Telecom Armenia" />
          </a>
          <nav aria-label="Main">
            <ul className="ait-header__links">
              {navLinks.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </nav>
          <a href="#" className="ait-header__cart" aria-label="Payments">
            <img src={cartBtn} alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}
