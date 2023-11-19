import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Import views */
import Index from "./assets/views";
import Login from "./assets/views/Login";
import Dashboard from "./assets/views/Dashboard";
import ProjectDetail from "./assets/views/ProjectDetail";
import InscriptionCE from "./assets/views/InscriptionCE";
import InscriptionProject from "./assets/views/InscriptionProject";
import InscribeForm from "./assets/views/InscribeForm";
import useProjects from "./services/useProjects";
import ProjectsUser from "./assets/views/ProjectsUser";
import { useEffect } from "react";

// Datos de prueba para los proyectos
const projects = [
  {
    uid: "9472058136",
    title: "Desarrollo Web",
    description:
      "Proyecto interno de desarrollo web en oficinas centrales. Este proyecto implica la creación y mantenimiento de aplicaciones web modernas y atractivas. El equipo trabajará de manera remota para asegurar una colaboración eficiente y eficaz. ¡Únete a nosotros y forma parte de nuestro equipo de desarrollo!",
    startDate: "2023-11-20",
    contactEmail: "desarrollo.web@example.com",
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
    uid: "8642095172",
    title: "Marketing Digital",
    description:
      "Proyecto interno de marketing digital en agencia. Si te apasiona el mundo del marketing y la publicidad, esta es tu oportunidad para formar parte de nuestro equipo creativo. Trabajaremos en estrategias digitales innovadoras y campañas publicitarias impactantes. ¡Únete a nosotros y llevemos juntos nuestro marketing al siguiente nivel!",
    startDate: "2023-11-25",
    contactEmail: "marketing.digital@example.com",
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
    uid: "1958730246",
    title: "Diseño Gráfico",
    description:
      "Proyecto interno de diseño gráfico en estudio. Únete a nuestro equipo creativo y trabaja en proyectos de diseño emocionantes. Nos especializamos en la creación de contenido visual atractivo y único. La modalidad de trabajo es híbrida, permitiéndote equilibrar tu tiempo entre la oficina y el trabajo remoto. ¡Esperamos que te unas a nosotros y aportes tu creatividad al equipo!",
    startDate: "2023-12-01",
    contactEmail: "diseno.grafico@example.com",
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
    uid: "2309461857",
    title: "Gestión de Proyectos",
    description:
      "Proyecto interno de gestión de proyectos en sala de reuniones. Buscamos profesionales apasionados por la gestión eficiente de proyectos. Si tienes experiencia en liderar equipos y coordinar actividades, ¡queremos conocerte! La modalidad de trabajo es presencial, y trabajarás en nuestra sala de reuniones colaborativa. ¡Únete a nosotros y haz que cada proyecto sea un éxito!",
    startDate: "2023-12-05",
    contactEmail: "gestion.proyectos@example.com",
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
    uid: "5901238746",
    title: "Desarrollo Móvil",
    description:
      "Proyecto externo de desarrollo móvil para cliente externo. Trabaja de manera remota en emocionantes proyectos de desarrollo móvil. Colabora con nuestro equipo y contribuye al éxito de nuestras aplicaciones móviles. ¡Únete a nosotros y forma parte de un equipo dinámico y orientado a resultados!",
    startDate: "2023-12-10",
    contactEmail: "desarrollo.movil@example.com",
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
    uid: "1098347652",
    title: "Redes Sociales",
    description:
      "Proyecto externo de redes sociales en agencia. Únete a nuestro equipo creativo y trabaja en estrategias de redes sociales para clientes diversos. Si eres apasionado por las redes sociales y la creación de contenido atractivo, ¡queremos conocerte! La modalidad de trabajo es presencial en nuestra agencia de marketing. ¡Esperamos tu contribución creativa!",
    startDate: "2023-12-15",
    contactEmail: "redes.sociales@example.com",
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
    uid: "7865021943",
    title: "Diseño de Producto",
    description:
      "Proyecto externo de diseño de producto en oficina de diseño. Únete a nuestro equipo de diseño y trabaja en proyectos emocionantes. Nos especializamos en la creación de productos innovadores y estéticamente agradables. La modalidad de trabajo es presencial en nuestra oficina de diseño. ¡Te invitamos a formar parte de nuestro equipo creativo!",
    startDate: "2023-12-20",
    contactEmail: "diseno.producto@example.com",
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
    uid: "4023158796",
    title: "Consultoría Empresarial",
    description:
      "Proyecto externo de consultoría empresarial para cliente empresarial. Únete a nuestro equipo de consultores y trabaja de manera remota en proyectos desafiantes. Buscamos profesionales con experiencia en asesorar a empresas y mejorar su rendimiento. La modalidad de trabajo es remota, permitiéndote colaborar con clientes empresariales desde cualquier ubicación. ¡Te invitamos a formar parte de nuestro equipo de consultoría y hacer una diferencia en el mundo empresarial!",
    startDate: "2023-12-25",
    contactEmail: "consultoria.empresarial@example.com",
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
          <Route path="/inscription-ce" element={<InscriptionCE />} />
          <Route path="/inscription-project" element={<InscriptionProject />} />
          <Route path="/inscription-form" element={<InscribeForm />} />
          <Route path="/dashboard/projects-actives" element={<ProjectsUser />} />
          <Route path="/dashboard/projects-finished" element={<ProjectsUser />} />
          {/* Rutas para proyectos */}

          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/project/${project.uid
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              element={<ProjectDetail project={project.uid} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
