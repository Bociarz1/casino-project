import "../Headings/Headings.css";

import { TbLicense } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

// neon-effect
const signs = document.querySelectorAll("div.app-headings h1");
const randomIn = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const mixupInterval = (el: any) => {
  const ms = randomIn(2000, 4000);
  el.style.setProperty("--interval", `${ms}ms`);
};
signs.forEach((el) => {
  mixupInterval(el);
  el.addEventListener("webkitAnimationIteration", () => {
    mixupInterval(el);
  });
});

function Headings() {
  const date = new Date();
  const min = String(date.getMinutes());
  const hh = String(date.getHours());
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const modifiedDate = `${dd}-${mm}-${yyyy}`;

  const pageViews = (hh: string, min: string) => {
    const a = parseInt(hh);
    const b = parseInt(min);
    return Math.floor((a / 4) * 100 + b * 1.6);
  };

  return (
    <div className="app-headings">
      <h1>RANKING INTERNETOWYCH KASYN</h1>
      <div className="app-headings-features">
        <span>
          <TbLicense /> Kasyna z licencją
        </span>
        <span>
          <AiOutlineMobile /> Mobile friendly
        </span>
        <span>
          <MdDateRange /> Ostatni update: <div>{modifiedDate}</div>
        </span>
        <span>
          <BsPerson /> Odwiedzin dzisiaj: {pageViews(hh, min)}
        </span>
      </div>
    </div>
  );
}

export default Headings;
