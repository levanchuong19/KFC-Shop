import { Button } from "antd"
import "./index.scss"
function Booking() {
  return (
    <div className="booking">
        <h1>BooK Your Party</h1>
        <div className="chuaA">
            <div className="doi">
            <a href="/bookAParty">Party</a>
            <div className="gach"></div>
            </div>
            <div className="doi">
            <a href="/bookAParty">Big order & catering</a>
            <div className="gach2"></div>
            </div>
        </div>
        <h3>SPICE UP YOUR EVENTS WITH FINGER LICKIN' GOOD FOOD</h3>
        <p>Whatever the occasion, we've got you covered.</p>
        <div className="anh" >
            <img src="https://kfcvn-static.cognizantorderserv.com/images/email/party1.PNG" alt="" />
            <img src="https://kfcvn-static.cognizantorderserv.com/images/email/party2.png" alt="" />
            <img src="https://kfcvn-static.cognizantorderserv.com/images/email/party3.png" alt="" />
            <img src="https://kfcvn-static.cognizantorderserv.com/images/email/party4.png" alt="" />
            <img src="https://kfcvn-static.cognizantorderserv.com/images/email/party5.png" alt="" />
        </div>
        <Button className="buttonBook">BOOK NOW!</Button>
    </div>
  )
}

export default Booking