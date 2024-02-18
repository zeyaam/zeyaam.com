import "./App.scss";
import "./animation.scss";
import { Routes, Route } from "react-router-dom";
import { ComingSoon } from "./pages/comingSoon/comingSoon";
// import { HomePage } from "./components/homePage/homePage";

function App() {
  document.title = "Zeyaam Shahid";

  // const bodyFiller = [...Array(10).keys()].map(e => (
  //   <div className='filler-element'>Some element</div>
  // ))

  return (
    <>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
