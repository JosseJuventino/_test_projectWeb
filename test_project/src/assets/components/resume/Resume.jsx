import ResumeCircles from "./resumeCircles";
import ProfileName from "./ProfileName";
function Resume() {
  return (
    <>
      <div className="container mt-10 flex flex-col md:flex-row justify-around items-center">
        <ProfileName />
        <div className="flex items-center flex-row text-center">
          <ResumeCircles hours={150} text="Horas internas" />
          <ResumeCircles hours={0} text="Horas externas" />
        </div>
      </div>
    </>
  );
}

export default Resume;
