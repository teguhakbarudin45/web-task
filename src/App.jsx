import ArchivePage from "./pages/ArchivePage";
import DashboardPage from "./pages/DashboardPage";
import TrashPage from "./pages/TrashPage";
import "./style/global.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
