import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RegisterForm } from "./pages/RegisterForm";
import { LoginForm } from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import UsersTable from "./components/UsersTable";
import InfluencersTable from "./components/InfluencersTable";
import DashboardCards from "./components/DashboardCards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardCards />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="influencers" element={<InfluencersTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
