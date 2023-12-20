import "./App.scss";
import './animation.scss'
import { Routes, Route } from "react-router-dom";

function App() {
  document.title = "Zeyaam Shahid";

  const defElement = (
    <div className="app-main">
      <header className="app-header">Coming soon</header>
      <div>(This website is under development ;) )</div>
    </div>
  );

  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
          <div className="gradient-3"></div>
          <div className="gradient-4"></div>
          {/* <div className="gradient-5"></div> */}
        </div>
        <Routes>
          <Route path="/" element={defElement} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
