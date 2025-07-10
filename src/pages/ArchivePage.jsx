import SidebarComponent from "../components/SidebarComponent";
import TitleComponent from "../components/TitleComponent";
// import "../style/sidebar.css";

const ArchivePage = () => {
  return (
    <section className="container container-dashboard">
      <SidebarComponent />

      <header className="header-content">
        <TitleComponent title={"Archive"} />
      </header>
    </section>
  );
};

export default ArchivePage;
