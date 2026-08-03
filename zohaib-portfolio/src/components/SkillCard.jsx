"use client";

const colorMap = {
  primary: "bg-primary",
  accent: "bg-primary/70",
  gold: "bg-primary/50",
};

export default function SkillCard({ title, icon: Icon, skills, color = "primary", delay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      className="card-elevated rounded-xl p-5 card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-3">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-fg/90 font-medium">{s.name}</span>
              <span className="font-mono text-xs text-muted font-semibold">{s.level}%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${colorMap[color] || "bg-primary"}`}
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
