type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className = "",
  titleClassName = "",
}: Props) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        className={`max-w-[18ch] text-[clamp(2.1rem,4.6vw,4.35rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink ${titleClassName}`}
      >
        {title}
      </h2>
      {body ? (
        <div className={`mt-6 max-w-[38rem] text-[1.05rem] leading-7 text-ink-soft ${align === "center" ? "mx-auto" : ""}`}>
          {body}
        </div>
      ) : null}
    </div>
  );
}
