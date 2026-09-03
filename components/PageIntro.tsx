type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
};

export default function PageIntro({ eyebrow, title, body }: Props) {
  return (
    <header className="site-shell pb-10 pt-14 sm:pt-20">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h1 className="max-w-[14ch] text-[clamp(2.4rem,6vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.05em]">
        {title}
      </h1>
      {body ? <p className="mt-6 max-w-[36rem] text-[1.05rem] leading-7 text-ink-soft">{body}</p> : null}
    </header>
  );
}
