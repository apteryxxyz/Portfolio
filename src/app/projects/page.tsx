import { ProjectCard } from './project';
import { projects } from './projects';

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 lg:p-20">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
