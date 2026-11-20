import './MyTeamApp.css'
import phones from './assets/phones.png'
import qr from '../footer/assets/qr.png'
import appStore from '../footer/assets/appstore.png'
import googlePlay from '../footer/assets/googleplay.png'

export default function MyTeamApp() {
  return (
    <section className="ait-myteam">
      <div className="ait-container ait-myteam__inner">
        <div className="ait-myteam__text">
          <h2>Հավելված My Team</h2>
          <p>Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
          <p>Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
          <div className="ait-myteam__stores">
            <img className="ait-myteam__qr" src={qr} alt="QR code" />
            <div>
              <a href="#"><img src={appStore} alt="Download on the App Store" /></a>
              <a href="#"><img src={googlePlay} alt="Get it on Google Play" /></a>
            </div>
          </div>
        </div>
        <img className="ait-myteam__phones" src={phones} alt="" />
      </div>
    </section>
  )
}
