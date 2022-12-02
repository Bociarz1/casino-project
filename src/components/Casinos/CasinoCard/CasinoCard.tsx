import "../CasinoCard/CasinoCard.css";
import Rating from "@mui/material/Rating";
import { FiGift } from "react-icons/fi";
import { MdStarHalf } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
import {
  Visa,
  Mastercard,
  Maestro,
  Blik,
  Cirrus,
  Bitcoin,
  Usdt,
  Eth,
  Skrill,
  Trustly,
  Applepay,
  Googlepay,
  Paysafecard,
} from "react-pay-icons";

import PaymentIcon from "react-payment-icons";

const iconStyle = {
  height: '2vh'
}

type CasinoCardProps = {
  id: string;
  name: string;
  url: string;
  imgSource: string;
  stars: number;
  starsVoters: number;
  bonus: string[];
  payment: string[];
};

const PaymentMethod = (method: string) => {
  switch (method) {
    case "Visa":
      return <img src='../../../../public/payment-icons/payment-visa.png' style={iconStyle}/>;
      break;
    case "Mastercard":
      return <img src='../../../../public/payment-icons/payment-mastercard.png' style={iconStyle}/>;
      break;
    case "Maestro":
      return <img src='../../../../public/payment-icons/payment-maestro.png' style={iconStyle}/>;
      break;
    case "Blik":
      return <img src='../../../../public/payment-icons/payment-blik.png' style={iconStyle}/>;
      break;
    case "Cirrus":
      return <img src='../../../../public/payment-icons/payment-cirrus.png' style={iconStyle}/>;
      break;
    case "Bitcoin":
      return <img src='../../../../public/payment-icons/payment-btc.png' style={iconStyle}/>;
      break;
    case "Usdt":
    return <img src='../../../../public/payment-icons/payment-usdt.png' style={iconStyle}/>;
    break;
    case "Eth":
      return <img src='../../../../public/payment-icons/payment-eth.png' style={iconStyle}/>;
      break;
    case "Skrill":
      return <img src='../../../../public/payment-icons/payment-skrill.png' style={iconStyle}/>;
      break;
    case "Trustly":
      return <img src='../../../../public/payment-icons/payment-trustly.png' style={iconStyle}/>;
      break;
    case "ApplePay":
      return <img src='../../../../public/payment-icons/payment-applepay.webp' style={iconStyle}/>;
      break;
    case "GooglePay":
      return <img src='../../../../public/payment-icons/payment-googlepay.png' style={iconStyle}/>;
      break;
    case "Paysafecard":
      return <img src='../../../../public/payment-icons/payment-paysafecard.png' style={iconStyle}/>;
      break;
      case "BankTransfer":
      return <img src='../../../../public/payment-icons/payment-banktransfer.png' style={iconStyle}/>;
      break;
      case "Revolut":
      return <img src='../../../../public/payment-icons/payment-revolut.png' style={iconStyle}/>;
      break;
      case "ecoPayz":
      return <img src='../../../../public/payment-icons/payment-ecopayz.png' style={iconStyle}/>;
      break;
      case "eZeeWallet":
      return <img src='../../../../public/payment-icons/payment-eZeeWallet.png' style={iconStyle}/>
      break;
      case "Jeton":
      return <img src='../../../../public/payment-icons/payment-Jeton.png' style={iconStyle}/>;
      break;
      case "Neosurf":
      return <img src='../../../../public/payment-icons/payment-Neosurf.png' style={iconStyle}/>;
      break;
      case "Neteller":
      return <img src='../../../../public/payment-icons/payment-Neteller.png' style={iconStyle}/>;
      break;
    default:
      break;
  }
};

const handleClick = (url: string) => {
  window.open(url);
};

function CasinoCard(props: { data: CasinoCardProps }) {
  const { id, name, url, imgSource, stars, starsVoters, bonus, payment } =
    props.data;
  return (
    <li className="app-casinos-casinocard">
      <div className="app-casinos-casinocard-avatar">
        <img src={imgSource} />
      </div>

      <div className="app-casinos-casinocard-info">
        <div className="app-casinos-casinocard-info-stars">
          <div className="app-casinos-casinocard-info-stars-heading">
            <MdStarHalf />
            <span>OCENY UŻYTKOWNIKÓW</span>
          </div>
          <div className="app-casinos-casinocard-info-stars-main">
            <Rating
              name="read-only"
              value={stars}
              precision={0.5}
              readOnly
              style={{
                transform: "scale(1.3)",
                minWidth: "50%",
                maxWidth: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <span className="app-casinos-casinocard-info-stars-main-rating">
              {stars}/5 ({starsVoters} głosów)
            </span>
          </div>
        </div>
        <div className="app-casinos-casinocard-info-bonus">
          <div className="app-casinos-casinocard-info-bonus-heading">
            <FiGift />
            <span>BONUS POWITALNY</span>
          </div>
          <div className="app-casinos-casinocard-info-bonus-main">
            <ul>
              {bonus.map((item) => (
                <li key={bonus.indexOf(item)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app-casinos-casinocard-info-payments">
          <div className="app-casinos-casinocard-info-payments-heading">
            <AiOutlineDollarCircle />
            <span>METODY PŁATNOŚCI</span>
          </div>
          <div className="app-casinos-casinocard-info-payments-icons">
            <div id='first'>
            {payment.map((item) => {
              return (
                  <div key={payment.indexOf(item)}>{PaymentMethod(item)}</div>
              );
            })}
            </div>
          </div>
        </div>
        <div
          onClick={() => handleClick(url)}
          className="app-casinos-casinocard-button">
          ODBIERZ BONUS
        </div>
      </div>
    </li>
  );
}

export default CasinoCard;
