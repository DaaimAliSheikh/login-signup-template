import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';


function App() {

 
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      
    </Routes>
  </Router>
  );
}

export default App;
