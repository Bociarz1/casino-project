import "./App.css";
import Background from "./components/Background/Background";
import Headings from "./components/Headings/Headings";
import Casinos from "./components/Casinos/Casinos";

function App() {
  return (
    <div className="app">
      <Background />
      <Headings />
      <Casinos />
    </div>
  );
}

export default App;

