import Header from '../components/header/header';
import Footer from '../components/footer/Footer';
import InputSearch from '../components/input-search/InputSearch';
import Dropdown from '../components/dropdown-buttons/Dropdown';

function ProjectsSearchView() {
    return (
      <>
        <Header />
        <h1 className="text-center text-3xl mt-5">Proyectos</h1>
        <div className="mx-44 my-10 flex flex-col">
          <InputSearch />
          <div className="mt-5 flex w-full flex-row justify-around">
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
        </div>
        <Footer />
      </>
    );
}

export default ProjectsSearchView;