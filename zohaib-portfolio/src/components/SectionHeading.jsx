export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  highlight,
}) {
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div
      className={`flex flex-col gap-3 max-w-2xl mb-12 ${alignClass}`}
      data-aos="fade-up"
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-fg">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-muted text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
