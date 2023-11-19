import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

function ProjectDetail() {
    return (
      <>
      <div className="font-primary bg-background-primary ">
          <Header isLoggedIn={true} />
          <Footer />
      </div>
      </>
    );
  }
  
  export default ProjectDetail;
  