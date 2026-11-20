import './Footer.css'
import logo from './assets/logo.png'
import qr from './assets/qr.png'
import appStore from './assets/appstore.png'
import googlePlay from './assets/googleplay.png'
import iso27001 from './assets/iso-27001.png'
import iso9001 from './assets/iso-9001.png'
import iso27701 from './assets/iso-27701.png'

const aboutLinks = [
  'Մեր մասին',
  'Կապի թանգարան',
  'Նորություններ',
  'Աշխատանք Տելեկոմ Արմենիայում',
  'Արդյունքներ և հաշվետվություններ',
  'Գործարար էթիկա և Կոմպլայենս',
  'Կայուն զարգացում',
  'Բաժնետերերին',
]

const infoLinks = [
  'Ընդհանուր դրույթներ և պայմաններ',
  'Անվտանգություն',
  'E-shop պայմաններ',
  'Ապառիկ վճարների պայմաններ',
  'Առաքման պայմաններ',
  'Վճարների և սպասարկման\nկենտրոններ',
  'Ծածկույթ',
  'Բջջային ցանցի ծածկույթ',
  'Team ինտերնետի հասանելիության\nծածկույթ',
  'Օգտակար փաստաթղթեր',
  'Գործընկերներին և\nմատակարարներին',
  'Գաղտնիության քաղաքականություն',
  'ՀՀ մարզերի կոդեր',
]

const appLinks = ['TeamTV', 'My Team', 'TeamPay', 'Team Energy']

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const IconBuilding = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...stroke}>
    <path d="M3 45V5h24v14" />
    <path d="M3 45h14V33h6" />
    <path d="M17 45V33" />
    <rect x="9" y="10" width="4" height="4" strokeWidth="0" fill="currentColor" />
    <rect x="17" y="10" width="4" height="4" strokeWidth="0" fill="currentColor" />
    <rect x="9" y="18" width="4" height="4" strokeWidth="0" fill="currentColor" />
    <rect x="17" y="18" width="4" height="4" strokeWidth="0" fill="currentColor" />
    <path d="M37 45s-9-8.5-9-15a9 9 0 0 1 18 0c0 6.5-9 15-9 15Z" transform="translate(-1 -3)" />
    <circle cx="36" cy="27" r="3.2" />
  </svg>
)

const IconInfo = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...stroke}>
    <circle cx="24" cy="24" r="21" />
    <path d="M24 21v13" />
    <circle cx="24" cy="14.5" r="1.2" fill="currentColor" />
  </svg>
)

const IconGrid = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" {...stroke}>
    <rect x="3" y="3" width="16" height="16" rx="4" />
    <rect x="29" y="3" width="16" height="16" rx="4" />
    <rect x="3" y="29" width="16" height="16" rx="4" />
    <rect x="29" y="29" width="16" height="16" rx="4" />
  </svg>
)

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M14 8V6.200c0-.800.2-1.2 1.4-1.200H17V2h-2.600C11.3 2 10 3.7 10 6v2H7.500v3H10v11h4V11h2.700l.4-3H14Z" />
  </svg>
)

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const IconYoutube = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
    <path d="M22 8.200a3 3 0 0 0-2.1-2.100C18 5.6 12 5.6 12 5.600s-6 0-7.9.500A3 3 0 0 0 2 8.200C1.5 10 1.5 12 1.5 12s0 2 .500 3.800a3 3 0 0 0 2.1 2.100c1.9.5 7.9.5 7.9.500s6 0 7.9-.500a3 3 0 0 0 2.1-2.100c.500-1.8.5-3.8.5-3.800s0-2-.500-3.800ZM10 15V9l5.2 3L10 15Z" />
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...stroke} strokeWidth="1.5">
    <path d="M8.4 3.5 6.2 3.200a2 2 0 0 0-2.2 2.300c.900 6.5 6.6 12.3 13.1 13.300a2 2 0 0 0 2.3-2.200l-.300-2.200a1.5 1.5 0 0 0-1.2-1.300l-2.3-.5a1.5 1.5 0 0 0-1.5.5l-.7.900a11 11 0 0 1-4.2-4.300l.9-.7c.400-.300.6-.900.5-1.400l-.5-2.400a1.5 1.5 0 0 0-1.2-1.100Z" transform="rotate(-8 12 12) scale(.95) translate(.5 .5)" />
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...stroke} strokeWidth="1.8">
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3 7 9 6.500L21 7" />
  </svg>
)

function LinkColumn({ icon, title, links, className = '' }) {
  return (
    <nav className={`ait-footer__col ${className}`} aria-label={title}>
      <span className="ait-footer__col-icon">{icon}</span>
      <h3 className="ait-footer__title">{title}</h3>
      <ul className="ait-footer__list">
        {links.map((text) => (
          <li key={text}>
            <a href="#">{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="ait-footer">
      <div className="ait-footer__inner">
        <div className="ait-footer__brand">
          <a href="#" className="ait-footer__logo" aria-label="Team Telecom Armenia">
            <img src={logo} alt="Team Telecom Armenia" />
          </a>

          <ul className="ait-footer__social">
            <li><a href="#" aria-label="Facebook"><IconFacebook /></a></li>
            <li><a href="#" aria-label="Instagram"><IconInstagram /></a></li>
            <li><a href="#" aria-label="YouTube"><IconYoutube /></a></li>
          </ul>

          <ul className="ait-footer__contacts">
            <li>
              <IconPhone />
              <a href="tel:100">100</a>
            </li>
            <li>
              <IconMail />
              <a href="mailto:info@telecomarmenia.am">info@telecomarmenia.am</a>
            </li>
          </ul>

          <div className="ait-footer__apps">
            <img className="ait-footer__qr" src={qr} alt="QR code" />
            <div className="ait-footer__stores">
              <a href="#"><img src={appStore} alt="Download on the App Store" /></a>
              <a href="#"><img src={googlePlay} alt="Get it on Google Play" /></a>
            </div>
          </div>

          <ul className="ait-footer__iso">
            <li><img src={iso27001} alt="ISO/IEC 27001 certified" /></li>
            <li><img src={iso9001} alt="ISO 9001 certified" /></li>
            <li><img src={iso27701} alt="ISO 27701 certified" /></li>
          </ul>
        </div>

        <LinkColumn icon={<IconBuilding />} title="Ընկերության մասին" links={aboutLinks} />
        <LinkColumn
          icon={<IconInfo />}
          title="Տեղեկատվություն"
          links={infoLinks}
          className="ait-footer__col--info"
        />
        <LinkColumn icon={<IconGrid />} title="Team հավելվածներ" links={appLinks} />
      </div>

      <div className="ait-footer__bar">
        © 2026 Տելեկոմ Արմենիա ՓԲԸ։ Բոլոր իրավունքները պաշտպանված են։ Մշակված է Թիմ Սոլյուշն ՓԲԸ կողմից։
      </div>
    </footer>
  )
}
