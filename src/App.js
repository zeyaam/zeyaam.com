import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  document.title = "Zeyaam Shahid";
  const defElement = (
    <header className="App-header">
      Coming soon
    </header>
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={defElement}/>
      </Routes>
    </div>
  );
}

export default App;
