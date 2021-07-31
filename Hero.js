import tracking from "../../assets/tracking4.jpg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
      <div className="content">
        <div className="intro">
          <h1>Life Tracker</h1>
          <p>
            Helping you take back control of your world.
          </p>
        </div>

        <div className="media">
          <img src="https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2492&q=80" height="340"/>
        </div>
      </div>
    </div>
  )
}
