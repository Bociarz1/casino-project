import "../CasinoCard/CasinoCard.css";
import Rating from "@mui/material/Rating";
import { FiGift } from "react-icons/fi";
import { MdStarHalf } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Visa, Sepa, Rede } from "react-pay-icons";

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

const paymentIconStyles = {
  minWidth: "5vh",
};

const PaymentMethod = (method: string) => {
  switch (method) {
    case "Visa":
      return <Visa style={paymentIconStyles}/>;
      break;
    case "Sepa":
      return <Sepa style={paymentIconStyles}/>;
      break;
    case "Rede":
      return <Rede style={paymentIconStyles}/>;
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
        <img src="../../../../public/spin-city.png" />
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
            {payment.map((item) => {
              return <div key={payment.indexOf(item)}>{PaymentMethod(item)}
              </div>;
            })}
          </div>
        </div>
        <div onClick={() => handleClick(url)}className="app-casinos-casinocard-button">ODBIERZ BONUS</div>
      </div>
    </li>
  );
}

export default CasinoCard;
