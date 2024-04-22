import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const { user } = useAuth();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Dashboard /> : <Index />} />
      </Routes>
    </Router>
  );
}

export default App;
