import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NewPlaces from "./pages/NewPlaces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-place" element={<NewPlaces />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
