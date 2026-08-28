import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/lib/content';

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title="Things I've built lately"
            description="A mix of client products, side projects and open source. Every one shipped to real people."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 100} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
