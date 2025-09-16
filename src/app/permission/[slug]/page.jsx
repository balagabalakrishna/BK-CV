"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/data/resume";
import Image from "next/image";

export default function ProjectDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Find the project by slug from all project arrays
  const allProjects = DATA.projects;

  const foundProject = allProjects.find(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!foundProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">Project not found</h2>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded bg-white text-black hover:bg-white/80 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const hasPermission = foundProject.Permission?.toLowerCase() === "yes";
  const creator = foundProject.credits?.find((credit) => credit.type === "creator");
  const myXSocial = DATA.contact?.social?.X?.url || "#";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white px-0 py-0 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-6xl mx-auto rounded-none border-none shadow-none bg-transparent px-2 py-8 sm:px-8 sm:py-12 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => router.back()}
              className="gap-2 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
            <div className="h-8 w-px bg-white/20" />
            <Badge variant="secondary" className="bg-white/10 text-white">{foundProject.dates}</Badge>
          </div>

          {/* Project Image */}
          {foundProject.image && (
            <div className="relative aspect-video mb-10 rounded-lg overflow-hidden border border-white/10">
              <Image
                src={foundProject.image}
                alt={foundProject.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{foundProject.title}</h1>

          {/* Technologies */}
          {foundProject.technologies && (
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {foundProject.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-white/20 text-white px-3 py-1">{tech}</Badge>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed text-center">
            {foundProject.description}
          </p>

          {/* Disclaimer - Only show if credits exist */}
          
          {/* Permission Restricted Section */}
         {foundProject.Permission?.toLowerCase() === "no" ? (
  <div className="bg- rounded-lg p-6 border ">
              <h2 className="text-xl font-bold mb-4 text-center">Permission Restricted</h2>
              <p className="text-white/80 text-base leading-relaxed text-center mb-4">
                The creator of this template has not given permission to share the code template, 
                and I respect the creator&apos;s decision. I cannot share this current template.
              </p>
              <p className="text-white/80 text-base leading-relaxed text-center">
                If you are interviewing or looking to hire and need to see the code, 
                you can request a repo walkthrough on my{" "}
                <Link 
                  href={myXSocial} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline font-bold text-red-500"
                >
                  X.com
                </Link>.
              </p>
            </div>
          ) : (
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 ">
              <h2 className="text-xl font-bold mb-4 text-center">Open for Work</h2>
              <p className="text-white/80 text-base leading-relaxed text-center">
                If you like my work and are looking to hire me for freelance, frontend, or fullstack projects, 
                I am open to all. Just DM on{" "}
                <Link 
                  href={myXSocial} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline text-red-500 font-bold "
                >
                  X.com
                </Link>
                , I will respond fast.
              </p>
            </div>
          )}

          {/* Project Links */}
          <div className="mt-8 bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 ">
            {foundProject.href && (
              <p className="mb-4 text-base text-center">
                <span className="font-semibold">Deployed Link:</span>{" "}
                <Link 
                  href={foundProject.href} 
                  target="_blank" 
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  {foundProject.href}
                </Link>
              </p>
            )}

            {foundProject.Permission !== "No" && foundProject.links?.find((link) => link.type === "GitHub") && (
              <div className="mt-2 text-base text-center">
                <span className="font-semibold">GitHub Link:</span>{" "}
                <Link 
                  href={foundProject.links.find((link) => link.type === "GitHub")?.href || "#"} 
                  target="_blank" 
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  View Source Code
                </Link>
              </div>
            )}
          </div>

          {/* Additional Links */}
          {foundProject.links &&
            foundProject.links.length > 2 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Additional Links</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {foundProject.links
                    .filter((link) => foundProject.Permission === "No" ? link.type !== "GitHub" : true)
                    .map((link) => {
                      const isMain =
                        link.type === "Website" ||
                        link.type === "GitHub" ||
                        link.type === "Framer";
                    const buttonBg = isMain
                      ? "bg-white text-black hover:bg-white/90" 
                      : "bg-slate-700 text-white hover:bg-slate-600";
                      return (
                        <Button
                          key={link.type}
                          asChild
                          variant="ghost"
                          size="sm"
                          className={`${buttonBg}`}
                        >
                          <Link href={link.href || "#"} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                            <span className="ml-2">{link.type}</span>
                          </Link>
                        </Button>
                      );
                    })}
                </div>
              </div>
            )}

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            <button
              onClick={() => router.back()}
              className="px-8 py-3 rounded bg-white text-black hover:bg-white/90 transition text-base"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition text-base"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}