import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";
import { projects, type Project } from "../data/projects";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-24 md:top-32 h-[85vh] flex items-start"
      style={{ marginTop: index * 28 }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-ink p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 origin-top overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div
            className="flex flex-col gap-3 sm:gap-4"
            style={{ width: "40%" }}
          >
            <img
              src={project.col1Image1}
              alt={`${project.name} detail 1`}
              loading="lazy"
              className="w-full flex-1 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} detail 2`}
              loading="lazy"
              className="w-full flex-1 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={project.col2Image}
              alt={`${project.name} full view`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {projects.length === 0 ? (
          <p className="text-[#D7E2EA]/60 text-center py-20 uppercase tracking-widest">
            No projects yet -- add your first one in src/data/projects.ts
          </p>
        ) : (
          projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              total={projects.length}
            />
          ))
        )}
      </div>
    </section>
  );
}
