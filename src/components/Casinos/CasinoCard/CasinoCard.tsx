import '../CasinoCard/CasinoCard.css'
import Rating from '@mui/material/Rating'
import { Visa } from 'react-pay-icons'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css';

type CasinoCardProps = {
  id: string
  name: string
  url: string
}

const contentStyle = { background: '#fff', width: '60%', height: '40%' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { display: 'none' };

const paymentIconStyles = {
  margin: '2%',
  width: '80%',
}

const handleClick = (url: string) => {
  window.open(url)
}

function CasinoCard({ id, name, url }: CasinoCardProps) {
  const PopupComponent = () => (
    <Popup
      trigger={<button> ODKRYJ BONUS POWITALNY</button>}
      position="top center"
        {...{overlayStyle, contentStyle, arrowStyle}}>
      <div>Popup content here !!</div>
    </Popup>
  )
  return (
    <li className="app-casinos-casinocard">
      <img
        src="../../../../public/casino-logo--example.webp"
        className="app-casinos-casinocard-avatar"
      />
      <div className="app-casinos-casinocard-stars">
        <Rating name="read-only" value={2.5} precision={0.5} readOnly />
      </div>
      <div className="app-casinos-casinocard-popup">
        <PopupComponent />
      </div>
      <div className="app-casinos-casinocard-payments">
        <Visa style={paymentIconStyles} />
        <Visa style={paymentIconStyles} />
        <Visa style={paymentIconStyles} />
        <Visa style={paymentIconStyles} />
      </div>
    </li>
  )
}

export default CasinoCard
