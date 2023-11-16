import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Import views */
import Index from "./assets/views";
import Login from "./assets/views/Login";
import Dashboard from "./assets/views/Dashboard";
import ProjectDetail from "./assets/views/ProjectDetail";
import InscriptionProject from "./assets/views/InscriptionProject";
import InscribeForm from "./assets/views/InscribeForm";
import useProjects from "./services/useProjects";
import { useEffect } from "react";

// Datos de prueba para los proyectos
const projects = [
  {
    title: "Desarrollo Web",
    image:
      "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/twj8upse9w68npgkymtb",
    type: "Interno",
    tags: [
      { name: "Desarrollo", background: "#FFA500" },
      { name: "Frontend", background: "#007BFF" },
    ],
    modality: "Remoto",
    location: "Oficinas Centrales",
  },
  {
    title: "Marketing Digital",
    image:
      "https://blog.fundacionjuanxxiii.org/hubfs/shutterstock_1481977220.jpg",
    type: "Interno",
    tags: [
      { name: "Marketing", background: "#FF6347" },
      { name: "Publicidad", background: "#28A745" },
    ],
    modality: "Presencial",
    location: "Agencia de Marketing",
  },
  {
    title: "Diseño Gráfico",
    image:
      "https://1.bp.blogspot.com/_LhaW6FrB6no/S9YfcH5kB0I/AAAAAAAAAC4/bVDqqFKbRW4/s1600/AT7.jpg",
    type: "Interno",
    tags: [
      { name: "Diseño", background: "#FF69B4" },
      { name: "Creatividad", background: "#6F42C1" },
    ],
    modality: "Híbrido",
    location: "Estudio de Diseño",
  },
  {
    title: "Gestión de Proyectos",
    image:
      "https://1.bp.blogspot.com/_LhaW6FrB6no/S9YfcH5kB0I/AAAAAAAAAC4/bVDqqFKbRW4/s1600/AT7.jpg",
    type: "Interno",
    tags: [
      { name: "Gestión", background: "#FFA500" },
      { name: "Proyectos", background: "#007BFF" },
    ],
    modality: "Presencial",
    location: "Sala de Reuniones",
  },
  {
    title: "Desarrollo Móvil",
    image:
      "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/twj8upse9w68npgkymtb",
    type: "Externo",
    tags: [
      { name: "Desarrollo", background: "#FFA500" },
      { name: "Mobile", background: "#007BFF" },
    ],
    modality: "Remoto",
    location: "Cliente Externo",
  },
  {
    title: "Redes Sociales",
    image:
      "https://blog.fundacionjuanxxiii.org/hubfs/shutterstock_1481977220.jpg",
    type: "Externo",
    tags: [
      { name: "Marketing", background: "#FF6347" },
      { name: "Social Media", background: "#28A745" },
    ],
    modality: "Presencial",
    location: "Agencia de Marketing",
  },
  {
    title: "Diseño de Producto",
    image:
      "https://1.bp.blogspot.com/_LhaW6FrB6no/S9YfcH5kB0I/AAAAAAAAAC4/bVDqqFKbRW4/s1600/AT7.jpg",
    type: "Externo",
    tags: [
      { name: "Diseño", background: "#FF69B4" },
      { name: "Producto", background: "#6F42C1" },
    ],
    modality: "Presencial",
    location: "Oficina de Diseño",
  },
  {
    title: "Consultoría Empresarial",
    image:
      "https://blog.fundacionjuanxxiii.org/hubfs/shutterstock_1481977220.jpg",
    type: "Externo",
    tags: [
      { name: "Consultoría", background: "#FFA500" },
      { name: "Empresarial", background: "#007BFF" },
    ],
    modality: "Remoto",
    location: "Cliente Empresarial",
  },
];

function App() {
  const { setProjects } = useProjects();
  

  useEffect(
    () => {
      setProjects(projects);
      localStorage.setItem("projects", JSON.stringify(projects));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/inscription-project" element={<InscriptionProject />} />
          <Route path="/inscription-form" element={<InscribeForm />} />
          {/* Rutas para proyectos */}
          {/*{projects.map((project, index) => (
            <Route
              key={index}
              path={`/project/${project.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              element={<ProjectDetail project={project} />}
            />
              ))}*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
