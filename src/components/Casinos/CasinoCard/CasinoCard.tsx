import "../CasinoCard/CasinoCard.css";

type CasinoCardProps = {
  id: string;
  name: string;
  url: string;
};

const handleClick = (url: string) => {
  window.open(url);
};

function CasinoCard({ id, name, url }: CasinoCardProps) {
  return (
    <li className="app-casinos-casinocard" onClick={() => handleClick(url)}>
      <section className="avatar-button">
        <div className="app-casinos-casinocard-avatar"></div>
        <div className="app-casinos-casinocard-button"></div>
      </section>
      <section className="grade-bonus">
        <div className="app-casinos-casinocard-grade"></div>
        <div className="app-casinos-casinocard-bonus"></div>
      </section>
      <div className="app-casinos-casinocard-payments">
        <h1>{name}</h1>
        <p>kliknij tutaj, żeby odebrać bonus powitalny</p>
        <p>TOP {id}</p>
      </div>
    </li>
  );
}

export default CasinoCard;
