import "../Headings/Headings.css";

// NEON EFFECT
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
  return (
    <div className="app-headings">
      <h1>TOP KASYNA ONLINE</h1>
      <p>Ranking najlepszych internetowych kasyn z bonusami powitalnymi</p>
    </div>
  );
}

export default Headings;
