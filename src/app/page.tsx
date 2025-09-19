"use client";


import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [projectType, setProjectType] = useState<"All" | "Frontend" | "Fullstack" | "AI" | "Datascience">("All");

  // Map type to DATA key
const projectMap = {
  All: DATA.projects,
  Frontend: DATA.projects.filter((p: any) =>
    Array.isArray(p.type)
      ? p.type.map((t: string) => t.toLowerCase()).includes("frontend")
      : p.type?.toLowerCase() === "frontend"
  ),
  Fullstack: DATA.projects.filter((p: any) =>
    Array.isArray(p.type)
      ? p.type.map((t: string) => t.toLowerCase()).includes("fullstack")
      : p.type?.toLowerCase() === "fullstack"
  ),
  AI: DATA.projects.filter((p: any) =>
    Array.isArray(p.type)
      ? p.type.map((t: string) => t.toLowerCase()).includes("AI")
      : p.type?.toLowerCase() === "AI"
  ),
  Datascience: DATA.projects.filter((p: any) =>
    Array.isArray(p.type)
      ? p.type.map((t: string) => t.toLowerCase()).includes(" Datascience")
      : p.type?.toLowerCase() === "Datascience"
  ),
};

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="21, Indian, Data Scientist & AI Engineer"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>


      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
                {/* --- Filter Buttons --- */}
                <div className="flex gap-2 justify-center mt-4">
                  {["All",  "Fullstack", "AI",  "Datascience", "Frontend"].map((type) => (
                    <button
                      key={type}
                      className={`px-4 py-1 rounded-lg font-medium transition-colors duration-200
                        ${projectType === type
                          ? "bg-foreground text-background shadow-sm"
                          : "bg-transparent text-foreground hover:bg-muted"}
                        border border-transparent`}
                      onClick={() => setProjectType(type as typeof projectType)}
                      style={{
                        outline: "none",
                        boxShadow: projectType === type ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
          {/* --- Filtered Projects --- */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {(projectMap[projectType] as any[]).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                duration={0.7}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  Permission={project.Permission}
                  credits={project.credits}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
<section id="certifications">
  <div className="space-y-12 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Certifications
          </div>
          <h2 className="text-xl font-bold tracking-tighter sm:text-4xl">
            Professional Achievements
          </h2>
           <p className="text-muted-foreground text-sm md:text-base lg:text-base/relaxed xl:text-lg/relaxed">
 Showcasing my commitment to continuous learning and professional development through industry-recognized certifications.
</p>
        </div>
      </div>
    </BlurFade>
    {/* --- Certification Cards --- */}
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
      {DATA.certifications.map((certification: any, id: number) => (
       <BlurFade
  key={certification.title}
  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
  duration={0.7}
>
  <div className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg bg-card p-0">
    <img 
      src={certification.logoUrl} 
      alt={certification.Issued}
      className="h-60 w-80 object-cover mb-0 rounded-t"
      style={{ background: "#fff" }}
    />
    <div className="px-6 py-4 flex flex-col flex-1">
      <div className="mb-2">
        <h3 className="font-semibold text-sm text-muted-foreground">
          {certification.Issued}
        </h3>
        <p className="text-xs text-muted-foreground">
          {certification.date}
        </p>
      </div>
      <h4 className="font-medium text-base mb-2 leading-tight">
        {certification.title}
      </h4>
      <p className="text-xs text-muted-foreground mb-3">
        {certification.description}
      </p>
      <a 
        href={certification.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline mt-auto"
      >
        View Certificate →
      </a>
    </div>
  </div>
</BlurFade>
      ))}
    </div>
  </div>
</section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
             
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}