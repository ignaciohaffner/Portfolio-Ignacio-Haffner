import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Navbar />
      <MainPage />
    </Router>
  );
}

export default App;
