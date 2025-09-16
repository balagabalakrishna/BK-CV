import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  Permission?: string;
  credits?: any[]; // <-- add this
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  Permission,
  credits, // <-- add this
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap  items-start gap-1">
            {links.map((link, idx) => {
  const hasCredits = !!credits && credits.length > 0;
  const isSpecial =
    link.type === "GitHub" ||
    link.type === "Framer" ||
    link.type === "Source";
  const isMain =
    link.type === "Website" ||
    link.type === "GitHub" ||
    link.type === "Framer";
  const buttonBg = isMain
    ? "bg-white text-black hover:bg-gray-100"
    : "bg-muted text-foreground hover:bg-foreground/10";

  if (!hasCredits || link.type === "Website") {
    return (
      <a
        key={idx}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex gap-2 px-2 py-1 text-[10px] rounded ${buttonBg} transition`}
      >
        {link.icon}
        <span>{link.type}</span>
      </a>
    );
  }
  if (hasCredits && isSpecial) {
    const slug = title.replace(/\s+/g, "-").toLowerCase();
    return (
      <Link
        key={idx}
        href={`/permission/${slug}?slug=${slug}` || "#"}
        className={`flex gap-2 px-2 py-1 text-[10px] rounded ${buttonBg} transition`}
      >
        {link.icon}
        <span>{link.type}</span>
      </Link>
    );
  }
  return (
    <a
      key={idx}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 px-2 py-1 text-[10px] rounded ${buttonBg} transition`}
    >
      {link.icon}
      <span>{link.type}</span>
    </a>
  );
})}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}