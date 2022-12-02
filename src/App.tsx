import "./App.css";
import Background from "./components/Background/Background";
import Headings from "./components/Headings/Headings";
import Casinos from "./components/Casinos/Casinos";
import BottomInfo from "./components/BottomInfo/BottomInfo";

function App() {
  return (
    <div className="app">
      <Background />
      <Headings />
      <Casinos />
      <BottomInfo/>
    </div>
  );
}

export default App;

