"use client";

import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiNestjs, SiMongodb, SiMysql, SiRedis,
  SiDocker, SiTailwindcss, SiSass, SiExpress,
  SiGithubactions, SiGit, SiPython, SiSwagger,
  SiJsonwebtokens, SiPostman, SiMui, SiLinux,
  SiGo, SiAmazon,
} from "react-icons/si";

const techs = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, label: "Next.js", color: null },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { Icon: SiExpress, label: "Express", color: null },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiRedis, label: "Redis", color: "#DC382D" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiSass, label: "SASS", color: "#CC6699" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiGithubactions, label: "GH Actions", color: "#2088FF" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiSwagger, label: "Swagger", color: "#85EA2D" },
  { Icon: SiJsonwebtokens, label: "JWT", color: null },
  { Icon: SiPostman, label: "Postman", color: "#FF6C37" },
  { Icon: SiMui, label: "Material UI", color: "#007FFF" },
  { Icon: SiLinux, label: "Linux", color: null },
  { Icon: SiGo, label: "Go", color: "#00ADD8" },
  { Icon: SiAmazon, label: "AWS", color: "#FF9900" },
  { Icon: null, label: "Ollama", color: null },
  { Icon: null, label: "GPT4All", color: null },
  { Icon: null, label: "Java", color: null },
];

export default function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="relative py-6 mask-fade-edges overflow-hidden">
      <div className="flex gap-4 animate-marquee w-max">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 bg-surface whitespace-nowrap shrink-0"
          >
            {t.Icon ? (
              <t.Icon size={18} style={t.color ? { color: t.color } : { color: "currentColor" }} />
            ) : (
              <span className="text-xs font-bold text-primary">AI</span>
            )}
            <span className="text-sm text-muted font-medium">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
