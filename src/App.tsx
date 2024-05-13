import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bgdiv">
        <img
          alt=""
          src={`${process.env.PUBLIC_URL}/home.jpg`}
          className="animatedbgimg"
          role="banner"
        />
      </div>
      <h1 className="animatedbigtitle">Enjoy Your Coding Journey! </h1>
    </div>
  );
}

export default App;
