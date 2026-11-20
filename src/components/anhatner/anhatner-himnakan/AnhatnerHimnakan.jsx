import Header from './header/Header.jsx'
import Hero from './hero/Hero.jsx'
import Categories from './categories/Categories.jsx'
import JoinBanner from './join-banner/JoinBanner.jsx'
import News from './news/News.jsx'
import MyTeamApp from './my-team-app/MyTeamApp.jsx'
import Footer from './footer'
import './AnhatnerHimnakan.css'

export default function AnhatnerHimnakan() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <JoinBanner />
        <News />
        <MyTeamApp />
      </main>
      <Footer />
    </>
  )
}
