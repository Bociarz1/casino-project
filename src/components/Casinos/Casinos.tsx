import "../Casinos/Casinos.css";
import { dataCasinos } from "../../../public/data-casinos";
import CasinoCard from "./CasinoCard/CasinoCard";

function Casinos() {
  return (
    <ul className="app-casinos">
      {dataCasinos.map((item) => (
        <CasinoCard key={item.id} id={item.id} name={item.name} url={item.url} />
      ))}
    </ul>
  );
}

export default Casinos;
