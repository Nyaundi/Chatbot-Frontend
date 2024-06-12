import "./App.css";
import Chatbot from "./components/chatbot/Chatbot";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
