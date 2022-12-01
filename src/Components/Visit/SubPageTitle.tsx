interface SectionTitleProp {
  title?: string;
  fontSize?: string;
}

export default function SubPagesTitle(
  { title, fontSize }: SectionTitleProp = { title: "", fontSize: "22" }
) {
  return (
    <div className="section-title-pos">
      <span className={`section-title-${fontSize ?? 22}`}>{title}</span>
    </div>
  );
}
