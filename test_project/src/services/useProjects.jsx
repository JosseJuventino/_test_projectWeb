import { create } from "zustand";

const useProjects = create((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),
  editProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? updatedProject : project
      ),
    })),
}));

export default useProjects;
