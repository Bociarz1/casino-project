import "../Casinos/Casinos.css";
import { dataCasinos } from "../../../public/data-casinos";
import CasinoCard from "./CasinoCard/CasinoCard";

function Casinos() {
  return (
    <ul className="app-casinos">
      {dataCasinos.map((item) => (
        <CasinoCard data={item} key={item.id}/>
      ))}
    </ul>
  );
}

export default Casinos;
