import Clock from "./components/Clock";
import ButtonsControl from "./components/ButtonsControl";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <Clock />
        <ButtonsControl />
      </section>
    </>
  );
}

export default App;
