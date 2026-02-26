import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import DailyLog from "./pages/DailyLog";

function App() {
  return (
    <BrowserRouter>
      <header className="codec-header">
        HEAVYQUEST
      </header>

      <nav className="codec-nav">
        <NavLink to="/" end className="codec-nav-link">
          DASHBOARD
        </NavLink>
        <NavLink to="/history" className="codec-nav-link">
          HISTORY
        </NavLink>
        <NavLink to="/daily" className="codec-nav-link">
          DAILY LOG
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/daily" element={<DailyLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;