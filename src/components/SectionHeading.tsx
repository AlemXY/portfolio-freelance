type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) => (
  <div className={`section-heading ${centered ? "is-centered" : ""}`}>
    <span className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      {eyebrow}
    </span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);
