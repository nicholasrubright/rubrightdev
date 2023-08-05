export default function SectionLayout(props: SectionLayoutProps) {
  const { children, alter } = props;

  return (
    <section className={`row p-5 ${alter ? "bg-light" : null}`}>
      {children}
    </section>
  );
}

interface SectionLayoutProps {
  children: JSX.Element;
  alter?: boolean;
}
