import './JoinBanner.css'
import chat from './assets/chat.png'

export default function JoinBanner() {
  return (
    <section className="ait-join">
      <div className="ait-container ait-join__inner">
        <h2>ԴԱՐՁԵՔ TEAM ԲԱԺԱՆՈՐԴ</h2>
        <p>Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:</p>
        <a href="#" className="ait-btn ait-join__btn">Միանալ</a>
      </div>
      <button type="button" className="ait-join__chat" aria-label="Chat">
        <img src={chat} alt="" />
      </button>
    </section>
  )
}
