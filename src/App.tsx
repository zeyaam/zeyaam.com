import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { Fragments } from "./pages/fragments/Fragments";

function App() {
  document.title = "Zeyaam Shahid";

  // const bodyFiller = [...Array(10).keys()].map(e => (
  //   <div className='filler-element'>Some element</div>
  // ))

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fragments" element={<Fragments />} />
      </Routes>
    </>
  );
}

export default App;
