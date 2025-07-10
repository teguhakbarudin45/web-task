import SidebarComponent from "./components/SidebarComponent";
import ArchivePage from "./pages/ArchivePage";
import DashboardPage from "./pages/DashboardPage";
import "./style/global.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
