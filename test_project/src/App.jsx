import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Import views */
import Index from "./assets/views";
import Login from "./assets/views/Login";
import Dashboard from "./assets/views/Dashboard";

/** Definiendo las rutas del proyecto */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
